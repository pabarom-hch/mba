# Supply Chain Strategy

## Learning Objectives

- Design supply chains aligned with business strategy
- Apply the push-pull framework to supply chain decisions
- Balance responsiveness and efficiency trade-offs
- Configure supply chain networks for competitive advantage
- Evaluate make-vs-buy and outsourcing decisions

---

## Strategic Alignment

### Matching Supply Chain to Product

```
FISHER'S FRAMEWORK:
─────────────────────────────────────────────────────

Products classified by demand characteristics:

FUNCTIONAL PRODUCTS:           INNOVATIVE PRODUCTS:
─────────────────────────────────────────────────────
• Predictable demand           • Unpredictable demand
• Long product life cycle      • Short product life cycle
• Low profit margins           • High profit margins
• Low product variety          • High product variety
• Low forecast error (10%)     • High forecast error (40-100%)
• Low stockout cost            • High stockout cost
• Low obsolescence risk        • High obsolescence risk

Examples:                      Examples:
• Groceries                    • Fashion apparel
• Basic apparel (underwear)    • Electronics
• Office supplies              • Seasonal products


SUPPLY CHAIN FIT:
─────────────────────────────────────────────────────

                    Supply Chain Focus
                 ┌──────────┬──────────┐
                 │Efficient │Responsive│
                 │          │          │
    Functional   │   FIT    │  MISMATCH│
    Products     │          │  (waste) │
Product         ─┼──────────┼──────────┤
Type            │          │          │
    Innovative   │ MISMATCH │   FIT    │
    Products     │(stockouts│          │
                 │obsolesc.)│          │
                 └──────────┴──────────┘


MISMATCH CONSEQUENCES:
─────────────────────────────────────────────────────

Functional Product + Responsive Supply Chain:
• Paying for flexibility you don't need
• Higher costs without benefit
• Uncompetitive pricing

Innovative Product + Efficient Supply Chain:
• Stockouts on hot products
• Excess inventory on slow movers
• Forced markdowns, obsolescence
• Lost market opportunities
```

### Supply Chain Drivers

```
SIX SUPPLY CHAIN DRIVERS:
─────────────────────────────────────────────────────

LOGISTICS DRIVERS (Physical):
─────────────────────────────────────────────────────

1. FACILITIES
   • Number, location, capacity
   • Centralized vs. decentralized
   • Efficiency vs. responsiveness trade-off

2. INVENTORY
   • How much to hold, where
   • Safety stock levels
   • Cycle inventory vs. buffer stock

3. TRANSPORTATION
   • Mode selection (air, truck, rail, ocean)
   • Speed vs. cost trade-off
   • Direct ship vs. consolidation


CROSS-FUNCTIONAL DRIVERS:
─────────────────────────────────────────────────────

4. INFORMATION
   • Demand visibility
   • Supply chain coordination
   • Technology investments

5. SOURCING
   • Make vs. buy decisions
   • Supplier selection
   • Number of suppliers

6. PRICING
   • Pricing strategy impact on demand
   • Revenue management
   • Differential pricing


DRIVER POSITIONING:
─────────────────────────────────────────────────────

              Efficiency ◀─────────────▶ Responsiveness

Facilities:   Centralized              Decentralized
              Large, few               Many, local

Inventory:    Low stock                High stock
              Central warehouse        Local inventory

Transport:    Ocean/Rail               Air/Express
              Consolidated             Direct ship

Information:  Basic ERP                Advanced analytics
              Limited sharing          Full visibility

Sourcing:     Few large suppliers      Diverse suppliers
              Low cost focus           Flexibility focus

Pricing:      Stable prices            Dynamic pricing
              Low margin focus         Value capture
```

---

## Network Design

### Network Configuration Options

