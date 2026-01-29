/**
 * Content Migration Script
 *
 * Parses markdown files from the MBA and CEO Mentor curricula and imports them into Supabase.
 *
 * Key design decisions:
 * - Store raw markdown content (preserves all formatting: headers, bold, tables, ASCII diagrams)
 * - Extract structured metadata from content (objectives, exercises, reflection questions)
 * - Handle both curricula with their different hierarchies
 *
 * Usage:
 *   npx tsx scripts/migrate-content.ts
 *
 * Environment variables required:
 *   SUPABASE_URL - Your Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY - Service role key (not anon key, we need admin access)
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// Types
// ============================================================================

interface Curriculum {
  id?: string;
  slug: string;
  name: string;
  description: string;
  total_weeks: number;
}

interface Phase {
  id?: string;
  curriculum_id: string;
  number: number;
  name: string;
  description: string;
  duration_weeks: number;
  sort_order: number;
}

interface Module {
  id?: string;
  phase_id: string;
  number: number;
  name: string;
  slug: string;
  description: string;
  learning_objectives: string[];
  estimated_hours: number | null;
  sort_order: number;
}

interface Quarter {
  id?: string;
  curriculum_id: string;
  number: number;
  name: string;
  theme: string;
  description: string;
  weeks_start: number;
  weeks_end: number;
}

interface Mentor {
  id?: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  key_works: { title: string; description?: string }[];
  image_url: string | null;
}

interface Week {
  id?: string;
  quarter_id: string;
  mentor_id: string | null;
  number: number;
  title: string;
  theme: string;
  overview: string;
  reading_assignments: { book: string; chapters?: string }[];
  application_exercises: string[];
}

interface Lesson {
  id?: string;
  curriculum_id: string;
  module_id: string | null;
  week_id: string | null;
  type: "topic" | "case_study" | "assessment" | "daily_lesson" | "ritual" | "principle";
  number: number;
  title: string;
  slug: string;
  content: string; // Raw markdown - preserves all formatting
  summary: string;
  duration_minutes: number | null;
  difficulty: "foundational" | "intermediate" | "advanced" | null;
  learning_objectives: string[];
  key_concepts: string[];
  reflection_questions: string[];
  exercises: { title: string; description: string; type: string }[];
  further_reading: { title: string; author?: string }[];
  source_file: string;
  version: number;
}

interface Book {
  id?: string;
  title: string;
  author: string;
  description: string | null;
  category: string | null;
}

// ============================================================================
// Configuration
// ============================================================================

const ROOT_DIR = path.resolve(__dirname, "..");
const MBA_DIR = ROOT_DIR;
const MENTOR_DIR = path.join(ROOT_DIR, "ceo-mentor-curriculum");

// Phase metadata (extracted from curriculum structure)
const PHASE_METADATA: Record<
  string,
  { name: string; duration_weeks: number; description: string }
> = {
  "phase-00-consulting-mindset": {
    name: "Consulting Mindset",
    duration_weeks: 2,
    description:
      "Build the foundational problem-solving frameworks used by top strategy consultants.",
  },
  "phase-01-economic-foundations": {
    name: "Economic Foundations",
    duration_weeks: 4,
    description:
      "Master microeconomic and macroeconomic principles that drive business decisions.",
  },
  "phase-02-financial-accounting": {
    name: "Financial Accounting",
    duration_weeks: 5,
    description:
      "Develop fluency in reading, analyzing, and interpreting financial statements.",
  },
  "phase-03-corporate-finance": {
    name: "Corporate Finance",
    duration_weeks: 5,
    description:
      "Learn capital budgeting, valuation, and M&A fundamentals.",
  },
  "phase-04-financial-planning": {
    name: "Financial Planning",
    duration_weeks: 4,
    description:
      "Master personal and corporate financial planning principles.",
  },
  "phase-05-strategic-management": {
    name: "Strategic Management",
    duration_weeks: 6,
    description:
      "Develop strategic thinking and competitive analysis capabilities.",
  },
  "phase-06-marketing": {
    name: "Marketing",
    duration_weeks: 5,
    description:
      "Understand marketing strategy, consumer behavior, and brand building.",
  },
  "phase-07-operations-analytics": {
    name: "Operations & Analytics",
    duration_weeks: 5,
    description:
      "Master operations management, analytics, and supply chain principles.",
  },
  "phase-08-leadership": {
    name: "Leadership & Organization",
    duration_weeks: 4,
    description:
      "Develop leadership skills and organizational behavior understanding.",
  },
  "phase-09-ceo-mastery": {
    name: "CEO Mastery",
    duration_weeks: 4,
    description:
      "Integrate all learning into executive-level decision making.",
  },
};

// Quarter metadata
const QUARTER_METADATA: Record<
  string,
  { name: string; theme: string; weeks_start: number; weeks_end: number }
> = {
  "q1-think": {
    name: "THINK",
    theme: "Mental Models & Decision Making",
    weeks_start: 1,
    weeks_end: 13,
  },
  "q2-build": {
    name: "BUILD",
    theme: "Wealth Creation & Achievement",
    weeks_start: 14,
    weeks_end: 26,
  },
  "q3-be": {
    name: "BE",
    theme: "Character & Personal Mastery",
    weeks_start: 27,
    weeks_end: 39,
  },
  "q4-lead": {
    name: "LEAD",
    theme: "Leadership & Influence",
    weeks_start: 40,
    weeks_end: 52,
  },
};

// Mentor to weeks mapping
const MENTOR_WEEKS: Record<string, number[]> = {
  "charlie-munger": [1, 2, 3, 4, 5, 6],
  "warren-buffett": [7, 8, 9, 10, 11, 12, 13],
  "andrew-carnegie": [14, 15, 16, 17, 18, 19],
  "napoleon-hill": [20, 21, 22, 23, 24, 25, 26],
  "jim-rohn": [27, 28, 29, 30, 31, 32],
  gandhi: [33, 34, 35, 36, 37, 38, 39],
  "nelson-mandela": [40, 41, 42, 43, 44, 45],
  "john-maxwell": [46, 47, 48, 49, 50, 51, 52],
};

// ============================================================================
// Utility Functions
// ============================================================================

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

function extractSummary(content: string): string {
  // Try to find the first paragraph after the title
  const lines = content.split("\n");
  let foundTitle = false;
  let summary = "";

  for (const line of lines) {
    if (line.startsWith("# ")) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() && !line.startsWith("#") && !line.startsWith(">") && !line.startsWith("-")) {
      summary = line.trim();
      break;
    }
  }

  // Limit to ~200 chars
  if (summary.length > 200) {
    summary = summary.substring(0, 197) + "...";
  }

  return summary;
}

function extractSection(content: string, sectionName: string): string {
  const regex = new RegExp(`^##\\s+${sectionName}\\s*$`, "im");
  const match = content.match(regex);
  if (!match) return "";

  const startIndex = match.index! + match[0].length;
  const nextSectionMatch = content.substring(startIndex).match(/^##\s+/m);
  const endIndex = nextSectionMatch
    ? startIndex + nextSectionMatch.index!
    : content.length;

  return content.substring(startIndex, endIndex).trim();
}

function extractListItems(content: string, sectionName: string): string[] {
  const section = extractSection(content, sectionName);
  if (!section) return [];

  const items: string[] = [];
  const lines = section.split("\n");

  for (const line of lines) {
    const match = line.match(/^[\-\*\d\.]+\s+(.+)$/);
    if (match) {
      items.push(match[1].trim());
    }
  }

  return items;
}

function extractReflectionQuestions(content: string): string[] {
  const questions: string[] = [];

  // Look for "Reflection Questions" section
  const section = extractSection(content, "Reflection Questions");
  if (section) {
    const lines = section.split("\n");
    for (const line of lines) {
      const match = line.match(/^\d+\.\s+(.+\?)\s*$/);
      if (match) {
        questions.push(match[1]);
      }
    }
  }

  return questions;
}

function extractExercises(
  content: string
): { title: string; description: string; type: string }[] {
  const exercises: { title: string; description: string; type: string }[] = [];

  // Match ### Exercise headings
  const exerciseRegex = /###\s+Exercise\s*\d*[:\s]*(.+?)(?=\n###|\n##|$)/gis;
  let match;

  while ((match = exerciseRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const titleMatch = fullMatch.match(/###\s+Exercise\s*\d*[:\s]*(.+?)(?:\n|$)/i);
    const title = titleMatch ? titleMatch[1].trim() : "Exercise";

    // Get description (first paragraph after title)
    const descLines = fullMatch.split("\n").slice(1);
    let description = "";
    for (const line of descLines) {
      if (line.trim() && !line.startsWith("#")) {
        description = line.trim();
        break;
      }
    }

    exercises.push({
      title,
      description: description.substring(0, 500),
      type: "worksheet",
    });
  }

  return exercises;
}

function extractKeyConcepts(content: string): string[] {
  const concepts: string[] = [];

  // Look for bold terms in the content
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let match;
  const seen = new Set<string>();

  while ((match = boldRegex.exec(content)) !== null) {
    const concept = match[1].trim().toLowerCase();
    // Filter out common non-concept bold text
    if (
      concept.length > 2 &&
      concept.length < 50 &&
      !concept.includes(":") &&
      !seen.has(concept)
    ) {
      seen.add(concept);
      concepts.push(match[1].trim());
    }
    if (concepts.length >= 10) break;
  }

  return concepts;
}

function extractLearningObjectives(content: string): string[] {
  // Look for "Learning Objectives" or similar sections
  const objectives = extractListItems(content, "Learning Objectives");
  if (objectives.length > 0) return objectives;

  // Also try "What You'll Learn"
  return extractListItems(content, "What You'll Learn");
}

function estimateDuration(content: string): number {
  // Rough estimate: ~200 words per minute reading speed
  const wordCount = content.split(/\s+/).length;
  return Math.max(5, Math.round(wordCount / 200));
}

function extractFurtherReading(
  content: string
): { title: string; author?: string }[] {
  const readings: { title: string; author?: string }[] = [];
  const section = extractSection(content, "Further Reading") ||
    extractSection(content, "Recommended Reading") ||
    extractSection(content, "Reading Assignment");

  if (!section) return readings;

  const lines = section.split("\n");
  for (const line of lines) {
    // Match "**Book Title** by Author" or "- Book Title by Author"
    const match = line.match(
      /(?:\*\*(.+?)\*\*|[\-\*]\s+(.+?))(?:\s+by\s+(.+?))?(?:\s*[-—]|$)/i
    );
    if (match) {
      readings.push({
        title: (match[1] || match[2]).trim(),
        author: match[3]?.trim(),
      });
    }
  }

  return readings.slice(0, 5);
}

// ============================================================================
// Parsers
// ============================================================================

function parseMentorFile(filePath: string): Partial<Mentor> {
  const content = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath, ".md");

  const name = extractTitle(content);
  const bio = extractSection(content, "Biography");
  const philosophy = extractSection(content, "Core Philosophy");

  // Extract key works from Recommended Reading
  const keyWorks: { title: string; description?: string }[] = [];
  const readingSection = extractSection(content, "Recommended Reading");
  if (readingSection) {
    const matches = readingSection.matchAll(/\*\*(.+?)\*\*/g);
    for (const match of matches) {
      keyWorks.push({ title: match[1] });
    }
  }

  return {
    slug: filename,
    name,
    title: extractQuote(content) || "",
    bio,
    philosophy,
    key_works: keyWorks.slice(0, 10),
    image_url: null,
  };
}

