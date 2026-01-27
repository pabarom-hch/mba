# Real Options

## Learning Objectives

- Understand how flexibility creates value
- Identify common types of real options
- Apply real options thinking to investment decisions
- Recognize when real options analysis is valuable
- Incorporate optionality into capital budgeting

---

## Introduction

Traditional NPV assumes you make a decision and live with it. Reality is different: you can expand if things go well, abandon if they don't, delay until uncertainty resolves. This flexibility has value—often substantial value—that NPV ignores.

Real options thinking recognizes that managerial flexibility is like owning financial options. The ability to adapt creates value that should inform investment decisions.

---

## Core Concepts

### The NPV Limitation

**Traditional NPV assumes:**
- Invest now or never
- Fixed plan once started
- No response to new information

**Reality:**
- Can delay investment
- Can expand or contract
- Can abandon projects
- Can switch inputs/outputs
- Can stage investments

### What Are Real Options?

**Real options** are opportunities to make future decisions that affect the value of current investments.

```
Option Value = Value with Flexibility - Value without Flexibility
```

**Key insight:** Uncertainty + flexibility = value. If there's no uncertainty, there's no option value.

### Types of Real Options

| Option Type | Description | Financial Analog |
|-------------|-------------|------------------|
| Delay/Timing | Wait to invest | Call option |
| Expand | Scale up if successful | Call option |
| Contract | Scale down if poor results | Put option |
| Abandon | Shut down and recover salvage | Put option |
| Switch | Change inputs/outputs | Portfolio of options |
| Growth | Invest in future opportunities | Sequential calls |

---

## Option to Delay

### When to Use

Delay is valuable when:
- Uncertainty will resolve over time
- Investment is irreversible
- No competitive urgency

### Example

**Now or Later Decision:**

| | Invest Now | Wait 1 Year |
|---|-----------|-------------|
| Cost | $10M | $10M |
| PV if success | $15M | $20M |
| PV if failure | $6M | $6M |
| Prob success | 50% | Known by then |

**Invest Now:**
```
NPV = 0.5($15M) + 0.5($6M) - $10M = $0.5M
```

**Wait:**
```
If success is revealed: Invest, get $20M - $10M = $10M
If failure is revealed: Don't invest, get $0
NPV of waiting = 0.5($10M) + 0.5($0) = $5M
Discounted: $5M / 1.1 = $4.5M
```

**Option value of delay = $4.5M - $0.5M = $4M**

Waiting is dramatically better because you can avoid the losing scenario.

---

## Option to Expand

### When to Use

Expansion option valuable when:
- Initial investment opens future opportunities
- Upside potential is significant
- Expansion decision can be deferred

### Example

**Pilot Project:**

| | Pilot Only | Full Scale |
|---|-----------|------------|
| Investment | $2M | $10M |
| PV success | $4M | $25M |
| PV failure | $1M | $5M |
| Probability | Unknown | |

**Without Option (Commit to Full Scale Now):**
```
E(NPV) = 0.5($25M - $10M) + 0.5($5M - $10M)
E(NPV) = $7.5M - $2.5M = $5M
```

**With Option (Pilot First, Then Decide):**
```
Pilot NPV = 0.5($4M - $2M) + 0.5($1M - $2M) = $0.5M

If pilot succeeds: Expand for NPV = $25M - $10M = $15M
If pilot fails: Don't expand

E(NPV) = $0.5M + 0.5($15M) + 0.5($0) = $8M
```

**Option value = $8M - $5M = $3M**

The option to wait and see adds $3M in value.

---

## Option to Abandon

### When to Use

Abandonment option valuable when:
- Salvage value exists
- Downside is significant
- Exit is feasible

### Example

**Project with Salvage:**
- Investment: $5M
- Success (50%): PV = $10M
- Failure (50%): PV = $2M
- Salvage value if abandoned: $3M

**Without Abandonment:**
```
NPV = 0.5($10M - $5M) + 0.5($2M - $5M)
NPV = $2.5M - $1.5M = $1M
```

