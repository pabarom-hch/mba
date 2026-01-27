# Quality Management

## Learning Objectives

- Define quality and its dimensions
- Apply Total Quality Management principles
- Use statistical process control tools
- Understand quality standards and certifications
- Calculate the cost of quality

---

## Quality Fundamentals

### Defining Quality

```
QUALITY DEFINITIONS:
─────────────────────────────────────────────────────

TRANSCENDENT:
─────────────────────────────────────────────────────
"I know it when I see it"
• Innate excellence
• Absolute, universal
• Difficult to define or measure

PRODUCT-BASED:
─────────────────────────────────────────────────────
Quality as measurable attributes
• More of X = higher quality
• Objective, comparable
• Example: More durability = more quality

USER-BASED:
─────────────────────────────────────────────────────
"Fitness for use" (Juran)
• Meets customer needs
• Subjective, varies by customer
• Quality is in the eye of the beholder

MANUFACTURING-BASED:
─────────────────────────────────────────────────────
"Conformance to specifications" (Crosby)
• Meeting design requirements
• Objective, measurable
• Defect-free production

VALUE-BASED:
─────────────────────────────────────────────────────
Quality at an acceptable price
• Cost-performance trade-off
• Affordable excellence
• Value = Quality / Price
```

### Dimensions of Quality

```
GARVIN'S EIGHT QUALITY DIMENSIONS:
─────────────────────────────────────────────────────

1. PERFORMANCE
   Primary operating characteristics
   Example: Car acceleration, fuel efficiency

2. FEATURES
   Secondary characteristics (bells and whistles)
   Example: Sunroof, heated seats

3. RELIABILITY
   Probability of failure-free operation
   Example: Mean time between failures (MTBF)

4. CONFORMANCE
   Meets specifications and standards
   Example: Within tolerance limits

5. DURABILITY
   Product life before replacement
   Example: Years of useful service

6. SERVICEABILITY
   Ease of repair and maintenance
   Example: Repair time, parts availability

7. AESTHETICS
   Sensory attributes (look, feel, sound)
   Example: Design elegance, finish quality

8. PERCEIVED QUALITY
   Reputation and image
   Example: Brand perception, reviews
```

---

## Total Quality Management

### TQM Principles

```
TQM CORE PRINCIPLES:
─────────────────────────────────────────────────────

1. CUSTOMER FOCUS
─────────────────────────────────────────────────────
• Understand customer requirements
• Measure customer satisfaction
• Close the gap between expectations and delivery
• Both internal and external customers

2. CONTINUOUS IMPROVEMENT (KAIZEN)
─────────────────────────────────────────────────────
• Never satisfied with status quo
• Small, incremental improvements
• Everyone's responsibility
• PDCA cycle (Plan-Do-Check-Act)

3. EMPLOYEE INVOLVEMENT
─────────────────────────────────────────────────────
• Quality is everyone's job
• Empowerment to solve problems
• Teams and collaboration
• Training and development

4. PROCESS FOCUS
─────────────────────────────────────────────────────
• Manage processes, not just outcomes
• Understand variation
• Mistake-proof processes (Poka-yoke)
• Standardization

5. DATA-DRIVEN DECISIONS
─────────────────────────────────────────────────────
• Measure what matters
• Statistical analysis
• Facts over opinions
• Root cause analysis

6. LEADERSHIP COMMITMENT
─────────────────────────────────────────────────────
• Top management drives quality
• Visible commitment
• Resources and support
• Quality culture
```

### The PDCA Cycle

```
PLAN-DO-CHECK-ACT (DEMING CYCLE):
─────────────────────────────────────────────────────

        ┌───────────────────┐
        │       PLAN        │
        │   • Identify problem
        │   • Analyze root cause
        │   • Develop solution
        │   • Set objectives
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │        DO         │
        │   • Implement change
        │   • Small scale test
        │   • Collect data
        │   • Document process
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │      CHECK        │
        │   • Analyze results
        │   • Compare to objectives
        │   • Identify gaps
        │   • Learn from data
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │       ACT         │
        │   • Standardize if success
        │   • Revise if needed
        │   • Share learning
        │   • Start next cycle
        └───────────────────┘
                  │
                  ▼
           (Repeat cycle)
```

