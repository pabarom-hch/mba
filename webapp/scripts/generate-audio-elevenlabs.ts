/**
 * Audio Generation Script for CEO Learning Platform (ElevenLabs)
 *
 * This script generates audio files for all lessons using ElevenLabs TTS API
 * and uploads them to Supabase Storage.
 *
 * Prerequisites:
 * - ELEVENLABS_API_KEY environment variable
 * - SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables
 *
 * Usage:
 * npx tsx scripts/generate-audio-elevenlabs.ts [--dry-run] [--lesson-id <id>] [--limit <n>]
 */

import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

// Configuration
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ElevenLabs voice configuration
const VOICE_ID = "goT3UYdM9bhm0n2lmKQx"; // Edward voice
const MODEL_ID = "eleven_multilingual_v2";
const VOICE_SETTINGS = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.0,
  use_speaker_boost: true,
};

// Rate limiting
const REQUESTS_PER_MINUTE = 10;
const DELAY_MS = 60000 / REQUESTS_PER_MINUTE;

interface Lesson {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  week_id: string | null;
  module_id: string | null;
  audio_url: string | null;
}

/**
 * Strip markdown formatting and prepare text for TTS
 */
function markdownToPlainText(markdown: string): string {
  let text = markdown;

  // Remove code blocks (skip them entirely)
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`[^`]+`/g, "");

  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Remove markdown headers but keep the text
  text = text.replace(/^#{1,6}\s+/gm, "");

  // Remove bold/italic markers
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/__([^_]+)__/g, "$1");
  text = text.replace(/_([^_]+)_/g, "$1");

  // Remove links but keep link text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Remove images
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "");

  // Remove blockquotes marker
  text = text.replace(/^>\s+/gm, "");

  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, "");

  // Convert bullet points to spoken format
  text = text.replace(/^[-*+]\s+/gm, "• ");

  // Convert numbered lists
  text = text.replace(/^\d+\.\s+/gm, "");

  // Remove table formatting (simplify tables)
  text = text.replace(/\|/g, " ");
  text = text.replace(/^[-:\s|]+$/gm, "");

  // Clean up extra whitespace
  text = text.replace(/\n{3,}/g, "\n\n");
  text = text.trim();

  // Add pauses for better TTS
  text = text.replace(/\n\n/g, "\n\n... ");

  return text;
}

const MAX_CHARS_PER_REQUEST = 9500; // ElevenLabs limit is 10K, use 9.5K for safety

/**
 * Split text into chunks that fit within ElevenLabs' character limit
 * Tries to split at paragraph/sentence boundaries
 */
function splitTextIntoChunks(text: string): string[] {
  const chunks: string[] = [];

  if (text.length <= MAX_CHARS_PER_REQUEST) {
    return [text];
  }

  // Split by paragraphs first
  const paragraphs = text.split(/\n\n/);
  let currentChunk = "";

  for (const paragraph of paragraphs) {
    if (currentChunk.length + paragraph.length + 2 <= MAX_CHARS_PER_REQUEST) {
      currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
    } else {
      // Current chunk is full, save it
      if (currentChunk) {
        chunks.push(currentChunk);
      }

      // If single paragraph is too long, split by sentences
      if (paragraph.length > MAX_CHARS_PER_REQUEST) {
        const sentences = paragraph.match(/[^.!?]+[.!?]+/g) || [paragraph];
        currentChunk = "";

        for (const sentence of sentences) {
          if (currentChunk.length + sentence.length <= MAX_CHARS_PER_REQUEST) {
            currentChunk += sentence;
          } else {
            if (currentChunk) {
              chunks.push(currentChunk);
            }
            currentChunk = sentence;
          }
        }
      } else {
        currentChunk = paragraph;
      }
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

/**
 * Generate audio chunk using ElevenLabs API
 */
async function generateAudioChunk(text: string): Promise<Buffer> {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: VOICE_SETTINGS,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error: ${response.status} - ${error}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Generate audio for full text, handling chunking if needed
 */
async function generateAudio(text: string): Promise<Buffer> {
  const chunks = splitTextIntoChunks(text);

  if (chunks.length === 1) {
    return generateAudioChunk(chunks[0]);
  }

  console.log(`    Splitting into ${chunks.length} chunks...`);

  const audioBuffers: Buffer[] = [];

  for (let i = 0; i < chunks.length; i++) {
    console.log(`    Processing chunk ${i + 1}/${chunks.length} (${chunks[i].length} chars)...`);
    const buffer = await generateAudioChunk(chunks[i]);
    audioBuffers.push(buffer);

    // Rate limiting between chunks
    if (i < chunks.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // Concatenate MP3 buffers (simple concatenation works for MP3)
  return Buffer.concat(audioBuffers);
}

/**
 * Estimate audio duration from text length
 */
function estimateAudioDuration(textLength: number): number {
  // Approximate: ~150 words per minute, ~5 chars per word
  // So ~750 chars per minute, ~12.5 chars per second
  const estimatedSeconds = Math.round(textLength / 12.5);
  return estimatedSeconds;
}

/**
 * Upload audio to Supabase Storage
 */
async function uploadToStorage(
  supabase: ReturnType<typeof createClient>,
  lesson: Lesson,
  audioBuffer: Buffer
): Promise<string> {
  // Determine path based on curriculum type
  let path: string;
  if (lesson.week_id) {
    path = `mentor/${lesson.slug}.mp3`;
  } else if (lesson.module_id) {
    path = `mba/${lesson.slug}.mp3`;
  } else {
    path = `other/${lesson.slug}.mp3`;
  }

  const { error } = await supabase.storage
    .from("lesson-audio")
    .upload(path, audioBuffer, {
      contentType: "audio/mpeg",
      upsert: true,
    });

  if (error) {
    throw new Error(`Storage upload error: ${error.message}`);
  }

  // Get public URL
  const { data } = supabase.storage.from("lesson-audio").getPublicUrl(path);
  return data.publicUrl;
}

/**
 * Update lesson record with audio URL
 */
async function updateLessonAudio(
  supabase: ReturnType<typeof createClient>,
  lessonId: string,
  audioUrl: string,
  durationSeconds: number
): Promise<void> {
  const { error } = await supabase
    .from("lessons")
    .update({
      audio_url: audioUrl,
      audio_duration_seconds: durationSeconds,
    })
    .eq("id", lessonId);

  if (error) {
    throw new Error(`Database update error: ${error.message}`);
  }
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Main function
 */
async function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const lessonIdIndex = args.indexOf("--lesson-id");
  const lessonId = lessonIdIndex !== -1 ? args[lessonIdIndex + 1] : null;
  const limitIndex = args.indexOf("--limit");
  const limit = limitIndex !== -1 ? parseInt(args[limitIndex + 1]) : null;

  // Validate environment
  if (!ELEVENLABS_API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY environment variable is required");
    process.exit(1);
  }
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error(
      "Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are required"
    );
    process.exit(1);
  }

  console.log("=".repeat(60));
  console.log("CEO Learning Platform - Audio Generation Script");
  console.log("=".repeat(60));
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Provider: ElevenLabs`);
  console.log(`Voice: Edward (${VOICE_ID})`);
  console.log(`Model: ${MODEL_ID}`);
  if (lessonId) console.log(`Specific lesson: ${lessonId}`);
  if (limit) console.log(`Limit: ${limit} lessons`);
  console.log("=".repeat(60));

  // Initialize Supabase client with service role key
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  // Fetch lessons
  let query = supabase
    .from("lessons")
    .select("id, title, slug, content, week_id, module_id, audio_url")
    .not("content", "is", null);

  if (lessonId) {
    query = query.eq("id", lessonId);
  } else {
    // Only fetch lessons without audio
    query = query.is("audio_url", null);
  }

  query = query.order("id");

  if (limit) {
    query = query.limit(limit);
  }

  const { data: lessons, error } = await query;

  if (error) {
    console.error("Error fetching lessons:", error.message);
    process.exit(1);
  }

  if (!lessons || lessons.length === 0) {
    console.log("No lessons found to process.");
    process.exit(0);
  }

  console.log(`Found ${lessons.length} lessons to process\n`);

  // Process stats
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  let totalChars = 0;

  // Process each lesson
  for (let i = 0; i < lessons.length; i++) {
    const lesson = lessons[i] as Lesson;
    const progress = `[${i + 1}/${lessons.length}]`;

    console.log(`${progress} Processing: ${lesson.title}`);

    if (!lesson.content) {
      console.log(`  Skipped: No content`);
      skipped++;
      continue;
    }

    // Convert markdown to plain text
    const plainText = markdownToPlainText(lesson.content);
    const charCount = plainText.length;
    totalChars += charCount;

    console.log(`  Characters: ${charCount.toLocaleString()}`);

    if (dryRun) {
      console.log(`  [DRY RUN] Would generate audio`);
      processed++;
      continue;
    }

    try {
      // Generate audio
      console.log(`  Generating audio...`);
      const audioBuffer = await generateAudio(plainText);
      const durationSeconds = estimateAudioDuration(charCount);

      console.log(
        `  Audio size: ${(audioBuffer.length / 1024).toFixed(1)} KB`
      );
      console.log(`  Estimated duration: ${Math.floor(durationSeconds / 60)}m ${durationSeconds % 60}s`);

      // Upload to storage
      console.log(`  Uploading to storage...`);
      const audioUrl = await uploadToStorage(supabase, lesson, audioBuffer);
      console.log(`  URL: ${audioUrl}`);

      // Update database
      console.log(`  Updating database...`);
      await updateLessonAudio(supabase, lesson.id, audioUrl, durationSeconds);

      console.log(`  Done!`);
      processed++;

      // Rate limiting
      if (i < lessons.length - 1) {
        console.log(`  Waiting ${DELAY_MS / 1000}s for rate limit...`);
        await sleep(DELAY_MS);
      }
    } catch (err) {
      console.error(`  Error: ${(err as Error).message}`);
      errors++;
    }

    console.log("");
  }

  // Summary
  console.log("=".repeat(60));
  console.log("Summary");
  console.log("=".repeat(60));
  console.log(`Processed: ${processed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total characters: ${totalChars.toLocaleString()}`);
  console.log(
    `Estimated cost: $${((totalChars / 1000) * 0.03).toFixed(2)} (at $0.03/1K chars)`
  );
  console.log("=".repeat(60));
}

main().catch(console.error);