**With Abandonment Option:**
```
Success: Continue, value = $10M - $5M = $5M
Failure: Abandon, value = $3M - $5M = ($2M)
[Better than continuing at $2M - $5M = ($3M)]

NPV = 0.5($5M) + 0.5(-$2M) = $1.5M
```

**Option value = $1.5M - $1M = $0.5M**

---

## Option to Switch

### When to Use

Switching option valuable when:
- Multiple inputs or outputs possible
- Relative prices/demands volatile
- Switching costs are manageable

### Example

**Flexible Manufacturing:**

| | Dedicated Line | Flexible Line |
|---|---------------|---------------|
| Investment | $8M | $10M |
| Product A PV | $12M | $12M |
| Product B PV | $8M | $8M |

If demand can shift between products:

**Dedicated (Product A only):**
```
NPV = $12M - $8M = $4M (if demand stays with A)
NPV = $0 - $8M = ($8M) (if demand shifts to B)
E(NPV) = 0.5($4M) + 0.5(-$8M) = ($2M)
```

**Flexible:**
```
Can always make higher-value product
NPV = 0.5($12M - $10M) + 0.5($8M - $10M) = $0

Wait—that's not right. With flexibility:
Always make max($12M, $8M) = $12M
NPV = $12M - $10M = $2M
```

**Option value = $2M - (-$2M) = $4M**

---

## Growth Options

### Concept

**Early investments create rights to future investments.**

R&D, pilots, market entry = purchasing options on future growth.

### Example

**Platform Investment:**

| Phase | Investment | Standalone NPV |
|-------|-----------|---------------|
| Platform | $5M | ($2M) |
| Product A | $3M | $6M |
| Product B | $4M | $8M |
| Product C | $5M | $10M |

**Traditional Analysis:**
```
Platform NPV = ($2M) → Reject
```

**Growth Options Analysis:**
```
Platform enables Products A, B, C.
If any succeed, platform is necessary.

Total NPV if all products launched:
= ($2M) + $6M + $8M + $10M = $22M

But: Products are options, not commitments.
Platform is cost of acquiring those options.
```

**Decision Rule:** Launch platform if option value of A+B+C exceeds $2M cost.

---

## Valuation Approaches

### Decision Tree Analysis

**For discrete outcomes:**

```
                    Success (60%)
                   → Expand: NPV = $15M
Initial          /
Investment     /
($5M)       \
              \→ Failure (40%)
                   → Abandon: NPV = ($2M)

E(NPV) = 0.6($15M) + 0.4(-$2M) = $8.2M
```

### Black-Scholes Adaptation

**For continuous outcomes:**

Real option value ≈ Call option value

```
Inputs needed:
S = Present value of project cash flows
K = Investment cost
T = Time until decision
σ = Volatility of project value
r = Risk-free rate
```

**Practical limitation:** Hard to estimate volatility of project value.

### Simulation Approach

**Combine Monte Carlo with decision rules:**

```
For each iteration:
1. Simulate project outcomes
2. Apply optimal decision at each node
3. Calculate resulting NPV

Average across iterations = Option-adjusted NPV
```

---

## Consulting Application

### When to Apply Real Options

**High Value Situations:**
- High uncertainty
- Significant flexibility exists
- Long time horizon
- Decisions are sequential

**Low Value Situations:**
- Low uncertainty
- Commitment required
- Short time horizon
- All-or-nothing decision

### Communicating Real Options

**Instead of:**
"NPV is negative, don't invest."

**Say:**
"Standalone NPV is negative, but this creates options worth considering:
1. Option to expand if initial results are positive
2. Option to abandon with $3M salvage
3. Option to enter adjacent markets
4. Estimated option value: $2-5M"

---

## CEO Application

### Strategic Real Options

| Strategic Move | Option Type | Value Driver |
|---------------|-------------|--------------|
| R&D investment | Growth option | Future products |
| Small acquisition | Growth option | Access to market |
| Pilot program | Expand option | Learn before commit |
| Flexible capacity | Switch option | Respond to demand |
| Phased expansion | Staging option | Reduce risk |

### Real Options Mindset

**Traditional Thinking:**
"NPV is negative, don't invest."

**Real Options Thinking:**
"What future decisions does this enable?"
"What's the value of learning?"
"Can we structure for more flexibility?"

