# DCF Fundamentals

## Learning Objectives

- Understand the theoretical foundation of DCF valuation
- Calculate Free Cash Flow to Firm (FCFF)
- Determine appropriate projection periods
- Calculate terminal value using two methods
- Recognize key value drivers in DCF

---

## Introduction

Discounted Cash Flow (DCF) valuation is the most theoretically rigorous valuation method. It values a company based on the fundamental principle that an asset's value equals the present value of its future cash flows.

Every major acquisition, IPO, and strategic decision relies on DCF analysis. It forces explicit assumptions and reveals what drives value—making it the method of choice for sophisticated investors.

---

## Core Concepts

### The DCF Equation

```
Enterprise Value = Σ [FCFt / (1+WACC)^t] + Terminal Value / (1+WACC)^n

Where:
FCFt = Free Cash Flow in year t
WACC = Weighted Average Cost of Capital
n = Length of projection period
Terminal Value = Value of cash flows beyond projection
```

### Free Cash Flow to Firm (FCFF)

**FCFF represents cash available to all capital providers.**

```
FCFF = EBIT × (1 - Tax Rate)
       + Depreciation & Amortization
       - Capital Expenditures
       - Change in Net Working Capital

Or:
FCFF = NOPAT + D&A - CapEx - ΔNWC
```

**Components Explained:**

| Component | Description | Cash Impact |
|-----------|-------------|-------------|
| EBIT(1-T) | After-tax operating profit | + |
| D&A | Non-cash expense added back | + |
| CapEx | Investment in fixed assets | - |
| ΔNWC | Working capital investment | - (if increase) |

### Why Free Cash Flow?

```
Revenue                 ← Not cash
- Net Income           ← Accounting, includes non-cash
- EBITDA               ← Doesn't reflect CapEx needs
= Free Cash Flow       ← Actual cash available ✓
```

---

## DCF Model Structure

### Step 1: Historical Analysis

**Review 3-5 years of history:**
- Revenue growth trends
- Margin patterns
- Working capital dynamics
- Capital intensity
- Returns on capital

### Step 2: Projection Period

**Typically 5-10 years**

| Situation | Projection Period |
|-----------|-------------------|
| Stable business | 5 years |
| Growth company | 7-10 years |
| Cyclical | Through full cycle |
| Turnaround | Until normalized |

**Key Principle:** Project until company reaches "steady state" (stable growth).

### Step 3: Project Financials

**Revenue Forecast:**
```
Methods:
- Top-down: Market size × market share
- Bottom-up: Units × price
- Growth rate: Historical trend, adjusted
```

**Operating Projections:**
- Cost of goods sold (as % of revenue)
- Operating expenses (fixed + variable)
- Depreciation (% of assets or separate schedule)

**Capital Needs:**
- CapEx (maintenance + growth)
- Working capital (% of revenue)

### Step 4: Calculate FCFF

**For Each Projection Year:**
```
Year 1 Example:
Revenue:                    $100.0M
EBIT:                       $15.0M
Less: Taxes (25%):          ($3.75M)
NOPAT:                      $11.25M
Plus: D&A:                  $5.0M
Less: CapEx:                ($8.0M)
Less: ΔNWC:                 ($2.0M)
Free Cash Flow:             $6.25M
```

### Step 5: Calculate Terminal Value

**Two Methods:**

**Method 1: Gordon Growth (Perpetuity)**
```
Terminal Value = FCFn × (1 + g) / (WACC - g)

Where:
FCFn = Free Cash Flow in final projection year
g = Long-term growth rate (typically 2-3%)
WACC = Weighted Average Cost of Capital
```

**Method 2: Exit Multiple**
```
Terminal Value = EBITDAn × Exit Multiple

Where:
EBITDAn = EBITDA in final projection year
Exit Multiple = Appropriate EV/EBITDA (from comparables)
```

### Step 6: Discount to Present Value

```
PV of FCF = Σ [FCFt / (1+WACC)^t]
PV of Terminal Value = TV / (1+WACC)^n
Enterprise Value = PV of FCF + PV of Terminal Value
```

---

## Terminal Value Deep Dive

### Importance of Terminal Value

```
Typical DCF Value Composition:
- PV of Projection Period: 30-50%
- PV of Terminal Value: 50-70%

Terminal value often dominates!
This is why assumptions matter.
```

### Gordon Growth Sensitivity

**Terminal Value with WACC = 10%:**

| Growth Rate | TV Multiple | TV (if FCF = $100M) |
|-------------|-------------|---------------------|
| 2.0% | 12.5x | $1,250M |
| 2.5% | 13.7x | $1,367M |
| 3.0% | 14.3x | $1,471M |
| 3.5% | 15.4x | $1,585M |

**Small changes in g have large impact!**

### Growth Rate Selection

```
Long-term growth should be ≤ economy growth

Guidelines:
- Mature economy: 2-3%
- Emerging market: 4-6%
- Never exceed WACC (mathematically impossible)
- Consider inflation + real growth
```

### Exit Multiple Method

```
Advantages:
- Market-based
- Avoids perpetual growth assumption
- Easier to understand

Disadvantages:
- Circular (uses multiples to derive value)
- Assumes market correctly values
- Must justify multiple choice
```

---

## Value Driver Analysis

### Key Value Drivers