```
NETWORK DESIGN CHOICES:
─────────────────────────────────────────────────────

OPTION 1: MANUFACTURER STORAGE WITH DIRECT SHIPPING
─────────────────────────────────────────────────────

Factory ──────────────────────────────▶ Customer

• No intermediate inventory
• Higher transportation cost
• Best for: High-value, low-demand items
• Example: Custom products, industrial equipment


OPTION 2: MANUFACTURER STORAGE WITH MERGE IN TRANSIT
─────────────────────────────────────────────────────

Factory A ────┐
              ├───▶ Merge Point ───▶ Customer
Factory B ────┘

• Components shipped separately, merged near customer
• Reduced inventory, customization possible
• Best for: High-variety, customizable products
• Example: Computer components


OPTION 3: DISTRIBUTOR STORAGE WITH CARRIER DELIVERY
─────────────────────────────────────────────────────

Factory ──▶ Distribution ──▶ Customer
            Center

• Regional inventory pools risk
• Moderate transportation cost
• Best for: Medium-velocity items
• Example: Most retail, electronics


OPTION 4: DISTRIBUTOR WITH LAST-MILE DELIVERY
─────────────────────────────────────────────────────

Factory ──▶ DC ──▶ Local Hub ──▶ Customer

• Fast delivery, higher cost
• High responsiveness
• Best for: Time-sensitive, high-margin
• Example: Same-day delivery, groceries


OPTION 5: RETAIL STORES
─────────────────────────────────────────────────────

Factory ──▶ DC ──▶ Retail Store ◀── Customer

• Customer picks up
• Highest inventory, lowest transport
• Best for: High-volume, immediate need
• Example: Groceries, convenience items
```

### Facility Location Decisions

```
FACILITY LOCATION FACTORS:
─────────────────────────────────────────────────────

COST FACTORS:
─────────────────────────────────────────────────────
• Labor costs (wages, productivity, availability)
• Land and construction costs
• Transportation costs (inbound and outbound)
• Utilities and operating costs
• Tax incentives and regulations

STRATEGIC FACTORS:
─────────────────────────────────────────────────────
• Proximity to customers
• Proximity to suppliers
• Infrastructure quality
• Labor skill availability
• Political stability


CENTER OF GRAVITY METHOD:
─────────────────────────────────────────────────────

Find optimal location based on weighted distances

          Σ (Volume_i × Distance_i × X_i)
X_opt = ───────────────────────────────────
              Σ (Volume_i × Distance_i)

          Σ (Volume_i × Distance_i × Y_i)
Y_opt = ───────────────────────────────────
              Σ (Volume_i × Distance_i)


EXAMPLE CALCULATION:
─────────────────────────────────────────────────────

Customer   Location (X,Y)   Volume   Weight
─────────────────────────────────────────────────────
A          (2, 5)           100      100
B          (8, 2)           200      200
C          (5, 8)           150      150

X_opt = (2×100 + 8×200 + 5×150) / (100+200+150)
      = (200 + 1600 + 750) / 450 = 5.67

Y_opt = (5×100 + 2×200 + 8×150) / (100+200+150)
      = (500 + 400 + 1200) / 450 = 4.67

Optimal location approximately: (5.67, 4.67)
```

---

## Push-Pull Strategy

### Configuring the Push-Pull Boundary

```
PUSH-PULL BOUNDARY DECISION:
─────────────────────────────────────────────────────

UPSTREAM                    │             DOWNSTREAM
(Forecast-driven)           │          (Demand-driven)
                           │
PUSH                       │              PULL
─────────────────────────────────────────────────────
• Economies of scale        │    • Respond to actual demand
• Long lead times           │    • Reduce uncertainty
• Aggregate forecasts       │    • Customer customization
                           │
◀──────────────────────────│──────────────────────▶
                           │
              DECOUPLING POINT


STRATEGIC INVENTORY POSITIONING:
─────────────────────────────────────────────────────

Where to place inventory decoupling points:

Raw         Component    Sub-         Finished    Customer
Material    Assembly     Assembly     Goods

●───────────●───────────●───────────●───────────▶

  ▲           ▲           ▲           ▲
  │           │           │           │
Make-to-    Make-to-    Assemble-   Make-to-
Stock       Stock       to-Order    Order
(MTS)       (MTS)       (ATO)       (MTO)

        Engineer-to-Order (ETO)
        (No inventory, everything custom)


EXAMPLE CONFIGURATIONS:
─────────────────────────────────────────────────────

DELL (Original Model):
─────────────────────────────────────────────────────
Push: Components manufactured, shipped to Dell
Pull: Assembly triggered by customer order

Suppliers ──▶ Dell Factory ──●──▶ Customer Order
              Component     Push-Pull    Assemble
              Inventory     Boundary     & Ship

ZARA:
─────────────────────────────────────────────────────
Push: Fabric sourcing (partial)
Pull: Design, cutting, sewing, distribution

Fabric ──●──▶ Design ──▶ Cut ──▶ Sew ──▶ Ship
        Push-Pull
        Boundary

Very late differentiation = High responsiveness
```

