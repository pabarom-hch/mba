# PRD-051: PE Curriculum Lesson Integration

## Overview

| Field | Value |
|-------|-------|
| PRD ID | PRD-051 |
| Title | PE Curriculum Lesson Integration |
| Status | In Progress |
| Priority | High |
| Author | Claude Code |
| Created | 2026-02-15 |
| Related PRDs | PRD-050 (PE Curriculum Lessons) |

---

## 1. Problem Statement

The PE Buy & Build curriculum has a solid 8-phase, 24-module structure but only 15 lessons populated. Comprehensive lesson content exists in markdown files (`phase-10-private-equity/`) but hasn't been imported into the database. This creates a gap between the curriculum structure and available learning content.

### Current State
- **Database**: 8 phases, 24 modules, 15 lessons
- **Markdown files**: 24 lessons + 4 assessments across 4 modules
- **Simulations**: 4 existing, 3 new to add
- **Gap**: 9 modules have 0 lessons

### Desired State
- All 24 new lessons imported into appropriate modules
- Empty modules populated with relevant content
- 3 new simulations added to platform
- Total lessons: 15 existing + 24 new = **39 lessons**

---

## 2. Integration Mapping

### Phase-to-Lesson Mapping

| Phase | Module | Existing | New Lessons to Add | Source File |
|-------|--------|----------|-------------------|-------------|
| **1. PE Fundamentals** | PE Economics & Fund Structures | 2 | +2 | `01-introduction-to-pe.md`, `02-pe-fund-economics.md` |
| | Value Creation Framework | 1 | +1 | `04-value-creation-framework.md` |
| | Operator vs Investor Mindset | 1 | +1 | `03-pe-investment-strategies.md` |
| **2. Deal Sourcing** | Investment Thesis Development | 1 | +1 | `01-deal-sourcing.md` |
| | Platform Company Criteria | 1 | +0 | - |
| | Proprietary Deal Flow | 1 | +0 | - |
| **3. Due Diligence** | Financial Due Diligence | 1 | +1 | `02-quality-of-earnings.md` |
| | Operational Due Diligence | 1 | +1 | `04-operational-due-diligence.md` (if exists) |
| | Commercial Due Diligence | 1 | +1 | `03-commercial-due-diligence.md` |
| | Legal & HR Due Diligence | 0 | +1 | `06-pe-due-diligence-overview.md` |
| **4. Financial Modeling** | LBO Mechanics | 1 | +1 | `05-lbo-mechanics.md` |
| | Debt Structures & Terms | 1 | +0 | - |
| | Returns Analysis | 0 | +1 | `03-returns-analysis.md` |
| **5. Deal Execution** | Deal Structuring | 1 | +1 | `07-deal-structuring-fundamentals.md` |
| | Negotiation Strategies | 0 | +1 | `06-deal-negotiation-closing.md` (if exists) |
| | Closing & Integration | 0 | +0 | - |
| **6. Turnaround Execution** | The First 100 Days | 1 | +1 | `01-first-100-days.md` |
| | Operational Improvement | 1 | +2 | `02-revenue-growth.md`, `03-cost-optimization.md` |
| | Working Capital Optimization | 0 | +1 | `04-working-capital.md` |
| **7. Buy-and-Build** | Add-on Acquisition Strategy | 1 | +0 | - |
| | Integration Playbook | 0 | +1 | `05-technology-transformation.md` |
| | Synergy Realization | 0 | +1 | `06-talent-organization.md` |
| **8. Value Creation & Exit** | Value Creation Tracking | 0 | +1 | `04-lp-reporting.md` |
| | Exit Preparation | 1 | +1 | `01-exit-preparation.md` |
| | Sale Process Management | 1 | +1 | `02-exit-process.md` |

### New Simulations

| Simulation | File | Description |
|------------|------|-------------|
| Add-On Acquisition Analyzer | `pe-addon-analyzer.md` | Evaluate strategic fit, synergies, accretion/dilution |
| Covenant Compliance Monitor | `pe-covenant-monitor.md` | Track debt covenants, identify breaches |
| Value Creation Tracker | `pe-value-creation-tracker.md` | Monitor thesis vs actuals, build value bridge |

