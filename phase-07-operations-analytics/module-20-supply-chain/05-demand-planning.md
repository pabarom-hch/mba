# Demand Planning

## Learning Objectives

- Apply quantitative forecasting methods
- Incorporate qualitative inputs into forecasts
- Implement Sales and Operations Planning (S&OP)
- Measure and improve forecast accuracy
- Manage forecast uncertainty
- Align demand and supply across the organization

---

## Forecasting Fundamentals

### Why Forecasting Matters

```
FORECASTING IN SUPPLY CHAIN:
─────────────────────────────────────────────────────

                    FORECAST
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌──────────┐
   │INVENTORY│   │PRODUCTION│   │PROCUREMENT│
   │ How much│   │ How much │   │ What to   │
   │ to stock│   │ to make  │   │ order     │
   └─────────┘   └──────────┘   └──────────┘
        │              │              │
        └──────────────┴──────────────┘
                       │
                       ▼
              CAPACITY PLANNING
              Workforce, equipment


FORECAST IMPACT:
─────────────────────────────────────────────────────

Forecast too HIGH:
• Excess inventory
• Obsolescence risk
• Tied-up capital
• Markdowns needed

Forecast too LOW:
• Stockouts
• Lost sales
• Expediting costs
• Customer dissatisfaction

Both: Waste resources and hurt profitability
```

### Forecasting Principles

```
KEY FORECASTING CONCEPTS:
─────────────────────────────────────────────────────

1. FORECASTS ARE ALWAYS WRONG
   The question is: How wrong, and does it matter?

2. AGGREGATE FORECASTS ARE MORE ACCURATE
   Total company demand > Product family > SKU-location

3. SHORTER HORIZONS ARE MORE ACCURATE
   Next week > Next month > Next year

4. FORECASTS SHOULD INCLUDE ERROR ESTIMATES
   "100 units ± 20" is more useful than "100 units"


FORECAST HIERARCHY:
─────────────────────────────────────────────────────

            Total Company
                 │
         ┌───────┴───────┐
         │               │
    Category A      Category B
         │               │
    ┌────┴────┐    ┌────┴────┐
    │         │    │         │
  Family 1  Family 2   Family 3  Family 4
    │         │          │         │
┌───┴───┐ ┌───┴───┐ ┌───┴───┐ ┌───┴───┐
SKU SKU SKU SKU SKU SKU SKU SKU SKU SKU SKU SKU

Accuracy
High ◀──────────────────────────────────▶ Low
```

---

## Quantitative Forecasting Methods

### Time Series Methods

```
MOVING AVERAGE:
─────────────────────────────────────────────────────

Simple Moving Average (SMA):

F(t+1) = (D(t) + D(t-1) + D(t-2) + ... + D(t-n+1)) / n

EXAMPLE (3-period MA):
─────────────────────────────────────────────────────
Period   Demand   3-Period MA   Error
─────────────────────────────────────────────────────
1        100        -            -
2        110        -            -
3        105        -            -
4        115      105.0         10.0
5        120      110.0         10.0
6        125      113.3         11.7

F(7) = (115 + 120 + 125) / 3 = 120


WEIGHTED MOVING AVERAGE:
─────────────────────────────────────────────────────
More recent periods get higher weight

F(t+1) = w1×D(t) + w2×D(t-1) + w3×D(t-2)

Where w1 + w2 + w3 = 1

Example: w1=0.5, w2=0.3, w3=0.2
F(7) = 0.5(125) + 0.3(120) + 0.2(115) = 121.5


EXPONENTIAL SMOOTHING:
─────────────────────────────────────────────────────

F(t+1) = α × D(t) + (1-α) × F(t)

α = smoothing constant (0 < α < 1)
• Higher α: More responsive, more noise
• Lower α: More stable, slower response

EXAMPLE (α = 0.3):
─────────────────────────────────────────────────────
Period   Demand   Forecast   Error
─────────────────────────────────────────────────────
1        100      100        -
2        110      100        10.0
3        105      103        2.0
4        115      103.6      11.4
5        120      107.0      13.0
6        125      110.9      14.1

F(7) = 0.3(125) + 0.7(110.9) = 115.1
```