---

## Statistical Process Control

### Control Charts

```
CONTROL CHART BASICS:
─────────────────────────────────────────────────────

UCL ─────────────────────────────── Upper Control Limit
     │                         (Mean + 3σ)
     │    ×       ×
     │  ×   ×   ×   ×    ×
μ ───│×───×───×───×───×───×──── Center Line (Mean)
     │  ×     ×       ×   ×
     │      ×
LCL ─────────────────────────────── Lower Control Limit
                                    (Mean - 3σ)
     └─────────────────────────────
           Time →

CONTROL LIMITS:
─────────────────────────────────────────────────────
UCL = μ + 3σ
LCL = μ - 3σ

Within limits: Process is "in control"
(only common cause variation)

Outside limits: Process is "out of control"
(special cause variation present)
```

### Types of Control Charts

```
CONTROL CHART SELECTION:
─────────────────────────────────────────────────────

VARIABLE DATA (Continuous measurements):
─────────────────────────────────────────────────────
X-bar Chart:    Sample means
R Chart:        Sample ranges
S Chart:        Sample standard deviations

Used for: Length, weight, time, temperature

ATTRIBUTE DATA (Discrete counts):
─────────────────────────────────────────────────────
p Chart:        Proportion defective
np Chart:       Number defective
c Chart:        Defects per unit
u Chart:        Defects per unit (variable sample)

Used for: Pass/fail, defect counts, error counts

X-BAR AND R CHART EXAMPLE:
─────────────────────────────────────────────────────
Sample  X1    X2    X3    X4    X̄     R
────────────────────────────────────────────
1       10.2  10.4  10.1  10.3  10.25  0.3
2       10.3  10.2  10.5  10.2  10.30  0.3
3       10.1  10.3  10.2  10.4  10.25  0.3
4       10.4  10.3  10.4  10.2  10.33  0.2
5       10.2  10.1  10.3  10.3  10.23  0.2

X̄-bar = 10.27
R̄ = 0.26

Control Limits (using factors from tables):
UCL_x = X̄-bar + A2 × R̄ = 10.27 + 0.729 × 0.26 = 10.46
LCL_x = X̄-bar - A2 × R̄ = 10.27 - 0.729 × 0.26 = 10.08
```

### Process Capability

```
PROCESS CAPABILITY:
─────────────────────────────────────────────────────

SPECIFICATION LIMITS (Customer defined):
─────────────────────────────────────────────────────
USL = Upper Specification Limit
LSL = Lower Specification Limit
Target = Nominal value

CAPABILITY INDICES:
─────────────────────────────────────────────────────

Cp (Capability):
         USL - LSL
   Cp = ───────────
            6σ

Measures potential capability (spread only)

Cpk (Actual Capability):
         ┌ USL - μ    μ - LSL ┐
   Cpk = │ ─────── , ─────── │ (minimum)
         └   3σ         3σ   ┘

Measures actual capability (considers centering)

INTERPRETATION:
─────────────────────────────────────────────────────
Cp/Cpk        Interpretation
───────────────────────────────────────
< 1.00        Not capable (>2,700 ppm defects)
1.00          Minimally capable
1.33          Capable (63 ppm defects)
1.67          Good (0.6 ppm defects)
2.00          Excellent (0.002 ppm defects)

EXAMPLE:
─────────────────────────────────────────────────────
USL = 10.5, LSL = 9.5, μ = 10.0, σ = 0.15

Cp = (10.5 - 9.5) / (6 × 0.15) = 1.0 / 0.90 = 1.11

Cpk = min[(10.5 - 10.0)/(3 × 0.15), (10.0 - 9.5)/(3 × 0.15)]
    = min[0.5/0.45, 0.5/0.45]
    = min[1.11, 1.11] = 1.11 (centered process)
```

---

## Cost of Quality

### Quality Cost Categories

