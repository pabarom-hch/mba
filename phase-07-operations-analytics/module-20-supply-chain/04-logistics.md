# Logistics

## Learning Objectives

- Select appropriate transportation modes and strategies
- Design efficient warehousing and distribution networks
- Evaluate third-party logistics (3PL) partnerships
- Optimize last-mile delivery operations
- Apply cross-docking and flow-through strategies
- Measure logistics performance

---

## Transportation Management

### Mode Selection

```
TRANSPORTATION MODES COMPARISON:
─────────────────────────────────────────────────────

MODE        SPEED    COST     CAPACITY   RELIABILITY
─────────────────────────────────────────────────────
Air         ★★★★★   ★         ★          ★★★★
Truck       ★★★★    ★★★       ★★★        ★★★★
Rail        ★★      ★★★★      ★★★★★      ★★★
Ocean       ★       ★★★★★     ★★★★★      ★★
Pipeline    ★★★     ★★★★★     ★★★        ★★★★★

★ = Low   ★★★★★ = High


MODE CHARACTERISTICS:
─────────────────────────────────────────────────────

AIR:
─────────────────────────────────────────────────────
Best for: High-value, time-sensitive, light goods
Cost: $4-8 per kg
Transit: 1-3 days global
Examples: Electronics, pharmaceuticals, emergency parts

TRUCK (Full Truckload - FTL):
─────────────────────────────────────────────────────
Best for: Regional/national, moderate volume
Cost: $1.50-3.00 per mile
Transit: 1-5 days
Examples: Consumer goods, industrial products

TRUCK (Less-than-Truckload - LTL):
─────────────────────────────────────────────────────
Best for: Smaller shipments, multiple pickups
Cost: Higher per unit than FTL
Transit: 2-7 days
Examples: Mixed freight, small orders

RAIL:
─────────────────────────────────────────────────────
Best for: Bulk commodities, long distance
Cost: $0.03-0.05 per ton-mile
Transit: 5-14 days
Examples: Coal, grain, chemicals, intermodal

OCEAN:
─────────────────────────────────────────────────────
Best for: International, bulk/container
Cost: $1,500-3,000 per 40' container
Transit: 15-45 days
Examples: Imports, raw materials, finished goods
```

### Intermodal Transportation

```
INTERMODAL COMBINATIONS:
─────────────────────────────────────────────────────

TRUCK-RAIL (Piggyback):
─────────────────────────────────────────────────────

Origin ──▶ Rail Terminal ──▶ Rail ──▶ Terminal ──▶ Dest
  │              │                        │           │
  └── Truck ─────┘                        └── Truck ──┘

• Container stays on chassis
• Best for: 500+ miles
• Cost: 60-70% of all-truck for long haul


TRUCK-OCEAN:
─────────────────────────────────────────────────────

Factory ──▶ Port ──▶ Ocean ──▶ Port ──▶ Warehouse
   │          │                    │          │
   └─ Truck ──┘                    └─ Truck ──┘

• Standard containers (20'/40')
• Door-to-door service possible


CONTAINER UTILIZATION:
─────────────────────────────────────────────────────

40' Container Capacity:
• Volume: ~2,400 cubic feet
• Weight: ~44,000 lbs max

FCL (Full Container Load):
• One shipper fills container
• Lower cost per unit
• Direct routing

LCL (Less-than-Container Load):
• Multiple shippers share container
• Higher cost per unit
• Consolidation delay
```

### Transportation Optimization

```
ROUTING AND SCHEDULING:
─────────────────────────────────────────────────────

VEHICLE ROUTING PROBLEM (VRP):
─────────────────────────────────────────────────────

Minimize total distance/time to visit all stops

Depot
  ●
  │╲
  │ ╲    Route 1
  │  ●───●───●
  │           │
  ●───●───●───┘
       Route 2

Constraints:
• Vehicle capacity
• Time windows
• Driver hours
• Customer requirements


CONSOLIDATION STRATEGIES:
─────────────────────────────────────────────────────

POOLING:
─────────────────────────────────────────────────────
Combine shipments to fill trucks

Shipper A (40%)  ──┐
                   ├──▶ Full Truck ──▶ Destination
Shipper B (30%)  ──┤
                   │
Shipper C (30%)  ──┘


MILK RUN:
─────────────────────────────────────────────────────
One truck visits multiple suppliers

        Supplier A
           ●
          ╱
     ●───●───●───●
    DC   Sup B  Sup C  Sup D

Instead of 4 separate trucks to DC


ZONE SKIPPING:
─────────────────────────────────────────────────────
Consolidate, truck to regional hub, then distribute

Origin ──▶ [Truck to Region] ──▶ Regional Hub ──▶ Local
                                   (Parcel)

Skip expensive parcel "last mile" for middle leg
```

