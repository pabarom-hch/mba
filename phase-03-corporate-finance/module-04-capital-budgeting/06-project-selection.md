# Project Selection & Capital Rationing

## Learning Objectives

- Apply Profitability Index for project ranking
- Handle capital rationing situations
- Optimize capital allocation across projects
- Consider project interdependencies
- Make strategic project portfolio decisions

---

## Introduction

In theory, companies should accept all positive NPV projects. In reality, capital is limited. Firms face choices: Which projects to fund? How to allocate scarce capital? How to balance short-term results with long-term strategy?

This is where capital budgeting becomes capital allocation—the most important job of a CEO.

---

## Core Concepts

### Capital Rationing

**Definition:** When firms cannot or choose not to fund all positive NPV projects.

**Hard Rationing:**
- External: Cannot raise capital
- Debt covenants, market conditions, credit rating concerns

**Soft Rationing:**
- Internal: Management chooses to limit capital
- Budgets, approval processes, conservative philosophy

### Profitability Index (PI)

**Formula:**
```
PI = Present Value of Cash Flows / Initial Investment
PI = (NPV + Initial Investment) / Initial Investment
PI = 1 + (NPV / Initial Investment)
```

**Decision Rule:**
- PI > 1: Accept (NPV > 0)
- PI < 1: Reject (NPV < 0)
- PI = 1: Indifferent (NPV = 0)

**Example:**
```
Project: Investment $100,000, NPV = $25,000
PI = ($25,000 + $100,000) / $100,000 = 1.25

Or: PI = 1 + ($25,000/$100,000) = 1.25
```

### Why PI for Capital Rationing?

PI measures "bang per buck"—value created per dollar invested.

```
Project A: Investment $100,000, NPV = $30,000, PI = 1.30
Project B: Investment $500,000, NPV = $100,000, PI = 1.20

NPV says B is better ($100K > $30K)
PI says A is better (1.30 > 1.20)

With limited capital, PI helps optimize:
$500K on B = $100K value
$100K on A + $400K on other projects = potentially more value
```

---

## Project Ranking Methods

### Method 1: Rank by PI (Capital Constrained)

**Steps:**
1. Calculate PI for each project
2. Rank projects by PI (highest first)
3. Accept projects until budget exhausted

**Example:**

Budget: $300,000

| Project | Investment | NPV | PI | Rank |
|---------|-----------|-----|-----|------|
| A | $100,000 | $35,000 | 1.35 | 1 |
| B | $150,000 | $45,000 | 1.30 | 2 |
| C | $200,000 | $50,000 | 1.25 | 4 |
| D | $80,000 | $22,400 | 1.28 | 3 |

**Selection:**
```
A: $100K → Remaining budget: $200K
B: $150K → Remaining budget: $50K
D: $80K → Can't fit (need $80K, have $50K)
C: $200K → Can't fit

Accept A and B: Total NPV = $80,000
```

But wait—what if we skip B?
```
A: $100K → Remaining: $200K
C: $200K → Remaining: $0

Accept A and C: Total NPV = $85,000 ← Better!
```

**Lesson:** PI ranking gives good approximation, but check combinations.

### Method 2: Integer Programming (Optimal)

For perfect optimization:

```
Maximize: Σ (NPVᵢ × Xᵢ)
Subject to: Σ (Investmentᵢ × Xᵢ) ≤ Budget
Where: Xᵢ = 0 or 1 (accept or reject)
```

Use Excel Solver or optimization software.

### Method 3: NPV Rank (Unlimited Capital)

When capital is not constrained:
1. Rank by NPV
2. Accept all positive NPV projects

---

## Project Interdependencies

### Types of Interdependencies

**Mutually Exclusive:**
- Can only choose one (e.g., build in City A OR City B)
- Compare NPVs, choose highest

**Complementary:**
- Value of A increases if B is done
- NPV(A+B) > NPV(A) + NPV(B)
- Consider as combined project

**Substitute:**
- Doing A reduces value of B
- NPV(A+B) < NPV(A) + NPV(B)
- Account for interaction

**Contingent:**
- B can only be done if A is done
- Evaluate as sequential decision

### Handling Interdependencies

