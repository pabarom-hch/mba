# Capacity Management

## Learning Objectives

- Understand capacity planning concepts
- Apply capacity measurement techniques
- Use queuing theory for capacity decisions
- Develop capacity strategies
- Balance demand and supply

---

## Capacity Fundamentals

### Defining Capacity

```
CAPACITY DEFINITIONS:
─────────────────────────────────────────────────────

DESIGN CAPACITY:
─────────────────────────────────────────────────────
Maximum output under ideal conditions
• Theoretical maximum
• Based on engineering specs
• Rarely achieved in practice

EFFECTIVE CAPACITY:
─────────────────────────────────────────────────────
Realistic output considering constraints
• Accounts for maintenance, setup, breaks
• Typical operating conditions
• Usually 85-95% of design

ACTUAL OUTPUT:
─────────────────────────────────────────────────────
What is actually produced
• Real-world performance
• Affected by quality, breakdowns, variability

CAPACITY METRICS:
─────────────────────────────────────────────────────
Utilization = Actual Output / Design Capacity

Efficiency = Actual Output / Effective Capacity

Example:
Design Capacity:     100 units/hour
Effective Capacity:  90 units/hour
Actual Output:       72 units/hour

Utilization = 72/100 = 72%
Efficiency = 72/90 = 80%
```

### Capacity Measurement

```
CAPACITY MEASUREMENT APPROACHES:
─────────────────────────────────────────────────────

OUTPUT-BASED:
─────────────────────────────────────────────────────
• Units per time period
• Works for standardized products
• Example: Cars per week, patients per day

INPUT-BASED:
─────────────────────────────────────────────────────
• Resources available
• Works for varied outputs
• Example: Machine hours, labor hours, beds

MULTIPLE PRODUCT CAPACITY:
─────────────────────────────────────────────────────
When products have different processing times,
use aggregate units or standard hours

Example (Standard Hours):
Product A: 2 hours/unit × 100 units = 200 hours
Product B: 3 hours/unit × 50 units = 150 hours
Product C: 1 hour/unit × 200 units = 200 hours
Total Capacity Required: 550 standard hours

SERVICE CAPACITY CONSIDERATIONS:
─────────────────────────────────────────────────────
• Perishable (can't inventory capacity)
• Variable demand (peaks and valleys)
• Customer-imposed variability
• Service time variability
```

---

## Queuing Theory

### Queue Basics

```
QUEUING SYSTEM:
─────────────────────────────────────────────────────

 Arrivals                                   Departures
    →    ┌─────────────────────────────┐      →
─────────│  QUEUE  │  SERVICE  │ EXIT │───────────
    →    │ (Wait)  │ (Process) │      │      →
─────────└─────────────────────────────┘───────────

QUEUING NOTATION:
─────────────────────────────────────────────────────
λ (lambda) = Arrival rate (customers/time)
μ (mu) = Service rate (customers/time per server)
s = Number of servers
ρ (rho) = Utilization = λ / (s × μ)

QUEUE CHARACTERISTICS:
─────────────────────────────────────────────────────
• Arrival pattern (Poisson, deterministic)
• Service pattern (exponential, fixed)
• Number of servers (1, 2, multiple)
• Queue discipline (FIFO, priority)
• System capacity (finite, infinite)
```

### The M/M/1 Queue

