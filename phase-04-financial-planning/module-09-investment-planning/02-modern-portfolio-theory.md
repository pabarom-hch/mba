# Modern Portfolio Theory

## Learning Objectives

- Calculate expected return and risk for individual assets and portfolios
- Understand diversification benefits mathematically
- Construct and interpret the efficient frontier
- Apply the Capital Asset Pricing Model (CAPM)
- Recognize limitations of MPT in practice

---

## Introduction

Modern Portfolio Theory (MPT), developed by Harry Markowitz in 1952, revolutionized investing by demonstrating that portfolio risk is not simply the weighted average of individual asset risks. Through diversification, investors can achieve better risk-adjusted returns than any single asset offers. Understanding MPT is essential for professional investment management.

---

## Core Concepts

### Return Fundamentals

**Expected Return**

```
For a Single Asset:
E(R) = Σ [Probability × Return]

Example:
Economic State    Probability    Stock Return
────────────────────────────────────────────
Boom              25%            30%
Normal            50%            10%
Recession         25%           -15%

E(R) = (0.25 × 30%) + (0.50 × 10%) + (0.25 × -15%)
E(R) = 7.5% + 5% - 3.75% = 8.75%
```

**Portfolio Expected Return**

```
For a Portfolio:
E(Rp) = Σ [Weight × E(R)]

Example:
Asset      Weight    E(R)     Contribution
────────────────────────────────────────────
Stocks      60%      10%      6.0%
Bonds       30%       5%      1.5%
Cash        10%       2%      0.2%
────────────────────────────────────────────
Portfolio   100%              7.7%

Portfolio return is simply weighted average of asset returns
```

### Risk Fundamentals

**Variance and Standard Deviation**

```
Variance: σ² = Σ [Probability × (Return - E(R))²]

Standard Deviation: σ = √Variance

Example (continuing from above):
State         Prob    Return    Deviation    Squared    Weighted
───────────────────────────────────────────────────────────────
Boom          25%     30%       21.25%       451.56     112.89
Normal        50%     10%        1.25%         1.56       0.78
Recession     25%    -15%      -23.75%       564.06     141.02
───────────────────────────────────────────────────────────────
Variance:                                              254.69
Std Dev:                                                15.96%
```

**Interpreting Standard Deviation**

```
Assuming Normal Distribution:

68% of returns fall within ± 1 standard deviation
95% of returns fall within ± 2 standard deviations

Example: E(R) = 10%, σ = 15%

68% probability: Returns between -5% and +25%
95% probability: Returns between -20% and +40%

Higher σ = Higher risk = Wider range of outcomes
```

---

## The Power of Diversification

### Correlation

```
Correlation (ρ): Measures how two assets move together

ρ = +1.0: Perfect positive correlation (move together)
ρ =  0.0: No correlation (independent)
ρ = -1.0: Perfect negative correlation (move opposite)

Real World Correlations (approximate):
─────────────────────────────────────────────────────
US Large Cap vs. US Small Cap:     +0.85
US Stocks vs. International:       +0.75
US Stocks vs. Bonds:               -0.05
Stocks vs. Gold:                   +0.05
```

### Portfolio Risk Formula (Two Assets)

```
σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂

Where:
w = weight
σ = standard deviation
ρ = correlation

Key Insight: Portfolio risk depends on correlation!
```

### Diversification Benefit Example

```
Two Assets:
Stock A: E(R) = 12%, σ = 20%
Stock B: E(R) = 12%, σ = 20%

Portfolio: 50% A, 50% B

Scenario 1: ρ = +1.0 (perfect correlation)
σp = √(0.25×400 + 0.25×400 + 2×0.5×0.5×1.0×20×20)
σp = √(100 + 100 + 200) = √400 = 20%
No diversification benefit

Scenario 2: ρ = 0.5 (moderate correlation)
σp = √(0.25×400 + 0.25×400 + 2×0.5×0.5×0.5×20×20)
σp = √(100 + 100 + 100) = √300 = 17.3%
Diversification benefit: 2.7% risk reduction

Scenario 3: ρ = 0.0 (no correlation)
σp = √(0.25×400 + 0.25×400 + 0)
σp = √200 = 14.1%
Diversification benefit: 5.9% risk reduction

Scenario 4: ρ = -1.0 (perfect negative)
σp = √(100 + 100 - 200) = 0%
Risk eliminated! (Theoretical only)
```

### Graphical Representation

```
                         Expected Return
                              │
                              │         ★ A alone (12%, 20%)
                              │        /
                         12% ─┼───────●───────★ B alone
                              │      /↑
                              │     / │ Portfolio possibilities
                              │    /  │ (lower risk for same return)
                              │   /   │
                              │  ●    │
                              │ / ρ=-1 (risk=0)
                              │/
                              └──────────────────── Risk (σ)
                                   14%   17%   20%

The curve shows all possible portfolios of A and B
Lower correlation = More curve = More diversification
```

---

## The Efficient Frontier

### Concept

