# Data Visualization

## Learning Objectives

- Select appropriate chart types for different data scenarios
- Apply visual design principles for clarity and impact
- Tell compelling stories with data
- Avoid common visualization pitfalls
- Design visualizations for different audiences

---

## Chart Type Selection

### Matching Charts to Data

```
CHART SELECTION DECISION TREE:
─────────────────────────────────────────────────────

What do you want to show?
        │
        ├── COMPARISON ──────────────────────────────
        │   Between items?
        │   ├── Few items → Bar Chart
        │   ├── Many items → Horizontal Bar
        │   ├── Two variables → Grouped Bar
        │   └── With target → Bullet Chart
        │
        ├── COMPOSITION ─────────────────────────────
        │   Parts of a whole?
        │   ├── Simple breakdown → Pie (max 6 slices)
        │   ├── Over time → Stacked Area
        │   ├── Hierarchical → Treemap
        │   └── Nested parts → Sunburst
        │
        ├── TREND ───────────────────────────────────
        │   Change over time?
        │   ├── Single series → Line Chart
        │   ├── Multiple series → Multi-line
        │   ├── Volume emphasis → Area Chart
        │   └── Compact display → Sparkline
        │
        ├── DISTRIBUTION ────────────────────────────
        │   How data is spread?
        │   ├── Frequency → Histogram
        │   ├── Summary → Box Plot
        │   ├── Density → Violin Plot
        │   └── Individual points → Strip Plot
        │
        ├── RELATIONSHIP ────────────────────────────
        │   Correlation between variables?
        │   ├── Two variables → Scatter Plot
        │   ├── Three variables → Bubble Chart
        │   ├── Matrix → Heatmap
        │   └── Network → Node-Link Diagram
        │
        └── GEOGRAPHIC ──────────────────────────────
            Location-based data?
            ├── Regional values → Choropleth Map
            ├── Point locations → Dot Map
            └── Movement → Flow Map
```

### Chart Examples by Purpose

```
COMPARISON - Bar Charts:
─────────────────────────────────────────────────────

Vertical Bar (Categories < 7):

Revenue by Region
    │
$8M ┤                    ████
    │        ████        ████
$6M ┤        ████        ████
    │ ████   ████        ████
$4M ┤ ████   ████   ████ ████
    │ ████   ████   ████ ████
$2M ┤ ████   ████   ████ ████
    │ ████   ████   ████ ████
    └────────────────────────────
      North  South  East  West


Horizontal Bar (Many categories or long labels):

Satisfaction by Department
─────────────────────────────────────────────────────
Engineering   ████████████████████████████ 89%
Design        ██████████████████████████ 85%
Marketing     ███████████████████████ 78%
Sales         █████████████████████ 72%
HR            ████████████████████ 68%
Finance       ██████████████████ 62%


Grouped Bar (Comparing sub-categories):

Sales by Product & Quarter
    │
$3M ┤   ░░░░          ░░░░
    │ ████ ░░░░    ████ ░░░░
$2M ┤ ████ ░░░░    ████ ░░░░
    │ ████ ░░░░    ████ ░░░░
$1M ┤ ████ ░░░░    ████ ░░░░
    │ ████ ░░░░    ████ ░░░░
    └─────────────────────────
        Q1            Q2

    ████ Product A   ░░░░ Product B
```

