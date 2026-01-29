# MBA Curriculum Webapp - Database Schema Design

## Overview

This schema supports both the Executive MBA curriculum (44 weeks, phase-based) and the CEO Mentor curriculum (52 weeks, quarter-based) in a unified data model.

---

## Core Principles

1. **Unified lesson model** - Both curricula use the same `lessons` table with curriculum-specific metadata
2. **Flexible hierarchy** - Phases/Modules (MBA) and Quarters/Weeks (Mentor) are separate but link to common lessons
3. **Rich progress tracking** - Per-user, per-lesson with completion states and time tracking
4. **Content versioning** - Store content with version numbers for future updates
5. **Reflection-first** - First-class support for journaling and reflection responses

---

## Tables

### 1. `curricula`
Top-level curriculum definitions.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `slug` | text | Unique identifier (`mba`, `mentor`) |
| `name` | text | Display name |
| `description` | text | Overview description |
| `total_weeks` | int | Duration (44 for MBA, 52 for Mentor) |
| `created_at` | timestamptz | Creation timestamp |

```sql
create table curricula (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  total_weeks int not null,
  created_at timestamptz default now()
);
```

---

### 2. `phases` (MBA-specific)
The 10 phases of the MBA curriculum.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `curriculum_id` | uuid | FK to curricula |
| `number` | int | Phase number (0-9) |
| `name` | text | Phase name |
| `description` | text | Phase overview |
| `duration_weeks` | int | Number of weeks |
| `sort_order` | int | Display order |

```sql
create table phases (
  id uuid primary key default gen_random_uuid(),
  curriculum_id uuid references curricula(id) on delete cascade,
  number int not null,
  name text not null,
  description text,
  duration_weeks int not null,
  sort_order int not null,
  unique(curriculum_id, number)
);
```

---

### 3. `modules` (MBA-specific)
Modules within phases (e.g., "Financial Accounting", "Corporate Finance").

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `phase_id` | uuid | FK to phases |
| `number` | int | Module number within phase |
| `name` | text | Module name |
| `slug` | text | URL-friendly identifier |
| `description` | text | Module overview |
| `learning_objectives` | jsonb | Array of objectives |
| `estimated_hours` | numeric | Total time estimate |
| `sort_order` | int | Display order |

```sql
create table modules (
  id uuid primary key default gen_random_uuid(),
  phase_id uuid references phases(id) on delete cascade,
  number int not null,
  name text not null,
  slug text not null,
  description text,
  learning_objectives jsonb default '[]',
  estimated_hours numeric,
  sort_order int not null,
  unique(phase_id, number)
);
```

---

### 4. `quarters` (Mentor-specific)
The 4 quarters of the CEO Mentor curriculum.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `curriculum_id` | uuid | FK to curricula |
| `number` | int | Quarter number (1-4) |
| `name` | text | Quarter name (e.g., "THINK") |
| `theme` | text | Quarter theme |
| `description` | text | Quarter overview |
| `weeks_start` | int | Starting week number |
| `weeks_end` | int | Ending week number |

```sql
create table quarters (
  id uuid primary key default gen_random_uuid(),
  curriculum_id uuid references curricula(id) on delete cascade,
  number int not null,
  name text not null,
  theme text,
  description text,
  weeks_start int not null,
  weeks_end int not null,
  unique(curriculum_id, number)
);
```

---

### 5. `mentors`
The 8 mentors in the CEO curriculum.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `slug` | text | URL-friendly identifier |
| `name` | text | Full name |
| `title` | text | Brief descriptor |
| `bio` | text | Biography markdown |
| `philosophy` | text | Core philosophy summary |
| `key_works` | jsonb | Array of book/work references |
| `image_url` | text | Profile image URL |

```sql
create table mentors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  title text,
  bio text,
  philosophy text,
  key_works jsonb default '[]',
  image_url text
);
```

---

### 6. `weeks` (Mentor-specific)
Weekly structure for the mentor curriculum.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `quarter_id` | uuid | FK to quarters |
| `mentor_id` | uuid | FK to mentors (primary mentor for week) |
| `number` | int | Week number (1-52) |
| `title` | text | Week title |
| `theme` | text | Week theme/focus |
| `overview` | text | Week overview markdown |
| `reading_assignments` | jsonb | Array of reading assignments |
| `application_exercises` | jsonb | Array of exercises |

