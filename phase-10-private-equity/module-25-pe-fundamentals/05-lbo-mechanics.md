# Lesson 5: LBO Mechanics

> Understanding leveraged buyouts, debt structures, and returns drivers

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain the mechanics of a leveraged buyout
- Understand different debt instruments used in LBOs
- Model sources and uses of funds
- Calculate LBO returns (MOIC and IRR)
- Identify the drivers of LBO returns

---

## Introduction

The Leveraged Buyout (LBO) is the defining transaction type in private equity. Understanding LBO mechanics is essential for anyone working in or with PE-backed companies. This lesson breaks down how LBOs work, from capital structure to returns calculation.

An LBO uses a combination of equity (from the PE fund) and debt (from lenders) to acquire a company. The debt is secured by the target company's assets and repaid from its cash flows. The "leverage" in LBO amplifies returns—both positive and negative.

---

## Core Concepts

### What is an LBO?

**Definition:** A leveraged buyout is an acquisition where the buyer uses significant debt financing, secured by the target's assets and cash flows, to fund the purchase price.

**Key Characteristics:**
| Element | Description |
|---------|-------------|
| **Leverage** | 40-70% of purchase price financed with debt |
| **Collateral** | Target company assets secure the debt |
| **Repayment** | Cash flows from the business repay debt |
| **Control** | PE firm takes majority/full ownership |
| **Governance** | Active board involvement |

### The LBO Model in One Picture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LBO TRANSACTION FLOW                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ACQUISITION                    OWNERSHIP                   EXIT   │
│   ───────────                    ─────────                   ────   │
│                                                                      │
│   ┌─────────┐                   ┌─────────┐                ┌──────┐│
│   │ SOURCES │                   │ VALUE   │                │BUYER ││
│   │         │                   │CREATION │                │      ││
│   │Equity 40│───────►│         │         │───────►│       │Sale  ││
│   │Debt   60│        │Company  │• Revenue│        │       │at    ││
│   │─────────│        │Acquired │• Margin │        │Company│Higher││
│   │Total 100│        │         │• Delever│        │       │Value ││
│   └─────────┘        └─────────┘         └────────┘       └──────┘│
│                                                                      │
│   Day 0                         Years 1-5                   Exit    │
│                                                                      │
│   Purchase Price               Create Value              Harvest    │
│   = Enterprise Value           + Pay Down Debt          Returns     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Sources and Uses of Funds

Every LBO starts with a sources and uses table:

**USES (What You're Paying For):**
| Use | Description |
|-----|-------------|
| Purchase equity | Payment to selling shareholders |
| Refinance existing debt | Pay off target's current debt |
| Transaction fees | Legal, banking, accounting fees |
| Cash to balance sheet | Minimum operating cash |

**SOURCES (Where the Money Comes From):**
| Source | Description |
|--------|-------------|
| Sponsor equity | PE fund investment |
| Management rollover | Existing management reinvests |
| Senior debt | Bank loans (lowest cost, first claim) |
| Subordinated debt | Mezzanine, high-yield bonds |
| Seller financing | Seller note (deferred payment) |

**Example: $100M LBO**

```
SOURCES                           USES
────────────────────────         ────────────────────────
Senior Debt        $45M          Purchase Price    $92M
Mezzanine          $15M          Refinance Debt    $5M
Sponsor Equity     $35M          Transaction Fees  $3M
Management Equity  $5M
────────────────────────         ────────────────────────
Total Sources     $100M          Total Uses       $100M
```

---

### Debt Instruments in LBOs

Different debt types serve different purposes:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      CAPITAL STRUCTURE                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  RISK/RETURN        CLAIMS PRIORITY                    COST         │
│                                                                      │
│   ▲                 First ──────────────────────► Last              │
│   │                                                                  │
│   │  ┌───────────────────────────────────────────────────────┐     │
│   │  │                    EQUITY                              │     │
│   │  │             Sponsor + Management                       │     │
│   │  │         Last claim, highest return expectation         │ 20%+│
│   │  └───────────────────────────────────────────────────────┘     │
│   │  ┌───────────────────────────────────────────────────────┐     │
│   │  │              SUBORDINATED DEBT                         │     │
│   │  │     Mezzanine, High-Yield Bonds, Second Lien          │     │
│   │  │         Second claim, higher interest rates            │10-14│
│   │  └───────────────────────────────────────────────────────┘     │
│   │  ┌───────────────────────────────────────────────────────┐     │
│   │  │                SENIOR DEBT                             │     │
│   │  │          Term Loan, Revolver                          │     │
│   │  │        First claim, lowest interest rates             │ 6-9%│
│   │  └───────────────────────────────────────────────────────┘     │
│   ▼                                                                  │
│                                                                      │
│   Lower Risk                                        Higher Risk     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### Senior Debt

| Type | Description | Terms |
|------|-------------|-------|
| **Revolver** | Working capital facility, drawn as needed | SOFR + 200-400 bps |
| **Term Loan A** | Amortizing bank loan | SOFR + 250-450 bps |
| **Term Loan B** | Institutional loan, minimal amortization | SOFR + 350-550 bps |

#### Subordinated Debt

| Type | Description | Terms |
|------|-------------|-------|
| **Second Lien** | Secured but subordinate to senior | 8-12% |
| **Mezzanine** | Unsecured, often with equity kicker | 12-16% |
| **High-Yield Bonds** | Public market debt | 7-12% |

#### Equity

| Type | Description |
|------|-------------|
| **Sponsor Equity** | PE fund investment |
| **Co-invest** | LP direct investment alongside fund |
| **Management Rollover** | Existing mgmt reinvests proceeds |
| **Preferred Equity** | Hybrid with debt-like features |

---

### LBO Returns: MOIC and IRR

**MOIC (Multiple on Invested Capital):**
```
MOIC = Total Value Returned / Total Capital Invested

Example:
Invested: $40M equity
Returned: $120M at exit
MOIC = $120M / $40M = 3.0x
```

**IRR (Internal Rate of Return):**
```
IRR = Annualized rate of return accounting for time

Example:
Year 0: Invest $40M
Year 5: Receive $120M
IRR = (120/40)^(1/5) - 1 = 24.6%
```

**MOIC vs. IRR:**

| Metric | Measures | Strengths | Weaknesses |
|--------|----------|-----------|------------|
| **MOIC** | Total return multiple | Simple, intuitive | Ignores time |
| **IRR** | Annualized return | Time-adjusted | Can mislead with interim cash flows |

**Relationship:**

| MOIC | 3-Year IRR | 5-Year IRR | 7-Year IRR |
|------|------------|------------|------------|
| 1.5x | 14% | 8% | 6% |
| 2.0x | 26% | 15% | 10% |
| 2.5x | 36% | 20% | 14% |
| 3.0x | 44% | 25% | 17% |
| 4.0x | 59% | 32% | 22% |

---

## Framework: LBO Returns Drivers

Five factors drive LBO returns:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      LBO RETURNS DRIVERS                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. ENTRY PRICE           Lower purchase price = higher returns     │
│     └── Entry multiple matters more than exit multiple              │
│                                                                      │
│  2. LEVERAGE              More debt = amplified equity returns      │
│     └── But also amplified risk                                     │
│                                                                      │
│  3. EBITDA GROWTH         Revenue + margin improvement              │
│     └── Largest sustainable return driver                           │
│                                                                      │
│  4. MULTIPLE EXPANSION    Exit at higher multiple than entry        │
│     └── Requires real business improvement                          │
│                                                                      │
│  5. HOLDING PERIOD        Shorter hold = higher IRR (same MOIC)     │
│     └── Quick flips vs. long-term value creation                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Returns Sensitivity Analysis

Base case: $100M purchase, 6x entry, 40% equity, 60% debt

| Driver | Change | MOIC Impact | IRR Impact |
|--------|--------|-------------|------------|
| Entry multiple | -0.5x | +0.4x | +400 bps |
| Exit multiple | +1.0x | +0.5x | +300 bps |
| EBITDA growth | +20% | +0.4x | +300 bps |
| Debt paydown | +$10M | +0.3x | +200 bps |
| Hold period | -1 year | -0.2x | +400 bps |

---

## Worked Example: LBO Model

### The Deal

**Target:** TechServices Inc.
- LTM EBITDA: $15M
- LTM Revenue: $100M
- Purchase Price: $105M (7.0x EBITDA)

### Sources and Uses

| **Uses** | Amount | | **Sources** | Amount |
|----------|--------|-----|-------------|--------|
| Purchase Price | $100M | | Term Loan B | $55M |
| Refinance Debt | $3M | | Mezzanine | $15M |
| Transaction Fees | $2M | | Sponsor Equity | $30M |
| | | | Mgmt Rollover | $5M |
| **Total** | $105M | | **Total** | $105M |

### 5-Year Projections

| Year | Revenue | EBITDA | EBITDA % | Debt | Equity Value |
|------|---------|--------|----------|------|--------------|
| 0 | $100M | $15M | 15.0% | $70M | $35M |
| 1 | $110M | $17.6M | 16.0% | $62M | $60M |
| 2 | $121M | $21M | 17.3% | $52M | $92M |
| 3 | $133M | $25M | 18.8% | $40M | $130M |
| 4 | $146M | $29M | 19.9% | $25M | $175M |
| 5 | $160M | $34M | 21.3% | $10M | $260M |

**Assumptions:**
- Revenue CAGR: 10%
- Margin improvement: +6 pts over 5 years
- Debt paydown: $12M/year average
- Exit multiple: 8.0x (expansion from 7.0x)

### Returns Calculation

**Exit Value:**
- Year 5 EBITDA: $34M
- Exit Multiple: 8.0x
- Enterprise Value: $272M
- Less: Remaining Debt: $10M
- **Equity Value: $262M**

**Returns:**
- Invested Capital: $35M
- Returned: $262M
- **MOIC: 7.5x**
- **IRR: 50%**

### Value Attribution

| Source | $ Contribution | % of Gain |
|--------|----------------|-----------|
| EBITDA Growth | $152M | 67% |
| Multiple Expansion | $34M | 15% |
| Debt Paydown | $60M | 26% |
| **Total** | **$227M** | **100%** |

*(Note: Components can exceed 100% if entry leverage is high)*

---

## PE Application

### LBO Candidate Characteristics

**Ideal LBO Targets:**

| Characteristic | Why It Matters |
|----------------|----------------|
| Stable cash flows | Supports debt service |
| Low capital intensity | Cash available for debt repayment |
| Market leadership | Pricing power, defensible position |
| Fragmented industry | Roll-up opportunity |
| Improvement potential | Operational value creation |
| Strong management | Execution capability |

**Warning Signs:**

| Red Flag | Risk |
|----------|------|
| Cyclical revenue | Cash flow volatility |
| High capex needs | Cash drain |
| Customer concentration | Key customer loss |
| Technology disruption | Business model risk |
| Regulatory exposure | Political risk |

### Debt Capacity Analysis

Lenders evaluate:

```
DEBT CAPACITY METRICS

Leverage Ratios:
├── Debt / EBITDA        (4.0-6.0x typical)
├── Senior Debt / EBITDA (3.0-4.0x typical)
└── Net Debt / EBITDA    (considers cash)

Coverage Ratios:
├── EBITDA / Interest    (>2.0x required)
├── (EBITDA - Capex) / Debt Service
└── Fixed Charge Coverage Ratio

Loan-to-Value:
└── Total Debt / Enterprise Value (<70%)
```

---

## CEO Application

### Living with LBO Debt

As CEO of an LBO-backed company, you must:

**1. Manage Cash Flow Carefully**
- Debt service is non-negotiable
- Build conservative forecasts
- Maintain liquidity cushion

**2. Understand Your Covenants**
- Financial covenants (leverage, coverage)
- Operational restrictions
- Reporting requirements

**3. Plan for Deleveraging**
- Mandatory amortization
- Excess cash flow sweeps
- Refinancing opportunities

### Covenant Compliance

| Covenant Type | Example | Consequence of Breach |
|---------------|---------|----------------------|
| **Leverage** | Debt/EBITDA < 5.0x | Default, acceleration |
| **Coverage** | EBITDA/Interest > 2.0x | Default |
| **Capex** | Max $5M/year | Waiver required |
| **Restricted Payments** | No dividends | Blocked distributions |

---

## Common Mistakes

| Mistake | Problem | Better Approach |
|---------|---------|-----------------|
| Ignoring debt service | Cash flow surprises | Model monthly cash needs |
| Overleveraging | Default risk | Conservative capital structure |
| Paying too much | Poor returns from start | Discipline on entry price |
| Assuming multiple expansion | Market dependent | Model flat multiple |
| Ignoring covenants | Technical defaults | Monitor headroom closely |

---

## Key Takeaways

1. **LBOs use debt** secured by the target's assets and cash flows
2. **Sources and uses** must balance; equity is the "plug"
3. **Senior debt** has first claim, lowest cost; subordinated debt fills the gap
4. **MOIC** measures total return; **IRR** accounts for time
5. **Five drivers** determine returns: entry price, leverage, growth, multiple, hold period
6. **Ideal LBO targets** have stable cash flows, low capex, and improvement potential
7. **Covenant compliance** is critical for CEO management

---

## Practice Problems

### Problem 1: Sources and Uses
Build a sources and uses table for a $75M acquisition with:
- 50% senior debt
- 15% mezzanine
- 35% equity
- $2M transaction fees

### Problem 2: Returns Calculation
A PE firm invests $25M in equity. After 4 years, they exit with $75M in equity value. Calculate MOIC and IRR.

### Problem 3: Leverage Impact
Same $100M deal structured two ways:
- Option A: 40% equity, 60% debt
- Option B: 60% equity, 40% debt

If exit equity value is $200M, calculate MOIC for each structure.

---

## Further Reading

- **"Investment Banking"** by Rosenbaum & Pearl - LBO modeling
- **"Private Equity Demystified"** by John Gilligan
- **WSO LBO Modeling Guide** - Detailed technical guidance

---

## Connection to Nexus

The PE LBO Model simulation applies these concepts with:
- Interactive sources and uses builder
- 5-year cash flow projections
- Sensitivity analysis
- Returns attribution

See: `cases/nexus/simulations/pe-lbo-model.md`

---

*Previous: [Lesson 4: Value Creation Framework](04-value-creation-framework.md)*
*Next: [Lesson 6: PE Due Diligence Overview](06-pe-due-diligence-overview.md)*
*Return to [Module Overview](README.md)*