function extractQuote(content: string): string {
  const match = content.match(/^>\s+"(.+?)"/m);
  return match ? match[1] : "";
}

function parseWeekFile(
  filePath: string
): { week: Partial<Week>; weekNumber: number } {
  const content = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath, ".md");

  // Extract week number from filename (week-01.md -> 1)
  const weekMatch = filename.match(/week-(\d+)/);
  const weekNumber = weekMatch ? parseInt(weekMatch[1], 10) : 0;

  const title = extractTitle(content);
  const theme =
    content.match(/\*\*Theme:\*\*\s*(.+)$/m)?.[1] ||
    content.match(/Theme:\s*(.+)$/m)?.[1] ||
    "";

  // Extract reading assignments
  const readingSection = extractSection(content, "Reading Assignment");
  const readingAssignments: { book: string; chapters?: string }[] = [];
  if (readingSection) {
    const match = readingSection.match(/\*\*Primary:\*\*\s*(.+?)(?:\n|$)/);
    if (match) {
      readingAssignments.push({ book: match[1].trim() });
    }
  }

  // Extract application exercises
  const appExercises = extractListItems(content, "Application Exercise");

  return {
    weekNumber,
    week: {
      number: weekNumber,
      title: title.replace(/^Week\s+\d+:\s*/i, ""),
      theme,
      overview: content, // Store full markdown for week overview
      reading_assignments: readingAssignments,
      application_exercises: appExercises,
    },
  };
}

