# Module 4: Capital Budgeting

## Overview

Capital budgeting is the process of evaluating investment decisions—determining which projects, acquisitions, or initiatives create value for shareholders. This is among the most important skills for any CEO. Every major decision—from building a factory to launching a product to acquiring a competitor—is ultimately a capital allocation decision.

Get this right, and you build a valuable company. Get it wrong repeatedly, and you destroy shareholder value.

---

## Learning Objectives

By the end of this module, you will be able to:

1. Apply NPV, IRR, and payback methods to evaluate investments
2. Construct and analyze project cash flows
3. Handle capital rationing and project selection
4. Incorporate risk into capital budgeting decisions
5. Evaluate real options in investment analysis
6. Make sound capital allocation decisions as a CEO

---

## Capital Budgeting Framework

```
Investment Decision Framework
│
├── Step 1: Identify Cash Flows
│   ├── Initial Investment (Year 0)
│   ├── Operating Cash Flows (Years 1-N)
│   └── Terminal Value/Salvage
│
├── Step 2: Determine Discount Rate
│   ├── Project Risk Assessment
│   ├── Cost of Capital
│   └── Risk Adjustment
│
├── Step 3: Apply Evaluation Methods
│   ├── NPV (Primary)
│   ├── IRR (Secondary)
│   ├── Payback (Screening)
│   └── Profitability Index
│
├── Step 4: Consider Qualitative Factors
│   ├── Strategic Fit
│   ├── Competitive Response
│   └── Organizational Capability
│
└── Step 5: Make Decision
    ├── Accept if NPV > 0
    ├── Rank by NPV for capital rationing
    └── Consider real options
```

---

## Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [Time Value of Money](01-time-value-of-money.md) | Present value, future value, discounting |
| 2 | [Cash Flow Estimation](02-cash-flow-estimation.md) | Incremental cash flows, sunk costs, cannibalization |
| 3 | [Net Present Value](03-net-present-value.md) | NPV calculation, decision rules, interpretation |
| 4 | [Internal Rate of Return](04-internal-rate-of-return.md) | IRR, MIRR, NPV vs. IRR conflicts |
| 5 | [Payback Methods](05-payback-methods.md) | Simple payback, discounted payback, limitations |
| 6 | [Project Selection](06-project-selection.md) | Capital rationing, profitability index, ranking |
| 7 | [Risk Analysis](07-risk-analysis.md) | Sensitivity, scenario, simulation |
| 8 | [Real Options](08-real-options.md) | Flexibility value, option types, applications |

---

## The NPV Rule: The Golden Standard

**NPV (Net Present Value)** is the gold standard for investment decisions:

```
NPV = Σ [CFt / (1+r)^t] - Initial Investment

Where:
CFt = Cash flow in period t
r = Discount rate (cost of capital)
t = Time period
```

**Decision Rule:**
- NPV > 0: Accept (creates value)
- NPV < 0: Reject (destroys value)
- NPV = 0: Indifferent (earns exactly required return)

**Why NPV is Superior:**
1. Considers time value of money
2. Uses all cash flows
3. Measures absolute value creation
4. Directly tied to shareholder wealth

---

## CEO Capital Allocation

### The Capital Allocation Framework

As CEO, you're the ultimate capital allocator:

| Use of Capital | Example | Consideration |
|----------------|---------|---------------|
| Organic Investment | New plant, R&D | Highest control, known capabilities |
| Acquisitions | Buy competitor | Faster but riskier, integration challenges |
| Dividends | Return to shareholders | Signals confidence, reduces flexibility |
| Share Buybacks | Repurchase stock | Tax-efficient return, signals undervaluation |
| Debt Paydown | Reduce leverage | Reduces risk, increases flexibility |

### Key Questions for Every Investment

1. **Does it exceed our cost of capital?** (NPV > 0?)
2. **Is this the highest-return use of capital?**
3. **What are we giving up?** (Opportunity cost)
4. **What happens if we're wrong?** (Downside analysis)
5. **Does it strengthen our competitive position?**

---

## Consulting Application

### McKinsey Capital Productivity Framework

McKinsey emphasizes that great companies are "capital productive":

1. **Invest in high-ROIC businesses** - Allocate capital to highest-return opportunities
2. **Divest low-return businesses** - Free up capital from underperformers
3. **Challenge the base case** - Don't assume current allocation is optimal
4. **Think like a PE investor** - Continuously evaluate portfolio

### BCG Growth-Share Matrix Connection

Capital allocation across business units:

| Quadrant | Cash Flow | Investment Strategy |
|----------|-----------|---------------------|
| Stars | Modest | Invest heavily |
| Cash Cows | High | Harvest, maintain |
| Question Marks | Negative | Selective investment |
| Dogs | Low | Divest or harvest |

---

## Assessment

Complete the [Module Assessment](assessment.md) to test your understanding.

**Target Score:** 80% or higher to proceed.

---

## Case Studies

1. [Case 1: Manufacturing Expansion](cases/case-01-manufacturing-expansion.md)
   - NPV analysis of new plant
   - Sensitivity and scenario analysis
   - Real options consideration

2. [Case 2: Make vs. Buy Decision](cases/case-02-make-vs-buy.md)
   - Outsourcing analysis
   - Qualitative factors
   - Strategic considerations

---

## Key Formulas

| Concept | Formula |
|---------|---------|
| Present Value | PV = FV / (1+r)^n |
| Future Value | FV = PV × (1+r)^n |
| NPV | Σ [CFt / (1+r)^t] - I₀ |
| IRR | Rate where NPV = 0 |
| Payback | Years until cumulative CF ≥ I₀ |
| Profitability Index | PV of Cash Flows / Initial Investment |
| MIRR | [Terminal Value / Initial Investment]^(1/n) - 1 |

---

## Resources

### Essential Reading
- Principles of Corporate Finance (Brealey, Myers) - Chapters 5-7
- Valuation: Measuring and Managing Value (McKinsey) - Chapter 3

### Tools
- Excel DCF templates
- Monte Carlo simulation tools
- Decision tree software

---

*Prerequisites: [Module 3: Financial Accounting](../../phase-02-financial-accounting/module-03-financial-accounting/README.md)*

*Next: [Module 5: Cost of Capital](../module-05-cost-of-capital/README.md)*
