# Payback Methods

## Learning Objectives

- Calculate simple and discounted payback period
- Understand payback decision rules
- Recognize limitations of payback methods
- Know when payback is useful despite limitations
- Apply payback appropriately in practice

---

## Introduction

Payback period is the simplest capital budgeting method—and theoretically the weakest. It asks a basic question: "How long until I get my money back?"

Despite its flaws, payback remains widely used because:
1. It's intuitive and easy to communicate
2. It addresses liquidity concerns
3. It provides a simple risk screen
4. Executives understand it

Smart practitioners use payback as a secondary screen, not a primary decision tool.

---

## Core Concepts

### Simple Payback Period

**Definition:** Time required to recover initial investment from project cash flows.

```
Payback Period = Years until cumulative cash flow ≥ Initial Investment
```

### Simple Payback Calculation

**Example:**

| Year | Cash Flow | Cumulative CF |
|------|-----------|---------------|
| 0 | ($100,000) | ($100,000) |
| 1 | $30,000 | ($70,000) |
| 2 | $40,000 | ($30,000) |
| 3 | $50,000 | $20,000 |
| 4 | $40,000 | $60,000 |

Payback occurs in Year 3.

**Exact Calculation:**
```
Years to recover = 2 + ($30,000 / $50,000) = 2.6 years
```

### Payback Decision Rule

**For Independent Projects:**
- Accept if Payback ≤ Target Payback
- Reject if Payback > Target Payback

**Common Targets:**
- Conservative: 2-3 years
- Moderate: 3-5 years
- Aggressive: 5+ years

### Discounted Payback Period

**Definition:** Time required to recover initial investment from discounted cash flows.

```
Discounted Payback = Years until cumulative PV ≥ Initial Investment
```

**Same Example at 10% Discount Rate:**

| Year | Cash Flow | PV Factor | PV | Cumulative PV |
|------|-----------|-----------|-----|---------------|
| 0 | ($100,000) | 1.000 | ($100,000) | ($100,000) |
| 1 | $30,000 | 0.909 | $27,270 | ($72,730) |
| 2 | $40,000 | 0.826 | $33,040 | ($39,690) |
| 3 | $50,000 | 0.751 | $37,550 | ($2,140) |
| 4 | $40,000 | 0.683 | $27,320 | $25,180 |

**Discounted Payback:**
```
3 + ($2,140 / $27,320) = 3.08 years
```

**Simple Payback:** 2.6 years
**Discounted Payback:** 3.08 years

Discounted payback is always ≥ simple payback.

---

## Limitations of Payback

### 1. Ignores Time Value of Money (Simple Payback)

```
Project A: -$100, +$50, +$50, +$10
Project B: -$100, +$10, +$50, +$50

Both have 2-year payback.
But A is clearly better—cash comes earlier.

Simple payback treats $1 in Year 1 = $1 in Year 5.
```

### 2. Ignores Cash Flows After Payback

```
Project A: -$100, +$60, +$60, +$10
Project B: -$100, +$60, +$60, +$1,000

Both have same payback (~1.67 years).
But B is vastly superior (NPV much higher).

Payback ignores the $1,000 in Year 3.
```

### 3. Arbitrary Cutoff

```
Payback target = 3 years

Project A: Payback = 2.9 years, NPV = $10,000 → Accept
Project B: Payback = 3.1 years, NPV = $100,000 → Reject?

The cutoff is arbitrary and can lead to wrong decisions.
```

### 4. Doesn't Measure Value Creation

```
Payback tells you when you get money back.
It doesn't tell you how much value you create.

A 2-year payback could mean:
- NPV = -$50,000 (value destruction)
- NPV = +$50,000 (value creation)
- NPV = +$500,000 (major value creation)
```

### Summary of Limitations

| Method | Time Value | All Cash Flows | Value Measure |
|--------|-----------|----------------|---------------|
| Simple Payback | ✗ | ✗ | ✗ |
| Discounted Payback | ✓ | ✗ | ✗ |
| NPV | ✓ | ✓ | ✓ |

---

## When Payback IS Useful

### 1. Liquidity Screen

**Situation:** Company with limited cash needs fast recovery.

```
If you can't survive 5 years without the investment's cash returns,
a 5-year payback project could kill the company.
```

### 2. High Uncertainty Environment

**Situation:** Technology or market could change dramatically.

```
In rapidly changing industries (tech, retail),
long payback means high obsolescence risk.
Short payback reduces exposure to disruption.
```

### 3. Simple Communication

**Situation:** Explaining to non-financial stakeholders.

```
"This pays for itself in 18 months" is easier to understand
than "This has an NPV of $2.3 million at 10% WACC."
```

### 4. Quick Screening

**Situation:** Many small projects to evaluate.

```
Use payback as first screen:
1. If payback > 5 years → Reject (don't waste time on NPV)
2. If payback ≤ 5 years → Calculate NPV for decision
```

### 5. Agency/Gaming Concerns

**Situation:** Managers might manipulate long-term projections.

```
Distant cash flows are easier to inflate.
Payback forces attention on near-term cash.
Harder to game near-term projections.
```

