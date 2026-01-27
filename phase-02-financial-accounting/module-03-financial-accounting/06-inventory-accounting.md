# Inventory Accounting

## Learning Objectives

- Understand different inventory costing methods (FIFO, LIFO, Weighted Average)
- Analyze inventory's impact on financial statements
- Identify inventory quality issues
- Apply inventory analysis to business decisions
- Understand inventory reserves and write-downs

---

## Introduction

For manufacturing and retail companies, inventory is often the largest current asset. How inventory is valued directly affects cost of goods sold, gross profit, and net income. Different accounting methods can produce dramatically different results from identical physical inventory.

---

## Core Concepts

### Inventory Costing Methods

**FIFO (First-In, First-Out):**
- Oldest inventory costs flow to COGS first
- Ending inventory reflects most recent costs
- In rising prices: Lower COGS, higher profit, higher inventory value

**LIFO (Last-In, First-Out):**
- Newest inventory costs flow to COGS first
- Ending inventory reflects oldest costs
- In rising prices: Higher COGS, lower profit, lower taxes
- Not permitted under IFRS

**Weighted Average:**
- Average cost of all units available
- Recalculated after each purchase
- Falls between FIFO and LIFO

### Example: Comparing Methods

**Purchase and Sales Data:**
| Date | Transaction | Units | Unit Cost | Total |
|------|-------------|-------|-----------|-------|
| Jan 1 | Beginning | 100 | $10 | $1,000 |
| Jan 15 | Purchase | 100 | $12 | $1,200 |
| Jan 20 | Purchase | 100 | $15 | $1,500 |
| | Total Available | 300 | | $3,700 |
| Jan 25 | Sold | (200) | | |
| | Ending Inventory | 100 | | ? |

**FIFO Calculation:**
```
COGS = 100 @ $10 + 100 @ $12 = $2,200
Ending Inventory = 100 @ $15 = $1,500
Total = $3,700 ✓
```

**LIFO Calculation:**
```
COGS = 100 @ $15 + 100 @ $12 = $2,700
Ending Inventory = 100 @ $10 = $1,000
Total = $3,700 ✓
```

**Weighted Average Calculation:**
```
Average Cost = $3,700 / 300 = $12.33
COGS = 200 × $12.33 = $2,467
Ending Inventory = 100 × $12.33 = $1,233
Total = $3,700 ✓
```

**Impact Summary:**

| Method | COGS | Gross Profit | Ending Inventory |
|--------|------|--------------|------------------|
| FIFO | $2,200 | Higher | $1,500 |
| LIFO | $2,700 | Lower | $1,000 |
| W. Avg | $2,467 | Middle | $1,233 |

### Lower of Cost or Market (LCM)

**Rule:** Inventory reported at lower of cost or net realizable value.

**Net Realizable Value (NRV):** Expected selling price - costs to complete and sell

**Write-Down Required When:**
- Market price declines below cost
- Inventory becomes obsolete
- Damage occurs
- Excess inventory relative to demand

**Journal Entry:**
```
Debit: Cost of Goods Sold (or Loss)    $XX
Credit: Inventory                       $XX
```

**Note:** Under US GAAP, write-downs cannot be reversed. IFRS allows reversal.

### LIFO Reserve

**Definition:** Difference between LIFO and FIFO inventory values.

```
LIFO Reserve = FIFO Inventory Value - LIFO Inventory Value
```

**Importance:**
- Disclosed in footnotes
- Allows comparison between LIFO and FIFO companies
- Shows cumulative income difference over time

**Converting LIFO to FIFO:**
```
FIFO Inventory = LIFO Inventory + LIFO Reserve
FIFO COGS = LIFO COGS - Change in LIFO Reserve
```

---

## Inventory Analysis

### Key Metrics

**Inventory Turnover:**
```
Inventory Turnover = COGS / Average Inventory

Higher = faster-moving inventory
Lower = slower-moving, potential obsolescence
```

**Days Inventory Outstanding (DIO):**
```
DIO = (Average Inventory / COGS) × 365

or

DIO = 365 / Inventory Turnover
```

**Gross Margin Return on Inventory Investment (GMROI):**
```
GMROI = Gross Margin / Average Inventory Cost

Should be > 1.0 (return more than inventory investment)
```

### Industry Benchmarks

| Industry | Typical Turnover | Typical DIO |
|----------|-----------------|-------------|
| Grocery | 12-20x | 18-30 days |
| Apparel | 4-6x | 60-90 days |
| Consumer Electronics | 6-10x | 35-60 days |
| Industrial | 3-5x | 70-120 days |
| Automotive | 8-12x | 30-45 days |

### Warning Signs

| Signal | What It May Indicate |
|--------|---------------------|
| Inventory growing faster than sales | Demand slowdown, obsolescence risk |
| Turnover declining | Slower sales, excess purchasing |
| Large write-downs | Obsolete/damaged inventory |
| DIO increasing | Cash tied up in inventory |
| Gross margin declining with inventory build | Potential future write-downs |

