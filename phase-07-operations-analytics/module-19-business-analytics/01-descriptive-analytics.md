# Descriptive Analytics

## Learning Objectives

- Design meaningful KPIs and metrics
- Create effective dashboards
- Apply statistical summaries appropriately
- Segment and profile data
- Communicate findings clearly

---

## Metrics and KPIs

### Designing Effective Metrics

```
METRIC DESIGN PRINCIPLES:
─────────────────────────────────────────────────────

SMART METRICS:
─────────────────────────────────────────────────────
Specific:     Clearly defined, unambiguous
Measurable:   Can be quantified
Actionable:   Informs decisions
Relevant:     Matters to business objectives
Timely:       Available when needed

GOOD vs. BAD METRICS:
─────────────────────────────────────────────────────
Good Metrics:          Bad Metrics:
─────────────────────────────────────────────────────
• Drive behavior      • Vanity metrics
• Comparative         • Absolute without context
• Understandable      • Complex formulas
• Forward-looking     • Backward-only

EXAMPLE - E-COMMERCE:
─────────────────────────────────────────────────────
Vanity Metric:     Total page views (10M!)
Better Metric:     Conversion rate (2.5%)
Best Metric:       Customer acquisition cost ($45)
                   vs. lifetime value ($150)
```

### Common Business Metrics

```
METRICS BY FUNCTION:
─────────────────────────────────────────────────────

MARKETING:
─────────────────────────────────────────────────────
CAC:       Customer Acquisition Cost
LTV:       Customer Lifetime Value
ROAS:      Return on Ad Spend
CTR:       Click-Through Rate
CVR:       Conversion Rate
NPS:       Net Promoter Score

SALES:
─────────────────────────────────────────────────────
Win Rate:       Deals won / Deals attempted
Sales Cycle:    Days from lead to close
ACV:           Average Contract Value
Quota Attainment: Actual / Target
Pipeline Coverage: Pipeline / Quota (3x typical)

OPERATIONS:
─────────────────────────────────────────────────────
Cycle Time:     Time to complete process
Throughput:     Units per time period
Utilization:    Actual / Capacity
Yield:          Good output / Total output
OEE:            Overall Equipment Effectiveness

FINANCE:
─────────────────────────────────────────────────────
Revenue Growth: (Current - Prior) / Prior
Gross Margin:   (Revenue - COGS) / Revenue
EBITDA Margin:  EBITDA / Revenue
Cash Conversion: Days to convert to cash
DSO:            Days Sales Outstanding

CUSTOMER:
─────────────────────────────────────────────────────
Churn Rate:     Customers lost / Total customers
Retention:      1 - Churn
CSAT:          Customer Satisfaction Score
NPS:           % Promoters - % Detractors
```

---

## Statistical Summaries

### Descriptive Statistics

```
MEASURES OF CENTRAL TENDENCY:
─────────────────────────────────────────────────────

MEAN (Average):
─────────────────────────────────────────────────────
μ = Σx / n

When to use: Normal distributions, no outliers
Limitation: Sensitive to extreme values

Example:
Salaries: $50K, $55K, $60K, $65K, $500K
Mean = $146K (misleading due to $500K outlier)

MEDIAN (Middle Value):
─────────────────────────────────────────────────────
Middle value when sorted

When to use: Skewed data, outliers present
Advantage: Robust to extremes

Same salaries:
Median = $60K (more representative)

MODE (Most Frequent):
─────────────────────────────────────────────────────
Most common value

When to use: Categorical data, multimodal data
Example: Most common shoe size sold
```

### Measures of Variability

```
MEASURES OF SPREAD:
─────────────────────────────────────────────────────

RANGE:
─────────────────────────────────────────────────────
Max - Min

Simple but affected by outliers

INTERQUARTILE RANGE (IQR):
─────────────────────────────────────────────────────
Q3 - Q1 (middle 50% of data)

Robust to outliers

STANDARD DEVIATION:
─────────────────────────────────────────────────────
σ = √[Σ(x - μ)² / n]

Average distance from mean
Same units as original data
68-95-99.7 rule for normal distributions

COEFFICIENT OF VARIATION:
─────────────────────────────────────────────────────
CV = σ / μ

Relative variability (allows comparison)

Example:
Investment A: μ = 10%, σ = 2%  → CV = 0.20
Investment B: μ = 20%, σ = 5%  → CV = 0.25

Investment A has relatively lower risk
```

---

## Data Distributions

### Understanding Distribution Shapes

```
DISTRIBUTION PATTERNS:
─────────────────────────────────────────────────────

NORMAL (Bell Curve):
─────────────────────────────────────────────────────
        ▲
       /│\
      / │ \
     /  │  \
    /   │   \
   /    │    \
──/─────┼─────\──
        μ

Mean = Median = Mode
68% within 1 σ, 95% within 2 σ, 99.7% within 3 σ
Examples: Heights, test scores, measurement errors

RIGHT SKEWED (Positive):
─────────────────────────────────────────────────────
  ▲
  │\
  │ \
  │  \___
  │      \___
──┴──────────────
Mode < Median < Mean

Examples: Income, house prices, wait times

LEFT SKEWED (Negative):
─────────────────────────────────────────────────────
              ▲
             /│
            / │
       ___/  │
   ___/      │
────────────┴──
Mean < Median < Mode

Examples: Age at retirement, test scores (easy test)

BIMODAL:
─────────────────────────────────────────────────────
    ▲    ▲
   / \  / \
  /   \/   \
──────────────
Two distinct groups

Examples: Height (male + female combined)
```

