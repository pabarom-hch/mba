# LBO Valuation

## Learning Objectives

- Understand the LBO model structure
- Calculate returns in leveraged buyouts
- Determine maximum purchase price based on target returns
- Understand debt capacity and financing structures
- Apply LBO analysis as a valuation floor

---

## Introduction

A Leveraged Buyout (LBO) is an acquisition financed primarily with debt, where the target's cash flows service the debt. LBO valuation answers: "What's the maximum a financial buyer can pay while achieving target returns?"

For strategic buyers, LBO valuation provides a "floor" value—what a financial alternative would pay. Understanding LBOs is essential for M&A negotiations and private equity work.

---

## Core Concepts

### How LBOs Create Value

```
LBO Value Creation Sources:

1. Financial Engineering (Leverage)
   - Use debt to amplify equity returns
   - Pay down debt with cash flows

2. Operational Improvement
   - Cost reduction
   - Revenue enhancement
   - Working capital efficiency

3. Multiple Expansion
   - Buy at lower multiple
   - Sell at higher multiple
   - Market timing

4. Growth
   - Organic growth
   - Add-on acquisitions
```

### The LBO Return Math

```
IRR Drivers:

Entry Multiple: 8x EBITDA
EBITDA Growth: $100M → $150M (50% over 5 years)
Exit Multiple: 9x EBITDA
Leverage: 5x Debt/EBITDA at entry

Entry:
Purchase EV = $100M × 8 = $800M
Debt = $500M (5x)
Equity = $300M

Exit (Year 5):
Exit EV = $150M × 9 = $1,350M
Debt (paid down to) = $200M
Equity Value = $1,150M

Return = $1,150M / $300M = 3.8x MOIC
IRR ≈ 30% (over 5 years)
```

### Key Return Metrics

**MOIC (Multiple of Invested Capital):**
```
MOIC = Exit Equity Value / Initial Equity Investment

Example: $1,150M / $300M = 3.8x MOIC
```

**IRR (Internal Rate of Return):**
```
IRR = Annual return rate that equates:
Initial Investment ↔ Exit Proceeds

Example: $300M × (1 + IRR)^5 = $1,150M
IRR ≈ 30.8%
```

**Target Returns:**

| Fund Type | Target IRR | Target MOIC |
|-----------|-----------|-------------|
| Buyout (large) | 20-25% | 2.0-2.5x |
| Buyout (mid-market) | 22-28% | 2.5-3.0x |
| Growth equity | 25-35% | 3.0-4.0x |
| Venture | 30%+ | 3.0x+ |

---

## LBO Model Structure

### Sources and Uses

**Uses (What the money is used for):**
```
Purchase price (equity value)
Refinance existing debt
Transaction fees
Financing fees
Cash to balance sheet
─────────────────────────
Total Uses
```

**Sources (Where the money comes from):**
```
Senior debt (Term Loan)
Subordinated debt / Mezzanine
Equity contribution
Rollover equity (if any)
─────────────────────────
Total Sources = Total Uses
```

### Debt Structure

| Type | Typical Rate | Seniority | Amortization |
|------|--------------|-----------|--------------|
| Revolver | SOFR + 200-300 | Senior Secured | Bullet |
| Term Loan A | SOFR + 200-350 | Senior Secured | Amortizing |
| Term Loan B | SOFR + 300-450 | Senior Secured | 1% annual |
| High Yield Bonds | 7-10% | Sr Unsecured | Bullet |
| Mezzanine | 12-15% | Subordinated | PIK or Bullet |

### Debt Capacity Metrics

```
Lender Limits:

Senior Debt: 4-5x EBITDA
Total Debt: 5-7x EBITDA
Interest Coverage: > 2.0x
Fixed Charge Coverage: > 1.0x
```

### Model Outputs

```
For Each Scenario:

1. Purchase price supported
2. Returns at various exit years
3. Debt paydown schedule
4. Credit statistics over time
5. Sensitivity to entry/exit multiples
```

---

## Building an LBO Model

### Step 1: Entry Assumptions

```
Entry Assumptions:
- Purchase price multiple (entry EV/EBITDA)
- Financing structure (debt/equity mix)
- Transaction and financing fees
- Initial cash balance
```

### Step 2: Operating Projections

```
Project 5-7 years:
- Revenue growth
- EBITDA margin
- CapEx requirements
- Working capital needs
- Cash flow generation
```

### Step 3: Debt Schedule

```
For Each Year:
Beginning Balance
+ New Borrowings
- Mandatory Amortization
- Optional Prepayments (from excess cash)
= Ending Balance

Interest Expense = Average Balance × Rate
```

### Step 4: Exit and Returns

```
Exit Assumptions:
- Exit year (typically Year 5)
- Exit multiple (EV/EBITDA)
- Transaction costs

Calculate:
Exit Enterprise Value = Exit EBITDA × Exit Multiple
- Net Debt at Exit
- Transaction costs
= Proceeds to Equity

Returns:
MOIC = Proceeds / Initial Equity
IRR = f(Investment, Proceeds, Time)
```

---

## LBO as Valuation Floor

### The Logic

```
Financial buyers have minimum return requirements.
They'll pay up to the price that achieves those returns.

If strategic value < LBO floor:
   - Opportunity for financial buyers
   - Something is wrong with strategic analysis

If strategic value > LBO value:
   - Strategic buyer should win
   - Synergies justify premium
```

### Calculating Maximum Purchase Price

```
Work Backwards:

Given:
- Required IRR: 25%
- Exit EBITDA: $150M
- Exit Multiple: 8x
- Exit Debt: $200M
- Holding Period: 5 years

Exit Equity = $150M × 8 - $200M = $1,000M

Required Equity Investment:
$1,000M / (1.25)^5 = $328M

Maximum Purchase Price:
Entry EV = $328M + Entry Debt

If entry debt = 5x entry EBITDA:
Iterate to find max price
```

