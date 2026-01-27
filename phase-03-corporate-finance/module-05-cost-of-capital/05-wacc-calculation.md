# WACC Calculation

## Learning Objectives

- Calculate WACC step-by-step
- Use appropriate market weights
- Handle preferred stock and other securities
- Apply WACC correctly in valuation
- Recognize common calculation errors

---

## Introduction

The Weighted Average Cost of Capital (WACC) is the discount rate used for valuation and investment decisions. It represents the blended cost of all capital sources, weighted by their market values.

Getting WACC right is crucial—it directly affects every valuation and capital budgeting decision.

---

## Core Concepts

### The WACC Formula

**Standard Formula:**
```
WACC = (E/V) × re + (D/V) × rd × (1-T)

Where:
E = Market value of equity
D = Market value of debt
V = E + D (total enterprise value)
re = Cost of equity
rd = Cost of debt (pre-tax)
T = Marginal tax rate
```

**With Preferred Stock:**
```
WACC = (E/V) × re + (D/V) × rd × (1-T) + (P/V) × rp

Where:
P = Market value of preferred stock
rp = Cost of preferred (Dividend/Price)
```

### Market Value Weights

**Why Market Values?**

| Book Values | Market Values |
|------------|---------------|
| Historical cost | Current worth |
| May be outdated | Forward-looking |
| Accounting-driven | Investor perspective |
| Inappropriate for WACC | Correct for WACC |

**Calculating Market Values:**

```
Equity: Market Cap = Share Price × Shares Outstanding

Debt: Usually close to book value unless:
- Rates changed significantly since issuance
- Credit quality changed
- Use market price of traded bonds × quantity

Preferred: Market price × shares outstanding
```

### Step-by-Step WACC Calculation

**Example: TechManufacturing Corp**

**Given Data:**
- Share price: $45
- Shares outstanding: 50 million
- Book value of debt: $400 million
- Debt trading at 98% of face value
- Preferred stock: 2 million shares at $25
- Cost of equity (from CAPM): 11%
- Yield to maturity on debt: 6%
- Preferred dividend: $2.00/share
- Tax rate: 25%

**Step 1: Calculate Market Values**
```
Equity: 50M × $45 = $2,250M
Debt: $400M × 0.98 = $392M
Preferred: 2M × $25 = $50M
Total: $2,692M
```

**Step 2: Calculate Weights**
```
E/V = 2,250 / 2,692 = 83.6%
D/V = 392 / 2,692 = 14.6%
P/V = 50 / 2,692 = 1.9%
```

**Step 3: Determine Component Costs**
```
re = 11% (given from CAPM)
rd = 6% (YTM)
rp = $2.00 / $25 = 8%
```

**Step 4: Calculate WACC**
```
WACC = (83.6% × 11%) + (14.6% × 6% × 0.75) + (1.9% × 8%)
WACC = 9.20% + 0.66% + 0.15%
WACC = 10.01%
```

---

## Practical Considerations

### Marginal vs. Average Tax Rate

**Use Marginal Tax Rate:**
```
Marginal rate: Rate on next dollar of income
Average rate: Total tax / Total income

The tax shield applies at the margin.
If company is profitable, use statutory rate.
If losses exist, tax benefit may be delayed or reduced.
```

### Target vs. Current Capital Structure

| Situation | Capital Structure to Use |
|-----------|------------------------|
| Stable company | Current market weights |
| Changing leverage | Target weights |
| LBO or recapitalization | Pro forma weights |
| Valuation | Normalized/target |

**For Valuation:**
If capital structure will change, use target weights that reflect long-term expectations.

### Iterative WACC

**The Problem:**
```
WACC depends on weights
Weights depend on market values
Market values depend on WACC (in DCF)

Circular!
```

**Solution:**
1. Estimate initial WACC with assumed weights
2. Calculate enterprise value
3. Calculate implied equity value
4. Recalculate weights
5. Recalculate WACC
6. Iterate until convergence

**Or:** Use target capital structure to break circularity.

---

## Special Cases

### Negative Cash or Excess Cash

**Adjustment:**
```
Net Debt = Total Debt - Excess Cash

If company has more cash than operational needs,
some analysts use net debt for weights.

WACC calculated with:
D = Gross debt - Excess cash
V = E + D (net)
```

### Operating Leases

**Post-IFRS 16 / ASC 842:**
```
Operating leases are now capitalized.
Include lease liability in debt.
Use implicit lease rate as cost.
```

### Convertible Securities

```
Convertibles have debt and equity features.

Options:
1. Treat as debt (conservative)
2. Treat as equity (if conversion likely)
3. Split into components (theoretically correct)
```

### Multiple Debt Tranches

```
If company has various debt types:
- Senior secured
- Senior unsecured
- Subordinated

Calculate weighted average rd first,
then use in WACC formula.
```

---

## Industry WACC Benchmarks

| Industry | Typical WACC |
|----------|-------------|
| Utilities | 5-7% |
| Consumer Staples | 7-9% |
| Healthcare | 8-10% |
| Industrials | 8-10% |
| Technology | 9-12% |
| Biotech | 11-14% |