### Percentiles and Quartiles

```
PERCENTILES:
─────────────────────────────────────────────────────

Value below which X% of data falls

25th percentile (Q1): 25% below, 75% above
50th percentile (Q2): Median
75th percentile (Q3): 75% below, 25% above
90th percentile:      Top 10%

BOX PLOT INTERPRETATION:
─────────────────────────────────────────────────────

    Outliers
       *
       │
    ┌──┴──┐ ← Maximum (or 1.5×IQR above Q3)
    │     │
    ├─────┤ ← Q3 (75th percentile)
    │     │
    │─────│ ← Median (50th percentile)
    │     │
    ├─────┤ ← Q1 (25th percentile)
    │     │
    └──┬──┘ ← Minimum (or 1.5×IQR below Q1)
       │
       *
    Outliers

IQR = Q3 - Q1 (box height)
Outliers: Beyond 1.5 × IQR from box
```

---

## Dashboard Design

### Dashboard Principles

```
EFFECTIVE DASHBOARD DESIGN:
─────────────────────────────────────────────────────

PURPOSE:
─────────────────────────────────────────────────────
Operational:   Real-time monitoring, alerts
Analytical:    Exploration, drill-down
Strategic:     Executive summary, trends

DESIGN PRINCIPLES:
─────────────────────────────────────────────────────
1. One page (no scrolling for key info)
2. Most important metrics prominent
3. Appropriate chart for data type
4. Consistent formatting
5. Minimal decoration ("chartjunk")
6. Comparison to target/benchmark

LAYOUT PATTERN:
─────────────────────────────────────────────────────
┌──────────────────────────────────────────────────┐
│              TITLE / TIME PERIOD                  │
├────────────┬────────────┬────────────┬───────────┤
│   KPI #1   │   KPI #2   │   KPI #3   │  KPI #4   │
│   [123]    │   [456]    │   [78%]    │  [$1.2M]  │
├────────────┴────────────┴────────────┴───────────┤
│                                                  │
│              PRIMARY VISUALIZATION               │
│              (Trend, comparison, etc.)          │
│                                                  │
├─────────────────────────┬────────────────────────┤
│   SECONDARY VIZ #1      │   SECONDARY VIZ #2     │
│                         │                        │
└─────────────────────────┴────────────────────────┘
```

### Chart Selection

```
CHART SELECTION GUIDE:
─────────────────────────────────────────────────────

COMPARISON:
─────────────────────────────────────────────────────
Bar Chart:       Categories side by side
Grouped Bar:     Categories with sub-groups
Bullet Chart:    Actual vs. target

COMPOSITION:
─────────────────────────────────────────────────────
Pie Chart:       Parts of whole (max 5-6 slices)
Stacked Bar:     Composition over categories
Treemap:         Hierarchical composition

TREND OVER TIME:
─────────────────────────────────────────────────────
Line Chart:      Continuous trends
Area Chart:      Volume over time
Sparkline:       Compact trend indicator

DISTRIBUTION:
─────────────────────────────────────────────────────
Histogram:       Frequency distribution
Box Plot:        Summary with outliers
Density Plot:    Smooth distribution

RELATIONSHIP:
─────────────────────────────────────────────────────
Scatter Plot:    Two variables
Bubble Chart:    Three variables
Heatmap:         Matrix of values

GEOGRAPHIC:
─────────────────────────────────────────────────────
Choropleth:      Values by region
Point Map:       Locations
Flow Map:        Movement between places
```

---

## Segmentation

### Customer Segmentation

```
SEGMENTATION APPROACHES:
─────────────────────────────────────────────────────

RFM ANALYSIS:
─────────────────────────────────────────────────────
Recency:     How recently purchased
Frequency:   How often purchases
Monetary:    How much spends

Score each 1-5, create segments:

RFM Score    Segment         Action
─────────────────────────────────────────────────────
555          Champions       Reward, upsell
554          Loyal           Maintain, upsell
541          Promising       Engage more
511          New             Onboard well
155          At Risk         Win back
111          Lost            Re-acquisition?

BEHAVIORAL SEGMENTATION:
─────────────────────────────────────────────────────
By action patterns:
• Heavy users vs. light users
• Feature adoption patterns
• Channel preferences
• Time-of-use patterns

VALUE-BASED SEGMENTATION:
─────────────────────────────────────────────────────
By profitability:
• Platinum (top 5%)
• Gold (next 15%)
• Silver (next 30%)
• Bronze (remaining 50%)
```

---

## Key Takeaways

1. **Metrics should drive action** - If it doesn't inform decisions, why track it?
2. **Mean isn't always meaningful** - Use median for skewed data
3. **Context matters** - Comparisons, benchmarks, trends
4. **Dashboard = one page** - Key information at a glance
5. **Right chart for the data** - Match visual to message
6. **Segment for insight** - Averages hide important differences

---

## Practice Exercises

### Exercise 1: KPI Design
Design a set of 5 KPIs for an online subscription business. Explain why each matters.

### Exercise 2: Statistical Summary
Given a dataset of 1,000 customer orders, calculate and interpret: mean, median, mode, standard deviation, and IQR.

### Exercise 3: Dashboard Design
Create a one-page dashboard for a retail store manager showing daily sales, top products, and staffing efficiency.

---

*Next: [Data Visualization](02-data-visualization.md)*