```
The Efficient Frontier is the set of portfolios that:
1. Maximize return for a given level of risk, OR
2. Minimize risk for a given level of return

Portfolios ON the frontier are "efficient"
Portfolios BELOW the frontier are "inefficient"
No portfolios exist ABOVE the frontier (not achievable)
```

### Constructing the Efficient Frontier

```
Step 1: Identify all investable assets
Step 2: Calculate expected returns and standard deviations
Step 3: Calculate correlations between all pairs
Step 4: Generate all possible portfolio combinations
Step 5: Identify portfolios with highest return per risk level
Step 6: Connect these points to form the frontier

                Expected Return
                     │
                     │        ══════════════ Efficient Frontier
                     │      ╔╝
                     │     ╔╝
                     │    ╔╝  ← Optimal portfolios
                     │   ╔╝
                     │  ╔╝
                     │ ● ← Minimum Variance Portfolio
                     │╔╝
                     │╝    ○ ○ ○ ← Inefficient portfolios
                     │   ○
                     └─────────────────────────── Risk (σ)
```

### Minimum Variance Portfolio

```
The portfolio with the lowest possible risk
(leftmost point on efficient frontier)

Formula (Two Assets):
wA = (σB² - ρABσAσB) / (σA² + σB² - 2ρABσAσB)
wB = 1 - wA

This portfolio is NOT optimal for most investors
(gives up too much return for marginal risk reduction)
```

---

## Capital Asset Pricing Model (CAPM)

### The Capital Market Line

```
Adding a Risk-Free Asset:

When you can invest in risk-free asset (Rf):
- Efficient frontier becomes a straight line
- Called the Capital Market Line (CML)
- Line is tangent to the efficient frontier

                Expected Return
                     │
                     │              ──── CML
                     │            /
                     │          /   ══════ Efficient Frontier
                     │        /   ╔╝
                     │      ● ← Market Portfolio (tangent point)
                     │    /  ╔╝
                     │  /  ╔╝
              Rf ─── ● ─╔╝
                     │╔╝
                     └───────────────────────────── Risk (σ)

All investors should hold combinations of:
1. Risk-free asset
2. The Market Portfolio (tangent point)
```

### CAPM Formula

```
E(Ri) = Rf + βi × [E(Rm) - Rf]

Where:
E(Ri) = Expected return of asset i
Rf = Risk-free rate
βi = Beta of asset i
E(Rm) = Expected return of market
[E(Rm) - Rf] = Market risk premium

Beta (β):
- Measures systematic (market) risk
- β = 1.0: Moves with market
- β > 1.0: More volatile than market
- β < 1.0: Less volatile than market
```

### Beta Calculation

```
β = Covariance(Ri, Rm) / Variance(Rm)

Or: β = ρ(i,m) × (σi / σm)

Example:
Stock correlation with market: 0.80
Stock standard deviation: 25%
Market standard deviation: 15%

β = 0.80 × (25% / 15%) = 1.33

Interpretation: Stock is 33% more volatile than market
```

### CAPM Example

```
Given:
Risk-free rate: 4%
Market return: 10%
Stock beta: 1.25

Required Return = 4% + 1.25 × (10% - 4%)
                = 4% + 1.25 × 6%
                = 4% + 7.5%
                = 11.5%

Use: Evaluate if stock is fairly priced
If expected return > 11.5%: Undervalued (buy)
If expected return < 11.5%: Overvalued (sell)
```

### Security Market Line (SML)

```
Plots expected return against beta (not total risk)

                Expected Return
                     │
                     │                    /
                     │                   /  SML
                     │                  /
              E(Rm) ─┼─────────────── ●
                     │               /│
                     │              / │
                     │             /  │
                Rf ──●────────────────┼───── Beta
                     │            1.0
                     │

Interpretation:
- Slope = Market risk premium
- All fairly priced securities lie ON the SML
- Above SML = Undervalued (positive alpha)
- Below SML = Overvalued (negative alpha)
```

---

## Factor Models

### Beyond Single Factor (CAPM)

```
CAPM uses only market factor
Research shows additional factors explain returns:

Three-Factor Model (Fama-French):
E(R) = Rf + β1(Market) + β2(Size) + β3(Value)

Five-Factor Model (Fama-French):
E(R) = Rf + β1(Market) + β2(Size) + β3(Value) +
       β4(Profitability) + β5(Investment)

Other Factors:
- Momentum
- Low volatility
- Quality
- Liquidity
```

### Factor Definitions

```
Factor          Description              Risk Premium
─────────────────────────────────────────────────────
Market (MKT)    Equity vs. bonds         ~6%
Size (SMB)      Small minus Big          ~2%
Value (HML)     High B/M minus Low       ~3%
Momentum (MOM)  Winners minus Losers     ~4%
Quality (QMJ)   Quality minus Junk       ~3%
Low Vol         Low vol minus High       ~2%
```

### Smart Beta

