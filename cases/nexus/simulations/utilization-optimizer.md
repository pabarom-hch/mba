# Simulation: Utilization Optimizer

> Capacity Planning and Resource Optimization

---

## Overview

In this simulation, you will optimize resource utilization for a professional services firm. You'll analyze bench costs, make staffing decisions, and develop a capacity plan.

**Learning Objectives:**
- Calculate and interpret utilization metrics
- Analyze the cost of unutilized resources
- Make data-driven staffing decisions
- Develop capacity planning strategies

**Time Required:** 45-60 minutes

---

## Your Scenario

You are the VP of Operations at TechServices Corp. The CEO has asked you to optimize resource utilization and reduce bench costs. Current state:

**Company Metrics:**
- Total Headcount: 45 employees
- Billable Resources: 38
- Bench Resources: 7
- Target Utilization: 75%
- Actual Utilization: 68%
- Average Bill Rate: $135/hour
- Average Cost Rate: $75/hour
- Monthly Capacity: 7,200 hours (45 people × 160 hours)

---

## Exercise 1: Utilization Impact Analysis

Calculate the financial impact of the utilization gap.

### Current State

| Metric | Calculation | Value |
|--------|-------------|-------|
| Monthly Capacity Hours | 45 × 160 | 7,200 |
| Billable Hours at 68% | 7,200 × 0.68 | |
| Billable Hours at 75% | 7,200 × 0.75 | |
| Hour Gap | | |
| Revenue Gap (per month) | Gap × $135 | $ |
| Revenue Gap (annual) | Monthly × 12 | $ |

### Cost of Bench

| Bench Resource | Monthly Cost | Annual Cost |
|----------------|--------------|-------------|
| Developer (R007) | $4,500 | $54,000 |
| NOC Analyst (R008) | $6,500 | $78,000 |
| Data Entry (R009) | $3,500 | $42,000 |
| Admin (R010) | $4,000 | $48,000 |
| Other (3 people) | | |
| **Total Bench Cost** | **$31,500** | **$** |

### Total Opportunity Cost

| Component | Annual Amount |
|-----------|---------------|
| Revenue Gap (from utilization) | $ |
| Bench Salary Cost | $ |
| **Total Opportunity Cost** | **$** |

---

## Exercise 2: Utilization Scenarios

Analyze different utilization improvement scenarios.

### Scenario A: Improve Placement Speed

If you reduce average time-to-place from 45 days to 30 days:

**Assumptions:**
- Average 3 people transitioning per month
- Each placement saves 15 days × $75/day cost = $1,125 per person

| Metric | Current | Improved | Impact |
|--------|---------|----------|--------|
| Avg days on bench | 45 | 30 | -15 |
| People transitioning/month | 3 | 3 | 0 |
| Monthly cost savings | | | $ |
| Annual cost savings | | | $ |

### Scenario B: Reduce Bench to 3 People

Layoff 4 bench resources (keeping 3 for flexibility):

| Metric | Current | Reduced | Impact |
|--------|---------|---------|--------|
| Bench headcount | 7 | 3 | -4 |
| Monthly bench cost | $31,500 | | -$ |
| Severance cost (one-time) | $0 | $60,000 | -$ |
| Year 1 net savings | | | $ |
| Year 2+ annual savings | | | $ |

**Decision Matrix:**

| Factor | Keep Bench | Reduce Bench |
|--------|------------|--------------|
| Short-term cost | Higher | Lower |
| Flexibility | High | Reduced |
| Morale impact | Neutral | Negative |
| Future capacity | Ready | Requires hiring |

### Scenario C: Convert to Contractors

Replace 2 bench employees with contractor relationships:

| Metric | Employee | Contractor | Difference |
|--------|----------|------------|------------|
| Monthly cost (idle) | $9,000 | $0 | -$9,000 |
| Bill rate | $135 | $135 | $0 |
| Cost rate (working) | $75 | $95 | +$20 |
| Margin when working | 44% | 30% | -14% |

**Break-even utilization for contractor model:**
At what utilization rate does the contractor model cost the same?

---

## Exercise 3: Skills Gap Optimization

Match supply to demand using the skills inventory.

### Current Skills Gap

| Skill | Available | Demand | Gap | Priority |
|-------|-----------|--------|-----|----------|
| Healthcare IT | 8 | 12 | -4 | Critical |
| Cybersecurity | 6 | 8 | -2 | High |
| Cloud Architecture | 3 | 5 | -2 | High |
| Project Management | 4 | 3 | +1 | Surplus |
| Data Analytics | 5 | 4 | +1 | Surplus |
| General IT | 4 | 2 | +2 | Surplus |

### Gap-Closing Strategies

For each gap, identify the best strategy:

| Skill Gap | Strategy Options | Your Recommendation | Rationale |
|-----------|------------------|---------------------|-----------|
| Healthcare IT (-4) | Hire / Train / Contract | | |
| Cybersecurity (-2) | Hire / Train / Contract | | |
| Cloud Architecture (-2) | Hire / Train / Contract | | |