```
TREND - Line Charts:
─────────────────────────────────────────────────────

Single Line (One metric over time):

Monthly Active Users
    │
10K ┤                        •
    │                    •──•
8K  ┤                •──•
    │            •──•
6K  ┤        •──•
    │    •──•
4K  ┤•──•
    │
    └────────────────────────────
     Jan Feb Mar Apr May Jun Jul


Multi-Line (Comparing trends):

Revenue by Channel
    │
$5M ┤                    ◆───◆ Digital
    │            ◆───◆───◆
$4M ┤        ◆───◆
    │    ◆───◆
$3M ┤◆───◆            ■───■──■ Retail
    │        ■───■────■
$2M ┤    ■───■
    │■───■
$1M ┤                    ●───● Partner
    │●───●───●───●───●
    └─────────────────────────────
     Q1  Q2  Q3  Q4  Q1  Q2


Area Chart (Emphasizing volume):

Cumulative Sales
    │
    │                    █████
$8M ┤               █████████
    │          █████████████
$6M ┤     █████████████████
    │ █████████████████████
$4M ┤█████████████████████
    │█████████████████████
$2M ┤█████████████████████
    │█████████████████████
    └─────────────────────────
     J F M A M J J A S O N D
```

---

## Design Principles

### Edward Tufte's Principles

```
DATA-INK RATIO:
─────────────────────────────────────────────────────

Data-Ink Ratio = Ink used for data / Total ink

GOAL: Maximize data-ink, minimize non-data ink

BAD (Low data-ink ratio):
┌──────────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════╗   │
│  ║          Sales Performance               ║   │
│  ╠══════════════════════════════════════════╣   │
│  ║  Q1 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ $4.2M        ║   │
│  ║  Q2 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ $4.8M      ║   │
│  ║  Q3 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ $5.4M    ║   │
│  ║  Q4 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ $5.9M  ║   │
│  ╚══════════════════════════════════════════╝   │
└──────────────────────────────────────────────────┘
Problems: Heavy borders, box around chart,
          3D effects, gridlines

GOOD (High data-ink ratio):

Sales Performance

Q1  ████████████  $4.2M
Q2  ██████████████  $4.8M
Q3  ████████████████  $5.4M
Q4  ██████████████████  $5.9M

Clean: No unnecessary elements, focus on data
```

### Color Theory for Visualization

```
COLOR USAGE PRINCIPLES:
─────────────────────────────────────────────────────

SEQUENTIAL (Ordered data, low → high):
─────────────────────────────────────────────────────
Light to Dark: ░░░ ▒▒▒ ▓▓▓ ███

Use for: Temperature, concentration, count
Example: Heat maps, choropleth maps

DIVERGING (Data with meaningful midpoint):
─────────────────────────────────────────────────────
███ ▓▓▓ ░░░ │ ░░░ ▒▒▒ ███
 -   -   -  0  +   +   +

Use for: Profit/loss, above/below average
Example: Financial variance, NPS scores

CATEGORICAL (Distinct groups):
─────────────────────────────────────────────────────
■ Blue  ■ Orange  ■ Green  ■ Purple

Use for: Different categories, no order
Example: Product lines, regions, segments

COLOR ACCESSIBILITY:
─────────────────────────────────────────────────────
~8% of men have color blindness

Avoid: Red/Green together without other cues
Do: Use patterns, labels, or shapes as backup

Bad:  ■ Green = Good  ■ Red = Bad
Good: ■ Green (Good)  ▲ Red (Bad) + Label
```

### Layout and Composition

```
VISUAL HIERARCHY:
─────────────────────────────────────────────────────

Reading patterns (Western audiences):
─────────────────────────────────────────────────────

Z-Pattern (scanning):          F-Pattern (reading):
┌─────────────────┐            ┌─────────────────┐
│ 1 ──────────→ 2 │            │ ═══════════════ │
│    ╲          │ │            │ ═══════════════ │
│      ╲        │ │            │ ═════           │
│        ╲      │ │            │ ═════           │
│          ╲    ↓ │            │ ════            │
│ 3 ──────────→ 4 │            │                 │
└─────────────────┘            └─────────────────┘

Place most important content at:
1. Top-left (first seen)
2. Top area (horizontal scan)
3. Avoid bottom-right for key info


WHITESPACE:
─────────────────────────────────────────────────────

Crowded (Bad):                 Spaced (Good):
┌─────────────────┐            ┌─────────────────┐
│Title            │            │                 │
│CHART A│CHART B │            │  Title          │
│█████████████████│            │                 │
│CHART C│CHART D │            │    CHART A      │
│█████████████████│            │    ████████     │
│Table1Table2Table│            │                 │
└─────────────────┘            │    CHART B      │
                               │    ████████     │
                               │                 │
                               └─────────────────┘

Whitespace = visual breathing room
```

