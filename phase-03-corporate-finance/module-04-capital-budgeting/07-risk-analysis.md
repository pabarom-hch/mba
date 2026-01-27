# Risk Analysis in Capital Budgeting

## Learning Objectives

- Apply sensitivity analysis to identify key value drivers
- Conduct scenario analysis for project evaluation
- Use Monte Carlo simulation for complex uncertainty
- Understand break-even analysis
- Incorporate risk into capital budgeting decisions

---

## Introduction

Every NPV calculation is based on assumptions. But assumptions are uncertain—revenue might be higher or lower, costs might escalate, timing might slip. Risk analysis helps you understand: "How wrong can we be and still create value?"

The goal isn't to predict the future perfectly. It's to understand the range of outcomes and make informed decisions under uncertainty.

---

## Core Concepts

### Types of Project Risk

**Stand-Alone Risk:**
- Project risk in isolation
- Measured by volatility of project returns
- What we analyze in this section

**Corporate Risk:**
- Project's contribution to firm-wide risk
- Reduced by diversification within firm

**Market (Systematic) Risk:**
- Project's contribution to investor portfolio risk
- Only risk that matters in theory (CAPM)
- Reflected in cost of capital

### Framework for Risk Analysis

```
Level 1: Sensitivity Analysis
- One variable at a time
- Identify key drivers
- Simple to implement

Level 2: Scenario Analysis
- Multiple variables simultaneously
- Coherent stories
- Manageable number of cases

Level 3: Monte Carlo Simulation
- All variables vary probabilistically
- Thousands of scenarios
- Requires distribution assumptions
```

---

## Sensitivity Analysis

### Concept

**Change one variable while holding others constant.**

Test: "How sensitive is NPV to changes in each assumption?"

### Process

1. Identify key variables
2. Define range for each variable (e.g., ±20%)
3. Calculate NPV at each extreme
4. Identify variables with greatest impact

### Example

**Base Case:**
- Investment: $1,000K
- Revenue: $500K/year
- Variable Cost: 60% of revenue
- Fixed Cost: $80K/year
- Life: 5 years
- Discount rate: 10%

**Base NPV = $159K**

| Variable | Base | Low | High | NPV (Low) | NPV (High) | Range |
|----------|------|-----|------|-----------|------------|-------|
| Revenue | $500K | $400K | $600K | $7K | $310K | $303K |
| Variable Cost % | 60% | 55% | 65% | $254K | $63K | $191K |
| Fixed Cost | $80K | $60K | $100K | $219K | $98K | $121K |
| Discount Rate | 10% | 8% | 12% | $204K | $118K | $86K |

**Key Insight:** Revenue is the most critical variable (highest NPV range).

### Tornado Diagram

Visualize sensitivity:

```
Revenue        ████████████████████████████████████ $303K range
Variable Cost  ██████████████████████ $191K range
Fixed Cost     ███████████████ $121K range
Discount Rate  ██████████ $86K range
               ←────── More Sensitive ──────→
```

---

## Scenario Analysis

### Concept

**Multiple variables change together in coherent scenarios.**

Unlike sensitivity analysis, variables move simultaneously in realistic combinations.

### Common Scenarios

| Scenario | Description | Probability |
|----------|-------------|-------------|
| Base Case | Most likely outcome | 50% |
| Optimistic | Strong demand, favorable costs | 25% |
| Pessimistic | Weak demand, cost overruns | 25% |

### Example

**New Manufacturing Plant:**

| Variable | Base | Optimistic | Pessimistic |
|----------|------|------------|-------------|
| Units Sold | 100,000 | 130,000 | 70,000 |
| Price | $50 | $55 | $45 |
| Variable Cost | $30 | $28 | $35 |
| Fixed Cost | $1M | $900K | $1.2M |
| Investment | $5M | $4.5M | $5.5M |

**NPV Results:**
- Optimistic: $2.5M
- Base: $800K
- Pessimistic: ($600K)

**Expected NPV:**
```
E(NPV) = 0.25 × $2,500K + 0.50 × $800K + 0.25 × ($600K)
E(NPV) = $625K + $400K - $150K = $875K
```

**Decision:** Expected NPV positive, but 25% chance of value destruction.

### Interpreting Scenarios

