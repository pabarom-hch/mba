# Module 18 Assessment: Operations Management

## Exam Format
- **Total Points**: 100
- **Time Limit**: 3 hours
- **Sections**: Multiple Choice, Calculations, Short Answer, Case Analysis

---

## Section A: Multiple Choice (25 points)

*2.5 points each. Select the best answer.*

### Q1. According to Little's Law, if throughput is 10 units/hour and flow time is 3 hours, WIP inventory equals:
a) 3.33 units
b) 10 units
c) 13 units
d) 30 units

### Q2. Which process type is characterized by high volume and low variety?
a) Job shop
b) Batch
c) Continuous flow
d) Project

### Q3. In a process with four sequential steps, the bottleneck is:
a) The fastest step
b) The slowest step
c) The first step
d) The last step

### Q4. A Cp index of 1.33 indicates:
a) The process is not capable
b) The process is minimally capable
c) The process is capable with ~63 DPMO
d) The process is at Six Sigma level

### Q5. Which of the seven wastes does Lean consider the most harmful because it causes all others?
a) Defects
b) Overproduction
c) Waiting
d) Transportation

### Q6. The DMAIC framework is associated with:
a) Lean manufacturing
b) Six Sigma
c) Theory of Constraints
d) Total Quality Management

### Q7. In service operations, which characteristic makes capacity management most challenging?
a) Intangibility
b) Inseparability
c) Perishability
d) Heterogeneity

### Q8. Takt time is calculated by dividing:
a) Cycle time by demand
b) Available time by demand
c) Demand by capacity
d) Lead time by WIP

### Q9. In a queuing system, as utilization approaches 100%, waiting time:
a) Decreases linearly
b) Remains constant
c) Increases exponentially
d) Decreases exponentially

### Q10. The critical path in a project network is:
a) The path with the most activities
b) The path with the least slack/float
c) The shortest path through the network
d) The path with the highest cost

---

## Section B: Calculations (30 points)

*Show all work for full credit.*

### Q11. Process Analysis (10 points)

A manufacturing process has the following steps:

| Step | Cycle Time | Resources |
|------|------------|-----------|
| A | 6 min | 1 worker |
| B | 10 min | 1 worker |
| C | 4 min | 1 worker |
| D | 8 min | 1 worker |

a) Identify the bottleneck. (2 points)
b) Calculate the process capacity in units per hour. (2 points)
c) If demand is 5 units per hour, calculate utilization of each step. (3 points)
d) If Step B is doubled (2 parallel workers), what is the new capacity? (3 points)

### Q12. Queue Analysis (10 points)

A customer service center receives an average of 24 calls per hour. The average call handling time is 2 minutes. Assume Poisson arrivals and exponential service times (M/M/1 system).

a) Calculate server utilization. (2 points)
b) Calculate average number of customers in the queue. (3 points)
c) Calculate average wait time before being served. (3 points)
d) If a second agent is added (M/M/2), would this significantly reduce wait time? Explain. (2 points)

### Q13. Critical Path Analysis (10 points)

Given the following project data:

| Activity | Duration (days) | Predecessors |
|----------|-----------------|--------------|
| A | 3 | - |
| B | 5 | A |
| C | 4 | A |
| D | 2 | B |
| E | 6 | B, C |
| F | 3 | D, E |

a) Draw the project network diagram. (2 points)
b) Perform forward and backward passes to calculate ES, EF, LS, LF for each activity. (4 points)
c) Identify the critical path and project duration. (2 points)
d) Calculate the float for activity D. (2 points)

---

## Section C: Short Answer (20 points)

*5 points each. Answer concisely.*

### Q14. Theory of Constraints
Explain the five focusing steps of the Theory of Constraints. How does "Drum-Buffer-Rope" support these steps?

### Q15. Service Quality
Describe the SERVQUAL model's five dimensions. Give one example of how a restaurant could improve each dimension.

### Q16. Lean vs. Six Sigma
Compare and contrast Lean and Six Sigma approaches. When would you use each?

### Q17. Control Charts
Explain the difference between common cause and special cause variation. How do control charts help distinguish between them?

---

## Section D: Case Analysis (25 points)

### Case: FastPrint Manufacturing

**Background:**
FastPrint is a mid-sized printer manufacturer experiencing quality and delivery problems. Customer complaints have increased 40% over the past year, and on-time delivery has dropped from 95% to 78%.

**Process Overview:**
FastPrint's assembly process consists of five main stages:

| Stage | Description | Cycle Time | Quality (First Pass Yield) |
|-------|-------------|------------|---------------------------|
| 1 | Component preparation | 8 min | 99% |
| 2 | Main assembly | 15 min | 95% |
| 3 | Quality testing | 6 min | N/A (inspection) |
| 4 | Software installation | 12 min | 98% |
| 5 | Final packaging | 5 min | 100% |

