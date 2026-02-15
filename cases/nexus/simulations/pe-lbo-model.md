# Interactive LBO Model Simulation

## PE Turnaround: TechServices Corp Acquisition

**Estimated Time**: 60-90 minutes
**Difficulty**: Advanced
**Prerequisites**: Corporate Finance (Phase 3), Case 07 PE Turnaround

---

## Learning Objectives

By completing this simulation, you will:
1. Build a leveraged buyout model from scratch
2. Calculate IRR and MOIC under different scenarios
3. Model debt schedules with amortization and PIK interest
4. Create an exit waterfall with multiple stakeholder classes
5. Perform sensitivity analysis on key assumptions

---

## Part 1: Transaction Overview

### The Deal

Apex Partners is acquiring TechServices Corp, a $15M IT services company, using a leveraged buyout structure. Your task is to model the complete transaction.

### Key Assumptions

| Input | Value |
|-------|-------|
| LTM Revenue | $15,000,000 |
| Adjusted EBITDA | $1,500,000 |
| EBITDA Margin | 10% |
| Entry Multiple | 5.0x EBITDA |
| Enterprise Value | $7,500,000 |
| Hold Period | 4.25 years |
| Exit Multiple | 8.5x EBITDA |

---

## Part 2: Sources and Uses

### Exercise 1: Complete the Sources and Uses Table

Fill in the missing values:

**USES OF FUNDS**

| Use | Amount | Notes |
|-----|--------|-------|
| Purchase Price | $_______ | 5.0x × $1.5M EBITDA |
| CEO Buyout Premium | $2,500,000 | Above EV to buy out founder |
| Transaction Costs | $500,000 | Legal, accounting, banking fees |
| Working Capital | $1,000,000 | Fund initial operations |
| M&A Reserve | $1,000,000 | For first acquisition |
| **Total Uses** | **$_______** | |

**SOURCES OF FUNDS**

| Source | Amount | % of Cap | Notes |
|--------|--------|----------|-------|
| Senior Debt | $4,500,000 | ___% | 3.0x Adj. EBITDA |
| Seller Note | $2,000,000 | ___% | Subordinated, 8% PIK |
| PE Equity | $_______ | ___% | Residual plug |
| Management Rollover | $750,000 | ___% | 15% of CEO proceeds |
| ESOP Contribution | $250,000 | ___% | Initial pool funding |
| **Total Sources** | **$_______** | 100% | |

<details>
<summary>Show Answer</summary>

**USES**: $7.5M + $2.5M + $0.5M + $1.0M + $1.0M = **$12,500,000**

**SOURCES**:
- Senior Debt: $4,500,000 (36%)
- Seller Note: $2,000,000 (16%)
- PE Equity: $5,000,000 (40%)
- Management Rollover: $750,000 (6%)
- ESOP: $250,000 (2%)
- **Total: $12,500,000**

</details>

---

## Part 3: Pro Forma Financial Model

### Exercise 2: Build the 5-Year Projection

Complete the financial model using these assumptions:

| Assumption | Year 1 | Year 2 | Year 3 | Year 4 |
|------------|--------|--------|--------|--------|
| Revenue Growth (Organic) | 10% | 15% | 20% | 15% |
| Acquired Revenue | $4M | $11M | $8M | $7M |
| EBITDA Margin | 14% | 15% | 16% | 17% |
| D&A (% of Revenue) | 3% | 3% | 3% | 3% |
| Interest Rate (Senior) | 9.5% | 9.5% | 9.5% | 9.5% |
| Tax Rate | 25% | 25% | 25% | 25% |

**PRO FORMA P&L**

| Line Item | Entry | Year 1 | Year 2 | Year 3 | Year 4 |
|-----------|-------|--------|--------|--------|--------|
| **Revenue** | | | | | |
| Organic Revenue | $15,000 | | | | |
| Acquired Revenue | $0 | | | | |
| **Total Revenue** | $15,000 | | | | |
| | | | | | |
| **EBITDA** | $1,500 | | | | |
| EBITDA Margin | 10% | | | | |
| | | | | | |
| (-) D&A | | | | | |
| **EBIT** | | | | | |
| | | | | | |
| (-) Interest (Senior) | | | | | |
| (-) Interest (Seller Note PIK) | | | | | |
| **EBT** | | | | | |
| | | | | | |
| (-) Taxes | | | | | |
| **Net Income** | | | | | |

*(Values in $000s)*

<details>
<summary>Show Answer</summary>

