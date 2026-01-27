# Cost of Equity: CAPM

## Learning Objectives

- Master the Capital Asset Pricing Model (CAPM)
- Estimate the risk-free rate appropriately
- Calculate and interpret beta
- Apply the equity risk premium
- Understand CAPM's strengths and limitations

---

## Introduction

Cost of equity is the return shareholders expect for investing in the company's stock. Unlike debt, this return isn't contractually specified—it's the implied return required to compensate for the risk of equity ownership.

The Capital Asset Pricing Model (CAPM) is the most widely used method to estimate cost of equity. It's based on a simple idea: investors should be compensated for systematic (market) risk, but not for diversifiable risk.

---

## Core Concepts

### The CAPM Formula

```
re = rf + β × (rm - rf)

Where:
re = Cost of equity
rf = Risk-free rate
β (beta) = Sensitivity to market risk
rm = Expected market return
(rm - rf) = Equity Risk Premium (ERP)
```

**Example:**
```
Risk-free rate: 4%
Beta: 1.2
Market risk premium: 6%

re = 4% + 1.2 × 6% = 4% + 7.2% = 11.2%
```

### Component 1: Risk-Free Rate (rf)

**What is "risk-free"?**
- No default risk
- No reinvestment risk
- Typically: Government bonds

**Which Risk-Free Rate?**

| Application | Recommended rf |
|-------------|---------------|
| Short-term (1-3 years) | Treasury bills or short bonds |
| Long-term valuation | 10-year Treasury bond |
| Very long-term (perpetuity) | 20-30 year Treasury |

**Current Considerations:**
- Use spot rate, not historical average
- Match duration to investment horizon
- Adjust for inflation expectations if using real rates

### Component 2: Beta (β)

**What Beta Measures:**
```
Beta = Covariance(Stock, Market) / Variance(Market)

β > 1: More volatile than market
β = 1: Same volatility as market
β < 1: Less volatile than market
β = 0: No correlation (risk-free)
β < 0: Negative correlation (rare)
```

**Calculating Beta:**

```
Method 1: Regression
Regress stock returns against market returns
Beta = slope coefficient

Method 2: Data providers
Bloomberg, Yahoo Finance, Barra, etc.
```

**Beta Estimation Issues:**

| Issue | Impact | Solution |
|-------|--------|----------|
| Estimation period | Different periods give different betas | Use 2-5 years, monthly data |
| Market index choice | S&P 500 vs. total market | Use broad market index |
| Sampling frequency | Daily vs. monthly returns | Monthly often more stable |
| Statistical significance | High standard error | Adjust toward industry average |

**Adjusted Beta:**
```
Adjusted Beta = (2/3) × Raw Beta + (1/3) × 1.0

Betas tend to mean-revert toward 1.0 over time.
Bloomberg uses this adjustment.
```

### Component 3: Equity Risk Premium (ERP)

**Definition:** Extra return investors demand for holding equities vs. risk-free assets.

**Estimation Approaches:**

| Method | Estimate | Pros/Cons |
|--------|----------|-----------|
| Historical (1926-present) | 5-7% | Long data, backward-looking |
| Historical (1960-present) | 4-6% | More recent, shorter |
| Survey of academics | 5-6% | Forward-looking, subjective |
| Implied from market | 4-6% | Current, requires model |
| Supply-side model | 3-5% | Theoretical, lower estimates |

**Common Practice:**
- US market: 5-6% ERP
- Developed markets: 5-7% ERP
- Emerging markets: 7-10% ERP (add country risk premium)

---

## CAPM Application

### Step-by-Step Calculation

**Company: TechCorp**

```
Step 1: Risk-free rate
10-year Treasury yield: 4.2%
rf = 4.2%

Step 2: Beta
Regression beta: 1.35
Bloomberg adjusted beta: 1.23
Use: 1.3 (judgment)

Step 3: Equity risk premium
Historical approach: 5.5%
Survey approach: 5.0%
Use: 5.5%

Step 4: Calculate cost of equity
re = 4.2% + 1.3 × 5.5%
re = 4.2% + 7.15%
re = 11.35%
```

### Industry Betas

| Industry | Typical Beta |
|----------|--------------|
| Utilities | 0.5-0.8 |
| Consumer Staples | 0.6-0.9 |
| Healthcare | 0.8-1.0 |
| Financials | 1.0-1.3 |
| Industrials | 1.0-1.2 |
| Consumer Discretionary | 1.1-1.4 |
| Technology | 1.2-1.6 |
| Biotech | 1.3-1.8 |

### Levered vs. Unlevered Beta

**The Issue:**
Beta reflects both business risk AND financial risk (leverage).

**Unlevering Beta:**
```
βU = βL / [1 + (1-T) × (D/E)]

Where:
βU = Unlevered (asset) beta
βL = Levered (equity) beta
T = Tax rate
D/E = Debt-to-equity ratio
```

**Relevering Beta:**
```
βL = βU × [1 + (1-T) × (D/E)]
```

**When to Use:**
- Unlevered beta captures business risk only
- Use for comparing companies with different leverage
- Use pure-play beta approach for project-specific WACC

---

## Consulting Application

### Estimating Beta for Clients

**Public Company:**
1. Obtain regression beta (Bloomberg, Yahoo)
2. Review adjustment (raw vs. adjusted)
3. Compare to industry peers
4. Make judgment call

**Private Company:**
1. Identify comparable public companies
2. Calculate average unlevered beta
3. Relever to target capital structure
4. Apply CAPM

