# Cost of Equity: Alternative Methods

## Learning Objectives

- Apply the Dividend Discount Model to estimate cost of equity
- Use the Build-up Method for private companies
- Calculate implied cost of equity from market prices
- Understand Fama-French multi-factor models
- Know when to use each alternative approach

---

## Introduction

While CAPM is the most common approach, it has limitations. Alternative methods provide different perspectives and can serve as checks on CAPM estimates. Sophisticated practitioners triangulate across methods to arrive at a reasonable cost of equity.

---

## Dividend Discount Model (DDM)

### The Gordon Growth Model

**Basic Formula:**
```
P = D1 / (re - g)

Rearranged for cost of equity:
re = (D1 / P) + g

Where:
P = Current stock price
D1 = Expected dividend next year
re = Cost of equity
g = Dividend growth rate
```

**Example:**
```
Current price: $50
Current dividend: $2.00
Expected dividend growth: 5%

D1 = $2.00 × (1 + 0.05) = $2.10
re = ($2.10 / $50) + 5%
re = 4.2% + 5%
re = 9.2%
```

### Advantages and Limitations

**Advantages:**
- Simple and intuitive
- Market-based (uses actual price)
- Forward-looking (growth expectations)

**Limitations:**
- Only works for dividend-paying companies
- Sensitive to growth rate assumption
- Assumes constant growth forever
- Doesn't work when g > re

### When to Use DDM

| Situation | DDM Appropriateness |
|-----------|-------------------|
| Stable dividend payer | Excellent |
| Utilities, REITs | Good |
| Growing company, stable dividends | Good |
| Non-dividend payer | Not applicable |
| Erratic dividend policy | Poor |

---

## Build-Up Method

### When CAPM Fails

For companies without traded stock:
- Private companies
- Thinly traded stocks
- Subsidiaries of public companies

### Build-Up Formula

```
re = rf + Equity Risk Premium + Size Premium + Industry Risk + Company-Specific Risk

Components:
rf = Risk-free rate
ERP = General equity risk premium
Size = Small company premium
Industry = Sector-specific risk
Specific = Company-unique factors
```

### Component Estimates

**Size Premium (Ibbotson/Duff & Phelps):**

| Market Cap | Size Premium |
|------------|--------------|
| Large (>$10B) | 0% |
| Mid ($2-10B) | 1-2% |
| Small ($500M-2B) | 2-4% |
| Micro (<$500M) | 4-7% |

**Industry Risk Adjustment:**
- Stable industries (utilities): -1% to 0%
- Average industries: 0%
- Volatile industries (tech, biotech): +1% to +3%

**Company-Specific Risk:**
- Customer concentration: +0.5% to +2%
- Key person dependence: +0.5% to +2%
- Limited product line: +0.5% to +1%
- Geographic concentration: +0.5% to +1%

### Build-Up Example

**Private Software Company:**

```
Risk-free rate: 4.0%
Equity risk premium: 5.5%
Size premium (small): 3.0%
Industry (software): 1.0%
Company-specific:
  - Key person risk: 1.0%
  - Customer concentration: 1.0%

re = 4.0% + 5.5% + 3.0% + 1.0% + 2.0%
re = 15.5%
```

---

## Implied Cost of Equity

### Reverse-Engineering from Market Price

**Concept:** If the market prices stocks correctly, we can solve for the discount rate the market is using.

**Method 1: Single-Stage DDM Reverse**
```
P = D1 / (re - g)
re = D1/P + g
```

**Method 2: Multi-Stage DCF Reverse**
```
Solve for re in:
P = Σ [FCFEt / (1+re)^t] + Terminal Value

Requires iteration or solver.
```

### Market-Wide Implied ERP

```
For S&P 500:
1. Estimate aggregate expected dividends/buybacks
2. Estimate long-term growth
3. Calculate implied return
4. Subtract risk-free rate = Implied ERP

Example (simplified):
S&P 500 dividend yield: 1.5%
Expected buyback yield: 1.5%
Expected growth: 4%

Implied return = 1.5% + 1.5% + 4% = 7%
Risk-free = 4%
Implied ERP = 3%
```

### Advantages and Limitations

**Advantages:**
- Uses current market information
- Forward-looking
- No historical data needed

**Limitations:**
- Requires growth estimates
- Assumes market is efficient
- Sensitive to terminal value assumptions

---

## Fama-French Multi-Factor Models

### Three-Factor Model

```
re = rf + β_mkt(rm - rf) + β_smb(SMB) + β_hml(HML)

Where:
SMB = Small Minus Big (size premium)
HML = High Minus Low (value premium)
β_smb = Sensitivity to size factor
β_hml = Sensitivity to value factor
```

**Interpretation:**
- Adds systematic risk factors beyond market
- Captures small-cap and value premiums
- Empirically explains more return variation

### Five-Factor Model