```
M/M/1 QUEUE FORMULAS:
─────────────────────────────────────────────────────
Single server, random arrivals, random service

CONDITIONS:
─────────────────────────────────────────────────────
λ = Arrival rate
μ = Service rate
ρ = λ/μ (must be < 1 for stable queue)

KEY FORMULAS:
─────────────────────────────────────────────────────
Utilization (ρ):           λ / μ

Average in Queue (Lq):     λ² / [μ(μ - λ)]
                          = ρ² / (1 - ρ)

Average in System (L):     λ / (μ - λ)
                          = ρ / (1 - ρ)

Average Wait (Wq):         λ / [μ(μ - λ)]
                          = ρ / [μ(1 - ρ)]

Average Time in System:    1 / (μ - λ)
                          = 1 / [μ(1 - ρ)]

EXAMPLE:
─────────────────────────────────────────────────────
λ = 20 customers/hour
μ = 25 customers/hour

ρ = 20/25 = 0.80 (80% utilization)

Lq = (0.80)² / (1 - 0.80) = 0.64 / 0.20 = 3.2 in queue
L = 0.80 / (1 - 0.80) = 0.80 / 0.20 = 4.0 in system

Wq = 3.2 / 20 = 0.16 hours = 9.6 minutes wait
W = 4.0 / 20 = 0.20 hours = 12 minutes total
```

### The Utilization-Wait Relationship

```
UTILIZATION VS. WAIT TIME:
─────────────────────────────────────────────────────

Wait Time
    │
    │                              *
    │                           *
    │                        *
    │                     *
    │                  *
    │               *
    │            *
    │        *
    │    *
    │*
    └────────────────────────────────────
    0%    50%    80%   90%  95% 100%  Utilization

KEY INSIGHT:
─────────────────────────────────────────────────────
Wait time increases exponentially as utilization
approaches 100%.

PRACTICAL IMPLICATIONS:
─────────────────────────────────────────────────────
Utilization      Wait Behavior
───────────────────────────────────────
   50%           Minimal wait
   70%           Noticeable wait
   80%           Significant wait
   90%           Long waits
   95%           Very long waits
   100%          Queue grows infinitely

Trade-off: Cost efficiency vs. customer experience
Target utilization depends on cost of waiting
```

---

## Capacity Planning

### Planning Horizons

```
CAPACITY PLANNING LEVELS:
─────────────────────────────────────────────────────

LONG-RANGE (3-10 years):
─────────────────────────────────────────────────────
• Facilities and locations
• Major equipment
• Strategic partnerships
• Technology platforms

Decisions:
□ Build new plant?
□ Expand existing facility?
□ Enter new geography?

INTERMEDIATE (6 months - 3 years):
─────────────────────────────────────────────────────
• Workforce levels
• Equipment additions
• Subcontracting
• Inventory strategies

Decisions:
□ Hire/layoff workers?
□ Add shifts?
□ Outsource production?

SHORT-RANGE (days to 6 months):
─────────────────────────────────────────────────────
• Scheduling
• Overtime
• Inventory deployment
• Temporary workers

Decisions:
□ Assign overtime?
□ Expedite orders?
□ Adjust schedule?
```

### Capacity Strategies

```
CAPACITY STRATEGY OPTIONS:
─────────────────────────────────────────────────────

LEAD STRATEGY:
─────────────────────────────────────────────────────
Add capacity BEFORE demand requires it

Capacity
    │    ─────────────     ← Capacity
    │   /
    │  /
    │ /        ........ ← Demand
    │/.......
    └────────────────────────── Time

+ Never miss sales
+ Room for growth
- Risk of overcapacity
- Higher costs

MATCH/TRACK STRATEGY:
─────────────────────────────────────────────────────
Add capacity incrementally to match demand

Capacity
    │      ─────
    │     /     ─────
    │    /     /     ..... ← Demand
    │───/...../.....
    └────────────────────────── Time

+ Balanced approach
+ Moderate risk
- Some capacity constraints
- Some excess

LAG STRATEGY:
─────────────────────────────────────────────────────
Add capacity AFTER demand proves need

Capacity
    │           ─────
    │          /
    │  ......./ ← Demand
    │./───────
    └────────────────────────── Time

+ Minimal overcapacity
+ Lower cost
- May lose sales
- Customer dissatisfaction
```

### Capacity Expansion Analysis

