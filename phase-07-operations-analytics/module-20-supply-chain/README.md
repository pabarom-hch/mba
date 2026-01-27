# Module 20: Supply Chain Management

## Overview

Supply chain management orchestrates the flow of goods, information, and finances from raw materials to end customers. This module covers strategic supply chain design, operational excellence, and building resilience in an increasingly complex global environment. Students will learn frameworks for making supply chain decisions that create competitive advantage.

## Learning Objectives

By the end of this module, you will be able to:

1. Design supply chain strategies aligned with business objectives
2. Optimize procurement and supplier relationships
3. Apply inventory management techniques effectively
4. Plan logistics and distribution networks
5. Develop demand planning and S&OP processes
6. Build supply chain risk management programs
7. Evaluate supply chain performance and trade-offs

## Supply Chain Fundamentals

```
THE SUPPLY CHAIN NETWORK:
─────────────────────────────────────────────────────

 RAW          SUPPLIERS     MANUFACTURING   DISTRIBUTION   CUSTOMERS
MATERIALS

   ○──────────▶○──────────▶○──────────────▶○──────────▶○
   │            │           │               │           │
   │            │           │               │           │
   ○──────────▶○──────────▶○──────────────▶○──────────▶○
   │            │           │               │           │
   │            │           │               │           │
   ○──────────▶○──────────▶○──────────────▶○──────────▶○

              ◀────────────────────────────────────────
                    INFORMATION FLOW
              ◀────────────────────────────────────────
                    FINANCIAL FLOW


KEY FLOWS:
─────────────────────────────────────────────────────
Physical Flow:   Products move downstream
Information:     Demand signals move upstream
Financial:       Payments move upstream

VALUE CREATION:
─────────────────────────────────────────────────────
Each node adds value through:
• Transformation (manufacturing)
• Time (availability when needed)
• Place (availability where needed)
• Form (packaging, customization)
```

## Supply Chain Strategy Framework

```
SUPPLY CHAIN STRATEGIC FIT:
─────────────────────────────────────────────────────

          RESPONSIVENESS
          High │
               │   Fashion     │    Custom
               │   Apparel     │    Products
               │               │
               │───────────────┼───────────────
               │               │
               │   Groceries   │    Commodities
               │   (Fresh)     │    (Steel, Oil)
          Low  │
               └───────────────┴───────────────────
                   Low            High
                      EFFICIENCY

STRATEGIC FIT ZONES:
─────────────────────────────────────────────────────

Zone of Strategic Fit:
─────────────────────────────────────────────────────
                      │
    Responsive SC     │  Mismatch:
    + Uncertain       │  Efficient SC + Uncertain
    Demand = FIT      │  Demand = PROBLEM
                      │
    ──────────────────┼──────────────────
                      │
    Mismatch:         │  Efficient SC
    Responsive SC +   │  + Stable Demand
    Stable Demand     │  = FIT
    = WASTE           │
                      │

Uncertainty of Demand →


SUPPLY CHAIN TYPES:
─────────────────────────────────────────────────────

EFFICIENT SUPPLY CHAINS:
─────────────────────────────────────────────────────
Focus: Cost minimization
Characteristics:
• Stable, predictable demand
• Long product life cycles
• Low product variety
• High volume, low margin

Examples: Commodities, basic consumer goods,
          standard components

RESPONSIVE SUPPLY CHAINS:
─────────────────────────────────────────────────────
Focus: Speed and flexibility
Characteristics:
• Volatile, uncertain demand
• Short product life cycles
• High product variety
• Fashion/innovation-driven

Examples: Fashion apparel, electronics,
          seasonal products
```

## SCOR Model Framework

