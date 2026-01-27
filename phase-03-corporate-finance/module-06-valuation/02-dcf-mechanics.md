# DCF Mechanics

## Learning Objectives

- Build financial projections for DCF analysis
- Apply mid-year convention correctly
- Bridge from Enterprise Value to Equity Value
- Conduct sensitivity analysis
- Create professional DCF output

---

## Introduction

Understanding DCF fundamentals is one thing; building a working model is another. This section covers the mechanics of constructing a professional DCF model—the kind used by investment banks and consulting firms.

---

## Core Concepts

### Building Financial Projections

**Revenue Projection Methods:**

| Method | Best For | Process |
|--------|----------|---------|
| Top-Down | Market-driven businesses | Market size × share × price |
| Bottom-Up | Product-focused | Units × price by segment |
| Growth Rate | Stable businesses | Historical growth, adjusted |
| Analyst Consensus | Public companies | Use as starting point |

**Revenue Projection Example:**
```
Top-Down:
Market Size (Year 5): $10B
Target Market Share: 5%
Revenue: $500M

Bottom-Up:
Product A: 100,000 units × $200 = $20M
Product B: 50,000 units × $500 = $25M
Product C: 200,000 units × $100 = $20M
Services: $15M
Total: $80M
```

### Operating Projections

**Margin Analysis:**

```
Cost Structure:
- COGS: % of revenue (scale effects?)
- R&D: Fixed or % of revenue
- SG&A: Fixed + variable components
- D&A: % of PP&E or asset schedule
```

**Common Assumptions:**

| Line Item | Typical Approach |
|-----------|------------------|
| COGS | Historical % ± efficiency gains |
| SG&A | Partial fixed, partial variable |
| R&D | Industry benchmark % |
| D&A | Asset schedule or % PP&E |

### Capital Expenditure Projections

**Two Components:**

```
CapEx = Maintenance CapEx + Growth CapEx

Maintenance CapEx ≈ Depreciation (steady state)
Growth CapEx = f(Revenue growth, Capital intensity)
```

**CapEx Methods:**

| Method | Formula |
|--------|---------|
| % of Revenue | Historical average, industry benchmark |
| % of D&A | 100% for maintenance, higher for growth |
| Asset Schedule | Detailed fixed asset forecast |

### Working Capital Projections

**NWC Calculation:**
```
Net Working Capital = Current Assets - Current Liabilities
(excluding cash and short-term debt)

NWC = Accounts Receivable
    + Inventory
    + Prepaid Expenses
    - Accounts Payable
    - Accrued Expenses
```

**Projection Methods:**

| Approach | Formula |
|----------|---------|
| % of Revenue | NWC = X% × Revenue |
| Days Metrics | DSO, DIO, DPO → NWC |
| Cash Conversion Cycle | CCC × Daily Revenue |

---

## Mid-Year Convention

### Why Mid-Year?

```
Standard DCF assumes cash flows occur at year-end.
Reality: Cash flows occur throughout the year.
Mid-year convention adjusts for this.
```

### Mid-Year Adjustment

```
Standard Discount Factor:
DF = 1 / (1 + WACC)^n

Mid-Year Discount Factor:
DF = 1 / (1 + WACC)^(n - 0.5)

Example at 10% WACC, Year 3:
Standard: 1 / 1.10^3 = 0.7513
Mid-Year: 1 / 1.10^2.5 = 0.7854

Difference: ~4.5% higher PV with mid-year
```

### Mid-Year Terminal Value

```
Terminal value occurs at end of projection period.
Apply half-year adjustment:

PV of TV = TV / (1 + WACC)^(n - 0.5)

Or equivalently:
PV of TV = TV / (1 + WACC)^n × (1 + WACC)^0.5
```

---

## Enterprise Value to Equity Value Bridge

### The Bridge Equation

```
Enterprise Value (EV)
- Total Debt
- Preferred Stock
- Minority Interest
+ Cash and Equivalents
= Equity Value

Then:
Share Price = Equity Value / Diluted Shares Outstanding
```

### Component Details

**Total Debt:**
```
Include:
- Short-term debt
- Current portion of long-term debt
- Long-term debt
- Capital leases
- Convertible debt (if debt-like)
```

