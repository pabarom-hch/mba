# Project Management

## Learning Objectives

- Apply project management fundamentals
- Use planning and scheduling tools
- Manage project resources and risks
- Apply critical path analysis
- Understand agile methodologies

---

## Project Fundamentals

### What Is a Project?

```
PROJECT DEFINITION:
─────────────────────────────────────────────────────
A temporary endeavor undertaken to create a unique
product, service, or result.

PROJECT vs. OPERATIONS:
─────────────────────────────────────────────────────
Projects                    Operations
───────────────────────────────────────────────────
Temporary                   Ongoing
Unique output              Repetitive output
Defined start/end          Continuous
Cross-functional           Functional
Create capability          Use capability

TRIPLE CONSTRAINT:
─────────────────────────────────────────────────────

              SCOPE
                △
               /│\
              / │ \
             /  │  \
            /   │   \
           /    │    \
          /     │     \
         /      │      \
        /───────┼───────\
    TIME ───────────── COST

• Scope: What must be delivered
• Time: Schedule and deadlines
• Cost: Budget and resources

Change one → affects others
Quality is at the center (implicit 4th constraint)
```

### Project Life Cycle

```
PROJECT PHASES:
─────────────────────────────────────────────────────

INITIATION:
─────────────────────────────────────────────────────
• Define project purpose
• Identify stakeholders
• Develop business case
• Create project charter
• Get authorization

PLANNING:
─────────────────────────────────────────────────────
• Define scope (WBS)
• Create schedule
• Estimate costs
• Plan resources
• Identify risks
• Develop project plan

EXECUTION:
─────────────────────────────────────────────────────
• Perform the work
• Manage team
• Communicate progress
• Implement changes
• Quality assurance

MONITORING & CONTROL:
─────────────────────────────────────────────────────
• Track progress
• Compare to plan
• Manage changes
• Report status
• Take corrective action

CLOSING:
─────────────────────────────────────────────────────
• Complete deliverables
• Obtain acceptance
• Document lessons learned
• Release resources
• Archive documents
```

---

## Planning Tools

### Work Breakdown Structure

```
WORK BREAKDOWN STRUCTURE (WBS):
─────────────────────────────────────────────────────
Hierarchical decomposition of project scope

EXAMPLE: WEBSITE DEVELOPMENT PROJECT
─────────────────────────────────────────────────────

1.0 Website Project
    │
    ├── 1.1 Planning
    │       ├── 1.1.1 Requirements gathering
    │       ├── 1.1.2 Site architecture
    │       └── 1.1.3 Technical specifications
    │
    ├── 1.2 Design
    │       ├── 1.2.1 Wireframes
    │       ├── 1.2.2 Visual design
    │       └── 1.2.3 Design approval
    │
    ├── 1.3 Development
    │       ├── 1.3.1 Front-end coding
    │       ├── 1.3.2 Back-end coding
    │       ├── 1.3.3 Database setup
    │       └── 1.3.4 Integration
    │
    ├── 1.4 Testing
    │       ├── 1.4.1 Unit testing
    │       ├── 1.4.2 Integration testing
    │       └── 1.4.3 User acceptance testing
    │
    └── 1.5 Deployment
            ├── 1.5.1 Server setup
            ├── 1.5.2 Launch
            └── 1.5.3 Post-launch support

RULES:
─────────────────────────────────────────────────────
• 100% rule: WBS includes all work
• Deliverable-oriented (nouns, not verbs)
• Work packages at lowest level
• 8/80 rule: 8-80 hours per work package
```

### Gantt Charts

```
GANTT CHART:
─────────────────────────────────────────────────────
Visual timeline of project tasks

EXAMPLE:
─────────────────────────────────────────────────────
Task              Week 1  Week 2  Week 3  Week 4
────────────────────────────────────────────────────
Requirements      ████████
Design                    ████████████
Front-end                         ████████████████
Back-end                          ████████████████
Testing                                   ████████
Launch                                          ██
                        ▲
                        │
                   Today│

ELEMENTS:
─────────────────────────────────────────────────────
• Bars show duration
• Dependencies shown with arrows
• Milestones shown as diamonds ◆
• Critical path highlighted
• Progress indicated (fill %)
• Today line for tracking
```

