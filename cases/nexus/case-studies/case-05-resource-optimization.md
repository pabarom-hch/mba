# Case Study: Resource Optimization & Utilization

## Case Overview

| Element | Detail |
|---------|--------|
| Company | TechServices Corp (Professional Services Firm) |
| Industry | IT Consulting & Staffing |
| Revenue | ~$3.2M annually |
| Challenge | Optimize resource utilization and capacity planning |
| Time Limit | 45 minutes (individual) or 75 minutes (group) |

---

## Background

TechServices Corp has 45 employees but is experiencing suboptimal utilization. The VP of Operations has asked you to analyze the current resource allocation and recommend improvements to:

1. Increase billable utilization from 68% to 75%
2. Reduce bench costs
3. Address skills gaps
4. Optimize staffing recommendations

---

## Exhibit 1: Resource Utilization Summary

### Current State (January 2026)

| Metric | Value | Target | Gap |
|--------|-------|--------|-----|
| Total Headcount | 45 | - | - |
| Billable Resources | 38 | 40 | -2 |
| Bench Resources | 7 | 3 | +4 |
| Target Utilization | 75% | 75% | - |
| Actual Utilization | 68% | 75% | -7% |
| Monthly Capacity Hours | 7,200 | 7,200 | - |
| Billable Hours Actual | 4,896 | 5,400 | -504 |
| Bench Cost Monthly | $31,500 | $13,500 | +$18,000 |

### Utilization Trend (Last 6 Months)

| Month | Utilization | Bench | Revenue |
|-------|-------------|-------|---------|
| Aug 2025 | 72% | 5 | $295,000 |
| Sep 2025 | 74% | 4 | $310,000 |
| Oct 2025 | 71% | 5 | $285,000 |
| Nov 2025 | 69% | 6 | $275,000 |
| Dec 2025 | 66% | 7 | $260,000 |
| Jan 2026 | 68% | 7 | $272,000 |

---

## Exhibit 2: Resource Assignments

### Active Assignments

| Resource ID | Role | Client | Allocation | Billable | Bill Rate | Cost Rate |
|-------------|------|--------|------------|----------|-----------|-----------|
| R001 | Team Lead | Beta Healthcare | 100% | Yes | $145 | $85 |
| R002 | Data Analyst | Beta Healthcare | 100% | Yes | $95 | $55 |
| R003 | Data Analyst | Beta Healthcare | 100% | Yes | $95 | $55 |
| R004 | SOC Analyst | Gamma Manufacturing | 50% | Yes | $150 | $90 |
| R005 | Cloud Architect | Delta Tech | 75% | Yes | $175 | $110 |
| R006 | Project Manager | Alpha Government | 100% | Yes | $135 | $80 |
| R007 | Developer | (Bench) | 0% | No | $0 | $45 |
| R008 | NOC Analyst | (Bench) | 0% | No | $0 | $65 |

### Assignment Details

**Active Engagement: Beta Healthcare - COVID Response**
- Duration: Jan 2024 - Jun 2026
- Team Size: 8 FTEs
- Monthly Revenue: $125,000
- Margin: 24%
- Risk: Contract end in 5 months

**Active Engagement: Gamma Manufacturing - Managed Security**
- Duration: Aug 2025 - Jul 2026
- Team Size: 3 FTEs (2 at 50%, 1 at 100%)
- Monthly Revenue: $24,000
- Margin: 35%
- Risk: Low

---

## Exhibit 3: Utilization by Function

### Functional Analysis

| Function | Headcount | Utilization | Revenue Contribution |
|----------|-----------|-------------|---------------------|
| Client Billable | 32 | 85% | 92% |
| Managed Services | 6 | 75% | 6% |
| Back Office | 4 | 0% | 0% |
| Management | 3 | 15% | 2% |

### Utilization Distribution

