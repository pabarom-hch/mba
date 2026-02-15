# Simulation: Engagement Financial Modeling

> Analyze and Optimize Professional Services Profitability

---

## Overview

In this simulation, you will build a financial model for a professional services engagement. You'll calculate profitability, conduct sensitivity analysis, and make pricing decisions.

**Learning Objectives:**
- Calculate engagement-level profitability
- Understand cost structure in services firms
- Conduct sensitivity analysis
- Make data-driven pricing decisions

**Time Required:** 45-60 minutes

---

## Your Scenario

You are a delivery manager at TechServices Corp. A new engagement opportunity has been proposed:

**Engagement Details:**
- Client: State Health Agency
- Project: Public Health Dashboard Implementation
- Duration: 6 months
- Scope: Design, build, and deploy a public health analytics dashboard

**Team Requirement:**
- 1 Senior Cloud Architect (75% allocation)
- 2 Mid-Level Data Analysts (100% allocation each)
- 1 Junior Developer (100% allocation)
- 1 Project Manager (50% allocation)

---

## Exercise 1: Rate Card Application

Using the rate card data, calculate the team cost and revenue.

### Rate Card Reference

| Role | Level | Bill Rate | Cost Rate |
|------|-------|-----------|-----------|
| Cloud Architect | Senior | $175/hr | $110/hr |
| Data Analyst | Mid | $130/hr | $72/hr |
| Developer | Junior | $110/hr | $45/hr |
| Project Manager | Mid | $135/hr | $80/hr |

### Your Calculations

**Monthly Hours per Person (at 100% allocation):** 160 hours

| Role | Allocation | Monthly Hours | Bill Rate | Monthly Revenue | Cost Rate | Monthly Cost |
|------|------------|---------------|-----------|-----------------|-----------|--------------|
| Cloud Architect | 75% | | $175 | $ | $110 | $ |
| Data Analyst 1 | 100% | | $130 | $ | $72 | $ |
| Data Analyst 2 | 100% | | $130 | $ | $72 | $ |
| Developer | 100% | | $110 | $ | $45 | $ |
| Project Manager | 50% | | $135 | $ | $80 | $ |
| **TOTAL** | | | | **$** | | **$** |

**Monthly Gross Profit:** $_________

**Monthly Gross Margin:** __________%

---

## Exercise 2: Full Engagement P&L

Build a 6-month P&L for this engagement.

### P&L Template

| Line Item | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 | Month 6 | Total |
|-----------|---------|---------|---------|---------|---------|---------|-------|
| **Revenue** | | | | | | | |
| Labor Revenue | | | | | | | |
| ODC Revenue (5%) | | | | | | | |
| **Total Revenue** | | | | | | | |
| | | | | | | | |
| **Direct Costs** | | | | | | | |
| Labor Cost | | | | | | | |
| ODC (travel, etc.) | | | | | | | |
| **Total Direct Cost** | | | | | | | |
| | | | | | | | |
| **Gross Profit** | | | | | | | |
| **Gross Margin %** | | | | | | | |
| | | | | | | | |
| Overhead Allocation (15%) | | | | | | | |
| **Net Contribution** | | | | | | | |
| **Net Margin %** | | | | | | | |

**Assumptions:**
- ODC (travel, software licenses) = 5% of labor revenue
- Overhead allocation = 15% of total revenue
- All months are equivalent (no ramp-up)

---

## Exercise 3: Sensitivity Analysis

Analyze how changes affect profitability.

### Scenario A: Utilization Drop

What if your team achieves only 80% of planned billable hours (due to rework, scope creep, etc.)?

| Metric | Planned (100%) | Actual (80%) | Impact |
|--------|----------------|--------------|--------|
| Monthly Revenue | $ | $ | -$ |
| Monthly Cost | $ | $ | $ |
| Monthly Gross Profit | $ | $ | -$ |
| Gross Margin % | % | % | -% |

### Scenario B: Cost Overrun

What if labor costs increase 10% (overtime, contractors needed)?

