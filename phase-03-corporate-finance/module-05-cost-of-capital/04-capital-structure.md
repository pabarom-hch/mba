# Capital Structure

## Learning Objectives

- Understand the trade-offs in capital structure decisions
- Apply Modigliani-Miller propositions
- Recognize factors affecting optimal leverage
- Analyze trade-off theory and pecking order theory
- Make practical capital structure recommendations

---

## Introduction

Capital structure refers to the mix of debt and equity a company uses to finance its operations. The fundamental question: Is there an optimal mix that minimizes cost of capital and maximizes firm value?

This question has occupied finance scholars for decades. The answer: it depends, but the thinking process is invaluable for CEOs and consultants.

---

## Core Concepts

### Modigliani-Miller Propositions

**MM Proposition I (No Taxes):**
In a perfect market, capital structure is irrelevant to firm value.

```
VL = VU

Where:
VL = Value of levered firm
VU = Value of unlevered firm

The pie (firm value) doesn't change based on how you slice it.
```

**MM Proposition II (No Taxes):**
Cost of equity increases with leverage to offset cheaper debt.

```
re = r0 + (r0 - rd) × (D/E)

Where:
re = Cost of equity (levered)
r0 = Cost of capital (unlevered)
rd = Cost of debt
D/E = Debt-to-equity ratio
```

**MM with Taxes:**
Debt creates a tax shield, increasing firm value.

```
VL = VU + TC × D

Where:
TC = Corporate tax rate
D = Amount of debt

Tax shield = TC × D
```

### The Real World: Trade-Off Theory

**The Trade-Off:**
```
                Benefit of Debt          Cost of Debt
Firm Value  =  VU + PV(Tax Shield)  -  PV(Financial Distress)
```

**Benefits of Debt:**
- Tax shield (interest is deductible)
- Discipline on management (must meet payments)
- Lower agency costs (less free cash flow to waste)

**Costs of Debt:**
- Financial distress costs
- Agency costs of debt
- Loss of flexibility
- Risk of bankruptcy

### Optimal Capital Structure

```
WACC
  |
  |     ╲
  |      ╲___________
  |                  ╲
  |                   ╲
  |________________________ Debt/Equity
        Optimal
```

At low leverage: Tax benefits dominate, WACC falls
At high leverage: Distress costs dominate, WACC rises
Optimal: Where marginal tax benefit = marginal distress cost

---

## Factors Affecting Optimal Leverage

### Business Characteristics

| Factor | Higher Leverage OK | Lower Leverage Better |
|--------|-------------------|---------------------|
| Cash flow stability | Stable, predictable | Volatile, cyclical |
| Asset tangibility | High (collateral) | Low (intangibles) |
| Growth opportunities | Few | Many |
| Profitability | Moderate | Very high (equity value) |
| Industry norm | Peers use debt | Peers use equity |

### Tax Considerations

```
Higher tax rate → More valuable tax shield → More debt optimal

But consider:
- Tax loss carryforwards reduce benefit
- Non-debt tax shields (depreciation) substitute
- Personal taxes of investors affect net benefit
```

### Financial Flexibility

```
Need for flexibility → Less debt

Companies with:
- High growth needs
- Acquisition ambitions
- Volatile industries
- R&D intensity
Should maintain lower leverage for financial flexibility.
```

### Pecking Order Theory

**Companies prefer financing in this order:**
1. Internal funds (retained earnings)
2. Debt
3. Equity (last resort)

**Rationale:**
- Information asymmetry
- Signaling effects
- Transaction costs
- Managerial preferences

---

## Measuring Leverage

### Common Metrics

**Debt-to-Equity Ratio:**
```
D/E = Total Debt / Shareholders' Equity
```

**Debt-to-Capital:**
```
D/C = Total Debt / (Total Debt + Equity)
```

**Debt-to-EBITDA:**
```
Debt/EBITDA = Total Debt / EBITDA
```

**Interest Coverage:**
```
Interest Coverage = EBIT / Interest Expense
```

### Book vs. Market Values

| Measure | Use |
|---------|-----|
| Book leverage | Covenant compliance, historical |
| Market leverage | WACC, valuation, forward-looking |

**Market Debt-to-Capital:**
```
Market D/C = Debt / (Debt + Market Cap)
```

---

## Industry Capital Structures

| Industry | Typical D/E | Rationale |
|----------|-------------|-----------|
| Utilities | 1.0-1.5x | Stable cash flows, regulated returns |
| REITs | 0.5-1.0x | Required distributions, stable assets |
| Airlines | 0.8-1.5x | Asset-heavy, cyclical |
| Manufacturing | 0.3-0.7x | Moderate stability |
| Tech/Software | 0.0-0.3x | High growth, intangible assets |
| Pharma | 0.2-0.5x | R&D needs, cash reserves |
| Financials | Varies | Regulated, different metrics |

---

## Consulting Application

### Capital Structure Analysis

**Framework:**

1. **Benchmark Analysis**
   - Compare to peer median
   - Identify outliers
   - Understand why

2. **Capacity Analysis**
   - How much debt can the company support?
   - Interest coverage tests
   - Rating agency criteria

3. **Optimal Structure**
   - Target rating
   - Minimize WACC
   - Maintain flexibility