| Line Item | Entry | Year 1 | Year 2 | Year 3 | Year 4 |
|-----------|-------|--------|--------|--------|--------|
| Organic Revenue | $15,000 | $16,500 | $18,975 | $22,770 | $26,186 |
| Acquired Revenue | $0 | $4,000 | $11,000 | $8,000 | $7,000 |
| **Total Revenue** | $15,000 | $20,500 | $29,975 | $30,770 | $33,186 |
| | | | | | |
| **EBITDA** | $1,500 | $2,870 | $4,496 | $4,923 | $5,642 |
| EBITDA Margin | 10% | 14% | 15% | 16% | 17% |
| | | | | | |
| (-) D&A | $(450) | $(615) | $(899) | $(923) | $(996) |
| **EBIT** | $1,050 | $2,255 | $3,597 | $4,000 | $4,646 |
| | | | | | |
| (-) Interest (Senior) | $(428) | $(406) | $(385) | $(363) | |
| (-) PIK (non-cash) | $(160) | $(173) | $(187) | $0 | |
| **EBT** | | $1,676 | $3,025 | $3,450 | $4,283 |
| | | | | | |
| (-) Taxes @ 25% | | $(419) | $(756) | $(863) | $(1,071) |
| **Net Income** | | $1,257 | $2,269 | $2,588 | $3,212 |

Note: Actual numbers will vary based on calculation methodology. Year 4 shows partial year for M&A.

</details>

---

## Part 4: Debt Schedule

### Exercise 3: Model the Senior Debt Amortization

**Senior Debt Terms:**
- Principal: $4,500,000
- Interest Rate: 9.5% (SOFR + 450bps)
- Term: 5 years
- Amortization: 5% per year, balloon at maturity
- Mandatory prepayment: None

| Year | Opening Balance | Principal Payment | Interest Payment | Ending Balance |
|------|-----------------|-------------------|------------------|----------------|
| 1 | $4,500,000 | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

<details>
<summary>Show Answer</summary>

| Year | Opening Balance | Principal Payment | Interest Payment | Ending Balance |
|------|-----------------|-------------------|------------------|----------------|
| 1 | $4,500,000 | $225,000 | $427,500 | $4,275,000 |
| 2 | $4,275,000 | $225,000 | $406,125 | $4,050,000 |
| 3 | $4,050,000 | $225,000 | $384,750 | $3,825,000 |
| 4 | $3,825,000 | $3,825,000* | $363,375 | $0 |

*Balloon payment at exit

</details>

### Exercise 4: Model the Seller Note (PIK Interest)

**Seller Note Terms:**
- Principal: $2,000,000
- Interest Rate: 8% PIK (Paid-In-Kind)
- Term: 3 years
- No cash payments until maturity

| Year | Opening Balance | PIK Interest | Ending Balance |
|------|-----------------|--------------|----------------|
| 1 | $2,000,000 | | |
| 2 | | | |
| 3 | | | |

<details>
<summary>Show Answer</summary>

| Year | Opening Balance | PIK Interest | Ending Balance |
|------|-----------------|--------------|----------------|
| 1 | $2,000,000 | $160,000 | $2,160,000 |
| 2 | $2,160,000 | $172,800 | $2,332,800 |
| 3 | $2,332,800 | $186,624 | $2,519,424 |

Note: PIK interest compounds on itself each year.

</details>

`★ Insight ─────────────────────────────────────`
**PIK Interest**: "Paid-In-Kind" means interest accrues and adds to principal instead of being paid in cash. This preserves cash flow for growth but increases the total amount owed. It's common in subordinated debt where the senior lender restricts cash interest payments.
`─────────────────────────────────────────────────`

---

## Part 5: Exit Analysis

### Exercise 5: Calculate Enterprise Value at Exit

**Exit Assumptions:**
- LTM EBITDA at Exit: $9,350,000
- Exit Multiple: 8.5x

| Metric | Calculation | Value |
|--------|-------------|-------|
| LTM EBITDA | Given | $9,350,000 |
| Exit Multiple | Given | 8.5x |
| Enterprise Value | EBITDA × Multiple | $_______ |

<details>
<summary>Show Answer</summary>

Enterprise Value = $9,350,000 × 8.5 = **$79,475,000**

(Rounded to $80,000,000 in the case for simplicity)

</details>

### Exercise 6: Build the Exit Waterfall

Starting from gross proceeds, calculate net proceeds to each stakeholder:

**STEP 1: Calculate Net Proceeds**

| Item | Amount |
|------|--------|
| Gross Proceeds (EV) | $80,000,000 |
| (-) Senior Debt Payoff | |
| (-) Seller Note + PIK | |
| (-) Transaction Costs (3%) | |
| **Net Proceeds** | |

**STEP 2: Distribute to Stakeholders**

