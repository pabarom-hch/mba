# Prescriptive Analytics

## Learning Objectives

- Formulate and solve optimization problems
- Apply simulation techniques for decision-making
- Construct and analyze decision trees
- Understand constraint programming basics
- Translate business problems into analytical frameworks
- Communicate optimization results effectively

---

## Introduction to Prescriptive Analytics

### The Analytics Spectrum

```
FROM INSIGHT TO ACTION:
─────────────────────────────────────────────────────

DESCRIPTIVE     PREDICTIVE      PRESCRIPTIVE
"What happened?" "What will      "What should
                  happen?"        we do?"
      │               │               │
      │               │               │
      ▼               ▼               ▼
   ┌─────┐        ┌─────┐        ┌─────┐
   │Data │───────▶│Model│───────▶│Optim│───▶ ACTION
   │     │        │     │        │ize  │
   └─────┘        └─────┘        └─────┘

Examples:
─────────────────────────────────────────────────────
Descriptive:  "Last month's sales were $1M"
Predictive:   "Next month's sales will be $1.1M"
Prescriptive: "Invest $50K in channel X to maximize profit"


PRESCRIPTIVE ANALYTICS METHODS:
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│              PRESCRIPTIVE ANALYTICS              │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │
│  │OPTIMIZATION │  │ SIMULATION  │  │ DECISION │ │
│  │             │  │             │  │ ANALYSIS │ │
│  │ Find best   │  │ Model       │  │ Structure│ │
│  │ solution    │  │ uncertainty │  │ choices  │ │
│  └─────────────┘  └─────────────┘  └──────────┘ │
│                                                  │
│  Applications:    Applications:   Applications:  │
│  • Scheduling     • Risk analysis • Strategy    │
│  • Routing        • Capacity plan • Investment  │
│  • Allocation     • What-if       • Sequencing  │
│  • Pricing        • Stress test   • Diagnosis   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## Optimization

### Linear Programming

```
LINEAR PROGRAMMING FRAMEWORK:
─────────────────────────────────────────────────────

MAXIMIZE (or MINIMIZE):  Objective Function
SUBJECT TO:              Constraints
WHERE:                   Decision Variables ≥ 0


EXAMPLE: PRODUCTION MIX
─────────────────────────────────────────────────────

Factory makes two products: Tables and Chairs

Product     Profit    Wood(units)   Labor(hours)
─────────────────────────────────────────────────────
Table       $50       4             3
Chair       $30       2             2

Resources Available:
• Wood: 100 units
• Labor: 80 hours

Decision Variables:
• x₁ = number of Tables
• x₂ = number of Chairs

Formulation:
─────────────────────────────────────────────────────
MAXIMIZE:    50x₁ + 30x₂     (Total Profit)

SUBJECT TO:  4x₁ + 2x₂ ≤ 100  (Wood constraint)
             3x₁ + 2x₂ ≤ 80   (Labor constraint)
             x₁, x₂ ≥ 0       (Non-negativity)


GRAPHICAL SOLUTION:
─────────────────────────────────────────────────────

Chairs (x₂)
    │
50  ┤─────●
    │     │╲
40  ┤     │ ╲  Wood constraint
    │     │  ╲   (4x₁ + 2x₂ = 100)
30  ┤     │   ╲
    │     │    ╲ ●────────
20  ┤     │     ╲│        ╲ Labor constraint
    │  ▓▓▓│▓▓▓▓▓▓● Optimal   (3x₁ + 2x₂ = 80)
10  ┤  ▓▓▓│▓▓▓▓╱ │╲
    │  ▓▓▓│▓▓╱   │ ╲
    ├──▓▓▓┼─●────┼──●──────
         10   20   30      Tables (x₁)

▓▓▓ = Feasible Region

Optimal Solution: (10, 25)
• Make 10 Tables and 25 Chairs
• Profit = 50(10) + 30(25) = $1,250
```

### Integer and Mixed-Integer Programming

```
INTEGER PROGRAMMING:
─────────────────────────────────────────────────────

When decisions must be whole numbers:
• Number of trucks to buy
• Staff to hire
• Projects to select

Binary Variables (0 or 1):
• Yes/No decisions
• Facility location (open or not)
• Product selection


EXAMPLE: CAPITAL BUDGETING
─────────────────────────────────────────────────────

Projects available (Budget: $10M):

Project    NPV($M)    Cost($M)    Select?
─────────────────────────────────────────────────────
A          5          4           x₁ ∈ {0,1}
B          3          3           x₂ ∈ {0,1}
C          4          5           x₃ ∈ {0,1}
D          2          2           x₄ ∈ {0,1}