function parseDailyLesson(
  filePath: string,
  curriculumId: string
): Partial<Lesson> {
  const content = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath, ".md");
  const relativePath = path.relative(ROOT_DIR, filePath);

  const title = extractTitle(content);

  // Try to extract day number from filename
  // Patterns: day-01-name.md, week-02-day-01-name.md
  const dayMatch = filename.match(/day-(\d+)/);
  const dayNumber = dayMatch ? parseInt(dayMatch[1], 10) : 1;

  return {
    curriculum_id: curriculumId,
    type: "daily_lesson",
    number: dayNumber,
    title,
    slug: slugify(title),
    content, // Raw markdown preserved
    summary: extractSummary(content),
    duration_minutes: estimateDuration(content),
    difficulty: "foundational",
    learning_objectives: extractLearningObjectives(content),
    key_concepts: extractKeyConcepts(content),
    reflection_questions: extractReflectionQuestions(content),
    exercises: extractExercises(content),
    further_reading: extractFurtherReading(content),
    source_file: relativePath,
    version: 1,
  };
}

function parseMbaLesson(
  filePath: string,
  curriculumId: string
): Partial<Lesson> {
  const content = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath, ".md");
  const relativePath = path.relative(ROOT_DIR, filePath);

  const title = extractTitle(content);

  // Determine lesson type
  let type: Lesson["type"] = "topic";
  if (filename === "assessment") {
    type = "assessment";
  } else if (filePath.includes("/cases/")) {
    type = "case_study";
  }

  // Extract lesson number from filename (01-name.md -> 1)
  const numMatch = filename.match(/^(\d+)/);
  const lessonNumber = numMatch ? parseInt(numMatch[1], 10) : 0;

  // Determine difficulty based on phase
  let difficulty: Lesson["difficulty"] = "foundational";
  if (filePath.includes("phase-05") || filePath.includes("phase-06")) {
    difficulty = "intermediate";
  } else if (
    filePath.includes("phase-08") ||
    filePath.includes("phase-09")
  ) {
    difficulty = "advanced";
  }

  return {
    curriculum_id: curriculumId,
    type,
    number: lessonNumber,
    title,
    slug: slugify(title),
    content, // Raw markdown preserved
    summary: extractSummary(content),
    duration_minutes: estimateDuration(content),
    difficulty,
    learning_objectives: extractLearningObjectives(content),
    key_concepts: extractKeyConcepts(content),
    reflection_questions: extractReflectionQuestions(content),
    exercises: extractExercises(content),
    further_reading: extractFurtherReading(content),
    source_file: relativePath,
    version: 1,
  };
}

