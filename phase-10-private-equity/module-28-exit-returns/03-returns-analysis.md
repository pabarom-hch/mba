# Lesson 3: Returns Analysis & Attribution

> Calculating, decomposing, and benchmarking investment returns

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Calculate MOIC and IRR for PE investments
- Attribute value creation to specific drivers
- Build a comprehensive value creation bridge
- Benchmark returns against targets and peers
- Analyze returns at deal and fund levels

---

## Introduction

Returns analysis is the ultimate scorecard for PE investments. Understanding how value was created - through revenue growth, margin expansion, multiple expansion, or deleveraging - provides critical insights for improving future investment decisions. This lesson provides the frameworks and calculations for comprehensive returns analysis.

These skills are essential for PE professionals evaluating track records and for CEOs understanding how their performance contributes to investment returns.

---

## Core Concepts

### Key Return Metrics

```
┌─────────────────────────────────────────────────────────────┐
│                    PE RETURN METRICS                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  MOIC (Multiple of Invested Capital)                        │
│  ─────────────────────────────────────                      │
│  Formula: Total Distributions / Total Invested Capital       │
│  Example: $180M returned / $40M invested = 4.5x MOIC        │
│                                                              │
│  IRR (Internal Rate of Return)                              │
│  ─────────────────────────────                              │
│  Formula: Discount rate where NPV of cash flows = 0         │
│  Example: 35% IRR on 5-year hold                            │
│                                                              │
│  KEY INSIGHT:                                                │
│  • MOIC measures absolute return (ignores time)             │
│  • IRR measures time-weighted return                        │
│  • Both needed for complete picture                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### MOIC vs. IRR Relationship

| MOIC | 3-Year IRR | 5-Year IRR | 7-Year IRR |
|------|------------|------------|------------|
| 1.5x | 14% | 8% | 6% |
| 2.0x | 26% | 15% | 10% |
| 2.5x | 36% | 20% | 14% |
| 3.0x | 44% | 25% | 17% |
| 4.0x | 59% | 32% | 22% |
| 5.0x | 71% | 38% | 26% |

**Key Insight:** Same MOIC can produce very different IRRs based on hold period.

### Return Calculation

```
IRR CALCULATION EXAMPLE
─────────────────────────────────────────────────────────────

Year 0:    Investment         -$50M
Year 1:    Distribution        $5M    (dividend recap)
Year 2:    Distribution        $0M
Year 3:    Distribution        $0M
Year 4:    Distribution        $0M
Year 5:    Exit proceeds      $200M

Total Distributions: $205M
MOIC: $205M / $50M = 4.1x

IRR: Rate where NPV = 0
-50 + 5/(1+r) + 0/(1+r)² + 0/(1+r)³ + 0/(1+r)⁴ + 200/(1+r)⁵ = 0

Solving: IRR = 33.4%
```

---

## Framework: Value Creation Attribution

### The Value Creation Bridge

```
VALUE CREATION BRIDGE
─────────────────────────────────────────────────────────────

        Entry                                    Exit
        Equity                                   Equity
        $40M                                     $180M
          │                                        ▲
          │    ┌─────────────────────────────────┐│
          │    │                                 ││
          ├────┤  Revenue Growth      +$50M      ││
          │    │  (organic + M&A)               ││
          │    ├─────────────────────────────────┤│
          │    │  Margin Expansion    +$30M      ││
          │    │  (operational improvement)      ││
          │    ├─────────────────────────────────┤│
          │    │  Multiple Expansion  +$40M      ││
          │    │  (strategic positioning)        ││
          │    ├─────────────────────────────────┤│
          │    │  Deleveraging        +$20M      ││
          │    │  (debt paydown)                 ││
          │    └─────────────────────────────────┘│
          │                                        │
          ▼────────────────────────────────────────┘
               Total Value Created: $140M
```

### Attribution Components

| Component | Definition | Calculation |
|-----------|------------|-------------|
| **Revenue Growth** | Value from higher revenue | (Exit Rev - Entry Rev) × Entry Margin × Entry Multiple |
| **Margin Expansion** | Value from higher margins | Exit Rev × (Exit Margin - Entry Margin) × Entry Multiple |
| **Multiple Expansion** | Value from higher multiple | Exit EBITDA × (Exit Multiple - Entry Multiple) |
| **Deleveraging** | Value from debt paydown | Entry Net Debt - Exit Net Debt |

### Detailed Attribution Formula

```
STEP-BY-STEP ATTRIBUTION
─────────────────────────────────────────────────────────────