### Network Diagrams

```
NETWORK DIAGRAM (CPM/PERT):
─────────────────────────────────────────────────────
Shows task dependencies and sequences

ACTIVITY-ON-NODE (AON):
─────────────────────────────────────────────────────

    ┌───────────┐        ┌───────────┐
    │     A     │───────→│     C     │
    │  5 days   │        │  3 days   │
    └───────────┘        └─────┬─────┘
          │                    │
          ▼                    ▼
    ┌───────────┐        ┌───────────┐
    │     B     │───────→│     D     │
    │  4 days   │        │  6 days   │
    └───────────┘        └───────────┘

Path 1: A → C → D = 5 + 3 + 6 = 14 days
Path 2: A → B → D = 5 + 4 + 6 = 15 days ← Critical

NOTATION:
─────────────────────────────────────────────────────
┌──────────────────────────┐
│ ES        EF            │  ES = Early Start
│      Task Name          │  EF = Early Finish
│      Duration           │  LS = Late Start
│ LS        LF            │  LF = Late Finish
└──────────────────────────┘  Float = LS - ES
```

---

## Critical Path Method

### CPM Calculations

```
CRITICAL PATH ANALYSIS:
─────────────────────────────────────────────────────

EXAMPLE PROJECT:
─────────────────────────────────────────────────────
Task  Duration  Predecessors
─────────────────────────────────────────
A     3 days    None
B     4 days    A
C     2 days    A
D     5 days    B, C
E     3 days    C
F     4 days    D, E

FORWARD PASS (Calculate ES, EF):
─────────────────────────────────────────────────────
Start at beginning, add durations

A: ES=0, EF=3
B: ES=3, EF=7  (after A)
C: ES=3, EF=5  (after A)
D: ES=7, EF=12 (after B and C; max of 7,5 = 7)
E: ES=5, EF=8  (after C)
F: ES=12, EF=16 (after D and E; max of 12,8 = 12)

Project Duration = 16 days

BACKWARD PASS (Calculate LS, LF):
─────────────────────────────────────────────────────
Start at end, subtract durations

F: LF=16, LS=12
E: LF=12, LS=9  (before F)
D: LF=12, LS=7  (before F)
C: LF=7, LS=5   (before D and E; min of 7,9 = 7)
B: LF=7, LS=3   (before D)
A: LF=3, LS=0   (before B and C; min of 3,5 = 3)

FLOAT CALCULATION:
─────────────────────────────────────────────────────
Float = LS - ES = LF - EF

A: 0-0 = 0 days (CRITICAL)
B: 3-3 = 0 days (CRITICAL)
C: 5-3 = 2 days
D: 7-7 = 0 days (CRITICAL)
E: 9-5 = 4 days
F: 12-12 = 0 days (CRITICAL)

CRITICAL PATH: A → B → D → F (16 days)
```

### PERT Estimation

```
PERT (Program Evaluation Review Technique):
─────────────────────────────────────────────────────
Uses three time estimates for uncertainty

THREE-POINT ESTIMATE:
─────────────────────────────────────────────────────
O = Optimistic (best case)
M = Most Likely (typical)
P = Pessimistic (worst case)

Expected Time (Te) = (O + 4M + P) / 6

Standard Deviation (σ) = (P - O) / 6

EXAMPLE:
─────────────────────────────────────────────────────
Task: Software development
O = 10 days
M = 15 days
P = 26 days

Te = (10 + 4×15 + 26) / 6 = 96/6 = 16 days
σ = (26 - 10) / 6 = 2.67 days

PROJECT PROBABILITY:
─────────────────────────────────────────────────────
Sum variances along critical path
Use normal distribution to find probability

P(Complete by target) = NORMDIST(Target, Te, σ)
```

