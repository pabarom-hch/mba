# Valuation Synthesis

## Learning Objectives

- Integrate multiple valuation methodologies
- Create professional "football field" valuation summaries
- Reconcile differences between methods
- Present valuation conclusions effectively
- Make informed recommendations based on analysis

---

## Introduction

Individual valuation methods provide data points; synthesis transforms them into actionable conclusions. Professional valuation requires triangulating across methods, understanding why they differ, and presenting a coherent story that supports decision-making.

This final topic brings together everything you've learned to produce investment-bank quality valuation output.

---

## Core Concepts

### The Valuation Toolkit Summary

```
Method            | What It Measures           | Best For
------------------|----------------------------|---------------------------
DCF               | Intrinsic value            | Fundamental analysis
Trading Comps     | Market value (minority)    | Relative valuation
Precedent Trans   | Control value              | M&A pricing
LBO               | Financial buyer floor      | PE perspective

Each method answers a different question.
Together, they tell the complete story.
```

### Why Methods Differ

**Systematic Differences:**

| Comparison | Expected Relationship | Reason |
|------------|----------------------|--------|
| Precedent > Trading | Control premium | Buyer pays for control |
| DCF vs. Comps | Varies | Different assumptions |
| LBO < Strategic | No synergies | Returns-constrained |
| Trading > DCF | Market optimism | Or DCF too conservative |

**Reconciliation Questions:**

```
If DCF > Comps:
- Is market undervaluing?
- Are DCF assumptions too optimistic?
- Is there hidden value market misses?

If DCF < Comps:
- Is market overvaluing?
- Are DCF assumptions too conservative?
- Is there a bubble/momentum?

If Precedent ≫ Trading (>40% premium):
- Deal-specific synergies?
- Overpaying acquirer?
- Different market conditions?
```

### The Valuation Range

```
Conservative   Base Case   Aggressive
    |------------|------------|
   $400M       $500M       $600M

Not a point estimate—a range that reflects:
1. Uncertainty in assumptions
2. Different methodologies
3. Different scenarios
```

---

## The Football Field

### Standard Format

```
                        Low    Mid    High
                         |      |      |
DCF (Perpetuity)    ████████████████████    $420-$520M
DCF (Exit Multiple) ██████████████████      $400-$490M
Trading Comps       ████████████████        $380-$460M
Precedent Trans     ██████████████████████████  $450-$580M
LBO Analysis        ██████████              $350-$420M
52-Week Trading     ████████████            $370-$450M
                         |      |      |
                       $400M  $475M  $550M
```

### Building the Football Field

**Step 1: Gather Data Points**

```
For Each Method:
- Low end of range
- High end of range
- Central estimate (if appropriate)

Include:
- Primary methods (DCF, Comps, Precedents)
- Secondary references (LBO, 52-week range)
- Analyst price targets (if public)
```

**Step 2: Standardize Output**

```
All methods should show:
- Same metric (EV, Equity Value, or Share Price)
- Same date (or clearly date-adjusted)
- Comparable treatment of non-operating items

Example Standardization:
Method yields EV → Bridge to Equity → Divide by shares
```

**Step 3: Sensitivity Ranges**

```
DCF Range:
Base ± WACC sensitivity (±0.5%)
Base ± Growth sensitivity (±0.5%)
Combined: Low to High

Comps Range:
25th to 75th percentile of peer multiples
Applied to target metrics

Precedents Range:
Similar approach to comps
Consider time-weighted adjustments
```

### Interpreting the Football Field

```
Scenario 1: Tight Convergence
All methods → $450-$500M range
Interpretation: High confidence in value

Scenario 2: Wide Dispersion
DCF: $400-$600M, Comps: $350-$450M
Interpretation: Investigate differences

Scenario 3: Clustering with Outlier
Most methods: $450-$500M, LBO: $350M
Interpretation: LBO sets floor; strategic value higher

Scenario 4: No Overlap
DCF: $500-$600M, Comps: $350-$400M
Interpretation: Major disconnect; understand why
```

