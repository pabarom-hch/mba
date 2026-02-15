# Lesson 2: PE Fund Economics

> Mastering GP/LP structures, management fees, and carried interest

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain the GP/LP fund structure and legal mechanics
- Calculate management fees over a fund's life
- Understand carried interest and hurdle rate mechanics
- Model GP economics for different fund scenarios
- Identify alignment and misalignment of interests

---

## Introduction

Understanding fund economics is essential whether you're a PE professional, a CEO of a PE-backed company, or an LP evaluating funds. The economic structure determines incentives, which ultimately drive behavior throughout the investment lifecycle.

The classic PE structure—"2 and 20"—has evolved, but the fundamental mechanics remain: GPs charge fees for managing capital and earn a share of profits for generating returns. This lesson breaks down exactly how the money flows.

---

## Core Concepts

### The GP/LP Structure

PE funds are typically structured as Limited Partnerships:

```
┌─────────────────────────────────────────────────────────────┐
│                    FUND STRUCTURE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐                                   │
│  │   Limited Partners   │ ◄─── Provide ~99% of capital      │
│  │       (LPs)          │ ◄─── Liability limited to         │
│  │                      │      their investment             │
│  │  Pension Funds       │ ◄─── No management control        │
│  │  Endowments          │                                   │
│  │  Family Offices      │                                   │
│  └──────────┬───────────┘                                   │
│             │                                                │
│             │ Capital commitment                             │
│             ▼                                                │
│  ┌──────────────────────┐                                   │
│  │   Limited Partnership │ ◄─── The "Fund"                  │
│  │      (The Fund)       │ ◄─── Legal entity that holds     │
│  │                       │      investments                  │
│  └──────────┬───────────┘                                   │
│             │                                                │
│             │ Management                                     │
│             ▼                                                │
│  ┌──────────────────────┐                                   │
│  │   General Partner    │ ◄─── Provide ~1% of capital       │
│  │       (GP)           │ ◄─── Unlimited liability          │
│  │                      │ ◄─── Full management control      │
│  │  PE Firm Principals  │ ◄─── Make all investment          │
│  │  & Partners          │      decisions                     │
│  └──────────────────────┘                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Legal Documents

| Document | Purpose |
|----------|---------|
| **Limited Partnership Agreement (LPA)** | Governs the fund, fees, carry, term |
| **Subscription Agreement** | LP's commitment to invest |
| **Side Letters** | Negotiated terms for specific LPs |
| **Advisory Board Charter** | LP governance and oversight |

---

### Management Fees

Management fees compensate the GP for fund operations regardless of performance.

**Standard Structure:**
- **Rate:** 1.5% - 2.0% annually (2% is "market" for buyout)
- **Basis:** Committed capital (investment period) → Invested capital (post-investment)
- **Timing:** Quarterly in advance

**Management Fee Calculation:**

```
INVESTMENT PERIOD (Years 1-5):
Management Fee = Fund Size × Fee Rate