---

## Consulting Application

### M&A Advisory Use

**For Sell-Side:**
```
"LBO floor is $500M at 25% IRR target.
Strategic value at $650M provides 30% premium over financial alternative.
This supports our pricing expectations."
```

**For Buy-Side:**
```
"LBO analysis shows floor of $500M.
Financial buyers can reach $550M at stretched assumptions.
We should bid $575M to ensure win."
```

### Private Equity Due Diligence

```
Key Questions:
1. Is entry multiple reasonable?
2. Can we achieve projected EBITDA?
3. Is the financing achievable?
4. What's the exit strategy?
5. What returns are realistic?
```

---

## CEO Application

### Understanding PE Interest

**When PE approaches your company:**

```
They see:
1. Stable, cash-generating business
2. Operational improvement potential
3. Reasonable leverage capacity
4. Clear exit path

Questions to ask:
- What operational changes are planned?
- What's the exit timeline?
- Will management participate?
- What leverage is contemplated?
```

### Negotiating with PE Buyers

```
Key Considerations:
1. Their target returns constrain price
2. Debt market conditions matter
3. Management rollover expectations
4. Non-price terms (governance, earnouts)
```

---

## Worked Example

### Complete LBO Analysis

**Target:** MidCo Manufacturing
- LTM EBITDA: $50M
- Revenue: $250M
- Stable business, 3% growth

**Transaction Assumptions:**
- Entry Multiple: 7.0x EBITDA
- Purchase Price: $350M EV
- Existing Net Debt: $50M
- Equity Purchase Price: $300M

**Financing Structure:**
- Senior Debt: 4.5x = $225M (6% interest)
- Equity: $125M
- Sources = Uses (ignoring fees for simplicity)

**Operating Projections:**

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|---|
| Revenue | 250 | 258 | 265 | 273 | 281 | 290 |
| EBITDA | 50 | 53 | 56 | 59 | 62 | 65 |
| Margin | 20% | 21% | 21% | 22% | 22% | 22% |
| CapEx | | 10 | 10 | 11 | 11 | 12 |
| ΔNWC | | 1 | 1 | 1 | 1 | 1 |
| FCF | | 28 | 30 | 32 | 34 | 36 |

**Debt Schedule:**

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|---|
| Beginning Debt | | 225 | 207 | 187 | 165 | 141 |
| Mandatory Amort | | (10) | (10) | (10) | (10) | (10) |
| Optional Prepay | | (8) | (10) | (12) | (14) | (16) |
| Ending Debt | 225 | 207 | 187 | 165 | 141 | 115 |
| Interest | | 13 | 12 | 11 | 9 | 8 |

**Exit Analysis (Year 5):**

```
Exit EBITDA: $65M
Exit Multiple: 7.5x (multiple expansion)
Exit EV: $487M
Less: Net Debt: $115M
Exit Equity Value: $372M

MOIC: $372M / $125M = 3.0x
IRR: ($372M / $125M)^(1/5) - 1 = 24.4%
```

**Returns Sensitivity:**

| Exit Multiple | 6.5x | 7.0x | 7.5x | 8.0x |
|---------------|------|------|------|------|
| Exit EV | $423M | $455M | $488M | $520M |
| Equity Value | $308M | $340M | $373M | $405M |
| MOIC | 2.5x | 2.7x | 3.0x | 3.2x |
| IRR | 19.8% | 22.1% | 24.4% | 26.5% |

**Maximum Purchase Price at 25% IRR:**

```
Working backwards:
Required exit equity at 25% IRR = $125M × (1.25)^5 = $381M
If exit EV = $65M × 7.5x = $488M
Max debt at exit = $488M - $381M = $107M
(Less than projected $115M, so achievable)

Entry: Can pay slightly more (~8% premium)
Max Entry Multiple: ~7.5x
Max Entry Price: $375M
```

---

## Common Mistakes

### 1. Unrealistic Leverage
**Mistake:** 8x debt with volatile cash flows.
**Fix:** Match leverage to cash flow stability.

### 2. Ignoring Financing Costs
**Mistake:** Not including fees in sources and uses.
**Fix:** Add 2-4% for financing fees.

### 3. Optimistic Multiple Expansion
**Mistake:** Entry at 10x, exit at 14x.
**Fix:** Conservative: assume same multiple; base: modest expansion.

### 4. Ignoring Covenants
**Mistake:** Model shows great returns but violates covenants.
**Fix:** Build in covenant tests and headroom.

### 5. No Downside Analysis
**Mistake:** Only showing base case.
**Fix:** Show returns in downside scenario too.

---

## Key Takeaways

1. **LBOs use leverage** - Amplify equity returns with debt
2. **Target returns drive price** - Work backwards from IRR targets
3. **Multiple sources of value** - Leverage, operations, multiple
4. **Debt capacity limits** - Lenders impose constraints
5. **LBO = floor value** - What financial buyers would pay
6. **Sensitivity matters** - Returns swing with multiples
7. **Cash flow is king** - Debt requires consistent cash

---

## Practice Problems

### Problem 1: MOIC and IRR
Entry equity: $200M. Exit equity after 5 years: $600M. Calculate MOIC and IRR.

### Problem 2: Maximum Price
PE firm requires 20% IRR. Exit EBITDA will be $80M at 8x multiple. Entry debt will be 5x entry EBITDA. What's maximum entry multiple they can pay?

### Problem 3: Sources and Uses
Purchase price: $500M, existing debt: $100M, financing fees: $15M, new debt: $350M. How much equity is needed?

---

*Next: [Valuation Synthesis](06-valuation-synthesis.md)*