**Minority Interest:**
```
Minority interest = Non-controlling interest in subsidiaries
Add back because EV includes 100% of subsidiary cash flows
but equity holders don't own 100%
```

**Cash and Equivalents:**
```
Include:
- Cash
- Marketable securities
- Short-term investments
- Restricted cash (with caution)

Exclude (operational cash):
- Minimum operating cash (e.g., 2% of revenue)
```

### Bridge Example

```
Enterprise Value:            $500M
Less: Total Debt:           ($150M)
Less: Preferred Stock:       ($20M)
Less: Minority Interest:     ($10M)
Plus: Cash:                   $50M
Equity Value:               $370M

Diluted Shares: 50M
Share Price: $370M / 50M = $7.40
```

### Diluted Shares Calculation

```
Basic Shares: 45M
+ Stock Options (Treasury Stock Method)
+ Restricted Stock Units
+ Convertible Securities (if in-the-money)
= Diluted Shares: 50M

Treasury Stock Method:
Options outstanding: 5M at $5 strike
Current price: $8
Shares issued: 5M
Shares repurchased: 5M × $5 / $8 = 3.125M
Net dilution: 5M - 3.125M = 1.875M
```

---

## Sensitivity Analysis

### Two-Variable Sensitivity Table

**WACC vs. Terminal Growth:**

```
                 Terminal Growth Rate
         |   2.0%  |   2.5%  |   3.0%  |   3.5%  |
WACC     |---------|---------|---------|---------|
8.0%     |  $520M  |  $560M  |  $610M  |  $670M  |
9.0%     |  $450M  |  $480M  |  $515M  |  $555M  |
10.0%    |  $395M  |  $420M  |  $445M  |  $475M  |
11.0%    |  $350M  |  $370M  |  $390M  |  $415M  |
```

### Scenario Analysis

| Scenario | Revenue CAGR | EBITDA Margin | EV |
|----------|--------------|---------------|-----|
| Bull | 15% | 25% | $650M |
| Base | 10% | 20% | $450M |
| Bear | 5% | 15% | $300M |

### Key Sensitivities to Test

1. Revenue growth rate
2. EBITDA/Operating margin
3. WACC
4. Terminal growth rate
5. Exit multiple (if using)
6. CapEx intensity
7. Working capital assumptions

---

## Professional Model Layout

### Model Structure

```
Tab 1: Summary & Output
- Key metrics dashboard
- Valuation summary
- Sensitivity tables

Tab 2: Income Statement
- Historical (3-5 years)
- Projected (5-10 years)

Tab 3: Balance Sheet
- Historical
- Projected

Tab 4: Cash Flow Statement
- Historical
- Projected

Tab 5: DCF Analysis
- FCF calculation
- Terminal value
- Discount factors
- Enterprise value

Tab 6: Assumptions
- Revenue drivers
- Margin assumptions
- Capital assumptions
- WACC inputs

Tab 7: Comparables (for reference)
```

### Best Practices

```
1. Color coding:
   - Blue: Hard-coded inputs
   - Black: Formulas
   - Green: Links to other sheets

2. No hard-coded numbers in formulas

3. One row per calculation

4. Error checks throughout

5. Clear labeling and units

6. Version control
```

---

## Consulting Application

### Client Presentation of DCF

**Key Slides:**

```
1. Methodology Overview
   - Why DCF is appropriate
   - Key assumptions summary

2. Financial Projections
   - Revenue and margin trajectory
   - Key driver assumptions

3. Valuation Summary
   - Enterprise value
   - Equity value and share price
   - Implied multiples

4. Sensitivity Analysis
   - Key value drivers
   - Range of outcomes

5. Sanity Checks
   - Comparison to market
   - Comparison to precedents
```

---

## CEO Application

### Reading a DCF

**Questions to Ask:**

1. "What revenue growth is assumed?"
   - Compare to historical, industry

2. "What margins are assumed?"
   - Achievable? Sustainable?

3. "How much is terminal value?"
   - If >70%, be cautious

4. "What's the implied multiple?"
   - Compare to current trading

5. "What breaks the story?"
   - Key risks to assumptions

---

## Worked Example

### Complete DCF Model