---

## Reconciliation Framework

### Step-by-Step Reconciliation

**1. Start with Base Case**

```
Select anchor methodology:
- DCF for fundamental view
- Comps for market view
- Precedents for transaction view

Example: DCF yields $480M enterprise value
```

**2. Map Other Methods**

```
Trading Comps: $420M (-12% vs. DCF)
Precedent Trans: $550M (+15% vs. DCF)
LBO Floor: $380M (-21% vs. DCF)
```

**3. Explain Differences**

```
DCF vs. Comps (-12%):
- DCF assumes margin expansion (21% to 24%)
- Market pricing at current margins
- Resolution: If margin expansion likely, DCF appropriate

DCF vs. Precedents (+15%):
- Precedents include control premium (~25%)
- Some synergies captured in price
- Resolution: Control value = DCF + premium

DCF vs. LBO (-21%):
- LBO constrained by return targets (25% IRR)
- No synergy value captured
- Resolution: LBO = financial buyer floor
```

**4. Synthesize Conclusion**

```
Valuation Summary:
Intrinsic Value (DCF): $480M
Market Value (Comps): $420M
Control Value (Precedents): $550M
LBO Floor: $380M

Conclusion for [Specific Context]:
- If selling to strategic: $500-$550M achievable
- If selling to PE: $400-$450M realistic
- Standalone value: ~$480M
```

---

## Presenting Valuation

### The Valuation Story

**Structure:**

```
1. Context (1 slide)
   - Purpose of analysis
   - Key value drivers identified

2. Methodology Overview (1 slide)
   - Methods used and why
   - Data sources and dates

3. Individual Method Results (3-4 slides)
   - DCF summary with key assumptions
   - Comps with peer selection
   - Precedents with transaction list
   - LBO if relevant

4. Football Field (1 slide)
   - Visual summary
   - Range highlighted

5. Reconciliation (1 slide)
   - Why methods differ
   - Which is most relevant

6. Conclusion (1 slide)
   - Recommended range
   - Key assumptions underlying
```

### Professional Presentation Tips

```
Do:
✓ Show your work transparently
✓ Explain assumption choices
✓ Acknowledge uncertainties
✓ Present range, not point
✓ Connect to strategic context

Don't:
✗ Cherry-pick favorable methods
✗ Hide unfavorable data points
✗ Over-precision (false accuracy)
✗ Ignore contradictory evidence
✗ Present without sanity checks
```

### Key Slides Content

**DCF Summary Slide:**

```
┌─────────────────────────────────────────────┐
│ DCF Valuation Summary                       │
├─────────────────────────────────────────────┤
│ Key Assumptions:                            │
│ • Revenue CAGR: 8% (5-year)                │
│ • Terminal EBITDA Margin: 22%              │
│ • WACC: 9.5%                               │
│ • Terminal Growth: 2.5%                    │
├─────────────────────────────────────────────┤
│ Results:                                    │
│ PV of Cash Flows: $180M (35%)              │
│ PV of Terminal Value: $340M (65%)          │
│ Enterprise Value: $520M                     │
│ Equity Value: $450M                        │
│ Implied EV/EBITDA: 9.2x                    │
├─────────────────────────────────────────────┤
│ Sensitivity: $450M - $600M                 │
│ (WACC ±0.5%, Growth ±0.5%)                 │
└─────────────────────────────────────────────┘
```

**Comps Summary Slide:**

```
┌─────────────────────────────────────────────┐
│ Comparable Company Analysis                 │
├─────────────────────────────────────────────┤
│ Peer Universe: 6 companies                 │
│ Selection: Same industry, similar size     │
├─────────────────────────────────────────────┤
│ Multiple Ranges:                           │
│           Mean    Median   Applied         │
│ EV/EBITDA  8.5x    8.2x     8.0-9.0x       │
│ EV/Revenue 2.1x    2.0x     1.9-2.2x       │
├─────────────────────────────────────────────┤
│ Implied Valuation:                         │
│ EV/EBITDA @ 8.5x: $480M                    │
│ EV/Revenue @ 2.0x: $460M                   │
│ Range: $440M - $520M                       │
└─────────────────────────────────────────────┘
```