| Stakeholder | Ownership % | Proceeds |
|-------------|-------------|----------|
| Employee Pool (ESOP) | 15.0% | |
| Management Rollover | 7.5% | |
| PE Equity (Apex) | 77.5% | |
| **Total** | 100% | |

<details>
<summary>Show Answer</summary>

**STEP 1:**
| Item | Amount |
|------|--------|
| Gross Proceeds | $80,000,000 |
| (-) Senior Debt | $(3,825,000) |
| (-) Seller Note + PIK | $(2,519,424) |
| (-) Transaction Costs | $(2,400,000) |
| **Net Proceeds** | **$71,255,576** |

**STEP 2:**
| Stakeholder | Ownership % | Proceeds |
|-------------|-------------|----------|
| Employee Pool | 15.0% | $10,688,336 |
| Management | 7.5% | $5,344,168 |
| PE Equity | 77.5% | $55,223,072 |
| **Total** | 100% | $71,255,576 |

Note: Slight differences from case due to rounding and exact debt balance calculation.

</details>

---

## Part 6: Returns Analysis

### Exercise 7: Calculate PE Returns

**Investment Summary:**

| Metric | Value |
|--------|-------|
| Initial Equity Investment | $5,000,000 |
| Follow-on Investment (M&A) | $8,000,000 |
| Total Invested | $13,000,000 |
| Exit Proceeds | $55,223,072 |
| Hold Period | 4.25 years |

**Calculate:**

1. **MOIC (Multiple on Invested Capital)**:
   - Formula: Proceeds ÷ Total Invested
   - MOIC = $_______ ÷ $_______ = _______x

2. **IRR (Internal Rate of Return)**:
   - Use the IRR formula or financial calculator
   - Cash Flows: Year 0: -$5M, Year 1: -$3M (M&A), Year 2: -$5M (M&A), Year 4.25: +$55.2M
   - IRR = _______%

<details>
<summary>Show Answer</summary>

**MOIC**:
$55,223,072 ÷ $13,000,000 = **4.25x**

**IRR Calculation**:
Using cash flows:
- Year 0: -$5,000,000
- Year 1: -$3,000,000 (DataBridge)
- Year 2: -$5,000,000 (CloudPath + SecureNet)
- Year 3: $0 (GovTech funded from operations)
- Year 4.25: +$55,223,072

IRR ≈ **38-42%** (depending on exact timing and calculation method)

`★ Insight ─────────────────────────────────────`
**MOIC vs IRR**: Both matter. MOIC (4.25x) tells you absolute return. IRR (40%) tells you annualized return accounting for timing. A deal returning 4x in 4 years has different IRR than 4x in 7 years.
`─────────────────────────────────────────────────`

</details>

### Exercise 8: Value Creation Attribution

How much of the $67M+ value creation came from each driver?

| Value Driver | Calculation | Value Created |
|--------------|-------------|---------------|
| **Entry EV** | 5.0x × $1.5M | $7,500,000 |
| | | |
| **EBITDA Growth** | | |
| Entry EBITDA | | $1,500,000 |
| Exit EBITDA | | $9,350,000 |
| EBITDA Increase | | $7,850,000 |
| Value @ Entry Multiple | $7.85M × 5.0x | $_______ |
| | | |
| **Multiple Expansion** | | |
| Multiple Change | 8.5x - 5.0x | 3.5x |
| Applied to Exit EBITDA | $9.35M × 3.5x | $_______ |
| | | |
| **Exit EV** | | $79,475,000 |
| **Total Value Created** | Exit - Entry | $_______ |

<details>
<summary>Show Answer</summary>

| Value Driver | Contribution |
|--------------|--------------|
| Entry EV | $7,500,000 |
| EBITDA Growth (×5.0x) | $39,250,000 |
| Multiple Expansion (×$9.35M) | $32,725,000 |
| **Exit EV** | **$79,475,000** |
| **Total Value Created** | **$71,975,000** |

**Attribution:**
- EBITDA Growth: 55% of value creation
- Multiple Expansion: 45% of value creation

</details>

---

## Part 7: Sensitivity Analysis

### Exercise 9: Exit Multiple Sensitivity

Calculate PE proceeds and returns at different exit multiples:

| Exit Multiple | Enterprise Value | Net Proceeds | PE Share (77.5%) | MOIC | IRR |
|---------------|------------------|--------------|------------------|------|-----|
| 6.0x | $56,100,000 | | | | |
| 7.0x | $65,450,000 | | | | |
| 8.5x (Base) | $79,475,000 | | | | |
| 10.0x | $93,500,000 | | | | |

<details>
<summary>Show Answer</summary>