Formulation:
─────────────────────────────────────────────────────
MAXIMIZE:    5x₁ + 3x₂ + 4x₃ + 2x₄

SUBJECT TO:  4x₁ + 3x₂ + 5x₃ + 2x₄ ≤ 10  (Budget)
             x₁, x₂, x₃, x₄ ∈ {0, 1}      (Binary)

Solution: x₁=1, x₂=1, x₃=0, x₄=1
Select projects A, B, D
Total NPV = $10M, Total Cost = $9M


ADDITIONAL CONSTRAINTS:
─────────────────────────────────────────────────────

Mutual Exclusivity (can't do both A and B):
x₁ + x₂ ≤ 1

Contingency (B requires A):
x₂ ≤ x₁

Minimum selection (at least 2 projects):
x₁ + x₂ + x₃ + x₄ ≥ 2
```

### Common Optimization Applications

```
BUSINESS OPTIMIZATION APPLICATIONS:
─────────────────────────────────────────────────────

SUPPLY CHAIN:
─────────────────────────────────────────────────────
Transportation Problem:
• Minimize shipping costs from plants to warehouses
• Balance supply and demand

Network Flow:
• Route products through distribution network
• Maximize throughput, minimize cost


WORKFORCE SCHEDULING:
─────────────────────────────────────────────────────
• Assign employees to shifts
• Meet demand while minimizing labor cost
• Constraints: availability, skills, labor laws

MINIMIZE: Total labor cost
SUBJECT TO:
  - Demand coverage for each hour
  - Maximum hours per employee
  - Required rest between shifts
  - Skill requirements


PORTFOLIO OPTIMIZATION:
─────────────────────────────────────────────────────
• Allocate capital across investments
• Maximize return for given risk level

MAXIMIZE: Expected Return
SUBJECT TO:
  - Total allocation = 100%
  - Risk (variance) ≤ Target
  - Minimum/maximum per asset
  - Sector diversification


REVENUE MANAGEMENT:
─────────────────────────────────────────────────────
• Allocate limited capacity to customer segments
• Dynamic pricing over time

Example: Hotel with 100 rooms, 3 price tiers
         How many rooms to reserve for each tier?
```

---

## Simulation

### Monte Carlo Simulation

```
MONTE CARLO SIMULATION:
─────────────────────────────────────────────────────

Use random sampling to model uncertainty

Process:
1. Define input distributions (uncertain variables)
2. Randomly sample from distributions
3. Calculate output for each sample
4. Repeat thousands of times
5. Analyze distribution of outputs


EXAMPLE: PROJECT COST ESTIMATION
─────────────────────────────────────────────────────

Uncertain Inputs:
─────────────────────────────────────────────────────
• Labor cost: Normal(μ=$500K, σ=$50K)
• Materials:  Triangular(min=$200K, mode=$250K, max=$400K)
• Overhead:   Uniform($50K to $100K)

Single Point Estimate: $800K (misleading!)

Monte Carlo (10,000 iterations):
─────────────────────────────────────────────────────

Distribution of Total Project Cost:

Frequency
    │
    │         ████
    │       ████████
    │     ████████████
    │   ████████████████
    │ ████████████████████
    └──────────────────────────
      $600K  $800K  $1.0M  $1.2M

Results:
• Mean: $825K
• Median: $810K
• P90: $980K (90% confidence it won't exceed this)
• P10: $690K (10% chance it could be this low)

Decision: Budget $980K to have 90% confidence
```

### Sensitivity Analysis

```
SENSITIVITY ANALYSIS:
─────────────────────────────────────────────────────

How do outputs change when inputs vary?

TORNADO DIAGRAM:
─────────────────────────────────────────────────────

Shows which inputs have greatest impact on output

                 Project NPV
        $5M      $10M     $15M     $20M
          │        │        │        │
Sales     ├────────█████████████████▶│ High Impact
Price     │        ████████████────┤│
Cost      │    ◀───██████████       ││
Timeline  │        │   ███──────────┤│
Tax Rate  │        │  ██            ││
Inflation │        │ █              ││ Low Impact
          │        │        │        │
       ───┴────────┴────────┴────────┴───
                Baseline


SPIDER DIAGRAM:
─────────────────────────────────────────────────────

NPV
    │
$20M┤            /Sales Price
    │          /
$15M┤        /
    │      /___________Cost
$10M┤────●────────────── Baseline
    │    │╲
$5M ┤    │  ╲
    │    │    ╲Volume
    └────┴─────┴─────┴─────┴────
       -20%  -10%  Base  +10%  +20%
              % Change in Input

Steeper slope = higher sensitivity
```

### Discrete Event Simulation

```
DISCRETE EVENT SIMULATION:
─────────────────────────────────────────────────────

Model systems where state changes at discrete points

EXAMPLE: CALL CENTER SIMULATION
─────────────────────────────────────────────────────

Events:
• Customer arrives
• Customer begins service
• Customer ends service (leaves or abandons)

                    ┌──────────────┐
Arrivals ──────────▶│   QUEUE      │──────▶ Service ──▶ Exit
(Poisson)           │  (waiting)   │        (Agents)
                    └──────────────┘

Parameters:
• Arrival rate: 50 calls/hour
• Service time: Exponential, mean 5 minutes
• Number of agents: 10
• Max queue time: 10 minutes (abandon)

Simulation Output:
─────────────────────────────────────────────────────
Metric                   Value
─────────────────────────────────────────────────────
Average wait time        3.2 minutes
Average utilization      78%
Abandonment rate         5%
Peak queue length        12 customers

What-if: Add 2 agents?
New wait time            1.4 minutes
New abandonment rate     1%

ROI: Reduced abandonment saves $X in lost revenue
```

---

## Decision Analysis

### Decision Trees

```
DECISION TREE STRUCTURE:
─────────────────────────────────────────────────────

□ = Decision node (we choose)
○ = Chance node (uncertainty)
─ = Outcome

EXAMPLE: PRODUCT LAUNCH DECISION
─────────────────────────────────────────────────────

                           ○ Success (60%)
                          /  └─► $10M profit
              Full Launch□
             /            \
            /              ○ Failure (40%)
           /                └─► -$5M loss
          □
          │\
          │ \          ○ Positive (70%)
          │  Test─────□   └─► Then full launch
          │  Market   │ ○ Negative (30%)
          │  (-$0.5M)    └─► Abandon ($0)
          │
          └──Don't Launch
                └─► $0


EXPECTED VALUE CALCULATION:
─────────────────────────────────────────────────────

Full Launch (No Test):
EV = 0.60($10M) + 0.40(-$5M) = $6M - $2M = $4M

Test Market Path:
• If positive test (70%): Launch EV = $4M
• If negative test (30%): Abandon = $0

EV(Test) = -$0.5M + 0.70($4M) + 0.30($0)
         = -$0.5M + $2.8M
         = $2.3M

Decision: Skip test, launch directly ($4M > $2.3M)

But consider: Risk tolerance matters!
Full launch has 40% chance of -$5M loss
```

### Value of Information

```
VALUE OF PERFECT INFORMATION (EVPI):
─────────────────────────────────────────────────────

How much would we pay for a perfect forecast?

EVPI = EV(with perfect info) - EV(without)


EXAMPLE:
─────────────────────────────────────────────────────

Without Information:
Best decision: Launch (EV = $4M)

With Perfect Information:
• If we KNEW success: Launch → $10M
• If we KNEW failure: Don't launch → $0

EV(Perfect Info) = 0.60($10M) + 0.40($0) = $6M

EVPI = $6M - $4M = $2M

We would pay up to $2M for perfect market research


VALUE OF IMPERFECT INFORMATION:
─────────────────────────────────────────────────────

Real information is never perfect

Market research accuracy:
• P(Positive test | Success) = 80%
• P(Negative test | Failure) = 70%

Use Bayes' Theorem to update probabilities:

P(Success | Positive test) = ?

Calculate updated probabilities, then new EV
EVII = EV(with imperfect info) - EV(without)
```

### Multi-Criteria Decision Analysis

```
WEIGHTED SCORING MODEL:
─────────────────────────────────────────────────────

When decisions involve multiple objectives

EXAMPLE: VENDOR SELECTION
─────────────────────────────────────────────────────

Criteria        Weight   Vendor A   Vendor B   Vendor C
─────────────────────────────────────────────────────
Price           30%      8          6          9
Quality         25%      7          9          6
Delivery        20%      6          7          8
Support         15%      8          8          5
Innovation      10%      5          9          4

Weighted Scores:
─────────────────────────────────────────────────────
Vendor A: 0.30(8)+0.25(7)+0.20(6)+0.15(8)+0.10(5)
        = 2.4 + 1.75 + 1.2 + 1.2 + 0.5 = 7.05

Vendor B: 0.30(6)+0.25(9)+0.20(7)+0.15(8)+0.10(9)
        = 1.8 + 2.25 + 1.4 + 1.2 + 0.9 = 7.55 ← Winner

Vendor C: 0.30(9)+0.25(6)+0.20(8)+0.15(5)+0.10(4)
        = 2.7 + 1.5 + 1.6 + 0.75 + 0.4 = 6.95


SENSITIVITY ANALYSIS ON WEIGHTS:
─────────────────────────────────────────────────────

If Price weight increases from 30% to 50%:
Would Vendor C become preferred?

(Helps understand robustness of decision)
```

---

## Implementation Considerations

### Solver Selection

```
OPTIMIZATION SOLVER LANDSCAPE:
─────────────────────────────────────────────────────

PROBLEM TYPE          SOLVER OPTIONS
─────────────────────────────────────────────────────

Linear Programming    • Excel Solver
(LP)                  • Python: PuLP, SciPy
                      • Commercial: Gurobi, CPLEX

Integer/Mixed-Integer • Excel Solver (limited)
Programming (MIP)     • Python: PuLP, OR-Tools
                      • Commercial: Gurobi, CPLEX

Nonlinear             • Excel Solver (GRG)
                      • Python: SciPy
                      • MATLAB

Simulation            • Excel: @Risk, Crystal Ball
                      • Python: SimPy
                      • Arena, AnyLogic


EXCEL SOLVER SETUP:
─────────────────────────────────────────────────────

1. Set Objective: Cell containing objective function
2. By Changing: Cells containing decision variables
3. Subject to Constraints: Add each constraint
4. Select solving method:
   • Simplex LP (linear problems)
   • GRG Nonlinear (smooth nonlinear)
   • Evolutionary (complex, non-smooth)
5. Solve
```

### Communicating Optimization Results

```
PRESENTING TO STAKEHOLDERS:
─────────────────────────────────────────────────────

STRUCTURE:
─────────────────────────────────────────────────────

1. The Decision Problem
   "We need to decide how to allocate $10M across
    5 marketing channels to maximize ROI."

2. Key Constraints
   "Each channel needs minimum $500K investment.
    Digital cannot exceed 40% of total."

3. The Recommendation
   "Optimal allocation: Social $3M, Search $2.5M,
    TV $2M, Print $1.5M, Events $1M"

4. Expected Outcome
   "Projected ROI: 15% ($1.5M profit)
    This is 20% better than current allocation."

5. Sensitivity Insights
   "If search costs increase 10%, reallocate $500K
    to social. We've built flexibility into the plan."

6. Risks and Limitations
   "Model assumes stable market conditions.
    Recommend quarterly re-optimization."


VISUALIZATION:
─────────────────────────────────────────────────────

Channel Allocation Comparison

              Current    Optimal    Difference
              ─────────────────────────────────
Social        ████████   ████████████  +$1M
Search        ██████     ██████████    +$0.5M
TV            ██████████ ████████      -$0.5M
Print         ████████   ██████        -$0.5M
Events        ████       ████          $0

ROI Impact:  12.5% → 15% (+20% improvement)
```

---

## Key Takeaways

1. **Prescriptive goes beyond prediction** - It recommends specific actions
2. **Optimization finds the best** - Subject to constraints and objectives
3. **Simulation handles uncertainty** - When analytical solutions aren't possible
4. **Decision trees structure choices** - Visualize sequential decisions under uncertainty
5. **EVPI quantifies information value** - Know what research is worth
6. **Sensitivity analysis tests robustness** - Understand what changes could alter decisions
7. **Communicate recommendations clearly** - Decision, rationale, impact, risks

---

## Practice Exercises

### Exercise 1: Linear Programming
A bakery makes cakes ($20 profit) and cookies ($5 profit). Each cake needs 3 hours of oven time and 2 pounds of flour. Each batch of cookies needs 1 hour of oven and 1 pound of flour. Available: 15 oven hours, 10 pounds flour. Formulate and solve the optimal production mix.

### Exercise 2: Monte Carlo Simulation
A startup is forecasting year-one revenue. Units sold: Triangular(1000, 2000, 5000). Price per unit: Normal($50, $5). Build a Monte Carlo simulation and report the P10, P50, and P90 revenue estimates.

### Exercise 3: Decision Tree
A company can either develop a new product ($2M investment) or license existing technology ($0.5M). Development has 60% chance of success ($8M return) and 40% chance of failure ($0). Licensing is guaranteed to return $3M. Build the decision tree and calculate expected values.

### Exercise 4: Multi-Criteria Decision
You're selecting between 3 job offers. Define 5 criteria with weights and score each offer. Perform sensitivity analysis on your most important criterion.

---

*Next: [A/B Testing](06-ab-testing.md)*