---

## Warehousing

### Warehouse Functions

```
WAREHOUSE ACTIVITIES:
─────────────────────────────────────────────────────

INBOUND:
─────────────────────────────────────────────────────
1. Receiving
   • Unload trucks
   • Verify shipments
   • Quality inspection

2. Put-Away
   • Move to storage location
   • Update inventory system
   • Consider pick efficiency


STORAGE:
─────────────────────────────────────────────────────
3. Inventory Management
   • Location management
   • Cycle counting
   • Replenishment


OUTBOUND:
─────────────────────────────────────────────────────
4. Order Picking
   • Retrieve items for orders
   • Largest cost (50%+ of warehouse labor)

5. Packing
   • Pack for shipping
   • Add documentation

6. Shipping
   • Load trucks
   • Generate shipping documents


VALUE-ADDED SERVICES:
─────────────────────────────────────────────────────
• Kitting/assembly
• Labeling/pricing
• Returns processing
• Quality inspection
• Customization
```

### Warehouse Layout

```
WAREHOUSE LAYOUT DESIGN:
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│                    SHIPPING                       │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐    │
│  │Dock │Dock │Dock │Dock │Dock │Dock │Dock │    │
│  └─────┴─────┴─────┴─────┴─────┴─────┴─────┘    │
│                                                   │
│  ┌──────────────────────────────────────────┐   │
│  │           STAGING / PACKING              │   │
│  └──────────────────────────────────────────┘   │
│                                                   │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐   │
│  │     │     │     │     │     │     │     │   │
│  │  A  │  B  │  C  │  D  │  E  │  F  │  G  │   │
│  │FAST │ >>> │ >>> │ >>> │ >>> │ >>> │SLOW │   │
│  │MOVERS│    │     │     │     │     │MOVERS│  │
│  │     │     │     │     │     │     │     │   │
│  └─────┴─────┴─────┴─────┴─────┴─────┴─────┘   │
│                                                   │
│  ┌──────────────────────────────────────────┐   │
│  │           BULK STORAGE                    │   │
│  └──────────────────────────────────────────┘   │
│                                                   │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐   │
│  │Dock │Dock │Dock │Dock │Dock │Dock │Dock │   │
│  └─────┴─────┴─────┴─────┴─────┴─────┴─────┘   │
│                    RECEIVING                      │
└──────────────────────────────────────────────────┘


STORAGE PRINCIPLES:
─────────────────────────────────────────────────────

1. VELOCITY-BASED SLOTTING
   Fast movers: Near shipping, easy access
   Slow movers: Back of warehouse, upper levels

2. PRODUCT AFFINITY
   Frequently picked together → Stored together

3. PHYSICAL CHARACTERISTICS
   Heavy items: Lower levels
   Large items: Floor storage
   Small valuable: Secure area

4. PICK PATH OPTIMIZATION
   Organize to minimize travel distance
```

### Picking Strategies

```
ORDER PICKING METHODS:
─────────────────────────────────────────────────────

DISCRETE PICKING (Pick-to-Order):
─────────────────────────────────────────────────────
One picker, one order at a time

    Order 1: ●───●───●───●───● Done
    Order 2: [wait]───●───●───●───● Done

Best for: Small orders, complex products
Accuracy: High
Productivity: Low (most travel time)


BATCH PICKING:
─────────────────────────────────────────────────────
Pick multiple orders simultaneously

    Order 1: ●   │   │   │
    Order 2: ●   ●   │   │
    Order 3: ●   ●   ●   │

    One trip picks for all three orders

Best for: Many small orders, similar items
Accuracy: Medium (requires sorting)
Productivity: High


ZONE PICKING:
─────────────────────────────────────────────────────
Different pickers for different zones

    ┌──────────┬──────────┬──────────┐
    │  Zone A  │  Zone B  │  Zone C  │
    │ Picker 1 │ Picker 2 │ Picker 3 │
    └──────────┴──────────┴──────────┘

Order moves through zones or zones' picks merge

Best for: Large warehouses, high volume
Accuracy: Medium
Productivity: High


WAVE PICKING:
─────────────────────────────────────────────────────
Release groups of orders at scheduled times

    Wave 1 (9am):  Carrier A orders
    Wave 2 (11am): Carrier B orders
    Wave 3 (2pm):  Express orders

Best for: Coordinating with shipping schedules
```

---

## Third-Party Logistics (3PL)

### 3PL Service Levels