### Postponement Strategies

```
POSTPONEMENT (Delayed Differentiation):
─────────────────────────────────────────────────────

Delay product differentiation until demand is known

TYPES OF POSTPONEMENT:
─────────────────────────────────────────────────────

1. FORM POSTPONEMENT
   Delay final assembly or configuration

   Example: Benetton
   Traditional: Dye yarn → Knit sweaters
   Postponed:   Knit undyed → Dye to demand

   Result: Match colors to actual demand


2. TIME POSTPONEMENT
   Delay shipment until order received

   Example: Amazon
   Traditional: Ship to all warehouses
   Postponed:   Central inventory, ship when ordered

   Result: Lower total inventory


3. PLACE POSTPONEMENT
   Delay forward positioning of inventory

   Example: Caterpillar
   Traditional: Inventory at each dealer
   Postponed:   Regional parts depot, ship to dealer

   Result: Pool risk across dealers


POSTPONEMENT BENEFITS:
─────────────────────────────────────────────────────

                Traditional    Postponed
─────────────────────────────────────────────────────
Forecast accuracy    60%          85%
Inventory levels     High         Medium
Stockouts           10%          3%
Markdowns           15%          5%
Lead time           Short        Longer

Risk pooling effect: √n reduction in variability
where n = number of products/locations pooled
```

---

## Make vs. Buy Decisions

### Outsourcing Framework

```
MAKE VS. BUY DECISION MATRIX:
─────────────────────────────────────────────────────

                    Strategic Importance
                    Low              High
                ┌────────────────┬────────────────┐
    High        │   OUTSOURCE    │   STRATEGIC    │
    (Capable    │   (Commodity)  │   PARTNERSHIP  │
    Suppliers)  │                │                │
Supplier       ─┼────────────────┼────────────────┤
Capability     │                │                │
    Low         │   OUTSOURCE    │    MAKE        │
    (Few/No     │   (Develop     │   (Core        │
    Suppliers)  │   supplier)    │   competency)  │
                └────────────────┴────────────────┘


FACTORS TO CONSIDER:
─────────────────────────────────────────────────────

MAKE (Insource) when:
─────────────────────────────────────────────────────
• Core competency / competitive advantage
• Proprietary technology
• Quality control critical
• Reliable suppliers unavailable
• Capacity utilization needed
• Secrecy/IP protection important

BUY (Outsource) when:
─────────────────────────────────────────────────────
• Not a core activity
• Suppliers have better capabilities
• Volume too low for efficiency
• Need flexibility (variable cost)
• Free up capital and management attention
• Access to innovation


TOTAL COST OF OWNERSHIP (TCO):
─────────────────────────────────────────────────────

Make Cost:                  Buy Cost:
─────────────────────────────────────────────────────
+ Direct materials          + Purchase price
+ Direct labor             + Transportation
+ Manufacturing overhead   + Receiving/inspection
+ Equipment depreciation   + Quality issues
+ Quality control          + Inventory carrying
+ Management overhead      + Supplier management
─────────────────────────────────────────────────────
= Total Make Cost          = Total Buy Cost

Hidden costs often make outsourcing more expensive
than initially projected
```

### Supplier Strategy

