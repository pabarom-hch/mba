# Predictive Analytics

## Learning Objectives

- Understand regression analysis for continuous outcomes
- Apply classification techniques for categorical predictions
- Build and interpret time series forecasts
- Evaluate predictive model quality
- Select appropriate models for business problems

---

## Regression Analysis

### Simple Linear Regression

```
LINEAR REGRESSION CONCEPT:
─────────────────────────────────────────────────────

y = b₀ + b₁x + ε

y:  Dependent variable (what we predict)
x:  Independent variable (predictor)
b₀: Intercept (y when x = 0)
b₁: Slope (change in y per unit change in x)
ε:  Error term (unexplained variation)

VISUAL REPRESENTATION:
─────────────────────────────────────────────────────

Sales ($)
    │
$80K┤                           •
    │                       •  /
$60K┤                   •  /•
    │               •  /•
$40K┤           •  /•
    │       •  /•        ← Regression line
$20K┤   •  /•                (best fit)
    │  /•
    └────────────────────────────────
     $1K  $2K  $3K  $4K  $5K  $6K
         Advertising Spend

Interpretation:
• Intercept (b₀ = $10K): Baseline sales with $0 ads
• Slope (b₁ = $12): Each $1K in ads → $12K more sales
```

### Multiple Regression

```
MULTIPLE REGRESSION:
─────────────────────────────────────────────────────

y = b₀ + b₁x₁ + b₂x₂ + b₃x₃ + ... + ε

Example: Predicting House Prices
─────────────────────────────────────────────────────

Price = $50,000
      + $150 × (Square Feet)
      + $10,000 × (Bedrooms)
      + $25,000 × (Near School: 1/0)
      - $5,000 × (Age in Years)

Prediction for: 2000 sqft, 3 bed, near school, 20 years old

Price = $50,000
      + $150 × 2000 = $300,000
      + $10,000 × 3 = $30,000
      + $25,000 × 1 = $25,000
      - $5,000 × 20 = -$100,000
      ─────────────────────────
      = $305,000 predicted price


INTERPRETING COEFFICIENTS:
─────────────────────────────────────────────────────
Variable          Coefficient    Interpretation
─────────────────────────────────────────────────────
Square Feet       +$150         Each sqft adds $150
Bedrooms          +$10,000      Each bedroom adds $10K
Near School       +$25,000      Being near school adds $25K
Age               -$5,000       Each year reduces $5K

Note: Coefficients assume other variables are held constant
```

### Regression Diagnostics

```
MODEL QUALITY METRICS:
─────────────────────────────────────────────────────

R-SQUARED (R²):
─────────────────────────────────────────────────────
Proportion of variance explained by model

R² = 1 - (SS_residual / SS_total)

R² = 0.00: Model explains nothing
R² = 0.50: Model explains 50% of variance
R² = 1.00: Model explains everything (overfitting?)

Typical benchmarks:
• Social sciences: R² > 0.30 is good
• Physical sciences: R² > 0.90 expected
• Business: Context dependent


ADJUSTED R²:
─────────────────────────────────────────────────────
Penalizes adding variables that don't improve model

Adjusted R² = 1 - [(1-R²)(n-1)/(n-k-1)]

Use when comparing models with different # of variables


RMSE (Root Mean Square Error):
─────────────────────────────────────────────────────
Average prediction error (in original units)

RMSE = √[Σ(actual - predicted)² / n]

Example: RMSE = $15,000 for house prices
         "On average, predictions are off by $15K"


MAE (Mean Absolute Error):
─────────────────────────────────────────────────────
Average absolute deviation

MAE = Σ|actual - predicted| / n

Less sensitive to outliers than RMSE


RESIDUAL ANALYSIS:
─────────────────────────────────────────────────────

Good residuals (random scatter):
    │  •     •
  + │     •     •  •
    │   •    •
  0 ├──────────────────
    │  •   •     •
  - │     •   •
    └──────────────────
      Predicted values

Bad residuals (pattern = problem):
    │            • •
  + │         • •
    │      • •
  0 ├───•─•────────────  ← Non-linear relationship
    │                      needs transformation
  - │
    └──────────────────
```

---

## Classification Models

### Logistic Regression