```
Strategy that systematically tilts toward factors

Traditional Index: Market-cap weighted (captures market factor)
Smart Beta: Tilted toward value, size, momentum, etc.

Examples:
- Equal-weight index (size tilt)
- Value-weighted index (value tilt)
- Low-volatility index (defensive tilt)
- Dividend-weighted (quality tilt)

Consideration: Factor premiums vary over time
Some factors can underperform for extended periods
```

---

## Limitations of MPT

### Assumption Failures

```
MPT Assumes:                    Reality:
─────────────────────────────────────────────────────
Normal return distribution      Fat tails, skewness
Constant correlations           Correlations spike in crises
Historical data predicts        Regimes change
Rational investors              Behavioral biases
No transaction costs            Costs matter
Single-period optimization      Multi-period horizons
```

### Correlation in Crises

```
"Diversification fails when you need it most"

Normal Times:
Stocks ↔ Bonds correlation: -0.1

Crisis Times (2008):
Stocks ↔ Bonds correlation: -0.3 (better)
BUT
Stocks ↔ Stocks correlation: +0.9 (worse)

All risky assets become highly correlated in crises
Only government bonds provide consistent diversification
```

### Estimation Error

```
Problem: MPT requires accurate estimates of:
- Expected returns (very hard to estimate)
- Standard deviations (somewhat stable)
- Correlations (can change significantly)

"Garbage in, garbage out"

Solutions:
- Use longer historical periods
- Apply Bayesian shrinkage methods
- Constrain weights (no extreme positions)
- Robust optimization techniques
- Black-Litterman model
```

### Practical Modifications

```
Real-World Adjustments:

1. Constraints
   - Maximum position sizes
   - Minimum diversification
   - Sector limits

2. Resampling
   - Generate multiple efficient frontiers
   - Average across simulations
   - More stable allocations

3. Risk Parity
   - Equal risk contribution
   - Not equal dollar weights
   - Focus on risk, not capital

4. Scenario Analysis
   - Test against extreme events
   - Not just historical returns
   - Stress testing
```

---

## Worked Example

### Portfolio Construction

**Given:**

```
Three Asset Classes:
                    E(R)      σ
─────────────────────────────────────
Stocks (S)          10%       18%
Bonds (B)            5%        6%
Real Estate (R)      8%       14%

Correlations:
ρ(S,B) = 0.0
ρ(S,R) = 0.6
ρ(B,R) = 0.2
```

**Calculate Portfolio Metrics:**

```
Portfolio: 60% Stocks, 30% Bonds, 10% Real Estate

Expected Return:
E(Rp) = 0.60(10%) + 0.30(5%) + 0.10(8%)
E(Rp) = 6.0% + 1.5% + 0.8% = 8.3%

Portfolio Variance (three assets):
σp² = wS²σS² + wB²σB² + wR²σR² +
      2wSwBρSBσSσB + 2wSwRρSRσSσR + 2wBwRρBRσBσR

σp² = (0.36)(324) + (0.09)(36) + (0.01)(196) +
      2(0.6)(0.3)(0)(18)(6) +
      2(0.6)(0.1)(0.6)(18)(14) +
      2(0.3)(0.1)(0.2)(6)(14)

σp² = 116.64 + 3.24 + 1.96 + 0 + 18.14 + 1.01
σp² = 140.99

σp = √140.99 = 11.87%

Weighted Average Risk (no diversification):
= 0.60(18%) + 0.30(6%) + 0.10(14%) = 13.0%

Diversification Benefit: 13.0% - 11.87% = 1.13%
```

**Sharpe Ratio:**

```
Sharpe Ratio = (E(Rp) - Rf) / σp

Assume Rf = 3%

Sharpe = (8.3% - 3%) / 11.87%
Sharpe = 5.3% / 11.87% = 0.45

Interpretation:
For each unit of risk, portfolio earns 0.45% excess return
Higher Sharpe ratio = Better risk-adjusted return
```

---

## Key Takeaways

1. **Portfolio return is weighted average** - Simple math
2. **Portfolio risk is NOT weighted average** - Diversification works
3. **Correlation is key** - Lower correlation = better diversification
4. **Efficient frontier shows optimal portfolios** - Maximize return per unit risk
5. **CAPM prices systematic risk** - Beta, not total risk, is compensated
6. **Factor models extend CAPM** - Size, value, momentum matter
7. **MPT has limitations** - Adjust for reality
8. **Risk-adjusted returns matter** - Use Sharpe ratio

---

## Practice Problems

### Problem 1: Portfolio Return and Risk
Two assets: A (E(R)=12%, σ=20%) and B (E(R)=6%, σ=10%), correlation 0.3. Calculate expected return and standard deviation for 70/30 portfolio.

### Problem 2: CAPM
Risk-free rate 4%, market return 9%. Stock has beta of 0.8. What is required return? If analyst expects 10% return, is stock under or overvalued?

### Problem 3: Diversification Benefit
Why might two stocks with identical returns and risk still be valuable to combine? Calculate portfolio risk for two identical 15% risk assets with correlation of 0.2 (equal weight).

---

*Next: [Asset Allocation](03-asset-allocation.md)*
