# Six Sigma

## Learning Objectives

- Understand Six Sigma methodology and origins
- Apply the DMAIC improvement framework
- Use statistical tools for analysis
- Calculate sigma levels and process capability
- Integrate Lean and Six Sigma approaches

---

## Six Sigma Fundamentals

### What Is Six Sigma?

```
SIX SIGMA DEFINED:
─────────────────────────────────────────────────────

STATISTICAL DEFINITION:
─────────────────────────────────────────────────────
Six Sigma (6σ) = 3.4 defects per million opportunities
The process mean is 6 standard deviations from the
nearest specification limit.

BUSINESS DEFINITION:
─────────────────────────────────────────────────────
A disciplined, data-driven methodology for eliminating
defects in any process—from manufacturing to
transactional to service.

SIGMA LEVEL CONVERSION:
─────────────────────────────────────────────────────
Sigma    DPMO         Yield      Example
──────────────────────────────────────────────────
1σ      690,000       30.9%      Chaos
2σ      308,000       69.2%      Non-competitive
3σ       66,807       93.3%      Industry average
4σ        6,210       99.38%     Good
5σ          233       99.977%    Very good
6σ          3.4       99.9997%   World class

Note: Assumes 1.5σ shift in process mean
```

### Origins and History

```
SIX SIGMA EVOLUTION:
─────────────────────────────────────────────────────

MOTOROLA (1986-1990s):
─────────────────────────────────────────────────────
• Bill Smith developed methodology
• CEO Bob Galvin championed
• Won Baldrige Award 1988
• Saved billions in manufacturing

GENERAL ELECTRIC (1995-2000s):
─────────────────────────────────────────────────────
• Jack Welch made it company-wide
• Mandatory for executives
• Expanded beyond manufacturing
• Created certification levels

TODAY:
─────────────────────────────────────────────────────
• Standard in manufacturing
• Applied in healthcare, finance, services
• Combined with Lean (Lean Six Sigma)
• Project-based improvement
```

---

## The DMAIC Framework

### Overview

```
DMAIC PROCESS:
─────────────────────────────────────────────────────

┌─────────┐
│ DEFINE  │ What is the problem?
│         │ Who is the customer?
│         │ What is the scope?
└────┬────┘
     ▼
┌─────────┐
│ MEASURE │ What is current performance?
│         │ How do we measure it?
│         │ Is measurement valid?
└────┬────┘
     ▼
┌─────────┐
│ ANALYZE │ What causes the problem?
│         │ Which causes matter most?
│         │ What does data show?
└────┬────┘
     ▼
┌─────────┐
│ IMPROVE │ What are potential solutions?
│         │ Which solution is best?
│         │ Does it work?
└────┬────┘
     ▼
┌─────────┐
│ CONTROL │ How do we sustain gains?
│         │ How do we monitor?
│         │ How do we respond?
└─────────┘
```

### Define Phase

```
DEFINE PHASE TOOLS:
─────────────────────────────────────────────────────

PROJECT CHARTER:
─────────────────────────────────────────────────────
□ Problem statement
□ Business case
□ Goal statement
□ Project scope
□ Timeline
□ Team members
□ Resources needed

SIPOC DIAGRAM:
─────────────────────────────────────────────────────
Suppliers → Inputs → Process → Outputs → Customers

S: Who supplies inputs?
I: What inputs are needed?
P: What process steps?
O: What outputs are produced?
C: Who receives outputs?

VOICE OF CUSTOMER (VOC):
─────────────────────────────────────────────────────
Customer Need → CTQ (Critical to Quality)

Example:
Need: "Fast delivery"
CTQ: Delivery time ≤ 2 days

SMART GOALS:
─────────────────────────────────────────────────────
Specific:    Reduce order errors
Measurable:  From 5% to 1%
Achievable:  Based on benchmarks
Relevant:    Impacts customer satisfaction
Time-bound:  Within 6 months
```