```
SUPPLY CHAIN OPERATIONS REFERENCE (SCOR):
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│                    PLAN                          │
│  Demand/Supply Planning, Inventory Planning      │
└──────────────────────────────────────────────────┘
         │         │         │         │
         ▼         ▼         ▼         ▼
┌─────────────┬───────────┬───────────┬───────────┐
│   SOURCE    │   MAKE    │  DELIVER  │  RETURN   │
│             │           │           │           │
│ Procurement │ Production│ Logistics │ Reverse   │
│ Supplier    │ Execution │ Order Mgmt│ Logistics │
│ Management  │ Testing   │ Warehouse │ Warranty  │
└─────────────┴───────────┴───────────┴───────────┘
         │         │         │         │
         └─────────┴─────────┴─────────┘
                       │
              ┌────────┴────────┐
              │     ENABLE      │
              │ Rules, Info,    │
              │ Performance     │
              └─────────────────┘


SCOR METRICS BY CATEGORY:
─────────────────────────────────────────────────────

RELIABILITY:
─────────────────────────────────────────────────────
• Perfect Order Fulfillment
• On-time delivery
• Right quantity, quality, documentation

RESPONSIVENESS:
─────────────────────────────────────────────────────
• Order Fulfillment Cycle Time
• Source cycle time
• Make cycle time
• Deliver cycle time

AGILITY:
─────────────────────────────────────────────────────
• Upside Supply Chain Flexibility
• Upside Supply Chain Adaptability
• Downside Supply Chain Adaptability

COST:
─────────────────────────────────────────────────────
• Total Cost to Serve
• Cost of Goods Sold
• Supply Chain Management Cost

ASSET EFFICIENCY:
─────────────────────────────────────────────────────
• Cash-to-Cash Cycle Time
• Return on Supply Chain Fixed Assets
• Return on Working Capital
```

## Module Content

### Core Topics

| # | Topic | Key Concepts |
|---|-------|--------------|
| 1 | [Supply Chain Strategy](01-supply-chain-strategy.md) | SC design, push-pull, responsiveness vs. efficiency |
| 2 | [Procurement](02-procurement.md) | Sourcing, supplier management, total cost of ownership |
| 3 | [Inventory Management](03-inventory-management.md) | EOQ, safety stock, ABC analysis |
| 4 | [Logistics](04-logistics.md) | Transportation, warehousing, 3PL |
| 5 | [Demand Planning](05-demand-planning.md) | Forecasting, S&OP process |
| 6 | [Supply Chain Risk](06-supply-chain-risk.md) | Risk identification, resilience, business continuity |

### Assessment & Cases

| Type | Title | Description |
|------|-------|-------------|
| [Assessment](assessment.md) | Module Exam | 100-point comprehensive exam |
| [Case 1](cases/case-01-zara-supply-chain.md) | Zara Fast Fashion | Speed and responsiveness in retail |
| [Case 2](cases/case-02-supply-chain-crisis.md) | Supply Chain Crisis | COVID and semiconductor disruptions |

## The Bullwhip Effect

```
DEMAND VARIABILITY AMPLIFICATION:
─────────────────────────────────────────────────────

Consumer Demand (relatively stable):
│▁▂▃▂▁▂▃▂▁▂▃│

Retailer Orders to Distributor:
│▂▅▇▅▂▅▇▅▂▅▇│

Distributor Orders to Manufacturer:
│▃█▁█▃█▁█▃█▁│

Manufacturer Orders to Supplier:
│█▁▁▁█▁▁▁█▁▁│

Variability increases as you move upstream!


CAUSES OF BULLWHIP EFFECT:
─────────────────────────────────────────────────────

1. DEMAND SIGNAL PROCESSING
   Each stage forecasts independently
   Small changes amplified through chain

2. ORDER BATCHING
   Orders placed periodically, not continuously
   Creates lumpy demand upstream

3. PRICE FLUCTUATIONS
   Promotions cause forward buying
   Distorts true demand

4. RATIONING & SHORTAGE GAMING
   When supply short, buyers over-order
   Creates phantom demand


SOLUTIONS:
─────────────────────────────────────────────────────
• Information sharing (POS data)
• Collaborative forecasting (CPFR)
• Everyday low pricing (reduce promotions)
• Vendor-managed inventory (VMI)
• Smaller, more frequent shipments
```