---

## Project Crashing

### Time-Cost Trade-Off

```
PROJECT CRASHING:
─────────────────────────────────────────────────────
Reducing project duration by adding resources

CRASH COST CALCULATION:
─────────────────────────────────────────────────────
           Crash Cost - Normal Cost
Crash Cost/Day = ─────────────────────────
           Normal Time - Crash Time

EXAMPLE:
─────────────────────────────────────────────────────
Task  Normal    Normal   Crash    Crash    Cost/
      Time      Cost     Time     Cost     Day
──────────────────────────────────────────────────
A     4 days    $4,000   3 days   $5,500   $1,500
B     5 days    $5,000   3 days   $9,000   $2,000
C     3 days    $3,000   2 days   $4,000   $1,000
D     6 days    $6,000   4 days   $10,000  $2,000

CRASHING STRATEGY:
─────────────────────────────────────────────────────
1. Identify critical path
2. Find cheapest task to crash on critical path
3. Crash by 1 day (or until constraint)
4. Check if critical path changed
5. Repeat until target met or no more crashing

Always crash the cheapest critical activity first!
```

---

## Agile Methods

### Agile vs. Waterfall

```
AGILE vs. WATERFALL:
─────────────────────────────────────────────────────

WATERFALL:                    AGILE:
─────────────────────────────────────────────────────
Sequential                    Iterative
Plan-driven                   Adaptive
Upfront requirements          Evolving requirements
Document-heavy                Working software
Follow the plan               Respond to change
Fixed scope                   Fixed time (sprints)
Test at end                   Continuous testing

WHEN TO USE:
─────────────────────────────────────────────────────
Waterfall Best For:           Agile Best For:
• Clear requirements          • Evolving requirements
• Stable technology           • New technology
• Large, complex projects     • Innovation projects
• Regulatory compliance       • Customer involvement
• Distributed teams           • Co-located teams
```

### Scrum Framework

```
SCRUM FRAMEWORK:
─────────────────────────────────────────────────────

ROLES:
─────────────────────────────────────────────────────
Product Owner:   Defines what to build
Scrum Master:    Removes impediments
Dev Team:        Builds the product (3-9 people)

ARTIFACTS:
─────────────────────────────────────────────────────
Product Backlog: Prioritized list of features
Sprint Backlog:  Items selected for sprint
Increment:       Working product at sprint end

EVENTS:
─────────────────────────────────────────────────────
Sprint:          1-4 week time box
Sprint Planning: Select work for sprint
Daily Scrum:     15-minute daily sync
Sprint Review:   Demo to stakeholders
Retrospective:   Team improvement discussion

SPRINT CYCLE:
─────────────────────────────────────────────────────

 Product    Sprint       Daily         Sprint
 Backlog → Planning →   Scrum    →    Review
              │           │              │
              ▼           ▼              ▼
         ┌───────────────────────────────────┐
         │         2-Week Sprint            │
         │    ┌─────────────────────┐       │
         │    │ Working Increment   │       │
         │    └─────────────────────┘       │
         └───────────────────────────────────┘
                         │
                         ▼
                  Retrospective
```

---

## Key Takeaways

1. **Plan before executing** - WBS, schedule, budget
2. **Critical path determines duration** - Focus on it
3. **Float = flexibility** - Use wisely
4. **Crashing costs money** - Crash cheapest first
5. **Monitor continuously** - Earned value, variance
6. **Right methodology matters** - Waterfall vs. Agile

---

## Practice Exercises

### Exercise 1: Critical Path
Given a project with 8 tasks and dependencies, calculate ES, EF, LS, LF, and float. Identify the critical path.

### Exercise 2: PERT Analysis
Estimate a project using three-point estimates. Calculate probability of meeting a target date.

### Exercise 3: Agile Planning
Create a product backlog and plan a 2-week sprint for a mobile app feature. Define user stories and acceptance criteria.

---

*Return to: [Module Overview](README.md)*
