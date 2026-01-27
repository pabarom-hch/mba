# Project-Specific Cost of Capital

## Learning Objectives

- Understand why company WACC isn't always appropriate
- Calculate divisional cost of capital using pure-play betas
- Adjust for project-specific risk
- Apply risk premiums appropriately
- Avoid common errors in risk adjustment

---

## Introduction

A company's WACC reflects the average risk of its existing operations. But new projects or business units may have very different risk profiles. Using company WACC for all projects leads to systematic errors: rejecting good low-risk projects and accepting bad high-risk ones.

Sophisticated capital allocation requires project-specific discount rates.

---

## Core Concepts

### The Problem with Company WACC

**Consider a diversified company:**
```
Division A: Utilities (low risk)
Division B: Manufacturing (average risk)
Division C: Tech ventures (high risk)

Company WACC: 10%

If used for all divisions:
- Utilities projects at 8% return → Rejected (but actually good!)
- Tech projects at 11% return → Accepted (but actually bad!)
```

**The Result:**
- Over-invest in high-risk areas
- Under-invest in low-risk areas
- Destroy value through misallocation

### Risk-Adjusted Discount Rates

**Principle:** Match discount rate to project risk.

```
                        Discount Rate
High-risk projects      Company WACC + Premium
Average-risk projects   Company WACC
Low-risk projects       Company WACC - Discount
```

### Pure-Play Beta Approach

**Method:** Find comparable pure-play companies and use their betas.

**Steps:**
1. Identify pure-play comparables
2. Calculate their betas
3. Unlever their betas
4. Average the unlevered betas
5. Relever to project capital structure
6. Calculate CAPM cost of equity
7. Calculate project WACC

---

## Pure-Play Beta Calculation

### Step-by-Step Example

**Situation:** Manufacturing company evaluating solar energy project.

**Step 1: Identify Pure-Play Comparables**
```
Solar companies:
- SunPower Corp
- First Solar Inc
- Enphase Energy
- SolarEdge Technologies
```

**Step 2: Gather Data**

| Company | Equity β | D/E | Tax Rate |
|---------|----------|-----|----------|
| SunPower | 1.80 | 0.50 | 25% |
| First Solar | 1.60 | 0.20 | 25% |
| Enphase | 2.00 | 0.30 | 25% |
| SolarEdge | 1.90 | 0.25 | 25% |

**Step 3: Unlever Betas**
```
βU = βL / [1 + (1-T) × D/E]

SunPower: βU = 1.80 / [1 + 0.75 × 0.50] = 1.31
First Solar: βU = 1.60 / [1 + 0.75 × 0.20] = 1.39
Enphase: βU = 2.00 / [1 + 0.75 × 0.30] = 1.64
SolarEdge: βU = 1.90 / [1 + 0.75 × 0.25] = 1.59

Average βU = 1.48
```

**Step 4: Relever to Project Capital Structure**
```
Project target D/E: 0.40

βL = βU × [1 + (1-T) × D/E]
βL = 1.48 × [1 + 0.75 × 0.40]
βL = 1.48 × 1.30
βL = 1.92
```

**Step 5: Calculate Project Cost of Equity**
```
rf = 4%, ERP = 5.5%

re = 4% + 1.92 × 5.5%
re = 4% + 10.6%
re = 14.6%
```

**Step 6: Calculate Project WACC**
```
D/E = 0.40
D/V = 0.40 / 1.40 = 28.6%
E/V = 1.00 / 1.40 = 71.4%
rd = 7% (project-specific rate)

WACC = (71.4% × 14.6%) + (28.6% × 7% × 0.75)
WACC = 10.4% + 1.5%
WACC = 11.9%
```

**Compare to Company WACC of 9%**
The solar project should be evaluated at ~12%, not 9%.

---

## Divisional Cost of Capital

### Multi-Division Companies

**Example: ConglomerateCo**

| Division | Revenue | βU (from pure-plays) |
|----------|---------|---------------------|
| Consumer Products | 40% | 0.9 |
| Industrial | 35% | 1.1 |
| Technology | 25% | 1.5 |