### Measure Phase

```
MEASURE PHASE ACTIVITIES:
─────────────────────────────────────────────────────

DATA COLLECTION PLAN:
─────────────────────────────────────────────────────
What to measure:     Defects, cycle time, errors
How to measure:      Data source, method
Who will measure:    Responsible person
When to measure:     Frequency, duration
Sample size:         Statistical requirements

MEASUREMENT SYSTEM ANALYSIS (MSA):
─────────────────────────────────────────────────────
Validate that measurement is accurate

Gage R&R (Repeatability and Reproducibility):
• Repeatability: Same operator, same result
• Reproducibility: Different operators, same result

Target: Gage R&R < 10% (excellent)
        Gage R&R < 30% (acceptable)
        Gage R&R > 30% (unacceptable)

BASELINE METRICS:
─────────────────────────────────────────────────────
Calculate current performance:
• Defects Per Unit (DPU)
• Defects Per Million Opportunities (DPMO)
• Sigma Level
• Process Capability (Cp, Cpk)
• First Pass Yield

DPMO = (Defects / Opportunities) × 1,000,000

Example:
50 defects found
1,000 units inspected
5 opportunities per unit

DPMO = (50 / 5,000) × 1,000,000 = 10,000
Sigma Level ≈ 3.8
```

### Analyze Phase

```
ANALYZE PHASE TOOLS:
─────────────────────────────────────────────────────

ROOT CAUSE ANALYSIS:
─────────────────────────────────────────────────────

5 WHYS:
Problem: Customer received wrong order
Why 1: Picker grabbed wrong item
Why 2: Items looked similar
Why 3: No barcode verification
Why 4: Scanner not at station
Why 5: Budget not allocated
Root Cause: Investment prioritization

FISHBONE (ISHIKAWA) DIAGRAM:
─────────────────────────────────────────────────────
        Man         Machine        Method
          \           |            /
           \          |           /
            ─────────┬───────────
                     │
                  PROBLEM
            ─────────┴───────────
           /          |           \
          /           |            \
     Material     Measurement    Environment

STATISTICAL ANALYSIS:
─────────────────────────────────────────────────────
Hypothesis Testing:
• t-test (compare means)
• Chi-square (categorical data)
• ANOVA (multiple groups)
• Regression (relationships)

Correlation Analysis:
• Scatter plots
• Correlation coefficient (r)
• r² (coefficient of determination)

PARETO ANALYSIS:
─────────────────────────────────────────────────────
80/20 rule: 80% of problems from 20% of causes

Defect Type    Count    Cumulative %
───────────────────────────────────────
Wrong item      45         45%
Missing item    25         70%    ← Focus
Wrong address   15         85%      here
Late shipment   10         95%
Other            5        100%
```

### Improve Phase

```
IMPROVE PHASE ACTIVITIES:
─────────────────────────────────────────────────────

SOLUTION GENERATION:
─────────────────────────────────────────────────────
• Brainstorming
• Benchmarking
• Design of Experiments (DOE)
• Error-proofing (Poka-yoke)

SOLUTION EVALUATION:
─────────────────────────────────────────────────────
Criteria Matrix:

Solution    Effectiveness  Cost  Time  Risk  Score
─────────────────────────────────────────────────────
Option A         5          3      4     4     16
Option B         4          5      5     3     17 ←
Option C         3          4      3     5     15

PILOT TESTING:
─────────────────────────────────────────────────────
• Small-scale implementation
• Controlled conditions
• Measure results
• Adjust before full rollout

DESIGN OF EXPERIMENTS (DOE):
─────────────────────────────────────────────────────
Test multiple factors simultaneously

Factor        Low (-1)    High (+1)
───────────────────────────────────
Temperature    150°F       200°F
Pressure       50 psi      100 psi
Time           10 min      20 min

Run experiments, analyze interactions,
find optimal settings
```

### Control Phase

