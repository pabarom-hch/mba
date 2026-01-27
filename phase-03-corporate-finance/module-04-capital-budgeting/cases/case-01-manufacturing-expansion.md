# Case Study: Precision Manufacturing Expansion

## Case Overview

| Element | Detail |
|---------|--------|
| Company | Precision Components Inc. |
| Industry | Industrial Manufacturing |
| Revenue | $180M annually |
| Situation | Evaluating new manufacturing facility |
| Challenge | Capital budgeting with risk analysis |
| Time Limit | 60 minutes |

---

## Background

You are the Director of Finance at Precision Components Inc., a manufacturer of high-precision metal components for the aerospace and automotive industries. The company has been operating at near full capacity (95%) at its existing facility and has been turning away orders.

The CEO has asked you to evaluate building a new manufacturing facility. The Board meeting is in two weeks, and you need to present a comprehensive capital budgeting analysis with a clear recommendation.

---

## Exhibit 1: Investment Requirements

**Initial Investment:**

| Item | Amount |
|------|--------|
| Land | $5,000,000 |
| Building | $25,000,000 |
| Manufacturing Equipment | $15,000,000 |
| Installation & Testing | $3,000,000 |
| Working Capital | $7,000,000 |
| **Total Investment** | **$55,000,000** |

**Depreciation:**
- Building: 30-year straight-line
- Equipment: 7-year MACRS (simplified to 7-year straight-line for this analysis)
- Land: Not depreciated

**Salvage Value (Year 10):**
- Land: $6,000,000 (appreciated)
- Building: $18,000,000
- Equipment: $2,000,000

---

## Exhibit 2: Revenue and Cost Projections

**Production Capacity:** 500,000 units annually

**Ramp-Up Schedule:**

| Year | Capacity Utilization | Units Produced |
|------|---------------------|----------------|
| 1 | 40% | 200,000 |
| 2 | 60% | 300,000 |
| 3 | 75% | 375,000 |
| 4-10 | 85% | 425,000 |

**Pricing and Costs:**

| Item | Amount |
|------|--------|
| Price per Unit | $120 |
| Variable Cost per Unit | $72 |
| Fixed Operating Costs | $8,000,000/year |

**Price and Cost Trends:**
- Price: +2% annually
- Variable cost: +3% annually
- Fixed costs: +2% annually

---

## Exhibit 3: Financing and Tax Information

| Item | Value |
|------|-------|
| Corporate Tax Rate | 25% |
| Cost of Debt | 6% |
| Cost of Equity | 14% |
| Target D/E Ratio | 0.5 |
| Risk-Free Rate | 4% |

**Project-Specific Considerations:**
- New market entry suggests higher risk than core business
- Management considers project risk similar to company average

---

## Exhibit 4: Competitive and Market Analysis

**Market Outlook:**
- Aerospace sector growth: 4% annually
- Automotive sector growth: 2% annually
- Precision components market share: Currently 8%

**Competitive Position:**
- Three major competitors with similar capabilities
- Two competitors announced capacity expansions
- Technology advantage estimated at 2-3 years

**Strategic Considerations:**
- Not building may result in lost customers
- Customers increasingly value supply chain reliability
- Some customers require dual-sourcing

---

## Exhibit 5: Alternative Scenarios

**Scenario Analysis Inputs:**

| Variable | Base | Optimistic | Pessimistic |
|----------|------|------------|-------------|
| Year 4+ Utilization | 85% | 95% | 70% |
| Price per Unit (Y1) | $120 | $130 | $110 |
| Variable Cost (Y1) | $72 | $68 | $78 |
| Fixed Costs | $8M | $7M | $9M |
| Investment | $55M | $50M | $62M |

**Probability Estimates:**
- Optimistic: 25%
- Base: 50%
- Pessimistic: 25%

---

## Discussion Questions

### Question 1: WACC Calculation
Calculate the Weighted Average Cost of Capital (WACC) for Precision Components. Is this the appropriate discount rate for the project?

### Question 2: Cash Flow Projection
Develop a complete 10-year cash flow projection for the project. Include:
- Operating cash flows for each year
- Initial investment
- Terminal value and salvage
- Working capital recovery

### Question 3: NPV and IRR Analysis
Calculate:
a) Net Present Value
b) Internal Rate of Return
c) Payback Period (simple and discounted)
d) Profitability Index

### Question 4: Sensitivity Analysis
Identify the three most critical variables and conduct sensitivity analysis showing NPV impact of ±20% changes.