### Surplus Redeployment

For surplus skills, identify redeployment options:

| Surplus Skill | # Available | Retraining Option | Feasibility |
|---------------|-------------|-------------------|-------------|
| Project Management (+1) | 1 | → Healthcare PM | High |
| Data Analytics (+1) | 1 | → Healthcare Analytics | High |
| General IT (+2) | 2 | → Cloud / Cybersecurity | Medium |

---

## Exercise 4: Capacity Planning Model

Build a 6-month capacity plan.

### Demand Forecast

| Month | Confirmed Demand | Pipeline (50% prob) | Expected Demand |
|-------|------------------|---------------------|-----------------|
| Feb | 5,200 hrs | 800 hrs | 5,600 hrs |
| Mar | 5,400 hrs | 1,200 hrs | 6,000 hrs |
| Apr | 4,800 hrs | 1,500 hrs | 5,550 hrs |
| May | 4,500 hrs | 2,000 hrs | 5,500 hrs |
| Jun | 4,200 hrs | 2,500 hrs | 5,450 hrs |
| Jul | 4,000 hrs | 3,000 hrs | 5,500 hrs |

**Note:** A major engagement (8 FTEs) ends in May.

### Capacity Plan

| Month | Capacity | Demand | Gap | Action Required |
|-------|----------|--------|-----|-----------------|
| Feb | 7,200 | 5,600 | +1,600 | |
| Mar | 7,200 | 6,000 | +1,200 | |
| Apr | 7,200 | 5,550 | +1,650 | |
| May | 7,200 | 5,500 | +1,700 | |
| Jun | 6,000 | 5,450 | +550 | |
| Jul | 6,000 | 5,500 | +500 | |

**Key Questions:**
1. What happens when the 8-FTE engagement ends in May?
2. Should you start reducing capacity now or wait?
3. How does pipeline probability affect your decision?

---

## Exercise 5: Staffing Decision Framework

Create a decision framework for staffing decisions.

### Hire vs. Contract Decision

| Factor | Favor Hire | Favor Contract |
|--------|------------|----------------|
| Demand certainty | High (12+ months) | Low (<6 months) |
| Skill availability | Scarce | Available |
| Margin requirement | High (>35%) | Moderate (25-35%) |
| Cultural fit need | High | Low |
| Ramp-up time | Available | Urgent |

### Layoff Decision Criteria

| Criterion | Threshold | Current State | Decision |
|-----------|-----------|---------------|----------|
| Months on bench | >3 months | | |
| Skill demand outlook | No demand in 90 days | | |
| Performance rating | Below expectations | | |
| Retraining feasibility | Low | | |

### Your Recommendations

For each bench resource, make a recommendation:

| Resource | Skill | Months on Bench | Recommendation | Rationale |
|----------|-------|-----------------|----------------|-----------|
| R007 | Developer | 2 | | |
| R008 | NOC Analyst | 1 | | |
| R009 | Data Entry | 4 | | |
| R010 | Admin | 3 | | |

---

## Exercise 6: Action Plan

Develop a 90-day utilization improvement plan.

### 30-Day Actions (Quick Wins)

| Action | Owner | Metric | Target |
|--------|-------|--------|--------|
| | | | |
| | | | |
| | | | |

### 60-Day Actions (Process Improvements)

| Action | Owner | Metric | Target |
|--------|-------|--------|--------|
| | | | |
| | | | |
| | | | |

### 90-Day Actions (Strategic Changes)

| Action | Owner | Metric | Target |
|--------|-------|--------|--------|
| | | | |
| | | | |
| | | | |

### Success Metrics

| Metric | Current | 30-Day | 60-Day | 90-Day |
|--------|---------|--------|--------|--------|
| Utilization Rate | 68% | | | 75% |
| Bench Count | 7 | | | |
| Time to Place | 45 days | | | |
| Bench Cost/Month | $31,500 | | | |

---

## Scoring Rubric

### Self-Assessment

| Component | Poor (1) | Good (2) | Excellent (3) |
|-----------|----------|----------|---------------|
| Financial Analysis | Missing calculations | Basic math | Full impact model |
| Scenario Planning | Single scenario | Multiple scenarios | With trade-offs |
| Skills Strategy | Generic | Skill-specific | Integrated plan |
| Capacity Planning | Point-in-time | 6-month view | With contingencies |
| Action Plan | Vague | Specific | Measurable |

**Your Score:** _____ / 15

---

## Reflection Questions

1. What's the hidden cost of carrying bench resources?

2. When is it worth paying for idle capacity?

3. How do you balance flexibility vs. efficiency?

4. What would you tell a CEO who wants 90% utilization?

---

## Connection to MBA Curriculum

This simulation connects to:
- **Phase 7:** Operations management and capacity planning
- **Phase 8:** Human capital management
- **Phase 3:** Financial decision-making

---

*Data Model: Nexus Platform Resource Utilization*
*Return to [Simulations](../README.md)*