**Current Situation:**
- Daily demand: 40 units
- Available time: 8 hours (480 minutes) per day
- 3 workers at each station (except testing: 1 worker)
- WIP inventory averages 120 units across the process
- Rework rate at Stage 2 is 5%, requiring repeat of Stage 2

**Exhibit A: Defect Pareto Analysis**
```
Defect Type          Count    Cumulative %
────────────────────────────────────────────
Assembly errors        45         45%
Software glitches      25         70%
Component defects      15         85%
Packaging damage       10         95%
Other                   5        100%
Total                 100        100%
```

**Exhibit B: Customer Feedback**
```
Top Complaints:
1. "Products don't work out of the box" (35%)
2. "Delivery took too long" (30%)
3. "Poor build quality" (20%)
4. "Wrong items shipped" (15%)
```

---

### Case Questions (25 points)

### Q18. Bottleneck Analysis (5 points)
a) Calculate the capacity of each stage considering the number of workers.
b) Identify the bottleneck.
c) Calculate the theoretical capacity of the process.

### Q19. Little's Law Application (5 points)
a) Using Little's Law, calculate the current flow time through the process.
b) If the target is to reduce WIP to 60 units while maintaining current throughput, what would be the new flow time?

### Q20. Quality Analysis (5 points)
a) Calculate the overall first-pass yield (rolled throughput yield) for the process.
b) Based on the Pareto analysis, where should improvement efforts focus?
c) What Six Sigma or quality tools would you apply?

### Q21. Process Improvement (5 points)
a) Using Lean principles, identify three sources of waste in this process.
b) Propose specific countermeasures for each waste identified.

### Q22. Implementation Recommendation (5 points)
Develop a prioritized improvement plan for FastPrint. Include:
a) Immediate actions (first 30 days)
b) Short-term improvements (1-3 months)
c) How you would measure success

---

## Answer Key

### Section A: Multiple Choice

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | d | L = λ × W; 10 × 3 = 30 units |
| 2 | c | Continuous flow is high volume, low variety (e.g., oil refinery) |
| 3 | b | Bottleneck is the slowest step that limits system capacity |
| 4 | c | Cp = 1.33 indicates ~63 ppm defects (4σ process) |
| 5 | b | Overproduction causes inventory, waiting, motion, etc. |
| 6 | b | DMAIC (Define, Measure, Analyze, Improve, Control) is Six Sigma |
| 7 | c | Perishability means unused capacity is lost forever |
| 8 | b | Takt Time = Available Time / Customer Demand |
| 9 | c | Wait time increases exponentially as utilization → 100% |
| 10 | b | Critical path has zero slack (any delay delays project) |

### Section B: Calculations

**Q11. Process Analysis (10 points)**

a) **Bottleneck** (2 points):
Step B with 10 min cycle time is the bottleneck (longest cycle time)

b) **Process capacity** (2 points):
Capacity = 60 min / 10 min = 6 units/hour

c) **Utilization at 5 units/hour demand** (3 points):
- Step A: (5 × 6) / 60 = 50%
- Step B: (5 × 10) / 60 = 83.3%
- Step C: (5 × 4) / 60 = 33.3%
- Step D: (5 × 8) / 60 = 66.7%

d) **New capacity with doubled Step B** (3 points):
Step B capacity = 60 / (10/2) = 12 units/hour
New bottleneck is Step D at 60/8 = 7.5 units/hour
New process capacity = 7.5 units/hour

**Q12. Queue Analysis (10 points)**

a) **Utilization** (2 points):
λ = 24/hour
μ = 60/2 = 30/hour
ρ = λ/μ = 24/30 = 0.80 = 80%

b) **Average in queue (Lq)** (3 points):
Lq = ρ² / (1 - ρ) = 0.64 / 0.20 = 3.2 customers

c) **Average wait time (Wq)** (3 points):
Wq = Lq / λ = 3.2 / 24 = 0.133 hours = 8 minutes

d) **Second agent impact** (2 points):
Yes, significantly. With M/M/2 at 40% utilization per server, wait times drop dramatically—likely to under 1 minute. The non-linear relationship means adding capacity when near saturation has dramatic effect.

**Q13. Critical Path Analysis (10 points)**

a) **Network diagram** (2 points):
```
       ┌──B(5)──┬──D(2)──┐
       │        │        │
A(3)───┤        ├────────┼──F(3)
       │        │        │
       └──C(4)──┴──E(6)──┘
```

b) **Forward/Backward Pass** (4 points):

| Activity | Duration | ES | EF | LS | LF | Float |
|----------|----------|----|----|----|----|-------|
| A | 3 | 0 | 3 | 0 | 3 | 0 |
| B | 5 | 3 | 8 | 3 | 8 | 0 |
| C | 4 | 3 | 7 | 4 | 8 | 1 |
| D | 2 | 8 | 10 | 12 | 14 | 4 |
| E | 6 | 8 | 14 | 8 | 14 | 0 |
| F | 3 | 14 | 17 | 14 | 17 | 0 |

c) **Critical path** (2 points):
A → B → E → F = 17 days