```
SUPPLIER RELATIONSHIP SPECTRUM:
─────────────────────────────────────────────────────

TRANSACTIONAL ◀────────────────────▶ STRATEGIC

Arm's Length    Preferred    Partnership    Alliance
   │               │             │             │
   │               │             │             │
Multiple        Fewer        Joint         Shared
suppliers,      suppliers,   planning,     equity,
price focus     some info    long-term     co-development
                sharing      commitment

WHEN TO USE EACH:
─────────────────────────────────────────────────────

Transactional:
• Commodity items
• Many capable suppliers
• Standard specifications
• Low switching costs

Strategic Partnership:
• Critical components
• Complex specifications
• Few capable suppliers
• Innovation required
• Long development cycles


SINGLE vs. MULTIPLE SOURCING:
─────────────────────────────────────────────────────

SINGLE SOURCE:
─────────────────────────────────────────────────────
Advantages:
• Stronger relationship
• Economies of scale
• Better communication
• Co-development possible

Risks:
• Supply disruption
• No price competition
• Dependency

MULTIPLE SOURCE:
─────────────────────────────────────────────────────
Advantages:
• Risk mitigation
• Price competition
• Capacity flexibility
• Benchmark performance

Risks:
• Weaker relationships
• Higher management effort
• Less supplier investment

DUAL SOURCING (Hybrid):
─────────────────────────────────────────────────────
70-80% to primary supplier (relationship)
20-30% to secondary (competition, backup)
```

---

## Global Supply Chain Considerations

### Global vs. Regional Networks

```
GLOBAL SUPPLY CHAIN TRADE-OFFS:
─────────────────────────────────────────────────────

CENTRALIZED GLOBAL:
─────────────────────────────────────────────────────
One or few global locations

       ┌─────────────────────────────────┐
       │                                 │
       │   ●─────────────────────●       │
       │   Factory              Customers│
       │   (Low cost            (Global) │
       │    region)                      │
       │                                 │
       └─────────────────────────────────┘

Advantages:
• Economies of scale
• Low labor cost locations
• Simplified management

Disadvantages:
• Long lead times
• High transportation costs
• Currency/political risk
• Less responsive


REGIONAL/LOCAL:
─────────────────────────────────────────────────────
Facilities in each region

       ┌─────────────────────────────────┐
       │   Americas    Europe     Asia   │
       │                                 │
       │   ●──▶C      ●──▶C      ●──▶C  │
       │                                 │
       └─────────────────────────────────┘

Advantages:
• Faster delivery
• Local customization
• Reduced risk
• Lower duties/tariffs

Disadvantages:
• Higher costs
• Complexity
• Smaller scale


HYBRID APPROACH:
─────────────────────────────────────────────────────

Global for: Stable, long-life products
Regional for: Variable, time-sensitive products

       ┌─────────────────────────────────┐
       │                                 │
       │  Global Hub ──▶ Regional DC ──▶ │
       │  (Base products) (Customize)    │
       │                                 │
       └─────────────────────────────────┘
```

---

## Key Takeaways

1. **Strategy must fit product** - Functional products need efficient supply chains; innovative need responsive
2. **Six drivers to configure** - Facilities, inventory, transportation, information, sourcing, pricing
3. **Push-pull boundary matters** - Place decoupling point based on demand uncertainty and lead times
4. **Postponement reduces risk** - Delay differentiation to match supply with actual demand
5. **Make-vs-buy is strategic** - TCO often higher than purchase price alone
6. **Global adds complexity** - Balance scale economies against responsiveness and risk

---

## Practice Exercises

### Exercise 1: Strategic Fit
Classify these products as functional or innovative, and recommend supply chain focus:
a) Smartphone (new model)
b) Disposable diapers
c) Fashion handbags
d) Industrial lubricants

### Exercise 2: Network Design
A company serves customers in 10 cities. Using the center of gravity method, determine optimal warehouse location given customer volumes and coordinates.

### Exercise 3: Push-Pull Boundary
A furniture manufacturer can: (a) make all products to stock, (b) make to order, or (c) stock components and assemble to order. Analyze trade-offs for each.

### Exercise 4: Make vs. Buy
A tech company currently outsources all manufacturing. They're considering bringing PCB assembly in-house. Develop a TCO analysis framework for this decision.

---

*Next: [Procurement](02-procurement.md)*
