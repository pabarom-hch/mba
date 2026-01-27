# Time Value of Money

## Learning Objectives

- Understand why money has time value
- Calculate present and future values
- Apply discounting and compounding
- Work with annuities and perpetuities
- Use time value concepts in business decisions

---

## Introduction

A dollar today is worth more than a dollar tomorrow. This simple principle—the time value of money (TVM)—underlies all of finance. Understanding TVM is essential before we can evaluate any investment, acquisition, or strategic decision.

Why does money have time value?
1. **Opportunity cost** - Money today can be invested to earn returns
2. **Inflation** - Purchasing power erodes over time
3. **Risk** - Future cash is less certain than cash in hand
4. **Preference** - People prefer consumption now vs. later

---

## Core Concepts

### Future Value (Compounding)

**How much will money grow to in the future?**

```
FV = PV × (1 + r)^n

Where:
FV = Future Value
PV = Present Value
r = Interest rate per period
n = Number of periods
```

**Example:**
```
Invest $1,000 at 8% for 5 years
FV = $1,000 × (1.08)^5
FV = $1,000 × 1.469
FV = $1,469
```

**Compound Interest Effect:**

| Year | Beginning | Interest (8%) | Ending |
|------|-----------|---------------|--------|
| 1 | $1,000 | $80 | $1,080 |
| 2 | $1,080 | $86 | $1,166 |
| 3 | $1,166 | $93 | $1,260 |
| 4 | $1,260 | $101 | $1,360 |
| 5 | $1,360 | $109 | $1,469 |

Interest on interest is the power of compounding.

### Present Value (Discounting)

**What is future money worth today?**

```
PV = FV / (1 + r)^n

Alternatively:
PV = FV × [1 / (1 + r)^n]
PV = FV × (Discount Factor)
```

**Example:**
```
What is $1,000 received in 5 years worth today at 8%?
PV = $1,000 / (1.08)^5
PV = $1,000 / 1.469
PV = $681
```

**Discount Factor Table (8%):**

| Year | Discount Factor | $1,000 PV |
|------|----------------|-----------|
| 1 | 0.926 | $926 |
| 2 | 0.857 | $857 |
| 3 | 0.794 | $794 |
| 4 | 0.735 | $735 |
| 5 | 0.681 | $681 |

### The Rule of 72

**Quick approximation for doubling time:**

```
Years to Double ≈ 72 / Interest Rate

At 8%: 72/8 = 9 years to double
At 6%: 72/6 = 12 years to double
At 12%: 72/12 = 6 years to double
```

### Annuities

**Series of equal payments over time:**

**Present Value of Annuity:**
```
PV = PMT × [(1 - (1+r)^(-n)) / r]

Or using annuity factor:
PV = PMT × PVIFA(r,n)
```

**Example:**
```
What is the PV of $100/year for 5 years at 8%?
PV = $100 × [(1 - (1.08)^(-5)) / 0.08]
PV = $100 × [1 - 0.681] / 0.08
PV = $100 × 3.993
PV = $399.30
```

**Future Value of Annuity:**
```
FV = PMT × [((1+r)^n - 1) / r]
```

### Perpetuities

**Infinite stream of payments:**

```
PV = PMT / r

Example:
$100 per year forever at 8%
PV = $100 / 0.08 = $1,250
```

**Growing Perpetuity:**
```
PV = PMT / (r - g)

Where g = growth rate (g must be < r)

Example:
$100 growing at 3% forever, discounted at 8%
PV = $100 / (0.08 - 0.03) = $2,000
```

### Effective Annual Rate

**Converting between compounding frequencies:**

```
EAR = (1 + r/m)^m - 1

Where m = compounding periods per year
```

**Example:**
```
12% APR compounded monthly:
EAR = (1 + 0.12/12)^12 - 1
EAR = (1.01)^12 - 1
EAR = 12.68%
```

---

## Consulting Application

### DCF Framework Foundation

TVM is the foundation of Discounted Cash Flow analysis:

**Consulting Project Valuation:**
```
Step 1: Project future cash flows
Step 2: Determine appropriate discount rate
Step 3: Calculate present value of each cash flow
Step 4: Sum to get total NPV
```

### Client Scenario: Investment Comparison

**Problem:** Client considering two investments:
- Option A: $500K now, $800K in 3 years
- Option B: $500K now, $200K/year for 5 years

**Analysis at 10%:**
```
Option A:
NPV = -500 + 800/(1.10)^3
NPV = -500 + 601 = $101K

Option B:
NPV = -500 + 200 × PVIFA(10%,5)
NPV = -500 + 200 × 3.791 = $258K

Option B is superior by $157K
```

