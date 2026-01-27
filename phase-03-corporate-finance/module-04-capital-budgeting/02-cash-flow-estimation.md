# Cash Flow Estimation

## Learning Objectives

- Identify relevant cash flows for investment decisions
- Distinguish incremental from total cash flows
- Handle sunk costs, opportunity costs, and externalities
- Calculate operating cash flow correctly
- Estimate terminal value and salvage
- Avoid common cash flow estimation errors

---

## Introduction

The most important step in capital budgeting isn't choosing the right discount rate or calculating NPV—it's correctly estimating cash flows. Garbage in, garbage out. The best financial model is worthless if cash flow projections are wrong.

This is where consulting meets reality. You can master every formula, but if you can't identify the right cash flows, your analysis fails.

---

## Core Concepts

### The Incremental Cash Flow Principle

**Only include cash flows that change because of the project.**

```
Incremental CF = CF with project - CF without project
```

**Key Questions:**
1. Does this cash flow exist only because of the project?
2. Would this cash flow change if we don't do the project?
3. Is this a cash flow or an accounting entry?

### Relevant vs. Irrelevant Cash Flows

| Relevant (Include) | Irrelevant (Exclude) |
|-------------------|---------------------|
| Incremental revenues | Sunk costs |
| Incremental costs | Allocated overhead (if unchanged) |
| Opportunity costs | Financing costs (in discount rate) |
| Cannibalization effects | Accounting depreciation (non-cash) |
| Working capital changes | Existing costs that don't change |
| Tax effects | |

### Sunk Costs

**Definition:** Costs already incurred that cannot be recovered.

**Rule:** NEVER include sunk costs in analysis.

**Example:**
```
Company spent $2M on market research for new product.
Product decision: Launch or don't launch?

The $2M is SUNK—irrelevant to decision.
Only consider future incremental cash flows.
```

**Why People Get This Wrong:**
- Psychological: "We've already invested so much..."
- Accounting: Sunk costs appear in financial statements
- Emotional: Hard to "waste" past investment

### Opportunity Costs

**Definition:** Value of the best alternative foregone.

**Rule:** ALWAYS include opportunity costs.

**Example:**
```
New project will use factory space currently rented out for $100K/year.
Opportunity cost = $100K/year (lost rental income)

Even though no cash changes hands internally,
the project costs you $100K in foregone rental revenue.
```

### Externalities (Side Effects)

**Cannibalization:**
```
New product will take sales from existing product.
Include the lost contribution from existing product as a cost.

Example:
New product revenues: $500K
Lost sales from old product: $150K
Net incremental revenue: $350K
```

**Synergies:**
```
New product increases sales of complementary product.
Include the incremental contribution as a benefit.
```

### Working Capital Requirements

**Working capital changes are real cash flows.**

```
Initial investment in working capital:
- Inventory buildup before launch
- Accounts receivable as sales begin
- Less: Accounts payable from suppliers

Net Working Capital = Current Assets - Current Liabilities
```

**Cash Flow Impact:**
- Increase in NWC = Cash OUTFLOW
- Decrease in NWC = Cash INFLOW
- At project end, NWC is typically recovered

**Example:**
```
Year 0: Build inventory $200K, establish A/R $100K, A/P ($80K)
Initial NWC investment: $220K (cash outflow)

Year 5 (project end): Liquidate inventory, collect A/R, pay A/P
NWC recovery: $220K (cash inflow)
```

---

## Operating Cash Flow Calculation

### Three Methods (Same Answer)

**Method 1: Direct (Bottom-Up)**
```
OCF = Revenue - Cash Operating Costs - Taxes
```

**Method 2: Indirect (Top-Down)**
```
OCF = Net Income + Depreciation

(Depreciation is added back because it's non-cash)
```

**Method 3: Tax Shield (Most Used)**
```
OCF = (Revenue - Costs) × (1 - Tax Rate) + Depreciation × Tax Rate

Or:
OCF = EBIT × (1-T) + Depreciation
OCF = (Revenue - Costs - Depreciation)(1-T) + Depreciation
```