*(Note: Varies with interest rate environment)*

---

## Consulting Application

### WACC in Valuation Projects

**Standard Approach:**
1. Gather market data
2. Calculate cost of debt from YTM or spread
3. Calculate cost of equity using CAPM
4. Determine market value weights
5. Calculate WACC
6. Document all assumptions

**Presentation Template:**
```
Cost of Capital Summary
─────────────────────────────
Component     Weight    Cost    Contribution
Equity        80%       11.0%   8.80%
Debt          20%       5.0%    0.75%*
─────────────────────────────
WACC                            9.55%

*After-tax at 25% marginal rate
```

### Sensitivity Analysis

**WACC Sensitivity Table:**
```
             Cost of Equity
           | 10%   | 11%   | 12%   |
    D/E    |-------|-------|-------|
    20%    | 8.9%  | 9.6%  | 10.3% |
    30%    | 8.5%  | 9.2%  | 9.9%  |
    40%    | 8.1%  | 8.8%  | 9.5%  |
```

---

## CEO Application

### WACC and Value Creation

```
Value Creation = (ROIC - WACC) × Invested Capital

If ROIC > WACC: Creating value
If ROIC < WACC: Destroying value
If ROIC = WACC: Neutral
```

### Monitoring WACC

**Review Periodically:**
- Interest rates changed?
- Company risk profile changed?
- Capital structure shifted?
- Peer comparison?

**Trigger Events:**
- Major acquisition
- Significant stock price move
- Credit rating change
- Interest rate environment shift

### WACC as Hurdle Rate

```
For project evaluation:
- Use WACC as base hurdle
- Adjust for project-specific risk
- Higher risk project → Higher hurdle
- Lower risk project → Lower hurdle (rare)
```

---

## Worked Example

### Complete WACC Calculation

**Company: GlobalTech Inc.**

**Market Data:**
- Stock price: $80
- Shares outstanding: 100 million
- Total debt: $2 billion (book value)
- Debt YTM: 5.5%
- 5-year beta: 1.15
- Risk-free rate: 4%
- Equity risk premium: 5.5%
- Tax rate: 25%

**Step 1: Cost of Equity (CAPM)**
```
re = rf + β × ERP
re = 4% + 1.15 × 5.5%
re = 4% + 6.33%
re = 10.33%
```

**Step 2: After-Tax Cost of Debt**
```
rd(after-tax) = 5.5% × (1 - 0.25)
rd(after-tax) = 4.13%
```

**Step 3: Market Values**
```
Equity: 100M × $80 = $8,000M
Debt: $2,000M (assume market ≈ book)
Total: $10,000M
```

**Step 4: Weights**
```
E/V = 8,000 / 10,000 = 80%
D/V = 2,000 / 10,000 = 20%
```

**Step 5: WACC**
```
WACC = (80% × 10.33%) + (20% × 4.13%)
WACC = 8.26% + 0.83%
WACC = 9.09%
```

**Rounded: WACC = 9.1%**

**Sanity Check:**
- Technology company
- Moderate leverage
- 9% WACC is reasonable for sector

---

## Common Mistakes

### 1. Using Book Weights
**Mistake:** "Debt is $500M on balance sheet, equity is $300M."
**Fix:** Use market value of equity, market/fair value of debt.

### 2. Forgetting Tax Shield
**Mistake:** Using pre-tax cost of debt.
**Fix:** Multiply rd by (1-T).

### 3. Using Wrong Tax Rate
**Mistake:** Using average effective rate from financials.
**Fix:** Use marginal statutory rate.

### 4. Inconsistent Currency
**Mistake:** US risk-free rate with Euro-based cash flows.
**Fix:** Match currency of cash flows and discount rate.

### 5. Static WACC for Changing Structure
**Mistake:** Using today's weights for 10-year projection.
**Fix:** Consider target capital structure.

---

## Key Takeaways

1. **WACC blends all capital costs** - Weighted by market values
2. **Market values required** - Not book values
3. **After-tax debt cost** - Interest is tax deductible
4. **Marginal tax rate** - Not effective rate
5. **Target or current weights** - Depends on situation
6. **Document assumptions** - Critical for credibility
7. **Sensitivity analysis** - WACC is an estimate, not a fact

---

## Practice Problems

### Problem 1: Basic WACC
- Market cap: $500M
- Debt: $200M
- Cost of equity: 12%
- Cost of debt: 6%
- Tax rate: 25%

Calculate WACC.

### Problem 2: With Preferred Stock
- Equity: $800M (cost 11%)
- Debt: $300M (cost 5%)
- Preferred: $100M (cost 7%)
- Tax rate: 25%

Calculate WACC.

### Problem 3: Target vs. Current
Current structure: D/E = 0.2, WACC = 10%
Target structure: D/E = 0.4

If re increases from 11% to 12% and rd stays at 5%, what is the new WACC? (Tax rate 25%)

---

*Next: [Project-Specific Risk](06-project-specific-risk.md)*
