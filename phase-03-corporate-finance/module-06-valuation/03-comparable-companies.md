# Comparable Company Analysis

## Learning Objectives

- Select appropriate peer companies
- Calculate and interpret valuation multiples
- Apply multiples to derive valuation
- Understand multiple drivers and limitations
- Present comparable company analysis professionally

---

## Introduction

Comparable company analysis (often called "trading comps") values a company based on how similar public companies trade in the market. The logic: similar companies should trade at similar multiples.

This is the most commonly used valuation method because it's market-based, quick, and intuitive. However, finding truly comparable companies and interpreting multiples correctly requires skill.

---

## Core Concepts

### The Comparable Companies Approach

```
Target Value = Target Metric × Comparable Multiple

Example:
Target EBITDA: $100M
Median Peer EV/EBITDA: 8.0x
Implied Enterprise Value: $800M
```

### Common Valuation Multiples

**Enterprise Value Multiples:**

| Multiple | Formula | Best For |
|----------|---------|----------|
| EV/EBITDA | EV ÷ EBITDA | Most common, cash flow proxy |
| EV/Revenue | EV ÷ Revenue | High-growth, negative EBITDA |
| EV/EBIT | EV ÷ EBIT | When D&A varies significantly |
| EV/Invested Capital | EV ÷ IC | Capital-intensive industries |

**Equity Multiples:**

| Multiple | Formula | Best For |
|----------|---------|----------|
| P/E | Price ÷ EPS | Mature companies |
| P/B | Price ÷ Book Value | Banks, REITs |
| PEG | P/E ÷ Growth | Growth at reasonable price |

### Choosing the Right Multiple

```
Decision Framework:

1. Is the company profitable?
   No → Use EV/Revenue
   Yes → Continue

2. Is D&A meaningful/variable?
   Yes → Use EV/EBITDA
   No → EV/EBIT acceptable

3. Capital structure similar?
   Yes → P/E also useful
   No → Prefer EV multiples

4. Is growth the key driver?
   Yes → Consider PEG ratio
```

---

## Peer Selection

### Selection Criteria

**Primary Criteria:**
1. Same industry/sector
2. Similar business model
3. Comparable size
4. Similar geographic exposure
5. Similar growth profile

**Secondary Criteria:**
- Profitability levels
- Capital intensity
- Customer mix
- Product mix
- Ownership structure

### Peer Universe Example

**Target:** Mid-size software company ($500M revenue)

```
Good Comparables:
- Similar business model (SaaS vs. license)
- Revenue: $200M - $1B
- Similar growth rate (±5%)
- Same customer segment (enterprise/SMB)

Potentially Problematic:
- Very large or very small
- Different delivery model
- Different end markets
- Different growth stage
```

### Number of Comparables

```
Ideal: 5-10 peers
Minimum: 3-4 peers
Maximum: 15+ (becomes unwieldy)

Quality over quantity—
3 great comps > 10 mediocre comps
```

---

## Multiple Calculation

### Enterprise Value Calculation

```
Enterprise Value = Market Cap + Debt + Preferred + Minority - Cash

Where:
Market Cap = Share Price × Diluted Shares
Debt = Total Debt (short-term + long-term)
Cash = Cash and Cash Equivalents
```

### Multiple Calculation Example

**Company X:**
```
Share Price: $50
Diluted Shares: 100M
Total Debt: $500M
Cash: $200M
EBITDA (LTM): $400M

Market Cap = $50 × 100M = $5,000M
EV = $5,000M + $500M - $200M = $5,300M
EV/EBITDA = $5,300M / $400M = 13.3x
```

### LTM vs. NTM Multiples

| Type | Definition | Use |
|------|------------|-----|
| LTM | Last Twelve Months | Historical, actual |
| NTM | Next Twelve Months | Forward-looking, estimated |
| CY | Current Year | Calendar year |
| NFY | Next Fiscal Year | Forward fiscal year |

**Best Practice:** Use NTM multiples when available (more relevant for valuation).

---

## Comparable Company Analysis Output

### Standard Comp Table

| Company | EV | LTM Revenue | LTM EBITDA | EV/Revenue | EV/EBITDA |
|---------|-----|-------------|------------|------------|-----------|
| Peer A | $2,000M | $500M | $100M | 4.0x | 20.0x |
| Peer B | $3,500M | $700M | $175M | 5.0x | 20.0x |
| Peer C | $1,500M | $400M | $80M | 3.8x | 18.8x |
| Peer D | $4,000M | $800M | $200M | 5.0x | 20.0x |
| Peer E | $2,500M | $600M | $150M | 4.2x | 16.7x |
| **Mean** | | | | **4.4x** | **19.1x** |
| **Median** | | | | **4.2x** | **20.0x** |

### Applying Multiples

**Target Company:**
- LTM Revenue: $300M
- LTM EBITDA: $60M

```
Using Median EV/EBITDA (20.0x):
EV = $60M × 20.0x = $1,200M

Using Median EV/Revenue (4.2x):
EV = $300M × 4.2x = $1,260M

Implied Range: $1,200M - $1,260M
```

---

## Understanding Multiple Drivers

### Why Multiples Differ

```
Higher Multiple Justified By:
+ Higher growth rate
+ Higher margins
+ Lower risk
+ Stronger competitive position
+ Better management

Lower Multiple Caused By:
- Lower growth
- Lower margins
- Higher risk
- Weaker position
- Governance concerns
```

### The Growth-Multiple Relationship

```
For EV/EBITDA:

Company A: 15% growth → 12x multiple
Company B: 25% growth → 18x multiple

Rule of Thumb:
+10% growth ≈ +6x EBITDA multiple
(varies by sector and conditions)
```