```
Example: Three related projects

Standalone NPVs:
A = $50K, B = $40K, C = $30K

Interactions:
A+B together: Additional synergy = $20K
B+C together: Cannibalization = ($15K)
A+B+C: Net interaction = $10K

Combined NPVs:
A only: $50K
A+B: $50K + $40K + $20K = $110K
A+C: $50K + $30K = $80K
A+B+C: $50K + $40K + $30K + $10K = $130K
```

Evaluate all feasible combinations.

---

## Multi-Period Capital Rationing

### The Carryover Problem

**Year 1 Budget:** $500K
**Year 2 Budget:** $600K

| Project | Y1 Invest | Y2 Invest | NPV |
|---------|----------|----------|-----|
| A | $300K | $100K | $80K |
| B | $200K | $400K | $70K |
| C | $400K | $0 | $60K |
| D | $0 | $500K | $50K |

Simple PI ranking doesn't work—must consider timing.

**Approach:**
- Linear programming with multi-period constraints
- Consider borrowing between periods if allowed

### Rolling Capital Budgets

In practice, companies use rolling forecasts:

```
Year 1: Committed projects + new approvals
Year 2: Tentative allocations
Year 3+: Strategic placeholders
```

---

## Strategic Considerations

### Beyond NPV: Strategic Value

Some projects have value not captured in NPV:

| Strategic Factor | Example |
|-----------------|---------|
| Option value | R&D opens future opportunities |
| Learning | First market entry builds capability |
| Competitive positioning | Preempt competitor |
| Ecosystem | Platform investments |
| Reputation | Sustainability initiatives |

### Portfolio Thinking

Balance across dimensions:

```
Risk: Mix of safe and risky projects
Timing: Mix of quick payback and long-term
Business unit: Don't over-concentrate
Type: Mix of maintenance, efficiency, growth
```

### The "Headquarters Tax"

Corporate overhead shouldn't be allocated to projects:
- Overhead is sunk for project decisions
- Only include incremental costs
- Allocating overhead distorts project selection

---

## Consulting Application

### Capital Allocation Review

Consulting framework for client capital allocation:

**Step 1: Inventory Current Projects**
- List all ongoing and proposed investments
- Categorize by type (growth, maintenance, regulatory, etc.)

**Step 2: Calculate Value Metrics**
- NPV, IRR, PI for each project
- Risk-adjusted returns

**Step 3: Portfolio Analysis**
```
| Quadrant | Action |
|----------|--------|
| High NPV, Low Risk | Fund fully |
| High NPV, High Risk | Fund selectively |
| Low NPV, Low Risk | Question necessity |
| Low NPV, High Risk | Reject |
```

**Step 4: Reallocation Recommendations**
- Identify underfunded high-value projects
- Identify projects to cut or scale back
- Optimize portfolio

### BCG Growth-Share Reimagined

Apply portfolio thinking to capital allocation:

```
Stars: Fund aggressively
Cash Cows: Fund selectively, harvest cash
Question Marks: Fund strategically or exit
Dogs: Minimize investment, consider exit
```

---

## CEO Application

### The CEO's Capital Allocation Role

Warren Buffett: "The most important decision a CEO makes is capital allocation."

**CEO Capital Allocation Questions:**
1. Are we funding our best opportunities?
2. Are we spreading capital too thin?
3. Are we over-investing in declining businesses?
4. Are we under-investing in future growth?
5. Should we return capital to shareholders?

### Capital Allocation Framework

| Option | When Appropriate |
|--------|-----------------|
| Organic investment | High-ROIC opportunities exist |
| Acquisitions | Strategic assets available at fair price |
| Dividends | Stable cash flows, limited growth |
| Buybacks | Stock undervalued |
| Debt paydown | Overleveraged, rates rising |

### Common CEO Mistakes

1. **Spreading evenly** - "Every division gets 10% increase"
2. **Funding legacy** - Continuing to invest in declining businesses
3. **Starving growth** - Underinvesting in emerging opportunities
4. **No reallocation** - Same allocation year after year
5. **Analysis paralysis** - Taking too long to decide

---

## Worked Example

### Annual Capital Budget

**Situation:** $2 million capital budget, 6 projects proposed

| Project | Investment | NPV | IRR | PI | Payback | Strategic Value |
|---------|-----------|-----|-----|-----|---------|-----------------|
| New Product | $800K | $200K | 18% | 1.25 | 3.5 yrs | High |
| Efficiency | $400K | $120K | 25% | 1.30 | 2.0 yrs | Low |
| Expansion | $600K | $180K | 22% | 1.30 | 3.0 yrs | Medium |
| IT Upgrade | $500K | $100K | 15% | 1.20 | 4.0 yrs | Medium |
| Safety Req. | $300K | $0 | N/A | 1.00 | N/A | Required |
| R&D | $700K | $50K | 12% | 1.07 | 5.0 yrs | Very High |