// ============================================================================
// Directory Scanning
// ============================================================================

function findMbaPhases(): string[] {
  const entries = fs.readdirSync(MBA_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && e.name.startsWith("phase-"))
    .map((e) => e.name)
    .sort();
}

function findModulesInPhase(phaseDir: string): string[] {
  const phasePath = path.join(MBA_DIR, phaseDir);
  const entries = fs.readdirSync(phasePath, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && e.name.startsWith("module-"))
    .map((e) => e.name)
    .sort();
}

function findLessonsInModule(phaseDir: string, moduleDir: string): string[] {
  const modulePath = path.join(MBA_DIR, phaseDir, moduleDir);
  const entries = fs.readdirSync(modulePath, { withFileTypes: true });
  return entries
    .filter(
      (e) =>
        e.isFile() &&
        e.name.endsWith(".md") &&
        e.name !== "README.md"
    )
    .map((e) => e.name)
    .sort();
}

function findCasesInModule(phaseDir: string, moduleDir: string): string[] {
  const casesPath = path.join(MBA_DIR, phaseDir, moduleDir, "cases");
  if (!fs.existsSync(casesPath)) return [];

  const entries = fs.readdirSync(casesPath, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => path.join("cases", e.name))
    .sort();
}

function findMentorQuarters(): string[] {
  const quartersPath = path.join(MENTOR_DIR, "quarters");
  if (!fs.existsSync(quartersPath)) return [];

  const entries = fs.readdirSync(quartersPath, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && e.name.startsWith("q"))
    .map((e) => e.name)
    .sort();
}

