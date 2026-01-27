# Module 19: Business Analytics

## Overview

Business analytics transforms data into actionable insights that drive better decisions. This module covers the analytics spectrum from descriptive (what happened) to predictive (what will happen) to prescriptive (what should we do). Students will learn to apply statistical methods, machine learning concepts, and decision science frameworks to solve real business problems.

## Learning Objectives

By the end of this module, you will be able to:

1. Design and interpret descriptive analytics
2. Build predictive models using statistical and ML techniques
3. Apply prescriptive analytics for optimization
4. Create effective data visualizations
5. Structure analytics projects from problem to solution
6. Evaluate model quality and limitations
7. Communicate insights to business stakeholders

## Analytics Maturity Model

```
THE ANALYTICS SPECTRUM:
─────────────────────────────────────────────────────

                                            Value
                                              ▲
PRESCRIPTIVE ─────────────────────────────────│──── •
"What should we do?"                          │   •
Optimization, simulation, AI                  │  •
                                             │ •
PREDICTIVE ──────────────────────────────────│• ──
"What will happen?"                          │•
Forecasting, classification, ML             │•
                                           •│
DIAGNOSTIC ──────────────────────────────•──│ ────
"Why did it happen?"                    •   │
Root cause analysis, drill-down        •    │
                                      •     │
DESCRIPTIVE ───────────────────────•────────│ ────
"What happened?"                   •        │
Reports, dashboards, KPIs         •         │
                                            │
                              ──────────────┴──────
                              Difficulty/Complexity

Most organizations are still in descriptive mode
Value increases as you move up the spectrum
```

## Data Science Process

```
CRISP-DM METHODOLOGY:
─────────────────────────────────────────────────────

        ┌─────────────────┐
        │   BUSINESS      │
        │ UNDERSTANDING   │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │     DATA        │
        │ UNDERSTANDING   │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │     DATA        │◄────┐
        │  PREPARATION    │     │
        └────────┬────────┘     │
                 │              │
                 ▼              │ Iterate
        ┌─────────────────┐     │
        │    MODELING     │─────┘
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   EVALUATION    │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   DEPLOYMENT    │
        └─────────────────┘

80% of time: Data understanding and preparation
20% of time: Modeling and evaluation
```

## Module Content

### Core Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [Descriptive Analytics](01-descriptive-analytics.md) | Metrics, KPIs, dashboards, statistical summaries |
| 2 | [Data Visualization](02-data-visualization.md) | Chart types, design principles, storytelling |
| 3 | [Predictive Analytics](03-predictive-analytics.md) | Regression, classification, time series |
| 4 | [Machine Learning Basics](04-machine-learning.md) | Supervised, unsupervised, model evaluation |
| 5 | [Prescriptive Analytics](05-prescriptive-analytics.md) | Optimization, simulation, decision analysis |
| 6 | [A/B Testing](06-ab-testing.md) | Experimentation, statistical significance |
| 7 | [Analytics Implementation](07-analytics-implementation.md) | Data strategy, governance, ethics |

### Assessment & Cases

| Type | Title | Description |
|------|-------|-------------|
| [Assessment](assessment.md) | Module Exam | 100-point comprehensive exam |
| [Case 1](cases/case-01-netflix-analytics.md) | Netflix Analytics | Data-driven content decisions |
| [Case 2](cases/case-02-uber-optimization.md) | Uber Dynamic Pricing | Real-time optimization |

## Statistical Foundations

