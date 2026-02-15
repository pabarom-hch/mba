# PRD-050: Private Equity Curriculum Lessons

## Overview

| Field | Value |
|-------|-------|
| PRD ID | PRD-050 |
| Title | Private Equity Curriculum Lessons |
| Status | Approved |
| Priority | High |
| Author | MBA Curriculum Team |
| Created | 2026-02-15 |
| Target Completion | 2026-03-15 |

---

## 1. Problem Statement

The MBA curriculum has a comprehensive PRD for PE content (`prd-pe-buy-build-curriculum.md`) and several case studies/simulations, but the actual **lesson content** has not been created. Students cannot learn PE concepts in a structured, progressive manner without these lessons.

### Current State
- Case 7 (PE Turnaround) exists but lacks prerequisite lessons
- LBO valuation lesson exists but is isolated
- PRD outlines 24 modules but 0 lessons are implemented
- Simulations exist but students lack foundational knowledge

### Desired State
- Complete PE curriculum with 24 lessons across 4 phases
- Progressive learning from fundamentals to advanced topics
- Integration with existing case studies and simulations
- Connection to Nexus data for applied learning

---

## 2. Goals & Success Metrics

### Goals
1. Create comprehensive PE lesson content
2. Enable structured learning path from beginner to advanced
3. Connect theory to practice via Nexus case studies
4. Prepare students for PE careers or PE-backed leadership roles

### Success Metrics
| Metric | Target |
|--------|--------|
| Lessons completed | 24 lessons |
| Average lesson length | 300-500 lines |
| Assessment pass rate | >75% |
| Student satisfaction | >4.0/5.0 |
| Time to complete module | 4-6 hours per phase |

---

## 3. Curriculum Structure

### Phase 1: PE Fundamentals (8 Lessons)

| # | Lesson | Learning Objectives |
|---|--------|---------------------|
| 1 | Introduction to Private Equity | Understand PE industry structure, fund types, key players |
| 2 | PE Fund Economics | Master GP/LP structures, management fees, carried interest, hurdle rates |
| 3 | PE Investment Strategies | Compare buyout, growth, venture, distressed, and special situations |
| 4 | Value Creation Framework | Understand the three levers: operational, financial, strategic |
| 5 | LBO Mechanics | Build mental model of leveraged buyouts, debt structures |
| 6 | PE Due Diligence Overview | Learn commercial, financial, operational, and legal DD |
| 7 | Deal Structuring Fundamentals | Understand purchase agreements, representations, warranties |
| 8 | PE Career Paths | Explore roles: associate, VP, principal, partner, operating partner |

**Assessment:** PE Fundamentals Quiz + Mini-Case Analysis

---

### Phase 2: Deal Execution (6 Lessons)

| # | Lesson | Learning Objectives |
|---|--------|---------------------|
| 9 | Deal Sourcing & Origination | Learn proprietary vs. intermediated deals, thesis development |
| 10 | Quality of Earnings Analysis | Master QoE adjustments, normalized EBITDA, working capital |
| 11 | Commercial Due Diligence | Analyze market size, competitive position, customer concentration |
| 12 | Operational Due Diligence | Assess management, processes, technology, scalability |
| 13 | Financial Modeling for PE | Build LBO models, sensitivity analysis, returns calculation |
| 14 | Deal Negotiation & Closing | Navigate LOI, exclusivity, final negotiations, closing mechanics |

**Assessment:** Due Diligence Simulation + LBO Model Exercise

---

### Phase 3: Operational Improvement (6 Lessons)

| # | Lesson | Learning Objectives |
|---|--------|---------------------|
| 15 | The First 100 Days | Execute post-close integration, quick wins, team assessment |
| 16 | Revenue Growth Initiatives | Implement pricing, sales effectiveness, market expansion |
| 17 | Cost Optimization | Execute procurement, labor efficiency, overhead reduction |
| 18 | Working Capital Management | Optimize AR/AP, inventory, cash conversion cycle |
| 19 | Technology & Digital Transformation | Assess and implement technology improvements |
| 20 | Talent & Organization | Build management team, incentive alignment, succession |

**Assessment:** 100-Day Plan Development + Value Creation Bridge

---

### Phase 4: Exit & Returns (4 Lessons)

| # | Lesson | Learning Objectives |
|---|--------|---------------------|
| 21 | Exit Preparation & Timing | Assess readiness, timing, value maximization |
| 22 | Exit Process Management | Run competitive sale process, buyer management |
| 23 | Returns Analysis & Attribution | Calculate MOIC, IRR, value creation attribution |
| 24 | LP Reporting & Fund Performance | Understand fund-level metrics, benchmarking, reporting |

**Assessment:** Exit Readiness Assessment + Returns Attribution Analysis

---

## 4. Lesson Template

Each lesson follows this structure:

```markdown
# [Lesson Title]

## Learning Objectives
- Objective 1
- Objective 2
- Objective 3

## Introduction
[Context and relevance to PE]

## Core Concepts
### [Concept 1]
[Detailed explanation with examples]

### [Concept 2]
[Detailed explanation with examples]

## Framework/Model
[Visual or structured framework]

## Worked Example
[Step-by-step walkthrough]

## PE Application
[How this applies in real PE context]

## CEO Application
[How CEOs of PE-backed companies use this]

## Common Mistakes
[What to avoid]

## Key Takeaways
- Takeaway 1
- Takeaway 2
- Takeaway 3

## Practice Problems
[2-3 exercises]

## Further Reading
[Books, articles, resources]

## Connection to Nexus
[Link to relevant Nexus case/data]
```

---

## 5. Missing Simulations

### Simulation 1: Due Diligence Deep Dive
**Time:** 90-120 minutes
**Focus:** Quality of Earnings analysis