```
Utilization by Person (32 Billable Staff)
│
│ 100%  ████████████████ (12 people)
│  90%  ████████ (6 people)
│  80%  ██████ (5 people)
│  75%  ████ (4 people)
│  50%  ███ (3 people)
│  25%  ██ (2 people)
│   0%  ████████ (7 people - BENCH)
│
└──────────────────────────────────────
```

---

## Exhibit 4: Skills Gap Analysis

### Current Skills Inventory vs. Demand

| Skill | Available FTEs | Demand (FTEs) | Gap | Status |
|-------|----------------|---------------|-----|--------|
| Healthcare IT | 8 | 12 | -4 | Critical |
| Cybersecurity | 6 | 8 | -2 | High |
| Cloud Architecture | 3 | 5 | -2 | High |
| Project Management | 4 | 3 | +1 | Surplus |
| Data Analytics | 5 | 4 | +1 | Surplus |
| General IT Support | 4 | 2 | +2 | Surplus |

### Skills Gap Visualization

```
Skills Gap Analysis
                   ← SHORTAGE │ SURPLUS →
Healthcare IT      ████████░░░░│
Cybersecurity      ████░░░░░░░░│
Cloud Architecture ████░░░░░░░░│
Project Management             │░░░░
Data Analytics                 │░░░░
General IT Support             │████████
                   -4  -2   0  +2  +4
```

---

## Exhibit 5: Staffing Recommendations

### AI-Generated Recommendations

| Skill | Recommendation | Quantity | Urgency | Revenue at Risk |
|-------|----------------|----------|---------|-----------------|
| Healthcare IT | Hire | 3 | High | $450,000 |
| Cybersecurity | Hire | 2 | Medium | $240,000 |
| Cloud Architecture | Hire | 1 | Medium | $180,000 |
| General IT Support | Redeploy/Train | 2 | Low | $0 |
| Project Management | Cross-train | 1 | Low | $0 |

### Financial Analysis

**Cost of Hiring:**
- Healthcare IT: 3 × $85,000 salary = $255,000/year fully loaded
- Cybersecurity: 2 × $90,000 salary = $180,000/year fully loaded
- Cloud Architecture: 1 × $130,000 salary = $130,000/year fully loaded
- **Total Annual Cost: $565,000**

**Revenue Potential:**
- Healthcare IT: 3 × 1,800 billable hours × $130 = $702,000
- Cybersecurity: 2 × 1,700 billable hours × $145 = $493,000
- Cloud Architecture: 1 × 1,500 billable hours × $175 = $262,500
- **Total Annual Revenue: $1,457,500**

**Net Impact:** $892,500 contribution

### Bench Resource Analysis

| Resource | Skill | Cost/Month | Months on Bench | Total Cost | Options |
|----------|-------|------------|-----------------|------------|---------|
| R007 | Developer | $4,500 | 2 | $9,000 | Retrain for Cloud |
| R008 | NOC Analyst | $6,500 | 1 | $6,500 | Active placement |
| R009 | Data Entry | $3,500 | 4 | $14,000 | Terminate or retrain |
| R010 | Admin | $4,000 | 3 | $12,000 | Internal role? |

---

## Discussion Questions

### Question 1: Utilization Analysis (10 minutes)

Calculate the financial impact of the utilization gap:
1. What is the monthly revenue loss from 68% vs. 75% utilization?
2. What is the annual opportunity cost?
3. At what utilization rate does the firm break even?

**Show your work:**
- Monthly capacity: ___ hours
- Hours at 68%: ___ hours
- Hours at 75%: ___ hours
- Gap: ___ hours
- Revenue per hour (avg): $___
- Monthly revenue gap: $___

### Question 2: Bench Cost Analysis (10 minutes)

The firm has 7 people on the bench costing $31,500/month:
1. What is the annual cost of carrying this bench?
2. At what point should the firm consider layoffs?
3. What are the alternatives to layoffs?
4. Build a decision framework for bench management