---

## Consulting Application

### Payback in Client Conversations

**Use payback to:**
- Frame investment in intuitive terms
- Address client cash concerns
- Set expectations for results timeline

**Example Consulting Language:**
```
"This initiative pays back in 2.5 years.
After that, it generates $5M annually—
a $15M NPV over 10 years at your cost of capital."
```

### Payback Sensitivity

| Scenario | Payback | Status |
|----------|---------|--------|
| Base Case | 2.5 years | Within target |
| Revenue -20% | 3.8 years | Marginal |
| Revenue -30% | 5.2 years | Exceeds target |

**Insight:** Project is sensitive to revenue assumptions.

---

## CEO Application

### Payback as a Management Tool

**Setting Payback Targets by Risk:**

| Investment Type | Target Payback | Rationale |
|-----------------|---------------|-----------|
| Maintenance CapEx | N/A | Required regardless |
| Efficiency | 2 years | Low risk, fast return |
| Expansion | 3-4 years | Moderate risk |
| R&D | 5+ years | High uncertainty |
| Acquisitions | 4-5 years | Integration risk |

### Questions for Investment Proposals

1. **"What's the payback?"** - Basic risk screen
2. **"What happens after payback?"** - Ensure long-term value
3. **"What if payback takes 50% longer?"** - Stress test
4. **"What's the NPV?"** - Confirm value creation

### Balancing Short and Long Term

```
All 2-year payback projects → Short-term thinking, under-investment
All 7-year payback projects → Cash strain, high risk
Balanced portfolio → Mix of quick wins and strategic bets
```

---

## Worked Example

### Comparing Projects with Payback

**Three projects, $500K budget:**

| | Project A | Project B | Project C |
|---|----------|----------|----------|
| Investment | $500K | $500K | $500K |
| Year 1 | $200K | $100K | $300K |
| Year 2 | $200K | $100K | $200K |
| Year 3 | $150K | $150K | $100K |
| Year 4 | $100K | $200K | $50K |
| Year 5 | $50K | $400K | $50K |
| Total CF | $700K | $950K | $700K |

**Simple Payback:**

Project A: 2 + $100K/$150K = 2.67 years
Project B: 3 + $150K/$200K = 3.75 years
Project C: 1 + $200K/$200K = 2.0 years

**Payback Ranking:** C (2.0) > A (2.67) > B (3.75)

**NPV at 10%:**

Project A: NPV = $83K
Project B: NPV = $189K
Project C: NPV = $44K

**NPV Ranking:** B ($189K) > A ($83K) > C ($44K)

**Conflict!**
- Payback says C is best
- NPV says B is best

**Analysis:**
- C has fastest payback but lowest total value
- B has longest payback but highest total value
- Cash flows after payback make the difference

**Correct Decision:** Choose B if cash allows; use payback as secondary screen only.

---

## Common Mistakes

### 1. Using Payback as Primary Decision Criterion
**Mistake:** "Payback is less than 3 years, so we're good."
**Fix:** Always calculate NPV for final decision.

### 2. Ignoring Post-Payback Cash Flows
**Mistake:** Not considering what happens after payback.
**Fix:** View payback as risk metric, not value metric.

### 3. Arbitrary Payback Targets
**Mistake:** Using same payback target for all projects.
**Fix:** Adjust target based on project risk and type.

### 4. Confusing Simple and Discounted
**Mistake:** Using simple payback when discounted is more appropriate.
**Fix:** Use discounted payback for better time value consideration.

### 5. Over-Relying on Payback for Strategic Investments
**Mistake:** Rejecting strategic projects for long payback.
**Fix:** Strategic investments often have long payback—use NPV and options thinking.

---

## Key Takeaways

1. **Payback is intuitive** - Easy to understand and communicate
2. **Simple payback ignores TVM** - Treats all dollars equally
3. **Both versions ignore post-payback CF** - Major limitation
4. **Useful as screening tool** - Quick filter, not decision maker
5. **Addresses liquidity** - Important for cash-constrained firms
6. **Use with NPV** - Screen with payback, decide with NPV
7. **Adjust targets by risk** - More uncertainty = shorter target

---

## Practice Problems

### Problem 1: Simple Payback
Calculate simple payback:
- Investment: $80,000
- Year 1: $25,000
- Year 2: $30,000
- Year 3: $35,000
- Year 4: $20,000

### Problem 2: Discounted Payback
Calculate discounted payback at 12%:
- Investment: $100,000
- Annual cash flow: $30,000 for 5 years

### Problem 3: Payback vs. NPV
| | Project X | Project Y |
|---|----------|----------|
| Investment | $200K | $200K |
| Year 1-4 | $70K | $40K |
| Year 5 | $70K | $200K |

a) Calculate payback for each
b) Calculate NPV at 10%
c) Which should you choose and why?

### Problem 4: Payback Target Setting
Your company has:
- WACC: 12%
- Strong cash position
- Stable industry
- Growth opportunities available

What payback targets would you set for:
a) Equipment replacement
b) New product development
c) Geographic expansion

---

*Next: [Project Selection](06-project-selection.md)*