### Questions to Ask

1. **"Can we stage this?"** - Phase investments to reduce risk
2. **"What do we learn?"** - Information value
3. **"What future opportunities does this create?"** - Growth options
4. **"Can we get out if wrong?"** - Abandonment value
5. **"Can we scale up if right?"** - Expansion option

---

## Worked Example

### Biotech Drug Development

**Project:** New drug development

**Stage 1: Preclinical ($10M)**
- Success probability: 40%
- If fail: Project ends

**Stage 2: Phase I ($30M)**
- Success probability: 60%
- If fail: Project ends

**Stage 3: Phase II/III ($100M)**
- Success probability: 50%
- If succeed: Drug worth $500M

**Traditional NPV (All-at-Once):**
```
E(Value) = 0.4 × 0.6 × 0.5 × $500M = $60M
Total Investment = $10M + $30M + $100M = $140M
NPV = $60M - $140M = ($80M)

Traditional analysis: Reject
```

**Real Options Analysis:**

```
Work backwards:

Stage 3: Invest $100M if you reach this point
E(Value) = 0.5 × $500M = $250M
NPV at Stage 3 decision = $250M - $100M = $150M
→ Worth doing if you get here

Stage 2: Invest $30M to get option on Stage 3
E(Value) = 0.6 × $150M = $90M
NPV at Stage 2 decision = $90M - $30M = $60M
→ Worth doing if you get here

Stage 1: Invest $10M to get option on Stage 2
E(Value) = 0.4 × $60M = $24M
NPV at Stage 1 decision = $24M - $10M = $14M
→ Worth doing!
```

**Option value = $14M - (-$80M) = $94M**

The staged structure transforms a "terrible" investment into a good one!

---

## Common Mistakes

### 1. Ignoring Options in NPV
**Mistake:** Using traditional NPV when significant options exist.
**Fix:** At minimum, qualitatively acknowledge option value.

### 2. Double-Counting
**Mistake:** Adding option value to already risk-adjusted NPV.
**Fix:** Be consistent—adjust once, not twice.

### 3. Overvaluing Options
**Mistake:** Assuming all flexibility can be exercised.
**Fix:** Consider practical constraints on exercising options.

### 4. Creating Options That Don't Exist
**Mistake:** Assuming you can delay when competitors won't wait.
**Fix:** Be realistic about actual flexibility.

### 5. Analysis Paralysis
**Mistake:** Complex option modeling without decision.
**Fix:** Options thinking can be qualitative—doesn't always need math.

---

## Key Takeaways

1. **Flexibility has value** - NPV understates projects with options
2. **Uncertainty + flexibility = option value** - No uncertainty, no option
3. **Common options** - Delay, expand, abandon, switch, growth
4. **Stage investments** - Creates options, reduces risk
5. **Options can flip decisions** - Negative NPV can become positive
6. **Think strategically** - Early investments can be option purchases
7. **Don't over-engineer** - Qualitative thinking often sufficient

---

## Practice Problems

### Problem 1: Delay Option
Investment: $5M, Value if high demand: $8M, Value if low demand: $3M. Probability 50/50. You can wait one year and demand will be revealed. Risk-free rate 5%. Should you invest now or wait?

### Problem 2: Abandonment Option
Investment: $10M, Success (60%): PV = $20M, Failure (40%): PV = $4M. Salvage if abandoned = $6M. What is the abandonment option worth?

### Problem 3: Staged Investment
Project requires $2M pilot, then $8M full launch.
- Pilot reveals demand: High (40%), Medium (30%), Low (30%)
- Full launch PV: High = $20M, Medium = $10M, Low = $5M

Calculate value with and without staging option.

### Problem 4: Growth Option
Platform investment: $3M with NPV = ($1M).
Enables three future products, each worth $5M NPV if launched.
Probability of launching at least one: 70%.
Should you invest in the platform?

---

*Congratulations on completing the Capital Budgeting module! Now test your knowledge with the [Assessment](assessment.md) and apply your learning with the [Cases](cases/).*

*Next: [Module 5: Cost of Capital](../module-05-cost-of-capital/README.md)*
