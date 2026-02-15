# Private Equity Integration Analysis

> Strategic analysis for integrating PE capabilities across MBA curriculum and Nexus platform

**Date:** 2026-02-15
**Status:** Analysis Complete

---

## Executive Summary

This document analyzes Private Equity content and capabilities across two codebases:
1. **MBA Curriculum** - Educational content for PE learning
2. **Nexus Platform** - Operational software for PE portfolio management

**Key Finding:** Both codebases are remarkably well-positioned for PE integration:
- **MBA**: Case 7 + 3 simulations + full PRD already exist (curriculum lessons not yet built)
- **Nexus**: 60-70% of PE infrastructure exists through Turnarounds + Financial modules

---

## 1. Current State: MBA Codebase

### 1.1 Existing PE Content

| Content | Status | Location | Lines |
|---------|--------|----------|-------|
| Case 7: PE Turnaround & Buy-and-Build | Complete | `cases/nexus/case-studies/case-07-pe-turnaround-buyout.md` | 760+ |
| PE LBO Model Simulation | Complete | `cases/nexus/simulations/pe-lbo-model.md` | 400+ |
| ESOP Structures Comparison | Complete | `cases/nexus/simulations/esop-structures-comparison.md` | 350+ |
| Exit Preparation Workshop | Complete | `cases/nexus/simulations/pe-exit-preparation.md` | 300+ |
| LBO Valuation Lesson | Complete | `phase-03-corporate-finance/module-06-valuation/05-lbo-valuation.md` | 250+ |
| PE Curriculum PRD | Complete | `docs/prd-pe-buy-build-curriculum.md` | 500+ |
| PE Turnaround Dataset | Complete | `cases/nexus/datasets/pe-turnaround.json` | 400+ |

**Total Existing PE Content:** ~3,000 lines across 7 files

### 1.2 PE Content in Corporate Finance Module

The existing M&A module (`phase-03-corporate-finance/module-07-mergers-acquisitions/`) covers:
- Buy-side process (relevant to add-on acquisitions)
- Deal structure (asset vs. stock purchase)
- Merger analysis (accretion/dilution)
- Integration planning

### 1.3 Related Content

| Module | PE Relevance |
|--------|--------------|
| Corporate Strategy (Phase 5) | Portfolio management, corporate parenting |
| Corporate Governance (Phase 9) | Board dynamics, activist investors |
| Valuation (Phase 3) | DCF, comparables, precedent transactions |
| Capital Structure (Phase 3) | Leverage, cost of capital |

### 1.4 Gap Analysis: What's Missing

| Gap | Impact | Effort to Close |
|-----|--------|-----------------|
| 70 detailed lesson files (per PRD) | High - curriculum isn't teachable | Large |
| Due diligence deep-dives | Medium - Q of E, operational DD | Medium |
| Debt structure mechanics | Medium - covenants, mezzanine | Small |
| Add-on acquisition playbook | High - buy-and-build execution | Medium |
| Sector-specific PE cases | Medium - beyond IT services | Medium |
| Fund economics lesson | High - GP/LP, carried interest | Small |
| Search fund content | Low - niche but valuable | Small |

---

## 2. Current State: Nexus Codebase

### 2.1 Existing Infrastructure for PE

| Module | PE Relevance | Reusability |
|--------|--------------|-------------|
| **Turnarounds** | Direct (distressed operations) | 90% |
| **Financial** | Direct (P&L, budgets, variance) | 95% |
| **Accounts** | Portfolio company records | 85% |
| **Engagements** | Implementation tracking | 80% |
| **KPIs** | Value creation metrics | 90% |
| **Activities** | Stakeholder interactions | 95% |
| **Projects** | Initiative management | 85% |

### 2.2 Turnarounds Module (Most Relevant)

**Location:** `/src/modules/turnarounds/`

Already provides:
- Turnaround methodology framework
- Phase tracking with gates and criteria
- Cash flow forecasting (13-week rolling)
- Stakeholder management registry
- Initiative tracking with quick wins
- Health scoring and runway projections

**Database Tables:**
- `turnarounds` - Core turnaround record
- `turnaround_methodologies` - Custom methodologies
- `turnaround_phases` - Phase management
- `cash_forecast_weeks` - Weekly cash tracking
- `cash_levers` - Cash improvement opportunities
- `turnaround_stakeholders` - Stakeholder registry
- `turnaround_initiatives` - Workstream tracking

### 2.3 Financial Module

**Location:** `/src/modules/financial/`

Already provides:
- Financial snapshots (monthly P&L per account/engagement)
- Engagement budgets (revenue targets, labor budgets)
- Company budgets (enterprise P&L)
- Budget vs. actual variance analysis
- Forecasting with scenarios
- Alert rules and thresholds

**Database Tables (24 tables):**
- `financial_snapshots` - Monthly P&L
- `engagement_budgets` - Engagement targets
- `company_budgets` - Enterprise budget
- `cash_flow_forecasts` - Forward projections
- `forecast_scenarios` - Multiple scenarios

### 2.4 Gap Analysis: What's Missing in Nexus

| Gap | What's Needed | Effort |
|-----|---------------|--------|
| Portfolio Holdings | Table + service for entry/exit metrics | Medium |
| MOIC/IRR Calculations | Analytics service for returns | Small |
| Valuation Tracking | Table for periodic valuations | Small |
| Investment Thesis | Track targets vs. actuals | Small |
| Covenant Monitoring | Debt compliance tracking | Small |
| Exit Planning | Wizard + readiness assessment | Medium |
| Add-on Pipeline | Track acquisition targets | Small |