```sql
create table weeks (
  id uuid primary key default gen_random_uuid(),
  quarter_id uuid references quarters(id) on delete cascade,
  mentor_id uuid references mentors(id),
  number int not null,
  title text not null,
  theme text,
  overview text,
  reading_assignments jsonb default '[]',
  application_exercises jsonb default '[]',
  unique(quarter_id, number)
);
```

---

### 7. `lessons` (Unified)
The core content table - works for both curricula.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `curriculum_id` | uuid | FK to curricula |
| `module_id` | uuid | FK to modules (nullable, MBA only) |
| `week_id` | uuid | FK to weeks (nullable, Mentor only) |
| `type` | text | `topic`, `case_study`, `assessment`, `daily_lesson`, `ritual` |
| `number` | int | Order within parent |
| `title` | text | Lesson title |
| `slug` | text | URL-friendly identifier |
| `content` | text | Full markdown content |
| `summary` | text | Brief summary for cards/previews |
| `duration_minutes` | int | Estimated time to complete |
| `difficulty` | text | `foundational`, `intermediate`, `advanced` |
| `learning_objectives` | jsonb | Array of objectives |
| `key_concepts` | jsonb | Array of concept tags |
| `reflection_questions` | jsonb | Array of reflection prompts |
| `exercises` | jsonb | Array of exercise definitions |
| `further_reading` | jsonb | Array of reading references |
| `source_file` | text | Original markdown file path |
| `version` | int | Content version for updates |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |

```sql
create table lessons (
  id uuid primary key default gen_random_uuid(),
  curriculum_id uuid references curricula(id) on delete cascade,
  module_id uuid references modules(id) on delete cascade,
  week_id uuid references weeks(id) on delete cascade,
  type text not null check (type in ('topic', 'case_study', 'assessment', 'daily_lesson', 'ritual', 'principle')),
  number int not null,
  title text not null,
  slug text not null,
  content text,
  summary text,
  duration_minutes int,
  difficulty text check (difficulty in ('foundational', 'intermediate', 'advanced')),
  learning_objectives jsonb default '[]',
  key_concepts jsonb default '[]',
  reflection_questions jsonb default '[]',
  exercises jsonb default '[]',
  further_reading jsonb default '[]',
  source_file text,
  version int default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  -- Ensure lesson belongs to exactly one parent type
  constraint lesson_parent_check check (
    (module_id is not null and week_id is null) or
    (module_id is null and week_id is not null) or
    (module_id is null and week_id is null and type in ('ritual', 'principle'))
  )
);

create index idx_lessons_module on lessons(module_id) where module_id is not null;
create index idx_lessons_week on lessons(week_id) where week_id is not null;
create index idx_lessons_type on lessons(type);
```

---

### 8. `lesson_cross_references`
Links between related lessons across both curricula.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `source_lesson_id` | uuid | FK to lessons |
| `target_lesson_id` | uuid | FK to lessons |
| `relationship` | text | Type of relationship |
| `description` | text | Why they're related |

```sql
create table lesson_cross_references (
  id uuid primary key default gen_random_uuid(),
  source_lesson_id uuid references lessons(id) on delete cascade,
  target_lesson_id uuid references lessons(id) on delete cascade,
  relationship text not null check (relationship in ('prerequisite', 'extends', 'applies', 'contrasts', 'see_also')),
  description text,
  unique(source_lesson_id, target_lesson_id)
);
```

---

### 9. `user_profiles`
Extended user data beyond Supabase auth.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key, matches auth.users.id |
| `display_name` | text | User's display name |
| `avatar_url` | text | Profile image |
| `timezone` | text | User's timezone |
| `daily_reminder_time` | time | When to send daily reminders |
| `preferences` | jsonb | UI preferences, notification settings |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |

```sql
create table user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  timezone text default 'UTC',
  daily_reminder_time time,
  preferences jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

### 10. `user_curriculum_enrollments`
Tracks which curricula a user is enrolled in.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `curriculum_id` | uuid | FK to curricula |
| `enrolled_at` | timestamptz | When user enrolled |
| `current_week` | int | Current week in curriculum |
| `started_at` | timestamptz | When user started |
| `target_completion_date` | date | Goal completion date |
| `status` | text | `active`, `paused`, `completed` |

```sql
create table user_curriculum_enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  curriculum_id uuid references curricula(id) on delete cascade,
  enrolled_at timestamptz default now(),
  current_week int default 1,
  started_at timestamptz,
  target_completion_date date,
  status text default 'active' check (status in ('active', 'paused', 'completed')),
  unique(user_id, curriculum_id)
);
```

---

### 11. `user_lesson_progress`
Per-user, per-lesson progress tracking.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `lesson_id` | uuid | FK to lessons |
| `status` | text | `not_started`, `in_progress`, `completed` |
| `started_at` | timestamptz | When user started lesson |
| `completed_at` | timestamptz | When user completed lesson |
| `time_spent_seconds` | int | Total time spent |
| `last_position` | jsonb | Scroll position, section, etc. |
| `rating` | int | User's rating (1-5) |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |

```sql
create table user_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete cascade,
  status text default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  started_at timestamptz,
  completed_at timestamptz,
  time_spent_seconds int default 0,
  last_position jsonb default '{}',
  rating int check (rating >= 1 and rating <= 5),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, lesson_id)
);

create index idx_progress_user on user_lesson_progress(user_id);
create index idx_progress_lesson on user_lesson_progress(lesson_id);
create index idx_progress_status on user_lesson_progress(status);
```

---

### 12. `user_reflections`
User responses to reflection questions and journal entries.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `lesson_id` | uuid | FK to lessons (nullable for freeform) |
| `question_index` | int | Which reflection question (nullable) |
| `content` | text | The reflection content |
| `type` | text | `reflection`, `morning_ritual`, `evening_ritual`, `freeform` |
| `mood` | text | Optional mood tag |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |

```sql
create table user_reflections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete set null,
  question_index int,
  content text not null,
  type text default 'reflection' check (type in ('reflection', 'morning_ritual', 'evening_ritual', 'freeform', 'exercise')),
  mood text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_reflections_user on user_reflections(user_id);
create index idx_reflections_lesson on user_reflections(lesson_id);
create index idx_reflections_date on user_reflections(created_at);
```

---

### 13. `user_notes`
Personal notes attached to lessons.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `lesson_id` | uuid | FK to lessons |
| `content` | text | Note content (markdown) |
| `highlight_text` | text | Text that was highlighted (optional) |
| `position` | jsonb | Where in the lesson |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |

```sql
create table user_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete cascade,
  content text not null,
  highlight_text text,
  position jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_notes_user on user_notes(user_id);
create index idx_notes_lesson on user_notes(lesson_id);
```

---

### 14. `books`
Reading list management.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `title` | text | Book title |
| `author` | text | Author name(s) |
| `isbn` | text | ISBN if available |
| `description` | text | Brief description |
| `cover_url` | text | Cover image URL |
| `amazon_url` | text | Purchase link |
| `category` | text | Category/genre |

```sql
create table books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text not null,
  isbn text,
  description text,
  cover_url text,
  amazon_url text,
  category text,
  unique(title, author)
);
```

---

### 15. `lesson_books`
Many-to-many relationship between lessons and recommended books.

| Column | Type | Description |
|--------|------|-------------|
| `lesson_id` | uuid | FK to lessons |
| `book_id` | uuid | FK to books |
| `context` | text | Why this book is recommended |
| `priority` | int | Reading priority (1 = essential) |

```sql
create table lesson_books (
  lesson_id uuid references lessons(id) on delete cascade,
  book_id uuid references books(id) on delete cascade,
  context text,
  priority int default 2,
  primary key (lesson_id, book_id)
);
```

---

### 16. `user_books`
User's reading list and progress.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `book_id` | uuid | FK to books |
| `status` | text | `want_to_read`, `reading`, `completed` |
| `rating` | int | User's rating (1-5) |
| `notes` | text | User's notes on the book |
| `started_at` | date | When started reading |
| `completed_at` | date | When finished |

```sql
create table user_books (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  book_id uuid references books(id) on delete cascade,
  status text default 'want_to_read' check (status in ('want_to_read', 'reading', 'completed')),
  rating int check (rating >= 1 and rating <= 5),
  notes text,
  started_at date,
  completed_at date,
  unique(user_id, book_id)
);
```

---

### 17. `daily_streaks`
Track daily engagement streaks.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | FK to user_profiles |
| `date` | date | The date |
| `completed_morning_ritual` | bool | Did morning ritual |
| `completed_evening_ritual` | bool | Did evening ritual |
| `lessons_completed` | int | Count of lessons completed |
| `reflections_written` | int | Count of reflections |
| `time_spent_seconds` | int | Total time spent |

```sql
create table daily_streaks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles(id) on delete cascade,
  date date not null,
  completed_morning_ritual bool default false,
  completed_evening_ritual bool default false,
  lessons_completed int default 0,
  reflections_written int default 0,
  time_spent_seconds int default 0,
  unique(user_id, date)
);