**Analysis:**

Required: Safety ($300K) - Must do
Remaining budget: $1.7M

Rank by PI:
1. Efficiency: PI = 1.30 ($400K)
2. Expansion: PI = 1.30 ($600K)
3. New Product: PI = 1.25 ($800K)
4. IT Upgrade: PI = 1.20 ($500K)
5. R&D: PI = 1.07 ($700K)

**Pure PI Selection:**
```
Safety: $300K (required)
Efficiency: $400K → $1.3M remaining
Expansion: $600K → $700K remaining
New Product: $800K → Doesn't fit
IT Upgrade: $500K → $200K remaining
R&D: $700K → Doesn't fit

Selected: Safety + Efficiency + Expansion + IT
Total NPV: $0 + $120K + $180K + $100K = $400K
```

**Alternative (skip IT, do New Product):**
```
Safety: $300K
Efficiency: $400K → $1.3M remaining
Expansion: $600K → $700K remaining
New Product: $800K → Doesn't fit
Hmm, same problem.
```

**Alternative (skip Expansion):**
```
Safety: $300K
Efficiency: $400K → $1.3M remaining
New Product: $800K → $500K remaining
IT Upgrade: $500K → $0 remaining

Total NPV: $0 + $120K + $200K + $100K = $420K ← Better!
```

**But what about R&D's strategic value?**

```
Safety: $300K
Efficiency: $400K
R&D: $700K → $600K remaining
Expansion: $600K → $0 remaining

Total NPV: $0 + $120K + $50K + $180K = $350K

NPV lower, but R&D has "Very High" strategic value.
```

**Recommendation:**
- Accept: Safety, Efficiency, New Product, IT ($420K NPV)
- Consider: Deferring Expansion, adding R&D if strategic value justifies
- Final decision requires qualitative judgment on R&D upside

---

## Common Mistakes

### 1. Using NPV Rank Under Capital Constraints
**Mistake:** Choosing highest NPV projects regardless of investment size.
**Fix:** Use PI to rank when capital is limited.

### 2. Ignoring Project Interactions
**Mistake:** Evaluating projects independently when they interact.
**Fix:** Model synergies and cannibalization explicitly.

### 3. Funding All Business Units Equally
**Mistake:** "Democratic" capital allocation.
**Fix:** Allocate to highest return opportunities regardless of source.

### 4. Ignoring Strategic Projects
**Mistake:** Rejecting low-NPV projects with strategic value.
**Fix:** Quantify option value or apply strategic screens.

### 5. Sunk Cost Bias in Continuation
**Mistake:** Continuing projects because of prior investment.
**Fix:** Evaluate continuation on incremental merits only.

---

## Key Takeaways

1. **Capital rationing is common** - Most firms can't fund everything
2. **PI measures efficiency** - Value per dollar invested
3. **NPV for unlimited capital** - Accept all positive NPV
4. **PI for limited capital** - Rank by efficiency
5. **Check combinations** - PI ranking is approximation
6. **Consider interdependencies** - Projects aren't independent
7. **Balance quantitative and strategic** - NPV isn't everything

---

## Practice Problems

### Problem 1: PI Ranking
Budget: $500K

| Project | Investment | NPV |
|---------|-----------|-----|
| A | $200K | $60K |
| B | $250K | $50K |
| C | $150K | $45K |
| D | $100K | $25K |

Rank by PI and select optimal combination.

### Problem 2: Interdependent Projects
Projects A, B, C each cost $100K with standalone NPVs of $30K.
A+B synergy adds $15K NPV.
B+C cannibalization subtracts $10K NPV.

Budget: $200K. Which projects should you choose?

### Problem 3: Multi-Period
Year 1 budget: $400K, Year 2 budget: $300K

| Project | Y1 Cost | Y2 Cost | NPV |
|---------|---------|---------|-----|
| X | $200K | $100K | $80K |
| Y | $150K | $200K | $70K |
| Z | $250K | $0 | $60K |

Which projects should you accept?

---

*Next: [Risk Analysis](07-risk-analysis.md)*