---

## CEO Application

### Inventory Strategy

**Balancing Act:**
- Too much inventory → Cash tied up, obsolescence risk
- Too little inventory → Stockouts, lost sales, customer dissatisfaction

**Just-in-Time (JIT):**
- Minimize inventory holding
- Requires reliable suppliers
- Reduces carrying costs
- Increases supply chain risk

**Safety Stock:**
- Buffer against variability
- Higher for critical items
- Consider lead time uncertainty

### Questions for Management

1. "What's our inventory turnover trend, and how does it compare to competitors?"
2. "How much of our inventory is slow-moving (> 12 months old)?"
3. "What's our obsolescence reserve as a percentage of inventory?"
4. "Are we using LIFO or FIFO, and what's the LIFO reserve?"
5. "What's our target days inventory, and are we achieving it?"

### Strategic Implications

**LIFO vs. FIFO Decision:**

| Factor | LIFO | FIFO |
|--------|------|------|
| Tax benefit (rising prices) | Yes (lower taxable income) | No |
| Reported earnings | Lower | Higher |
| Balance sheet inventory | Understated | Market value |
| Cash flow | Better (lower taxes) | Worse (higher taxes) |
| International comparability | No (not IFRS) | Yes |

---

## Worked Example

### Inventory Analysis: RetailCo

**Data:**
| Year | Revenue | COGS | Inventory | Inventory Reserve |
|------|---------|------|-----------|-------------------|
| 2024 | $1,000M | $650M | $180M | $15M |
| 2023 | $900M | $580M | $140M | $10M |
| 2022 | $850M | $550M | $130M | $8M |

**Analysis:**

**Inventory Turnover:**
```
2024: $650M / [($180M + $140M)/2] = 4.1x
2023: $580M / [($140M + $130M)/2] = 4.3x
2022: $550M / $130M = 4.2x (assume same avg)
```

**Days Inventory:**
```
2024: 365 / 4.1 = 89 days
2023: 365 / 4.3 = 85 days
2022: 365 / 4.2 = 87 days
```

**Growth Comparison:**
```
Revenue Growth 2024: ($1,000 - $900) / $900 = 11.1%
Inventory Growth 2024: ($180 - $140) / $140 = 28.6%

Inventory growing 2.5x faster than revenue!
```

**Assessment:**
- Inventory building faster than sales
- Turnover declining
- DIO increasing
- Reserve increasing ($5M in 2024, $2M in 2023)
- Potential signals: Demand slowdown, obsolescence building, future write-downs possible

**Recommendation:** Investigate root cause. If demand is slowing, may need write-down. If preparing for growth, monitor closely.

---

## Common Mistakes

### 1. Ignoring Inventory Method Differences
**Mistake:** Comparing LIFO and FIFO companies without adjustment.
**Reality:** Use LIFO reserve to convert for meaningful comparison.

### 2. Not Questioning Inventory Growth
**Mistake:** Accepting inventory increases without analysis.
**Reality:** Inventory growing faster than sales is a warning sign.

### 3. Under-Reserving for Obsolescence
**Mistake:** Not adequately reserving for slow-moving inventory.
**Reality:** Technology and fashion companies especially prone to obsolescence.

### 4. Ignoring Cash Impact
**Mistake:** Focusing only on income statement.
**Reality:** Inventory investment is real cash tied up.

---

## Key Takeaways

1. **Method matters enormously** - FIFO vs. LIFO can significantly impact profits
2. **Rising prices favor LIFO** - Lower taxes, but lower reported earnings
3. **LIFO reserve enables comparison** - Use it to normalize across companies
4. **Turnover is key metric** - Measures efficiency of inventory investment
5. **Growth comparison is critical** - Inventory vs. sales growth rates
6. **LCM protects against overstatement** - Write down when value declines
7. **Cash is tied up in inventory** - Working capital impact is real

---

## Practice Problems

### Problem 1: Method Comparison
A company has:
- Beginning inventory: 500 units @ $20
- Purchases: 300 units @ $25
- Sales: 600 units @ $40

Calculate COGS and ending inventory under FIFO and LIFO.

### Problem 2: LIFO Conversion
Company using LIFO reports:
- LIFO Inventory: $50M
- LIFO Reserve: $15M
- LIFO COGS: $200M
- Change in LIFO Reserve: $3M increase

Convert to FIFO inventory and FIFO COGS.

### Problem 3: Inventory Analysis
A retailer shows:
- Revenue growth: 5%
- Inventory growth: 20%
- Turnover decline from 8x to 6x
- Gross margin decline from 35% to 32%

Assess the situation and recommend actions.

---

*Next: [Fixed Assets & Depreciation](07-fixed-assets.md)*