**Example:**
```
Target: Private software company
Comparables: Five public SaaS companies

Company A: βL = 1.4, D/E = 20%
Company B: βL = 1.3, D/E = 15%
Company C: βL = 1.5, D/E = 25%
Company D: βL = 1.2, D/E = 10%
Company E: βL = 1.4, D/E = 30%

Unlever each (assume 25% tax):
A: βU = 1.4 / [1 + 0.75 × 0.20] = 1.21
B: βU = 1.3 / [1 + 0.75 × 0.15] = 1.17
C: βU = 1.5 / [1 + 0.75 × 0.25] = 1.28
D: βU = 1.2 / [1 + 0.75 × 0.10] = 1.12
E: βU = 1.4 / [1 + 0.75 × 0.30] = 1.15

Average βU = 1.19

Target capital structure: D/E = 35%
Relevered β = 1.19 × [1 + 0.75 × 0.35] = 1.50

Cost of equity = 4% + 1.50 × 5.5% = 12.25%
```

---

## CEO Application

### What Drives Your Cost of Equity?

| Factor | Lower re | Higher re |
|--------|---------|-----------|
| Interest rates | Lower | Higher |
| Business risk | Lower volatility | Higher volatility |
| Operating leverage | Lower fixed costs | Higher fixed costs |
| Financial leverage | Less debt | More debt |
| Size | Larger | Smaller |
| Liquidity | Higher trading | Lower trading |

### Strategic Implications

```
Higher cost of equity:
- Higher hurdle rate for projects
- Lower company valuation
- More attractive to issue debt vs. equity

Lower cost of equity:
- Lower hurdle rate
- Higher valuation
- More attractive to issue equity
```

### Questions for Your Board

1. "Is our beta appropriate for our business mix?"
2. "How does our cost of equity compare to competitors?"
3. "What would reduce our cost of equity?"
4. "Are we using the right risk premium?"

---

## CAPM Limitations

### Theoretical Issues

1. **Single-factor model** - Only considers market risk
2. **Static beta** - Assumes beta is constant
3. **Homogeneous expectations** - All investors agree
4. **No taxes or transaction costs** - Unrealistic

### Practical Issues

| Issue | Reality |
|-------|---------|
| Beta instability | Changes over time |
| ERP uncertainty | Wide range of estimates |
| Risk-free rate | Even Treasuries have some risk |
| Empirical support | Mixed—small/value anomalies |

### When CAPM May Fail

- Small companies (add size premium?)
- Distressed companies (beta underestimates risk)
- Companies with negative earnings
- Highly volatile or cyclical businesses

---

## Worked Example

### Complete CAPM Analysis

**Company:** MedDevice Corp (medical device manufacturer)

**Given:**
- Stock price: $50
- Market cap: $2B
- Total debt: $500M
- Tax rate: 25%
- 5-year regression beta: 1.15
- Industry average beta: 1.05
- 10-year Treasury: 4.0%

**Step 1: Determine Risk-Free Rate**
```
Use 10-year Treasury: rf = 4.0%
```

**Step 2: Select Equity Risk Premium**
```
Historical (long-term): 5.5%
Academic surveys: 5.0%
Use: 5.5% (conservative)
```

**Step 3: Estimate Beta**
```
Regression beta: 1.15
Adjusted beta: (2/3 × 1.15) + (1/3 × 1.0) = 1.10
Industry comparison: 1.05

Beta used: 1.10 (adjusted, confirmed by industry)
```

**Step 4: Calculate Cost of Equity**
```
re = rf + β × ERP
re = 4.0% + 1.10 × 5.5%
re = 4.0% + 6.05%
re = 10.05%

Round to: 10.0%
```

**Step 5: Sanity Check**
```
For a medical device company with moderate leverage:
- Industry average: 9-11%
- Our estimate: 10%
- Reasonable!
```

---

## Common Mistakes

### 1. Using Historical Risk-Free Rate
**Mistake:** "Average Treasury yield over 10 years was 3%."
**Fix:** Use current spot rate.

### 2. Wrong Beta
**Mistake:** Using levered beta for unlevered analysis.
**Fix:** Unlever when comparing, relever for specific company.

### 3. Inconsistent Inputs
**Mistake:** US ERP with emerging market risk-free rate.
**Fix:** Match currency and geography.

### 4. Ignoring Beta Uncertainty
**Mistake:** Using raw regression beta with high standard error.
**Fix:** Adjust toward industry average or 1.0.

### 5. Stale Data
**Mistake:** Using year-old beta without checking.
**Fix:** Update beta, especially after major changes.

---

## Key Takeaways

1. **CAPM is the standard** - Most widely used approach
2. **Three components** - rf, beta, ERP
3. **Beta measures market risk** - Not total risk
4. **Lever/unlever** - Separate business from financial risk
5. **ERP is uncertain** - 5-6% is reasonable range
6. **Match durations** - rf should match investment horizon
7. **Triangulate** - Check against industry, alternatives

---

## Practice Problems

### Problem 1: Basic CAPM
rf = 3.5%, β = 1.4, ERP = 5%. Calculate cost of equity.

### Problem 2: Unlevering Beta
Company has equity beta of 1.6, D/E of 40%, tax rate 25%. What is its unlevered beta?

### Problem 3: Private Company
You're estimating cost of equity for a private retailer with no debt. Comparable public retailers have average levered beta of 1.2 and average D/E of 50%. Tax rate is 25%. What cost of equity would you use? (rf = 4%, ERP = 5.5%)

---

*Next: [Cost of Equity - Alternatives](03-cost-of-equity-alternatives.md)*