POST-INVESTMENT PERIOD (Years 6-10):
Management Fee = Invested Capital × Fee Rate (often reduced)
```

**Example: $500M Fund with 2% Fee**

| Year | Basis | Calculation | Annual Fee |
|------|-------|-------------|------------|
| 1 | $500M committed | $500M × 2% | $10.0M |
| 2 | $500M committed | $500M × 2% | $10.0M |
| 3 | $500M committed | $500M × 2% | $10.0M |
| 4 | $500M committed | $500M × 2% | $10.0M |
| 5 | $500M committed | $500M × 2% | $10.0M |
| 6 | $450M invested | $450M × 1.5% | $6.75M |
| 7 | $400M invested | $400M × 1.5% | $6.0M |
| 8 | $300M invested | $300M × 1.5% | $4.5M |
| 9 | $200M invested | $200M × 1.5% | $3.0M |
| 10 | $100M invested | $100M × 1.5% | $1.5M |
| **Total** | | | **$71.75M** |

**Key Point:** Management fees can total 14%+ of fund size over its life, significantly impacting net returns.

---

### Carried Interest ("Carry")

Carried interest is the GP's share of fund profits—the primary source of GP wealth creation.

**Standard Terms:**
- **Rate:** 20% of profits (some top funds charge 25-30%)
- **Timing:** After LPs receive their capital back + preferred return
- **Tax treatment:** Capital gains (historically favorable)

**The Waterfall:**

```
┌─────────────────────────────────────────────────────────────┐
│                    DISTRIBUTION WATERFALL                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  STEP 1: Return of Capital                                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 100% to LPs until they receive their invested capital  │ │
│  └────────────────────────────────────────────────────────┘ │
│                            │                                 │
│                            ▼                                 │
│  STEP 2: Preferred Return (Hurdle)                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 100% to LPs until they achieve 8% IRR (typically)      │ │
│  └────────────────────────────────────────────────────────┘ │
│                            │                                 │
│                            ▼                                 │
│  STEP 3: GP Catch-Up                                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 100% (or 80%) to GP until GP has 20% of total profits  │ │
│  └────────────────────────────────────────────────────────┘ │
│                            │                                 │
│                            ▼                                 │
│  STEP 4: 80/20 Split                                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Remaining profits split 80% LP / 20% GP                │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Hurdle Rate (Preferred Return)

The hurdle rate is the minimum return LPs must receive before the GP earns carry.

**Standard:** 8% IRR (annualized)

**Why it matters:**
- Protects LPs from paying carry on subpar returns
- Creates meaningful performance threshold for GP
- Aligns interests toward generating real value

**Hurdle Calculation:**
If an LP invests $10M, they must receive ~$14.7M (8% IRR over 5 years) before the GP earns any carried interest.

---

## Framework: GP Economics Model

### Worked Example: $500M Fund

**Assumptions:**
- Fund size: $500M
- Management fee: 2%/1.5%
- Carry: 20%
- Hurdle: 8%
- GP commitment: 2%
- Fund life: 10 years
- Gross MOIC: 2.5x

**Step 1: Calculate Management Fees**
```
Investment period (5 years): 5 × $500M × 2% = $50M
Harvest period (avg): ~$22M (declining basis)
Total management fees: ~$72M
```

**Step 2: Calculate Gross Proceeds**
```
Capital deployed: $500M - $72M fees = ~$428M
Gross return at 2.5x: $428M × 2.5 = $1,070M
Gross profit: $1,070M - $428M = $642M
```

**Step 3: Calculate Carry**
```
LP capital returned: $428M (Step 1 of waterfall)
LP preferred return: ~$150M (8% IRR over 5 years)
Remaining profit: $642M - $150M = $492M

GP catch-up: ~$37M (to reach 20% of profits)
Remaining: $492M - $37M = $455M
80/20 split: GP gets $455M × 20% = $91M

Total GP carry: $37M + $91M = ~$128M
```

**Step 4: Total GP Economics**
```
Management fees:     $72M
Carried interest:   $128M
Less: GP commitment ($10M) return + profit share
─────────────────────────────
Total GP revenue:   ~$200M over 10 years

Per partner (assuming 5 partners):
~$40M over 10 years = $4M/year average
```

---

### Sensitivity Analysis: GP Economics

| Scenario | Gross MOIC | GP Carry | Management Fees | Total GP |
|----------|------------|----------|-----------------|----------|
| Poor | 1.2x | $0 | $72M | $72M |
| Below hurdle | 1.5x | $0 | $72M | $72M |
| At hurdle | 1.8x | $35M | $72M | $107M |
| Target | 2.5x | $128M | $72M | $200M |
| Excellent | 3.0x | $180M | $72M | $252M |

**Key Insight:** The GP earns management fees regardless of performance, but meaningful wealth comes from carry. A 2.5x fund generates 2x the GP income of a 1.5x fund.

---

## PE Application

### Fee Evolution and Negotiation

Fee terms have evolved as LPs gained sophistication:

| Term | Traditional | Negotiated/Modern |
|------|-------------|-------------------|
| Management fee | 2.0% | 1.5-1.75% |
| Fee basis | Committed | Steps down faster |
| Carry | 20% | 20% (some pay 15-17.5%) |
| Hurdle | 8% | 8% (some push to 10%) |
| GP commitment | 1% | 2-5% |
| Fee offsets | 50% | 80-100% |

### Fee Offsets

GPs often receive fees from portfolio companies:
- Transaction fees (deal closing)
- Monitoring fees (ongoing)
- Exit fees (at sale)

**Fee offset:** The portion of these fees that reduce management fees to LPs.
- 100% offset = all portfolio company fees reduce LP management fees
- 50% offset = half goes to GP, half reduces LP fees

---

## CEO Application

If you're leading a PE-backed company, understand the economics driving your sponsors:

### What Matters to Your PE Firm

1. **Fund vintage performance** - Where is this fund in its lifecycle?
2. **Multiple vs. IRR** - Does the fund need quick wins or bigger multiples?
3. **Carry distribution** - Who at the firm has carry on your deal?
4. **Management fee pressure** - Late-stage funds may want quick exits

### Questions to Consider

- Is my company held by an early fund (patient capital) or late fund (exit pressure)?
- What return threshold must we hit for the GP to earn carry?
- How does my success translate to specific partners' economics?
- What add-on acquisitions would be accretive to fund returns?

### Your Compensation in Context

Your equity compensation is typically 3-5% of exit value:
- At 3x exit, CEO with 4% = 12% of gain
- PE firm's carry share = 20% of gain
- Your incentive is aligned but smaller than the GP's

---

## Common Mistakes

| Mistake | Problem | Better Approach |
|---------|---------|-----------------|
| Ignoring management fees | Fees significantly impact net returns | Model full fee load |
| Forgetting hurdle | Carry doesn't start at $1 profit | Calculate hurdle first |
| Assuming all carry is distributed | Clawbacks can take back carry | Understand clawback terms |
| Comparing gross vs. net returns | Not apples-to-apples | Always compare net-to-LP |
| Ignoring GP commitment | Signals alignment | Look for 2%+ commitment |

---

## Key Takeaways

1. **"2 and 20"** means 2% annual management fee plus 20% carried interest
2. **Management fees** are paid regardless of performance; carry requires exceeding hurdle
3. **Hurdle rate** (typically 8% IRR) must be cleared before GP earns carry
4. **The waterfall** determines distribution priority: capital → preferred return → catch-up → split
5. **GP wealth** comes primarily from carry, creating strong performance incentives
6. **Fee negotiation** is increasingly common; terms vary by fund size and track record

---

## Practice Problems

### Problem 1: Management Fee Calculation
A $750M fund charges 2% on committed capital for 5 years, then 1.5% on invested capital. If the fund invests $680M and exits half its positions by year 7, calculate total management fees over 10 years.

### Problem 2: Carry Calculation
A $400M fund returns $1.2B to LPs. The fund has 8% hurdle and 20% carry. Calculate:
a) Total profit
b) Profit needed for 8% IRR (assume 5-year average hold)
c) GP carry

### Problem 3: GP Economics Comparison
Compare GP total compensation for two funds:
- Fund A: $1B at 2.0%/20%, achieves 2.0x gross
- Fund B: $500M at 1.5%/25%, achieves 3.0x gross

Which fund generates more total GP compensation?

---

## Further Reading

- **"Private Equity: Fund Types, Risks and Returns, and Regulation"** by Douglas Cumming
- **ILPA Principles 3.0** - LP guidance on fund terms
- **Preqin Fee Study** - Annual analysis of PE fee trends

---

## Connection to Nexus

Understanding fund economics helps explain portfolio company dynamics:
- Why PE firms push for specific exit timelines
- How performance pressure affects strategic decisions
- Why management teams receive equity incentives

The `pe-turnaround.json` dataset includes fund economics that drive the case narrative.

---

*Previous: [Lesson 1: Introduction to PE](01-introduction-to-pe.md)*
*Next: [Lesson 3: PE Investment Strategies](03-pe-investment-strategies.md)*
*Return to [Module Overview](README.md)*