---

## 3. Technical Implementation

### Database Operations

```sql
-- For each lesson, insert into lessons table
INSERT INTO lessons (
  id, curriculum_id, module_id, type, number, title, slug,
  content, summary, duration_minutes, difficulty,
  learning_objectives, key_concepts, created_at
) VALUES (
  gen_random_uuid(),
  'ece4e789-0bbf-4330-857e-444c6c1115e5', -- PE curriculum ID
  '<module_id>',
  'topic',
  <next_lesson_number>,
  '<title>',
  '<slug>',
  '<markdown_content>',
  '<summary>',
  <duration>,
  '<difficulty>',
  '<learning_objectives_json>',
  '<key_concepts_json>',
  now()
);
```

### Lesson Parsing Strategy

1. Read markdown file
2. Extract metadata:
   - Title from `# Lesson N: Title` or `# Title`
   - Learning objectives from `## Learning Objectives` section
   - Summary from intro paragraph
   - Estimate duration (300 words ≈ 1 min reading)
3. Store full markdown as content
4. Generate slug from title

### Module ID Reference

| Module Name | Module ID |
|-------------|-----------|
| PE Economics & Fund Structures | `8e31316b-4664-4cfe-bc40-cd317df4e361` |
| Value Creation Framework | `b1063e61-03b7-462b-b8a5-7ea04aad4c8b` |
| Operator vs Investor Mindset | `b69c649c-96c0-4ae3-a801-3ad2ffcc4cfb` |
| Investment Thesis Development | `88713a26-577c-4e0a-80fe-1a42b6241526` |
| Financial Due Diligence | `7a3d51d7-c2b5-420a-8443-4bf9e9e74882` |
| Operational Due Diligence | `a9077a4e-2a22-4ae8-a2e1-093c680f83a0` |
| Commercial Due Diligence | `bfe75532-9f1f-46a9-ac19-5e550c31401c` |
| Legal & HR Due Diligence | `c84a2845-7515-4402-8f19-dfe80d5130aa` |
| LBO Mechanics | `4248dd6c-ead8-4a3c-9eae-51b48c7560f9` |
| Returns Analysis | `a1e38974-56ec-405e-ada1-76632a493045` |
| Deal Structuring | `a37900b8-47dd-408f-bbf0-5856b5021060` |
| Negotiation Strategies | `4e249072-125e-4013-a368-aa6c51b55325` |
| The First 100 Days | `e54f8369-a341-4647-baf6-07aa3777b461` |
| Operational Improvement | `e6ced742-4b81-4e5a-ac14-0ff31c0adf01` |
| Working Capital Optimization | `02e74a33-ea55-4273-b6bb-3856c70c9de4` |
| Integration Playbook | `bde5cffa-9e31-4399-a126-6310feb4bb0c` |
| Synergy Realization | `6a4d2adb-08e7-4bc5-af86-814e1430e113` |
| Value Creation Tracking | `cc0459f5-9edb-40b9-84f0-acd9e4c24407` |
| Exit Preparation | `285cb366-0f4b-4cab-b805-d9682899aa65` |
| Sale Process Management | `add8d9ea-a644-45e0-b3f5-06b921b48670` |

---

## 4. Success Criteria

| Metric | Target |
|--------|--------|
| New lessons imported | 24 |
| Empty modules filled | 9 → 0 |
| Total PE lessons | 39 |
| New simulations added | 3 |
| Build passes | Yes |
| All routes accessible | Yes |

---

## 5. Implementation Steps

1. **Create PRD** ✓
2. **Import Module 25 lessons** (PE Fundamentals)
3. **Import Module 26 lessons** (Deal Execution)
4. **Import Module 27 lessons** (Operational Improvement)
5. **Import Module 28 lessons** (Exit & Returns)
6. **Add simulations** to UI components
7. **Verify and test**

---

## 6. Rollback Plan

If issues arise:
1. Delete lessons where `created_at > '2026-02-15'` and `curriculum_id = PE curriculum`
2. Revert simulation page changes via git

---

*PRD Version: 1.0*
*Created: 2026-02-15*