### Trend and Seasonality

```
DECOMPOSITION:
─────────────────────────────────────────────────────

Demand = Trend × Seasonal × Random

TREND: Long-term direction
─────────────────────────────────────────────────────
Linear: y = a + bt
Exponential: y = ae^(bt)

SEASONAL: Regular pattern (repeating)
─────────────────────────────────────────────────────
Monthly, quarterly, weekly patterns

RANDOM: Unexplainable variation
─────────────────────────────────────────────────────
What's left after trend and seasonal removed


SEASONAL INDEX CALCULATION:
─────────────────────────────────────────────────────

Step 1: Calculate average demand per period
Step 2: Calculate seasonal index = (Period avg / Overall avg)

EXAMPLE:
─────────────────────────────────────────────────────
Quarter   Y1     Y2     Y3     Avg    Index
─────────────────────────────────────────────────────
Q1        80     90    100     90     0.82
Q2       100    110    120    110     1.00
Q3       120    130    140    130     1.18
Q4       100    110    120    110     1.00
─────────────────────────────────────────────────────
Annual   400    440    480    440     (avg=110)


SEASONALLY ADJUSTED FORECAST:
─────────────────────────────────────────────────────
1. Forecast base demand (trend)
2. Multiply by seasonal index

If trend predicts 120 for Q3:
Forecast = 120 × 1.18 = 142
```

### Regression Analysis

```
CAUSAL FORECASTING:
─────────────────────────────────────────────────────

Use explanatory variables to predict demand

Demand = f(Price, Advertising, GDP, Weather, etc.)


SIMPLE LINEAR REGRESSION:
─────────────────────────────────────────────────────

Y = a + bX

Where: Y = Demand
       X = Explanatory variable
       a = Intercept
       b = Slope


EXAMPLE: Ice cream sales vs. temperature
─────────────────────────────────────────────────────

Temp (°F)   Sales ($)
─────────────────────────────────────────────────────
   60         1,000
   70         1,500
   80         2,000
   90         2,500

Regression: Sales = -1,500 + 50 × Temperature

Forecast for 85°F:
Sales = -1,500 + 50(85) = $2,750


MULTIPLE REGRESSION:
─────────────────────────────────────────────────────

Sales = 500 + 40(Temp) + 0.1(Ad Spend) - 5(Price)

More variables can improve accuracy
But: Causation ≠ correlation
```

---

## Qualitative Forecasting

### Judgment-Based Methods

```
QUALITATIVE METHODS:
─────────────────────────────────────────────────────

SALES FORCE COMPOSITE:
─────────────────────────────────────────────────────
Salespeople estimate their territory demand

Advantages:
• Close to customer
• Regional detail
• Accountability

Disadvantages:
• Bias (sandbagging or over-optimism)
• Short-term focus
• Inconsistent assumptions


EXECUTIVE OPINION:
─────────────────────────────────────────────────────
Senior management consensus forecast

Advantages:
• Strategic perspective
• Quick
• Consider broad factors

Disadvantages:
• May ignore data
• Groupthink
• Politics


DELPHI METHOD:
─────────────────────────────────────────────────────
Structured expert consensus

Round 1: Experts give independent forecasts
         Results summarized anonymously

Round 2: Experts revise given others' views
         Repeat until convergence

Advantages:
• Reduces bias
• Anonymous = honest
• Handles uncertainty

Disadvantages:
• Time-consuming
• Requires expert access


MARKET RESEARCH:
─────────────────────────────────────────────────────
Surveys, focus groups, test markets

Best for: New products, no historical data
```

### Combining Methods