---

## Storytelling with Data

### Narrative Structure

```
DATA STORY FRAMEWORK:
─────────────────────────────────────────────────────

    ┌────────────────────────────────────────────┐
    │                                            │
    │    SETUP → CONFLICT → RESOLUTION           │
    │                                            │
    └────────────────────────────────────────────┘

1. SETUP (Context):
   "Our customer base has grown 50% this year..."

2. CONFLICT (Insight/Problem):
   "...but churn has increased from 3% to 8%"

3. RESOLUTION (Action):
   "Analysis shows onboarding issues. Fix = $2M saved"


SCR FRAMEWORK (Situation, Complication, Resolution):
─────────────────────────────────────────────────────

Situation:    What is the current state?
Complication: What changed or what's the problem?
Resolution:   What should we do about it?

Example:
S: "We launched in 5 new markets last quarter"
C: "Customer acquisition costs are 3x higher than
    mature markets"
R: "Focus on 2 high-potential markets, pause 3 others"
```

### Annotation Techniques

```
ANNOTATION BEST PRACTICES:
─────────────────────────────────────────────────────

Revenue Over Time
    │
$8M ┤                        •
    │                    •──•   ← "New product
$6M ┤                •──•         launch drove
    │  Policy       •              40% growth"
$4M ┤  change  •──•
    │  ↓   •──•
$2M ┤•──•
    │
    └─────────────────────────────────
     Q1  Q2  Q3  Q4  Q1  Q2  Q3  Q4
         2023            2024


ANNOTATION ELEMENTS:
─────────────────────────────────────────────────────

1. Highlight key points:
   Circle important data points
   Use contrasting color

2. Add context:
   "New CEO appointed"
   "COVID lockdown"
   "Competitor entered market"

3. Direct attention:
   Arrows pointing to insights
   Reference lines (target, average)

4. Explain anomalies:
   Why the spike? Why the dip?
   Prevent misinterpretation
```

### Audience-Appropriate Design

```
TAILORING TO AUDIENCE:
─────────────────────────────────────────────────────

EXECUTIVES (C-suite, Board):
─────────────────────────────────────────────────────
Format:    1-2 key charts, big numbers
Detail:    High-level only
Focus:     Business impact, decisions needed
Time:      30 seconds to understand
Example:   "Revenue up 15%. Profit up 8%.
            Recommend: Expand to Asia."


MANAGERS (Department heads):
─────────────────────────────────────────────────────
Format:    Dashboard with drill-down
Detail:    Moderate, actionable
Focus:     Performance vs. targets, trends
Time:      5 minutes to review
Example:   "Your team's productivity is 10% below
            target. Top issues: X, Y, Z"


ANALYSTS (Data teams):
─────────────────────────────────────────────────────
Format:    Detailed charts, methodology
Detail:    High, with caveats
Focus:     Statistical validity, edge cases
Time:      30+ minutes deep dive
Example:   "Model R² = 0.85, but residuals show
            heteroskedasticity in Q4 data"


GENERAL AUDIENCE (Public, customers):
─────────────────────────────────────────────────────
Format:    Simple charts, infographics
Detail:    Minimal, intuitive
Focus:     One clear message
Time:      10 seconds to grasp
Example:   "Your usage: 80% of plan.
            Upgrade recommended."
```

---

## Common Pitfalls

### Misleading Visualizations