| Result | Implication |
|--------|------------|
| All scenarios positive | Strong investment |
| Base positive, pessimistic negative | Proceed with caution |
| Base negative | Likely reject unless upside compelling |
| Wide range | High uncertainty, consider real options |

---

## Monte Carlo Simulation

### Concept

**Model all variables as probability distributions, run thousands of iterations.**

Results in distribution of possible NPVs, not single point estimate.

### Process

1. Identify uncertain variables
2. Define probability distribution for each
3. Generate random draws from distributions
4. Calculate NPV for each iteration
5. Analyze distribution of NPVs

### Distribution Types

| Distribution | Use When |
|--------------|----------|
| Normal | Symmetric around mean |
| Triangular | Know min, max, most likely |
| Uniform | Equal probability in range |
| Lognormal | Positive values, right skewed |

### Example Setup

```
Revenue: Normal, μ = $500K, σ = $50K
Costs: Normal, μ = $300K, σ = $30K
Growth: Triangular, min = 0%, mode = 3%, max = 8%
Correlation: Revenue and Costs = 0.5
```

### Simulation Results

After 10,000 iterations:

```
Mean NPV: $165K
Median NPV: $155K
Standard Deviation: $180K
5th Percentile: ($150K)
95th Percentile: $480K
Probability NPV < 0: 18%
```

### Interpreting Results

**Key Outputs:**
- **Mean/Median NPV** - Expected value
- **Probability of loss** - Risk of value destruction
- **Confidence interval** - Range of likely outcomes
- **Value at Risk** - Worst case at given confidence

---

## Break-Even Analysis

### Types of Break-Even

**Accounting Break-Even:**
```
Units where Net Income = 0

Units = (Fixed Costs + Depreciation) / (Price - Variable Cost)
```

**Cash Break-Even:**
```
Units where Operating Cash Flow = 0

Units = Fixed Costs / (Price - Variable Cost)
```

**Financial Break-Even:**
```
Units where NPV = 0

Calculated by finding sales level that generates NPV = 0
```

### Example

**Project Data:**
- Investment: $500K (depreciated over 5 years)
- Fixed costs: $100K/year
- Price: $50
- Variable cost: $30
- Tax rate: 25%
- Required return: 10%

**Accounting Break-Even:**
```
Units = ($100K + $100K) / ($50 - $30)
Units = $200K / $20 = 10,000 units
```

**Cash Break-Even:**
```
Units = $100K / ($50 - $30)
Units = 5,000 units
```

**Financial Break-Even:**
```
Find sales where NPV = 0

Required annual cash flow (to earn 10% on $500K):
$500K / PVIFA(10%, 5) = $500K / 3.791 = $132K/year

Pre-tax cash needed: $132K / 0.75 = $176K
Plus fixed costs: $176K + $100K = $276K

Units = $276K / $20 = 13,800 units
```

**Insight:** Must sell 13,800 units to create value, even though accounting breakeven is 10,000.

---

## Consulting Application

### Risk Analysis Framework

**McKinsey's Risk Assessment:**

1. **Identify risks** - What could go wrong?
2. **Quantify impact** - How bad could it be?
3. **Assess probability** - How likely?
4. **Develop mitigation** - How to reduce?
5. **Monitor triggers** - Early warning signs?

### Presenting Risk to Clients

```
"This investment has an expected NPV of $2M.
In 80% of scenarios, NPV ranges from $500K to $4M.
The key risk is volume—if sales fall 20% below forecast,
NPV turns negative. We recommend a staged approach
to mitigate this risk."
```

### Risk Matrix

| Impact | Low Probability | High Probability |
|--------|----------------|------------------|
| High | Monitor | Mitigate |
| Low | Accept | Reduce |

---

## CEO Application

### Risk Questions for Investment Proposals

1. **"What kills this project?"** - Identify fatal assumptions
2. **"How confident are we in revenue?"** - Usually most sensitive
3. **"What's the downside case?"** - Worst realistic outcome
4. **"Can we reduce risk?"** - Staging, contracts, hedging
5. **"What's the bail-out option?"** - Exit strategy if wrong

### Risk Tolerance by Investment Type

| Type | Risk Tolerance | Rationale |
|------|---------------|-----------|
| Maintenance | Low | Must work, essential |
| Efficiency | Low-Medium | Based on proven technology |
| Expansion | Medium | Execution risk |
| New market | Medium-High | Market uncertainty |
| R&D | High | Expected to fail often |