| Metric | Planned | +10% Cost | Impact |
|--------|---------|-----------|--------|
| Monthly Revenue | $ | $ | $ |
| Monthly Cost | $ | $ | +$ |
| Monthly Gross Profit | $ | $ | -$ |
| Gross Margin % | % | % | -% |

### Scenario C: Rate Negotiation

The client wants a 12% discount on rates. Should you accept?

| Metric | Standard Rates | -12% Discount | Impact |
|--------|----------------|---------------|--------|
| Monthly Revenue | $ | $ | -$ |
| Monthly Cost | $ | $ | $ |
| Monthly Gross Profit | $ | $ | -$ |
| Gross Margin % | % | % | -% |

**Decision:** Accept discount? Y / N
**Rationale:** ________________________________________________

---

## Exercise 4: Break-Even Analysis

Calculate the break-even point for this engagement.

### Fixed Costs (One-Time)
- Project setup: $15,000
- Training: $5,000
- Travel (initial): $8,000
- **Total Fixed:** $28,000

### Variable Margin
- Gross margin per month: $__________

### Break-Even Calculation

**Break-Even Point (months) = Fixed Costs / Monthly Gross Profit**

Break-Even = $28,000 / $_________ = _________ months

**Question:** Given a 6-month engagement, how many months of "profitable" operations do you have after break-even?

---

## Exercise 5: Pricing Strategy

The client has asked for a fixed-price proposal instead of T&M.

### Fixed-Price Calculation

| Component | Calculation | Amount |
|-----------|-------------|--------|
| Base Labor Revenue (6 months) | | $ |
| ODC Estimate | | $ |
| Risk Contingency (15%) | | $ |
| **Fixed Price** | | **$** |

### Risk Analysis

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | Medium | High | |
| Staff turnover | Low | Medium | |
| Technical challenges | Medium | Medium | |
| Client delays | High | Medium | |

### Decision Framework

**T&M Pros:**
- Lower risk for vendor
- Flexibility for changes
- Transparent pricing

**Fixed-Price Pros:**
- Predictable cost for client
- Incentive for efficiency
- Clear accountability

**Your Recommendation:** T&M / Fixed-Price / Hybrid

**Rationale:** ________________________________________________

---

## Exercise 6: Portfolio Optimization

You have three potential engagements competing for resources:

| Engagement | Revenue | Margin | Duration | Resources Needed |
|------------|---------|--------|----------|------------------|
| This one (Health Dashboard) | $XXX | XX% | 6 months | 5 FTEs |
| Manufacturing Security | $180,000 | 35% | 12 months | 2 FTEs |
| Cloud Migration | $450,000 | 25% | 9 months | 4 FTEs |

**Question:** If you can only staff two of these three, which do you choose?

| Factor | Weight | Dashboard | Manufacturing | Cloud |
|--------|--------|-----------|---------------|-------|
| Margin % | 30% | | | |
| Total GP $ | 25% | | | |
| Strategic fit | 20% | | | |
| Resource efficiency | 15% | | | |
| Client relationship | 10% | | | |
| **Weighted Score** | 100% | | | |

**Recommendation:** ________________________________________________

---

## Scoring Rubric

### Self-Assessment

| Component | Poor (1) | Good (2) | Excellent (3) |
|-----------|----------|----------|---------------|
| P&L Accuracy | Calculation errors | Mostly correct | Fully accurate |
| Sensitivity Analysis | Surface level | Good scenarios | Actionable insights |
| Break-Even | Incomplete | Correct | With interpretation |
| Pricing Strategy | Missing rationale | Good analysis | Strategic recommendation |
| Portfolio Decision | Single factor | Multi-factor | Weighted decision |

**Your Score:** _____ / 15

---

## Reflection Questions

1. What surprised you about the engagement economics?

2. How would you explain margin vs. revenue to a non-financial stakeholder?

3. What's the single biggest lever for improving profitability?

4. How does this connect to your understanding of services firms?

---

## Connection to MBA Curriculum

This simulation connects to:
- **Phase 2:** Financial accounting fundamentals
- **Phase 3:** Cost of capital and project evaluation
- **Phase 7:** Operations and capacity analysis

---

*Data Model: Nexus Platform Financial Snapshots*
*Return to [Simulations](../README.md)*