function findWeeksInQuarter(quarterDir: string): string[] {
  const quarterPath = path.join(MENTOR_DIR, "quarters", quarterDir);
  const entries = fs.readdirSync(quarterPath, { withFileTypes: true });
  return entries
    .filter(
      (e) =>
        e.isFile() &&
        e.name.startsWith("week-") &&
        e.name.endsWith(".md")
    )
    .map((e) => e.name)
    .sort();
}

function findDailyLessonsInQuarter(quarterDir: string): string[] {
  const lessonsPath = path.join(MENTOR_DIR, "quarters", quarterDir, "lessons");
  if (!fs.existsSync(lessonsPath)) return [];

  const entries = fs.readdirSync(lessonsPath, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();
}

function findMentorFiles(): string[] {
  const mentorsPath = path.join(MENTOR_DIR, "mentors");
  if (!fs.existsSync(mentorsPath)) return [];

  const entries = fs.readdirSync(mentorsPath, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();
}

// ============================================================================
// Database Operations
// ============================================================================

class Migrator {
  private supabase: SupabaseClient;
  private curriculumIds: Record<string, string> = {};
  private phaseIds: Record<string, string> = {};
  private moduleIds: Record<string, string> = {};
  private quarterIds: Record<string, string> = {};
  private weekIds: Record<number, string> = {};
  private mentorIds: Record<string, string> = {};
  private bookIds: Record<string, string> = {};

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async run() {
    console.log("Starting content migration...\n");

    // 1. Create curricula
    await this.createCurricula();

    // 2. Create mentors
    await this.createMentors();

    // 3. Create MBA structure (phases -> modules -> lessons)
    await this.createMbaStructure();

    // 4. Create Mentor structure (quarters -> weeks -> lessons)
    await this.createMentorStructure();

    // 5. Create standalone lessons (rituals, principles)
    await this.createStandaloneLessons();

    console.log("\nMigration complete!");
  }

  private async createCurricula() {
    console.log("Creating curricula...");

    const curricula: Curriculum[] = [
      {
        slug: "mba",
        name: "Executive MBA Curriculum",
        description:
          "A comprehensive 44-week executive education program covering consulting frameworks, economics, finance, strategy, marketing, operations, and leadership.",
        total_weeks: 44,
      },
      {
        slug: "mentor",
        name: "CEO Mentor Curriculum",
        description:
          "A 52-week journey through the wisdom of 8 legendary mentors, organized into 4 quarters: Think, Build, Be, and Lead.",
        total_weeks: 52,
      },
    ];

    for (const curriculum of curricula) {
      const { data, error } = await this.supabase
        .from("curricula")
        .upsert(curriculum, { onConflict: "slug" })
        .select()
        .single();

      if (error) {
        console.error("Error creating curriculum " + curriculum.slug + ":", error);
        continue;
      }

      this.curriculumIds[curriculum.slug] = data.id;
      console.log("  Created curriculum: " + curriculum.name);
    }
  }

  private async createMentors() {
    console.log("\nCreating mentors...");

    const mentorFiles = findMentorFiles();
    for (const filename of mentorFiles) {
      const filePath = path.join(MENTOR_DIR, "mentors", filename);
      const mentorData = parseMentorFile(filePath);

      const { data, error } = await this.supabase
        .from("mentors")
        .upsert(mentorData as Mentor, { onConflict: "slug" })
        .select()
        .single();

      if (error) {
        console.error("Error creating mentor " + mentorData.slug + ":", error);
        continue;
      }

      this.mentorIds[mentorData.slug!] = data.id;
      console.log("  Created mentor: " + mentorData.name);
    }
  }

  private async createMbaStructure() {
    console.log("\nCreating MBA structure...");

    const mbaCurriculumId = this.curriculumIds["mba"];
    const phases = findMbaPhases();

    for (let phaseIndex = 0; phaseIndex < phases.length; phaseIndex++) {
      const phaseDir = phases[phaseIndex];
      const phaseMeta = PHASE_METADATA[phaseDir] || {
        name: phaseDir,
        duration_weeks: 4,
        description: "",
      };

      // Extract phase number from directory name (phase-00-name -> 0)
      const phaseNumMatch = phaseDir.match(/phase-(\d+)/);
      const phaseNumber = phaseNumMatch ? parseInt(phaseNumMatch[1], 10) : phaseIndex;

      // Create phase
      const phase: Partial<Phase> = {
        curriculum_id: mbaCurriculumId,
        number: phaseNumber,
        name: phaseMeta.name,
        description: phaseMeta.description,
        duration_weeks: phaseMeta.duration_weeks,
        sort_order: phaseIndex,
      };

      const { data: phaseData, error: phaseError } = await this.supabase
        .from("phases")
        .upsert(phase as Phase, { onConflict: "curriculum_id,number" })
        .select()
        .single();

      if (phaseError) {
        console.error("Error creating phase " + phaseDir + ":", phaseError);
        continue;
      }

      this.phaseIds[phaseDir] = phaseData.id;
      console.log("  Phase " + phaseNumber + ": " + phaseMeta.name);

      // Create modules
      const modules = findModulesInPhase(phaseDir);
      for (let modIndex = 0; modIndex < modules.length; modIndex++) {
        const moduleDir = modules[modIndex];
        const modulePath = path.join(MBA_DIR, phaseDir, moduleDir);

        // Read README for module description
        const readmePath = path.join(modulePath, "README.md");
        let moduleDescription = "";
        let learningObjectives: string[] = [];
        if (fs.existsSync(readmePath)) {
          const readmeContent = fs.readFileSync(readmePath, "utf-8");
          moduleDescription = extractSummary(readmeContent);
          learningObjectives = extractLearningObjectives(readmeContent);
        }

        // Extract module name and number
        const modNumMatch = moduleDir.match(/module-(\d+)-(.+)/);
        const moduleNumber = modNumMatch
          ? parseInt(modNumMatch[1], 10)
          : modIndex;
        const moduleName = modNumMatch
          ? modNumMatch[2]
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")
          : moduleDir;

        const module: Partial<Module> = {
          phase_id: phaseData.id,
          number: moduleNumber,
          name: moduleName,
          slug: slugify(moduleName),
          description: moduleDescription,
          learning_objectives: learningObjectives,
          estimated_hours: null,
          sort_order: modIndex,
        };

        const { data: moduleData, error: moduleError } = await this.supabase
          .from("modules")
          .upsert(module as Module, { onConflict: "phase_id,number" })
          .select()
          .single();

        if (moduleError) {
          console.error("Error creating module " + moduleDir + ":", moduleError);
          continue;
        }

        this.moduleIds[phaseDir + "/" + moduleDir] = moduleData.id;
        console.log("    Module " + moduleNumber + ": " + moduleName);

        // Create lessons
        const lessonFiles = findLessonsInModule(phaseDir, moduleDir);
        const caseFiles = findCasesInModule(phaseDir, moduleDir);
        const allLessonFiles = [...lessonFiles, ...caseFiles];

        for (const lessonFile of allLessonFiles) {
          const lessonPath = path.join(modulePath, lessonFile);
          const lessonData = parseMbaLesson(lessonPath, mbaCurriculumId);
          lessonData.module_id = moduleData.id;

          const { error: lessonError } = await this.supabase
            .from("lessons")
            .insert({
              ...lessonData,
              module_id: moduleData.id,
            } as Lesson);

          if (lessonError) {
            console.error("Error creating lesson " + lessonFile + ":", lessonError);
            continue;
          }

          // Extract and store books
          if (lessonData.further_reading && lessonData.further_reading.length > 0) {
            await this.createBooks(lessonData.further_reading);
          }
        }

        console.log("      Added " + allLessonFiles.length + " lessons");
      }
    }
  }

  private async createMentorStructure() {
    console.log("\nCreating Mentor curriculum structure...");

    const mentorCurriculumId = this.curriculumIds["mentor"];
    const quarters = findMentorQuarters();

    for (const quarterDir of quarters) {
      const quarterMeta = QUARTER_METADATA[quarterDir];
      if (!quarterMeta) {
        console.log("  Skipping unknown quarter: " + quarterDir);
        continue;
      }

      // Create quarter
      const quarter: Partial<Quarter> = {
        curriculum_id: mentorCurriculumId,
        number: parseInt(quarterDir.charAt(1), 10),
        name: quarterMeta.name,
        theme: quarterMeta.theme,
        description: "Quarter " + quarterDir.charAt(1) + ": " + quarterMeta.name + " - " + quarterMeta.theme,
        weeks_start: quarterMeta.weeks_start,
        weeks_end: quarterMeta.weeks_end,
      };

      const { data: quarterData, error: quarterError } = await this.supabase
        .from("quarters")
        .upsert(quarter as Quarter, { onConflict: "curriculum_id,number" })
        .select()
        .single();

      if (quarterError) {
        console.error("Error creating quarter " + quarterDir + ":", quarterError);
        continue;
      }

      this.quarterIds[quarterDir] = quarterData.id;
      console.log("  Quarter " + quarter.number + ": " + quarterMeta.name);

      // Create weeks
      const weekFiles = findWeeksInQuarter(quarterDir);
      for (const weekFile of weekFiles) {
        const weekPath = path.join(MENTOR_DIR, "quarters", quarterDir, weekFile);
        const { week, weekNumber } = parseWeekFile(weekPath);

        // Find mentor for this week
        let mentorId: string | null = null;
        for (const [mentorSlug, weeks] of Object.entries(MENTOR_WEEKS)) {
          if (weeks.includes(weekNumber)) {
            mentorId = this.mentorIds[mentorSlug] || null;
            break;
          }
        }

        const weekData: Partial<Week> = {
          ...week,
          quarter_id: quarterData.id,
          mentor_id: mentorId,
        };

        const { data: weekResult, error: weekError } = await this.supabase
          .from("weeks")
          .upsert(weekData as Week, { onConflict: "quarter_id,number" })
          .select()
          .single();

        if (weekError) {
          console.error("Error creating week " + weekNumber + ":", weekError);
          continue;
        }

        this.weekIds[weekNumber] = weekResult.id;
        console.log("    Week " + weekNumber + ": " + week.title);
      }

      // Create daily lessons
      const dailyLessons = findDailyLessonsInQuarter(quarterDir);
      let lessonsCreated = 0;

      for (const lessonFile of dailyLessons) {
        const lessonPath = path.join(
          MENTOR_DIR,
          "quarters",
          quarterDir,
          "lessons",
          lessonFile
        );
        const lessonData = parseDailyLesson(lessonPath, mentorCurriculumId);

        // Determine which week this lesson belongs to
        // Patterns: day-01-name.md (Week 1), week-02-day-01-name.md
        const weekMatch = lessonFile.match(/week-(\d+)/);
        let weekNumber: number;

        if (weekMatch) {
          weekNumber = parseInt(weekMatch[1], 10);
        } else {
          // For day-01 style files in week-01 folder, derive from position
          // This is a simplification - in reality we'd need more context
          weekNumber = quarterMeta.weeks_start;
        }

        const weekId = this.weekIds[weekNumber];
        if (!weekId) {
          console.log("      Warning: No week found for " + lessonFile);
          continue;
        }

        lessonData.week_id = weekId;

        const { error: lessonError } = await this.supabase.from("lessons").insert({
          ...lessonData,
          week_id: weekId,
        } as Lesson);

        if (lessonError) {
          console.error("Error creating lesson " + lessonFile + ":", lessonError);
          continue;
        }

        lessonsCreated++;

        // Extract and store books
        if (lessonData.further_reading && lessonData.further_reading.length > 0) {
          await this.createBooks(lessonData.further_reading);
        }
      }

      console.log("    Added " + lessonsCreated + " daily lessons");
    }
  }

  private async createStandaloneLessons() {
    console.log("\nCreating standalone lessons (rituals, principles)...");

    const mentorCurriculumId = this.curriculumIds["mentor"];

    // Daily practice files
    const dailyPracticePath = path.join(MENTOR_DIR, "daily-practice");
    if (fs.existsSync(dailyPracticePath)) {
      const ritualFiles = fs.readdirSync(dailyPracticePath).filter((f) =>
        f.endsWith(".md")
      );

      for (let i = 0; i < ritualFiles.length; i++) {
        const filePath = path.join(dailyPracticePath, ritualFiles[i]);
        const content = fs.readFileSync(filePath, "utf-8");
        const title = extractTitle(content);

        const lesson: Partial<Lesson> = {
          curriculum_id: mentorCurriculumId,
          type: "ritual",
          number: i + 1,
          title,
          slug: slugify(title),
          content,
          summary: extractSummary(content),
          duration_minutes: estimateDuration(content),
          difficulty: null,
          learning_objectives: [],
          key_concepts: [],
          reflection_questions: extractReflectionQuestions(content),
          exercises: [],
          further_reading: [],
          source_file: path.relative(ROOT_DIR, filePath),
          version: 1,
        };

        const { error } = await this.supabase.from("lessons").insert(lesson as Lesson);

        if (error) {
          console.error("Error creating ritual " + ritualFiles[i] + ":", error);
        } else {
          console.log("  Created ritual: " + title);
        }
      }
    }

    // Principles files
    const principlesPath = path.join(MENTOR_DIR, "principles");
    if (fs.existsSync(principlesPath)) {
      const principleFiles = fs.readdirSync(principlesPath).filter((f) =>
        f.endsWith(".md")
      );

      for (let i = 0; i < principleFiles.length; i++) {
        const filePath = path.join(principlesPath, principleFiles[i]);
        const content = fs.readFileSync(filePath, "utf-8");
        const title = extractTitle(content);

        const lesson: Partial<Lesson> = {
          curriculum_id: mentorCurriculumId,
          type: "principle",
          number: i + 1,
          title,
          slug: slugify(title),
          content,
          summary: extractSummary(content),
          duration_minutes: estimateDuration(content),
          difficulty: null,
          learning_objectives: [],
          key_concepts: extractKeyConcepts(content),
          reflection_questions: [],
          exercises: [],
          further_reading: [],
          source_file: path.relative(ROOT_DIR, filePath),
          version: 1,
        };

        const { error } = await this.supabase.from("lessons").insert(lesson as Lesson);

        if (error) {
          console.error("Error creating principle " + principleFiles[i] + ":", error);
        } else {
          console.log("  Created principle: " + title);
        }
      }
    }
  }

  private async createBooks(
    readings: { title: string; author?: string }[]
  ): Promise<void> {
    for (const reading of readings) {
      if (!reading.title) continue;

      const bookKey = reading.title + "|" + (reading.author || "Unknown");
      if (this.bookIds[bookKey]) continue;

      const book: Partial<Book> = {
        title: reading.title,
        author: reading.author || "Unknown",
        description: null,
        category: null,
      };

      const { data, error } = await this.supabase
        .from("books")
        .upsert(book as Book, { onConflict: "title,author" })
        .select()
        .single();

      if (!error && data) {
        this.bookIds[bookKey] = data.id;
      }
    }
  }
}

// ============================================================================
// Main Entry Point
// ============================================================================

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Error: Missing environment variables");
    console.error("Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
    console.error("\nExample:");
    console.error('  export SUPABASE_URL="https://your-project.supabase.co"');
    console.error('  export SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"');
    process.exit(1);
  }

  const migrator = new Migrator(supabaseUrl, supabaseKey);
  await migrator.run();
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
