# Lesson 2: Quality of Earnings Analysis

> Mastering EBITDA adjustments and normalized earnings

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand the purpose and structure of QoE analysis
- Identify and calculate common EBITDA adjustments
- Distinguish between legitimate and aggressive adjustments
- Calculate normalized and pro forma EBITDA
- Apply QoE findings to deal pricing

---

## Introduction

Quality of Earnings (QoE) is the most critical financial due diligence workstream in PE. It answers the fundamental question: "Is the EBITDA real and sustainable?"

Sellers often present adjusted EBITDA that makes the business look better than reality. Your job is to scrutinize every adjustment, identify what's missing, and arrive at a defensible number that forms the basis for purchase price.

---

## Core Concepts

### The QoE Bridge

```
┌─────────────────────────────────────────────────────────────┐
│                    QoE EBITDA BRIDGE                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  REPORTED NET INCOME                           $3.5M        │
│  ─────────────────────────────────────────────────────────  │
│  + Interest Expense                            +$2.0M       │
│  + Taxes                                       +$1.5M       │
│  + Depreciation                                +$1.0M       │
│  + Amortization                                +$0.5M       │
│  ─────────────────────────────────────────────────────────  │
│  REPORTED EBITDA                               $8.5M        │
│  ─────────────────────────────────────────────────────────  │
│  + Owner add-backs                             +$0.8M       │
│  + Non-recurring expenses                      +$0.5M       │
│  - Aggressive revenue recognition              -$0.3M       │
│  - Below-market rent adjustment                -$0.2M       │
│  - Understated expenses                        -$0.3M       │
│  ─────────────────────────────────────────────────────────  │
│  ADJUSTED EBITDA                               $9.0M        │
│  ─────────────────────────────────────────────────────────  │
│  + Full-year impact of price increase          +$0.4M       │
│  - Lost customer (announced departure)         -$0.6M       │
│  + Synergies (cost savings identified)         +$0.5M       │
│  ─────────────────────────────────────────────────────────  │
│  PRO FORMA EBITDA                              $9.3M        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Types of Adjustments

| Category | Direction | Examples |
|----------|-----------|----------|
| **Normalization** | Usually + | Owner compensation, related party |
| **Non-recurring** | Usually + | Legal settlements, M&A costs |
| **Run-rate** | +/- | Customer wins/losses, price changes |
| **Accounting** | +/- | Revenue timing, expense classification |
| **Synergies** | Usually + | Cost savings, integration benefits |

---

## Framework: Common Adjustments

### 1. Owner/Seller Add-Backs

Expenses that won't recur under new ownership:

| Item | Typical Adjustment |
|------|-------------------|
| **Owner salary above market** | Reduce to market rate |
| **Owner perks** | Add back (cars, personal expenses) |
| **Family employees** | Remove if not continuing |
| **Related party transactions** | Adjust to market rates |
| **Owner rent** | Adjust if building owned personally |

**Example:**
```
Owner Compensation Analysis:
───────────────────────────────────────────────────────────────
Current owner salary:                           $600K
+ Bonus:                                        $200K
+ Car allowance:                                $30K
+ Club membership:                              $25K
Total owner compensation:                       $855K

Market CEO salary for this size company:        $350K
EBITDA add-back:                               $505K
```

### 2. Non-Recurring Items

One-time expenses that won't repeat:

| Item | Treatment | Notes |
|------|-----------|-------|
| **Legal settlements** | Add back | If truly one-time |
| **Restructuring costs** | Add back | But evaluate pattern |
| **M&A transaction costs** | Add back | Deal-related only |
| **Natural disaster** | Add back | Verify insurance |
| **Write-offs** | Evaluate | May be recurring |

**Red Flag:** If there are "non-recurring" items every year, they're recurring.

### 3. Revenue Adjustments

Scrutinize revenue recognition:

| Issue | Adjustment |
|-------|------------|
| **Timing** | Revenue pulled forward or pushed back |
| **Concentration** | Large customer dependency |
| **One-time sales** | Remove if not repeatable |
| **Deferred revenue** | Release too fast/slow |
| **Barter/trade** | Value at fair market |

### 4. Expense Adjustments

Identify understated or overstated expenses:

| Issue | Adjustment |
|-------|------------|
| **Deferred maintenance** | Normalize to run-rate |
| **Underspending on R&D** | Add back if needed |
| **Below-market rent** | Adjust to market |
| **Understaffing** | Add FTEs needed |
| **Insurance** | Normalize coverage |

---

## Worked Example: Full QoE Analysis

**Company:** ServiceTech Inc.
**Reported EBITDA:** $12.0M
**Seller's Adjusted EBITDA:** $14.5M

### Seller's Adjustments (per CIM)

| Item | Amount | Seller Rationale |
|------|--------|------------------|
| Owner compensation | +$0.8M | Above market |
| Legal settlement | +$0.6M | One-time lawsuit |
| Moving costs | +$0.3M | Office relocation |
| New ERP implementation | +$0.4M | One-time project |
| Trade show (biennial) | +$0.2M | Every 2 years |
| Customer win (new) | +$0.2M | Annualize 6-month customer |
| **Seller's Total** | **+$2.5M** | |

### QoE Provider Analysis

| Item | Seller | QoE Finding | Accepted |
|------|--------|-------------|----------|
| Owner comp | +$0.8M | Market is $450K, not $250K | +$0.55M |
| Legal settlement | +$0.6M | Third lawsuit in 5 years | +$0.0M |
| Moving costs | +$0.3M | Legitimate one-time | +$0.3M |
| ERP implementation | +$0.4M | Ongoing IT spend typical | +$0.2M |
| Trade show | +$0.2M | Should normalize | +$0.1M |
| New customer | +$0.2M | Not yet recurring | +$0.0M |
| **QoE Accepted** | | | **+$1.15M** |

### QoE Provider Haircuts

| Item | Amount | Rationale |
|------|--------|-----------|
| Understated healthcare | -$0.15M | Premiums increasing |
| Related party rent | -$0.10M | Below market |
| Deferred maintenance | -$0.25M | Equipment run hard |
| **Total Haircuts** | **-$0.50M** | |

### QoE EBITDA

```
QoE SUMMARY
───────────────────────────────────────────────────────────────
Reported EBITDA:                               $12.00M
Seller adjustments accepted:                   +$1.15M
QoE haircuts:                                  -$0.50M
───────────────────────────────────────────────────────────────
QoE ADJUSTED EBITDA:                           $12.65M