**Company Unlevered Beta:**
```
βU,company = 0.40 × 0.9 + 0.35 × 1.1 + 0.25 × 1.5
           = 0.36 + 0.39 + 0.38
           = 1.13
```

**Division-Specific WACCs:**
```
Assume common D/E = 0.30, T = 25%, rf = 4%, ERP = 5.5%, rd = 5%

Consumer Products:
βL = 0.9 × [1 + 0.75 × 0.30] = 1.10
re = 4% + 1.10 × 5.5% = 10.1%
WACC = (76.9% × 10.1%) + (23.1% × 5% × 0.75) = 8.6%

Industrial:
βL = 1.1 × [1 + 0.75 × 0.30] = 1.35
re = 4% + 1.35 × 5.5% = 11.4%
WACC = (76.9% × 11.4%) + (23.1% × 5% × 0.75) = 9.6%

Technology:
βL = 1.5 × [1 + 0.75 × 0.30] = 1.84
re = 4% + 1.84 × 5.5% = 14.1%
WACC = (76.9% × 14.1%) + (23.1% × 5% × 0.75) = 11.7%
```

**Impact on Capital Allocation:**
```
Company WACC: ~10%

If using company WACC:
- Consumer Products projects at 9%: Rejected (wrong!)
- Technology projects at 11%: Accepted (wrong!)

With divisional WACCs:
- Consumer Products at 9% vs. 8.6% hurdle: Accepted (correct!)
- Technology at 11% vs. 11.7% hurdle: Rejected (correct!)
```

---

## Alternative Risk Adjustment Methods

### Risk Premiums

**Simple Approach:**
```
Project WACC = Company WACC ± Risk Premium

Low risk: WACC - 1-2%
Average risk: WACC
Moderate high risk: WACC + 2-3%
High risk: WACC + 4-6%
Speculative: WACC + 8%+
```

**Advantages:** Simple, intuitive
**Disadvantages:** Arbitrary, inconsistent

### Risk Classification

| Project Type | Risk Adjustment |
|--------------|-----------------|
| Replacement/maintenance | -2% |
| Cost reduction | -1% |
| Expansion of existing | 0% |
| New product, known market | +2% |
| New product, new market | +4% |
| R&D / speculative | +6-8% |

### Country Risk Premium

**For international projects:**
```
Project WACC = Domestic WACC + Country Risk Premium

Country Risk Premium = Default Spread × (σequity/σbond)
                     ≈ Default Spread × 1.5

Example:
Brazil default spread: 2.5%
Country Risk Premium: 2.5% × 1.5 = 3.75%
```

---

## Consulting Application

### Project Evaluation Framework

```
Step 1: Classify Project Risk
- Compare to company average
- Identify pure-play comparables if available

Step 2: Determine Appropriate Method
- Pure-play beta: If good comparables exist
- Risk classification: If comparables unavailable
- Judgment: With client input

Step 3: Calculate Project WACC
- Document all assumptions
- Show sensitivity to discount rate

Step 4: Present Recommendation
- Show NPV at different rates
- Highlight key risk drivers
```

### Common Consulting Situations

| Situation | Approach |
|-----------|----------|
| Acquisition valuation | Target's WACC, not acquirer's |
| Diversification project | Pure-play beta |
| International expansion | Add country risk premium |
| Venture investment | Very high hurdle (25-40%) |
| Real estate project | REIT beta and cap rates |

---

## CEO Application

### Setting Hurdle Rates

**Multi-Division Company:**
```
Division          WACC    Hurdle Rate
Consumer          8%      10% (buffer)
Industrial        10%     12% (buffer)
Technology        12%     15% (buffer)

Buffer accounts for estimation error and ensures
only clearly value-creating projects are approved.
```

### Strategic Project Rates

| Strategic Importance | Rate Adjustment |
|---------------------|-----------------|
| Must do (compliance) | N/A—required |
| Strategic entry | May accept below hurdle |
| Core business | Standard hurdle |
| Opportunistic | Above standard hurdle |

### Capital Allocation Implications

```
Using appropriate risk-adjusted rates:
- Shifts capital toward risk-adjusted returns
- Prevents risk-seeking behavior
- Improves long-term value creation
- Requires discipline and governance
```