### Question 3: Skills Gap Strategy (15 minutes)

Design a 6-month plan to close the Healthcare IT skills gap (-4 FTEs):

Consider:
- Hiring timeline (typically 60-90 days)
- Training existing staff (timeline, cost)
- Using contractors (cost premium, flexibility)
- Risk of not addressing gap (revenue at risk)

Create a month-by-month action plan with specific milestones.

### Question 4: Staffing ROI (10 minutes)

Using Exhibit 5 recommendations:
1. Calculate the ROI of the proposed hires
2. What is the payback period?
3. Which hires should be prioritized and why?
4. What utilization rate must new hires achieve to break even?

### Question 5: Resource Optimization Strategy (15 minutes)

The Beta Healthcare engagement ends in 5 months with 8 FTEs:
1. What is your transition plan?
2. How do you avoid a utilization crisis?
3. What proactive measures should start now?
4. Draft a 90-day resource management plan

---

## Consulting Approach

### Utilization Framework

```
UTILIZATION = Billable Hours / Available Hours

Revenue Impact = Hours Gap × Average Bill Rate

Optimization Levers:
├── Increase Billable Hours
│   ├── Reduce bench time
│   ├── Faster placement
│   └── Extension sales
│
├── Reduce Available Hours (only if necessary)
│   ├── Layoffs
│   ├── Reduced hours
│   └── Natural attrition
│
└── Improve Mix
    ├── Higher-rate roles
    ├── Senior vs. junior
    └── Managed vs. staffing
```

### Capacity Planning Model

| Planning Horizon | Focus | Accuracy |
|------------------|-------|----------|
| 0-30 days | Assignment management | High |
| 30-90 days | Pipeline + placement | Medium |
| 90-180 days | Hiring + training | Low |
| 180+ days | Strategic planning | Directional |

### Key Metrics

| Metric | Definition | Target | Current |
|--------|------------|--------|---------|
| Utilization Rate | Billable / Available | 75% | 68% |
| Bench Ratio | Bench / Total | <10% | 16% |
| Time to Fill | Days to fill position | <30 | 45 |
| Revenue per FTE | Revenue / Headcount | $80K/qtr | $68K/qtr |
| Attrition Rate | Departures / Headcount | <15% | 12% |

---

## Teaching Note

### Key Learning Objectives

1. **Calculate utilization economics** - Every percentage point matters
2. **Analyze bench costs** - Understand the true cost of unutilized resources
3. **Conduct skills gap analysis** - Match supply to demand
4. **Make staffing decisions** - Hire, train, or terminate
5. **Plan for capacity transitions** - Proactive vs. reactive management

### Calculation Examples

**Utilization Revenue Impact:**
- Monthly capacity: 7,200 hours
- At 68%: 4,896 billable hours
- At 75%: 5,400 billable hours
- Gap: 504 hours
- Avg bill rate: $135
- Monthly gap: 504 × $135 = **$68,040**
- Annual gap: **$816,480**

**Bench Break-Even:**
- Bench cost: $31,500/month
- Avg bill rate: $135
- Avg cost rate: $75
- Gross margin: $60/hour
- Hours needed to cover bench: $31,500 / $60 = 525 hours
- If 7 people, each needs: 75 billable hours to break even

---

## Scoring Rubric

| Criteria | Poor (0-2) | Good (3-4) | Excellent (5) |
|----------|------------|------------|---------------|
| Utilization Analysis | No calculations | Basic % analysis | Revenue impact quantified |
| Strategic Thinking | Reactive only | Some proactive | Full planning horizon |
| Skills Gap Response | Hire only | Multiple options | Integrated talent strategy |
| Financial Rigor | Missing numbers | Good estimates | Detailed ROI model |
| Action Planning | Vague | Specific steps | Timeline with milestones |

---

*Data Source: Nexus Platform (anonymized)*
*Return to [Nexus Case Studies](../README.md)*
