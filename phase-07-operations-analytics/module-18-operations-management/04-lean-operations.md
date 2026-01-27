# Lean Operations

## Learning Objectives

- Understand lean philosophy and origins
- Identify the seven types of waste
- Apply lean tools and techniques
- Design pull systems and Kanban
- Implement continuous improvement culture

---

## Lean Fundamentals

### Origins of Lean

```
THE TOYOTA PRODUCTION SYSTEM (TPS):
─────────────────────────────────────────────────────

HISTORICAL CONTEXT:
─────────────────────────────────────────────────────
1950s Japan: Limited resources, small market
Toyota couldn't copy Ford's mass production
Had to develop different approach:
• Small batches, not mass production
• Flexibility, not scale
• Waste elimination, not volume

KEY ARCHITECTS:
─────────────────────────────────────────────────────
Taiichi Ohno:     Just-in-Time, Kanban
Shigeo Shingo:    SMED, Poka-yoke
Kiichiro Toyoda:  Customer focus, flow

TPS HOUSE:
─────────────────────────────────────────────────────
              ┌────────────────────┐
              │     Best Quality   │
              │   Lowest Cost      │
              │   Shortest Lead    │
              │     Time           │
              └─────────┬──────────┘
                       │
    ┌──────────────────┴──────────────────┐
    │                                     │
┌───┴───┐                           ┌─────┴────┐
│ Just  │                           │  Jidoka  │
│  In   │                           │(Quality) │
│ Time  │                           │ • Stop   │
│       │                           │   when   │
│•Takt  │                           │  problem │
│ time  │                           │• Visual  │
│•Flow  │                           │• Built-in│
│•Pull  │                           │ quality  │
└───┬───┘                           └────┬─────┘
    │                                    │
    └────────────────┬───────────────────┘
                     │
    ┌────────────────┴────────────────┐
    │       Heijunka (Leveling)       │
    │     Standardized Work           │
    │     Kaizen (Continuous          │
    │           Improvement)          │
    └─────────────────────────────────┘
                     │
    ┌────────────────┴────────────────┐
    │        STABILITY                │
    │   (Reliable processes,         │
    │    equipment, people)          │
    └─────────────────────────────────┘
```

### Lean Principles

```
THE FIVE LEAN PRINCIPLES (Womack & Jones):
─────────────────────────────────────────────────────

1. SPECIFY VALUE
─────────────────────────────────────────────────────
• Define value from customer perspective
• What customer is willing to pay for
• Not what company thinks is valuable
• Specific products/services at specific prices

2. MAP THE VALUE STREAM
─────────────────────────────────────────────────────
• Identify all steps in value stream
• From raw material to customer delivery
• Distinguish value-adding from waste
• Include information and material flow

3. CREATE FLOW
─────────────────────────────────────────────────────
• Make value-creating steps flow continuously
• Eliminate batching and queuing
• One-piece flow where possible
• Remove bottlenecks and interruptions

4. ESTABLISH PULL
─────────────────────────────────────────────────────
• Produce only what customer demands
• Nothing made upstream until signaled
• Kanban and other pull signals
• Replace push with pull

5. PURSUE PERFECTION
─────────────────────────────────────────────────────
• Continuous improvement (Kaizen)
• Never satisfied with status quo
• Reduce waste continuously
• Engage everyone in improvement
```

---

## The Seven Wastes

### Identifying Waste (Muda)

