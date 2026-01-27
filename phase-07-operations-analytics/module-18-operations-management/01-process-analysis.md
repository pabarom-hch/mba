# Process Analysis and Design

## Learning Objectives

- Map and analyze business processes
- Identify bottlenecks and constraints
- Calculate key process metrics
- Redesign processes for improvement
- Apply theory of constraints

---

## Process Fundamentals

### What Is a Process?

```
PROCESS DEFINITION:
─────────────────────────────────────────────────────
A process is a sequence of activities that transforms
inputs into outputs that have value for customers.

PROCESS ELEMENTS:
─────────────────────────────────────────────────────
Inputs:         Materials, information, customers
Activities:     Value-adding and non-value-adding steps
Resources:      People, equipment, facilities
Outputs:        Products, services, information
Controls:       Rules, standards, procedures

PROCESS HIERARCHY:
─────────────────────────────────────────────────────
Enterprise Process (Order-to-Cash)
    │
    ├── Business Process (Order Fulfillment)
    │       │
    │       ├── Sub-Process (Picking)
    │       │       │
    │       │       └── Activity (Locate item)
    │       │               │
    │       │               └── Task (Scan barcode)
    │       │
    │       └── Sub-Process (Packing)
    │
    └── Business Process (Payment Collection)
```

### Process Mapping

```
PROCESS MAPPING SYMBOLS:
─────────────────────────────────────────────────────

  ○          Start/End (Oval)

  □          Process Step/Activity (Rectangle)

  ◇          Decision Point (Diamond)

  →          Flow Direction (Arrow)

  D          Delay/Wait (D-shape)

  ▽          Inspection (Inverted triangle)

  ▢          Document (Rectangle with wavy bottom)


EXAMPLE PROCESS MAP (Order Processing):
─────────────────────────────────────────────────────

○ Start
    │
    ▼
□ Receive Order
    │
    ▼
◇ Credit OK? ──No──→ □ Reject Order ──→ ○ End
    │
   Yes
    │
    ▼
□ Check Inventory
    │
    ▼
◇ In Stock? ──No──→ D Backorder Wait
    │                      │
   Yes ←──────────────────┘
    │
    ▼
□ Pick Items
    │
    ▼
□ Pack Order
    │
    ▼
□ Ship Order
    │
    ▼
○ End
```

---

## Process Metrics

### Key Performance Measures

```
PROCESS METRICS:
─────────────────────────────────────────────────────

CYCLE TIME (CT):
─────────────────────────────────────────────────────
Time to complete one unit through a process step

Example: Painting takes 15 minutes per unit
CT = 15 minutes

THROUGHPUT (λ):
─────────────────────────────────────────────────────
Number of units completed per time period

Example: 4 units per hour
λ = 4 units/hour

CAPACITY:
─────────────────────────────────────────────────────
Maximum sustainable output per time period

Capacity = Available Time / Cycle Time

Example: 60 minutes / 15 min per unit = 4 units/hour

UTILIZATION:
─────────────────────────────────────────────────────
Actual output / Capacity

Example: 3 units produced / 4 unit capacity = 75%

FLOW TIME (FT):
─────────────────────────────────────────────────────
Total time from start to finish of process
Includes processing time + wait time

FT = Processing Time + Wait Time

WORK-IN-PROCESS (WIP):
─────────────────────────────────────────────────────
Units currently in the system

WIP = Throughput × Flow Time (Little's Law)
```

### Process Efficiency

```
PROCESS EFFICIENCY MEASURES:
─────────────────────────────────────────────────────

CYCLE EFFICIENCY:
─────────────────────────────────────────────────────
Value-Added Time / Total Flow Time

Example:
Value-added time: 2 hours
Total flow time: 10 hours
Efficiency = 2/10 = 20%

(Most processes are 1-5% efficient!)

TAKT TIME:
─────────────────────────────────────────────────────
Available time / Customer demand

"Heartbeat" of the process

Example:
Available: 480 minutes/day
Demand: 120 units/day
Takt Time = 480/120 = 4 minutes

Process must produce 1 unit every 4 minutes
to meet demand.

CAPACITY UTILIZATION TRADE-OFFS:
─────────────────────────────────────────────────────
Utilization    Wait Time    Quality    Flexibility
──────────────────────────────────────────────────
   50%           Low         High         High
   75%          Medium      Medium       Medium
   90%           High        Risk        Lower
   95%+        Very High    Risk High    Rigid

High utilization = long wait times (queuing)
```

---

## Bottleneck Analysis

### Identifying Bottlenecks

```
BOTTLENECK DEFINITION:
─────────────────────────────────────────────────────
The resource or process step that limits overall
system throughput. It has the longest cycle time
or lowest capacity.

IDENTIFYING BOTTLENECKS:
─────────────────────────────────────────────────────

Step    Cycle Time    Capacity
─────────────────────────────────────────────────
A       5 min         12/hour
B       10 min        6/hour    ← BOTTLENECK
C       6 min         10/hour
D       4 min         15/hour

Process capacity = Bottleneck capacity = 6 units/hour

CHARACTERISTICS OF BOTTLENECK:
─────────────────────────────────────────────────────
• Longest queue builds before it
• Always busy (high utilization)
• Pace of entire system
• WIP accumulates upstream

BOTTLENECK IMPACTS:
─────────────────────────────────────────────────────
             Before        After
            Bottleneck   Bottleneck
──────────────────────────────────────────────
WIP         Building      Depleting
Utilization  <100%         <100%
Wait Time    High          Low
```