### Tax Shield Method Explained

```
Why this formula works:

EBIT × (1-T) = After-tax operating profit (if depreciation were cash)
Depreciation × T = Tax savings from depreciation deduction

Together: After-tax profit + depreciation tax shield
```

**Example:**
```
Revenue: $1,000
Cash Costs: $600
Depreciation: $100
Tax Rate: 25%

Method 1:
Taxable Income = 1,000 - 600 - 100 = $300
Tax = 300 × 0.25 = $75
Net Income = $225
OCF = 225 + 100 = $325

Method 3:
OCF = (1,000 - 600) × 0.75 + 100 × 0.25
OCF = 300 + 25 = $325 ✓
```

---

## Project Cash Flow Structure

### Timeline Template

```
Year 0 (Initial Investment):
- Capital expenditure (outflow)
- Working capital investment (outflow)
- Installation/startup costs (outflow)

Years 1-N (Operating Period):
+ Operating revenues
- Operating costs (cash)
- Taxes on operating income
= Operating Cash Flow

Year N (Terminal):
+ Salvage value of assets
- Tax on gain from sale
+ Recovery of working capital
= Terminal Cash Flow
```

### Complete Example

**New Manufacturing Line:**

| Item | Year 0 | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|------|--------|--------|--------|--------|--------|--------|
| Equipment | (500) | | | | | |
| Working Capital | (100) | | | | | 100 |
| Revenue | | 400 | 450 | 500 | 500 | 450 |
| Cash Costs | | (200) | (220) | (240) | (240) | (220) |
| Depreciation | | (100) | (100) | (100) | (100) | (100) |
| EBIT | | 100 | 130 | 160 | 160 | 130 |
| Tax (25%) | | (25) | (33) | (40) | (40) | (33) |
| Net Income | | 75 | 97 | 120 | 120 | 97 |
| +Depreciation | | 100 | 100 | 100 | 100 | 100 |
| **OCF** | | **175** | **197** | **220** | **220** | **197** |
| Salvage Value | | | | | | 75 |
| Tax on Salvage | | | | | | (19) |
| **Total CF** | **(600)** | **175** | **197** | **220** | **220** | **353** |

---

## Consulting Application

### Due Diligence Cash Flow Verification

When evaluating management's projections:

**Red Flags:**
1. Revenue growth without working capital build
2. Margins improving without clear drivers
3. No cannibalization effects considered
4. Terminal value dominates NPV
5. No downside scenario

**Verification Steps:**
1. Compare to historical relationships
2. Benchmark against industry norms
3. Stress test key assumptions
4. Request supporting detail

### McKinsey Value Driver Approach

Break cash flows into value drivers:

```
Revenue = Units × Price
Costs = Fixed + (Variable × Units)
Working Capital = Revenue × NWC/Sales ratio
CapEx = Maintenance + Growth investment
```

This approach:
- Makes assumptions explicit
- Enables sensitivity analysis
- Improves stakeholder communication

---

## CEO Application

### Questions to Ask Your Team

When reviewing investment proposals:

1. **"What's the baseline?"** - What happens if we don't invest?
2. **"Are sunk costs included?"** - They shouldn't be
3. **"What's the opportunity cost?"** - What are we giving up?
4. **"How will this affect existing business?"** - Cannibalization?
5. **"What working capital is needed?"** - Often underestimated
6. **"What's the source of terminal value?"** - Challenge the perpetuity

### Common Manipulation Points

Watch for:
- **Optimistic revenue projections** - Always pressure test
- **Ignored cannibalization** - Inflates NPV
- **Understated working capital** - Hides cash needs
- **Inflated terminal value** - Delays reality
- **Excluded integration costs** - Especially in M&A

---

## Worked Example

### Make vs. Buy Decision

**Situation:** Company considering in-house production vs. outsourcing

