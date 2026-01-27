# Inventory Management

## Learning Objectives

- Calculate Economic Order Quantity (EOQ) and variants
- Determine appropriate safety stock levels
- Apply ABC analysis for inventory classification
- Understand inventory costs and trade-offs
- Implement inventory policies for different situations
- Use inventory metrics to measure performance

---

## Inventory Fundamentals

### Why Hold Inventory?

```
REASONS FOR INVENTORY:
─────────────────────────────────────────────────────

1. MEET DEMAND (Cycle Stock)
   Bridge gap between production and consumption

2. BUFFER UNCERTAINTY (Safety Stock)
   Demand variability
   Supply variability

3. ECONOMIES OF SCALE
   Quantity discounts
   Fixed ordering costs
   Full truckload shipments

4. SPECULATION
   Anticipate price increases
   Hedge against shortages

5. SEASONAL SMOOTHING
   Build ahead of peak demand
   Level production


TYPES OF INVENTORY:
─────────────────────────────────────────────────────

                    Total Inventory
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
    ┌────────┐      ┌──────────┐      ┌─────────┐
    │ CYCLE  │      │ SAFETY   │      │ PIPELINE│
    │ STOCK  │      │ STOCK    │      │ (Transit)│
    │        │      │          │      │         │
    │Working │      │Buffer for│      │In-motion│
    │inventory│     │uncertainty│     │between  │
    │        │      │          │      │locations│
    └────────┘      └──────────┘      └─────────┘

Plus: Anticipation inventory (seasonal build)
      Speculative inventory (price hedging)
```

### Inventory Costs

```
TOTAL INVENTORY COST:
─────────────────────────────────────────────────────

Total Cost = Ordering Cost + Holding Cost + Stockout Cost

ORDERING (Setup) COST:
─────────────────────────────────────────────────────
Fixed cost per order:
• Purchase order processing
• Supplier communication
• Receiving and inspection
• Invoice processing
• Transportation (fixed portion)

Annual ordering cost = (D/Q) × S

Where: D = Annual demand
       Q = Order quantity
       S = Cost per order


HOLDING (Carrying) COST:
─────────────────────────────────────────────────────
Cost to hold one unit for one year:

Components:
• Capital cost (cost of money tied up) 10-15%
• Storage cost (space, handling)       2-5%
• Insurance                            1-2%
• Taxes                                1-2%
• Obsolescence, spoilage               2-10%
• Total:                              15-35% of value

Annual holding cost = (Q/2) × H

Where: Q/2 = Average inventory
       H   = Annual holding cost per unit


STOCKOUT COST:
─────────────────────────────────────────────────────
Cost of not having inventory when needed:
• Lost sales (immediate)
• Lost customer (long-term)
• Emergency expediting
• Production disruption
• Contract penalties

Often difficult to quantify precisely
```

---

## Economic Order Quantity (EOQ)

### Basic EOQ Model

```
EOQ DERIVATION:
─────────────────────────────────────────────────────

Goal: Minimize Total Annual Cost

Total Cost = Annual Ordering Cost + Annual Holding Cost

TC = (D/Q) × S + (Q/2) × H

Take derivative, set to zero:

dTC/dQ = -DS/Q² + H/2 = 0

Solve for Q:

        ┌───────────┐
        │    2DS    │
EOQ = √ │ ──────── │
        │     H     │
        └───────────┘

Where: D = Annual demand (units/year)
       S = Ordering cost per order ($)
       H = Holding cost per unit per year ($)


GRAPHICAL REPRESENTATION:
─────────────────────────────────────────────────────

Cost ($)
    │
    │ ╲                          Ordering Cost
    │  ╲                         (D/Q × S)
    │   ╲                      ╱
    │    ╲                   ╱
    │     ╲   Total Cost   ╱  Holding Cost
    │      ╲   ____      ╱    (Q/2 × H)
    │       ╲╱     ╲___╱
    │        │
    │        │
    │        │
    └────────┼────────────────────────────
             EOQ         Order Quantity (Q)


INVENTORY PATTERN:
─────────────────────────────────────────────────────

Units
  Q  ┤╲       ╲       ╲       ╲
     │ ╲       ╲       ╲       ╲
Q/2  ┤  ╲       ╲       ╲       ╲  ← Average
     │   ╲       ╲       ╲       ╲   inventory
  0  ┼────╲───────╲───────╲───────╲──────
          T       T       T       T

     T = Cycle time = Q/D
```

### EOQ Example

