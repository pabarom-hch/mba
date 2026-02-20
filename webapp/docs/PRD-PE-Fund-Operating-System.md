# Product Requirements Document (PRD)
# PE Fund Operating System - Phase 1: Fund Builder & LP Pipeline

**Version:** 2.0
**Last Updated:** 2026-02-20
**Author:** Claude (AI Assistant)
**Status:** Draft - Pending Review

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Problem Statement](#problem-statement)
3. [Goals & Success Metrics](#goals--success-metrics)
4. [User Personas](#user-personas)
5. [Scope](#scope)
6. [Fund Builder Requirements](#fund-builder-requirements)
7. [LP Pipeline Requirements](#lp-pipeline-requirements)
8. [Pipeline Stage Checklists](#pipeline-stage-checklists)
9. [Technical Architecture](#technical-architecture)
10. [Database Schema](#database-schema)
11. [UI/UX Design](#uiux-design)
12. [Sample Data Strategy](#sample-data-strategy)
13. [Future Integrations Plan](#future-integrations-plan)
14. [Implementation Timeline](#implementation-timeline)
15. [Risks & Mitigations](#risks--mitigations)
16. [Appendices](#appendices)

---

## 1. Executive Summary

### What We're Building

A **PE Fund Operating System** integrated into the existing MBA learning platform that provides:

1. **Fund Builder** - Guided, phase-by-phase workflow to build a fund (strategy → launch)
2. **LP Pipeline** - CRM with Kanban board to manage capital raising
3. **Stage Checklists** - Action items ensuring nothing falls through the cracks

This system bridges **education** (Module 29 lessons) with **execution** (real fund management).

### Core Components

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PE FUND OPERATING SYSTEM                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────────────┐         ┌─────────────────────┐           │
│   │    FUND BUILDER     │         │     LP PIPELINE     │           │
│   │   (Guided Setup)    │ ──────► │    (Execution)      │           │
│   │                     │         │                     │           │
│   │ • 8 Phases (0-7)    │         │ • 8 Stages          │           │
│   │ • Question-based    │         │ • Kanban board      │           │
│   │ • Progress tracking │         │ • Stage checklists  │           │
│   │ • Deliverables      │         │ • Activity logging  │           │
│   │ • Module 29 links   │         │ • Metrics           │           │
│   └─────────────────────┘         └─────────────────────┘           │
│              │                              │                        │
│              └──────────────┬───────────────┘                        │
│                             ▼                                        │
│                  ┌─────────────────────┐                            │
│                  │   FUND DATABASE     │                            │
│                  │                     │                            │
│                  │ • Fund terms        │                            │
│                  │ • Contacts/Orgs     │                            │
│                  │ • Opportunities     │                            │
│                  │ • Commitments       │                            │
│                  │ • Activities        │                            │
│                  └─────────────────────┘                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Business Context

The user is learning PE fund formation through Module 29 and intends to launch a real fund focused on acquiring distressed assets (starting with HCH Enterprises). This tool bridges the gap between education and execution by providing both a learning simulation (SAF Partners) and a real operational tool.

---

## 2. Problem Statement

### Current State
- Module 29 teaches fund formation concepts theoretically
- No practical tool to apply learned concepts
- No guided workflow to build a fund step-by-step
- User needs to track real LP relationships as they build a fund
- Existing solutions (Fund Launch 360) are external, not integrated with learning

### Desired State
- Unified platform combining education AND execution
- Guided Fund Builder walks through each step of fund formation
- LP Pipeline enables active capital raising with playbook checklists
- Learn-by-doing with sample data (SAF Partners Fund I)
- Seamlessly transition from practice to real fund management

---

## 3. Goals & Success Metrics

### Primary Goals

| Goal | Description |
|------|-------------|
| **G1** | Provide guided Fund Builder wizard mapping to Module 29 lessons |
| **G2** | Enable LP Pipeline management with 8 PE-standard stages |
| **G3** | Include stage checklists ensuring consistent fundraising execution |
| **G4** | Calculate and display capital raising metrics |
| **G5** | Pre-populate with SAF Partners sample data for learning |
| **G6** | Generate deliverables from Fund Builder answers |

### Success Metrics

| Metric | Target |
|--------|--------|
| Fund Builder phases | 8 phases (0-7) with 40+ questions |
| Pipeline stages | 8 PE-standard stages |
| Stage checklists | 5-8 action items per stage |
| Data entry time | < 2 minutes to add new LP opportunity |
| Pipeline view load time | < 1 second |
| Sample data | 50+ LP contacts with realistic distribution |

---

## 4. User Personas

### Primary Persona: Fund Manager (Single User Initially)

**Name:** Mario (the user)
**Role:** Aspiring GP launching a PE fund
**Goals:**
- Learn fund formation through structured practice
- Build fund thesis and strategy with guidance
- Track real LP relationships
- Execute capital raising with consistency
- Eventually acquire HCH Enterprises

**Needs:**
- Step-by-step Fund Builder to not miss anything
- Visual pipeline to see LP status at a glance
- Checklists ensuring professional follow-through
- Connection between learning (Module 29) and doing

### Future Persona: Team Member (Multi-user)

**Name:** Fund Team Member
**Role:** Associate or analyst supporting capital raise
**Goals:**
- Update LP interactions
- Complete checklist items
- Track follow-up tasks

---

## 5. Scope

### In Scope (Phase 1)

| Component | Feature | Priority |
|-----------|---------|----------|
| **Fund Builder** | 8-phase guided wizard | P0 |
| **Fund Builder** | Question forms with persistence | P0 |
| **Fund Builder** | Progress tracking per phase | P0 |
| **Fund Builder** | Module 29 lesson links | P1 |
| **Fund Builder** | Deliverable generation | P2 |
| **LP Pipeline** | Contact management | P0 |
| **LP Pipeline** | Organization management | P0 |
| **LP Pipeline** | 8-stage Kanban board | P0 |
| **LP Pipeline** | Stage checklists | P0 |
| **LP Pipeline** | Opportunity tracking | P0 |
| **LP Pipeline** | Activity logging | P1 |
| **LP Pipeline** | Pipeline metrics | P1 |
| **Sample Data** | SAF Partners Fund I | P1 |
| **Sample Data** | 50+ LP contacts | P1 |

### Out of Scope (Phase 1)

| Feature | Future Phase |
|---------|--------------|
| Capital calls management | Phase 2 |
| Deal Pipeline | Phase 2 |
| Portfolio Management | Phase 3 |
| Document generation (full LPA, PPM) | Phase 2 |
| LP Portal | Phase 5 |
| Email/Calendar integration | Future |

---

## 6. Fund Builder Requirements

### Overview

The Fund Builder is a guided, phase-by-phase workflow that walks users through building a PE fund. Each phase contains sections with questions, progress tracking, and links to relevant Module 29 lessons.

### Phase Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                      FUND BUILDER PHASES                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PHASE 0: GETTING STARTED                           Progress: ██░░  │
│  ─────────────────────────────────────────────────────────────────  │
│  Prerequisites and commitment assessment                             │
│  • Team readiness assessment                                         │
│  • Time commitment acknowledgment                                    │
│  • Capital requirements overview                                     │
│  • Module 29 overview introduction                                   │
│                                                                      │
│  PHASE 1: STRATEGY & THESIS                         ► Lesson 1      │
│  ─────────────────────────────────────────────────────────────────  │
│  Define your investment thesis and edge                              │
│  Sections:                                                           │
│  • Define Your Investment Thesis                                     │
│  • Building Your Edge (4 quadrants)                                  │
│  • The Three Roles Assessment                                        │
│  • Target Market Definition                                          │
│  • Risk/Control/Return Framework                                     │
│  Deliverable: Investment Thesis One-Pager                           │
│                                                                      │
│  PHASE 2: LEGAL & STRUCTURE                         ► Lesson 2      │
│  ─────────────────────────────────────────────────────────────────  │
│  Fund vehicle, regulatory, and terms                                 │
│  Sections:                                                           │
│  • Fund Vehicle Selection                                            │
│  • Regulatory Pathway (IA/RIA/ERA)                                   │
│  • Fund Terms Definition                                             │
│  • Service Provider Planning                                         │
│  Deliverable: Fund Terms Summary                                    │
│                                                                      │
│  PHASE 3: CAPITAL RAISING PREP                      ► Lesson 3      │
│  ─────────────────────────────────────────────────────────────────  │
│  LP targeting and materials preparation                              │
│  Sections:                                                           │
│  • LP Targeting Strategy (Capital Raising Matrix)                    │
│  • Pitch Materials Planning                                          │
│  • DDQ Preparation                                                   │
│  • Room/Connect/Close Strategy                                       │
│  Deliverable: LP Target List, Pitch Deck Outline                    │
│                                                                      │
│  PHASE 4: FUND LAUNCH PREPARATION                   ► Lesson 4      │
│  ─────────────────────────────────────────────────────────────────  │
│  First close strategy and operations                                 │
│  Sections:                                                           │
│  • First Close Strategy                                              │
│  • Minimum Viable Fund Calculation                                   │
│  • Subscription Process Setup                                        │
│  • Operational Readiness Checklist                                   │
│  Deliverable: First Close Checklist                                 │
│                                                                      │
│  PHASE 5: FUNDRAISING EXECUTION                     ► LP Pipeline   │
│  ─────────────────────────────────────────────────────────────────  │
│  Active capital raising                                              │
│  Sections:                                                           │
│  • Launch LP Pipeline                                                │
│  • Begin Outreach Execution                                          │
│  • Pipeline Management                                               │
│  • Closing Commitments                                               │
│  Action: Opens LP Pipeline tool                                      │
│                                                                      │
│  PHASE 6: GOVERNANCE SETUP                          ► Lesson 5      │
│  ─────────────────────────────────────────────────────────────────  │
│  Fund governance and oversight                                       │
│  Sections:                                                           │
│  • LPAC Formation Planning                                           │
│  • Portfolio Construction Strategy                                   │
│  • Conflict Management Framework                                     │
│  Deliverable: Governance Framework                                  │
│                                                                      │
│  PHASE 7: OPERATIONS & LP RELATIONS                 ► Lesson 6      │
│  ─────────────────────────────────────────────────────────────────  │
│  Ongoing fund management                                             │
│  Sections:                                                           │
│  • Reporting Program Setup                                           │
│  • IR Program Design                                                 │
│  • Fund II Planning                                                  │
│  Deliverable: LP Reporting Template                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Fund Builder Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FB1.1 | User can view all 8 phases with progress indicators | P0 |
| FB1.2 | User can expand/collapse sections within each phase | P0 |
| FB1.3 | Each section contains form questions that save automatically | P0 |
| FB1.4 | Progress bar shows completion percentage per phase | P0 |
| FB1.5 | Completed questions show green checkmark | P0 |
| FB1.6 | Phase tabs allow navigation (can view any phase) | P0 |
| FB1.7 | "Go to lesson" link opens relevant Module 29 content | P1 |
| FB1.8 | "Go to deliverable" button generates output document | P2 |
| FB1.9 | Phase 5 "Go to Pipeline" launches LP Pipeline | P0 |
| FB1.10 | Fund Builder answers pre-populate fund and pipeline data | P1 |

### Sample Questions by Phase

**Phase 1: Strategy & Thesis**
- What types of assets and geographic markets will your fund focus on and why?
- How will your fund create value across its portfolio?
- What background, experience, or insight gives you the edge to lead this strategy?
- Write a one-sentence version of your investment thesis.
- Which of the Building Your Edge quadrants is your primary advantage?
- Which of the Three Roles will you personally fill?

**Phase 2: Legal & Structure**
- What fund vehicle structure will you use? (Delaware LP, LLC, etc.)
- What is your target fund size and hard cap?
- What management fee rate will you charge during investment period?
- What carried interest percentage?
- Will you use European or American waterfall?
- What regulatory pathway applies? (IA, RIA, ERA)

**Phase 3: Capital Raising Prep**
- What LP types will you prioritize? (FoF, Family Office, HNW, etc.)
- What is your target number of LPs?
- How will you generate warm introductions?
- What is your unique value proposition for LPs?

---

## 7. LP Pipeline Requirements

### Pipeline Stages (PE-Standard Naming)

| # | Stage Name | Description | Color |
|---|------------|-------------|-------|
| 1 | **Universe** | Initial LP identification, not yet contacted | `#71717a` (zinc) |
| 2 | **Interested** | Responded positively, wants to learn more | `#f97316` (orange) |
| 3 | **Pitched** | Full pitch delivered, evaluating | `#3b82f6` (blue) |
| 4 | **In DD** | Active due diligence, docs sent | `#8b5cf6` (purple) |
| 5 | **Final Review** | With legal/tax advisors, finalizing | `#eab308` (yellow) |
| 6 | **Committed** | Subscription docs signed | `#22c55e` (green) |
| 7 | **Funded** | Wire received and confirmed | `#14b8a6` (teal) |
| 8 | **Active LP** | Fully onboarded, ongoing relationship | `#10b981` (emerald) |

### LP Pipeline Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| LP1.1 | User can view pipeline as Kanban board with 8 stages | P0 |
| LP1.2 | Each stage column shows opportunity count and total value | P0 |
| LP1.3 | User can drag opportunities between stages | P0 |
| LP1.4 | Moving to new stage triggers stage checklist display | P0 |
| LP1.5 | User can add new opportunity from any view | P0 |
| LP1.6 | Opportunity card shows name, value, and checklist progress | P0 |
| LP1.7 | Click opportunity opens detail drawer/modal | P0 |
| LP1.8 | User can filter pipeline by LP type, date range | P1 |
| LP1.9 | User can switch between Kanban and List view | P1 |
| LP1.10 | User can search opportunities | P1 |

### Contact Management Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| CT1.1 | User can create contact (name, email, phone, title) | P0 |
| CT1.2 | User can associate contact with organization | P0 |
| CT1.3 | User can view contact list with search | P0 |
| CT1.4 | User can edit/delete contacts | P0 |
| CT1.5 | Contact detail shows related opportunities | P1 |

### Organization Management Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| OR1.1 | User can create organization (name, type, AUM) | P0 |
| OR1.2 | Organization types include all LP categories | P0 |
| OR1.3 | User can view organization list with search | P0 |
| OR1.4 | Organization detail shows contacts and opportunities | P1 |

---

## 8. Pipeline Stage Checklists

Each pipeline stage has a checklist of actions. When an opportunity moves to a new stage, the checklist for that stage becomes active. Completion of checklist items is tracked per opportunity.

### Stage 1: Universe

| # | Checklist Item |
|---|----------------|
| 1 | Research LP background and investment criteria |
| 2 | Identify mutual connections for warm introduction |
| 3 | Categorize by LP type (FoF, Family Office, etc.) |
| 4 | Assess fit with fund strategy and size |
| 5 | Add complete contact information |

### Stage 2: Interested

| # | Checklist Item |
|---|----------------|
| 1 | Send teaser / one-pager |
| 2 | Schedule introductory call |
| 3 | Research their recent fund commitments |
| 4 | Prepare customized talking points |
| 5 | Confirm decision-maker involvement |
| 6 | Log initial interest level and potential size |

### Stage 3: Pitched

| # | Checklist Item |
|---|----------------|
| 1 | Deliver full pitch presentation |
| 2 | Send pitch deck and supporting materials |
| 3 | Answer initial questions and objections |
| 4 | Discuss potential commitment size |
| 5 | Identify all decision makers and influencers |
| 6 | Schedule follow-up meeting |
| 7 | Send thank you and meeting summary |

### Stage 4: In DD (Due Diligence)

| # | Checklist Item |
|---|----------------|
| 1 | Send DDQ (Due Diligence Questionnaire) |
| 2 | Provide track record documentation |
| 3 | Schedule due diligence call/meeting |
| 4 | Respond to information requests within 48 hours |
| 5 | Facilitate reference calls |
| 6 | Address specific concerns in writing |
| 7 | Provide data room access (if applicable) |
| 8 | Discuss preliminary terms and special requests |

### Stage 5: Final Review

| # | Checklist Item |
|---|----------------|
| 1 | Send subscription documents |
| 2 | Confirm LP reviewing with legal/tax advisors |
| 3 | Address final terms questions |
| 4 | Negotiate side letter terms (if applicable) |
| 5 | Confirm final commitment amount |
| 6 | Set expected signing date |
| 7 | Prepare closing logistics |

### Stage 6: Committed

| # | Checklist Item |
|---|----------------|
| 1 | Receive signed subscription agreement |
| 2 | Verify accredited investor / qualified purchaser status |
| 3 | Complete KYC/AML verification |
| 4 | Collect W-9 or W-8BEN |
| 5 | Issue capital call notice |
| 6 | Confirm wire instructions sent |

### Stage 7: Funded

| # | Checklist Item |
|---|----------------|
| 1 | Confirm wire received and reconciled |
| 2 | Issue capital account statement |
| 3 | Send welcome letter/package |
| 4 | Add to LP distribution list |
| 5 | Schedule onboarding call |

### Stage 8: Active LP

| # | Checklist Item |
|---|----------------|
| 1 | Complete LP onboarding call |
| 2 | Set up investor portal access |
| 3 | Add to quarterly reporting distribution |
| 4 | Send annual meeting invitation |
| 5 | Document LP preferences and communication style |
| 6 | Begin ongoing relationship management |

### Checklist Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| CK1.1 | Each opportunity has checklist items based on current stage | P0 |
| CK1.2 | User can check/uncheck items | P0 |
| CK1.3 | Checklist completion percentage shown on opportunity card | P0 |
| CK1.4 | Moving to next stage prompts if checklist incomplete | P1 |
| CK1.5 | Checklist items configurable per fund | P2 |
| CK1.6 | Completed items show timestamp | P2 |

---

## 9. Technical Architecture

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Rendering** | Server Components (default) | Consistency with existing app |
| **Data Fetching** | Supabase server client | Existing pattern |
| **Mutations** | Client-side Supabase + router.refresh() | Existing pattern |
| **State** | No global state; server-fetched | Existing pattern |
| **UI Components** | shadcn/ui + Tailwind | Existing library |
| **Drag & Drop** | @dnd-kit/core | Modern, accessible DnD |
| **Styling** | Dark theme (zinc-950, orange-500) | Consistency |

### Route Structure

```
webapp/src/app/(dashboard)/
├── fund-builder/                    # Fund Builder wizard
│   ├── page.tsx                     # Fund Builder home / phase list
│   └── [fundId]/
│       ├── page.tsx                 # Phase overview for fund
│       └── phase/[phaseNumber]/
│           └── page.tsx             # Individual phase with sections
│
├── pipeline/                        # LP Pipeline
│   ├── page.tsx                     # Pipeline selector (if multiple funds)
│   └── [fundId]/
│       ├── page.tsx                 # Kanban board
│       ├── list/page.tsx            # List view
│       ├── contacts/
│       │   ├── page.tsx             # Contact list
│       │   └── [contactId]/page.tsx # Contact detail
│       ├── organizations/
│       │   ├── page.tsx             # Organization list
│       │   └── [orgId]/page.tsx     # Organization detail
│       ├── opportunities/
│       │   └── [oppId]/page.tsx     # Opportunity detail
│       └── metrics/
│           └── page.tsx             # Pipeline analytics
```

### Component Structure

```
webapp/src/components/
├── fund-builder/
│   ├── FundBuilderNav.tsx          # Phase tabs navigation
│   ├── PhaseCard.tsx               # Phase overview card
│   ├── PhaseSection.tsx            # Expandable section
│   ├── QuestionForm.tsx            # Individual question input
│   ├── ProgressBar.tsx             # Phase progress indicator
│   └── DeliverableButton.tsx       # Generate deliverable
│
├── pipeline/
│   ├── PipelineKanban.tsx          # Main Kanban board
│   ├── PipelineColumn.tsx          # Single stage column
│   ├── OpportunityCard.tsx         # Draggable opportunity card
│   ├── OpportunityDetail.tsx       # Detail drawer/modal
│   ├── OpportunityForm.tsx         # Create/edit opportunity
│   ├── StageChecklist.tsx          # Checklist component
│   ├── ChecklistItem.tsx           # Individual checkbox item
│   ├── PipelineFilters.tsx         # Filter controls
│   └── PipelineMetrics.tsx         # Stage metrics header
│
├── contacts/
│   ├── ContactList.tsx
│   ├── ContactCard.tsx
│   ├── ContactForm.tsx
│   └── ContactDetail.tsx
│
├── organizations/
│   ├── OrganizationList.tsx
│   ├── OrganizationCard.tsx
│   ├── OrganizationForm.tsx
│   └── OrganizationDetail.tsx
│
└── fund/
    ├── FundCard.tsx
    ├── FundTermsDisplay.tsx
    └── FundMetricsSummary.tsx
```

### Navigation (Sidebar Addition)

```typescript
// Updated navigation items
const navigation = [
  // ... existing items
  { type: 'divider' },
  {
    name: "Fund Builder",
    href: "/fund-builder",
    icon: Rocket, // or similar
  },
  {
    name: "LP Pipeline",
    href: "/pipeline",
    icon: Kanban, // or Users
  },
  { type: 'divider' },
  // ... remaining items
];
```

---

## 10. Database Schema

### New Tables

```sql
-- ============================================
-- FUND MANAGEMENT TABLES
-- ============================================

CREATE TABLE funds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  target_size NUMERIC NOT NULL,
  hard_cap NUMERIC,
  minimum_commitment NUMERIC DEFAULT 250000,
  status TEXT DEFAULT 'building' CHECK (status IN (
    'building', 'raising', 'first_close', 'final_close', 'investing', 'harvesting'
  )),

  -- Fund terms
  management_fee_rate NUMERIC DEFAULT 0.02,
  management_fee_basis TEXT DEFAULT 'committed',
  carried_interest_rate NUMERIC DEFAULT 0.20,
  preferred_return NUMERIC DEFAULT 0.08,
  gp_commitment_percent NUMERIC DEFAULT 0.02,
  waterfall_type TEXT DEFAULT 'european',
  catch_up_rate NUMERIC DEFAULT 1.0,

  -- Dates
  vintage_year INTEGER,
  first_close_date DATE,
  final_close_date DATE,
  investment_period_years INTEGER DEFAULT 4,
  fund_term_years INTEGER DEFAULT 10,

  -- Metadata
  is_sample_data BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- FUND BUILDER TABLES
-- ============================================

CREATE TABLE fund_builder_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  lesson_slug TEXT, -- Links to Module 29 lesson
  sort_order INTEGER NOT NULL
);

CREATE TABLE fund_builder_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase_id UUID REFERENCES fund_builder_phases(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER NOT NULL
);

CREATE TABLE fund_builder_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES fund_builder_sections(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'text' CHECK (question_type IN (
    'text', 'textarea', 'select', 'multiselect', 'number', 'date'
  )),
  options JSONB, -- For select/multiselect
  placeholder TEXT,
  help_text TEXT,
  is_required BOOLEAN DEFAULT false,
  sort_order INTEGER NOT NULL
);

CREATE TABLE fund_builder_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  question_id UUID REFERENCES fund_builder_questions(id) ON DELETE CASCADE,
  response_value TEXT,
  response_json JSONB, -- For complex responses
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(fund_id, question_id)
);

CREATE TABLE fund_builder_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  phase_id UUID REFERENCES fund_builder_phases(id) ON DELETE CASCADE,
  completion_percentage NUMERIC DEFAULT 0,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  UNIQUE(fund_id, phase_id)
);

-- ============================================
-- CONTACT & ORGANIZATION TABLES
-- ============================================

CREATE TABLE lp_organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,

  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN (
    'pension_public', 'pension_corporate', 'endowment', 'foundation',
    'fund_of_funds', 'fund_of_funds_em', 'family_office', 'hnw_individual',
    'insurance', 'sovereign_wealth', 'ria_wealth_mgmt', 'other'
  )),
  website TEXT,
  aum NUMERIC,
  typical_commitment_min NUMERIC,
  typical_commitment_max NUMERIC,
  emerging_manager_appetite TEXT CHECK (emerging_manager_appetite IN ('high', 'moderate', 'low', 'none')),
  city TEXT,
  state TEXT,
  country TEXT DEFAULT 'USA',
  notes TEXT,
  is_sample_data BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lp_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  organization_id UUID REFERENCES lp_organizations(id) ON DELETE SET NULL,

  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  linkedin_url TEXT,
  title TEXT,
  is_decision_maker BOOLEAN DEFAULT false,
  relationship_strength TEXT CHECK (relationship_strength IN ('cold', 'warm', 'hot', 'existing')),
  referral_source TEXT,
  notes TEXT,
  is_sample_data BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- PIPELINE TABLES
-- ============================================

CREATE TABLE lp_pipeline_stages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER NOT NULL,
  color TEXT DEFAULT '#71717a',
  is_won_stage BOOLEAN DEFAULT false,
  is_lost_stage BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lp_stage_checklist_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage_id UUID REFERENCES lp_pipeline_stages(id) ON DELETE CASCADE,
  item_text TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  is_required BOOLEAN DEFAULT false
);

CREATE TABLE lp_opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES lp_contacts(id) ON DELETE SET NULL,
  organization_id UUID REFERENCES lp_organizations(id) ON DELETE SET NULL,
  stage_id UUID REFERENCES lp_pipeline_stages(id) ON DELETE SET NULL,

  name TEXT NOT NULL,
  potential_commitment NUMERIC,
  probability NUMERIC DEFAULT 0.5,
  expected_close_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'won', 'lost', 'on_hold')),
  lost_reason TEXT,
  won_date DATE,
  actual_commitment NUMERIC,
  last_activity_date TIMESTAMPTZ,
  next_follow_up_date DATE,
  notes TEXT,
  is_sample_data BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lp_opportunity_checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID REFERENCES lp_opportunities(id) ON DELETE CASCADE,
  template_id UUID REFERENCES lp_stage_checklist_templates(id) ON DELETE SET NULL,
  stage_id UUID REFERENCES lp_pipeline_stages(id) ON DELETE CASCADE,
  item_text TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  sort_order INTEGER NOT NULL
);

CREATE TABLE lp_opportunity_stage_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID REFERENCES lp_opportunities(id) ON DELETE CASCADE,
  from_stage_id UUID REFERENCES lp_pipeline_stages(id),
  to_stage_id UUID REFERENCES lp_pipeline_stages(id),
  changed_at TIMESTAMPTZ DEFAULT now(),
  notes TEXT
);

CREATE TABLE lp_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  opportunity_id UUID REFERENCES lp_opportunities(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES lp_contacts(id) ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN (
    'call', 'email', 'meeting', 'presentation', 'dd_request',
    'docs_sent', 'docs_received', 'site_visit', 'note', 'other'
  )),
  subject TEXT,
  description TEXT,
  activity_date TIMESTAMPTZ DEFAULT now(),
  outcome TEXT,
  next_steps TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lp_commitments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  fund_id UUID REFERENCES funds(id) ON DELETE CASCADE,
  opportunity_id UUID REFERENCES lp_opportunities(id) ON DELETE SET NULL,
  organization_id UUID REFERENCES lp_organizations(id) ON DELETE SET NULL,
  contact_id UUID REFERENCES lp_contacts(id) ON DELETE SET NULL,
  commitment_amount NUMERIC NOT NULL,
  commitment_date DATE NOT NULL,
  effective_date DATE,
  management_fee_discount_bps INTEGER DEFAULT 0,
  has_mfn BOOLEAN DEFAULT false,
  has_co_invest_rights BOOLEAN DEFAULT false,
  has_lpac_seat BOOLEAN DEFAULT false,
  side_letter_notes TEXT,
  status TEXT DEFAULT 'committed',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_fund_builder_responses_fund ON fund_builder_responses(fund_id);
CREATE INDEX idx_lp_organizations_fund ON lp_organizations(fund_id);
CREATE INDEX idx_lp_contacts_fund ON lp_contacts(fund_id);
CREATE INDEX idx_lp_opportunities_fund ON lp_opportunities(fund_id);
CREATE INDEX idx_lp_opportunities_stage ON lp_opportunities(stage_id);
CREATE INDEX idx_lp_opportunity_checklist_opp ON lp_opportunity_checklist_items(opportunity_id);
CREATE INDEX idx_lp_activities_opportunity ON lp_activities(opportunity_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE funds ENABLE ROW LEVEL SECURITY;
ALTER TABLE fund_builder_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE fund_builder_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_pipeline_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_stage_checklist_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_opportunity_checklist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_opportunity_stage_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE lp_commitments ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage own funds" ON funds FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own responses" ON fund_builder_responses FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own progress" ON fund_builder_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own organizations" ON lp_organizations FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own contacts" ON lp_contacts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view fund stages" ON lp_pipeline_stages FOR ALL
  USING (fund_id IN (SELECT id FROM funds WHERE user_id = auth.uid()));
CREATE POLICY "Users can view stage checklists" ON lp_stage_checklist_templates FOR ALL
  USING (stage_id IN (SELECT id FROM lp_pipeline_stages WHERE fund_id IN (SELECT id FROM funds WHERE user_id = auth.uid())));
CREATE POLICY "Users can manage own opportunities" ON lp_opportunities FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage opportunity checklists" ON lp_opportunity_checklist_items FOR ALL
  USING (opportunity_id IN (SELECT id FROM lp_opportunities WHERE user_id = auth.uid()));
CREATE POLICY "Users can view opportunity history" ON lp_opportunity_stage_history FOR ALL
  USING (opportunity_id IN (SELECT id FROM lp_opportunities WHERE user_id = auth.uid()));
CREATE POLICY "Users can manage own activities" ON lp_activities FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own commitments" ON lp_commitments FOR ALL USING (auth.uid() = user_id);
```

### Default Data (Stages & Checklists)

```sql
-- Function to create default stages and checklists for a new fund
CREATE OR REPLACE FUNCTION create_default_pipeline_stages(p_fund_id UUID)
RETURNS VOID AS $$
DECLARE
  stage_record RECORD;
  stage_id UUID;
BEGIN
  -- Create stages
  FOR stage_record IN
    SELECT * FROM (VALUES
      (1, 'Universe', 'Initial LP identification', '#71717a', false, false),
      (2, 'Interested', 'Responded positively, wants to learn more', '#f97316', false, false),
      (3, 'Pitched', 'Full pitch delivered, evaluating', '#3b82f6', false, false),
      (4, 'In DD', 'Active due diligence', '#8b5cf6', false, false),
      (5, 'Final Review', 'With legal/tax advisors', '#eab308', false, false),
      (6, 'Committed', 'Subscription docs signed', '#22c55e', false, false),
      (7, 'Funded', 'Wire received', '#14b8a6', false, false),
      (8, 'Active LP', 'Fully onboarded', '#10b981', true, false)
    ) AS t(sort_order, name, description, color, is_won, is_lost)
  LOOP
    INSERT INTO lp_pipeline_stages (fund_id, name, description, sort_order, color, is_won_stage, is_lost_stage)
    VALUES (p_fund_id, stage_record.name, stage_record.description, stage_record.sort_order, stage_record.color, stage_record.is_won, stage_record.is_lost)
    RETURNING id INTO stage_id;

    -- Insert checklist items for each stage
    CASE stage_record.sort_order
      WHEN 1 THEN -- Universe
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Research LP background and investment criteria', 1),
          (stage_id, 'Identify mutual connections for warm introduction', 2),
          (stage_id, 'Categorize by LP type', 3),
          (stage_id, 'Assess fit with fund strategy and size', 4),
          (stage_id, 'Add complete contact information', 5);
      WHEN 2 THEN -- Interested
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Send teaser / one-pager', 1),
          (stage_id, 'Schedule introductory call', 2),
          (stage_id, 'Research their recent fund commitments', 3),
          (stage_id, 'Prepare customized talking points', 4),
          (stage_id, 'Confirm decision-maker involvement', 5),
          (stage_id, 'Log initial interest level and potential size', 6);
      WHEN 3 THEN -- Pitched
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Deliver full pitch presentation', 1),
          (stage_id, 'Send pitch deck and supporting materials', 2),
          (stage_id, 'Answer initial questions and objections', 3),
          (stage_id, 'Discuss potential commitment size', 4),
          (stage_id, 'Identify all decision makers and influencers', 5),
          (stage_id, 'Schedule follow-up meeting', 6),
          (stage_id, 'Send thank you and meeting summary', 7);
      WHEN 4 THEN -- In DD
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Send DDQ (Due Diligence Questionnaire)', 1),
          (stage_id, 'Provide track record documentation', 2),
          (stage_id, 'Schedule due diligence call/meeting', 3),
          (stage_id, 'Respond to information requests within 48 hours', 4),
          (stage_id, 'Facilitate reference calls', 5),
          (stage_id, 'Address specific concerns in writing', 6),
          (stage_id, 'Provide data room access (if applicable)', 7),
          (stage_id, 'Discuss preliminary terms and special requests', 8);
      WHEN 5 THEN -- Final Review
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Send subscription documents', 1),
          (stage_id, 'Confirm LP reviewing with legal/tax advisors', 2),
          (stage_id, 'Address final terms questions', 3),
          (stage_id, 'Negotiate side letter terms (if applicable)', 4),
          (stage_id, 'Confirm final commitment amount', 5),
          (stage_id, 'Set expected signing date', 6),
          (stage_id, 'Prepare closing logistics', 7);
      WHEN 6 THEN -- Committed
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Receive signed subscription agreement', 1),
          (stage_id, 'Verify accredited investor / qualified purchaser status', 2),
          (stage_id, 'Complete KYC/AML verification', 3),
          (stage_id, 'Collect W-9 or W-8BEN', 4),
          (stage_id, 'Issue capital call notice', 5),
          (stage_id, 'Confirm wire instructions sent', 6);
      WHEN 7 THEN -- Funded
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Confirm wire received and reconciled', 1),
          (stage_id, 'Issue capital account statement', 2),
          (stage_id, 'Send welcome letter/package', 3),
          (stage_id, 'Add to LP distribution list', 4),
          (stage_id, 'Schedule onboarding call', 5);
      WHEN 8 THEN -- Active LP
        INSERT INTO lp_stage_checklist_templates (stage_id, item_text, sort_order) VALUES
          (stage_id, 'Complete LP onboarding call', 1),
          (stage_id, 'Set up investor portal access', 2),
          (stage_id, 'Add to quarterly reporting distribution', 3),
          (stage_id, 'Send annual meeting invitation', 4),
          (stage_id, 'Document LP preferences and communication style', 5),
          (stage_id, 'Begin ongoing relationship management', 6);
    END CASE;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-create stages when fund is created
CREATE OR REPLACE FUNCTION trigger_create_pipeline_stages()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM create_default_pipeline_stages(NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_fund_insert
AFTER INSERT ON funds
FOR EACH ROW
EXECUTE FUNCTION trigger_create_pipeline_stages();
```

---

## 11. UI/UX Design

### Design System

| Element | Value |
|---------|-------|
| Background | `bg-zinc-950` (page), `bg-zinc-900/50` (cards) |
| Borders | `border-zinc-800` |
| Text Primary | `text-zinc-100` |
| Text Secondary | `text-zinc-400` |
| Accent | `text-orange-500`, `bg-orange-500` |
| Success | `text-green-500` (checkmarks) |
| Cards | `rounded-lg border border-zinc-800 bg-zinc-900/50` |

### Fund Builder UI

```
┌────────────────────────────────────────────────────────────────────┐
│  Fund Builder                                    SAF Partners Fund I│
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [Phase 0] [Phase 1] [Phase 2] [Phase 3] [Phase 4] [Phase 5] ...   │
│             ▲ active                                                │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Phase 1: Strategy & Thesis                         13%  ██░░│   │
│  │                                                              │   │
│  │  ▼ Define Your Investment Thesis                            │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │ What types of assets and geographic markets will     │  │   │
│  │  │ your fund focus on and why?                          │  │   │
│  │  │ ┌──────────────────────────────────────────────────┐ │  │   │
│  │  │ │ Government IT services companies in the federal  │ │  │   │
│  │  │ │ and state/local markets...                    ✓  │ │  │   │
│  │  │ └──────────────────────────────────────────────────┘ │  │   │
│  │  │                                                       │  │   │
│  │  │ How will your fund create value across its portfolio?│  │   │
│  │  │ ┌──────────────────────────────────────────────────┐ │  │   │
│  │  │ │                                               ○  │ │  │   │
│  │  │ └──────────────────────────────────────────────────┘ │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  │                                                              │   │
│  │  ▶ Building Your Edge (4 quadrants)                         │   │
│  │  ▶ The Three Roles Assessment                               │   │
│  │                                                              │   │
│  │  [← Previous Phase]                      [Next Phase →]     │   │
│  │                                          [Go to Lesson 1]    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### LP Pipeline Kanban UI

```
┌────────────────────────────────────────────────────────────────────────┐
│  LP Pipeline                                    [+ Add Opportunity] 🔍 │
├────────────────────────────────────────────────────────────────────────┤
│  [Kanban] [List]                     Filter: [All Types ▼] [Date ▼]   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐       │
│ │  Universe    ││  Interested  ││   Pitched    ││    In DD     │ ...   │
│ │  25 • $5.5M  ││  8 • $2.1M   ││  5 • $1.8M   ││  4 • $1.2M   │       │
│ ├──────────────┤├──────────────┤├──────────────┤├──────────────┤       │
│ │┌────────────┐││┌────────────┐││┌────────────┐││┌────────────┐│       │
│ ││ Acme FoF   ││││ EMC        ││││ Smith FO   ││││ Jones Cap  ││       │
│ ││ $500K      ││││ $15M       ││││ $5M        ││││ $8M        ││       │
│ ││ ████░░ 60% ││││ ██████ 100%││││ ███░░░ 43% ││││ █████░ 75% ││       │
│ │└────────────┘││└────────────┘││└────────────┘││└────────────┘│       │
│ │┌────────────┐││┌────────────┐││┌────────────┐││              │       │
│ ││ Beta Inv.  ││││ Chen FO    ││││ Park Cap   │││              │       │
│ ││ $250K      ││││ $2M        ││││ $3M        │││              │       │
│ ││ ██░░░░ 20% ││││ ████░░ 67% ││││ █░░░░░ 14% │││              │       │
│ │└────────────┘││└────────────┘││└────────────┘││              │       │
│ │     ...      ││     ...      ││              ││              │       │
│ └──────────────┘└──────────────┘└──────────────┘└──────────────┘       │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

### Opportunity Detail with Checklist

```
┌─────────────────────────────────────────────────┐
│  Emerging Manager Capital               [Edit]  │
│  Stage: Interested                              │
├─────────────────────────────────────────────────┤
│                                                 │
│  Potential: $15,000,000                        │
│  Probability: 60%                              │
│  Expected Close: Mar 2026                      │
│                                                 │
│  Contact: Sarah Chen                           │
│  Organization: Emerging Manager Capital        │
│  Type: Fund of Funds (EM)                      │
│                                                 │
│  ─────────────────────────────────────────────  │
│                                                 │
│  Stage Checklist                    4/6 (67%)  │
│  ┌─────────────────────────────────────────┐   │
│  │ ✓ Send teaser / one-pager              │   │
│  │ ✓ Schedule introductory call           │   │
│  │ ✓ Research their recent commitments    │   │
│  │ ✓ Prepare customized talking points    │   │
│  │ □ Confirm decision-maker involvement   │   │
│  │ □ Log interest level and potential size│   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ─────────────────────────────────────────────  │
│                                                 │
│  Activity Log                        [+ Add]   │
│  ├─ 📞 Initial call - discussed thesis         │
│  │      Feb 18, 2026                           │
│  └─ ✉️ Sent teaser deck                        │
│         Feb 15, 2026                           │
│                                                 │
│  ─────────────────────────────────────────────  │
│                                                 │
│  Notes:                                        │
│  Strong interest in government IT thesis.      │
│                                                 │
│        [Move to Stage ▼]  [Mark Won] [Lost]   │
└─────────────────────────────────────────────────┘
```

---

## 12. Sample Data Strategy

### SAF Partners Fund I

```json
{
  "name": "SAF Partners Fund I",
  "description": "Lower mid-market government IT services fund",
  "target_size": 75000000,
  "hard_cap": 90000000,
  "minimum_commitment": 1000000,
  "status": "raising",
  "management_fee_rate": 0.02,
  "carried_interest_rate": 0.20,
  "preferred_return": 0.08,
  "gp_commitment_percent": 0.025,
  "waterfall_type": "european",
  "vintage_year": 2026,
  "investment_period_years": 4,
  "fund_term_years": 10,
  "is_sample_data": true
}
```

### Sample LP Distribution (50+ contacts)

| Stage | Count | Total Value | Sample Organizations |
|-------|-------|-------------|---------------------|
| Universe | 20 | $4.0M | Various HNW, small family offices |
| Interested | 10 | $3.5M | Mid-size FoFs, D.C. family offices |
| Pitched | 6 | $2.2M | Evaluating post-meeting |
| In DD | 5 | $1.8M | Active due diligence |
| Final Review | 3 | $1.0M | With advisors |
| Committed | 3 | $0.8M | Signed, awaiting wire |
| Funded | 2 | $0.6M | Money received |
| Active LP | 1 | $0.4M | Emerging Manager Capital (anchor) |
| **Total** | **50** | **$14.3M** | |

### LP Archetypes from Module 29

| Organization | Type | Commitment | Stage | Notes |
|--------------|------|------------|-------|-------|
| Emerging Manager Capital | FoF (EM) | $15M | Active LP | Anchor investor |
| D.C. Capital Partners | Family Office | $8M | Committed | Government connections |
| Potomac Wealth | Family Office | $5M | In DD | Former DoD executive |
| Atlantic Fund Partners | FoF | $10M | Pitched | Traditional allocator |
| First Valley Investments | Endowment | $12M | Interested | Small college endowment |

---

## 13. Future Integrations Plan

### Planned Integrations (Not Phase 1)

| Integration | Purpose | Phase |
|-------------|---------|-------|
| DocuSign | E-signature for sub docs | 2 |
| Gmail/Outlook | Email tracking | 3 |
| Calendly | Meeting scheduling | 3 |
| QuickBooks | Fund accounting | 4 |
| Dropbox | Document storage | 2 |

---

## 14. Implementation Timeline

### Phase 1: Foundation (Week 1)

| Day | Tasks |
|-----|-------|
| 1-2 | Database migration (all tables), RLS policies |
| 3 | Fund CRUD, sidebar navigation |
| 4 | Contact/Organization CRUD |
| 5 | Basic routing structure |

### Phase 1: Pipeline (Week 2)

| Day | Tasks |
|-----|-------|
| 1-2 | Pipeline Kanban board with drag-and-drop |
| 3 | Opportunity CRUD, detail drawer |
| 4 | Stage checklists implementation |
| 5 | Sample data seeding, testing |

### Phase 1: Fund Builder (Week 3)

| Day | Tasks |
|-----|-------|
| 1-2 | Fund Builder phases/sections structure |
| 3-4 | Question forms with auto-save |
| 5 | Progress tracking, phase navigation |

### Phase 1: Polish (Week 4)

| Day | Tasks |
|-----|-------|
| 1-2 | Pipeline metrics, filters |
| 3 | Activity logging |
| 4 | Integration between Fund Builder and Pipeline |
| 5 | Testing, bug fixes, documentation |

---

## 15. Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Scope creep | High | High | Strict PRD boundaries; defer to Phase 2 |
| DnD complexity | Medium | Medium | Use @dnd-kit (proven library) |
| Sample data maintenance | Low | Low | Document generation scripts |
| Performance with many opportunities | Low | Medium | Pagination, virtual scrolling |

---

## 16. Appendices

### A. Glossary

| Term | Definition |
|------|------------|
| LP | Limited Partner - investor in the fund |
| GP | General Partner - fund manager |
| FoF | Fund of Funds |
| EM | Emerging Manager |
| DD | Due Diligence |
| DDQ | Due Diligence Questionnaire |
| MFN | Most Favored Nation clause |
| LPAC | LP Advisory Committee |

### B. Module 29 Mapping

| Fund Builder Phase | Module 29 Lesson |
|-------------------|------------------|
| Phase 1: Strategy | Lesson 1: Fund Strategy & Validation |
| Phase 2: Legal | Lesson 2: Fund Formation & Legal |
| Phase 3: Capital Raising | Lesson 3: Capital Raising & Fundraising |
| Phase 4: Launch | Lesson 4: Fund Launch & First Close |
| Phase 6: Governance | Lesson 5: Fund Governance & Portfolio Mgmt |
| Phase 7: Operations | Lesson 6: Fund Performance & LP Relations |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | Mario | | |
| Developer | Claude | 2026-02-20 | ✓ |

---

**Next Steps:**
1. Review and approve this PRD
2. Run database migration
3. Begin Week 1 implementation