**Components:**
- Raw financial statements (3 years)
- Management adjustments list
- Student must identify legitimate vs. aggressive adjustments
- Calculate normalized EBITDA
- Identify red flags
- Make investment recommendation

### Simulation 2: Value Creation Tracker
**Time:** 60-90 minutes
**Focus:** Tracking thesis vs. actual performance

**Components:**
- Investment thesis with targets (revenue, EBITDA, margin)
- Monthly/quarterly actuals
- Student must identify variances
- Diagnose root causes
- Recommend corrective actions
- Build value creation bridge

### Simulation 3: Add-On Acquisition Analyzer
**Time:** 60-90 minutes
**Focus:** Buy-and-build strategy

**Components:**
- Platform company profile
- Three potential add-on targets
- Student must evaluate strategic fit
- Calculate synergies
- Model accretion/dilution
- Recommend acquisition priority

### Simulation 4: Covenant Compliance Monitor
**Time:** 45-60 minutes
**Focus:** Debt management

**Components:**
- Loan agreement with covenants
- Monthly financial projections
- Student must calculate covenant ratios
- Identify potential breaches
- Recommend remediation actions
- Model amendment scenarios

---

## 6. Integration Points

### With Existing Content

| Existing Content | Integration |
|------------------|-------------|
| Case 7: PE Turnaround | Capstone case after Phase 3 |
| LBO Model Simulation | After Lesson 13 |
| ESOP Simulation | After Lesson 20 |
| Exit Preparation Workshop | After Lesson 21 |
| LBO Valuation Lesson | Reference in Lesson 5 |

### With Nexus Data

| Dataset | Lessons Using It |
|---------|------------------|
| `pe-turnaround.json` | All phases |
| `financial-data.json` | Lessons 10, 13, 16-18 |
| `turnaround.json` | Lessons 15-20 |
| `rate-cards.json` | Lesson 17 |

### With CEO Mentor Curriculum

| Quarter | PE Connection |
|---------|---------------|
| Q1 (THINK) | Apply Munger's mental models to investment decisions |
| Q2 (BUILD) | Apply Carnegie's principles to value creation |
| Q3 (BE) | Apply Rohn's discipline to operational excellence |
| Q4 (LEAD) | Apply Maxwell's influence to stakeholder management |

---

## 7. File Structure

```
/mba/
├── phase-10-private-equity/
│   ├── README.md
│   ├── module-25-pe-fundamentals/
│   │   ├── README.md
│   │   ├── 01-introduction-to-pe.md
│   │   ├── 02-pe-fund-economics.md
│   │   ├── 03-pe-investment-strategies.md
│   │   ├── 04-value-creation-framework.md
│   │   ├── 05-lbo-mechanics.md
│   │   ├── 06-pe-due-diligence-overview.md
│   │   ├── 07-deal-structuring-fundamentals.md
│   │   ├── 08-pe-career-paths.md
│   │   └── assessment.md
│   ├── module-26-deal-execution/
│   │   ├── README.md
│   │   ├── 01-deal-sourcing.md
│   │   ├── 02-quality-of-earnings.md
│   │   ├── 03-commercial-due-diligence.md
│   │   ├── 04-operational-due-diligence.md
│   │   ├── 05-financial-modeling-pe.md
│   │   ├── 06-deal-negotiation-closing.md
│   │   └── assessment.md
│   ├── module-27-operational-improvement/
│   │   ├── README.md
│   │   ├── 01-first-100-days.md
│   │   ├── 02-revenue-growth.md
│   │   ├── 03-cost-optimization.md
│   │   ├── 04-working-capital.md
│   │   ├── 05-technology-transformation.md
│   │   ├── 06-talent-organization.md
│   │   └── assessment.md
│   └── module-28-exit-returns/
│       ├── README.md
│       ├── 01-exit-preparation.md
│       ├── 02-exit-process.md
│       ├── 03-returns-analysis.md
│       ├── 04-lp-reporting.md
│       └── assessment.md
└── cases/nexus/simulations/
    ├── pe-due-diligence.md (NEW)
    ├── pe-value-creation-tracker.md (NEW)
    ├── pe-addon-analyzer.md (NEW)
    └── pe-covenant-monitor.md (NEW)
```

---

## 8. Dependencies

### Prerequisites for Students
- Phase 2-3: Financial Accounting & Corporate Finance
- Phase 5: Strategic Management
- Basic understanding of financial statements

### Technical Dependencies
- Nexus datasets must be updated with PE data
- Assessment system must support PE question types
- Progress tracking must include PE phase

---

## 9. Implementation Timeline

| Phase | Content | Duration | Target Date |
|-------|---------|----------|-------------|
| 1 | PE Fundamentals (8 lessons) | 3 days | Week 1 |
| 2 | Deal Execution (6 lessons) | 2 days | Week 1-2 |
| 3 | Operational Improvement (6 lessons) | 2 days | Week 2 |
| 4 | Exit & Returns (4 lessons) | 2 days | Week 2-3 |
| 5 | New Simulations (4) | 2 days | Week 3 |
| 6 | Assessments & Integration | 1 day | Week 3 |

**Total Estimated Effort:** 12 days

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Content too advanced | Students drop out | Add more foundational content, prerequisites |
| Too much overlap with existing content | Redundancy | Cross-reference existing lessons |
| Simulations too complex | Low completion | Provide scaffolding, hints |
| Nexus data insufficient | Cases feel generic | Enrich PE dataset |

---

## 11. Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Curriculum Lead | - | - | Pending |
| Technical Lead | - | - | Pending |
| Executive Sponsor | - | - | Pending |

---

*PRD Version: 1.0*
*Last Updated: 2026-02-15*