| Exit Multiple | EV | Net Proceeds* | PE Share | MOIC | IRR |
|---------------|-----|---------------|----------|------|-----|
| 6.0x | $56.1M | $47.4M | $36.7M | 2.8x | 28% |
| 7.0x | $65.5M | $56.8M | $44.0M | 3.4x | 34% |
| 8.5x | $79.5M | $71.3M | $55.2M | 4.2x | 40% |
| 10.0x | $93.5M | $85.3M | $66.1M | 5.1x | 47% |

*Net of debt payoff and transaction costs

**Key Insight**: Every 1.0x of multiple expansion = ~$9.35M of value = $7.2M to PE

</details>

### Exercise 10: EBITDA Sensitivity

What if operational improvements underperform?

| Exit EBITDA Margin | Exit EBITDA | EV (@ 8.5x) | PE MOIC |
|--------------------|-------------|-------------|---------|
| 12% (Underperform) | | | |
| 15% (Moderate) | | | |
| 17% (Base) | $9,350,000 | $79,475,000 | 4.2x |
| 20% (Outperform) | | | |

<details>
<summary>Show Answer</summary>

Assuming $55M revenue at exit:

| Margin | EBITDA | EV | PE MOIC |
|--------|--------|-----|---------|
| 12% | $6.6M | $56.1M | 2.8x |
| 15% | $8.3M | $70.6M | 3.7x |
| 17% | $9.4M | $79.9M | 4.3x |
| 20% | $11.0M | $93.5M | 5.1x |

**Key Insight**: Every 1% of margin improvement = ~$550K EBITDA = ~$4.7M value

</details>

---

## Part 8: Comprehensive Model

### Final Exercise: Full LBO Model

Build a complete LBO model in Excel or Google Sheets that includes:

1. **Assumptions Tab**
   - Transaction inputs
   - Operating assumptions
   - Debt terms
   - Exit assumptions

2. **Sources & Uses**
   - Capital structure
   - Uses of funds

3. **Pro Forma P&L**
   - 5-year projections
   - Revenue build (organic + acquired)
   - EBITDA bridge

4. **Debt Schedule**
   - Senior debt amortization
   - Seller note PIK accrual
   - Interest expense calculation

5. **Exit Analysis**
   - Waterfall
   - Returns by stakeholder

6. **Sensitivity Tables**
   - Exit multiple
   - EBITDA margin
   - Hold period

### Model Outputs Checklist

| Output | Target | Your Calculation |
|--------|--------|------------------|
| Total Sources/Uses | $12.5M | |
| Year 4 Revenue | $55M | |
| Year 4 EBITDA | $9.35M | |
| Exit EV | $79.5M | |
| Net Proceeds | $71.3M | |
| PE MOIC | 4.2x | |
| PE IRR | 40% | |
| Employee Payout | $10.7M | |

---

## Appendix: LBO Formulas

### Key Formulas

```
Enterprise Value = EBITDA × Multiple

Equity Value = Enterprise Value - Net Debt

MOIC = Exit Proceeds ÷ Total Invested Capital

IRR = Rate that makes NPV of cash flows = 0

PIK Interest (Year N) = Prior Balance × Interest Rate
PIK Balance (Year N) = Prior Balance + PIK Interest

Debt Service Coverage = EBITDA ÷ (Principal + Interest)

Leverage Ratio = Total Debt ÷ EBITDA
```

### IRR Approximation

For quick IRR estimates without a calculator:

```
IRR ≈ (MOIC^(1/years) - 1) × 100

Example: 4.25x over 4.25 years
IRR ≈ (4.25^(1/4.25) - 1) × 100
IRR ≈ (1.40 - 1) × 100
IRR ≈ 40%
```

---

## Reflection Questions

1. **Risk Assessment**: What are the three biggest risks to achieving the base case returns? How would you mitigate each?

2. **Debt Capacity**: Is 3.0x leverage appropriate for a services business? What factors support more or less debt?

3. **Multiple Arbitrage**: The model assumes buying at 5.0x and selling at 8.5x. What justifies this expansion? Is it realistic?

4. **Employee Alignment**: The employee pool gets 15% ($10.7M). Is this enough to drive performance? Too much dilution to PE returns?

5. **Integration Risk**: With 5 acquisitions in 4 years, what's the risk of integration failure? How does this affect the model?

---

*Simulation for: [Case 07: PE Turnaround & Buy-and-Build](../case-studies/case-07-pe-turnaround-buyout.md)*
*Data Source: [PE Turnaround Dataset](../datasets/pe-turnaround.json)*
*Return to [Nexus Simulations](../README.md)*