```
LOGISTIC REGRESSION:
─────────────────────────────────────────────────────

Predicts probability of binary outcome (yes/no)

P(Y=1) = 1 / (1 + e^-(b₀ + b₁x₁ + b₂x₂ + ...))

Output: Probability between 0 and 1

S-CURVE (Sigmoid Function):
─────────────────────────────────────────────────────

Probability
    │
1.0 ┤                    ●●●●●●●●●
    │                ●●●●
0.8 ┤              ●●
    │            ●●
0.6 ┤           ●
    │          ●
0.4 ┤         ●
    │        ●●
0.2 ┤      ●●
    │  ●●●●
0.0 ┤●●●
    └────────────────────────────────
              Credit Score

Decision Rule: If P > 0.5, classify as "Yes"
               Threshold can be adjusted


EXAMPLE: CUSTOMER CHURN
─────────────────────────────────────────────────────

log(P/(1-P)) = -2.5
             + 0.03 × (Months as customer)
             - 0.5 × (Support tickets)
             - 1.2 × (Missed payments)

Interpretation (odds ratios):
• Each month as customer: e^0.03 = 1.03× odds of staying
• Each support ticket: e^-0.5 = 0.61× odds of staying
• Each missed payment: e^-1.2 = 0.30× odds of staying
```

### Decision Trees

```
DECISION TREE STRUCTURE:
─────────────────────────────────────────────────────

                    ┌─────────────────┐
                    │ Annual Income   │
                    │   > $50K?       │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │ YES                     NO  │
              ▼                             ▼
    ┌─────────────────┐           ┌─────────────────┐
    │ Credit Score    │           │   DENY LOAN     │
    │   > 700?        │           │   (Leaf node)   │
    └────────┬────────┘           └─────────────────┘
             │
  ┌──────────┴──────────┐
  │ YES             NO  │
  ▼                     ▼
┌───────────┐    ┌─────────────────┐
│ APPROVE   │    │ Debt-to-Income  │
│  LOAN     │    │    < 40%?       │
└───────────┘    └────────┬────────┘
                          │
              ┌───────────┴───────────┐
              │ YES                NO │
              ▼                       ▼
        ┌───────────┐          ┌───────────┐
        │ APPROVE   │          │   DENY    │
        │ (lower    │          │   LOAN    │
        │  limit)   │          │           │
        └───────────┘          └───────────┘


ADVANTAGES:
─────────────────────────────────────────────────────
• Easy to understand and explain
• Handles non-linear relationships
• No need for feature scaling
• Can capture interactions

DISADVANTAGES:
─────────────────────────────────────────────────────
• Can overfit (too deep)
• Unstable (small data changes = different tree)
• Greedy algorithm (local optima)
```

### Classification Metrics

```
CONFUSION MATRIX:
─────────────────────────────────────────────────────

                    Predicted
                 │  Pos  │  Neg  │
            ─────┼───────┼───────┤
      Pos   │ TP=80  │ FN=20  │  100 Actual Positive
Actual ─────┼───────┼───────┤
      Neg   │ FP=10  │ TN=890 │  900 Actual Negative
            ─────┼───────┼───────┤
                 │  90   │  910  │  1000 Total


KEY METRICS:
─────────────────────────────────────────────────────

ACCURACY = (TP + TN) / Total = (80 + 890) / 1000 = 97%
Problem: Misleading when classes are imbalanced

PRECISION = TP / (TP + FP) = 80 / 90 = 89%
"Of those I predicted positive, how many were correct?"
Matters when: False positives are costly (spam filter)

RECALL (Sensitivity) = TP / (TP + FN) = 80 / 100 = 80%
"Of all actual positives, how many did I catch?"
Matters when: Missing positives is costly (cancer detection)

F1 SCORE = 2 × (Precision × Recall) / (Precision + Recall)
         = 2 × (0.89 × 0.80) / (0.89 + 0.80) = 84%
Harmonic mean of precision and recall


SPECIFICITY = TN / (TN + FP) = 890 / 900 = 99%
"Of all actual negatives, how many were correct?"


ROC CURVE:
─────────────────────────────────────────────────────
True Positive Rate (Sensitivity)
    │
1.0 ┤          ●●●●●●●●●●
    │       ●●●
0.8 ┤     ●●           Better model
    │    ●
0.6 ┤   ●    /
    │  ●    /  ← Random guess (diagonal)
0.4 ┤ ●    /
    │●    /
0.2 ┤    /
    │   /
0.0 ┼──/────────────────
    0   0.2  0.4  0.6  0.8  1.0
    False Positive Rate (1 - Specificity)

AUC (Area Under Curve):
• AUC = 0.5: Random guess
• AUC = 0.7-0.8: Acceptable
• AUC = 0.8-0.9: Good
• AUC > 0.9: Excellent
```

