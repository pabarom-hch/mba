# PRD: Nexus Case Studies - Phase 2 Implementation

> Product Requirements Document for completing the Nexus case study integration

---

## Overview

### Current State (Phase 1 - Complete)

| Component | Status | Details |
|-----------|--------|---------|
| Database Schema | Done | `case_study_datasets`, `case_study_exercises`, `case_study_submissions` tables |
| Lesson Records | Done | 7 lessons imported (1 topic + 6 case studies) |
| Dataset Storage | Done | 5 Nexus datasets stored as JSONB |
| Phase Mapping | Done | Case studies linked to relevant MBA modules |
| Content Files | Done | Markdown files in `/cases/nexus/` |

### Phase 2 Goals

1. **Full Content Integration** - Import complete case study markdown content
2. **Cases Hub UI** - Dedicated section for browsing case studies
3. **Dataset Viewer** - Interactive component for exploring data
4. **Exercise Tracking** - Track student responses and progress
5. **Simulation Components** - Interactive exercises with real-time calculations

---

## Feature 1: Full Case Study Content Import

### Description
Import the full markdown content from case study files into the `lessons.content` field so they render in the existing LessonViewer component.

### Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Parse markdown from `/cases/nexus/case-studies/*.md` | P0 | Use existing import scripts |
| Extract learning objectives, key concepts | P1 | Populate JSONB fields |
| Link to related datasets | P1 | Add `related_datasets` field or use exercises |
| Preserve table formatting | P0 | Critical for case exhibits |

### Technical Approach
- Create script: `scripts/import-case-content.ts`
- Read markdown files, extract front matter
- Update existing lesson records with content

### Acceptance Criteria
- [ ] All 7 case study lessons have full content
- [ ] Tables render correctly in LessonViewer
- [ ] Learning objectives display in sidebar

---

## Feature 2: Cases Hub (`/cases`)

### Description
A dedicated dashboard section for browsing and accessing case studies, separate from the linear curriculum flow.

### Routes

```
/cases                    → Cases hub landing page
/cases/nexus              → Nexus collection overview
/cases/nexus/[slug]       → Individual case study (uses LessonViewer)
/cases/nexus/data         → Dataset explorer
/cases/nexus/simulations  → Simulation exercises
```

### UI Components

#### Cases Hub Landing (`/cases`)
```
┌─────────────────────────────────────────────────────────┐
│  Case Studies                                           │
│  Real business scenarios for applied learning           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   NEXUS     │  │  EXTERNAL   │  │  SYNTHETIC  │     │
│  │  6 cases    │  │  (future)   │  │  (future)   │     │
│  │  5 datasets │  │             │  │             │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                         │
│  Recently Added                                         │
│  ├── Nexus: Business Turnaround Advisory               │
│  ├── Nexus: Stakeholder Negotiation in Crisis          │
│  └── Nexus: Resource Optimization                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Nexus Collection (`/cases/nexus`)
```
┌─────────────────────────────────────────────────────────┐
│  Nexus Case Studies                                     │
│  Real data from a professional services firm            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Case Studies                    │  Datasets            │
│  ┌─────────────────────────────┐ │  ┌────────────────┐  │
│  │ Miller Heiman Methodology   │ │  │ Financial Data │  │
│  │ Phase 0 · 60 min · ★★☆     │ │  │ Sales Pipeline │  │
│  └─────────────────────────────┘ │  │ Utilization    │  │
│  ┌─────────────────────────────┐ │  │ Rate Cards     │  │
│  │ Consulting Firm Economics   │ │  │ Turnaround     │  │
│  │ Phase 2 · 60 min · ★★☆     │ │  └────────────────┘  │
│  └─────────────────────────────┘ │                      │
│  ...                             │  Simulations         │
│                                  │  ┌────────────────┐  │
│                                  │  │ Blue Sheet     │  │
│                                  │  │ Financial Model│  │
│                                  │  │ Utilization    │  │
│                                  │  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Cases hub landing page | P0 | Grid of case collections |
| Nexus collection page | P0 | List cases, datasets, simulations |
| Case study page | P0 | Reuse LessonViewer component |
| Progress tracking | P1 | Show completion status |
| Filtering/search | P2 | By phase, difficulty, topic |
| Mobile responsive | P0 | Card-based layout |

