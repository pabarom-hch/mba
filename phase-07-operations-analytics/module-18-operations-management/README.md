# Module 18: Operations Management

## Overview

Operations management is the design, execution, and continuous improvement of systems that create and deliver products and services. This module covers process analysis, capacity management, quality systems, lean operations, and the unique challenges of service operations. Effective operations management creates competitive advantage through efficiency, quality, speed, flexibility, and reliability.

## Learning Objectives

By the end of this module, you will be able to:

1. Analyze and design business processes
2. Plan and manage capacity effectively
3. Apply quality management principles and tools
4. Implement lean operations and Six Sigma methodologies
5. Design and manage service operations
6. Balance operational trade-offs
7. Drive continuous improvement

## Operations Framework

```
OPERATIONS MANAGEMENT SCOPE:
─────────────────────────────────────────────────────

                    INPUTS                 TRANSFORMATION              OUTPUTS
               ┌─────────────┐           ┌─────────────┐          ┌─────────────┐
               │ Materials   │           │             │          │ Products    │
               │ Information │    ───►   │  OPERATIONS │   ───►   │ Services    │
               │ Customers   │           │             │          │ Experiences │
               │ Capital     │           └─────────────┘          └─────────────┘
               │ Labor       │                 │
               └─────────────┘                 │
                                              ▼
                                    ┌─────────────────┐
                                    │ PROCESSES       │
                                    │ • Design        │
                                    │ • Planning      │
                                    │ • Control       │
                                    │ • Improvement   │
                                    └─────────────────┘

OPERATIONS PERFORMANCE DIMENSIONS:
─────────────────────────────────────────────────────
Cost:           Producing efficiently
Quality:        Meeting specifications consistently
Speed:          Delivering quickly
Flexibility:    Adapting to changes
Dependability:  Reliable delivery
```

## Process Types

```
PROCESS VARIETY-VOLUME MATRIX:
─────────────────────────────────────────────────────

High                    Low
Volume                  Volume
    │                      │
    │ ┌─────────────────┐  │
    │ │   CONTINUOUS    │  │   Low Variety
    │ │   Oil refinery  │  │
    │ └────────┬────────┘  │
    │          ▼           │
    │ ┌─────────────────┐  │
    │ │  LINE/ASSEMBLY  │  │
    │ │  Auto assembly  │  │
    │ └────────┬────────┘  │
    │          ▼           │
    │ ┌─────────────────┐  │
    │ │     BATCH       │  │
    │ │  Bakery         │  │
    │ └────────┬────────┘  │
    │          ▼           │
    │ ┌─────────────────┐  │
    │ │    JOB SHOP     │  │   High Variety
    │ │  Custom machine │  │
    │ └────────┬────────┘  │
    │          ▼           │
    │ ┌─────────────────┐  │
    │ │    PROJECT      │  │
    │ │  Construction   │  │
    │ └─────────────────┘  │
    ▼                      ▼

Process choice must match volume-variety requirements
```

## Little's Law

```
LITTLE'S LAW:
─────────────────────────────────────────────────────

         L = λ × W

Where:
L = Average number in system (inventory/WIP)
λ = Arrival rate (throughput rate)
W = Average time in system (flow time)

APPLICATIONS:
─────────────────────────────────────────────────────
Manufacturing:
  WIP Inventory = Throughput × Flow Time
  100 units = 10 units/hr × 10 hours

Service:
  Customers in queue = Arrival rate × Wait time
  5 customers = 20/hr × 0.25 hours

IMPLICATIONS:
─────────────────────────────────────────────────────
• To reduce inventory, reduce flow time
• To reduce wait time, reduce queue length
• Throughput is constrained by bottleneck
```

## Module Content

### Core Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [Process Analysis](01-process-analysis.md) | Process mapping, bottlenecks, cycle time |
| 2 | [Capacity Management](02-capacity-management.md) | Capacity planning, utilization, queuing |
| 3 | [Quality Management](03-quality-management.md) | TQM, statistical process control, standards |
| 4 | [Lean Operations](04-lean-operations.md) | Waste elimination, flow, pull systems |
| 5 | [Six Sigma](05-six-sigma.md) | DMAIC, statistical tools, variation |
| 6 | [Service Operations](06-service-operations.md) | Service design, capacity, quality |
| 7 | [Project Management](07-project-management.md) | Planning, scheduling, resource management |

### Assessment & Cases

| Type | Title | Description |
|------|-------|-------------|
| [Assessment](assessment.md) | Module Exam | 100-point comprehensive exam |
| [Case 1](cases/case-01-toyota-production.md) | Toyota Production System | Lean manufacturing pioneer |
| [Case 2](cases/case-02-amazon-operations.md) | Amazon Fulfillment | Operations at scale |

## Key Metrics

```
OPERATIONS METRICS:
─────────────────────────────────────────────────────

EFFICIENCY METRICS:
─────────────────────────────────────────────────────
Cycle Time:        Time to complete one unit
Throughput:        Units produced per time period
Utilization:       Actual output / Capacity
Productivity:      Output / Input (labor, capital)
OEE:              Overall Equipment Effectiveness

QUALITY METRICS:
─────────────────────────────────────────────────────
Defect Rate:       Defects / Total units
First Pass Yield:  Good units / Total attempted
Sigma Level:       Standard deviations from mean
Cost of Quality:   Prevention + Appraisal + Failure

FLEXIBILITY METRICS:
─────────────────────────────────────────────────────
Setup Time:        Time to change over
Changeover Cost:   Cost to switch products
Mix Flexibility:   Range of products supported
Volume Flexibility: Range of volumes supported

DELIVERY METRICS:
─────────────────────────────────────────────────────
Lead Time:         Order to delivery
On-Time Delivery:  % delivered on time
Fill Rate:         % of orders filled completely
Order Accuracy:    % of orders correct
```

## Prerequisites

- [Module 3: Financial Accounting](../../phase-02-financial-accounting/module-03-financial-accounting/README.md) - Cost analysis
- [Phase 5: Strategic Management](../../phase-05-strategic-management/README.md) - Operations strategy alignment

## Study Timeline

| Week | Topics | Activities |
|------|--------|------------|
| 1 | Process Analysis, Capacity | Process mapping exercise |
| 2 | Quality, Lean, Six Sigma | Quality improvement project |
| 3 | Service Operations, Project Mgmt | Service design exercise |
| 4 | Integration, Assessment | Toyota TPS case analysis |

## Key Readings

### Primary Texts
- Hopp, W. & Spearman, M. "Factory Physics"
- Goldratt, E. "The Goal"
- Womack, J. & Jones, D. "Lean Thinking"

### Classic Articles
- Hayes, R. & Wheelwright, S. "Link Manufacturing Process and Product Life Cycles"
- Hammer, M. "Reengineering Work"
- Chase, R. "Make Your Service Fail-Safe"

### Industry Resources
- APICS CPIM Body of Knowledge
- ASQ Quality Management Resources
- Lean Enterprise Institute

---

*This module is part of Phase 7: Operations & Analytics. Upon completion, proceed to [Module 19: Business Analytics](../module-19-business-analytics/README.md).*