**Company:** ManufactureCo

**Historical:**

| | 2022 | 2023 | 2024 |
|---|------|------|------|
| Revenue | $200M | $220M | $242M |
| EBITDA | $40M | $46M | $51M |
| Margin | 20.0% | 20.9% | 21.1% |

**Assumptions:**
- Revenue growth: 8% declining to 4%
- EBITDA margin: 21% stabilizing at 22%
- CapEx: 5% of revenue
- D&A: 4% of revenue
- NWC: 12% of revenue
- WACC: 9.5%
- Terminal growth: 2.5%

**Projections:**

| | 2025 | 2026 | 2027 | 2028 | 2029 |
|---|------|------|------|------|------|
| Revenue | $261M | $278M | $295M | $310M | $322M |
| Growth | 8% | 7% | 6% | 5% | 4% |
| EBITDA | $55M | $60M | $65M | $68M | $71M |
| Margin | 21% | 21.5% | 22% | 22% | 22% |
| D&A | $10M | $11M | $12M | $12M | $13M |
| EBIT | $45M | $49M | $53M | $56M | $58M |
| Tax (25%) | $11M | $12M | $13M | $14M | $15M |
| NOPAT | $34M | $37M | $40M | $42M | $44M |
| +D&A | $10M | $11M | $12M | $12M | $13M |
| -CapEx | $13M | $14M | $15M | $16M | $16M |
| -ΔNWC | $2M | $2M | $2M | $2M | $1M |
| **FCF** | **$29M** | **$32M** | **$35M** | **$37M** | **$39M** |

**Terminal Value:**
```
TV = $39M × 1.025 / (0.095 - 0.025)
TV = $40M / 0.07
TV = $571M
```

**Enterprise Value (Mid-Year Convention):**
```
Year    FCF     DF (Mid-Year)   PV
2025    $29M    0.9560         $27.7M
2026    $32M    0.8730         $27.9M
2027    $35M    0.7972         $27.9M
2028    $37M    0.7280         $26.9M
2029    $39M    0.6648         $25.9M
TV      $571M   0.6648         $379.6M

PV of FCF: $136.4M
PV of TV: $379.6M
Enterprise Value: $516.0M
```

**Equity Value:**
```
EV:              $516M
Less: Debt       ($100M)
Plus: Cash       $20M
Equity Value:    $436M

Shares: 40M
Price: $10.90
```

**Sanity Check:**
```
EV/EBITDA (2024): $516M / $51M = 10.1x
EV/EBITDA (2025): $516M / $55M = 9.4x

Seems reasonable for growth manufacturer.
```

---

## Common Mistakes

### 1. Forgetting Mid-Year Convention
**Impact:** Understates value by 2-5%
**Fix:** Apply mid-year discount factors consistently.

### 2. Wrong Diluted Share Count
**Mistake:** Using basic shares instead of diluted.
**Fix:** Use treasury stock method for options/warrants.

### 3. Missing Balance Sheet Items
**Mistake:** Not subtracting all debt-like items.
**Fix:** Review all liabilities for debt characteristics.

### 4. Inconsistent Tax Rates
**Mistake:** Different rates in NOPAT vs. terminal value.
**Fix:** Use consistent marginal tax rate throughout.

---

## Key Takeaways

1. **Build projections systematically** - Revenue → Margins → Capital
2. **Use mid-year convention** - More accurately reflects timing
3. **Bridge EV to Equity carefully** - Include all debt-like items
4. **Diluted shares matter** - Use treasury stock method
5. **Sensitivity analysis essential** - Show range, not point
6. **Sanity check everything** - Compare to multiples
7. **Professional presentation** - Clear, well-organized, auditable

---

## Practice Problems

### Problem 1: Mid-Year PV
FCF = $50M in Year 3, WACC = 10%. Calculate PV with and without mid-year convention.

### Problem 2: EV to Equity Bridge
EV = $800M, Debt = $200M, Cash = $50M, Preferred = $30M, Minority = $20M. Calculate equity value.

### Problem 3: Diluted Shares
Basic shares: 100M. Options: 10M at $20 strike. Current price: $30. Calculate diluted shares.

---

*Next: [Comparable Companies](03-comparable-companies.md)*
