# Supply Chain Risk Management

## Learning Objectives

- Identify and categorize supply chain risks
- Assess risk probability and impact
- Develop risk mitigation strategies
- Build supply chain resilience
- Create business continuity plans
- Balance efficiency with risk management

---

## Understanding Supply Chain Risk

### Types of Supply Chain Risk

```
SUPPLY CHAIN RISK CATEGORIES:
─────────────────────────────────────────────────────

SUPPLY RISKS:
─────────────────────────────────────────────────────
• Supplier failure/bankruptcy
• Quality problems
• Capacity constraints
• Single-source dependency
• Geopolitical issues
• Raw material shortages

DEMAND RISKS:
─────────────────────────────────────────────────────
• Demand volatility
• Forecast errors
• Customer concentration
• Seasonality
• Product life cycle changes
• Competitor actions

OPERATIONAL RISKS:
─────────────────────────────────────────────────────
• Production disruptions
• Equipment failure
• Labor issues
• Quality failures
• Process breakdowns
• IT system failures

ENVIRONMENTAL RISKS:
─────────────────────────────────────────────────────
• Natural disasters
• Pandemics
• Climate events
• Regulatory changes
• Political instability
• Trade policy changes

NETWORK RISKS:
─────────────────────────────────────────────────────
• Transportation disruptions
• Port congestion
• Logistics provider failure
• Infrastructure damage
• Cyber attacks
• Communication failures
```

### Risk Assessment Framework

```
RISK ASSESSMENT MATRIX:
─────────────────────────────────────────────────────

              PROBABILITY
         Low      Medium     High
       ┌─────────┬─────────┬─────────┐
High   │ MEDIUM  │  HIGH   │CRITICAL │
       │ Monitor │ Mitigate│ Priority│
IMPACT ├─────────┼─────────┼─────────┤
Medium │  LOW    │ MEDIUM  │  HIGH   │
       │ Accept  │ Monitor │ Mitigate│
       ├─────────┼─────────┼─────────┤
Low    │  LOW    │  LOW    │ MEDIUM  │
       │ Accept  │ Accept  │ Monitor │
       └─────────┴─────────┴─────────┘


RISK SCORING:
─────────────────────────────────────────────────────

Risk Score = Probability × Impact × Detectability

Scale each 1-5:
─────────────────────────────────────────────────────
Probability:  1=Rare to 5=Almost certain
Impact:       1=Minor to 5=Catastrophic
Detectability: 1=Easily detected to 5=Undetectable

Priority = Score / 125 (max score)


EXAMPLE RISK REGISTER:
─────────────────────────────────────────────────────

Risk             Prob  Impact  Detect  Score  Priority
─────────────────────────────────────────────────────
Single-source    4     5       2       40     High
supplier

Port congestion  3     3       3       27     Medium

Quality defect   2     4       4       32     Medium

Cyber attack     2     5       4       40     High

Demand spike     4     2       2       16     Low
```

---

## Risk Mitigation Strategies

### Supply Risk Mitigation

```
SUPPLIER RISK STRATEGIES:
─────────────────────────────────────────────────────

DUAL/MULTI-SOURCING:
─────────────────────────────────────────────────────

Single Source:           Dual Source:
─────────────────────────────────────────────────────
    ●                    ●───┐
    │                        │
    │                    ●───┴──▶ Your Company
    │                        │
    ▼                    ●───┘
Your Company             (Primary + Backup)

Split: 70/30 or 80/20 is common
Benefit: Continuity if one fails
Cost: Lower volume leverage, more complexity


GEOGRAPHIC DIVERSIFICATION:
─────────────────────────────────────────────────────

    ┌─────────────────────────────────────┐
    │           GLOBAL SUPPLY             │
    │                                     │
    │  Asia ●     Europe ●    Americas ●  │
    │       │           │            │    │
    │       └───────────┴────────────┘    │
    │               │                     │
    │               ▼                     │
    │          Your Company               │
    └─────────────────────────────────────┘

Reduces: Regional disaster, trade policy risk
Cost: Higher logistics, complexity


STRATEGIC INVENTORY:
─────────────────────────────────────────────────────
• Safety stock for critical items
• Buffer inventory at key points
• Finished goods buffer near customers
• Consignment at supplier

Trade-off: Inventory cost vs. risk protection


SUPPLIER DEVELOPMENT:
─────────────────────────────────────────────────────
• Financial health monitoring
• Quality improvement programs
• Capacity planning collaboration
• Business continuity requirements
```

### Operational Resilience