```
3PL SERVICE SPECTRUM:
─────────────────────────────────────────────────────

1PL: SHIPPER (In-house)
─────────────────────────────────────────────────────
Company manages own logistics
• Own trucks, warehouses
• Full control
• High fixed costs

2PL: ASSET-BASED CARRIER
─────────────────────────────────────────────────────
Basic transportation service
• Trucking companies
• Ocean carriers
• Transactional relationship

3PL: LOGISTICS SERVICE PROVIDER
─────────────────────────────────────────────────────
Manages logistics operations
• Warehousing
• Transportation management
• Freight forwarding
• May use 2PL carriers

4PL: LEAD LOGISTICS PROVIDER
─────────────────────────────────────────────────────
Manages entire supply chain
• Integrates multiple 3PLs
• Strategic consulting
• Technology platform
• Single point of contact


3PL SERVICES:
─────────────────────────────────────────────────────

TRANSPORTATION:
• Freight brokerage
• Carrier management
• Freight audit/payment
• TMS (Transportation Management System)

WAREHOUSING:
• Dedicated or shared space
• Pick/pack/ship
• Returns processing
• Value-added services

SPECIALIZED:
• Customs brokerage
• Cross-docking
• E-commerce fulfillment
• Cold chain
```

### 3PL Selection

```
3PL EVALUATION CRITERIA:
─────────────────────────────────────────────────────

CAPABILITY:
─────────────────────────────────────────────────────
• Geographic coverage
• Industry expertise
• Service offerings
• Technology platform
• Capacity and scalability

PERFORMANCE:
─────────────────────────────────────────────────────
• On-time delivery rates
• Accuracy rates
• Claims ratio
• Customer references
• Financial stability

COST:
─────────────────────────────────────────────────────
• Pricing structure (transaction vs. fixed)
• Total cost comparison
• Hidden fees
• Volume incentives

STRATEGIC FIT:
─────────────────────────────────────────────────────
• Cultural alignment
• Innovation capability
• Long-term vision
• Partnership approach


MAKE vs. BUY DECISION:
─────────────────────────────────────────────────────

USE 3PL when:
─────────────────────────────────────────────────────
• Logistics is not core competency
• Need geographic expansion quickly
• Volume is variable
• Need specialized capabilities
• Want to convert fixed to variable cost

KEEP IN-HOUSE when:
─────────────────────────────────────────────────────
• Logistics is competitive advantage
• Need maximum control
• Volume is stable and high
• Highly specialized requirements
• Proprietary processes/info
```

---

## Last-Mile Delivery

### Last-Mile Challenges

```
LAST-MILE ECONOMICS:
─────────────────────────────────────────────────────

Last mile = Final leg to customer's door
Often 50%+ of total delivery cost!

COST STRUCTURE:
─────────────────────────────────────────────────────

First/Middle Mile:              Last Mile:
─────────────────────────────────────────────────────
• Consolidated freight          • Individual stops
• Efficient routing            • Low density
• High utilization             • Many failed deliveries
• Predictable                  • Time windows
• $0.10-0.50/unit             • $5-15/delivery


WHY LAST MILE IS EXPENSIVE:
─────────────────────────────────────────────────────

         ●───●───●
        ╱   ╱╲   ╲         Many stops
       ●   ●  ●   ●         Low drop size
        ╲ ╱    ╲ ╱          Failed deliveries
         ●      ●           Time windows
        ╱ ╲    ╱ ╲          Returns
       ●   ●  ●   ●         Urban congestion
```

### Last-Mile Solutions

```
DELIVERY OPTIONS:
─────────────────────────────────────────────────────

HOME DELIVERY:
─────────────────────────────────────────────────────
Traditional: Scheduled delivery windows
Premium: Same-day, 2-hour windows
Challenge: Failed deliveries (no one home)

PARCEL LOCKERS:
─────────────────────────────────────────────────────

    ┌─────────────────────────┐
    │ ┌──┬──┬──┬──┬──┬──┐    │
    │ │  │  │  │  │  │  │    │
    │ ├──┼──┼──┼──┼──┼──┤    │
    │ │  │  │  │  │  │  │    │
    │ └──┴──┴──┴──┴──┴──┘    │
    │    Parcel Lockers       │
    └─────────────────────────┘

Benefits: No failed delivery, customer convenience
Examples: Amazon Locker, InPost

CLICK & COLLECT (BOPIS):
─────────────────────────────────────────────────────
Customer picks up from store or pickup point

Benefits: No delivery cost, drives store traffic
Challenges: Store operations, inventory accuracy

CROWDSOURCED DELIVERY:
─────────────────────────────────────────────────────
Gig workers make deliveries
Examples: Instacart, DoorDash, Uber

Benefits: Flexible capacity, speed
Challenges: Quality control, consistency


EMERGING SOLUTIONS:
─────────────────────────────────────────────────────

MICRO-FULFILLMENT CENTERS:
Small urban warehouses for rapid delivery

AUTONOMOUS VEHICLES:
Delivery robots, drones (in testing)

SMART LOCKS / TRUNK DELIVERY:
Delivery to locked locations
```