```
Adds:
RMW = Robust Minus Weak (profitability)
CMA = Conservative Minus Aggressive (investment)
```

### Practical Application

**Challenges:**
- Factor betas harder to estimate
- Factor premiums vary over time
- More complex to implement
- Not as widely accepted as CAPM

**When Useful:**
- Academic research
- Sophisticated institutional investors
- When CAPM produces anomalous results

---

## Consulting Application

### Triangulation Approach

**Best Practice: Use Multiple Methods**

```
Company: Manufacturing Corp

CAPM:
rf = 4%, β = 1.2, ERP = 5.5%
re = 4% + 1.2 × 5.5% = 10.6%

DDM:
D1 = $2, P = $40, g = 4%
re = 2/40 + 4% = 9%

Build-up (using industry beta):
rf + ERP × industry beta + adjustments
4% + 5.5% × 1.1 + 0.5% = 10.6%

Implied from DCF:
Analyst consensus DCF implies ~10%

Conclusion: Cost of equity approximately 10%
```

### Presenting to Clients

```
"We've estimated cost of equity using multiple approaches:
- CAPM: 10.6%
- DDM: 9.0%
- Build-up: 10.6%
- Implied: ~10%

Our conclusion: 10.0-10.5% is a reasonable estimate.
The range reflects estimation uncertainty."
```

---

## CEO Application

### Choosing the Right Method

| Situation | Best Method(s) |
|-----------|---------------|
| Public company, stable | CAPM + DDM |
| Public, non-dividend | CAPM + Implied |
| Private company | Build-up + Comparable betas |
| Acquisition target | Multiple methods + triangulate |
| IPO pricing | Build-up → CAPM post-IPO |

### Understanding Your Cost of Equity

**Questions to Consider:**
1. What method does your company use?
2. Is it consistent with how the market values you?
3. How does it compare to peers?
4. Is it being updated regularly?

---

## Worked Example

### Complete Multi-Method Analysis

**Company:** RetailCo (public retailer)

**Data:**
- Stock price: $60
- Current dividend: $1.80/share
- Expected dividend growth: 3.5%
- 5-year beta: 1.05
- Market cap: $6B
- Risk-free rate: 4%
- ERP: 5.5%

**Method 1: CAPM**
```
re = 4% + 1.05 × 5.5%
re = 4% + 5.78%
re = 9.78%
```

**Method 2: DDM**
```
D1 = $1.80 × 1.035 = $1.86
re = ($1.86 / $60) + 3.5%
re = 3.1% + 3.5%
re = 6.6%
```

**Method 3: Build-Up**
```
rf = 4.0%
ERP = 5.5%
Size premium (mid-cap): 1.0%
Industry (retail): 0%
re = 4% + 5.5% + 1.0% = 10.5%
```

**Analysis:**
```
CAPM: 9.8%
DDM: 6.6% ← Seems low (low growth assumption?)
Build-up: 10.5%

The DDM result is surprisingly low. Let's check:
- Perhaps market expects higher growth
- Or dividend payout will increase
- Or stock is overvalued

If we assume 5% growth instead:
DDM re = 3.1% + 5% = 8.1% (more reasonable)

Conclusion: 9-10% cost of equity
```

---

## Common Mistakes

### 1. Blind Faith in Any Single Method
**Mistake:** "CAPM says 12%, that's our cost of equity."
**Fix:** Triangulate with multiple approaches.

### 2. Unrealistic Growth Rates in DDM
**Mistake:** Using growth rate above cost of equity.
**Fix:** Growth must be sustainable and below re.

### 3. Double-Counting Risk in Build-Up
**Mistake:** Adding size premium AND using small-cap beta.
**Fix:** Be consistent—use one or the other.

### 4. Ignoring Company Circumstances
**Mistake:** Same formula for all companies.
**Fix:** Adjust for company-specific factors.

---

## Key Takeaways

1. **DDM is market-based** - Uses current price, simple for dividend payers
2. **Build-up is flexible** - Works for private companies
3. **Implied methods are forward-looking** - Reflect market expectations
4. **Multi-factor models add complexity** - Sometimes warranted
5. **Triangulate always** - No single method is perfect
6. **Judgment matters** - Methods give ranges, you decide
7. **Document your assumptions** - Transparency builds credibility

---

## Practice Problems

### Problem 1: DDM
Stock price = $75, dividend = $3, growth = 4%. Calculate cost of equity.

### Problem 2: Build-Up
Private company in manufacturing. Risk-free = 4%, ERP = 5.5%, size premium = 4%, industry = 1%, specific risks = 2%. Calculate cost of equity.

### Problem 3: Triangulation
Using the data from Problem 1, also calculate CAPM (beta = 0.9, ERP = 5.5%, rf = 4%). Which estimate would you use and why?

---

*Next: [Capital Structure](04-capital-structure.md)*