### Files to Create
```
webapp/src/app/(dashboard)/cases/
├── page.tsx                      # Hub landing
├── layout.tsx                    # Cases-specific layout
└── nexus/
    ├── page.tsx                  # Nexus collection
    ├── [slug]/page.tsx           # Individual case (LessonViewer)
    ├── data/page.tsx             # Dataset explorer
    └── simulations/page.tsx      # Simulations list
```

### Acceptance Criteria
- [ ] `/cases` route shows all case collections
- [ ] `/cases/nexus` shows all Nexus cases with metadata
- [ ] Case studies render with full LessonViewer features
- [ ] Navigation between cases works
- [ ] Mobile responsive

---

## Feature 3: Dataset Viewer Component

### Description
Interactive component for exploring JSONB datasets with tables, charts, and filtering.

### UI Design
```
┌─────────────────────────────────────────────────────────┐
│  Financial Snapshots & Budgets                          │
│  8 records · Last updated: Feb 15, 2026                 │
├─────────────────────────────────────────────────────────┤
│  [Table] [Chart] [JSON]                    [Download]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Account          │ Revenue  │ Margin │ Period   │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ Alpha Government │ $45,000  │ 21.1%  │ 2025-10  │   │
│  │ Alpha Government │ $48,000  │ 24.6%  │ 2025-11  │   │
│  │ Beta Healthcare  │ $125,000 │ 22.4%  │ 2025-10  │   │
│  │ ...              │          │        │          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Related Case Studies:                                  │
│  └── Consulting Firm Unit Economics                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| `DatasetViewer` | Main container with tabs |
| `DatasetTable` | Sortable, filterable table view |
| `DatasetChart` | Simple visualizations (bar, line) |
| `DatasetJSON` | Raw JSON with syntax highlighting |
| `DatasetDownload` | Export to CSV/JSON |

### Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Table view with sorting | P0 | Default view |
| Basic charts (bar/line) | P1 | Using recharts or similar |
| JSON view | P2 | For technical users |
| CSV download | P1 | For spreadsheet analysis |
| Responsive tables | P0 | Use existing ResponsiveTable |

### Technical Notes
- Query datasets from `case_study_datasets` table
- Use React Query for data fetching
- Consider client-side only (no SSR for large datasets)

### Acceptance Criteria
- [ ] Datasets render in sortable table
- [ ] At least one chart type works
- [ ] Download to CSV works
- [ ] Links to related case studies

---

## Feature 4: Exercise Tracking

### Description
Track student responses to case study exercises, enabling feedback and progress measurement.

### Database Schema (Already Created)

```sql
-- case_study_exercises (link exercises to lessons/datasets)
-- case_study_submissions (track student work)
```

### UI Components

#### Exercise Card (within case study)
```
┌─────────────────────────────────────────────────────────┐
│  Exercise 1: Margin Analysis                    [Save]  │
├─────────────────────────────────────────────────────────┤
│  Calculate the blended margin across all engagements.   │
│  Which engagement type has the highest profitability?   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Your Response:                                   │   │
│  │                                                  │   │
│  │ [                                              ] │   │
│  │ [                                              ] │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Show Hint]                          [Check Solution]  │
└─────────────────────────────────────────────────────────┘
```

### Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Free-text response fields | P0 | Basic exercise input |
| Auto-save responses | P0 | Use existing debounced save pattern |
| Show/hide hints | P1 | Optional help |
| View solution (after attempt) | P1 | Learning feedback |
| Numeric input validation | P2 | For calculation exercises |

### Data Model

```typescript
interface CaseStudyExercise {
  id: string;
  lesson_id: string;
  dataset_id?: string;
  title: string;
  exercise_type: 'analysis' | 'calculation' | 'strategy' | 'simulation' | 'discussion';
  instructions: string;
  hints?: string[];
  solution?: string | object;
  difficulty_level: 1 | 2 | 3 | 4 | 5;
  estimated_minutes: number;
}