---

## Cross-Docking

### Flow-Through Operations

```
CROSS-DOCKING CONCEPT:
─────────────────────────────────────────────────────

Traditional Warehouse:
─────────────────────────────────────────────────────
Receive → Store → Pick → Ship

Inventory sits for days/weeks


Cross-Dock:
─────────────────────────────────────────────────────
Receive → Sort → Ship (same day)

Minimal to no storage

    INBOUND              OUTBOUND
    ─────────            ─────────
    │ Dock │            │ Dock │
    │ 1  │             │ A  │
    │ Dock │ ──────▶    │ Dock │
    │ 2  │  SORTING    │ B  │
    │ Dock │ ◀───────   │ Dock │
    │ 3  │             │ C  │
    └─────┘             └─────┘

Product flows through, doesn't stop


TYPES OF CROSS-DOCKING:
─────────────────────────────────────────────────────

MANUFACTURING CROSS-DOCK:
Parts from suppliers → Assembly line

DISTRIBUTOR CROSS-DOCK:
Multiple suppliers → Consolidate → Customers

TRANSPORTATION CROSS-DOCK:
LTL consolidation → FTL shipments

RETAIL CROSS-DOCK:
Vendor shipments → Store-ready pallets
```

### Cross-Docking Requirements

```
CROSS-DOCKING SUCCESS FACTORS:
─────────────────────────────────────────────────────

MUST HAVE:
─────────────────────────────────────────────────────

1. DEMAND VISIBILITY
   Know exactly what's needed where

2. SUPPLY RELIABILITY
   Inbound shipments arrive on schedule

3. PRODUCT CHARACTERISTICS
   • Pre-labeled
   • Unitized
   • Stable demand

4. COORDINATION
   • Tight scheduling
   • EDI/information systems
   • Supplier compliance

5. PHYSICAL DESIGN
   • Adequate dock doors
   • Staging space
   • Material handling equipment


BEST FOR:
─────────────────────────────────────────────────────
• High-volume, predictable products
• Time-sensitive goods
• Pre-ticketed merchandise
• Promotional items

NOT SUITABLE FOR:
─────────────────────────────────────────────────────
• Slow-moving items
• Items requiring quality inspection
• Products needing value-added services
• Unpredictable demand
```

---

## Logistics Metrics

### Key Performance Indicators

```
LOGISTICS KPIs:
─────────────────────────────────────────────────────

COST METRICS:
─────────────────────────────────────────────────────
Freight cost per unit shipped
Warehouse cost per unit
Cost as % of revenue
Cost per order fulfilled

DELIVERY METRICS:
─────────────────────────────────────────────────────
On-time delivery %
Perfect order rate
Order cycle time
Shipping accuracy

PRODUCTIVITY METRICS:
─────────────────────────────────────────────────────
Orders per labor hour
Lines picked per hour
Truck utilization %
Warehouse capacity utilization

QUALITY METRICS:
─────────────────────────────────────────────────────
Damage rate
Claims ratio
Return rate
Inventory accuracy


PERFECT ORDER METRIC:
─────────────────────────────────────────────────────

Perfect Order = On-time × Complete × Damage-free × Accurate doc

Example:
On-time:        95%
Complete:       98%
Damage-free:    99%
Accurate:       97%

Perfect Order = 0.95 × 0.98 × 0.99 × 0.97 = 89.3%

Each imperfection compounds!
```

---

## Key Takeaways

1. **Mode selection is strategic** - Balance speed, cost, reliability
2. **Warehousing is more than storage** - Value-added services create differentiation
3. **Last mile is expensive** - Creative solutions needed (lockers, BOPIS)
4. **3PL can provide flexibility** - But evaluate total value, not just cost
5. **Cross-docking speeds flow** - Requires visibility and coordination
6. **Perfect orders require perfection everywhere** - Small failures compound

---

## Practice Exercises

### Exercise 1: Mode Selection
A company ships 1,000 units monthly from Chicago to LA. Units weigh 10 lbs each and are worth $50. Compare air ($3/lb), FTL ($3,000/truck, holds 2,000 units), and LTL ($8/unit) options.

### Exercise 2: Warehouse Layout
Design a simple warehouse layout for an e-commerce company with: 1,000 SKUs (100 fast-movers, 300 medium, 600 slow), 200 orders/day, average 3 items/order.

### Exercise 3: 3PL Evaluation
Create a weighted scorecard to evaluate two 3PLs for a retail company's distribution needs.

### Exercise 4: Last-Mile Analysis
An online retailer has 15% failed home deliveries (no one home). Calculate the cost impact if: delivery cost is $8, re-delivery costs $12, and 5% of failed deliveries result in cancellations ($50 average order value).

---

*Next: [Demand Planning](05-demand-planning.md)*