d) **Float for D** (2 points):
Float = LS - ES = 12 - 8 = 4 days

### Section C: Short Answer

**Q14. Theory of Constraints (5 points)**

Five Focusing Steps:
1. **Identify** the constraint (find the bottleneck)
2. **Exploit** the constraint (maximize its output)
3. **Subordinate** everything else (align to support constraint)
4. **Elevate** the constraint (invest to increase capacity)
5. **Repeat** (don't let inertia become the constraint)

Drum-Buffer-Rope supports this by:
- Drum: Bottleneck sets the pace (production rate)
- Buffer: Time buffer protects bottleneck from starvation
- Rope: Signal releases work only as fast as bottleneck can process

**Q15. Service Quality - SERVQUAL (5 points)**

Five dimensions with restaurant examples:
1. **Reliability**: Deliver order correctly every time
2. **Responsiveness**: Quick refills, attentive service
3. **Assurance**: Knowledgeable staff about menu/ingredients
4. **Empathy**: Remember regular customers' preferences
5. **Tangibles**: Clean restaurant, attractive presentation

**Q16. Lean vs. Six Sigma (5 points)**

| Lean | Six Sigma |
|------|-----------|
| Focus: Speed, flow, waste | Focus: Variation, defects, data |
| Tools: 5S, Kanban, SMED | Tools: DMAIC, statistical analysis |
| Philosophy: Just-in-time | Philosophy: Data-driven decisions |
| Origin: Toyota | Origin: Motorola |

Use Lean when: Obvious waste, flow problems, speed issues
Use Six Sigma when: Root cause unknown, quality problems, need data analysis
Best practice: Combine as Lean Six Sigma

**Q17. Control Charts (5 points)**

**Common cause variation**: Natural, inherent variability always present in a stable process. Random fluctuations within control limits.

**Special cause variation**: Unusual events causing variation outside normal pattern. Assignable to specific factors.

Control charts distinguish them by:
- Points within control limits = common cause only
- Points outside limits = special cause present
- Patterns (runs, trends) = special cause present
- Only investigate special causes; common causes require process redesign

### Section D: Case Analysis

**Q18. Bottleneck Analysis (5 points)**

a) Stage capacities (with workers):
- Stage 1: 3 workers × (60/8) = 22.5 units/hour
- Stage 2: 3 workers × (60/15) = 12 units/hour
- Stage 3: 1 worker × (60/6) = 10 units/hour ← Bottleneck
- Stage 4: 3 workers × (60/12) = 15 units/hour
- Stage 5: 3 workers × (60/5) = 36 units/hour

b) Bottleneck: Stage 3 (Quality testing) at 10 units/hour

c) Theoretical capacity: 10 units/hour = 80 units/day (8 hours)
Actual needed: 40 units/day = 5 units/hour
Current utilization at bottleneck: 50%

**Q19. Little's Law Application (5 points)**

a) Current flow time:
WIP = 120 units
Throughput = 40 units/day = 5 units/hour
Flow Time = WIP / Throughput = 120 / 5 = 24 hours (3 days)

b) Target flow time:
Flow Time = 60 / 5 = 12 hours (1.5 days)

**Q20. Quality Analysis (5 points)**

a) Rolled Throughput Yield:
RTY = 0.99 × 0.95 × 0.98 × 1.00 = 0.922 = 92.2%
(About 8% of units need rework)

b) Focus on assembly errors (45% of defects) per Pareto—80% of problems from top two causes

c) Apply:
- DMAIC project on assembly errors
- 5 Whys/Fishbone for root cause
- Poka-yoke (error-proofing) at assembly
- Statistical process control on key variables

**Q21. Process Improvement (5 points)**

Three wastes identified:
1. **Waiting**: WIP of 120 = 24 hours flow time (product waiting between stages)
   - Countermeasure: Balance line, reduce batch sizes, implement pull system

2. **Defects**: 5% rework at Stage 2
   - Countermeasure: Poka-yoke fixtures, operator training, quality at source

3. **Overprocessing**: Separate testing stage (100% inspection)
   - Countermeasure: Build quality in, statistical sampling, jidoka

**Q22. Implementation Recommendation (5 points)**

**Immediate (0-30 days):**
- Add second tester to relieve bottleneck
- Launch DMAIC project on assembly defects
- Implement andon system for immediate quality feedback

**Short-term (1-3 months):**
- Redesign assembly fixtures to error-proof Stage 2
- Implement Kanban between stages
- Train operators on quality standards

**Success metrics:**
- First Pass Yield > 97%
- On-Time Delivery > 95%
- WIP reduced to 60 units
- Customer complaints reduced 50%

---

## Grading Rubric

| Section | Points | Passing (70%) |
|---------|--------|---------------|
| A: Multiple Choice | 25 | 17.5 |
| B: Calculations | 30 | 21 |
| C: Short Answer | 20 | 14 |
| D: Case Analysis | 25 | 17.5 |
| **Total** | **100** | **70** |

---

*End of Assessment*