## Push vs. Pull Systems

```
PUSH-PULL BOUNDARY:
─────────────────────────────────────────────────────

PUSH SYSTEM                 │    PULL SYSTEM
(Forecast-driven)           │    (Demand-driven)
                           │
Build to stock             │    Build to order
Make based on forecast     │    Make based on actual demand
                           │
        ◀────────────────────────────────▶
                           │
        ┌─────────────────────────────────┐
        │        DECOUPLING POINT         │
        │     (Push-Pull Boundary)        │
        └─────────────────────────────────┘


INDUSTRY EXAMPLES:
─────────────────────────────────────────────────────

FULL PUSH (Build to Stock):
─────────────────────────────────────────────────────
Groceries: ●──────────────────────────────▶ Customer
           All production based on forecast

HYBRID (Assemble to Order):
─────────────────────────────────────────────────────
Dell:      ●────────────●─────────────────▶ Customer
           Components    │  Assemble when ordered
           built to stock│
                      Push-Pull Boundary

HYBRID (Make to Order):
─────────────────────────────────────────────────────
Custom Suits: ●────●────────────────────▶ Customer
              Fabric │ Cut and sew when ordered
              stock  │
                  Push-Pull Boundary

FULL PULL (Engineer to Order):
─────────────────────────────────────────────────────
Aircraft:  ●▶ Customer
           Everything designed and built to order


CHOOSING THE BOUNDARY:
─────────────────────────────────────────────────────

Move Boundary LEFT (more pull) when:
• High product variety
• Short product life cycles
• Uncertain demand
• Customers accept wait time

Move Boundary RIGHT (more push) when:
• Economies of scale important
• Long production lead times
• Customers expect immediate availability
• Stable, predictable demand
```

## Prerequisites

- [Module 18: Operations Management](../module-18-operations-management/README.md) - Process fundamentals
- [Module 19: Business Analytics](../module-19-business-analytics/README.md) - Forecasting basics
- Basic algebra and statistics

## Study Timeline

| Week | Topics | Activities |
|------|--------|------------|
| 1 | Strategy, Procurement | Supplier evaluation exercise |
| 2 | Inventory, Logistics | EOQ calculations, network design |
| 3 | Demand planning, S&OP | Forecasting project, S&OP simulation |
| 4 | Risk management | Risk assessment, Zara case |

## Key Readings

### Primary Texts
- Chopra, S. & Meindl, P. "Supply Chain Management: Strategy, Planning, and Operation"
- Simchi-Levi, D. "Designing and Managing the Supply Chain"
- Fisher, M. "What is the Right Supply Chain for Your Product?"

### Classic Articles
- Lee, H. "The Triple-A Supply Chain"
- Lee, H. "The Bullwhip Effect in Supply Chains"
- Fine, C. "Clockspeed"

### Industry Resources
- APICS (Association for Supply Chain Management)
- Gartner Supply Chain Top 25
- Supply Chain Management Review

## Technology and Tools

```
SUPPLY CHAIN TECHNOLOGY STACK:
─────────────────────────────────────────────────────

PLANNING:
─────────────────────────────────────────────────────
• ERP (SAP, Oracle, Microsoft)
• Advanced Planning Systems (APS)
• Demand Planning Software

EXECUTION:
─────────────────────────────────────────────────────
• Warehouse Management Systems (WMS)
• Transportation Management Systems (TMS)
• Manufacturing Execution Systems (MES)

VISIBILITY:
─────────────────────────────────────────────────────
• Control Towers
• Track & Trace
• IoT Sensors

ANALYTICS:
─────────────────────────────────────────────────────
• Business Intelligence
• Predictive Analytics
• Digital Twins

COLLABORATION:
─────────────────────────────────────────────────────
• EDI (Electronic Data Interchange)
• Supplier Portals
• Blockchain (emerging)
```

---

*This module is part of Phase 7: Operations & Analytics. Upon completion, proceed to [Phase 8: Capstone](../../phase-08-capstone/README.md).*