```
BUILDING OPERATIONAL RESILIENCE:
─────────────────────────────────────────────────────

FLEXIBILITY:
─────────────────────────────────────────────────────
• Cross-trained workforce
• Flexible manufacturing
• Postponement strategies
• Modular product design
• Contract manufacturing options


REDUNDANCY:
─────────────────────────────────────────────────────
• Backup production sites
• Duplicate tooling
• IT system redundancy
• Alternative transportation routes
• Safety stock


VISIBILITY:
─────────────────────────────────────────────────────
• End-to-end supply chain monitoring
• Supplier risk dashboards
• Early warning systems
• Real-time tracking
• Control towers


AGILITY:
─────────────────────────────────────────────────────
• Quick decision-making processes
• Pre-planned response protocols
• Rapid communication channels
• Empowered local teams
• Scenario planning


RESILIENCE FRAMEWORK:
─────────────────────────────────────────────────────

              PREVENT
                 │
                 ▼
    ┌─────────────────────────┐
    │   Normal Operations     │
    └──────────┬──────────────┘
               │ Disruption
               ▼
    ┌─────────────────────────┐
    │      RESPOND            │
    │  Activate contingency   │
    └──────────┬──────────────┘
               │
               ▼
    ┌─────────────────────────┐
    │      RECOVER            │
    │  Return to normal       │
    └──────────┬──────────────┘
               │
               ▼
    ┌─────────────────────────┐
    │      ADAPT              │
    │  Learn and improve      │
    └─────────────────────────┘
```

---

## Business Continuity Planning

### Developing BCP

```
BUSINESS CONTINUITY PLAN COMPONENTS:
─────────────────────────────────────────────────────

1. RISK IDENTIFICATION
─────────────────────────────────────────────────────
• List all potential disruptions
• Assess probability and impact
• Identify critical functions
• Map dependencies

2. IMPACT ANALYSIS
─────────────────────────────────────────────────────
• Revenue impact by duration
• Customer impact
• Regulatory/legal exposure
• Reputation damage

3. RECOVERY STRATEGIES
─────────────────────────────────────────────────────
• Alternative suppliers
• Backup facilities
• Manual workarounds
• Outsourcing options

4. PLAN DOCUMENTATION
─────────────────────────────────────────────────────
• Detailed procedures
• Contact lists
• Decision trees
• Resource requirements

5. TESTING AND MAINTENANCE
─────────────────────────────────────────────────────
• Tabletop exercises
• Full simulations
• Regular updates
• Lessons learned


RECOVERY TIME OBJECTIVE (RTO):
─────────────────────────────────────────────────────

Maximum acceptable downtime

Function              RTO         Priority
─────────────────────────────────────────────────────
Order fulfillment     4 hours     Critical
Production           24 hours     High
Procurement           3 days      Medium
Reporting             1 week      Low


RECOVERY POINT OBJECTIVE (RPO):
─────────────────────────────────────────────────────

Maximum acceptable data loss

Example: RPO = 1 hour means systems must backup
         at least hourly
```

### Scenario Planning

```
SCENARIO PLANNING PROCESS:
─────────────────────────────────────────────────────

STEP 1: IDENTIFY SCENARIOS
─────────────────────────────────────────────────────
• Key supplier failure
• Natural disaster at facility
• Demand surge/collapse
• Trade policy change
• Pandemic disruption
• Cyber attack

STEP 2: ASSESS IMPACT
─────────────────────────────────────────────────────

Scenario: Key supplier fails

Timeline     Impact
─────────────────────────────────────────────────────
Week 1       Inventory buffer covers 80%
Week 2       Stockouts begin, expedite alt supplier
Week 3-4     Partial production, customer allocation
Week 5+      New supplier ramped, recovery

Financial Impact:
• Lost revenue: $2M/week
• Expediting costs: $500K
• Customer penalties: $200K
• Total 4-week impact: ~$10M


STEP 3: DEVELOP RESPONSES
─────────────────────────────────────────────────────

IMMEDIATE (0-72 hours):
• Activate crisis team
• Assess inventory position
• Contact backup suppliers
• Communicate with customers

SHORT-TERM (1-4 weeks):
• Expedite alternative supply
• Prioritize critical customers
• Adjust production schedule
• Implement allocation rules

LONG-TERM (1-6 months):
• Qualify new suppliers
• Rebuild inventory
• Review sourcing strategy
• Update BCP based on lessons
```

---

## Supply Chain Visibility

### Monitoring and Early Warning

```
SUPPLY CHAIN CONTROL TOWER:
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│             CONTROL TOWER DASHBOARD              │
├──────────────────────────────────────────────────┤
│                                                  │
│  SUPPLY STATUS       │    DEMAND SIGNALS        │
│  ─────────────       │    ──────────────        │
│  ● Supplier A: OK    │    Orders: +12% vs plan  │
│  ● Supplier B: ⚠     │    Backlog: 3 days       │
│  ● Supplier C: OK    │    Top SKU: Low stock    │
│                      │                          │
│  IN-TRANSIT          │    INVENTORY            │
│  ──────────          │    ─────────            │
│  🚢 3 shipments      │    DC West: 85%         │
│  ✈ 1 expedite       │    DC East: 67% ⚠       │
│  🚛 12 trucks        │    Plant: 92%           │
│                      │                          │
│  ALERTS              │    RISK INDICATORS      │
│  ──────              │    ───────────────      │
│  ⚠ Port delay +2d    │    Weather: Storm FL    │
│  ⚠ Quality hold B    │    Supplier: B downgrade│
│  ✓ Customs cleared   │    Market: Competitor   │
│                      │                          │
└──────────────────────────────────────────────────┘


EARLY WARNING INDICATORS:
─────────────────────────────────────────────────────

SUPPLIER HEALTH:
─────────────────────────────────────────────────────
• Financial ratings (D&B, credit)
• Quality trends
• On-time delivery trends
• News/social media monitoring
• Industry reports

OPERATIONAL:
─────────────────────────────────────────────────────
• Inventory coverage days
• Lead time variability
• Order-to-ship cycle
• Capacity utilization
• Yield/scrap rates

EXTERNAL:
─────────────────────────────────────────────────────
• Weather forecasts
• Port congestion data
• Commodity prices
• Geopolitical events
• Regulatory changes
```

