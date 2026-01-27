# Internal Rate of Return (IRR)

## Learning Objectives

- Calculate and interpret Internal Rate of Return
- Understand IRR decision rules
- Recognize when IRR and NPV conflict
- Apply Modified IRR (MIRR) correctly
- Know when to use IRR vs. NPV

---

## Introduction

Internal Rate of Return is the most popular capital budgeting metric among practitioners—and one of the most misunderstood. IRR gives a rate of return, which feels intuitive: "This project returns 18%." But this intuition can lead you astray.

IRR is a useful screening tool, but NPV is the correct decision criterion. Understanding both—and when they conflict—is essential for sound investment decisions.

---

## Core Concepts

### IRR Definition

**IRR is the discount rate that makes NPV equal to zero.**

```
0 = -CF₀ + CF₁/(1+IRR)¹ + CF₂/(1+IRR)² + ... + CFn/(1+IRR)ⁿ

Solve for IRR
```

**Interpretation:** IRR is the project's rate of return.

### IRR Decision Rules

**For Independent Projects:**
- Accept if IRR > Required Return (Hurdle Rate)
- Reject if IRR < Required Return
- Indifferent if IRR = Required Return

**For Mutually Exclusive Projects:**
- Use NPV, not IRR (IRR can give wrong answer)

### Calculating IRR

**Trial and Error:**
```
Project: -$100, $50, $50, $50

Try 10%: NPV = -100 + 50/1.10 + 50/1.21 + 50/1.33
         NPV = -100 + 45.5 + 41.3 + 37.6 = $24.4 (positive)

Try 20%: NPV = -100 + 50/1.20 + 50/1.44 + 50/1.73
         NPV = -100 + 41.7 + 34.7 + 28.9 = $5.3 (positive)

Try 25%: NPV = -100 + 50/1.25 + 50/1.56 + 50/1.95
         NPV = -100 + 40 + 32 + 25.6 = ($2.4) (negative)

IRR is between 20% and 25% → approximately 23%
```

**Excel:** `=IRR(cash flows)`

**Financial Calculator:** Enter cash flows, solve for IRR

### IRR vs. NPV: The Key Relationship

```
When IRR > Discount Rate → NPV > 0 → Accept
When IRR < Discount Rate → NPV < 0 → Reject
When IRR = Discount Rate → NPV = 0 → Indifferent
```

For normal projects with one sign change, IRR and NPV agree.

---

## Problems with IRR

### Problem 1: Reinvestment Rate Assumption

**IRR assumes cash flows are reinvested at the IRR itself.**

```
Example: Project with 40% IRR
IRR implicitly assumes all intermediate cash flows
earn 40% when reinvested—often unrealistic.

NPV assumes reinvestment at cost of capital—more realistic.
```

### Problem 2: Multiple IRRs

**Non-conventional cash flows can have multiple IRRs.**

```
Year 0: ($100)  ← Negative
Year 1: $230    ← Positive
Year 2: ($132)  ← Negative

This project has TWO IRRs: 10% and 20%
Which do you use? Neither is meaningful.
```

**Rule:** Count sign changes in cash flows. That's the maximum number of possible IRRs.

### Problem 3: Scale Ignored

**IRR ignores project size.**

```
Project A: Invest $10, get $15 → IRR = 50%
Project B: Invest $1,000, get $1,200 → IRR = 20%

IRR says A is better.
NPV (at 10%): A = $3.64, B = $90.91
NPV says B is better—and it's correct.

You'd rather make $91 than $3.64.
```

### Problem 4: Mutually Exclusive Project Conflicts

**IRR can give wrong ranking for mutually exclusive projects.**

| Project | Investment | Year 1 | IRR | NPV@10% |
|---------|-----------|--------|-----|---------|
| A | $100 | $150 | 50% | $36.36 |
| B | $500 | $650 | 30% | $90.91 |

IRR: Choose A (50% > 30%)
NPV: Choose B ($90.91 > $36.36)

**NPV is correct.** Choose B.

### Crossover Rate

**The discount rate where two projects have equal NPV.**

```
At rates below crossover: Higher NPV project wins
At rates above crossover: Ranking may flip
```

To find crossover rate: Calculate IRR of (Project A - Project B) cash flows.

---

## Modified Internal Rate of Return (MIRR)

### Why MIRR?

MIRR solves the reinvestment rate problem by:
1. Compounding cash inflows to terminal value at cost of capital
2. Discounting cash outflows to present value at cost of capital
3. Finding rate connecting the two

### MIRR Calculation

```
MIRR = (Terminal Value / Present Value of Outflows)^(1/n) - 1

Where:
Terminal Value = Future value of all inflows at cost of capital
PV Outflows = Present value of all outflows at cost of capital
n = project life
```

### MIRR Example

```
Project: Year 0: ($1,000), Year 1: $400, Year 2: $500, Year 3: $600
Cost of Capital: 10%

Terminal Value (at Year 3):
$400 × (1.10)² = $484
$500 × (1.10)¹ = $550
$600 × (1.10)⁰ = $600
Total TV = $1,634

MIRR = ($1,634/$1,000)^(1/3) - 1 = 17.8%

Compare: Regular IRR = 23.4%

MIRR is lower because reinvestment is at 10%, not 23.4%.
```

### MIRR Advantages

- Single solution (no multiple IRR problem)
- Realistic reinvestment assumption
- Still gives percentage return

### MIRR Limitations

- Still doesn't solve scale problem
- Still shouldn't be used for mutually exclusive ranking
- More complex to calculate

---

## When to Use IRR

### IRR Works Well For:

1. **Screening independent projects** - Quick pass/fail
2. **Communication** - "15% return" is intuitive
3. **Comparing to hurdle rate** - Simple decision rule
4. **Performance benchmarking** - Track investment returns