**Current State (Outsourced):**
- Annual units: 100,000
- Purchase price: $10/unit
- Annual cost: $1,000,000

**In-House Option:**
- Equipment: $2,000,000 (5-year life, no salvage)
- Variable cost: $6/unit
- Fixed costs: $200,000/year
- Working capital: $150,000
- Tax rate: 25%

**Analysis:**

```
Incremental Cash Flows:

Year 0:
Equipment: ($2,000,000)
Working Capital: ($150,000)
Total: ($2,150,000)

Years 1-5:
Cost Savings: $1,000,000 - (100,000 × $6 + $200,000) = $200,000
Depreciation: $400,000/year
Tax on Savings: ($200,000 - $400,000) × 25% = +$50,000 (tax savings)

Wait—taxable income is negative. Let's recalculate:

EBIT = Savings - Depreciation = $200,000 - $400,000 = ($200,000)
Tax Savings = $200,000 × 25% = $50,000

OCF = EBIT × (1-T) + Depreciation
OCF = -$200,000 × 0.75 + $400,000 = $250,000

Or using tax shield:
OCF = $200,000 × (1-0.25) + $400,000 × 0.25
OCF = $150,000 + $100,000 = $250,000 ✓

Year 5 Terminal:
Working Capital Recovery: $150,000

Summary:
Year 0: ($2,150,000)
Years 1-4: $250,000
Year 5: $400,000
```

At 10% discount rate:
```
NPV = -2,150,000 + 250,000×PVIFA(10%,4) + 400,000/(1.10)^5
NPV = -2,150,000 + 250,000×3.170 + 248,369
NPV = -2,150,000 + 792,500 + 248,369
NPV = ($1,109,131)
```

**Conclusion:** Continue outsourcing. NPV is negative.

---

## Common Mistakes

### 1. Including Financing Costs
**Mistake:** Subtracting interest expense from project cash flows.
**Reality:** Financing costs are in the discount rate. Double-counting!

### 2. Forgetting Sunk Cost Rule
**Mistake:** "We already spent $1M on R&D, so we have to launch."
**Reality:** The $1M is gone regardless. Only future cash flows matter.

### 3. Ignoring Working Capital
**Mistake:** Only considering P&L impact, not balance sheet.
**Reality:** A/R, inventory, A/P changes are real cash flows.

### 4. Confusing Depreciation
**Mistake:** Treating depreciation as a cash flow.
**Reality:** Depreciation is non-cash; its only impact is tax savings.

### 5. Missing Opportunity Costs
**Mistake:** Not valuing resources used from elsewhere in company.
**Reality:** Internal resources aren't "free."

---

## Key Takeaways

1. **Only incremental cash flows matter** - Would this cash flow exist without the project?
2. **Sunk costs are irrelevant** - Past expenditures don't affect future decisions
3. **Opportunity costs are real** - Value the alternative foregone
4. **Working capital is cash** - Changes affect actual cash flow
5. **Depreciation is non-cash** - Only matters for tax shield
6. **Include externalities** - Cannibalization and synergies
7. **Question management projections** - Bias toward optimism

---

## Practice Problems

### Problem 1: Sunk Cost
A company spent $500K on a feasibility study for a new product. The study shows the product will generate $200K/year for 3 years with $100K in annual costs. Initial investment is $300K. Tax rate is 30%. Should they launch?

### Problem 2: Opportunity Cost
A company owns a building worth $2M. They're considering using it for a new project that generates $300K/year in OCF for 10 years. The building could be sold or rented for $150K/year. At 10% discount rate, what is the project NPV?

### Problem 3: Working Capital
A project has the following:
- Year 0 CapEx: $1,000K
- Year 1-5 OCF: $350K
- Inventory investment: $100K (Year 0), recovered Year 5
- A/R builds to $150K by Year 3, recovered Year 5

What are the complete cash flows?

---

*Next: [Net Present Value](03-net-present-value.md)*