```
KEY STATISTICAL CONCEPTS:
─────────────────────────────────────────────────────

MEASURES OF CENTRAL TENDENCY:
─────────────────────────────────────────────────────
Mean:    Average (sensitive to outliers)
Median:  Middle value (robust to outliers)
Mode:    Most frequent value

MEASURES OF SPREAD:
─────────────────────────────────────────────────────
Variance:   Average squared deviation from mean
Std Dev:    Square root of variance (same units)
Range:      Max - Min
IQR:        Q3 - Q1 (interquartile range)

PROBABILITY DISTRIBUTIONS:
─────────────────────────────────────────────────────
Normal:     Bell curve (natural phenomena)
Binomial:   Success/failure outcomes
Poisson:    Count of rare events
Exponential: Time between events

HYPOTHESIS TESTING:
─────────────────────────────────────────────────────
H₀: Null hypothesis (no effect)
H₁: Alternative hypothesis (effect exists)
p-value: Probability of seeing data if H₀ true
α: Significance level (typically 0.05)

If p < α: Reject H₀ (statistically significant)
If p ≥ α: Fail to reject H₀
```

## Predictive Modeling Overview

```
COMMON PREDICTIVE MODELS:
─────────────────────────────────────────────────────

REGRESSION (Continuous outcomes):
─────────────────────────────────────────────────────
Linear Regression:    y = mx + b
Multiple Regression:  y = b₀ + b₁x₁ + b₂x₂ + ...
Use for: Sales forecasting, pricing, valuations

CLASSIFICATION (Categorical outcomes):
─────────────────────────────────────────────────────
Logistic Regression:  Probability of yes/no
Decision Trees:       Rule-based classification
Random Forest:        Ensemble of trees
Use for: Churn prediction, fraud detection

TIME SERIES:
─────────────────────────────────────────────────────
Moving Average:       Simple trend smoothing
Exponential Smoothing: Weighted recent data
ARIMA:               Complex temporal patterns
Use for: Demand forecasting, financial prediction

MODEL EVALUATION:
─────────────────────────────────────────────────────
Regression:          R², RMSE, MAE
Classification:      Accuracy, Precision, Recall, AUC
All models:          Train/test split, cross-validation
```

## Prerequisites

- [Module 1: Microeconomics](../../phase-01-foundations/module-01-microeconomics/README.md) - Decision-making concepts
- Basic statistics (mean, std dev, probability)
- Spreadsheet proficiency (Excel or Google Sheets)

## Study Timeline

| Week | Topics | Activities |
|------|--------|------------|
| 1 | Descriptive analytics, visualization | Dashboard design project |
| 2 | Predictive analytics, regression | Forecasting exercise |
| 3 | ML basics, classification | Churn prediction model |
| 4 | Prescriptive analytics, A/B testing | Optimization case, experimentation design |

## Tools and Technology

```
ANALYTICS TECHNOLOGY STACK:
─────────────────────────────────────────────────────

SPREADSHEETS (Beginner):
─────────────────────────────────────────────────────
• Excel, Google Sheets
• Pivot tables, charts
• Basic statistics, regression

VISUALIZATION (All levels):
─────────────────────────────────────────────────────
• Tableau, Power BI
• Google Data Studio
• Python (matplotlib, seaborn)

STATISTICAL / ML (Intermediate):
─────────────────────────────────────────────────────
• Python (pandas, scikit-learn)
• R (dplyr, caret)
• SPSS, SAS

DATA ENGINEERING (Advanced):
─────────────────────────────────────────────────────
• SQL (querying databases)
• Python/R for data processing
• Spark (big data)
• Cloud platforms (AWS, GCP, Azure)
```

## Key Readings

### Primary Texts
- Davenport, T. "Competing on Analytics"
- Provost, F. & Fawcett, T. "Data Science for Business"
- Few, S. "Show Me the Numbers"

### Classic Articles
- Davenport, T. "Analytics 3.0"
- McAfee, A. & Brynjolfsson, E. "Big Data: The Management Revolution"
- Kohavi, R. "Online Controlled Experiments at Large Scale"

### Industry Resources
- Google Analytics Academy
- Coursera Data Science Specializations
- Kaggle (competitions and learning)

---

*This module is part of Phase 7: Operations & Analytics. Upon completion, proceed to [Module 20: Supply Chain Management](../module-20-supply-chain/README.md).*