create index idx_streaks_user_date on daily_streaks(user_id, date desc);
```

---

## Views

### Current Progress Summary
```sql
create view user_progress_summary as
select
  uce.user_id,
  uce.curriculum_id,
  c.name as curriculum_name,
  uce.status,
  uce.current_week,
  c.total_weeks,
  count(case when ulp.status = 'completed' then 1 end) as lessons_completed,
  count(l.id) as total_lessons,
  round(
    count(case when ulp.status = 'completed' then 1 end)::numeric /
    nullif(count(l.id), 0) * 100,
    1
  ) as completion_percentage
from user_curriculum_enrollments uce
join curricula c on c.id = uce.curriculum_id
left join lessons l on l.curriculum_id = uce.curriculum_id
left join user_lesson_progress ulp on ulp.lesson_id = l.id and ulp.user_id = uce.user_id
group by uce.user_id, uce.curriculum_id, c.name, uce.status, uce.current_week, c.total_weeks;
```

### Today's Focus (Mentor Curriculum)
```sql
create view user_daily_focus as
select
  uce.user_id,
  w.number as week_number,
  w.title as week_title,
  m.name as mentor_name,
  l.id as lesson_id,
  l.title as lesson_title,
  l.summary,
  l.duration_minutes,
  coalesce(ulp.status, 'not_started') as status
from user_curriculum_enrollments uce
join curricula c on c.id = uce.curriculum_id and c.slug = 'mentor'
join quarters q on q.curriculum_id = c.id
join weeks w on w.quarter_id = q.id and w.number = uce.current_week
join mentors m on m.id = w.mentor_id
join lessons l on l.week_id = w.id and l.type = 'daily_lesson'
left join user_lesson_progress ulp on ulp.lesson_id = l.id and ulp.user_id = uce.user_id
where uce.status = 'active'
order by l.number;
```

---

## Row Level Security (RLS)

Enable RLS on all user-related tables:

```sql
-- Enable RLS
alter table user_profiles enable row level security;
alter table user_curriculum_enrollments enable row level security;
alter table user_lesson_progress enable row level security;
alter table user_reflections enable row level security;
alter table user_notes enable row level security;
alter table user_books enable row level security;
alter table daily_streaks enable row level security;

-- Policies: Users can only access their own data
create policy "Users can view own profile"
  on user_profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on user_profiles for update
  using (auth.uid() = id);

create policy "Users can view own enrollments"
  on user_curriculum_enrollments for all
  using (auth.uid() = user_id);

create policy "Users can manage own progress"
  on user_lesson_progress for all
  using (auth.uid() = user_id);

create policy "Users can manage own reflections"
  on user_reflections for all
  using (auth.uid() = user_id);

create policy "Users can manage own notes"
  on user_notes for all
  using (auth.uid() = user_id);

create policy "Users can manage own books"
  on user_books for all
  using (auth.uid() = user_id);

create policy "Users can manage own streaks"
  on daily_streaks for all
  using (auth.uid() = user_id);

-- Public read access to curriculum content
create policy "Anyone can view curricula"
  on curricula for select
  using (true);

create policy "Anyone can view phases"
  on phases for select
  using (true);

create policy "Anyone can view modules"
  on modules for select
  using (true);

create policy "Anyone can view quarters"
  on quarters for select
  using (true);

create policy "Anyone can view weeks"
  on weeks for select
  using (true);

create policy "Anyone can view mentors"
  on mentors for select
  using (true);

create policy "Anyone can view lessons"
  on lessons for select
  using (true);