```
EOQ CALCULATION EXAMPLE:
─────────────────────────────────────────────────────

Given:
• Annual demand (D) = 10,000 units
• Order cost (S) = $50 per order
• Unit cost = $20
• Holding cost rate = 25%
• Holding cost (H) = $20 × 25% = $5 per unit per year

        ┌─────────────────┐
        │  2 × 10,000 × 50│
EOQ = √ │ ────────────────│ = √200,000 = 447 units
        │        5        │
        └─────────────────┘


DERIVED VALUES:
─────────────────────────────────────────────────────

Number of orders per year = D/EOQ = 10,000/447 = 22.4 orders

Order cycle time = 365/22.4 = 16 days

Average inventory = EOQ/2 = 447/2 = 224 units

Total annual cost:
• Ordering = (10,000/447) × $50 = $1,118
• Holding = (447/2) × $5 = $1,118
• Total = $2,236

Note: At EOQ, ordering cost = holding cost (always!)


SENSITIVITY ANALYSIS:
─────────────────────────────────────────────────────

EOQ is robust to parameter errors:

If actual D or S is 2× estimated:
• EOQ should be √2 = 1.41× larger
• But cost only increases by √2 - 1 = 41%

Flat cost curve near optimum = forgiving model
```

### EOQ Variations

```
EOQ WITH QUANTITY DISCOUNTS:
─────────────────────────────────────────────────────

Supplier offers:
• 0-499 units: $10.00 each
• 500-999 units: $9.50 each (5% discount)
• 1000+ units: $9.00 each (10% discount)

PROCEDURE:
─────────────────────────────────────────────────────

1. Calculate EOQ for lowest price tier
2. If EOQ is feasible (within tier), calculate total cost
3. If EOQ not feasible, use minimum quantity for that tier
4. Compare total costs across all tiers
5. Choose option with lowest total cost


EXAMPLE:
─────────────────────────────────────────────────────
D = 5,000 units, S = $100, H = 20% of unit cost

Tier 1 (P=$10, H=$2): EOQ = √(2×5000×100/2) = 707
  Feasible? Yes (0-499? No!) → Use Q = 500 (min for discount)

Tier 2 (P=$9.50, H=$1.90): EOQ = √(2×5000×100/1.90) = 725
  Feasible? Yes (500-999) ✓

Tier 3 (P=$9.00, H=$1.80): EOQ = √(2×5000×100/1.80) = 745
  Feasible? No (need 1000+) → Use Q = 1000

Compare Total Costs:
TC = Purchase + Ordering + Holding
TC = D×P + (D/Q)×S + (Q/2)×H

Tier 2 (Q=725): TC = 5000×9.50 + (5000/725)×100 + (725/2)×1.90
                   = $47,500 + $690 + $689 = $48,879

Tier 3 (Q=1000): TC = 5000×9.00 + (5000/1000)×100 + (1000/2)×1.80
                    = $45,000 + $500 + $900 = $46,400 ← Winner!

Order 1000 units despite higher holding cost
```

---

## Safety Stock

### Managing Uncertainty

```
SOURCES OF VARIABILITY:
─────────────────────────────────────────────────────

DEMAND UNCERTAINTY:
─────────────────────────────────────────────────────
• Customer demand fluctuates
• Forecasts are imperfect
• Promotions, seasonality
• Competitor actions

SUPPLY UNCERTAINTY:
─────────────────────────────────────────────────────
• Supplier delivery variability
• Transportation delays
• Quality issues
• Supplier capacity constraints


SAFETY STOCK PURPOSE:
─────────────────────────────────────────────────────

Inventory Level
    │
    │  Reorder when inventory = ROP
    │
ROP ├────────●
    │         ╲
SS  ├─────────────── Safety Stock buffer
    │
  0 ├────────────────────────────
           Lead Time

    ◀─────────────────▶

Without safety stock: 50% chance of stockout during lead time
With safety stock: Much lower stockout probability
```

### Safety Stock Calculation

