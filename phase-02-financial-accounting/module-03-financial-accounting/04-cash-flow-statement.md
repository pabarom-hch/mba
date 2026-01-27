# The Cash Flow Statement

## Learning Objectives

- Understand the three sections of cash flow statement
- Master indirect method cash flow reconciliation
- Analyze the relationship between earnings and cash flow
- Identify cash flow quality issues
- Apply cash flow analysis to business decisions

---

## Introduction

"Cash is king" isn't just a cliché—it's fundamental truth. Companies fail not because they're unprofitable, but because they run out of cash. The cash flow statement bridges the gap between accrual-based earnings and actual cash generation.

For CEOs, cash flow is the ultimate reality check. You can debate accounting treatments for revenue and expenses, but cash is binary—you either have it or you don't.

---

## Core Concepts

### Why Cash Flow Matters

**Earnings vs. Cash—They Can Differ Dramatically:**

| Scenario | Net Income | Cash Flow |
|----------|------------|-----------|
| Selling on credit | $100 | $0 |
| Collecting old receivables | $0 | $100 |
| Depreciation expense | -$50 | $0 |
| Buying equipment | $0 | -$50 |
| Prepaying rent | $0 | -$12 |
| Receiving advance payment | $0 | +$100 |

**Key Insight:** Profitable companies can go bankrupt if they can't generate cash.

### Cash Flow Statement Structure

```
COMPANY NAME
Statement of Cash Flows
For the Year Ended December 31, 2024

OPERATING ACTIVITIES (Day-to-day business)
  Net Income                                        $XXX,XXX
  Adjustments:
    Depreciation & Amortization                     XXX,XXX
    Stock-based Compensation                        XXX,XXX
    Deferred Taxes                                  XX,XXX
    Other Non-cash Items                            XX,XXX
  Changes in Working Capital:
    Accounts Receivable                            (XX,XXX)
    Inventory                                      (XX,XXX)
    Prepaid Expenses                               (XX,XXX)
    Accounts Payable                                XX,XXX
    Accrued Expenses                                XX,XXX
    Deferred Revenue                                XX,XXX
  ────────────────────────────────────────────────
  Net Cash from Operating Activities                        $XXX,XXX

INVESTING ACTIVITIES (Long-term investments)
  Capital Expenditures                            (XXX,XXX)
  Acquisitions, net of cash acquired             (XXX,XXX)
  Purchases of Investments                        (XX,XXX)
  Proceeds from Sales of Investments               XX,XXX
  Other                                            XX,XXX
  ────────────────────────────────────────────────
  Net Cash from Investing Activities                       ($XXX,XXX)

FINANCING ACTIVITIES (Funding the business)
  Proceeds from Debt Issuance                      XXX,XXX
  Repayment of Debt                              (XXX,XXX)
  Proceeds from Stock Issuance                     XX,XXX
  Share Repurchases                              (XX,XXX)
  Dividends Paid                                 (XX,XXX)
  ────────────────────────────────────────────────
  Net Cash from Financing Activities                       ($XX,XXX)

Net Change in Cash                                          $XX,XXX
Cash at Beginning of Period                                 XXX,XXX
Cash at End of Period                                      $XXX,XXX
════════════════════════════════════════════════════════════════════
```

### Operating Cash Flow (OCF)

**Purpose:** Cash generated from core business operations.

**Indirect Method (Most Common):**
Start with net income and adjust:

**Add Back Non-Cash Expenses:**
- Depreciation & Amortization (no cash out)
- Stock-based compensation (no cash out)
- Impairment charges (no cash out)
- Deferred tax expense (timing difference)

**Adjust for Working Capital Changes:**

| Item | Increase → | Decrease → |
|------|------------|------------|
| Receivables | Cash outflow | Cash inflow |
| Inventory | Cash outflow | Cash inflow |
| Prepaids | Cash outflow | Cash inflow |
| Payables | Cash inflow | Cash outflow |
| Accrued Expenses | Cash inflow | Cash outflow |
| Deferred Revenue | Cash inflow | Cash outflow |

**The Logic:**
- Receivables ↑ = Sold but didn't collect → Less cash than earnings
- Inventory ↑ = Bought but didn't sell → Cash out, no expense
- Payables ↑ = Expenses recorded, not paid → Cash still in hand

### Investing Cash Flow (ICF)

**Purpose:** Cash spent on or received from long-term investments.

**Common Items:**
- Capital expenditures (CapEx) - usually largest outflow
- Business acquisitions
- Purchase/sale of investments
- Proceeds from asset sales

**Interpretation:**
- Negative ICF = Investing in growth (usually good)
- Positive ICF = Selling assets (why? distress or strategic?)

### Financing Cash Flow (FCF)

**Purpose:** Cash from financing sources and returns to capital providers.