---

## Consulting Application

### Investment Banking Context

**For M&A Advisory:**

```
Sell-Side Engagement:
"Our analysis indicates fair value of $500-$550M.
- DCF supports $520M intrinsic value
- Precedent transactions at 12x suggest $540M
- Strategic premium potential of 10-15%
- Recommended ask: $575M"

Buy-Side Engagement:
"Target is fairly valued at $450-$500M.
- Comps suggest $460M market value
- LBO floor at $400M
- Synergies could justify $520M
- Recommended bid: Start at $450M"
```

**For Fairness Opinion:**

```
Structure:
1. No single method is dispositive
2. Range of values considered
3. Transaction price within range
4. Opinion that price is fair

Key Language:
"Based on our analysis, including DCF analysis,
comparable company analysis, and precedent
transaction analysis, it is our opinion that
the $500M consideration is fair, from a
financial point of view, to the shareholders."
```

### Strategic Planning Context

```
For Internal Valuation:
"Our business unit analysis indicates:
- Standalone value: $800M
- With synergies from restructuring: $950M
- Strategic sale value: $1.1B
- Recommendation: Pursue strategic sale"
```

---

## CEO Application

### When You're Presented Valuation

**Questions to Ask:**

```
1. "Why do the methods differ?"
   - Tests advisor's understanding
   - Reveals key value debates

2. "What would change this valuation?"
   - Identifies key assumptions
   - Shows scenario sensitivity

3. "How does this compare to what we think?"
   - Aligns advisor and management views
   - Surfaces disagreements early

4. "What are buyers likely to pay?"
   - Market reality check
   - Pricing expectations

5. "What's the floor?"
   - Downside protection
   - Walk-away price
```

### Making Decisions Based on Valuation

```
Selling Your Company:
- Use precedent transactions for expectations
- DCF shows intrinsic value you're giving up
- LBO shows minimum competitive bid

Acquiring a Company:
- DCF shows fundamental value
- Comps show what market pays
- Synergy analysis justifies premium

Going Public (IPO):
- Comps drive pricing
- DCF supports growth story
- Precedent IPOs set expectations

Capital Allocation:
- DCF for investment decisions
- Comps for relative performance
- ROIC vs. WACC for value creation
```

---

## Worked Example

### Complete Valuation Synthesis

**Target:** ServiceCo Inc.
- Revenue: $300M
- EBITDA: $60M (20% margin)
- Growth: 10% historical
- Industry: Business services

**Valuation Results:**

```
1. DCF Analysis
   WACC: 10%, Terminal Growth: 3%
   Base Case EV: $580M
   Sensitivity: $520M - $660M
   Implied Multiple: 9.7x EBITDA

2. Trading Comparables
   Peer median EV/EBITDA: 8.5x
   Applied range: 8.0x - 9.5x
   Implied EV: $480M - $570M

3. Precedent Transactions
   Median transaction multiple: 11.0x
   Applied range: 10.0x - 12.5x
   Implied EV: $600M - $750M

4. LBO Analysis
   At 25% IRR target
   Maximum price: $480M
   At 20% IRR: $540M
```

**Football Field:**

```
                              $400M  $500M  $600M  $700M  $800M
                                |      |      |      |      |
DCF (Base ±Sensitivity)           ██████████████████
                                  $520M      $660M
Trading Comps (8-9.5x)          ████████████████
                                $480M    $570M
Precedent Trans (10-12.5x)              ██████████████████████
                                        $600M          $750M
LBO (20-25% IRR)               ████████████
                               $480M  $540M
52-Week Range                  ████████████
                               $450M  $520M
                                |      |      |      |      |
                              $400M  $500M  $600M  $700M  $800M
```