```
SAFETY STOCK FORMULA:
─────────────────────────────────────────────────────

SS = z × σ_L

Where:
z = Service level factor (from normal distribution)
σ_L = Standard deviation of demand during lead time


COMMON SERVICE LEVELS:
─────────────────────────────────────────────────────

Service Level    z-value    Stockout Risk
─────────────────────────────────────────────────────
    90%          1.28         10%
    95%          1.65          5%
    97%          1.88          3%
    99%          2.33          1%
   99.5%         2.58         0.5%
   99.9%         3.09         0.1%


CALCULATING σ_L:
─────────────────────────────────────────────────────

Case 1: Only demand is variable
─────────────────────────────────────────────────────
σ_L = σ_d × √L

Where: σ_d = Standard deviation of daily demand
       L = Lead time (days)


Case 2: Both demand and lead time are variable
─────────────────────────────────────────────────────
σ_L = √(L × σ_d² + d² × σ_L²)

Where: d = Average daily demand
       σ_L = Standard deviation of lead time (days)


EXAMPLE:
─────────────────────────────────────────────────────
Given:
• Average daily demand = 100 units
• Std dev of daily demand = 20 units
• Lead time = 9 days (constant)
• Desired service level = 95% (z = 1.65)

σ_L = 20 × √9 = 20 × 3 = 60 units

Safety Stock = 1.65 × 60 = 99 units

Reorder Point = (100 × 9) + 99 = 999 units
                 (avg demand)  (safety stock)
```

### Service Level Trade-offs

```
SAFETY STOCK vs. SERVICE LEVEL:
─────────────────────────────────────────────────────

Safety Stock increases rapidly at high service levels:

Service    z       Safety Stock    Inventory
Level              (if σ_L=100)    Investment
─────────────────────────────────────────────────────
  90%     1.28        128            Baseline
  95%     1.65        165            +29%
  99%     2.33        233            +82%
  99.9%   3.09        309            +141%

Visual:
─────────────────────────────────────────────────────

Safety Stock
    │
    │                              ●
300 ┤                          ●
    │                      ●
200 ┤                  ●
    │              ●
100 ┤          ●
    │      ●
    │  ●
  0 ┼──────────────────────────────
      90%   95%   99%  99.9%
           Service Level

Going from 99% to 99.9%: Huge inventory increase
for small service improvement!

ECONOMIC ORDER QUANTITY + SAFETY STOCK:
─────────────────────────────────────────────────────

Inventory
    │
 Q+SS│╲       ╲       ╲
     │ ╲       ╲       ╲
     │  ╲       ╲       ╲
 ROP │───●───────●───────●─── Reorder Point
     │    ╲       ╲       ╲
  SS │─────●───────●───────●── Safety Stock
     │
  0  ┼────────────────────────
           Time

Order Q units when inventory hits ROP
Safety stock provides buffer during lead time
```

---

## ABC Analysis

### Inventory Classification

```
ABC CLASSIFICATION:
─────────────────────────────────────────────────────

Based on Pareto principle (80/20 rule)

TYPICAL DISTRIBUTION:
─────────────────────────────────────────────────────

Category   % of Items   % of Value   Treatment
─────────────────────────────────────────────────────
    A        10-20%       70-80%     Tight control
    B        20-30%       15-20%     Moderate control
    C        50-70%        5-10%     Simple control


GRAPHICAL REPRESENTATION:
─────────────────────────────────────────────────────

Cumulative % of Value
100% │                          ●●●●●●●●●●
     │                  ●●●●●●●●
 80% │            ●●●●●│
     │         ●●●     │
     │       ●●        │
 50% │     ●●          │
     │    ●            │
     │   ●             │
     │  ●              │
     │ ●               │
   0 ┼─●───────────────┴───────────────────
     0    20%         50%                100%
         │    A    │    B    │     C     │
              Cumulative % of Items


EXAMPLE ANALYSIS:
─────────────────────────────────────────────────────

Item   Annual   Unit    Annual    Cumulative   Class
       Demand   Cost    Value     % of Value
─────────────────────────────────────────────────────
1001   5,000    $100    $500,000    45%         A
1002   2,000    $150    $300,000    72%         A
1003   10,000   $15     $150,000    85%         B
1004   500      $200    $100,000    94%         B
1005   8,000    $5      $40,000     98%         C
1006   1,000    $20     $20,000    100%         C
```

### Management by Category