---

## Time Series Forecasting

### Time Series Components

```
TIME SERIES DECOMPOSITION:
─────────────────────────────────────────────────────

Y(t) = Trend + Seasonality + Cycle + Noise

TREND (long-term direction):
─────────────────────────────────────────────────────
    │                           ●
    │                       ●●●
    │                   ●●●
    │               ●●●
    │           ●●●
    │       ●●●
    │   ●●●
    │●●●
    └────────────────────────────
              Time

SEASONALITY (regular patterns):
─────────────────────────────────────────────────────
    │    ●         ●         ●
    │   ● ●       ● ●       ● ●
    │  ●   ●     ●   ●     ●   ●
    │ ●     ●   ●     ●   ●     ●
    │●       ● ●       ● ●       ●
    └────────────────────────────────
     Jan Jun Dec Jan Jun Dec Jan Jun

CYCLE (longer-term fluctuations):
─────────────────────────────────────────────────────
    │        ●●●
    │      ●●   ●●        ●●●
    │     ●       ●     ●●   ●●
    │    ●         ●●  ●       ●
    │  ●●            ●●         ●
    │●●                          ●
    └────────────────────────────────
        Year 1  Year 2  Year 3

NOISE (random variation):
─────────────────────────────────────────────────────
Unpredictable short-term fluctuations
```

### Forecasting Methods

```
MOVING AVERAGE:
─────────────────────────────────────────────────────

Simple Moving Average (SMA):
MA(3) = (Y_t + Y_{t-1} + Y_{t-2}) / 3

Example (3-period MA):
Month    Sales    3-Period MA
────────────────────────────
Jan      100      -
Feb      120      -
Mar      110      110.0  (100+120+110)/3
Apr      130      120.0  (120+110+130)/3
May      140      126.7  (110+130+140)/3

Pros: Simple, smooths noise
Cons: Lags behind trends, no seasonality


EXPONENTIAL SMOOTHING:
─────────────────────────────────────────────────────

F_{t+1} = α × Y_t + (1-α) × F_t

α (smoothing factor): 0 < α < 1
• α close to 1: More weight on recent data
• α close to 0: More weight on historical data

Example (α = 0.3):
Period   Actual   Forecast
───────────────────────────
1        100      100 (initial)
2        120      100 + 0.3×(100-100) = 100
3        110      100 + 0.3×(120-100) = 106
4        130      106 + 0.3×(110-106) = 107.2


HOLT-WINTERS (Triple Exponential Smoothing):
─────────────────────────────────────────────────────

Handles: Trend + Seasonality

Components:
• Level (α): Current baseline
• Trend (β): Direction of change
• Seasonality (γ): Repeating patterns

Good for: Retail sales, energy demand, web traffic
```

### ARIMA Models

```
ARIMA (p, d, q):
─────────────────────────────────────────────────────

AR(p):  AutoRegressive - uses past values
        Y_t depends on Y_{t-1}, Y_{t-2}, ... Y_{t-p}

I(d):   Integrated - differencing to make stationary
        d = number of differences needed

MA(q):  Moving Average - uses past errors
        Y_t depends on ε_{t-1}, ε_{t-2}, ... ε_{t-q}


ARIMA MODEL SELECTION:
─────────────────────────────────────────────────────

Step 1: Check stationarity (mean/variance constant)
        If not stationary, difference the data (d)

Step 2: Look at ACF/PACF plots

ACF (Autocorrelation Function):
┌──────────────────────────────────────────────────┐
│ Correlation                                      │
│    │                                             │
│ 1.0┤█                                            │
│    │█                                            │
│ 0.5┤██                                           │
│    │███                                          │
│ 0.0┼──────────────────── (significance line)     │
│    │                                             │
│-0.5┤                                             │
│    └─┬─┬─┬─┬─┬─┬─┬─┬─┬─                         │
│      1 2 3 4 5 6 7 8 9   Lag                     │
└──────────────────────────────────────────────────┘

ACF cuts off sharply → MA(q) where q = cutoff lag
ACF decays slowly → AR process

PACF cuts off sharply → AR(p) where p = cutoff lag
PACF decays slowly → MA process

Common models:
• ARIMA(1,0,0): Simple autoregressive
• ARIMA(0,1,1): Random walk with drift
• ARIMA(1,1,1): Often good starting point
```

