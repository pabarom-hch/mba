# Lesson 5: Financial Modeling for PE

> Building LBO models, sensitivity analysis, and returns calculations

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Structure and build an LBO model
- Model different debt tranches and paydown
- Calculate returns (MOIC, IRR) accurately
- Conduct sensitivity analysis on key drivers
- Build a value creation bridge

---

## Introduction

Financial modeling is a core PE skill. The LBO model translates your investment thesis into numbers, stress-tests assumptions, and calculates expected returns. A well-built model helps you determine the right price, understand risks, and communicate with investment committee and lenders.

This lesson covers the fundamental components of PE financial modeling.

---

## Core Concepts

### LBO Model Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    LBO MODEL STRUCTURE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────┐                                        │
│  │  SOURCES & USES │ ◄── Transaction structure              │
│  └────────┬────────┘                                        │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐                                        │
│  │    OPERATING    │ ◄── Revenue, EBITDA, working capital   │
│  │      MODEL      │                                        │
│  └────────┬────────┘                                        │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐                                        │
│  │  DEBT SCHEDULE  │ ◄── Interest, amortization, paydown    │
│  │                 │                                        │
│  └────────┬────────┘                                        │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐                                        │
│  │  CASH FLOW      │ ◄── Free cash flow to equity          │
│  │   STATEMENT     │                                        │
│  └────────┬────────┘                                        │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐                                        │
│  │    RETURNS      │ ◄── Exit value, MOIC, IRR             │
│  │    ANALYSIS     │                                        │
│  └─────────────────┘                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### Section 1: Sources & Uses

```
SOURCES & USES EXAMPLE
───────────────────────────────────────────────────────────────

USES                              SOURCES
────                              ───────
Purchase Price         $95.0M     Revolver               $0.0M
Refinance Debt          $5.0M     Term Loan B          $55.0M
Transaction Fees        $3.0M     Mezzanine            $15.0M
Financing Fees          $2.0M     Sponsor Equity       $32.0M
─────────────────────────────     Management Rollover   $3.0M
TOTAL USES            $105.0M     TOTAL SOURCES       $105.0M
                                                        ======
Equity %:               33%
Debt %:                 67%
```

**Key Inputs:**
- Purchase multiple × LTM EBITDA = Purchase price
- Net debt refinanced
- Transaction fees (typically 2-3% of EV)
- Financing fees (2-3% of debt)

---

### Section 2: Operating Model

Build a 5-year projection of the income statement:

```
OPERATING MODEL ($ in millions)
───────────────────────────────────────────────────────────────

                        LTM     Yr 1    Yr 2    Yr 3    Yr 4    Yr 5
Revenue               $80.0   $86.4   $93.3  $100.8  $108.8  $117.5
  Growth %                     8.0%    8.0%    8.0%    8.0%    8.0%

COGS                  $48.0   $51.2   $54.8   $58.5   $62.5   $66.8
Gross Profit          $32.0   $35.2   $38.5   $42.3   $46.3   $50.7
  Margin %            40.0%   40.7%   41.3%   42.0%   42.6%   43.1%

SG&A                  $18.0   $19.0   $20.0   $21.0   $22.0   $23.5

EBITDA                $14.0   $16.2   $18.5   $21.3   $24.3   $27.2
  Margin %            17.5%   18.8%   19.8%   21.1%   22.3%   23.1%

D&A                    $2.0    $2.2    $2.4    $2.6    $2.8    $3.0

EBIT                  $12.0   $14.0   $16.1   $18.7   $21.5   $24.2
```

**Key Assumptions:**
- Revenue growth (organic + inorganic)
- Gross margin improvement
- SG&A leverage (grow slower than revenue)
- D&A as % of revenue or fixed asset base

---

### Section 3: Debt Schedule