```
1. Revenue Growth
2. Operating Margins
3. Tax Rate
4. Capital Intensity (CapEx/Revenue)
5. Working Capital Efficiency
6. Cost of Capital
7. Terminal Growth Rate
```

### Value Driver Sensitivities

| Driver | +1% Change | Impact Direction |
|--------|-----------|------------------|
| Revenue growth | ~5-8% EV | ↑ |
| EBIT margin | ~8-12% EV | ↑ |
| WACC | ~10-15% EV | ↓ |
| Terminal growth | ~8-15% EV | ↑ |

---

## Consulting Application

### McKinsey DCF Approach

1. **Start with value drivers** - Not just spreadsheet mechanics
2. **Link to strategy** - How does competitive advantage sustain margins?
3. **Scenario analysis** - Base, bull, bear cases
4. **Sanity checks** - Compare to multiples
5. **Communicate clearly** - Key assumptions, not just number

### Common Consulting DCF Tasks

- Acquisition valuation
- Business unit valuation
- Strategic planning support
- Fairness opinion assistance
- Performance improvement quantification

---

## CEO Application

### What CEOs Should Understand

```
Your company's DCF value is driven by:
1. Growth trajectory
2. Profit margins
3. Capital efficiency
4. Risk (cost of capital)
5. Duration of competitive advantage
```

### Questions to Ask About DCF Analysis

1. "What are the most sensitive assumptions?"
2. "How does terminal value compare to current trading?"
3. "What margins/growth justify this value?"
4. "How does this compare to what we've actually achieved?"
5. "What's the implied return on capital?"

---

## Worked Example

### Simple DCF Valuation

**Company: GrowthCo Inc.**

**Assumptions:**
- Current EBITDA: $50M
- Revenue growth: 10% Y1-2, 7% Y3-4, 4% Y5+
- EBITDA margin: 20%
- D&A: 5% of revenue
- CapEx: 6% of revenue
- NWC: 10% of revenue (change = 10% of Δ revenue)
- WACC: 10%
- Terminal growth: 3%

**Projections:**

| Item | Y0 | Y1 | Y2 | Y3 | Y4 | Y5 |
|------|-----|-----|-----|-----|-----|-----|
| Revenue | 250 | 275 | 303 | 324 | 346 | 360 |
| Growth | | 10% | 10% | 7% | 7% | 4% |
| EBITDA | 50 | 55 | 61 | 65 | 69 | 72 |
| D&A | 13 | 14 | 15 | 16 | 17 | 18 |
| EBIT | 38 | 41 | 45 | 49 | 52 | 54 |
| NOPAT | 28 | 31 | 34 | 36 | 39 | 41 |
| +D&A | 13 | 14 | 15 | 16 | 17 | 18 |
| -CapEx | (15) | (17) | (18) | (19) | (21) | (22) |
| -ΔNWC | | (3) | (3) | (2) | (2) | (1) |
| **FCF** | | **26** | **28** | **31** | **33** | **35** |

**Terminal Value (Gordon Growth):**
```
TV = 35 × (1.03) / (0.10 - 0.03)
TV = 36.1 / 0.07
TV = $515M
```

**Enterprise Value:**
```
PV of FCF:
Y1: 26 / 1.10 = 23.6
Y2: 28 / 1.21 = 23.1
Y3: 31 / 1.33 = 23.3
Y4: 33 / 1.46 = 22.6
Y5: 35 / 1.61 = 21.7
Sum: $114.3M

PV of Terminal Value:
515 / 1.61 = $319.9M

Enterprise Value = 114.3 + 319.9 = $434.2M

EV/EBITDA = 434 / 50 = 8.7x ← Sanity check
```

---

## Common Mistakes

### 1. Inconsistent Growth and Returns
**Mistake:** High growth forever with high margins.
**Reality:** Competition erodes advantages; growth requires investment.

### 2. Terminal Value Dominance
**Mistake:** 80%+ of value from terminal value.
**Fix:** Extend projection period, sanity check implied multiples.

### 3. Working Capital Ignored
**Mistake:** Growing revenue without working capital investment.
**Fix:** Model NWC as % of revenue changes.

### 4. CapEx Below Depreciation
**Mistake:** CapEx declining to zero over time.
**Fix:** Maintenance CapEx ≥ Depreciation for steady state.

### 5. Terminal Growth > GDP
**Mistake:** 5% terminal growth in mature business.
**Fix:** Terminal growth should be 2-3% (or inflation + 1%).

---

## Key Takeaways

1. **DCF is fundamental** - Based on actual cash generation
2. **FCFF is king** - Cash available to all investors
3. **Terminal value matters** - Often majority of value
4. **Assumptions drive everything** - Be explicit and justify
5. **Use both TV methods** - Perpetuity and exit multiple
6. **Sanity check results** - Compare to market multiples
7. **Sensitivity analysis essential** - Know what moves value

---

## Practice Problems

### Problem 1: FCFF Calculation
Company has: EBIT $80M, Tax 25%, D&A $20M, CapEx $25M, NWC increased $5M.
Calculate FCFF.

### Problem 2: Terminal Value
Year 5 FCF = $50M, WACC = 9%, terminal growth = 2.5%.
Calculate terminal value using Gordon Growth.

### Problem 3: Complete DCF
Using Problem 2 terminal value and Year 1-4 FCF of $30M, $35M, $40M, $45M, calculate enterprise value.

---

*Next: [DCF Mechanics](02-dcf-mechanics.md)*