```
COST OF QUALITY (COQ):
─────────────────────────────────────────────────────

PREVENTION COSTS:
─────────────────────────────────────────────────────
Costs to prevent defects from occurring
• Training and education
• Quality planning
• Process improvement
• Design reviews
• Supplier qualification

APPRAISAL COSTS:
─────────────────────────────────────────────────────
Costs to detect defects
• Inspection and testing
• Quality audits
• Measurement equipment
• Test materials
• Lab testing

INTERNAL FAILURE COSTS:
─────────────────────────────────────────────────────
Costs of defects found before shipment
• Scrap
• Rework and repair
• Re-inspection
• Downtime
• Yield losses

EXTERNAL FAILURE COSTS:
─────────────────────────────────────────────────────
Costs of defects found after shipment
• Warranty claims
• Returns and replacements
• Customer complaints
• Liability and lawsuits
• Lost reputation/sales

THE 1-10-100 RULE:
─────────────────────────────────────────────────────
Cost to prevent:         $1
Cost to correct:         $10
Cost to fail:            $100

Prevention is cheapest!
```

### Optimizing Quality Costs

```
TRADITIONAL VS. MODERN VIEW:
─────────────────────────────────────────────────────

TRADITIONAL VIEW:
─────────────────────────────────────────────────────
                  │
                  │ Total Cost
Cost              │    \___/
                  │   /     \
                  │  /       \  Failure
                  │ /         \   Costs
                  │/           \
                  │─────────────\_____
                  │   Prevention +
                  │    Appraisal
                  └───────────────────
                        Quality Level →
                               │
              "Optimal" at ────┘ (some defects)

MODERN VIEW (Zero Defects):
─────────────────────────────────────────────────────
                  │
                  │  Total
                  │   Cost
Cost              │    \
                  │     \
                  │      \  Failure
                  │       \ Costs
                  │        \___________
                  │────────────────────
                  │  Prevention + Appraisal
                  └───────────────────────
                        Quality Level →
                                      │
              Optimal at ─────────────┘ (zero defects)

Modern view: Prevention costs decrease over time
as quality culture takes hold.
```

---

## Quality Standards

### ISO 9001

```
ISO 9001 QUALITY MANAGEMENT SYSTEM:
─────────────────────────────────────────────────────

SEVEN PRINCIPLES:
─────────────────────────────────────────────────────
1. Customer focus
2. Leadership
3. Engagement of people
4. Process approach
5. Improvement
6. Evidence-based decision making
7. Relationship management

KEY REQUIREMENTS:
─────────────────────────────────────────────────────
□ Quality policy and objectives
□ Documented procedures
□ Management review
□ Internal audits
□ Control of nonconforming products
□ Corrective and preventive action
□ Continuous improvement

CERTIFICATION PROCESS:
─────────────────────────────────────────────────────
1. Implement QMS
2. Internal audit
3. Management review
4. Registrar audit (Stage 1: Documentation)
5. Registrar audit (Stage 2: Implementation)
6. Certification
7. Surveillance audits (annual)
8. Recertification (every 3 years)
```

---

## Key Takeaways

1. **Quality has multiple dimensions** - Performance, reliability, aesthetics, etc.
2. **TQM is holistic** - Culture, people, processes, data
3. **Variation is the enemy** - Control and reduce it
4. **Prevention beats detection** - Invest upstream
5. **Data-driven decisions** - Use statistical tools
6. **Continuous improvement** - PDCA never stops

---

## Practice Exercises

### Exercise 1: Control Chart
Given 20 samples of product weight, calculate control limits for an X-bar chart. Identify any out-of-control points.

### Exercise 2: Process Capability
A process produces shafts with diameter μ = 25.02mm and σ = 0.03mm. Specifications are 25.00 ± 0.10mm. Calculate Cp and Cpk.

### Exercise 3: Cost of Quality
Categorize the following costs: inspection labor, warranty claims, training, scrap, supplier audits. Calculate total COQ as % of sales.

---

*Next: [Lean Operations](04-lean-operations.md)*