**Debt-Related:**
- Borrowings (inflow)
- Repayments (outflow)

**Equity-Related:**
- Stock issuance (inflow)
- Share repurchases (outflow)
- Dividends (outflow)

**Interpretation:**
- Companies raising capital have positive FCF
- Companies returning capital have negative FCF
- Mature, profitable companies often have negative financing CF

---

## Free Cash Flow

### Definition and Calculation

**Free Cash Flow (FCF):**
```
FCF = Operating Cash Flow - Capital Expenditures
```

**Why FCF Matters:**
- Cash available for discretionary purposes
- Can be used for: dividends, buybacks, debt repayment, acquisitions, cash accumulation
- Basis for valuation (DCF models)

**Alternative Definition:**
```
Unlevered FCF = EBIT × (1 - Tax Rate) + D&A - CapEx - Change in Working Capital
```

### FCF Yield

```
FCF Yield = FCF / Market Capitalization

or

FCF Yield = FCF / Enterprise Value
```

**Interpretation:**
- Higher yield = cheaper stock (potentially)
- Compare to peers and bond yields

### OCF vs. FCF

```
Operating Cash Flow                    $500M
- Capital Expenditures                ($200M)
────────────────────────────────────────────
Free Cash Flow                         $300M
```

**Important Distinction:**
- OCF can be high, but if CapEx is also high, FCF may be low
- Growth companies often have high CapEx → Lower FCF
- Mature companies often have low CapEx → Higher FCF

---

## Cash Flow Analysis

### Quality of Earnings Test

**Key Ratio:**
```
OCF / Net Income

> 1.0 = High quality earnings (cash backing profits)
< 1.0 = Lower quality (profits not generating cash)
```

**Warning Signs:**
- Net income >> OCF consistently
- Net income positive, OCF negative
- Growing gap between earnings and cash flow

### Cash Flow Patterns by Life Cycle

| Stage | Operating | Investing | Financing |
|-------|-----------|-----------|-----------|
| Startup | Negative | Negative | Positive |
| Growth | Positive/Neg | Negative | Positive |
| Mature | Positive | Negative | Negative |
| Decline | Positive | Positive | Negative |

### Working Capital Efficiency

**Days Metrics:**

```
Days Sales Outstanding (DSO) = (Receivables / Revenue) × 365
Days Inventory Outstanding (DIO) = (Inventory / COGS) × 365
Days Payables Outstanding (DPO) = (Payables / COGS) × 365

Cash Conversion Cycle = DSO + DIO - DPO
```

**Lower CCC = Better:**
- Collect faster
- Turn inventory faster
- Pay slower

---

## Consulting Application

### Cash Flow Due Diligence

**Operating Cash Flow Analysis:**

| Check | What to Look For | Red Flag |
|-------|------------------|----------|
| OCF vs. Net Income | Consistent relationship | Earnings >> OCF |
| Working capital | Efficient management | Receivables/inventory building |
| Non-cash addbacks | Reasonable levels | Huge stock comp, impairments |
| Trend | Stable or improving | Declining OCF |

**CapEx Analysis:**

| Check | What to Look For | Red Flag |
|-------|------------------|----------|
| Maintenance vs. growth | Know the split | All "growth" CapEx claimed |
| CapEx / Depreciation | Sustaining investment | < 1.0 for years (underinvesting) |
| Trend | Consistent investment | Sudden drops (deferring) |

### Sustainable Cash Flow

```
Sustainable Operating Cash Flow:
Start with: Reported OCF
Adjust for:
- Working capital normalization
- Non-recurring items
- Aggressive revenue recognition effects
= Normalized OCF
```

### Acquisition Analysis

When evaluating a target:
1. Calculate normalized FCF
2. Apply appropriate multiple
3. Compare to acquisition price
4. Assess synergy impact on cash flow

---

## CEO Application

### Cash Flow Management

**Cash Flow Priorities:**

1. **Operating needs** - Working capital, expenses
2. **Debt service** - Interest and principal
3. **Maintenance CapEx** - Keep business running
4. **Growth investment** - Expand capacity, new products
5. **Capital returns** - Dividends, buybacks

### Cash Runway

```
Cash Runway = Cash Balance / Monthly Cash Burn

Example:
$50M cash / $5M monthly burn = 10 months runway
```

**Minimum Targets:**
- Startup: 18+ months runway
- Growth company: 12+ months
- Mature company: 3-6 months plus credit facilities

### Cash Conversion

```
Cash Conversion = FCF / Net Income

Example:
$150M FCF / $200M Net Income = 75% conversion

High conversion = quality earnings
Low conversion = earnings quality concerns
```

### Questions for Your CFO