### Example Client Recommendation

```
Current State:
- D/E: 0.20 (under-levered vs. peers at 0.50)
- Interest coverage: 15x (very comfortable)
- Rating: A

Analysis:
- Substantial unused debt capacity
- Tax shield not being captured
- Competitors have lower WACC

Recommendation:
- Increase D/E to 0.40-0.50
- Use proceeds for buybacks
- Expected WACC reduction: 50-75 bps
- Maintain A- / BBB+ rating
```

---

## CEO Application

### Strategic Capital Structure Decisions

| Situation | Capital Structure Move |
|-----------|----------------------|
| Strong cash position | Consider buybacks or dividends |
| Acquisition opportunity | May increase debt temporarily |
| Recession approaching | Build cash, reduce debt |
| Interest rates low | Lock in long-term debt |
| Stock overvalued | Issue equity |
| Stock undervalued | Buy back stock |

### Communication with Rating Agencies

**They Care About:**
- Cash flow stability
- Interest coverage
- Debt/EBITDA
- Industry position
- Management strategy

**Maintaining Target Rating:**
```
Rating agencies publish criteria:
- BBB requires: Interest coverage > 3x, Debt/EBITDA < 3x
- Maintain buffer above minimums
- Communicate strategy clearly
```

### Board Considerations

**Questions Directors Should Ask:**
1. "How does our leverage compare to peers?"
2. "What's our target capital structure?"
3. "Are we optimizing our tax position?"
4. "Do we have adequate financial flexibility?"
5. "What's the cost of being wrong?"

---

## Worked Example

### Optimal Capital Structure Analysis

**Company:** HealthCo (medical equipment manufacturer)

**Current State:**
- EBITDA: $200M
- Total debt: $300M
- Market cap: $1,500M
- Interest rate on debt: 5%
- Tax rate: 25%
- Cost of equity (current): 11%

**Current Metrics:**
```
D/E = 300 / 1,500 = 0.20
Debt/EBITDA = 300 / 200 = 1.5x
Interest expense = 300 × 5% = $15M
Interest coverage = EBITDA / Interest = 13.3x
```

**Current WACC:**
```
D/V = 300 / 1,800 = 16.7%
E/V = 1,500 / 1,800 = 83.3%

WACC = 83.3% × 11% + 16.7% × 5% × (1-0.25)
WACC = 9.17% + 0.63%
WACC = 9.8%
```

**Alternative: Increase Debt to D/E = 0.5**
```
If D/E = 0.5 and value stays ~$1,800M:
Debt would be: $600M
Equity would be: $1,200M

New interest expense: 600 × 5.5% = $33M (higher rate)
Interest coverage: 200 / 33 = 6.1x (still safe)

New cost of equity (higher due to leverage):
Using MM II: re = 9.8% + (9.8% - 5.5%)(1-0.25)(0.5)
re ≈ 11.4%

New WACC:
D/V = 600 / 1,800 = 33.3%
E/V = 1,200 / 1,800 = 66.7%

WACC = 66.7% × 11.4% + 33.3% × 5.5% × 0.75
WACC = 7.60% + 1.37%
WACC = 8.97%
```

**Value Creation:**
```
WACC reduction: 9.8% - 9.0% = 0.8%
On $1,800M enterprise value, this is significant.
Approximate value increase: 5-10%
```

**Recommendation:**
Increase leverage from D/E of 0.2 to 0.4-0.5, using proceeds for share buybacks. This captures tax shield while maintaining investment-grade rating.

---

## Common Mistakes

### 1. Ignoring Industry Context
**Mistake:** Comparing utility leverage to tech leverage.
**Fix:** Benchmark within industry.

### 2. Using Book Values
**Mistake:** "Our D/E is 0.3" (using book equity).
**Fix:** Use market values for WACC purposes.

### 3. Forgetting Distress Costs
**Mistake:** "More debt is always better for tax reasons."
**Fix:** Consider distress, flexibility, covenants.

### 4. Static View
**Mistake:** Setting leverage and forgetting it.
**Fix:** Actively manage as conditions change.

---

## Key Takeaways

1. **Capital structure affects WACC** - Right mix minimizes cost
2. **Trade-off exists** - Tax benefits vs. distress costs
3. **Industry matters** - Different norms for different businesses
4. **Flexibility has value** - Don't over-lever for growth companies
5. **Market values for WACC** - Book values for covenants
6. **Target a rating** - Provides discipline and credibility
7. **Dynamic decisions** - Adjust as circumstances change

---

## Practice Problems

### Problem 1: Leverage Metrics
Company has $500M debt, $1,000M market cap, EBITDA of $300M, interest rate 6%. Calculate D/E, Debt/EBITDA, and interest coverage.

### Problem 2: WACC Impact
Current: D/E = 0.25, re = 10%, rd = 5%, T = 25%
Proposed: D/E = 0.50

If re rises to 11% with more leverage, calculate WACC before and after.

### Problem 3: Trade-Off
A company can issue $100M debt at 6% or $100M equity at an implied cost of 12%. Tax rate is 25%. What are the pros and cons of each?

---

*Next: [WACC Calculation](05-wacc-calculation.md)*