### Premium/Discount Analysis

```
If Target deserves premium:
Implied Multiple = Median × (1 + Premium%)

If Target deserves discount:
Implied Multiple = Median × (1 - Discount%)

Example:
Median: 10x
Target has 30% higher growth → 10-20% premium
Applied Multiple: 10x × 1.15 = 11.5x
```

---

## Consulting Application

### Professional Comp Analysis

**Step 1: Peer Selection**
- Define criteria
- Screen universe
- Document rationale

**Step 2: Data Gathering**
- Financial data (CapIQ, Bloomberg)
- Market data
- Analyst estimates (NTM)

**Step 3: Calculate Multiples**
- Standardize calculations
- Calendarize if needed
- Calculate mean, median, range

**Step 4: Apply and Adjust**
- Select appropriate multiple
- Justify premium/discount
- Show sensitivity to multiple choice

### Presentation Format

```
Slide 1: Peer Universe
- Companies selected
- Selection criteria
- Key metrics comparison

Slide 2: Trading Multiples
- Multiple comparison table
- Historical multiple trends
- Commentary on outliers

Slide 3: Valuation Output
- Applied multiples
- Implied valuation range
- Sensitivity analysis
```

---

## CEO Application

### Reading Comparable Analysis

**Questions to Ask:**

1. "Are these really comparable companies?"
   - Same business model?
   - Similar size and growth?

2. "Why the multiple range?"
   - What explains high vs. low?
   - Where should we be in range?

3. "Which multiple is most relevant?"
   - Revenue vs. EBITDA?
   - LTM vs. NTM?

4. "How does this compare to our own?"
   - Are we trading at premium or discount?
   - Is the market right?

### Strategic Implications

```
If trading at premium:
- Consider equity issuance
- Stock-based acquisitions attractive
- Market expects you to outperform

If trading at discount:
- Consider buybacks
- Review investor communication
- Cash acquisitions more attractive
```

---

## Worked Example

### Complete Comparable Analysis

**Target:** TechServices Inc.
- LTM Revenue: $200M
- LTM EBITDA: $40M (20% margin)
- Revenue growth: 12%

**Peer Analysis:**

| Peer | EV ($M) | Rev ($M) | EBITDA ($M) | Margin | Growth | EV/Rev | EV/EBITDA |
|------|---------|----------|-------------|--------|--------|--------|-----------|
| A | 1,200 | 250 | 63 | 25% | 15% | 4.8x | 19.0x |
| B | 800 | 180 | 36 | 20% | 10% | 4.4x | 22.2x |
| C | 2,000 | 400 | 80 | 20% | 14% | 5.0x | 25.0x |
| D | 600 | 150 | 23 | 15% | 8% | 4.0x | 26.1x |
| E | 1,500 | 300 | 60 | 20% | 12% | 5.0x | 25.0x |

**Statistics:**

| Metric | Mean | Median | High | Low |
|--------|------|--------|------|-----|
| EV/Revenue | 4.6x | 4.8x | 5.0x | 4.0x |
| EV/EBITDA | 23.5x | 25.0x | 26.1x | 19.0x |

**Valuation:**

```
EV/Revenue Approach:
Median multiple: 4.8x
Target Revenue: $200M
Implied EV: $960M

EV/EBITDA Approach:
Target most similar to B and E (20% margin, ~12% growth)
Use: 23-25x range
Target EBITDA: $40M
Implied EV: $920M - $1,000M

Conclusion: EV range of $920M - $1,000M
```

**Equity Value (if Debt = $100M, Cash = $50M):**
```
EV: $960M (midpoint)
Less Debt: ($100M)
Plus Cash: $50M
Equity Value: $910M
```

---

## Common Mistakes

### 1. Forcing Comparability
**Mistake:** Using non-comparable companies to expand universe.
**Fix:** Fewer good comps are better than many bad ones.

### 2. Ignoring Multiple Drivers
**Mistake:** Using median without understanding why multiples differ.
**Fix:** Analyze drivers and justify premium/discount.

### 3. Mixing LTM and NTM
**Mistake:** Inconsistent time periods across peers.
**Fix:** Standardize all multiples to same period.

### 4. Ignoring Outliers
**Mistake:** Including outliers that skew mean.
**Fix:** Use median, explain outliers.

### 5. Using Only One Multiple
**Mistake:** Relying solely on EV/EBITDA.
**Fix:** Triangulate with multiple metrics.

---

## Key Takeaways

1. **Peer selection is critical** - Garbage in, garbage out
2. **EV multiples preferred** - Capital structure neutral
3. **Use median over mean** - More robust to outliers
4. **Understand drivers** - Know why multiples differ
5. **Premium/discount is judgment** - Justify with data
6. **Multiple multiples** - Cross-check with different metrics
7. **Market timing matters** - Multiples change with conditions

---

## Practice Problems

### Problem 1: Multiple Calculation
Company: Market Cap $500M, Debt $100M, Cash $50M, EBITDA $75M. Calculate EV/EBITDA.

### Problem 2: Valuation
Peer median EV/EBITDA = 12x. Target EBITDA = $80M. Target has 5% higher growth. What premium would you apply?

### Problem 3: Peer Selection
You're valuing a $500M revenue enterprise software company growing 20%. Which are good peers?
a) $2B consumer software company, 10% growth
b) $400M enterprise software, 18% growth
c) $600M enterprise hardware, 25% growth
d) $300M enterprise software, 22% growth

---

*Next: [Precedent Transactions](04-precedent-transactions.md)*