**Reconciliation:**

```
DCF vs. Comps (+8%):
DCF assumes margin improvement (20% → 23%)
Comps price at current margins
→ DCF appropriate if margin expansion achievable

Comps vs. Precedents (+30%):
Difference = Control premium + Synergies
Average control premium in sector: 25%
→ Reasonable premium captured

DCF vs. LBO (-17%):
LBO constrained by IRR targets
No synergy value
→ LBO sets financial buyer floor
```

**Synthesis:**

```
Valuation Conclusions:

Standalone Intrinsic Value: $550-$600M
- Based on DCF with reasonable assumptions
- Supported by growth and margin trajectory

Market Value (if public): $500-$550M
- Trading comps adjusted for size
- Consistent with 52-week range

Strategic Acquisition Value: $600-$700M
- Precedents support 11x+ for quality assets
- Synergies could justify premium

Financial Buyer Floor: $480-$540M
- LBO analysis at market leverage
- Would compete for deal at $500M+

Recommended Range: $550-$650M
Central Estimate: $600M (10x EBITDA)
```

**Final Presentation:**

```
Executive Summary:

ServiceCo is worth $550-$650M with a central
estimate of $600M (10x EBITDA).

Key Value Drivers:
1. Recurring revenue (85% renewal rate)
2. Margin expansion potential (20% → 23%)
3. Consolidator in fragmented market

Valuation Support:
- DCF intrinsic value: $580M
- Strategic precedents: $650M average
- LBO floor provides downside: $500M

Recommendation:
For sale process, set expectations at $600M
with potential upside from competitive bidding.
Accept no less than $550M (standalone value).
```

---

## Common Mistakes

### 1. Averaging Without Understanding
**Mistake:** Simple average of all methods.
**Fix:** Weight methods by relevance; understand differences.

### 2. Ignoring Context
**Mistake:** Using control premium multiples for minority stake.
**Fix:** Match methodology to transaction type.

### 3. False Precision
**Mistake:** "$523.7M valuation."
**Fix:** Present ranges; acknowledge uncertainty.

### 4. Cherry-Picking
**Mistake:** Only showing favorable methods.
**Fix:** Present all relevant methods; explain choices.

### 5. Ignoring Market Reality
**Mistake:** DCF shows $600M but market pays $400M.
**Fix:** Reconcile difference; understand market view.

### 6. Missing the Story
**Mistake:** Numbers without narrative.
**Fix:** Connect valuation to strategy and value drivers.

---

## Key Takeaways

1. **Multiple methods required** - No single method tells the whole story
2. **Understand differences** - Reconciliation reveals insights
3. **Context determines weighting** - Different purposes, different emphasis
4. **Football field essential** - Visual summary for decision-makers
5. **Ranges, not points** - Acknowledge inherent uncertainty
6. **Story matters** - Connect numbers to business reality
7. **Sanity checks always** - Cross-reference for reasonableness

---

## Practice Problems

### Problem 1: Football Field
DCF yields $500M. Comps yield 7-9x EBITDA (EBITDA = $55M). Precedents yield 10-12x. Create football field and recommend valuation range.

### Problem 2: Reconciliation
Your DCF shows $450M. Client insists company is worth $600M based on one high precedent transaction. How do you reconcile?

### Problem 3: Recommendation
Selling company. DCF: $400M, Comps: $350M, Precedents: $500M, LBO: $320M. What opening price do you recommend and why?

---

## Module Summary

This completes Module 6: Valuation. You now have the tools to:

- Build DCF models with proper cash flow projections
- Select and analyze comparable companies
- Research and apply precedent transactions
- Understand LBO mechanics and pricing
- Synthesize multiple methods into recommendations

**Valuation is both art and science.** The frameworks provide structure, but judgment—informed by experience and context—determines the quality of conclusions.

---

*Next: [Module 7: Mergers & Acquisitions](../module-07-mergers-acquisitions/README.md)*
