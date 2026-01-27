# Module 5: Cost of Capital

## Overview

Cost of capital is the bridge between investment decisions and financing decisions. It represents the minimum return a company must earn on its investments to satisfy its capital providers—both debt holders and equity investors.

Understanding cost of capital is essential because it's the discount rate you use to evaluate every investment. Get it wrong, and you'll either reject good projects (rate too high) or accept value-destroying ones (rate too low).

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate the cost of each capital component (debt, equity, preferred)
2. Compute Weighted Average Cost of Capital (WACC)
3. Apply CAPM to estimate cost of equity
4. Adjust cost of capital for project-specific risk
5. Understand the limitations of WACC
6. Use cost of capital in valuation and decision-making

---

## The Cost of Capital Framework

```
Cost of Capital Components
│
├── Cost of Debt (rd)
│   ├── Yield to maturity on existing debt
│   ├── After-tax: rd × (1-T)
│   └── Observable in market
│
├── Cost of Preferred Stock (rp)
│   ├── Dividend / Price
│   └── Not tax-deductible
│
├── Cost of Equity (re)
│   ├── CAPM: rf + β(rm - rf)
│   ├── Dividend Growth Model
│   ├── Build-up Method
│   └── Not directly observable
│
└── Weighted Average (WACC)
    └── (E/V)×re + (D/V)×rd×(1-T) + (P/V)×rp
```

---

## Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [Cost of Debt](01-cost-of-debt.md) | YTM, after-tax cost, credit spreads |
| 2 | [Cost of Equity - CAPM](02-cost-of-equity-capm.md) | Risk-free rate, beta, market risk premium |
| 3 | [Cost of Equity - Alternatives](03-cost-of-equity-alternatives.md) | DDM, build-up, implied cost |
| 4 | [Capital Structure](04-capital-structure.md) | Optimal mix, trade-off theory, pecking order |
| 5 | [WACC Calculation](05-wacc-calculation.md) | Weighting, market values, mechanics |
| 6 | [Project-Specific Risk](06-project-specific-risk.md) | Divisional WACC, pure-play beta, risk adjustment |

---

## The WACC Formula

**Weighted Average Cost of Capital:**

```
WACC = (E/V) × re + (D/V) × rd × (1-T)

Where:
E = Market value of equity
D = Market value of debt
V = E + D (total value)
re = Cost of equity
rd = Cost of debt
T = Tax rate
```

**Example:**
```
Market Value of Equity: $600M
Market Value of Debt: $400M
Cost of Equity: 12%
Cost of Debt: 6%
Tax Rate: 25%

WACC = (600/1000) × 12% + (400/1000) × 6% × (1-0.25)
WACC = 7.2% + 1.8%
WACC = 9.0%
```

---

## Why Cost of Capital Matters

### For Investment Decisions

The cost of capital is the hurdle rate for investments:

| Investment Return | vs. WACC | Decision |
|------------------|----------|----------|
| 15% | > 10% WACC | Accept—creates value |
| 8% | < 10% WACC | Reject—destroys value |
| 10% | = 10% WACC | Indifferent |

### For Valuation

WACC is the discount rate in DCF valuation:

```
Enterprise Value = Σ [FCFt / (1+WACC)^t]
```

Higher WACC → Lower valuation
Lower WACC → Higher valuation

### For Capital Structure Decisions

Understanding component costs helps optimize the capital structure:
- Debt is cheaper (interest tax deductible)
- But too much debt increases risk
- Optimal mix minimizes WACC

---

## Consulting Application

### McKinsey Cost of Capital Analysis

When advising clients on cost of capital:

1. **Benchmark appropriately** - Compare to industry peers
2. **Use market values** - Not book values
3. **Be consistent** - Match cash flow assumptions
4. **Consider risk adjustments** - Different businesses have different costs
5. **Communicate uncertainty** - WACC is an estimate, not a fact

### Common Consulting Projects

| Project Type | Cost of Capital Use |
|-------------|-------------------|
| M&A valuation | Discount target cash flows |
| Strategy assessment | Evaluate business unit returns |
| Performance measurement | Set hurdle rates |
| Capital allocation | Compare investment returns |
| Value creation | Identify WACC vs. ROIC gaps |

---

## CEO Application

### Capital Structure Decisions

As CEO, you influence cost of capital through:

| Decision | Impact on WACC |
|----------|---------------|
| Increase debt | Lower (up to a point) |
| Pay down debt | Higher (if under-levered) |
| Issue equity | Higher (equity costs more) |
| Improve margins | Lower (reduces perceived risk) |
| Diversify | Lower (reduces beta) |

### Questions for Your CFO

1. "What is our current WACC?"
2. "How does it compare to peers?"
3. "Are we optimally capitalized?"
4. "What's the cost of capital for each business unit?"
5. "How sensitive is our valuation to WACC?"

---

## Assessment

Complete the [Module Assessment](assessment.md) to test your understanding.

**Target Score:** 80% or higher to proceed.

---

## Case Studies

1. [Case 1: Optimal Capital Structure](cases/case-01-optimal-capital-structure.md)
   - Analyzing leverage decisions
   - WACC minimization
   - Practical constraints

2. [Case 2: Divisional Cost of Capital](cases/case-02-divisional-cost-of-capital.md)
   - Multi-business company
   - Pure-play beta estimation
   - Capital allocation implications

---

## Key Formulas

| Concept | Formula |
|---------|---------|
| WACC | (E/V)×re + (D/V)×rd×(1-T) |
| CAPM | re = rf + β(rm - rf) |
| After-tax Cost of Debt | rd × (1-T) |
| Dividend Growth Model | re = (D1/P0) + g |
| Levered Beta | βL = βU × [1 + (1-T)(D/E)] |
| Unlevered Beta | βU = βL / [1 + (1-T)(D/E)] |

---

## Resources

### Essential Reading
- Principles of Corporate Finance (Brealey, Myers) - Chapters 9, 17-18
- Valuation (McKinsey) - Chapter 10

### Data Sources
- Bloomberg terminal (betas, yields)
- Damodaran Online (industry data)
- Federal Reserve (risk-free rates)

---

*Prerequisites: [Module 4: Capital Budgeting](../module-04-capital-budgeting/README.md)*

*Next: [Module 6: Valuation](../module-06-valuation/README.md)*
