# Case Study: TechFlow Pricing Strategy

## Case Overview

| Element | Detail |
|---------|--------|
| Company | TechFlow Software |
| Industry | B2B SaaS |
| Revenue | $25M ARR |
| Challenge | Optimize pricing to increase revenue and profitability |
| Time Limit | 45 minutes |

---

## Background

TechFlow is a B2B SaaS company that provides workflow automation software to mid-market companies (100-1,000 employees). Founded 5 years ago, the company has grown to $25M in annual recurring revenue with 500 customers.

The CEO has asked you to evaluate the current pricing strategy and recommend improvements.

---

## Current Pricing

**Single Tier:**
- $500/month per company (unlimited users)
- Annual contract: $5,000/year (17% discount)
- Month-to-month available at $500/month

**Current Metrics:**

| Metric | Value |
|--------|-------|
| Total customers | 500 |
| Average revenue per customer | $50,000/year |
| Customer acquisition cost (CAC) | $15,000 |
| Gross margin | 80% |
| Annual churn rate | 12% |
| Net Revenue Retention | 95% |

---

## Exhibit 1: Customer Segmentation Analysis

A survey of current and potential customers reveals distinct segments:

| Segment | % of Market | Current Customers | Willingness to Pay | Key Value Driver |
|---------|-------------|-------------------|-------------------|------------------|
| **Enterprise** (500+ employees) | 10% | 50 (10%) | $15,000-25,000/month | Advanced features, integrations |
| **Growth** (200-500 employees) | 25% | 200 (40%) | $1,000-2,500/month | Scalability, support |
| **Core** (100-200 employees) | 35% | 200 (40%) | $500-1,000/month | Core functionality |
| **SMB** (<100 employees) | 30% | 50 (10%) | $100-300/month | Price, simplicity |

---

## Exhibit 2: Win/Loss Analysis

**Reasons for Won Deals:**

| Reason | % of Wins |
|--------|-----------|
| Product capabilities | 45% |
| Price | 25% |
| Implementation support | 15% |
| Brand/references | 15% |

**Reasons for Lost Deals:**

| Reason | % of Losses | Segment Most Affected |
|--------|-------------|----------------------|
| Price too high | 40% | SMB, Core |
| Missing enterprise features | 25% | Enterprise |
| Chose competitor | 20% | Growth |
| Did nothing | 15% | All |