```
DEBT SCHEDULE ($ in millions)
───────────────────────────────────────────────────────────────

TERM LOAN B                LTM     Yr 1    Yr 2    Yr 3    Yr 4    Yr 5
Beginning Balance              $55.0   $53.9   $47.7   $40.4   $31.9   $22.0
  Mandatory Amortization        (1.1)   (1.1)   (1.1)   (1.1)   (1.1)
  Cash Sweep                          (5.1)   (6.2)   (7.4)   (8.8)
Ending Balance            $55.0  $53.9   $47.7   $40.4   $31.9   $22.0   $12.1

Interest Rate              8.0%
Interest Expense                 $4.4    $4.1    $3.5    $2.9    $2.2

MEZZANINE
Beginning Balance              $15.0   $15.0   $15.0   $15.0   $15.0   $15.0
  No amortization (bullet)
Ending Balance            $15.0  $15.0   $15.0   $15.0   $15.0   $15.0   $15.0

Interest Rate             12.0%
Interest Expense (PIK 4%)        $1.2    $1.2    $1.2    $1.2    $1.2

TOTAL DEBT                $70.0  $68.9   $62.7   $55.4   $46.9   $37.0   $27.1
TOTAL INTEREST                   $5.6    $5.3    $4.7    $4.1    $3.4
```

**Debt Terms to Model:**
- Interest rate (fixed or floating)
- Mandatory amortization schedule
- Cash flow sweep (excess cash to debt)
- PIK (paid-in-kind) interest
- Prepayment penalties

---

### Section 4: Cash Flow Statement

```
FREE CASH FLOW ($ in millions)
───────────────────────────────────────────────────────────────

                              Yr 1    Yr 2    Yr 3    Yr 4    Yr 5
EBITDA                       $16.2   $18.5   $21.3   $24.3   $27.2
(-) Interest Expense          (5.6)   (5.3)   (4.7)   (4.1)   (3.4)
(-) Taxes @ 25%               (2.1)   (2.7)   (3.5)   (4.4)   (5.2)
(-) Capex                     (2.6)   (2.8)   (3.0)   (3.3)   (3.5)
(-) Change in NWC             (0.6)   (0.7)   (0.8)   (0.8)   (0.9)
─────────────────────────────────────────────────────────────────
Free Cash Flow                $5.3    $7.0    $9.3   $11.7   $14.2

(-) Mandatory Amortization    (1.1)   (1.1)   (1.1)   (1.1)   (1.1)
─────────────────────────────────────────────────────────────────
Excess Cash Flow              $4.2    $5.9    $8.2   $10.6   $13.1

Cash Sweep % (75%)            $3.2    $4.4    $6.2    $8.0    $9.8
Cash to Balance Sheet         $1.0    $1.5    $2.0    $2.6    $3.3
```

---

### Section 5: Returns Analysis

```
RETURNS ANALYSIS ($ in millions)
───────────────────────────────────────────────────────────────

EXIT ASSUMPTIONS
Exit Year:                    5
Exit EBITDA:                 $27.2M
Exit Multiple:               8.0x
Enterprise Value:           $217.6M

EQUITY VALUE AT EXIT
Enterprise Value:           $217.6M
(-) Debt Remaining:          (27.1)
(+) Cash on Balance Sheet:    10.4
─────────────────────────────
Equity Value:               $200.9M

RETURNS
Initial Equity Investment:   $35.0M
Exit Equity Value:          $200.9M
─────────────────────────────
MOIC:                        5.7x
IRR:                         42%
```

---

## Framework: Sensitivity Analysis

### Two-Way Sensitivity Table

```
EXIT MULTIPLE SENSITIVITY
───────────────────────────────────────────────────────────────

IRR at Various Exit Multiples and EBITDA Growth
                      Exit EBITDA ($M)
                   $22    $25    $27    $30    $33
Exit    6.0x       18%    23%    26%    31%    35%
Mult    7.0x       26%    31%    35%    40%    44%
        8.0x       33%    38%    42%    47%    52%
        9.0x       39%    44%    49%    54%    58%
       10.0x       44%    49%    54%    60%    64%


MOIC at Various Entry Multiples and Exit Multiples
                      Exit Multiple
                   6.0x   7.0x   8.0x   9.0x  10.0x
Entry   6.0x       2.8x   3.4x   4.0x   4.6x   5.2x
Mult    7.0x       2.4x   2.9x   3.4x   4.0x   4.5x
        8.0x       2.1x   2.5x   3.0x   3.5x   3.9x
        9.0x       1.8x   2.2x   2.6x   3.1x   3.5x
       10.0x       1.6x   2.0x   2.4x   2.8x   3.1x
```