vs. Seller's Adjusted EBITDA:                  $14.50M
Difference:                                    ($1.85M)
At 7x multiple:                                ($13.0M) price impact
```

---

## PE Application

### QoE Report Sections

A typical QoE report includes:

```
QoE REPORT STRUCTURE
───────────────────────────────────────────────────────────────

1. Executive Summary
   └── Key findings, adjusted EBITDA, recommendations

2. Quality of Revenue
   └── Revenue recognition, customer analysis, sustainability

3. Quality of Earnings
   └── EBITDA adjustments, margin analysis, trends

4. Working Capital
   └── Definition, target, seasonality

5. Net Debt / Debt-Like Items
   └── Debt identification, debt-like items

6. Accounting Policies
   └── Review of key policies, any concerns

7. Management / Projections
   └── Assessment of forecasts, achievability

8. Appendices
   └── Detailed schedules, data room references
```

### Working Capital Analysis

QoE also establishes target working capital:

```
WORKING CAPITAL ANALYSIS
───────────────────────────────────────────────────────────────

                        Average (24 mo)    At Close (est.)
Accounts Receivable        $4.2M              $4.8M
Inventory                  $1.8M              $2.0M
Prepaid Expenses           $0.3M              $0.3M
───────────────────────────────────────────────────────────────
Current Assets             $6.3M              $7.1M

Accounts Payable           $2.1M              $2.4M
Accrued Expenses           $1.5M              $1.6M
Deferred Revenue           $0.7M              $0.8M
───────────────────────────────────────────────────────────────
Current Liabilities        $4.3M              $4.8M

Net Working Capital        $2.0M              $2.3M

TARGET NWC: $2.0M (24-month average)
If close at $2.3M → Seller receives additional $0.3M
If close at $1.7M → Buyer receives additional $0.3M
```

---

## CEO Application

### Preparing for QoE

If your company will undergo QoE:

**Before the Process:**
1. Clean up financial records
2. Document all adjustments
3. Reconcile key accounts
4. Prepare supporting detail
5. Know your numbers cold

**During QoE:**
1. Designate single point of contact
2. Respond quickly to data requests
3. Explain, don't argue
4. Anticipate questions
5. Document everything

**Common QoE Challenges:**

| Issue | How to Prepare |
|-------|----------------|
| Revenue recognition | Clear policy documentation |
| Related party transactions | Market rate evidence |
| Owner add-backs | Documented and reasonable |
| Inventory valuation | Recent count, policy |
| AR collectibility | Aging analysis, history |

---

## Common Mistakes

| Mistake | Problem | Better Approach |
|---------|---------|-----------------|
| Accepting seller adjustments | Overpay | Verify everything |
| Missing understated expenses | Overpay | Look for what's NOT there |
| Ignoring revenue quality | Unsustainable EBITDA | Analyze customer cohorts |
| Not testing seasonality | Wrong WC target | Get 24+ months data |
| Single-year focus | Miss trends | Analyze 3 years minimum |

---

## Key Takeaways

1. **QoE validates** whether EBITDA is real and sustainable
2. **Adjustments flow** from reported → adjusted → pro forma
3. **Owner add-backs** are common but must be verified
4. **Non-recurring items** require pattern analysis
5. **Revenue quality** is as important as expense analysis
6. **Working capital** target affects purchase price
7. **QoE findings** directly impact deal pricing

---

## Practice Problems

### Problem 1: Add-Back Analysis
Owner takes $800K salary, $150K car allowance, employs spouse at $95K (no real job). Market CEO salary is $400K. Calculate the add-back.

### Problem 2: Non-Recurring Assessment
Company has "non-recurring" legal expenses of $200K, $350K, and $275K over the past 3 years. How would you treat this in QoE?

### Problem 3: Full QoE Bridge
Build a QoE bridge from the following:
- Reported EBITDA: $8.0M
- Owner excess compensation: $400K
- Legal settlement: $150K (first in company history)
- Below-market rent (related party): $50K
- Lost customer (just announced): $200K EBITDA impact
- Price increase (partial year): $100K annualized impact

---

## Further Reading

- **"Quality of Earnings Reports"** - Big 4 guides
- **"Financial Due Diligence"** by Deloitte
- **"Private Company Valuation"** by AICPA

---

## Connection to Nexus

The financial analysis concepts in Case 2 (Consulting Firm Economics) apply directly to QoE:
- Margin analysis
- Revenue sustainability
- Cost normalization

The PE Due Diligence simulation includes QoE exercises.

---

*Previous: [Lesson 1: Deal Sourcing](01-deal-sourcing.md)*
*Next: [Lesson 3: Commercial Due Diligence](03-commercial-due-diligence.md)*
*Return to [Module Overview](README.md)*