### Question 5: Scenario Analysis
Calculate NPV under optimistic and pessimistic scenarios. What is the expected NPV incorporating probability weights?

### Question 6: Strategic Considerations
What strategic factors should be considered beyond the NPV analysis? How might real options thinking apply?

### Question 7: Final Recommendation
Make a clear recommendation to the Board. Address key risks and mitigation strategies.

---

## Analysis Framework

### WACC Calculation

```
WACC = (E/V) × Re + (D/V) × Rd × (1-T)

Given:
- D/E = 0.5
- If E = 1, D = 0.5, V = 1.5
- E/V = 1/1.5 = 66.7%
- D/V = 0.5/1.5 = 33.3%

WACC = (0.667)(14%) + (0.333)(6%)(1-0.25)
WACC = 9.33% + 1.50% = 10.83%

Use 11% for simplicity
```

### Cash Flow Projection (Base Case)

**Year 0:**
```
Land: ($5,000,000)
Building: ($25,000,000)
Equipment: ($15,000,000)
Installation: ($3,000,000)
Working Capital: ($7,000,000)
Total: ($55,000,000)
```

**Annual Depreciation:**
```
Building: $25,000,000 / 30 = $833,333
Equipment: $15,000,000 / 7 = $2,142,857
Total: $2,976,190 (Years 1-7)
After Year 7: $833,333 (building only)
```

**Year 1 Operations:**
```
Revenue: 200,000 × $120 = $24,000,000
Variable Costs: 200,000 × $72 = $14,400,000
Contribution Margin: $9,600,000
Fixed Costs: $8,000,000
EBITDA: $1,600,000
Depreciation: $2,976,190
EBIT: ($1,376,190)
Tax Benefit (25%): $344,048
Net Loss: ($1,032,143)
OCF = NI + Dep = ($1,032,143) + $2,976,190 = $1,944,048
```

**Year 4 Operations (Steady State):**
```
Assume prices/costs have escalated through Year 4
Price (Y4): $120 × (1.02)³ = $127.35
Variable Cost (Y4): $72 × (1.03)³ = $78.67
Fixed Costs (Y4): $8M × (1.02)³ = $8.49M

Revenue: 425,000 × $127.35 = $54,122,500
Variable Costs: 425,000 × $78.67 = $33,434,750
Contribution: $20,687,750
Fixed Costs: $8,490,000
EBITDA: $12,197,750
Depreciation: $2,976,190
EBIT: $9,221,560
Tax (25%): $2,305,390
Net Income: $6,916,170
OCF: $6,916,170 + $2,976,190 = $9,892,360
```

**Complete Cash Flow Table:**

| Year | Units | Revenue | Var Cost | Fixed | EBITDA | Dep | EBIT | Tax | NI | OCF |
|------|-------|---------|----------|-------|--------|-----|------|-----|-----|-----|
| 1 | 200K | $24.0M | $14.4M | $8.0M | $1.6M | $3.0M | ($1.4M) | $0.3M | ($1.0M) | $1.9M |
| 2 | 300K | $36.7M | $22.3M | $8.2M | $6.3M | $3.0M | $3.3M | $0.8M | $2.5M | $5.5M |
| 3 | 375K | $47.1M | $28.9M | $8.3M | $9.9M | $3.0M | $6.9M | $1.7M | $5.2M | $8.2M |
| 4 | 425K | $54.1M | $33.4M | $8.5M | $12.2M | $3.0M | $9.2M | $2.3M | $6.9M | $9.9M |
| 5 | 425K | $56.1M | $35.2M | $8.7M | $12.2M | $3.0M | $9.2M | $2.3M | $6.9M | $9.9M |
| 6 | 425K | $58.3M | $37.1M | $8.8M | $12.3M | $3.0M | $9.3M | $2.3M | $7.0M | $10.0M |
| 7 | 425K | $60.5M | $39.1M | $9.0M | $12.4M | $3.0M | $9.4M | $2.4M | $7.1M | $10.1M |
| 8 | 425K | $62.9M | $41.2M | $9.2M | $12.5M | $0.8M | $11.7M | $2.9M | $8.7M | $9.6M |
| 9 | 425K | $65.4M | $43.4M | $9.4M | $12.6M | $0.8M | $11.8M | $2.9M | $8.8M | $9.6M |
| 10 | 425K | $68.0M | $45.7M | $9.6M | $12.7M | $0.8M | $11.9M | $3.0M | $8.9M | $9.7M |