---

## Worked Example

### Complete Risk-Adjusted Analysis

**Situation:** Pharmaceutical company (WACC 9%) evaluating:
1. Manufacturing expansion (low risk)
2. Existing drug line extension (average risk)
3. New therapeutic area (high risk)

**Company Baseline:**
- Unlevered beta: 1.0
- D/E: 0.25
- Tax rate: 25%
- rf: 4%, ERP: 5.5%
- rd: 5%

**Project 1: Manufacturing Expansion**
```
Pure-play: Contract manufacturers
Average βU: 0.7

βL = 0.7 × [1 + 0.75 × 0.25] = 0.83
re = 4% + 0.83 × 5.5% = 8.6%

WACC = (80% × 8.6%) + (20% × 5% × 0.75) = 7.6%
```

**Project 2: Line Extension**
```
Use company beta (average risk)

βL = 1.0 × [1 + 0.75 × 0.25] = 1.19
re = 4% + 1.19 × 5.5% = 10.5%

WACC = (80% × 10.5%) + (20% × 5% × 0.75) = 9.2%
```

**Project 3: New Therapeutic Area**
```
Pure-play: Early-stage biotech
Average βU: 1.6

βL = 1.6 × [1 + 0.75 × 0.25] = 1.90
re = 4% + 1.90 × 5.5% = 14.5%

WACC = (80% × 14.5%) + (20% × 5% × 0.75) = 12.4%
```

**Summary:**

| Project | Risk | WACC |
|---------|------|------|
| Manufacturing | Low | 7.6% |
| Line Extension | Average | 9.2% |
| New Therapeutic | High | 12.4% |

**Using 9% company WACC for all would:**
- Undervalue manufacturing project
- Correctly value line extension
- Overvalue new therapeutic project

---

## Common Mistakes

### 1. Using Company WACC for All Projects
**Mistake:** "Our WACC is 10%, so that's the hurdle for everything."
**Fix:** Adjust for project-specific risk.

### 2. Double-Counting Risk
**Mistake:** Conservative cash flows AND high discount rate.
**Fix:** Risk in one or the other, not both.

### 3. Poor Comparable Selection
**Mistake:** Using loosely related companies.
**Fix:** Find true pure-plays in same industry.

### 4. Ignoring Capital Structure Differences
**Mistake:** Using comparable's levered beta without adjusting.
**Fix:** Always unlever, then relever to appropriate D/E.

### 5. Excessive Precision
**Mistake:** "Project WACC is 11.37%."
**Fix:** Ranges are appropriate given estimation uncertainty.

---

## Key Takeaways

1. **Company WACC isn't universal** - Different projects have different risks
2. **Pure-play beta preferred** - When good comparables exist
3. **Unlever/relever correctly** - Match capital structure to project
4. **Risk premiums as backup** - When pure-plays unavailable
5. **Country risk matters** - For international projects
6. **Avoid double-counting** - Risk in rate OR cash flows
7. **Document and communicate** - Transparency builds credibility

---

## Practice Problems

### Problem 1: Pure-Play Beta
Software company (WACC 11%) evaluating hardware project. Hardware pure-plays have average βL = 1.0, D/E = 0.3. Your project D/E = 0.2. Tax rate 25%, rf = 4%, ERP = 5.5%, rd = 5%. Calculate project WACC.

### Problem 2: Divisional WACC
Conglomerate has:
- Retail (50%): Pure-play βU = 0.9
- Real Estate (30%): Pure-play βU = 0.7
- Tech (20%): Pure-play βU = 1.4

Company D/E = 0.35, T = 25%. Calculate divisional WACCs. (rf = 4%, ERP = 5.5%, rd = 5.5%)

### Problem 3: Country Risk
US company (WACC 9%) expanding to Country X. Country X default spread is 3%. Estimate appropriate project WACC for the expansion.

---

*Congratulations on completing the Cost of Capital module! Now test your knowledge with the [Assessment](assessment.md) and apply your learning with the [Cases](cases/).*

*Next: [Module 6: Valuation](../module-06-valuation/README.md)*
