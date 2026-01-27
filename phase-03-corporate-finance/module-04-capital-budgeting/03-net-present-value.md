# Net Present Value (NPV)

## Learning Objectives

- Master NPV calculation methodology
- Apply NPV decision rules correctly
- Understand why NPV is the gold standard
- Handle NPV with unequal project lives
- Interpret NPV results for decision-making

---

## Introduction

Net Present Value is the cornerstone of capital budgeting and value-based management. It answers the fundamental question: "Does this investment create or destroy value?"

NPV represents the increase in shareholder wealth from accepting a project. A positive NPV means the project earns more than its cost of capital—it creates value. This simplicity and directness make NPV the preferred method among finance professionals.

---

## Core Concepts

### NPV Definition

```
NPV = Present Value of Cash Inflows - Present Value of Cash Outflows

NPV = Σ [CFt / (1+r)^t] - Initial Investment

NPV = -CF₀ + CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFn/(1+r)ⁿ
```

**Where:**
- CFt = Cash flow in period t
- r = Required return (discount rate)
- n = Project life

### NPV Decision Rules

**For Independent Projects:**
- Accept if NPV > 0
- Reject if NPV < 0
- Indifferent if NPV = 0

**For Mutually Exclusive Projects:**
- Choose the project with highest positive NPV
- If all NPVs negative, don't invest (unless required)

### Why NPV is the Gold Standard

| Feature | NPV | Why It Matters |
|---------|-----|---------------|
| Uses all cash flows | ✓ | Captures complete project value |
| Time value of money | ✓ | Properly values future cash |
| Measures absolute value | ✓ | Shows dollar value created |
| Additive property | ✓ | NPVs of projects can be summed |
| Assumes reinvestment at r | ✓ | Realistic reinvestment assumption |
| Directly tied to wealth | ✓ | Maximizing NPV = maximizing value |

---

## NPV Calculation Methods

### Step-by-Step Approach

**Example: New Product Line**

| Year | Cash Flow |
|------|-----------|
| 0 | ($500,000) |
| 1 | $150,000 |
| 2 | $175,000 |
| 3 | $200,000 |
| 4 | $175,000 |
| 5 | $125,000 |

**At 10% discount rate:**

```
Step 1: Calculate discount factors

Year 1: 1/(1.10)¹ = 0.9091
Year 2: 1/(1.10)² = 0.8264
Year 3: 1/(1.10)³ = 0.7513
Year 4: 1/(1.10)⁴ = 0.6830
Year 5: 1/(1.10)⁵ = 0.6209

Step 2: Calculate present values

Year 0: ($500,000) × 1.0000 = ($500,000)
Year 1: $150,000 × 0.9091 = $136,365
Year 2: $175,000 × 0.8264 = $144,620
Year 3: $200,000 × 0.7513 = $150,260
Year 4: $175,000 × 0.6830 = $119,525
Year 5: $125,000 × 0.6209 = $77,613

Step 3: Sum present values

NPV = -500,000 + 136,365 + 144,620 + 150,260 + 119,525 + 77,613
NPV = $128,383
```

**Decision:** Accept project. NPV > 0 indicates value creation of $128,383.

### Annuity Shortcut

When cash flows are equal:

```
NPV = CF × PVIFA(r,n) - Initial Investment

Example: $100,000/year for 5 years at 10%
NPV = $100,000 × 3.7908 - $300,000
NPV = $379,080 - $300,000 = $79,080
```

### NPV Profile

Plotting NPV against different discount rates:

```
Discount Rate | NPV
0%           | $325,000
5%           | $196,000
10%          | $128,383
15%          | $72,500
20%          | $25,800
25%          | ($14,200)
IRR ≈ 22%    | $0
```

The NPV profile shows:
- NPV declines as discount rate increases
- IRR is where NPV = 0
- Higher rates make distant cash flows less valuable

---

## Special Situations

### Mutually Exclusive Projects

When choosing between alternatives:

**Project A:**
- Investment: $100,000
- NPV: $25,000

**Project B:**
- Investment: $200,000
- NPV: $35,000