### Use NPV Instead When:

1. **Mutually exclusive projects** - NPV gives correct ranking
2. **Non-conventional cash flows** - Multiple IRRs possible
3. **Different scales** - NPV captures absolute value
4. **Reinvestment rate matters** - NPV assumption more realistic
5. **Capital rationing** - Need to optimize total value

---

## Consulting Application

### IRR in Client Communication

Clients often prefer IRR because it's intuitive:

**"This investment returns 22% vs. our 10% cost of capital."**

Use IRR for screening and communication, but validate with NPV:

```
Step 1: Calculate IRR for screening
Step 2: Verify with NPV analysis
Step 3: If conflict, trust NPV
Step 4: Present both to client with explanation
```

### Private Equity IRR Usage

PE firms focus heavily on IRR because:
- Fund performance measured by IRR
- Limited partners compare fund IRRs
- IRR captures timing of returns

**But:** PE firms know this can be gamed:
- Subscription lines boost IRR (delays when capital counts)
- Earlier exits boost IRR (even if lower total return)

---

## CEO Application

### IRR for Board Presentations

Boards understand IRR intuitively:

```
"This acquisition generates a 25% IRR,
well above our 12% hurdle rate."

But supplement with NPV:
"This creates $50 million in value."
```

### Setting Hurdle Rates

| Project Type | Typical Hurdle | Rationale |
|--------------|---------------|-----------|
| Core business | WACC | Standard risk |
| Expansion | WACC + 2-3% | Execution risk |
| New markets | WACC + 5%+ | Higher risk |
| Acquisitions | Varies | Deal-specific |

### Portfolio IRR vs. Project IRR

**Portfolio IRR ≠ Average of Project IRRs**

```
Project A: $100 invested, $150 return in 1 year = 50% IRR
Project B: $900 invested, $1,080 return in 1 year = 20% IRR
Total: $1,000 invested, $1,230 return = 23% IRR (not 35%)
```

---

## Worked Example

### Comparing Projects

**Two mutually exclusive projects:**

| Year | Project A | Project B |
|------|-----------|-----------|
| 0 | ($500,000) | ($500,000) |
| 1 | $400,000 | $100,000 |
| 2 | $200,000 | $200,000 |
| 3 | $100,000 | $400,000 |

**IRR Calculation:**

Project A: IRR = 36%
Project B: IRR = 22%

**NPV at 10%:**

Project A:
```
NPV = -500 + 400/1.10 + 200/1.21 + 100/1.33
NPV = -500 + 364 + 165 + 75 = $104K
```

Project B:
```
NPV = -500 + 100/1.10 + 200/1.21 + 400/1.33
NPV = -500 + 91 + 165 + 301 = $57K
```

**Analysis:**
- IRR says: Choose A (36% > 22%)
- NPV says: Choose A ($104K > $57K)
- Same answer—but check at different rates!

**At 30%:**
```
A: NPV = -500 + 400/1.30 + 200/1.69 + 100/2.20
     = -500 + 308 + 118 + 45 = ($29K)

B: NPV = -500 + 100/1.30 + 200/1.69 + 400/2.20
     = -500 + 77 + 118 + 182 = ($123K)
```

Both negative at 30%. A is still better (less negative).

**Crossover rate:** Approximately 27%

**Conclusion:** A is better at any realistic discount rate. But always verify with NPV.

---

## Common Mistakes

### 1. Using IRR for Mutually Exclusive Projects
**Mistake:** Choosing higher IRR project automatically.
**Fix:** Always calculate NPV for mutually exclusive choices.

### 2. Ignoring Multiple IRRs
**Mistake:** Using first IRR Excel gives for non-conventional cash flows.
**Fix:** Check for sign changes; use NPV or MIRR instead.

### 3. IRR as "The" Return
**Mistake:** Assuming you actually earn the IRR.
**Fix:** Understand it's an implied rate assuming reinvestment at IRR.

### 4. Comparing Unequal Investment Sizes
**Mistake:** "40% IRR is better than 20% IRR."
**Fix:** Calculate NPV to see absolute value created.

### 5. Ignoring Time Horizon
**Mistake:** Comparing IRRs of different duration projects.
**Fix:** Consider total value and annualized returns properly.

---

## Key Takeaways

1. **IRR is the rate where NPV = 0** - Intuitive "return" measure
2. **Agrees with NPV for independent projects** - Accept if IRR > hurdle
3. **Can conflict with NPV for mutually exclusive** - Trust NPV
4. **Multiple IRRs possible** - When cash flows change sign multiple times
5. **Ignores scale** - Doesn't capture absolute value
6. **MIRR fixes reinvestment issue** - More realistic assumption
7. **Use IRR to screen, NPV to decide** - Complementary tools

---

## Practice Problems

### Problem 1: IRR Calculation
Calculate IRR:
- Year 0: ($200,000)
- Year 1: $80,000
- Year 2: $80,000
- Year 3: $80,000

If hurdle rate is 12%, should you accept?

### Problem 2: Multiple IRRs
Why might this project have multiple IRRs?
- Year 0: ($100,000)
- Year 1: $250,000
- Year 2: ($150,000)

### Problem 3: IRR vs. NPV Conflict
| | Project X | Project Y |
|---|----------|----------|
| Investment | $100K | $500K |
| Year 1 CF | $150K | $625K |
| IRR | 50% | 25% |

At 15% cost of capital, which should you choose? Why?

### Problem 4: MIRR
Calculate MIRR for:
- Year 0: ($500)
- Year 1: $200
- Year 2: $250
- Year 3: $300
- Cost of capital: 10%

---

*Next: [Payback Methods](05-payback-methods.md)*