---

## 3. Integration Architecture

### 3.1 Option A: Extend Existing Modules (Recommended)

Add PE capabilities to existing modules without creating a new module:

```
Turnarounds Module (extend)
├── Add "PE Turnaround" type
├── Add entry valuation, ownership %
├── Add target exit multiple
├── Add MOIC/IRR calculation
└── Link to investment thesis KPIs

Financial Module (extend)
├── Add PE-specific views (EBITDA focus)
├── Add valuation snapshots table
├── Add covenant tracking
└── Add exit value projections

Accounts Module (extend)
├── Add "Portfolio Company" account type
├── Add entry date, entry price fields
├── Add ownership percentage
└── Add strategic classification
```

**Pros:** Faster, leverages existing code, simpler maintenance
**Cons:** May feel fragmented, harder to see "portfolio view"

### 3.2 Option B: Create New PE Module

Build a dedicated PE Portfolio Module with 12-15 new tables.

**Pros:** Clean architecture, unified PE experience, scalable
**Cons:** More development effort, some code duplication

### 3.3 Recommended Approach: Hybrid

1. **Phase 1:** Extend existing modules (quick wins)
2. **Phase 2:** Build PE-specific dashboard (unified view)
3. **Phase 3:** Advanced analytics and reporting

---

## 4. Database Integration: MBA ↔ Nexus

### 4.1 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    NEXUS (Production)                   │
│                                                         │
│  Portfolio Holdings → Financial Snapshots → Turnarounds │
│         ↓                    ↓                 ↓        │
│  Entry/Exit Data      EBITDA Tracking    Initiatives    │
└───────────────────────────┬─────────────────────────────┘
                            │
                    Anonymization ETL
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    MBA (Educational)                    │
│                                                         │
│  PE Case Studies ← PE Datasets ← PE Simulations         │
│        ↓              ↓              ↓                  │
│   Case 7, etc.   pe-turnaround.json  LBO Model, etc.    │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Shared Schema Design

```sql
-- MBA Database Extension for PE Content

CREATE TABLE pe_case_datasets (
    id UUID PRIMARY KEY,
    case_id TEXT NOT NULL,
    dataset_type TEXT CHECK (dataset_type IN (
        'lbo_model', 'waterfall', 'thesis_tracking',
        'covenant_compliance', 'exit_readiness'
    )),
    anonymized_data JSONB NOT NULL,
    nexus_source_tables TEXT[],
    refresh_date TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE pe_simulation_submissions (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    simulation_type TEXT NOT NULL,
    submission_data JSONB NOT NULL,
    score NUMERIC(5,2),
    feedback TEXT,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 5. Implementation Priorities

### 5.1 MBA Curriculum (High Priority)

| Priority | Content | Est. Effort |
|----------|---------|-------------|
| 1 | PE Fundamentals Module (8 lessons) | 2-3 days |
| 2 | Deal Execution Module (6 lessons) | 2 days |
| 3 | Operational Improvement Module (6 lessons) | 2 days |
| 4 | Exit & Returns Module (4 lessons) | 1-2 days |
| 5 | Missing simulations (DD, integration) | 1-2 days |

### 5.2 Nexus Platform (Medium Priority)

| Priority | Feature | Est. Effort |
|----------|---------|-------------|
| 1 | Add PE fields to turnarounds | 1 day |
| 2 | MOIC/IRR calculation service | 1 day |
| 3 | Portfolio holdings table | 2 days |
| 4 | PE dashboard view | 2-3 days |
| 5 | Exit planning wizard | 2-3 days |

---

## 6. Success Metrics

### 6.1 MBA Curriculum

| Metric | Target |
|--------|--------|
| Lesson completion rate | >80% |
| Simulation completion rate | >70% |
| Assessment pass rate | >75% |
| Student satisfaction | >4.0/5.0 |

### 6.2 Nexus Platform

| Metric | Target |
|--------|--------|
| Portfolio overview load time | <2 seconds |
| MOIC/IRR calculation accuracy | 100% |
| User adoption (PE features) | >50% of PE users |
| Data freshness | Real-time |

---

## 7. Appendix: File Inventory

### 7.1 MBA PE Files

```
/mba/
├── cases/nexus/
│   ├── case-studies/
│   │   └── case-07-pe-turnaround-buyout.md
│   ├── datasets/
│   │   └── pe-turnaround.json
│   └── simulations/
│       ├── pe-lbo-model.md
│       ├── esop-structures-comparison.md
│       └── pe-exit-preparation.md
├── phase-03-corporate-finance/
│   └── module-06-valuation/
│       └── 05-lbo-valuation.md
└── docs/
    ├── prd-pe-buy-build-curriculum.md
    └── pe-integration-analysis.md (this file)
```

### 7.2 Nexus PE-Relevant Files

```
/nexus/src/modules/
├── turnarounds/
│   ├── types/
│   ├── services/
│   ├── hooks/
│   └── components/
├── financial/
│   ├── types/
│   ├── services/
│   └── components/
└── sales/
    ├── types/accounts.ts
    └── services/accounts.service.ts
```

---

*Document created: 2026-02-15*
*Author: Claude Code Integration Analysis*