```
CAPACITY INVESTMENT DECISION:
─────────────────────────────────────────────────────

STEP 1: FORECAST DEMAND
─────────────────────────────────────────────────────
Year        Demand (units)
──────────────────────────────
2024            80,000
2025            95,000
2026           110,000
2027           130,000
2028           150,000

STEP 2: ASSESS CURRENT CAPACITY
─────────────────────────────────────────────────────
Current Capacity: 100,000 units/year
Capacity Shortage begins: 2026

STEP 3: EVALUATE OPTIONS
─────────────────────────────────────────────────────
Option A: Expand in 2025
         +75,000 units capacity
         Investment: $5 million

Option B: Expand in 2027
         +75,000 units capacity
         Investment: $5 million

Option C: Two smaller expansions
         +40,000 in 2025
         +40,000 in 2027
         Investment: $3M + $3.5M

STEP 4: ANALYZE NPV
─────────────────────────────────────────────────────
Consider:
• Revenue from additional sales
• Cost savings from scale
• Investment cost
• Time value of money
• Risk of over/under capacity
```

---

## Demand Management

### Matching Supply and Demand

```
DEMAND MANAGEMENT STRATEGIES:
─────────────────────────────────────────────────────

SHIFT DEMAND TO OFF-PEAK:
─────────────────────────────────────────────────────
• Off-peak pricing (matinees, weeknight rates)
• Appointments/reservations
• Promotions during slow periods
• Dynamic pricing

MANAGE PEAK DEMAND:
─────────────────────────────────────────────────────
• Waitlists
• Reservation systems
• Prioritization
• Overbooking

INCREASE SUPPLY AT PEAK:
─────────────────────────────────────────────────────
• Overtime
• Temporary workers
• Subcontracting
• Cross-trained employees

CREATE CAPACITY:
─────────────────────────────────────────────────────
• Customer self-service
• Automation
• Part-time employees
• Sharing economy resources
```

### Yield Management

```
YIELD/REVENUE MANAGEMENT:
─────────────────────────────────────────────────────
Maximizing revenue from fixed, perishable capacity

PRINCIPLES:
─────────────────────────────────────────────────────
• Segment customers by willingness to pay
• Create fare fences (restrictions)
• Forecast demand by segment
• Optimize capacity allocation
• Manage overbooking

AIRLINE EXAMPLE:
─────────────────────────────────────────────────────
Flight Capacity: 150 seats
Fare Classes:

Class    Fare    Restrictions           Allocation
────────────────────────────────────────────────────
First    $1,500  None                   12 seats
Business $800    Non-refundable         28 seats
Economy  $350    14-day advance         60 seats
Discount $150    Sat stay, 21-day adv   50 seats

Total Potential Revenue:
(12×$1,500) + (28×$800) + (60×$350) + (50×$150)
= $18,000 + $22,400 + $21,000 + $7,500
= $68,900

vs. All economy @ $350 × 150 = $52,500

OVERBOOKING:
─────────────────────────────────────────────────────
If historical no-show rate = 8%
Book 150 / 0.92 = 163 seats
Expected shows = 163 × 0.92 = 150

Risk: Sometimes 152 show up (bump 2 passengers)
```

---

## Key Takeaways

1. **Know your capacity types** - Design vs. effective vs. actual
2. **Utilization has limits** - High utilization = long waits
3. **Queuing theory matters** - Predict wait times mathematically
4. **Strategy alignment** - Match capacity strategy to business strategy
5. **Demand management** - Don't just add capacity; manage demand
6. **Financial analysis** - Capacity decisions are investments

---

## Practice Exercises

### Exercise 1: Queue Analysis
A help desk receives 40 calls/hour. Each call takes 1.2 minutes. Calculate utilization, average wait, and queue length. What happens if call volume increases to 45/hour?

### Exercise 2: Capacity Strategy
A manufacturer is at 95% capacity. Demand is growing 10% annually. Compare lead vs. lag capacity strategies over 5 years.

### Exercise 3: Yield Management
A hotel has 200 rooms. Design a pricing and allocation strategy for business travelers, tourists, and group bookings.

---

*Next: [Quality Management](03-quality-management.md)*