```
CHART CRIMES TO AVOID:
─────────────────────────────────────────────────────

1. TRUNCATED Y-AXIS:
─────────────────────────────────────────────────────

MISLEADING:                    ACCURATE:
    │                              │
102 ┤       ████                100┤       ████
    │ ████                         │ ████
100 ┤ ████  ████                50 ┤ ████  ████
    │ ████  ████                   │ ████  ████
98  ┤ ████  ████                 0 ┤ ████  ████
    └───────────                   └───────────
      A     B                        A     B

2% difference looks huge      Same data, true scale


2. CHERRY-PICKING TIME PERIODS:
─────────────────────────────────────────────────────

"We're crushing it!"           Full picture:
      │       •──•                 │
$2.5M ┤   •──•                     │ •
      │ •                      $2M ┤   ╲
$2.0M ┤                            │    ╲__•──•
      └──────────                  │
       Mar Apr May                 └──────────────
                                   Jan Feb Mar Apr May

Showing only recovery         Full decline visible


3. 3D CHARTS:
─────────────────────────────────────────────────────

NEVER use 3D pie charts!

3D distorts perception:
- Front slices look larger
- Back slices look smaller
- Angles are misread

Always use 2D charts for accuracy


4. DUAL Y-AXES (usually bad):
─────────────────────────────────────────────────────

                   │                        │
 Revenue        $8M┤•                     8%┤ Margin
               $6M┤  ╲                   6%┤
               $4M┤    •──────•         4%┤•──────•
               $2M┤              ╲      2%┤
                  └────────────────       └──────

Problem: Can manipulate scales to show any correlation
Better: Use two separate charts or indexed values
```

---

## Practical Application

### Dashboard Design Process

```
DASHBOARD DESIGN WORKFLOW:
─────────────────────────────────────────────────────

STEP 1: Define Purpose
─────────────────────────────────────────────────────
Questions to answer:
• Who is the audience?
• What decisions will this inform?
• What's the key message?
• How often will it be viewed?

STEP 2: Identify Metrics
─────────────────────────────────────────────────────
• Primary KPI (1-2 max)
• Supporting metrics (3-5)
• Context data (comparisons, benchmarks)

STEP 3: Sketch Layout
─────────────────────────────────────────────────────
┌──────────────────────────────────────────────────┐
│                   Dashboard Title                 │
├─────────┬──────────┬──────────┬─────────────────┤
│  KPI 1  │  KPI 2   │  KPI 3   │     KPI 4       │
├─────────┴──────────┴──────────┴─────────────────┤
│                                                  │
│              Main Visualization                  │
│                                                  │
├──────────────────────┬───────────────────────────┤
│   Supporting Viz 1   │   Supporting Viz 2        │
└──────────────────────┴───────────────────────────┘

STEP 4: Build & Iterate
─────────────────────────────────────────────────────
• Start with key metric
• Add context progressively
• Test with users
• Refine based on feedback
```

---

## Key Takeaways

1. **Right chart for the job** - Match visualization to data type and message
2. **Less is more** - Remove chartjunk, maximize data-ink ratio
3. **Color with purpose** - Sequential, diverging, categorical
4. **Tell a story** - Setup, conflict, resolution
5. **Know your audience** - Executives need different visuals than analysts
6. **Avoid chart crimes** - Truncated axes, misleading scales, 3D effects
7. **Iterate with feedback** - Test visualizations with real users

---

## Practice Exercises

### Exercise 1: Chart Selection
For each scenario, select the most appropriate chart type and justify your choice:
a) Market share of 5 competitors
b) Stock price over 2 years
c) Customer satisfaction by age group and region
d) Distribution of order values

### Exercise 2: Redesign Challenge
Take a cluttered chart with 3D effects, heavy gridlines, and poor colors. Redesign it following Tufte's principles.

### Exercise 3: Storytelling
Create a 3-chart sequence that tells a story about declining product quality leading to customer churn and the solution implemented.

### Exercise 4: Audience Adaptation
Take one dataset and create three versions: executive summary (1 chart), manager dashboard (3 charts), analyst deep-dive (detailed with methodology).

---

*Next: [Predictive Analytics](03-predictive-analytics.md)*