INPUTS:
Entry: Rev $100M, EBITDA $15M (15%), EV $120M (8x), Net Debt $80M
Exit:  Rev $150M, EBITDA $30M (20%), EV $330M (11x), Net Debt $50M

Equity Entry: $120M - $80M = $40M
Equity Exit:  $330M - $50M = $280M
Value Created: $280M - $40M = $240M

ATTRIBUTION:

1. REVENUE GROWTH CONTRIBUTION
   Additional revenue: $150M - $100M = $50M
   At entry margin (15%) = $7.5M additional EBITDA
   At entry multiple (8x) = $60M EV contribution
   Less debt allocated = ($60M / $120M) × $80M = $40M
   Equity contribution from revenue growth = $20M

2. MARGIN EXPANSION CONTRIBUTION
   Exit revenue at margin improvement: $150M × (20% - 15%) = $7.5M
   At entry multiple (8x) = $60M EV contribution
   Equity contribution from margin = $60M

3. MULTIPLE EXPANSION CONTRIBUTION
   Exit EBITDA at multiple improvement: $30M × (11 - 8) = $90M
   Equity contribution from multiple = $90M

4. DELEVERAGING CONTRIBUTION
   Debt paydown: $80M - $50M = $30M
   Add: Operating cash flow retained (simplified)
   Equity contribution from deleveraging = $30M

CHECK: $20M + $60M + $90M + $30M = $200M
(Note: Some interaction effects may cause slight variance)
```

---

## Value Driver Analysis

### Revenue Growth Sources

| Source | Description | Typical Contribution |
|--------|-------------|---------------------|
| **Organic Volume** | Core business growth | 30-50% of growth |
| **Pricing** | Price increases | 10-20% of growth |
| **New Products** | Product expansion | 10-20% of growth |
| **Geographic** | Market expansion | 10-20% of growth |
| **M&A** | Acquisitions | 20-40% of growth |

### Margin Expansion Sources

| Source | Description | Typical Impact |
|--------|-------------|----------------|
| **Gross Margin** | Pricing, procurement, mix | 100-300 bps |
| **SG&A Efficiency** | Overhead reduction | 100-200 bps |
| **Operating Leverage** | Fixed cost absorption | 50-150 bps |
| **Synergies** | M&A cost saves | 100-300 bps |

### Multiple Expansion Drivers

```
MULTIPLE EXPANSION FACTORS
─────────────────────────────────────────────────────────────

COMPANY-SPECIFIC                  MARKET-DRIVEN
────────────────                  ─────────────
• Improved growth profile         • Sector re-rating
• Higher quality earnings         • M&A activity
• Reduced customer conc.          • Lower interest rates
• Stronger management             • Increased liquidity
• Better market position          • Strategic buyer interest
• Recurring revenue shift

CAUTION: Multiple expansion is often market-driven
         and less predictable than operational improvement
```

---

## Benchmarking Returns

### Target Return Thresholds

| Return Level | MOIC | IRR | Assessment |
|--------------|------|-----|------------|
| **Outstanding** | >4.0x | >35% | Top decile |
| **Strong** | 3.0-4.0x | 25-35% | Top quartile |
| **Good** | 2.0-3.0x | 15-25% | Median |
| **Acceptable** | 1.5-2.0x | 10-15% | Below median |
| **Weak** | 1.0-1.5x | 0-10% | Bottom quartile |
| **Loss** | <1.0x | Negative | Capital loss |

### Fund-Level Benchmarking

```
FUND PERFORMANCE BENCHMARKS (Example: Buyout)
─────────────────────────────────────────────────────────────

METRIC           TOP QUARTILE    MEDIAN    BOTTOM QUARTILE
──────           ────────────    ──────    ───────────────
Gross IRR        >25%            18-20%    <12%
Net IRR          >20%            15-17%    <10%
Gross MOIC       >2.5x           1.8-2.0x  <1.5x
Net MOIC         >2.2x           1.6-1.8x  <1.4x
DPI (at Year 5)  >0.5x           0.2-0.3x  <0.1x