1. "What's our FCF conversion rate, and how does it trend?"
2. "Where is cash going—working capital, CapEx, or something else?"
3. "What's the split between maintenance and growth CapEx?"
4. "How many days of cash runway do we have?"
5. "What would happen to cash flow if revenue dropped 20%?"

---

## Worked Example

### Cash Flow Analysis: ManufactureCo

**Cash Flow Statement ($ millions):**

| | 2024 | 2023 | 2022 |
|---|------|------|------|
| **Operating Activities** |
| Net Income | $100 | $90 | $80 |
| Depreciation | 40 | 38 | 35 |
| Stock-based Comp | 10 | 8 | 5 |
| Change in Receivables | (30) | (15) | (10) |
| Change in Inventory | (25) | (10) | (5) |
| Change in Payables | 10 | 8 | 5 |
| **Operating Cash Flow** | **$105** | **$119** | **$110** |
| **Investing Activities** |
| CapEx | (60) | (50) | (45) |
| Acquisitions | (100) | 0 | 0 |
| **Investing Cash Flow** | **($160)** | **($50)** | **($45)** |
| **Financing Activities** |
| Debt Issuance | 80 | 0 | 0 |
| Dividends | (20) | (18) | (15) |
| Buybacks | (10) | (30) | (25) |
| **Financing Cash Flow** | **$50** | **($48)** | **($40)** |
| **Net Change in Cash** | **($5)** | **$21** | **$25** |

**Analysis:**

**1. OCF Quality:**
```
OCF/Net Income:
2024: $105 / $100 = 1.05x ✓
2023: $119 / $90 = 1.32x ✓
2022: $110 / $80 = 1.38x ✓

Trend: Declining conversion concerning
```

**2. Working Capital Deterioration:**
- Receivables building significantly ($30M in 2024)
- Inventory building ($25M in 2024)
- Payables not keeping pace

**3. Free Cash Flow:**
```
2024: $105 - $60 = $45M (before acquisition)
2023: $119 - $50 = $69M
2022: $110 - $45 = $65M

FCF declining despite higher net income
```

**4. Capital Allocation:**
- 2024: Made $100M acquisition
- Funded by new debt ($80M) and reduced buybacks
- Dividends still growing (commitment)

**Key Questions:**
1. Why are receivables and inventory building?
   - Is it to support growth? (Good)
   - Collection/demand issues? (Bad)
2. Is the acquisition delivering expected returns?
3. Will working capital continue to consume cash?

---

## Common Mistakes

### 1. Equating Earnings with Cash
**Mistake:** Assuming profitable companies generate cash.
**Reality:** Accrual accounting can create large gaps between profit and cash.

### 2. Ignoring Working Capital
**Mistake:** Focusing only on CapEx as cash use.
**Reality:** Working capital can consume enormous cash in growth.

### 3. Celebrating High OCF Without Context
**Mistake:** Viewing high OCF as always positive.
**Reality:** Could be from cutting CapEx, running down inventory, extending payables.

### 4. Missing CapEx Deferral
**Mistake:** Not noticing declining CapEx.
**Reality:** Companies can boost FCF by deferring needed investment.

### 5. One-Time Items
**Mistake:** Projecting from periods with unusual cash items.
**Reality:** Asset sales, lawsuit settlements distort cash flow.

---

## Key Takeaways

1. **Cash flow ≠ Net income** - Accruals create significant differences
2. **Operating CF is core** - Does the business generate cash?
3. **Working capital consumes cash** - Growth often requires cash investment
4. **Free cash flow is king** - Cash available after sustaining the business
5. **OCF/NI ratio reveals quality** - Lower ratio = lower quality earnings
6. **CapEx analysis matters** - Maintenance vs. growth, adequate investment
7. **Cash conversion cycle drives efficiency** - Faster is better

---

## Practice Problems

### Problem 1: Cash Flow Reconciliation
Net Income: $50M
Depreciation: $10M
Receivables increased $15M
Inventory increased $8M
Payables increased $5M
CapEx: $20M
Debt repayment: $10M

Calculate: Operating cash flow, Free cash flow

### Problem 2: Quality Assessment
Company shows:
- Net Income: $100M
- Operating Cash Flow: $40M
- Stock-based compensation: $30M
- Receivables growth: $35M

Assess earnings quality. What questions would you ask?

### Problem 3: Cash Runway
Startup has:
- Cash: $20M
- Monthly revenue: $500K
- Monthly expenses: $2M
- Revenue growing 10% monthly

How many months until cash runs out? (Assume expenses constant)

---

## Further Reading

- **"Financial Intelligence"** by Berman & Knight - Cash flow basics
- **"Valuation"** by McKinsey - DCF and free cash flow
- **"The Essays of Warren Buffett"** - Owner earnings concept
- **10-K filings** - Real cash flow statements at sec.gov

---

*Next: [Revenue Recognition](05-revenue-recognition.md)*