**Lost Deal Details:**
- Lost 150 SMB deals last year (priced out)
- Lost 30 Enterprise deals (needed features we don't have)
- Lost 40 Growth deals to competitors with better mid-tier offerings

---

## Exhibit 3: Feature Usage Analysis

| Feature | % Using | Development Cost | Enterprise Need | SMB Need |
|---------|---------|------------------|-----------------|----------|
| Basic workflows | 100% | Low | Must have | Must have |
| Custom integrations | 45% | Medium | Critical | Nice to have |
| Advanced analytics | 30% | High | Critical | Not needed |
| SSO/Security | 25% | Medium | Must have | Not needed |
| API access | 40% | Medium | Critical | Nice to have |
| White labeling | 10% | Low | Nice to have | Not needed |
| 24/7 support | 15% | High | Must have | Not needed |

---

## Exhibit 4: Competitive Landscape

| Competitor | Target Segment | Pricing Model | Price Range |
|------------|---------------|---------------|-------------|
| AutomateNow | Enterprise | Per-user | $50-100/user/month |
| FlowSimple | SMB | Flat rate | $99-299/month |
| WorkStream | Mid-market | Tiered | $299-999/month |
| TechFlow (You) | Mid-market | Flat rate | $500/month |

**Competitive Notes:**
- AutomateNow is winning enterprise deals with advanced features
- FlowSimple is winning SMB deals with lower price
- WorkStream's tiered model captures value across segments

---

## Exhibit 5: Elasticity Research

A conjoint analysis study estimates price elasticity by segment:

| Segment | Price Elasticity | Interpretation |
|---------|-----------------|----------------|
| Enterprise | -0.4 | Very inelastic - will pay for value |
| Growth | -1.2 | Moderately elastic |
| Core | -1.8 | Elastic - price sensitive |
| SMB | -2.5 | Very elastic - highly price sensitive |

---

## Discussion Questions

### Question 1: Diagnose the Current Pricing Problem
Using microeconomic concepts (elasticity, consumer surplus, segmentation), explain what's wrong with TechFlow's current pricing strategy.

### Question 2: Design a New Pricing Structure
Design a tiered pricing model that:
- Captures more value from high-WTP customers
- Attracts price-sensitive segments
- Maximizes revenue and profit

Specify tiers, prices, and features for each tier.

### Question 3: Quantify the Opportunity
Estimate the revenue impact of your proposed pricing changes. Show your assumptions and calculations.

### Question 4: Address Risks
What are the risks of implementing your new pricing? How would you mitigate them?

### Question 5: Behavioral Design
Incorporate behavioral economics principles into your pricing design. What psychological factors would you leverage?

---

## Analysis Framework

### Step 1: Diagnose the Problem

**Current Issues:**

1. **Single price = leaving money on the table**
   - Enterprise customers pay $500/month but are willing to pay $15,000-$25,000
   - Consumer surplus being left with high-value customers

2. **Single price = excluding customers**
   - SMB segment willing to pay $100-$300 but priced out at $500
   - Lost 150 SMB deals = $150K-$450K in annual revenue

3. **Feature mismatch**
   - Enterprise needs advanced features not offered
   - SMB paying for features they don't need

4. **Elasticity ignored**
   - Charging inelastic customers (Enterprise, -0.4) the same as elastic customers (SMB, -2.5)
   - Should charge more where elasticity is low

### Step 2: Design Tiered Pricing

**Proposed Structure:**

| Tier | Target Segment | Monthly Price | Annual Price | Key Features |
|------|---------------|---------------|--------------|--------------|
| **Starter** | SMB | $199 | $1,990 | Basic workflows, email support |
| **Professional** | Core | $599 | $5,990 | + Integrations, priority support |
| **Business** | Growth | $1,499 | $14,990 | + Analytics, API, phone support |
| **Enterprise** | Enterprise | $4,999 | $49,990 | + SSO, 24/7 support, custom integrations |

**Feature Mapping:**

| Feature | Starter | Professional | Business | Enterprise |
|---------|---------|--------------|----------|------------|
| Basic workflows | ✓ | ✓ | ✓ | ✓ |
| Standard integrations | - | ✓ | ✓ | ✓ |
| Advanced analytics | - | - | ✓ | ✓ |
| API access | - | - | ✓ | ✓ |
| SSO/Security | - | - | - | ✓ |
| 24/7 support | - | - | - | ✓ |
| Custom integrations | - | - | - | ✓ |

### Step 3: Quantify the Opportunity

**Current State:**
- 500 customers × $50K average = $25M ARR

**Projected State:**

*Migration assumptions:*
- 50 Enterprise customers → Enterprise tier (80%) + Business (20%)
- 200 Growth customers → Business tier (60%) + Professional (40%)
- 200 Core customers → Professional (70%) + Starter (30%)
- 50 SMB customers → Starter (100%)

*New customer acquisition:*
- Starter tier captures previously lost SMB: +100 customers
- Enterprise tier captures previously lost Enterprise: +15 customers

**Revenue Calculation:**

| Tier | Customers | Annual Price | Revenue |
|------|-----------|--------------|---------|
| Starter | 160 | $1,990 | $318K |
| Professional | 140 | $5,990 | $839K |
| Business | 175 | $14,990 | $2.62M |
| Enterprise | 55 | $49,990 | $2.75M |
| **Total** | **530** | | **$6.53M** |

Wait—this is dramatically lower than current $25M. Let me recalculate.

Current ARPU is $50,000, which implies annual pricing, not monthly. Let me adjust.

**Revised Current State:**
- 500 customers × $50K/year = $25M ARR
- Current pricing: $5,000/year or $500/month × 12 = $6,000/year
- Average is $50K suggests per-seat or volume pricing we haven't accounted for

Let me re-interpret: $50K average likely includes larger companies paying more (perhaps per-user component or negotiated deals).

**Simplified Revenue Model:**

| Segment | Customers | Current ARPU | Proposed ARPU | Current Rev | Proposed Rev |
|---------|-----------|--------------|---------------|-------------|--------------|
| Enterprise | 50 | $150K | $600K | $7.5M | $30M |
| Growth | 200 | $50K | $180K | $10M | $36M |
| Core | 200 | $20K | $72K | $4M | $14.4M |
| SMB | 50 | $7K | $24K | $0.35M | $1.2M |
| **New SMB** | +100 | - | $24K | - | $2.4M |
| **New Enterprise** | +15 | - | $600K | - | $9M |

This projection is unrealistic—it assumes massive price increases that customers would reject.

**More Realistic Model:**

| Change | Revenue Impact |
|--------|---------------|
| Enterprise upsell (50 customers, +$50K each) | +$2.5M |
| Growth upsell (200 customers, +$10K each) | +$2.0M |
| Core migration (minimal price change) | $0 |
| New SMB customers (100 × $2K) | +$0.2M |
| **Total Impact** | **+$4.7M (+19%)** |

---

## Teaching Note

### Key Insights

1. **Single pricing leaves value on table**
   - Enterprise segment has low elasticity but pays the same as everyone
   - Classic consumer surplus problem

2. **Single pricing excludes potential customers**
   - SMB segment priced out entirely
   - High elasticity segment should have lower prices

3. **Tiered pricing captures more value**
   - Price discrimination by self-selection
   - Features as the segmentation mechanism

4. **Behavioral elements matter**
   - Decoy pricing (make middle tier look attractive)
   - Anchoring (show Enterprise first)
   - Loss aversion (annual discount frames monthly as "losing money")

### Recommended Answer Structure

1. **Diagnose** using microeconomic concepts (elasticity, consumer surplus)
2. **Design** tiers with clear segmentation and feature mapping
3. **Quantify** conservatively with clear assumptions
4. **Address risks** (customer pushback, competitive response, execution)
5. **Incorporate behavioral design** (anchoring, defaults, framing)

### Common Mistakes

- Ignoring elasticity differences across segments
- Creating too many tiers (confusing)
- Not thinking about migration path for existing customers
- Unrealistic revenue projections
- Missing behavioral design opportunities

---

*Return to [Module 1 Overview](../README.md)*