create policy "Anyone can view books"
  on books for select
  using (true);
```

---

## Functions

### Record lesson progress
```sql
create or replace function record_lesson_progress(
  p_lesson_id uuid,
  p_status text,
  p_time_spent_seconds int default 0
)
returns user_lesson_progress
language plpgsql
security definer
as $$
declare
  v_result user_lesson_progress;
begin
  insert into user_lesson_progress (user_id, lesson_id, status, time_spent_seconds, started_at, completed_at)
  values (
    auth.uid(),
    p_lesson_id,
    p_status,
    p_time_spent_seconds,
    case when p_status != 'not_started' then now() else null end,
    case when p_status = 'completed' then now() else null end
  )
  on conflict (user_id, lesson_id) do update set
    status = excluded.status,
    time_spent_seconds = user_lesson_progress.time_spent_seconds + excluded.time_spent_seconds,
    completed_at = case when excluded.status = 'completed' then now() else user_lesson_progress.completed_at end,
    updated_at = now()
  returning * into v_result;

  return v_result;
end;
$$;
```

### Get streak count
```sql
create or replace function get_user_streak(p_user_id uuid)
returns int
language sql
stable
as $$
  with consecutive_days as (
    select
      date,
      date - (row_number() over (order by date))::int as grp
    from daily_streaks
    where user_id = p_user_id
      and (completed_morning_ritual or completed_evening_ritual or lessons_completed > 0)
    order by date desc
  )
  select count(*)::int
  from consecutive_days
  where grp = (select grp from consecutive_days limit 1);
$$;
```

---

## Sample Data Structure

### Example: MBA Phase
```json
{
  "id": "uuid",
  "curriculum_id": "uuid-mba",
  "number": 0,
  "name": "Consulting Mindset",
  "description": "Build the foundational problem-solving frameworks used by top strategy consultants.",
  "duration_weeks": 2,
  "sort_order": 0
}
```

### Example: Mentor Week
```json
{
  "id": "uuid",
  "quarter_id": "uuid-q1",
  "mentor_id": "uuid-munger",
  "number": 1,
  "title": "The Latticework",
  "theme": "Mental Models Foundation",
  "reading_assignments": [
    {"book": "Poor Charlie's Almanack", "chapters": "Talk One"}
  ],
  "application_exercises": [
    "Map your current mental model inventory",
    "Identify your 3 most-used models"
  ]
}
```

### Example: Lesson
```json
{
  "id": "uuid",
  "curriculum_id": "uuid-mentor",
  "week_id": "uuid-week-1",
  "type": "daily_lesson",
  "number": 1,
  "title": "The Danger of Single Models",
  "slug": "danger-of-single-models",
  "content": "# The Danger of Single Models\n\n> \"To a man with only a hammer...\"",
  "summary": "Why relying on a single mental model leads to predictable failures.",
  "duration_minutes": 10,
  "difficulty": "foundational",
  "learning_objectives": [
    "Understand the 'man with a hammer' syndrome",
    "Identify your dominant mental model",
    "Recognize single-model failures in business"
  ],
  "key_concepts": ["mental models", "cognitive bias", "decision making"],
  "reflection_questions": [
    "What is your dominant professional lens?",
    "When has this lens caused you to miss something important?"
  ],
  "exercises": [
    {
      "title": "Problem Audit",
      "description": "Review your last 5 major decisions...",
      "type": "worksheet"
    }
  ]
}
```

---

## Migration Strategy

To populate this schema from your markdown files:

1. **Parse curriculum structure** from directory layout
2. **Extract frontmatter** (if any) or infer metadata from content
3. **Parse markdown content** into structured sections
4. **Build cross-references** from internal links
5. **Extract book references** from further reading sections

A content migration script would:
```
for each markdown file:
  1. Determine curriculum (mba vs mentor) from path
  2. Determine parent (phase/module or quarter/week) from path
  3. Parse content structure
  4. Extract metadata (objectives, concepts, exercises)
  5. Insert into lessons table
  6. Build cross-reference links
```

---

## Next Steps

1. **Create migration script** to import existing markdown content
2. **Set up Supabase project** with this schema
3. **Build content ingestion pipeline**
4. **Design frontend components** based on this data model
5. **Implement progress tracking** hooks