---

## CEO Application

### Capital Allocation Decisions

As CEO, you're constantly making TVM decisions:

1. **Invest in R&D today** for payoffs in 5+ years
2. **Build manufacturing capacity** for future demand
3. **Acquire companies** based on projected cash flows
4. **Return capital** to shareholders vs. reinvesting

### Strategic Time Horizon

| Decision | Typical Horizon | Key TVM Consideration |
|----------|-----------------|----------------------|
| Quarterly investments | 1 year | Low discounting impact |
| Product development | 3-5 years | Moderate discounting |
| Factory construction | 10-20 years | Heavy discounting |
| Brand building | 20+ years | Perpetuity thinking |

### The CEO's Discount Rate Question

Higher discount rates reduce value of long-term projects:
- 8% discount: 10-year project has 46% of cash flows value
- 12% discount: 10-year project has 32% of cash flows value
- 15% discount: 10-year project has 25% of cash flows value

**CEO Implication:** Companies with higher cost of capital naturally favor shorter-term projects. This creates a competitive advantage for well-capitalized companies pursuing long-term strategies.

---

## Worked Example

### Corporate Bond Valuation

**Problem:** Value a 5-year corporate bond:
- Face Value: $1,000
- Coupon Rate: 6% (annual)
- Market Rate: 8%

**Solution:**

```
Step 1: Identify cash flows
- Annual coupon: $60 (6% × $1,000)
- Year 1-4: $60 each
- Year 5: $60 + $1,000 = $1,060

Step 2: Calculate present value

Year 1: $60 / (1.08)^1 = $55.56
Year 2: $60 / (1.08)^2 = $51.44
Year 3: $60 / (1.08)^3 = $47.63
Year 4: $60 / (1.08)^4 = $44.10
Year 5: $1,060 / (1.08)^5 = $721.47

Total PV = $920.20
```

**Or using formulas:**
```
PV of coupons = $60 × PVIFA(8%,5) = $60 × 3.993 = $239.58
PV of face value = $1,000 / (1.08)^5 = $680.58
Total = $920.16 (slight rounding difference)
```

**Interpretation:** Bond trades at discount ($920 vs. $1,000) because market rate (8%) exceeds coupon rate (6%).

---

## Common Mistakes

### 1. Confusing APR and EAR
**Mistake:** Using APR when EAR is needed for comparison.
**Fix:** Always convert to same compounding basis for comparison.

### 2. Mismatching Periods
**Mistake:** Using annual rate with monthly cash flows.
**Fix:** Match rate and cash flow periods (monthly rate for monthly cash flows).

### 3. Ignoring Timing Within Periods
**Mistake:** Assuming all cash flows occur at period end.
**Reality:** Cash flows occur throughout period—may need adjustment.

### 4. Double-Counting Inflation
**Mistake:** Inflating cash flows AND using real discount rate.
**Fix:** Use nominal cash flows with nominal rate, or real with real—never mix.

### 5. Forgetting Time 0
**Mistake:** Discounting initial investment.
**Fix:** Time 0 cash flows are already in present value terms.

---

## Key Takeaways

1. **Money has time value** - A dollar today > a dollar tomorrow
2. **Compounding builds wealth** - Interest on interest accelerates growth
3. **Discounting values future cash** - Converts to comparable present terms
4. **Match periods and rates** - Consistency is essential
5. **Rule of 72** - Quick mental math for doubling time
6. **Perpetuity formula** - Values infinite cash streams
7. **TVM underpins all finance** - Foundation for NPV, valuation, everything

---

## Practice Problems

### Problem 1: Future Value
You invest $10,000 today at 7% annual return. What will it be worth in:
a) 5 years?
b) 10 years?
c) 30 years (retirement)?

### Problem 2: Present Value
Your rich uncle promises to give you $100,000 when you turn 40. You're 25 now. At 8% discount rate, what is this promise worth today?

### Problem 3: Annuity
You can afford $500/month for a car payment. If the loan rate is 6% annual (0.5% monthly) for 5 years (60 months), what car price can you afford?

### Problem 4: Perpetuity
A company generates $10M in annual free cash flow, growing at 3% per year forever. At 10% discount rate, what is the company worth?

### Problem 5: Comparison
Which is worth more at 10% discount rate?
- $10,000 today
- $15,000 in 3 years
- $25,000 in 8 years

---

*Next: [Cash Flow Estimation](02-cash-flow-estimation.md)*