---

## Model Selection and Validation

### Train-Test Split

```
DATA SPLITTING STRATEGY:
─────────────────────────────────────────────────────

HOLDOUT METHOD:
─────────────────────────────────────────────────────

Full Dataset
┌──────────────────────────────────────────────────┐
│                                                  │
│  ████████████████████████████████│░░░░░░░░░░░░  │
│        Training Set (80%)        │ Test (20%)    │
│                                                  │
└──────────────────────────────────────────────────┘

• Train model on training set
• Evaluate on test set (never seen before)
• Prevents overfitting to specific data


TIME SERIES SPLIT (for temporal data):
─────────────────────────────────────────────────────

             ← Train →│← Test →
Full Data: ──────────────────────────────────►
                               Time

Never use future data to predict the past!


CROSS-VALIDATION:
─────────────────────────────────────────────────────

K-Fold Cross-Validation (K=5):

Fold 1: │ Test │Train│Train│Train│Train│
Fold 2: │Train│ Test │Train│Train│Train│
Fold 3: │Train│Train│ Test │Train│Train│
Fold 4: │Train│Train│Train│ Test │Train│
Fold 5: │Train│Train│Train│Train│ Test │

Average performance across all folds
More robust than single split
```

### Overfitting vs. Underfitting

```
BIAS-VARIANCE TRADEOFF:
─────────────────────────────────────────────────────

UNDERFITTING (High Bias):
─────────────────────────────────────────────────────
    │    •  •
    │  •     • •    Model: ──────────
    │•         •
    │   •    •
    └────────────────

• Model too simple
• High training AND test error
• Solution: More features, complex model

GOOD FIT:
─────────────────────────────────────────────────────
    │    •  •
    │  •   ╱  • •    Model: ~~~curves~~~
    │• ╱      ╲•
    │ ╱   •    ╲
    └────────────────

• Model captures pattern
• Low training error, reasonable test error
• Right balance

OVERFITTING (High Variance):
─────────────────────────────────────────────────────
    │    •  •
    │  •╱ ╲╱• •    Model: ~~~wild~~~
    │•╱      ╲•
    │ ╱   •   ╲
    └────────────────

• Model too complex
• Very low training error, HIGH test error
• Memorized training data, can't generalize


ERROR CURVES:
─────────────────────────────────────────────────────

Error
    │
    │╲
    │ ╲  Test Error
    │  ╲____╱────────────────────
    │       ╲____________________
    │            Training Error
    │
    └─────────────────────────────
     Simple  ←→  Complex
         Model Complexity

Optimal: Where test error is minimized
```

---

## Key Takeaways

1. **Regression for continuous outcomes** - Linear models are interpretable and powerful
2. **Classification for categories** - Logistic regression, decision trees for yes/no predictions
3. **Choose the right metric** - Accuracy can mislead; use precision/recall based on business cost
4. **Time series needs special treatment** - Account for trend, seasonality, and autocorrelation
5. **Always validate on held-out data** - Training performance doesn't equal real-world performance
6. **Balance complexity** - Simple enough to generalize, complex enough to capture patterns
7. **Interpret coefficients carefully** - Statistical significance isn't business significance

---

## Practice Exercises

### Exercise 1: Regression Analysis
Build a multiple regression model to predict customer lifetime value using: tenure, monthly charges, and number of products. Interpret each coefficient.

### Exercise 2: Classification
Create a logistic regression model to predict employee turnover. Calculate precision, recall, and F1 score. Which metric matters most here?

### Exercise 3: Time Series
Given 3 years of monthly sales data with clear seasonality, build a Holt-Winters forecast for the next 6 months. Compare to a simple moving average.

### Exercise 4: Model Comparison
For a fraud detection problem: compare logistic regression, decision tree, and random forest. Which performs best? Why might you still choose a simpler model?

---

*Next: [Machine Learning Basics](04-machine-learning.md)*
