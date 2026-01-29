# Curriculum Migration Scripts

Scripts to migrate markdown curriculum content into Supabase.

## Setup

1. Install dependencies:
   ```bash
   cd scripts
   npm install
   ```

2. Get your Supabase credentials:
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Go to **Settings** → **API**
   - Copy the **Project URL** and **service_role key** (not the anon key)

3. Set environment variables:
   ```bash
   export SUPABASE_URL="https://your-project.supabase.co"
   export SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
   ```

## Running the Migration

```bash
npm run migrate
```

This will:
1. Create both curricula (MBA and Mentor)
2. Import all 8 mentor profiles
3. Import MBA phases, modules, and lessons
4. Import Mentor quarters, weeks, and daily lessons
5. Import standalone lessons (rituals, principles)
6. Extract and store book references

## What Gets Preserved

The migration script stores **raw markdown content** in the `content` column. This preserves:

- All headers (`#`, `##`, `###`)
- Bold and italic text (`**bold**`, `*italic*`)
- Code blocks (inline and fenced)
- Tables (ASCII and markdown)
- Blockquotes (`>`)
- Lists (ordered and unordered)
- Links and references
- ASCII diagrams
- All original formatting

The frontend will render this markdown using a library like `react-markdown` or `marked`.

## What Gets Extracted

In addition to the raw content, the script extracts structured metadata:

| Field | Extraction Logic |
|-------|-----------------|
| `title` | First `# Heading` in the file |
| `summary` | First paragraph after the title |
| `duration_minutes` | Estimated from word count (~200 wpm) |
| `learning_objectives` | From "## Learning Objectives" section |
| `key_concepts` | Bold terms (`**term**`) found in content |
| `reflection_questions` | From "## Reflection Questions" section |
| `exercises` | From "### Exercise" subsections |
| `further_reading` | From "## Further Reading" or "## Reading Assignment" |

## Re-running the Migration

The script uses **upserts** so it's safe to re-run:
- Existing records are updated (not duplicated)
- New records are inserted
- Content versions can be tracked via the `version` field

## Troubleshooting

### "Missing environment variables"
Make sure both `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set.

### "Error creating lesson"
Check that the database schema is up to date. The migration expects the schema from `webapp-schema-design.md`.

### "Warning: No week found for [file]"
Some daily lessons may have unexpected filenames. The script tries to match patterns like `week-02-day-01-name.md` or `day-01-name.md`.

## Files

- `migrate-content.ts` - Main migration script
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript configuration
