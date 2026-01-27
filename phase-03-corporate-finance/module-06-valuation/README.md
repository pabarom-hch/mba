# Module 6: Valuation

## Overview

Valuation is the heart of finance. Whether you're acquiring a company, selling a business, raising capital, or simply understanding what your company is worth, valuation is the framework. This module covers the major valuation methodologies used by investment bankers, private equity professionals, and corporate strategists.

As a CEO, you need to understand valuation because every strategic decision—from acquisitions to divestitures to capital raises—depends on it.

---

## Learning Objectives

By the end of this module, you will be able to:

1. Build and apply DCF (Discounted Cash Flow) valuation models
2. Use comparable company and transaction multiples
3. Understand and apply LBO (Leveraged Buyout) valuation
4. Synthesize multiple valuation approaches
5. Identify and avoid common valuation errors
6. Present and defend valuation analyses

---

## The Valuation Framework

```
Valuation Methodologies
│
├── Intrinsic Value Methods
│   ├── DCF (Discounted Cash Flow)
│   │   ├── FCFF (Free Cash Flow to Firm)
│   │   └── FCFE (Free Cash Flow to Equity)
│   └── Dividend Discount Model
│
├── Relative Value Methods
│   ├── Comparable Companies (Trading Multiples)
│   │   ├── EV/EBITDA
│   │   ├── EV/Revenue
│   │   └── P/E
│   └── Precedent Transactions
│       └── M&A Multiples (with control premium)
│
└── Special Situations
    ├── LBO Analysis
    ├── Sum-of-Parts
    └── Liquidation Value
```

---

## Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [DCF Fundamentals](01-dcf-fundamentals.md) | Free cash flow, terminal value, sensitivity |
| 2 | [DCF Mechanics](02-dcf-mechanics.md) | Projections, WACC, enterprise to equity value |
| 3 | [Comparable Companies](03-comparable-companies.md) | Peer selection, multiple calculation, application |
| 4 | [Precedent Transactions](04-precedent-transactions.md) | Control premium, transaction selection |
| 5 | [LBO Valuation](05-lbo-valuation.md) | Debt capacity, returns analysis, sponsor perspective |
| 6 | [Valuation Synthesis](06-valuation-synthesis.md) | Football field, triangulation, final value |

---

## The Three Core Approaches

### 1. DCF (Discounted Cash Flow)

**Principle:** Value = Present value of future cash flows

```
Enterprise Value = Σ [FCFt / (1+WACC)^t] + Terminal Value / (1+WACC)^n

Where:
FCF = Free Cash Flow
WACC = Weighted Average Cost of Capital
Terminal Value = Value of cash flows beyond projection period
```

**Strengths:**
- Based on fundamental value drivers
- Forces explicit assumptions
- Forward-looking

**Weaknesses:**
- Sensitive to assumptions
- Terminal value often dominant
- Requires long-term forecasting

### 2. Comparable Companies

**Principle:** Similar companies should trade at similar multiples

```
Target Value = Target Metric × Comparable Multiple

Example:
Target EBITDA: $100M
Comparable EV/EBITDA: 8.0x
Implied EV: $800M
```

**Common Multiples:**

| Multiple | Use Case |
|----------|----------|
| EV/EBITDA | Most common, cash flow proxy |
| EV/Revenue | Growth companies, negative EBITDA |
| P/E | Mature companies, banks |
| EV/EBIT | When D&A varies significantly |

### 3. Precedent Transactions

**Principle:** Similar acquisitions should command similar prices

```
Target Value = Target Metric × Transaction Multiple

Key Difference from Comparables:
Transaction multiples include control premium
(typically 20-40% above trading value)
```

---

## LBO as Valuation Floor

**Concept:** What would a financial buyer pay?

```
LBO Value = Maximum price that achieves target returns
           given leverage constraints

Typically lower than strategic value
(no synergies, requires debt service)
```

---

## Consulting Application

### When to Use Each Method

| Situation | Primary Method | Supporting |
|-----------|---------------|------------|
| M&A advisory | All three | Full football field |
| Strategic planning | DCF | Comps as check |
| IPO pricing | Comps | DCF for roadshow |
| Fairness opinion | All three | Legal requirement |
| Private company | DCF + Comps | Lack of trading data |

### McKinsey/BCG Valuation Approach

1. **Understand the business** first
2. **Build DCF** with scenario analysis
3. **Check with multiples** for reasonableness
4. **Consider strategic value** beyond financials
5. **Present range, not point estimate**

---

## CEO Application

### Valuation in Strategic Decisions

| Decision | Valuation Relevance |
|----------|-------------------|
| Acquisition | What to pay, deal structure |
| Divestiture | What to ask, minimum price |
| IPO | Pricing, timing |
| Stock buyback | Is stock undervalued? |
| Equity issuance | Is stock overvalued? |
| Management incentives | Fair value for options |

### Questions CEOs Should Ask

1. "What are the key assumptions driving this value?"
2. "What does the market currently think we're worth?"
3. "How does our valuation compare to peers?"
4. "What would need to change for value to be 20% higher/lower?"
5. "Are we creating or destroying value with this deal?"

---

## Assessment

Complete the [Module Assessment](assessment.md) to test your understanding.

**Target Score:** 80% or higher to proceed.

---

## Case Studies

1. [Case 1: Acquisition Valuation](cases/case-01-acquisition-valuation.md)
   - DCF model construction
   - Comparable analysis
   - Bid recommendation

2. [Case 2: IPO Valuation](cases/case-02-ipo-valuation.md)
   - Pricing considerations
   - Multiple selection
   - Roadshow presentation

---

## Key Formulas

| Concept | Formula |
|---------|---------|
| Free Cash Flow to Firm | EBIT(1-T) + D&A - CapEx - ΔNWC |
| Enterprise Value | Equity Value + Net Debt |
| Equity Value | Enterprise Value - Net Debt |
| Terminal Value (Gordon) | FCF(1+g) / (WACC-g) |
| Terminal Value (Exit Multiple) | EBITDA × Exit Multiple |
| P/E | Stock Price / EPS |
| EV/EBITDA | Enterprise Value / EBITDA |

---

## Resources

### Essential Reading
- Valuation: Measuring and Managing Value (McKinsey) - The "bible"
- Investment Banking (Rosenbaum & Pearl) - Practitioner guide

### Tools
- Excel modeling templates
- Bloomberg terminal
- Capital IQ / FactSet

---

*Prerequisites: [Module 5: Cost of Capital](../module-05-cost-of-capital/README.md)*

*Next: [Module 7: Mergers & Acquisitions](../module-07-mergers-acquisitions/README.md)*