```
FORECAST COMBINATION:
─────────────────────────────────────────────────────

Research shows: Combined forecasts often beat any single method

SIMPLE AVERAGE:
─────────────────────────────────────────────────────
Combined = (Statistical + Judgmental) / 2


WEIGHTED AVERAGE:
─────────────────────────────────────────────────────
Combined = w1 × Statistical + w2 × Judgmental

Weights based on:
• Historical accuracy
• Situation (stable vs. changing)
• Information available


OVERRIDE RULES:
─────────────────────────────────────────────────────
Start with statistical forecast
Allow judgment overrides when:
• Known events (promotions, competitor actions)
• Market intelligence
• Customer commitments

Document override reasons
Track override accuracy separately
```

---

## Forecast Accuracy

### Error Metrics

```
FORECAST ERROR METRICS:
─────────────────────────────────────────────────────

ERROR = Actual - Forecast

MAD (Mean Absolute Deviation):
─────────────────────────────────────────────────────
MAD = Σ|Actual - Forecast| / n

Average error magnitude (in units)


MAPE (Mean Absolute Percentage Error):
─────────────────────────────────────────────────────
MAPE = Σ(|Actual - Forecast| / Actual) / n × 100%

Percentage error (easy to compare across products)


BIAS:
─────────────────────────────────────────────────────
Bias = Σ(Actual - Forecast) / n

Shows systematic over/under forecasting
Should be near zero


EXAMPLE:
─────────────────────────────────────────────────────
Period  Actual  Forecast  Error   |Error|   APE
─────────────────────────────────────────────────────
1       100     105       -5       5        5.0%
2       110     100       10      10        9.1%
3       105     108       -3       3        2.9%
4       115     110        5       5        4.3%
5       120     115        5       5        4.2%
─────────────────────────────────────────────────────
SUM              12      28       25.5%

Bias = 12/5 = 2.4 (slight under-forecast)
MAD = 28/5 = 5.6 units
MAPE = 25.5%/5 = 5.1%


ACCURACY BENCHMARKS:
─────────────────────────────────────────────────────

MAPE          Interpretation
─────────────────────────────────────────────────────
< 10%         Excellent (stable products)
10-20%        Good (most products)
20-30%        Acceptable (variable demand)
> 30%         Poor (need improvement)
```

### Improving Accuracy

```
FORECAST IMPROVEMENT LEVERS:
─────────────────────────────────────────────────────

1. AGGREGATE TO APPROPRIATE LEVEL
   Forecast where accuracy is good
   Disaggregate using allocation rules

2. REDUCE LEAD TIME
   Shorter forecast horizon = better accuracy
   Faster response = less reliance on forecast

3. IMPROVE DATA QUALITY
   Clean historical data
   Capture promotions, events separately
   Use actual demand, not shipments

4. BETTER METHODS
   Match method to demand pattern
   Combine multiple methods
   Update parameters regularly

5. COLLABORATION
   Share downstream data
   Joint forecasting with customers
   CPFR (Collaborative Planning, Forecasting, Replenishment)


FORECAST VALUE ADDED (FVA):
─────────────────────────────────────────────────────

Does human intervention improve forecast?

FVA = Accuracy(with input) - Accuracy(without)

If FVA < 0: Remove that input/step
Eliminate activities that don't add value
```

---

## Sales and Operations Planning (S&OP)

### S&OP Process

```
S&OP MONTHLY CYCLE:
─────────────────────────────────────────────────────

Week 1: DATA GATHERING
─────────────────────────────────────────────────────
• Collect latest sales data
• Update statistical forecasts
• Identify events, promotions

Week 2: DEMAND PLANNING
─────────────────────────────────────────────────────
• Sales/Marketing review forecast
• Adjust for market intelligence
• Reach demand consensus

Week 3: SUPPLY PLANNING
─────────────────────────────────────────────────────
• Operations reviews demand plan
• Identify capacity constraints
• Develop supply scenarios

Week 4: PRE-S&OP / EXECUTIVE S&OP
─────────────────────────────────────────────────────
• Reconcile demand and supply
• Resolve conflicts
• Make decisions on gaps


S&OP MEETING CADENCE:
─────────────────────────────────────────────────────

        Week 1    Week 2    Week 3    Week 4
        ─────────────────────────────────────
Data    ████
Review

Demand         ████
Review

Supply                ████
Review

Pre-S&OP                    ████
Exec S&OP                        ████
```