**Rule:** Choose B (higher NPV), assuming capital is available.

**But what about efficiency?** That's what Profitability Index addresses (covered later).

### Different Project Lives

**Problem:** Comparing 3-year vs. 5-year projects.

**Solution 1: Equivalent Annual Annuity (EAA)**

```
EAA = NPV / PVIFA(r,n)

Convert NPV to annual equivalent, then compare.

Project A (3 years): NPV = $30,000
EAA = $30,000 / 2.4869 = $12,062/year

Project B (5 years): NPV = $45,000
EAA = $45,000 / 3.7908 = $11,870/year

Choose A (higher annual equivalent)
```

**Solution 2: Replacement Chain**
Assume projects repeat until common ending point (LCM of lives).

### Timing of Cash Flows

**Beginning vs. End of Period:**

Most NPV calculations assume end-of-period cash flows.

For beginning-of-period:
```
PV = CF × (1+r)

Or shift timeline: What's "Year 1 beginning" is "Year 0 end"
```

---

## NPV Interpretation

### What NPV Tells You

| NPV Result | Interpretation |
|------------|---------------|
| NPV = $1M | Project adds $1M to firm value |
| NPV > 0 | Earns more than required return |
| NPV < 0 | Earns less than required return |
| NPV = 0 | Earns exactly required return |
| Higher NPV | More value created |

### NPV and Stock Price

**Theory:** In efficient markets:
```
ΔStock Price ≈ NPV / Shares Outstanding

Example:
NPV = $10 million
Shares = 10 million
ΔPrice = $10M / 10M = $1.00/share
```

**Reality:** Market may already expect investment, or may disagree with management's assumptions.

### Sources of Positive NPV

Projects earn positive NPV when company has competitive advantage:

| Advantage | How It Creates Value |
|-----------|---------------------|
| Patents/IP | Prevents competition |
| Brand | Commands price premium |
| Cost leadership | Lower costs than competitors |
| First mover | Network effects, switching costs |
| Superior talent | Better execution |
| Scale | Lower unit costs |

---

## Consulting Application

### Value Creation Framework

McKinsey's approach to strategic NPV:

1. **Baseline NPV** - Status quo scenario
2. **With Investment NPV** - Including the project
3. **Value Created** - Difference

```
Value Created = NPV(with investment) - NPV(baseline)
```

This ensures you capture incremental value, not total value.

### Sensitivity Analysis

Present NPV under different scenarios:

| Scenario | Revenue | Costs | NPV |
|----------|---------|-------|-----|
| Base | $500K | $300K | $128K |
| Optimistic | $600K | $280K | $245K |
| Pessimistic | $400K | $320K | $15K |

**Key insight:** Even pessimistic case has positive NPV—strong investment.

---

## CEO Application

### Capital Allocation Decisions

As CEO, NPV helps you:

1. **Prioritize investments** - Higher NPV first
2. **Set hurdle rates** - Required return threshold
3. **Evaluate business units** - Which create value?
4. **Justify strategy** - Quantify strategic value

### NPV-Based Performance Metrics

| Metric | Formula | Use |
|--------|---------|-----|
| Economic Profit | NOPAT - (Capital × WACC) | Annual value creation |
| MVA | Market Value - Book Value | Cumulative NPV |
| EVA | Similar to EP | Stern Stewart metric |

### Common CEO Mistakes

1. **Focusing on IRR over NPV** - Can lead to wrong decisions
2. **Ignoring strategic options** - NPV misses flexibility value
3. **Using wrong discount rate** - Projects have different risks
4. **Short-term bias** - NPV properly values long-term cash

---

## Worked Example

### Expansion Decision

**Scenario:** Retail chain considering new store

**Investment:**
- Build-out: $800,000
- Inventory: $200,000 (recovered at end)
- Pre-opening costs: $100,000

**Operations (10-year lease):**
- Year 1 Revenue: $1,200,000
- Revenue growth: 3%/year
- Gross margin: 40%
- Store-level SG&A: $320,000 (fixed)
- Depreciation: $80,000/year
- Tax rate: 25%
- Terminal value: Inventory recovery only