### Risk Monitoring Tools

```
SUPPLIER RISK MONITORING:
─────────────────────────────────────────────────────

FINANCIAL MONITORING:
─────────────────────────────────────────────────────

Indicator          Threshold    Action
─────────────────────────────────────────────────────
Credit score       Below 60     Review/backup
Current ratio      Below 1.0    Escalate
Revenue trend      -15% YoY     Monitor
Payment delays     >60 days     Risk review


SUPPLIER SCORECARD:
─────────────────────────────────────────────────────

Supplier: XYZ Corp
─────────────────────────────────────────────────────
Quality (30%):     ████████░░  78%  ↓
Delivery (25%):    ███████░░░  70%  ↓
Cost (20%):        █████████░  85%  →
Risk (15%):        ██████░░░░  60%  ↓
Innovation (10%):  ████████░░  80%  →
─────────────────────────────────────────────────────
Overall:                       74%  ⚠
Trend:             Declining - Schedule review


MAPPING SUPPLY CHAIN TIERS:
─────────────────────────────────────────────────────

Most companies know Tier 1 (direct suppliers)
Few know Tier 2+ (suppliers' suppliers)

Your          Tier 1        Tier 2        Tier 3
Company      Suppliers     Suppliers     Suppliers
─────────────────────────────────────────────────────

    ●────────●            ●             ●
             │            │             │
             │────────────●             │
             │                          │
    ●────────●────────────●─────────────●
             │            │
             │────────────●
             │
    ●────────●

Risk can originate anywhere in network!
```

---

## Balancing Efficiency and Resilience

### The Trade-off

```
EFFICIENCY vs. RESILIENCE TRADE-OFF:
─────────────────────────────────────────────────────

              HIGH
                │
                │     ╱ Resilient
                │    ╱  (higher cost,
                │   ╱   lower risk)
    Resilience  │  ╱
                │ ╱
                │╱ ●  "Sweet Spot"
                ╱│
               ╱ │    Efficient
              ╱  │    (lower cost,
             ╱   │    higher risk)
            ╱    │
              LOW│
                └─────────────────────
              LOW        HIGH
                  Efficiency


OPTIMIZING THE BALANCE:
─────────────────────────────────────────────────────

LEAN (Efficiency Focus):
─────────────────────────────────────────────────────
• Minimal inventory
• Single sourcing
• JIT delivery
• Centralized facilities
• Cost optimization

Assumption: Stable environment, reliable supply

RESILIENT (Risk Focus):
─────────────────────────────────────────────────────
• Safety stock
• Multiple sources
• Buffer capacity
• Distributed network
• Redundancy

Assumption: Disruptions likely, flexibility needed


SEGMENTED APPROACH:
─────────────────────────────────────────────────────

Segment supply chain by risk profile:

                    Supply Risk
                 Low          High
             ┌─────────────┬─────────────┐
    High     │ Agile       │ Resilient   │
Value/       │ (responsive │ (redundancy │
Impact       │  & efficient│  + agility) │
             ├─────────────┼─────────────┤
    Low      │ Efficient   │ Risk-hedged │
             │ (lean, low  │ (managed    │
             │  cost)      │  risk)      │
             └─────────────┴─────────────┘

Different strategies for different products/components
```

---

## Key Takeaways

1. **Risk is multi-dimensional** - Supply, demand, operational, environmental, network
2. **Assess probability AND impact** - Focus on high-impact risks regardless of probability
3. **Mitigation has costs** - Balance protection against efficiency
4. **Visibility enables response** - You can't manage what you can't see
5. **Plan before crisis** - Business continuity plans must exist before disruption
6. **Learn and adapt** - Every disruption is a learning opportunity
7. **Segment your approach** - Different risks need different strategies

---

## Practice Exercises

### Exercise 1: Risk Assessment
Create a risk register for a consumer electronics company. Identify 10 supply chain risks, assess each on probability (1-5) and impact (1-5), and prioritize.

### Exercise 2: Mitigation Strategy
A company sources 100% of a critical component from one supplier in Taiwan. Recommend a mitigation strategy considering: dual sourcing, inventory buffer, and geographic diversification. What are the costs and benefits of each?

### Exercise 3: Business Continuity
Your main distribution center is damaged by a tornado. Develop a business continuity response plan for the first 72 hours.

### Exercise 4: Scenario Planning
Develop three scenarios for how trade policy changes could impact a global supply chain. For each scenario, identify triggers, impacts, and response strategies.

---

*Next: [Assessment](assessment.md)*