Sources: Cambridge Associates, Preqin
```

### Deal-Level Performance

| Category | % of Fund Returns | Typical MOIC |
|----------|-------------------|--------------|
| **Home runs** (top 20%) | 60-80% of gains | >5.0x |
| **Strong performers** (next 30%) | 30-40% of gains | 2.0-5.0x |
| **Base hits** (next 30%) | 10-20% of gains | 1.0-2.0x |
| **Losses** (bottom 20%) | Negative contribution | <1.0x |

---

## Worked Example: Complete Returns Analysis

**Situation:** Analyzing returns on a 5-year PE investment

**Entry (Year 0):**
- Revenue: $80M
- EBITDA: $12M (15% margin)
- Entry EV: $96M (8.0x EBITDA)
- Net Debt: $60M
- Equity Investment: $36M

**Exit (Year 5):**
- Revenue: $140M
- EBITDA: $28M (20% margin)
- Exit EV: $308M (11.0x EBITDA)
- Net Debt: $40M
- Equity Proceeds: $268M

**Returns Calculation:**

```
MOIC: $268M / $36M = 7.4x

IRR Calculation:
Year 0: -$36M
Year 5: +$268M (no interim distributions)

IRR = (268/36)^(1/5) - 1 = 49.4%
```

**Value Creation Attribution:**

| Driver | Calculation | Value ($M) | % of Total |
|--------|-------------|------------|------------|
| **Revenue Growth** | ($140M - $80M) × 15% × 8.0x = $72M EV, less proportional debt | $36M | 16% |
| **Margin Expansion** | $140M × (20% - 15%) × 8.0x | $56M | 24% |
| **Multiple Expansion** | $28M × (11.0 - 8.0) | $84M | 36% |
| **Deleveraging** | $60M - $40M | $20M | 9% |
| **Base Equity** | Original investment | $36M | 16% |
| **Total** | | $232M | 100% |

**Insights:**
- Multiple expansion (36%) was largest driver - market tailwind
- Operational improvement (revenue + margin) = 40% - strong execution
- Modest deleveraging contribution - business reinvested in growth

---

## PE Application

### Returns Analysis Best Practices

| Practice | Description |
|----------|-------------|
| **Consistent methodology** | Same attribution approach across deals |
| **Document assumptions** | Clear basis for entry/exit values |
| **Separate market vs. alpha** | Distinguish skill from market |
| **Track attribution over time** | Monitor as deal progresses |
| **Compare to underwriting** | Actual vs. expected drivers |

### Using Returns Analysis

| Purpose | Application |
|---------|-------------|
| **Deal evaluation** | Compare to historical performance |
| **Sector selection** | Identify high-performing sectors |
| **Strategy refinement** | Focus on highest-impact levers |
| **LP communication** | Demonstrate value creation skill |
| **Compensation** | Link carried interest to performance |

---

## CEO Application

If you're a CEO driving portfolio company returns:

**Your Value Creation Impact:**

| Driver | CEO Influence | Your Actions |
|--------|---------------|--------------|
| **Revenue** | High | Growth strategy, sales execution |
| **Margin** | High | Cost management, pricing |
| **Multiple** | Medium | Positioning, quality of earnings |
| **Leverage** | Low | Cash generation, capital allocation |

**Performance Communication:**

1. **Know your bridge** - understand how value is being created
2. **Track leading indicators** - revenue momentum, margin trends
3. **Communicate proactively** - share progress against plan
4. **Address shortfalls** - explain variances honestly
5. **Propose solutions** - when behind plan, bring remedies

---

## Key Takeaways

1. **MOIC and IRR together** - need both for complete picture
2. **Attribution clarifies drivers** - revenue, margin, multiple, debt
3. **Operational value is controllable** - revenue and margin improvements
4. **Multiple expansion is less predictable** - often market-driven
5. **Benchmarking provides context** - compare to targets and peers
6. **Home runs drive fund returns** - top 20% of deals create most value
7. **Documentation is critical** - clear methodology and assumptions

---

## Practice Problems

### Problem 1: Basic Returns Calculation
Calculate MOIC and IRR for: Entry equity $25M, Year 3 distribution $10M, Year 5 exit proceeds $80M.

### Problem 2: Value Attribution
A company was bought at $50M EV (10x $5M EBITDA, $30M net debt) and sold at $120M EV (12x $10M EBITDA, $20M net debt). Build the value creation bridge and identify the primary driver.

### Problem 3: Benchmarking Analysis
Your fund generated 2.2x gross MOIC and 22% gross IRR over a 5-year period. How does this compare to industry benchmarks? What quartile performance is this?

---

## Connection to Nexus

The Nexus platform supports returns analysis through:
- Financial dashboards for EBITDA and revenue tracking
- Analytics for value creation attribution
- Reporting tools for investor communication
- Historical data for benchmarking analysis

---

*Next: [Lesson 4: LP Reporting & Fund Performance](04-lp-reporting.md)*
*Return to [Module Overview](README.md)*