interface CaseStudySubmission {
  id: string;
  user_id: string;
  exercise_id: string;
  submission_data: Record<string, any>;
  submitted_at: Date;
  score?: number;
  feedback?: string;
}
```

### Acceptance Criteria
- [ ] Exercises render within case studies
- [ ] Responses save to database
- [ ] Hints toggle works
- [ ] Solutions viewable after submission
- [ ] Progress persists across sessions

---

## Feature 5: Interactive Simulations

### Description
Build interactive components for the simulation exercises (Blue Sheet Builder, Financial Modeling, Utilization Optimizer).

### Priority Simulations

| Simulation | Complexity | MVP Scope |
|------------|------------|-----------|
| Blue Sheet Builder | Medium | Form-based input with structured output |
| Financial Modeling | High | Spreadsheet-like with calculations |
| Utilization Optimizer | Medium | Sliders with real-time impact display |

### Blue Sheet Builder (P1)

```
┌─────────────────────────────────────────────────────────┐
│  Blue Sheet: Strategic Opportunity Analysis            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Single Sales Objective                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │ By [DATE], gain approval from [DECISION-MAKER]  │   │
│  │ to award a $[VALUE] contract for [SERVICES].    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Buying Influences                                      │
│  ┌──────────────┬──────────────┬──────────────────┐   │
│  │ Role         │ Name/Title   │ Stance (1-5)     │   │
│  ├──────────────┼──────────────┼──────────────────┤   │
│  │ Economic     │ [          ] │ ○○○○○            │   │
│  │ User         │ [          ] │ ○○○○○            │   │
│  │ Technical    │ [          ] │ ○○○○○            │   │
│  │ Coach        │ [          ] │ ○○○○○            │   │
│  └──────────────┴──────────────┴──────────────────┘   │
│                                                         │
│  Red Flags                      Strengths               │
│  ┌────────────────────┐        ┌────────────────────┐  │
│  │ + Add red flag     │        │ + Add strength     │  │
│  └────────────────────┘        └────────────────────┘  │
│                                                         │
│                              [Save Draft] [Export PDF]  │
└─────────────────────────────────────────────────────────┘
```

### Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Blue Sheet form | P1 | Structured input |
| Save/load drafts | P1 | Persist work |
| Export to PDF | P2 | Shareable output |
| Financial calc engine | P2 | For financial modeling |
| Real-time visualization | P2 | For utilization optimizer |

### Acceptance Criteria
- [ ] Blue Sheet Builder functional with all fields
- [ ] Data persists to `case_study_submissions`
- [ ] At least one simulation complete

---

## Implementation Timeline

### Sprint 1 (Week 1-2): Foundation
- [ ] Import full case study content to lessons
- [ ] Create `/cases` route structure
- [ ] Cases hub landing page
- [ ] Nexus collection page

### Sprint 2 (Week 3-4): Dataset Viewer
- [ ] DatasetViewer component
- [ ] Table view with sorting
- [ ] Basic chart integration
- [ ] CSV download

### Sprint 3 (Week 5-6): Exercise Tracking
- [ ] Exercise card component
- [ ] Submission tracking
- [ ] Hints and solutions
- [ ] Progress indicators

### Sprint 4 (Week 7-8): Simulations
- [ ] Blue Sheet Builder
- [ ] Basic financial modeling
- [ ] Polish and testing

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Case study completion rate | >60% | `case_study_submissions` / enrolled users |
| Exercise engagement | >3 per case | Avg submissions per case study |
| Dataset exploration | >40% | Users who view datasets |
| Simulation completion | >50% | Users who complete at least one |

---

## Technical Considerations

### Performance
- Lazy load datasets (don't fetch until needed)
- Paginate large tables
- Consider client-side rendering for interactive components

### Accessibility
- Keyboard navigation for all inputs
- Screen reader support for tables
- Color-blind friendly charts

### Mobile
- Stacked cards for case list
- Horizontal scroll for wide tables
- Full-screen mode for simulations

---

## Dependencies

| Dependency | Purpose | Status |
|------------|---------|--------|
| `recharts` | Chart visualizations | To install |
| `react-table` | Advanced table features | Consider |
| `jspdf` | PDF export | To install |
| `papaparse` | CSV export | To install |

---

## Open Questions

1. **Grading**: Should exercises have automated grading or manual review?
2. **Collaboration**: Should students be able to share/compare solutions?
3. **AI Feedback**: Could we use AI to provide feedback on free-text responses?
4. **CEO Mentor Integration**: How do simulations connect to quarterly mentor themes?

---

*Document created: 2026-02-15*
*Last updated: 2026-02-15*
*Author: Claude Code*