### Theory of Constraints

```
THEORY OF CONSTRAINTS (TOC):
─────────────────────────────────────────────────────
Developed by Eli Goldratt ("The Goal")

CORE PRINCIPLE:
─────────────────────────────────────────────────────
The output of any system is limited by its
constraint (bottleneck). Improving non-constraints
doesn't improve system performance.

THE FIVE FOCUSING STEPS:
─────────────────────────────────────────────────────

1. IDENTIFY the constraint
   Find the bottleneck limiting throughput

2. EXPLOIT the constraint
   Get maximum output from bottleneck
   - No idle time
   - No defective inputs
   - Full utilization

3. SUBORDINATE everything else
   Align all resources to support bottleneck
   - Don't overproduce at non-bottlenecks
   - Buffer the bottleneck
   - Prioritize bottleneck work

4. ELEVATE the constraint
   Increase bottleneck capacity if needed
   - Add equipment/people
   - Outsource
   - Improve process

5. REPEAT
   Once constraint moves, find new bottleneck
   Don't let inertia become the constraint

DRUM-BUFFER-ROPE:
─────────────────────────────────────────────────────
Drum:   Bottleneck sets pace (heartbeat)
Buffer: Time buffer before bottleneck (protection)
Rope:   Signal to start (release work to match drum)
```

---

## Process Improvement

### Value Stream Mapping

```
VALUE STREAM MAP:
─────────────────────────────────────────────────────
Shows material and information flow through process

EXAMPLE VALUE STREAM MAP:
─────────────────────────────────────────────────────

Customer        Information Flow (demand)
   ←─────────────────────────────────────────────
                                                │
   ┌─────────┐    ┌─────────┐    ┌─────────┐   │
   │ Stage A │───→│ Stage B │───→│ Stage C │   │
   │         │    │         │    │         │   │
   │CT: 30s  │    │CT: 45s  │    │CT: 25s  │   │
   │▲ 100 pcs│    │▲ 200 pcs│    │▲ 50 pcs │   │
   └─────────┘    └─────────┘    └─────────┘   │
        │              │              │        │
        ▼              ▼              ▼        │
   ─────────────────────────────────────────────
   Material Flow →

Timeline:
├─30s─┼────2 days────┼─45s─┼──1 day──┼─25s─┤

Total Lead Time: 3 days + 100 seconds
Value-Added Time: 100 seconds
Efficiency: 100s / 259,200s = 0.04%
```

### Process Redesign Principles

```
PROCESS IMPROVEMENT STRATEGIES:
─────────────────────────────────────────────────────

ELIMINATE:
─────────────────────────────────────────────────────
• Remove non-value-adding steps
• Eliminate redundant approvals
• Remove unnecessary handoffs
• Eliminate rework loops

SIMPLIFY:
─────────────────────────────────────────────────────
• Reduce complexity
• Standardize where possible
• Use checklists
• Error-proof (poka-yoke)

COMBINE:
─────────────────────────────────────────────────────
• Merge sequential steps
• Cross-train workers
• Cellular layouts
• One-piece flow

AUTOMATE:
─────────────────────────────────────────────────────
• Automate routine tasks
• Use technology for data transfer
• Implement workflow systems
• Apply AI/ML for decisions

PARALLELIZE:
─────────────────────────────────────────────────────
• Do tasks simultaneously
• Concurrent engineering
• Parallel processing paths
• Independent activities in parallel
```

### Process Redesign Analysis

```
BEFORE AND AFTER COMPARISON:
─────────────────────────────────────────────────────

CURRENT STATE:
─────────────────────────────────────────────────────
Steps:              12
Cycle Time:         45 minutes
Flow Time:          5 days
Handoffs:           8
Decision Points:    5
Error Rate:         8%

FUTURE STATE (After Redesign):
─────────────────────────────────────────────────────
Steps:              6 (50% reduction)
Cycle Time:         20 minutes (56% reduction)
Flow Time:          1 day (80% reduction)
Handoffs:           2 (75% reduction)
Decision Points:    2 (60% reduction)
Error Rate:         1% (88% reduction)

IMPROVEMENT CALCULATION:
─────────────────────────────────────────────────────
Metric          Before    After    Improvement
──────────────────────────────────────────────────
Throughput      10/day    40/day      +300%
Lead Time       5 days    1 day       -80%
Quality         92%       99%         +8%
Labor Cost      $50/unit  $25/unit    -50%
```

---

## Key Takeaways

1. **Map before improving** - Understand current state first
2. **Bottleneck determines throughput** - Focus on constraints
3. **Little's Law applies everywhere** - L = λ × W
4. **Cycle efficiency is usually low** - Most time is waiting
5. **Takt time sets the pace** - Match production to demand
6. **Continuous improvement** - Never stop looking for waste

---

## Practice Exercises

### Exercise 1: Process Mapping
Map the process for enrolling a new student in a university course, from application to first class. Identify bottlenecks.

### Exercise 2: Bottleneck Calculation
A process has three steps: A (10 min), B (15 min), C (8 min). Calculate capacity, identify bottleneck, and determine effect of reducing B to 12 minutes.

### Exercise 3: Improvement Analysis
A loan approval process takes 10 days with 30 minutes of value-added time. Design a future state with 3-day lead time.

---

*Next: [Capacity Management](02-capacity-management.md)*