```
CONTROL PHASE ACTIVITIES:
─────────────────────────────────────────────────────

CONTROL PLAN:
─────────────────────────────────────────────────────
Document:
□ What to control
□ Specifications and tolerances
□ Measurement method
□ Frequency of measurement
□ Who is responsible
□ Reaction plan if out of control

STATISTICAL PROCESS CONTROL:
─────────────────────────────────────────────────────
• Control charts for monitoring
• Response to out-of-control signals
• Continuous measurement

MISTAKE-PROOFING (POKA-YOKE):
─────────────────────────────────────────────────────
Design solutions that prevent errors

Examples:
• USB ports only fit one way
• Gas nozzle won't fit diesel tank
• Spell check before sending

STANDARD OPERATING PROCEDURES:
─────────────────────────────────────────────────────
• Document new process
• Train all operators
• Visual work instructions
• Regular audits

PROJECT CLOSURE:
─────────────────────────────────────────────────────
□ Document results
□ Calculate savings
□ Transfer to process owner
□ Share learnings
□ Recognize team
```

---

## Six Sigma Roles

### Belt System

```
SIX SIGMA ROLES:
─────────────────────────────────────────────────────

CHAMPION:
─────────────────────────────────────────────────────
• Senior executive
• Removes barriers
• Allocates resources
• Selects projects

MASTER BLACK BELT:
─────────────────────────────────────────────────────
• Full-time Six Sigma expert
• Trains and mentors Black Belts
• Develops methodology
• Complex problem solving

BLACK BELT:
─────────────────────────────────────────────────────
• Full-time project leader
• 4-5 weeks training
• Leads DMAIC projects
• Statistical expertise
• Typically 1% of organization

GREEN BELT:
─────────────────────────────────────────────────────
• Part-time on projects
• 2 weeks training
• Supports Black Belt projects
• Leads smaller improvements
• 5-10% of organization

YELLOW BELT:
─────────────────────────────────────────────────────
• Awareness training
• Participates in projects
• Supports team
• All employees ideally
```

---

## Lean Six Sigma

### Integration

```
LEAN SIX SIGMA:
─────────────────────────────────────────────────────

LEAN FOCUS:              SIX SIGMA FOCUS:
Speed, flow, waste       Variation, defects, data

Combined: Speed + Quality

WHEN TO USE EACH:
─────────────────────────────────────────────────────
Problem Type             Approach
───────────────────────────────────────────────────
Obvious waste            Lean (just fix it)
Unknown root cause       Six Sigma (analyze)
Flow/speed issues        Lean tools
Quality/defects          Six Sigma tools
Complex process          Lean Six Sigma

LEAN SIX SIGMA TOOLS BY PHASE:
─────────────────────────────────────────────────────
Define:    SIPOC, VOC, Charter
Measure:   Process mapping, data collection
Analyze:   VSM, 5 Whys, statistical analysis
Improve:   Kaizen, SMED, Poka-yoke, DOE
Control:   5S, visual management, SPC
```

---

## Key Takeaways

1. **Six Sigma = 3.4 DPMO** - Near-perfect quality
2. **DMAIC is structured** - Disciplined problem-solving
3. **Data-driven decisions** - Not opinions or guesses
4. **Root cause matters** - Treat causes, not symptoms
5. **Sustain improvements** - Control phase is critical
6. **Lean + Six Sigma** - Speed and quality together

---

## Practice Exercises

### Exercise 1: Sigma Calculation
A call center handles 50,000 calls/month. Each call has 3 opportunities for error. Last month had 450 errors. Calculate DPMO and sigma level.

### Exercise 2: DMAIC Project
Define a DMAIC project for reducing invoice processing errors. Create a project charter and SIPOC diagram.

### Exercise 3: Root Cause Analysis
Use the 5 Whys and a fishbone diagram to analyze why a software release had critical bugs in production.

---

*Next: [Service Operations](06-service-operations.md)*