### Key Sensitivities to Model

| Variable | Impact |
|----------|--------|
| Entry multiple | Highest impact on returns |
| Exit multiple | High impact |
| Revenue growth | Medium-high impact |
| Margin improvement | Medium impact |
| Leverage level | Medium impact (amplifies) |
| Hold period | Affects IRR more than MOIC |

---

## Worked Example: Value Creation Bridge

```
VALUE CREATION BRIDGE ($ in millions)
───────────────────────────────────────────────────────────────

Entry Equity Value                              $35.0

Value Creation:
  + Revenue Growth ($80M → $118M)              +$38.0
    × Entry margin 17.5% × Entry multiple 7.5x

  + Margin Expansion (17.5% → 23.1%)           +$32.0
    Exit revenue $118M × 5.6% improvement × 8x

  + Multiple Expansion (7.5x → 8.0x)           +$13.6
    Exit EBITDA $27.2M × 0.5x expansion

  + Deleveraging                               +$42.9
    Debt reduction: $70M → $27.1M

  + Cash Build                                 +$10.4
    Accumulated cash on B/S

  - Value Leakage                              ($5.0)
    Transaction costs, management fees
───────────────────────────────────────────────────────────────
Exit Equity Value                             $200.9

Check: $35.0 entry + $165.9 value created = $200.9 ✓
```

---

## PE Application

### Model Best Practices

| Practice | Rationale |
|----------|-----------|
| **Clear structure** | Easy to audit and modify |
| **Assumptions page** | All inputs in one place |
| **Color coding** | Blue = input, black = formula |
| **Error checks** | Balance sheet balances, etc. |
| **Version control** | Track changes |
| **Sensitivity tables** | Test key assumptions |

### Common Modeling Errors

| Error | Impact |
|-------|--------|
| Circular references | Model breaks |
| Hard-coded numbers | Miss updates |
| Wrong sign conventions | Calculation errors |
| Missing cash sweep | Overstates debt |
| Ignoring working capital | Cash flow error |

---

## CEO Application

If you're presenting to PE:

**Understand the Model:**
- What assumptions drive their returns?
- What's their entry multiple implying?
- What growth do they need to hit returns?
- What margin assumptions are built in?

**Negotiate Informed:**
- Higher projections → higher valuation
- But you'll be held to those projections
- Balance optimism with achievability

---

## Key Takeaways

1. **LBO models** have five core sections: sources/uses, operating, debt, cash flow, returns
2. **Sources must equal uses** — equity is typically the plug
3. **Debt paydown** from cash flow creates equity value
4. **MOIC and IRR** are the primary return metrics
5. **Sensitivity analysis** identifies risk and reward drivers
6. **Value bridge** attributes returns to specific sources

---

## Practice Problems

### Problem 1: Sources & Uses
Build a sources and uses table for:
- Purchase price: $80M (8x $10M EBITDA)
- Existing debt to refinance: $5M
- Transaction fees: 3% of EV
- Senior debt: 4.5x EBITDA
- Mezzanine: 1.5x EBITDA

### Problem 2: Returns Calculation
Entry: $25M equity for company with $5M EBITDA at 8x
Exit (Year 5): $12M EBITDA at 9x, $20M debt remaining
Calculate MOIC and IRR.

### Problem 3: Sensitivity
How much does IRR change if:
a) Entry multiple increases from 8x to 9x?
b) Exit multiple decreases from 9x to 8x?
c) Hold period extends from 5 to 7 years?

---

## Further Reading

- **"Investment Banking"** by Rosenbaum & Pearl
- **"Financial Modeling"** by Simon Benninga
- **Wall Street Prep LBO Guide**

---

## Connection to Nexus

The PE LBO Model simulation provides hands-on practice:
- Interactive model building
- Sensitivity analysis
- Returns optimization

See: `cases/nexus/simulations/pe-lbo-model.md`

---

*Previous: [Lesson 4: Operational Due Diligence](04-operational-due-diligence.md)*
*Next: [Lesson 6: Deal Negotiation & Closing](06-deal-negotiation-closing.md)*
*Return to [Module Overview](README.md)*