### Portfolio Risk

Don't evaluate projects in isolation:
- Diversification reduces company risk
- Correlation between projects matters
- Some risk-taking is necessary for growth

---

## Worked Example

### Complete Risk Analysis

**Project:** Launch new product line

**Base Case Assumptions:**

| Variable | Base | Min | Max |
|----------|------|-----|-----|
| Year 1 Sales (units) | 50,000 | 30,000 | 70,000 |
| Price | $100 | $85 | $115 |
| Variable Cost | $60 | $55 | $70 |
| Fixed Costs | $1M | $800K | $1.2M |
| Investment | $3M | $2.5M | $3.5M |

**Discount rate:** 12%, **Life:** 5 years, **Growth:** 5%/year

**Base Case NPV:**
```
Year 1: (50,000 × $40 - $1M) × 0.75 = $1.125M after-tax
[Growing at 5% annually]

NPV ≈ $1.2M
```

**Sensitivity Analysis:**

| Variable | -20% NPV | +20% NPV | Range |
|----------|----------|----------|-------|
| Sales Volume | $200K | $2.2M | $2.0M |
| Price | ($300K) | $2.7M | $3.0M |
| Variable Cost | $2.0M | $400K | $1.6M |
| Fixed Cost | $1.8M | $600K | $1.2M |

**Key Drivers:** Price and sales volume are critical.

**Scenario Analysis:**

| Scenario | Sales | Price | VC | FC | NPV |
|----------|-------|-------|----|----|-----|
| Base | 50K | $100 | $60 | $1M | $1.2M |
| Optimistic | 65K | $110 | $55 | $900K | $3.8M |
| Pessimistic | 35K | $90 | $70 | $1.1M | ($1.5M) |

**Expected NPV = 0.25(3.8) + 0.50(1.2) + 0.25(-1.5) = $1.18M**

**Break-Even:**
```
Financial break-even ≈ 38,000 units at base price
```

**Recommendation:**
- Expected NPV is positive ($1.18M)
- But 25% probability of $1.5M loss
- Break-even at 38K units vs. base case 50K
- Consider staging: launch in limited market first
- Negotiate flexible supply contracts to reduce VC risk

---

## Common Mistakes

### 1. Only Running Base Case
**Mistake:** Presenting single NPV without ranges.
**Fix:** Always include sensitivity and scenario analysis.

### 2. Optimistic Bias
**Mistake:** Pessimistic case isn't truly pessimistic.
**Fix:** Use outside view—what happened to similar projects?

### 3. Ignoring Correlations
**Mistake:** Treating variables as independent.
**Fix:** In scenario analysis, move correlated variables together.

### 4. Analysis Paralysis
**Mistake:** Endless risk analysis without decision.
**Fix:** Risk analysis informs decisions; doesn't make them.

### 5. Ignoring Mitigation Options
**Mistake:** Analyzing risk without considering how to reduce it.
**Fix:** Include risk mitigation strategies in recommendation.

---

## Key Takeaways

1. **NPV is uncertain** - Based on assumptions that may be wrong
2. **Sensitivity analysis** - Identifies key value drivers
3. **Scenario analysis** - Tests coherent alternative futures
4. **Simulation** - Provides probability distribution of outcomes
5. **Break-even** - Shows minimum required for value creation
6. **Financial break-even > Accounting** - NPV=0 requires more than profit=0
7. **Use multiple methods** - Each provides different insights

---

## Practice Problems

### Problem 1: Sensitivity
Base NPV = $500K with revenue = $1M. If ±10% revenue change causes NPV to range from $200K to $800K, what is the sensitivity?

### Problem 2: Scenario Analysis
| Scenario | Probability | NPV |
|----------|-------------|-----|
| Strong | 30% | $2M |
| Moderate | 50% | $500K |
| Weak | 20% | ($1M) |

Calculate expected NPV. Would you invest?

### Problem 3: Break-Even
- Investment: $400K (4-year life, straight-line depreciation)
- Fixed costs: $50K/year
- Contribution margin: $25/unit
- Tax rate: 25%
- Required return: 10%

Calculate financial break-even.

---

*Next: [Real Options](08-real-options.md)*