```
THE SEVEN WASTES (TIMWOOD):
─────────────────────────────────────────────────────

T - TRANSPORTATION
─────────────────────────────────────────────────────
Moving products unnecessarily
• Moving parts between buildings
• Transporting WIP between departments
• Multiple handling
Cause: Poor layout, batch processing

I - INVENTORY
─────────────────────────────────────────────────────
Excess stock beyond immediate need
• Raw materials
• Work-in-process
• Finished goods
Cause: Overproduction, poor forecasting, batching

M - MOTION
─────────────────────────────────────────────────────
Unnecessary movement of people
• Walking to get tools
• Reaching, bending
• Looking for information
Cause: Poor workplace organization, layout

W - WAITING
─────────────────────────────────────────────────────
Idle time due to delays
• Waiting for materials
• Waiting for approvals
• Waiting for machines
Cause: Imbalanced workloads, batching

O - OVERPRODUCTION
─────────────────────────────────────────────────────
Making more than needed
• Ahead of schedule
• "Just in case" production
• Larger batches than required
Cause: Long changeovers, poor forecasting

O - OVERPROCESSING
─────────────────────────────────────────────────────
Doing more work than required
• Unnecessary features
• Higher precision than needed
• Redundant approvals
Cause: Unclear requirements, habit

D - DEFECTS
─────────────────────────────────────────────────────
Products or services that don't meet spec
• Rework
• Scrap
• Errors and corrections
Cause: Process variation, poor design

+ UNDERUTILIZED TALENT (8th waste)
─────────────────────────────────────────────────────
Not using people's skills and ideas
• Unused creativity
• Not listening to workers
• Rigid hierarchies
Cause: Culture, management style
```

### Waste Identification Examples

```
WASTE IN OFFICE PROCESSES:
─────────────────────────────────────────────────────

Process: Purchase Order Approval

Waste Type          Example
─────────────────────────────────────────────────────
Transportation     Email routing through 5 people
Inventory          Inbox backlog of requests
Motion             Walking to get signatures
Waiting            Sitting in approval queue
Overproduction     Creating unused reports
Overprocessing     Multiple approval levels for $50
Defects            Incomplete forms needing rework

Before Lean:       10 days, 12 steps
After Lean:        2 days, 4 steps
```

---

## Lean Tools

### 5S Workplace Organization

```
THE 5S SYSTEM:
─────────────────────────────────────────────────────

1. SORT (Seiri)
─────────────────────────────────────────────────────
Remove unnecessary items
• Red tag items not needed
• Remove from workplace
• Keep only what's needed

2. SET IN ORDER (Seiton)
─────────────────────────────────────────────────────
Organize remaining items
• A place for everything
• Everything in its place
• Visual location indicators

3. SHINE (Seiso)
─────────────────────────────────────────────────────
Clean workplace regularly
• Cleaning is inspection
• Identify abnormalities
• Maintain equipment

4. STANDARDIZE (Seiketsu)
─────────────────────────────────────────────────────
Create standards to maintain
• Visual standards
• Checklists
• Regular audits

5. SUSTAIN (Shitsuke)
─────────────────────────────────────────────────────
Make 5S a habit
• Training and discipline
• Management commitment
• Continuous practice

5S BENEFITS:
─────────────────────────────────────────────────────
• Reduced search time
• Improved safety
• Increased productivity
• Better quality
• Foundation for other improvements
```

### Visual Management

```
VISUAL MANAGEMENT TOOLS:
─────────────────────────────────────────────────────

ANDON (Visual signals):
─────────────────────────────────────────────────────
• Light signals indicating status
• Green: Normal operation
• Yellow: Attention needed
• Red: Problem, stop

KANBAN BOARDS:
─────────────────────────────────────────────────────
┌──────────┬──────────┬──────────┐
│ To Do    │ In Work  │ Done     │
├──────────┼──────────┼──────────┤
│ [Task A] │ [Task D] │ [Task G] │
│ [Task B] │ [Task E] │ [Task H] │
│ [Task C] │ [Task F] │          │
└──────────┴──────────┴──────────┘

PERFORMANCE BOARDS:
─────────────────────────────────────────────────────
Daily metrics visible to team
• Safety
• Quality
• Delivery
• Productivity
• Morale

FLOOR MARKINGS:
─────────────────────────────────────────────────────
• Walkways
• Work areas
• Material locations
• Danger zones
```

### Pull Systems and Kanban