### S&OP Framework

```
S&OP MEETING STRUCTURE:
─────────────────────────────────────────────────────

PARTICIPANTS:
─────────────────────────────────────────────────────
• General Manager / CEO (chair)
• Sales / Commercial
• Marketing
• Operations / Supply Chain
• Finance
• Product Development


AGENDA:
─────────────────────────────────────────────────────
1. Review prior month performance (15 min)
   • Sales vs. plan
   • Production vs. plan
   • Inventory levels

2. Demand review (20 min)
   • Forecast changes
   • Key assumptions
   • Risks and opportunities

3. Supply review (20 min)
   • Capacity status
   • Constraints
   • Supplier issues

4. Reconciliation (30 min)
   • Gaps between demand and supply
   • Scenario analysis
   • Decisions needed

5. Financial review (15 min)
   • Revenue projection
   • Cost implications
   • Profit impact


S&OP OUTPUTS:
─────────────────────────────────────────────────────
• Agreed demand plan
• Production/supply plan
• Inventory targets
• Resource decisions
• Financial projection
• Action items with owners
```

### Demand-Supply Balancing

```
BALANCING OPTIONS:
─────────────────────────────────────────────────────

WHEN DEMAND > SUPPLY:
─────────────────────────────────────────────────────

INCREASE SUPPLY:
• Overtime
• Add shifts
• Hire temp workers
• Outsource/subcontract
• Activate backup suppliers
• Expedite materials

REDUCE/SHIFT DEMAND:
• Raise prices
• Reduce promotions
• Allocate to priority customers
• Quote longer lead times
• Substitute products


WHEN SUPPLY > DEMAND:
─────────────────────────────────────────────────────

REDUCE SUPPLY:
• Cut overtime
• Reduce shifts
• Temporary layoffs
• Delay material orders
• Build inventory (if appropriate)

INCREASE DEMAND:
• Promotions
• Discounts
• Accelerate new products
• Enter new markets


DECISION MATRIX:
─────────────────────────────────────────────────────

                Short-term      Long-term
               (this month)    (next quarter+)
─────────────────────────────────────────────────────
Demand > Supply  Allocate,      Add capacity,
                 Expedite       New suppliers

Supply > Demand  Promote,       Rationalize,
                 Build stock    Reduce capacity
```

---

## Key Takeaways

1. **All forecasts are wrong** - Plan for error, not precision
2. **Aggregation improves accuracy** - Forecast high, allocate low
3. **Combine methods** - Statistical + judgment often beats either alone
4. **Measure to improve** - Track MAD, MAPE, bias consistently
5. **S&OP aligns organization** - Cross-functional process is essential
6. **Forecast is input, not answer** - Use to drive decisions, not dictate them

---

## Practice Exercises

### Exercise 1: Moving Average
Given demand: 100, 110, 90, 120, 130, 110, calculate:
a) 3-period moving average forecast for period 7
b) 3-period weighted moving average (weights: 0.5, 0.3, 0.2)

### Exercise 2: Exponential Smoothing
Using the same data with alpha=0.2 and initial forecast of 100, calculate forecasts for periods 2-7. Which alpha (0.2 or 0.4) gives lower MAD?

### Exercise 3: Seasonal Indices
Monthly demand shows this pattern over 2 years. Calculate seasonal indices and forecast for next year if trend predicts 1,200 total annual demand.

### Exercise 4: S&OP Scenario
As S&OP leader, demand is 20% higher than planned but production capacity is maxed out. What options would you present to the executive team?

---

*Next: [Supply Chain Risk](06-supply-chain-risk.md)*
