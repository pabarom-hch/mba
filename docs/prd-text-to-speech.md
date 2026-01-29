# PRD: Text-to-Speech for Lesson Audio

## Overview
Add AI-powered text-to-speech capability to the CEO Learning Platform, allowing users to listen to lessons as high-quality audio. Audio will be pre-generated using ElevenLabs and stored in Supabase Storage for instant playback.

## Goals
1. **Accessibility**: Enable learning for users who prefer audio or have visual impairments
2. **Flexibility**: Allow users to learn while commuting, exercising, or multitasking
3. **Engagement**: Increase lesson completion rates with an alternative consumption method

## Technical Approach

### Architecture
```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Generation     │     │   Supabase   │     │    Webapp       │
│  Script (1x)    │────▶│   Storage    │────▶│  Audio Player   │
│  ElevenLabs API │     │  /audio/*    │     │  in Lessons     │
└─────────────────┘     └──────────────┘     └─────────────────┘
```

### Components

#### 1. Audio Generation Script (`scripts/generate-audio.ts`)
- Fetch all lessons from database
- Strip markdown formatting, keep plain text
- Call ElevenLabs API for each lesson
- Upload MP3 to Supabase Storage
- Update lesson record with `audio_url`

#### 2. Supabase Storage Bucket
- Bucket name: `lesson-audio`
- Path format: `{curriculum}/{quarter|phase}/{week|module}/{lesson-slug}.mp3`
- Public read access for authenticated users

#### 3. Database Schema Update
- Add `audio_url` column to `lessons` table
- Add `audio_duration_seconds` column for playback UI

#### 4. Audio Player Component (`components/lesson/AudioPlayer.tsx`)
- Play/pause button
- Progress bar with seek functionality
- Playback speed control (0.75x, 1x, 1.25x, 1.5x, 2x)
- Time display (current / total)
- Volume control
- Keyboard shortcuts (space = play/pause, arrows = seek)

#### 5. Lesson Viewer Integration
- Show audio player at top of lesson content
- Persist playback position in localStorage
- Optional: auto-scroll content to match audio position (future)

## ElevenLabs Configuration

### Voice Selection
- **Primary Voice**: "Adam" (clear, professional male voice) or "Rachel" (clear female voice)
- **Model**: `eleven_multilingual_v2` (highest quality)
- **Settings**:
  - Stability: 0.5 (balanced)
  - Similarity boost: 0.75

### Content Processing
Before sending to ElevenLabs:
1. Remove markdown syntax (headers, links, bold, etc.)
2. Convert tables to readable format
3. Add pauses for section breaks
4. Handle code blocks appropriately (skip or summarize)

## Database Changes

```sql
ALTER TABLE lessons
ADD COLUMN audio_url text,
ADD COLUMN audio_duration_seconds integer;
```

## Cost Estimate

| Item | Calculation | Cost |
|------|-------------|------|
| 364 lessons × ~5,000 chars avg | ~1,820,000 characters | ~$50-100 |
| Supabase Storage | ~500MB audio files | Free tier |
| **Total one-time cost** | | **~$50-100** |

## Implementation Phases

### Phase 1: Infrastructure (30 min)
- [ ] Create Supabase Storage bucket
- [ ] Add database columns for audio
- [ ] Set up ElevenLabs API key as environment variable

### Phase 2: Audio Player Component (1 hour)
- [ ] Build AudioPlayer component with controls
- [ ] Add playback speed selector
- [ ] Implement keyboard shortcuts
- [ ] Style to match dark theme

### Phase 3: Lesson Integration (30 min)
- [ ] Add AudioPlayer to LessonViewer
- [ ] Show loading state while audio loads
- [ ] Handle lessons without audio gracefully

### Phase 4: Audio Generation Script (1 hour)
- [ ] Create markdown-to-plain-text converter
- [ ] Build batch generation script with rate limiting
- [ ] Add progress tracking and resume capability
- [ ] Upload to Supabase Storage

### Phase 5: Generate All Audio (async)
- [ ] Run generation script for all lessons
- [ ] Verify audio quality spot-checks
- [ ] Update lesson records with audio URLs

## Success Metrics
- Audio player loads in < 500ms
- 95%+ of lessons have audio generated
- User engagement: track audio play events

## Future Enhancements
- Synchronized text highlighting during playback
- Download audio for offline listening
- Per-section audio (listen to specific parts)
- Voice preference setting (male/female)
- Background playback on mobile

## Security
- ElevenLabs API key stored in environment variables only
- Audio files accessible only to authenticated users (RLS)
- No user data sent to ElevenLabs (only lesson content)