**Year 10 Terminal Value:**
```
Salvage Value:
- Land: $6,000,000
- Building: $18,000,000
- Equipment: $2,000,000
Total: $26,000,000

Book Value:
- Land: $5,000,000
- Building: $25M - (10 × $833K) = $16,667,000
- Equipment: $0 (fully depreciated after Y7)
Total Book: $21,667,000

Gain on Sale: $26,000,000 - $21,667,000 = $4,333,000
Tax on Gain: $1,083,250

After-tax Salvage: $26,000,000 - $1,083,250 = $24,916,750
Working Capital Recovery: $7,000,000

Total Terminal CF: $24,916,750 + $7,000,000 = $31,916,750
Year 10 Total: OCF + Terminal = $9.7M + $31.9M = $41.6M
```

### NPV Calculation

```
At 11% WACC:

Year 0: ($55,000,000)
Year 1: $1,944,048 / 1.11 = $1,751,395
Year 2: $5,487,000 / 1.23 = $4,461,789
Year 3: $8,173,000 / 1.37 = $5,966,423
Year 4: $9,892,000 / 1.52 = $6,508,553
Year 5: $9,910,000 / 1.69 = $5,864,497
Year 6: $9,974,000 / 1.87 = $5,334,225
Year 7: $10,075,000 / 2.08 = $4,844,712
Year 8: $9,554,000 / 2.30 = $4,153,913
Year 9: $9,631,000 / 2.56 = $3,762,109
Year 10: $41,616,750 / 2.84 = $14,655,898

NPV = $2,303,514

IRR ≈ 12.4%
```

### Sensitivity Analysis

| Variable | Base | -20% NPV | +20% NPV | Impact |
|----------|------|----------|----------|--------|
| Price | $120 | ($8.5M) | $13.1M | High |
| Volume | 425K | ($6.3M) | $10.9M | High |
| Var Cost | $72 | $10.2M | ($5.6M) | High |
| Fixed Cost | $8M | $5.9M | ($1.3M) | Medium |
| Investment | $55M | $8.3M | ($3.7M) | Medium |

**Key Finding:** Price and volume are the most critical variables.

### Scenario Analysis

**Optimistic:**
- Higher utilization, better pricing, lower costs
- NPV ≈ $22M

**Pessimistic:**
- Lower utilization, competitive pressure, cost overruns
- NPV ≈ ($18M)

**Expected NPV:**
```
E(NPV) = 0.25($22M) + 0.50($2.3M) + 0.25(-$18M)
E(NPV) = $5.5M + $1.15M - $4.5M = $2.15M
```

### Strategic Considerations

**Factors Beyond NPV:**

1. **Competitive Positioning:**
   - Competitors expanding
   - Risk of losing market share without investment
   - Customer relationships at stake

2. **Real Options:**
   - Option to expand further if successful
   - Option to mothball if demand weak
   - Option to convert facility to other uses

3. **Technology:**
   - Current advantage may erode
   - Investment maintains leadership position

4. **Customer Requirements:**
   - Dual-sourcing trends favor capacity
   - Supply chain reliability increasingly valued

### Recommendation

**RECOMMEND APPROVAL** with conditions:

1. **Economic Case:**
   - Base case NPV positive ($2.3M)
   - Expected NPV positive ($2.15M)
   - IRR (12.4%) exceeds WACC (11%)

2. **Strategic Case:**
   - Necessary to maintain market position
   - Supports customer retention
   - Provides growth platform

3. **Risk Mitigation:**
   - Phase construction if possible
   - Secure customer commitments before breaking ground
   - Build flexibility into design
   - Establish performance triggers for expansion/contraction

4. **Key Success Factors:**
   - Achieve Year 3 utilization targets
   - Maintain price discipline
   - Control construction costs

---

## Teaching Note

### Key Learning Points

1. **WACC as discount rate** - Must match project risk to discount rate
2. **Ramp-up effects** - Early years often negative or low positive
3. **Terminal value significance** - Often material portion of NPV
4. **Sensitivity analysis** - Identifies key value drivers
5. **Strategic value** - Some investments necessary regardless of NPV

### Common Student Mistakes

- Forgetting working capital
- Using book value instead of market value for salvage
- Ignoring escalation of prices and costs
- Not calculating taxes correctly on gains
- Presenting only base case without risk analysis

### Discussion Extensions

- How would you stage this investment?
- What if a competitor announced the same expansion?
- How would higher interest rates affect the decision?
- What contract terms would you negotiate with customers?

---

*Return to [Module 4 Overview](../README.md)*