```
PUSH VS. PULL:
─────────────────────────────────────────────────────

PUSH SYSTEM:
─────────────────────────────────────────────────────
Production based on forecast
Work pushed to next station when complete

[Stage 1] ──PUSH→ [Stage 2] ──PUSH→ [Stage 3]

Problems: Inventory buildup, long lead times

PULL SYSTEM:
─────────────────────────────────────────────────────
Production triggered by actual demand
Work pulled by downstream station

[Stage 1] ←SIGNAL─ [Stage 2] ←SIGNAL─ [Stage 3] ← Customer

Benefits: Lower inventory, shorter lead times

KANBAN SYSTEM:
─────────────────────────────────────────────────────

┌─────────┐    ┌─────────┐    ┌─────────┐
│ Station │    │ Station │    │ Station │
│    A    │───→│    B    │───→│    C    │───→
└─────────┘    └─────────┘    └─────────┘
     ↑              ↑              ↑
     └──── Kanban ──┴──── Kanban ──┘

1. Station C uses a container
2. Empty container + Kanban returns to B
3. B produces to refill container
4. B's empty triggers A
5. Cycle continues

KANBAN CALCULATION:
─────────────────────────────────────────────────────
Number of Kanbans = D × L × (1 + S)
                    ─────────────────
                          C

D = Demand rate
L = Lead time
S = Safety factor
C = Container quantity
```

---

## Quick Changeover (SMED)

### Single-Minute Exchange of Die

```
SMED METHODOLOGY:
─────────────────────────────────────────────────────

GOAL: Reduce changeover time to single-digit minutes

STEP 1: SEPARATE INTERNAL AND EXTERNAL
─────────────────────────────────────────────────────
Internal: Must be done with machine stopped
External: Can be done while machine is running

Before: All done during downtime
After: External done during operation

STEP 2: CONVERT INTERNAL TO EXTERNAL
─────────────────────────────────────────────────────
• Pre-stage materials and tools
• Pre-heat dies
• Prepare next job setup
• Use standardized fixtures

STEP 3: STREAMLINE INTERNAL OPERATIONS
─────────────────────────────────────────────────────
• Parallel operations (multiple people)
• Quick fasteners vs. bolts
• Eliminate adjustments
• One-touch setups

STEP 4: STREAMLINE EXTERNAL OPERATIONS
─────────────────────────────────────────────────────
• Better tool organization
• Dedicated changeover carts
• Checklists and standards
• Training

EXAMPLE RESULTS:
─────────────────────────────────────────────────────
Press Changeover:
Before SMED:    4 hours
After Stage 1:  2.5 hours (external separated)
After Stage 2:  1 hour (conversions)
After Stage 3:  10 minutes (streamlined)

Impact: More changeovers, smaller batches, less WIP
```

---

## Continuous Improvement

### Kaizen Culture

```
KAIZEN PRINCIPLES:
─────────────────────────────────────────────────────

"Change for the better" - continuous, incremental

KEY ELEMENTS:
─────────────────────────────────────────────────────
• Everyone participates
• Small improvements daily
• Process over results
• Gemba (go see)
• Data-driven decisions

KAIZEN EVENT (BLITZ):
─────────────────────────────────────────────────────
Focused, intensive improvement activity
Duration: 3-5 days typically

Day 1: Training, current state mapping
Day 2: Analysis, waste identification
Day 3: Solution design
Day 4: Implementation
Day 5: Testing, documentation, celebration

PROBLEM-SOLVING (A3 THINKING):
─────────────────────────────────────────────────────
┌──────────────────┬──────────────────┐
│ Background       │ Target Condition │
│ Current Condition│ Root Cause       │
├──────────────────┼──────────────────┤
│ Countermeasures  │ Implementation   │
│ (Solutions)      │ Plan             │
├──────────────────┴──────────────────┤
│ Follow-up and Results               │
└─────────────────────────────────────┘

One page, structured problem-solving
```

---

## Key Takeaways

1. **Waste is the enemy** - Relentlessly eliminate it
2. **Value from customer perspective** - Not what you think
3. **Flow and pull** - Stop pushing, start pulling
4. **Visual management** - Make problems visible
5. **Everyone improves** - Kaizen is not just for managers
6. **Never finished** - Pursuit of perfection is continuous

---

## Practice Exercises

### Exercise 1: Waste Walk
Conduct a waste walk in a process you know. Identify examples of each of the seven wastes. Estimate time/cost impact.

### Exercise 2: 5S Implementation
Design a 5S implementation plan for an office workspace. Include visual standards for each S.

### Exercise 3: Kanban Design
A workstation uses 200 parts/day. Lead time is 2 days, safety factor is 10%, and containers hold 50 parts. How many Kanbans are needed?

---

*Next: [Six Sigma](05-six-sigma.md)*