**Discount rate:** 12%

**Solution:**

```
Initial Investment:
Build-out: ($800,000)
Inventory: ($200,000)
Pre-opening: ($100,000)
Total Year 0: ($1,100,000)

Year 1 Operating Cash Flow:
Revenue: $1,200,000
Gross Profit: $480,000 (40%)
SG&A: ($320,000)
EBITDA: $160,000
Depreciation: ($80,000)
EBIT: $80,000
Tax (25%): ($20,000)
Net Income: $60,000
Add Depreciation: $80,000
OCF: $140,000

[Continue for Years 2-10 with 3% revenue growth]
```

| Year | Revenue | Gross Profit | EBIT | OCF |
|------|---------|--------------|------|-----|
| 1 | 1,200 | 480 | 80 | 140 |
| 2 | 1,236 | 494 | 94 | 151 |
| 3 | 1,273 | 509 | 109 | 162 |
| 4 | 1,311 | 524 | 124 | 173 |
| 5 | 1,350 | 540 | 140 | 185 |
| 6 | 1,391 | 556 | 156 | 197 |
| 7 | 1,433 | 573 | 173 | 210 |
| 8 | 1,476 | 590 | 190 | 223 |
| 9 | 1,520 | 608 | 208 | 236 |
| 10 | 1,566 | 626 | 226 | 250 |

Year 10 Terminal: Add inventory recovery $200,000
Total Year 10 CF: $450,000

**NPV Calculation:**
```
NPV = -1,100 + 140/1.12 + 151/1.12² + ... + 450/1.12¹⁰
NPV = -1,100 + 125 + 120 + 115 + 110 + 105 + 100 + 95 + 90 + 85 + 145
NPV ≈ $90,000
```

**Decision:** Accept. NPV is positive, creating approximately $90,000 in value.

---

## Common Mistakes

### 1. Using Wrong Discount Rate
**Mistake:** Using company WACC for all projects.
**Fix:** Adjust for project-specific risk.

### 2. Ignoring Scale
**Mistake:** Choosing higher IRR over higher NPV.
**Fix:** NPV measures absolute value creation.

### 3. Forgetting Terminal Value
**Mistake:** Stopping at arbitrary year.
**Fix:** Include residual value or continuing operations.

### 4. Double-Counting Risk
**Mistake:** Conservative cash flows AND high discount rate.
**Fix:** Risk in discount rate OR cash flows, not both.

### 5. Inconsistent Inflation Treatment
**Mistake:** Nominal rate with real cash flows.
**Fix:** Match inflation treatment consistently.

---

## Key Takeaways

1. **NPV measures value creation** - Positive NPV = positive shareholder value
2. **Gold standard method** - Theoretically correct, practically useful
3. **Use all cash flows** - Nothing ignored or double-counted
4. **Discount rate matters** - Higher rate = lower NPV
5. **Additive property** - Sum NPVs of independent projects
6. **Tie to strategy** - NPV > 0 requires competitive advantage
7. **Always sensitivity test** - NPV is only as good as inputs

---

## Practice Problems

### Problem 1: Basic NPV
Calculate NPV for:
- Investment: $250,000
- Cash flows: $80,000/year for 4 years
- Discount rate: 10%

### Problem 2: Uneven Cash Flows
| Year | Cash Flow |
|------|-----------|
| 0 | ($400,000) |
| 1 | $100,000 |
| 2 | $150,000 |
| 3 | $200,000 |
| 4 | $100,000 |

At 12% discount rate, should you accept?

### Problem 3: Mutually Exclusive
Project A: NPV = $50,000 (Investment: $100,000)
Project B: NPV = $75,000 (Investment: $200,000)

Which do you choose if:
a) Unlimited capital?
b) Only $200,000 available for both A and B?

### Problem 4: Different Lives
Machine A: 3-year life, NPV = $30,000
Machine B: 5-year life, NPV = $45,000

At 10% discount rate, which is better?

---

*Next: [Internal Rate of Return](04-internal-rate-of-return.md)*