```
ABC INVENTORY POLICIES:
─────────────────────────────────────────────────────

A ITEMS (High value, tight control):
─────────────────────────────────────────────────────
• Frequent review (daily/weekly)
• Accurate demand forecasting
• Lower safety stock (higher service level target)
• Strong supplier relationships
• Continuous inventory system
• JIT where possible
• Management attention

B ITEMS (Medium value, moderate control):
─────────────────────────────────────────────────────
• Periodic review (weekly/monthly)
• Standard forecasting
• Moderate safety stock
• Established reorder points
• Mix of continuous and periodic review
• Normal supplier management

C ITEMS (Low value, simple control):
─────────────────────────────────────────────────────
• Infrequent review (monthly/quarterly)
• Simple forecasting (moving average)
• Higher safety stock (percent of demand)
• Larger order quantities
• Periodic review system
• Automate ordering
• Minimize management time


MULTI-CRITERIA ABC:
─────────────────────────────────────────────────────

Consider multiple factors:
• Annual dollar value (classic)
• Criticality (stockout impact)
• Lead time
• Obsolescence risk
• Supplier reliability

Item might be "C" by value but "A" by criticality
```

---

## Inventory Metrics

### Key Performance Indicators

```
INVENTORY KPIs:
─────────────────────────────────────────────────────

INVENTORY TURNOVER:
─────────────────────────────────────────────────────
                    Cost of Goods Sold
Turnover = ─────────────────────────────────
            Average Inventory (at cost)

Higher is generally better (using inventory efficiently)

Industry benchmarks:
• Grocery:      12-20 turns
• Retail:       4-8 turns
• Industrial:   2-6 turns


DAYS OF INVENTORY (DOI):
─────────────────────────────────────────────────────
            365
DOI = ─────────────
       Turnover

or

            Average Inventory
DOI = ───────────────────────── × 365
         Annual Cost of Sales

Lower is generally better


FILL RATE:
─────────────────────────────────────────────────────
                Items shipped on time
Fill Rate = ────────────────────────── × 100%
               Items ordered

Target: 95-99% depending on industry


STOCKOUT RATE:
─────────────────────────────────────────────────────
                  Stockout events
Stockout Rate = ───────────────── × 100%
                  Total line items

Target: <5% (lower for critical items)


INVENTORY ACCURACY:
─────────────────────────────────────────────────────
               Accurate counts
Accuracy = ─────────────────── × 100%
              Total counts

Target: >99% (critical for planning)
```

### Cash-to-Cash Cycle

```
CASH-TO-CASH CYCLE TIME:
─────────────────────────────────────────────────────

C2C = DOI + DSO - DPO

Where:
DOI = Days of Inventory
DSO = Days Sales Outstanding (receivables)
DPO = Days Payables Outstanding

Cash tied up in working capital


EXAMPLE:
─────────────────────────────────────────────────────

Company A:                Company B:
─────────────────────────────────────────────────────
DOI:  45 days             DOI:  30 days
DSO:  35 days             DSO:  40 days
DPO:  30 days             DPO:  50 days
─────────────────────────────────────────────────────
C2C:  50 days             C2C:  20 days

Company B has 30 fewer days of cash tied up!
On $100M sales, that's significant working capital


IMPROVEMENT LEVERS:
─────────────────────────────────────────────────────

Reduce DOI: Better forecasting, faster turns
Reduce DSO: Faster collections, better credit
Increase DPO: Negotiate longer payment terms

              Cash Flow
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
    FASTER IN         SLOWER OUT
    (Reduce DOI+DSO)  (Increase DPO)
```

---

## Key Takeaways

1. **EOQ balances costs** - Ordering vs. holding costs trade off
2. **Safety stock protects service** - But increases exponentially at high service levels
3. **ABC prioritizes effort** - Focus management on high-value items
4. **Inventory ties up cash** - Turnover and C2C matter for financial health
5. **Variability drives safety stock** - Reduce variability to reduce inventory
6. **Service level is a choice** - Balance customer needs against inventory cost

---

## Practice Exercises

### Exercise 1: EOQ Calculation
A company has annual demand of 24,000 units, ordering cost of $75, and holding cost of $3 per unit per year. Calculate EOQ, annual orders, and total cost.

### Exercise 2: Safety Stock
Daily demand averages 200 units with standard deviation of 40 units. Lead time is 5 days. Calculate safety stock for 95% and 99% service levels.

### Exercise 3: ABC Analysis
Classify these 6 items using ABC analysis:
| Item | Annual Demand | Unit Cost |
|------|---------------|-----------|
| A | 1,000 | $50 |
| B | 5,000 | $2 |
| C | 200 | $200 |
| D | 500 | $10 |
| E | 100 | $500 |
| F | 2,000 | $5 |

### Exercise 4: Quantity Discount
Evaluate this quantity discount offer: 1-99 units at $10, 100-499 at $9, 500+ at $8. Annual demand is 1,000 units, S=$50, H=25% of unit cost.

---

*Next: [Logistics](04-logistics.md)*
