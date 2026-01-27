# Case Study: Detecting Earnings Manipulation at GrowthTech

## Case Overview

| Element | Detail |
|---------|--------|
| Company | GrowthTech Solutions |
| Industry | Enterprise Software |
| Revenue | $800M (reported) |
| Situation | Whistleblower alleges earnings manipulation |
| Challenge | Forensic financial analysis |
| Time Limit | 45 minutes |

---

## Background

You're an analyst at a hedge fund. Your firm is short (betting against) GrowthTech Solutions, an enterprise software company that has consistently beaten earnings estimates. A whistleblower has contacted you alleging financial manipulation.

Your task: Analyze the financial statements to identify potential manipulation and quantify the impact.

---

## Exhibit 1: Income Statement ($ millions)

| | 2024 | 2023 | 2022 | 2021 |
|---|------|------|------|------|
| Revenue | 800 | 650 | 520 | 420 |
| Cost of Revenue | (280) | (215) | (166) | (134) |
| **Gross Profit** | **520** | **435** | **354** | **286** |
| Operating Expenses: |
| Sales & Marketing | (200) | (175) | (145) | (120) |
| R&D | (100) | (95) | (88) | (80) |
| G&A | (80) | (65) | (52) | (44) |
| **Operating Income** | **140** | **100** | **69** | **42** |
| Interest Expense | (8) | (5) | (3) | (2) |
| Other Income | 15 | 8 | 3 | 2 |
| **Pre-tax Income** | **147** | **103** | **69** | **42** |
| Income Tax | (37) | (26) | (17) | (11) |
| **Net Income** | **110** | **77** | **52** | **31** |

---

## Exhibit 2: Balance Sheet ($ millions)

| | 2024 | 2023 | 2022 | 2021 |
|---|------|------|------|------|
| **Assets** |
| Cash | 150 | 140 | 130 | 120 |
| Accounts Receivable | 280 | 180 | 115 | 80 |
| Unbilled Revenue | 45 | 20 | 8 | 3 |
| Prepaid Expenses | 40 | 25 | 18 | 12 |
| **Total Current Assets** | **515** | **365** | **271** | **215** |
| Capitalized Software | 120 | 75 | 45 | 25 |
| PP&E, net | 60 | 55 | 50 | 45 |
| Goodwill | 200 | 150 | 80 | 50 |
| Other Intangibles | 85 | 55 | 30 | 15 |
| **Total Assets** | **980** | **700** | **476** | **350** |
| **Liabilities** |
| Accounts Payable | 35 | 30 | 25 | 22 |
| Accrued Expenses | 60 | 48 | 40 | 35 |
| Deferred Revenue | 140 | 135 | 128 | 110 |
| Short-term Debt | 20 | 15 | 10 | 8 |
| **Total Current Liabilities** | **255** | **228** | **203** | **175** |
| Long-term Debt | 100 | 60 | 30 | 15 |
| Deferred Tax Liability | 25 | 18 | 12 | 8 |
| **Total Liabilities** | **380** | **306** | **245** | **198** |
| **Shareholders' Equity** | **600** | **394** | **231** | **152** |

---

## Exhibit 3: Cash Flow Statement ($ millions)

| | 2024 | 2023 | 2022 | 2021 |
|---|------|------|------|------|
| **Operating Activities** |
| Net Income | 110 | 77 | 52 | 31 |
| Depreciation & Amortization | 45 | 32 | 22 | 15 |
| Stock-based Compensation | 85 | 65 | 48 | 35 |
| Deferred Taxes | 7 | 6 | 4 | 3 |
| Changes in Working Capital: |
| Accounts Receivable | (100) | (65) | (35) | (20) |
| Unbilled Revenue | (25) | (12) | (5) | (2) |
| Prepaid Expenses | (15) | (7) | (6) | (4) |
| Accounts Payable | 5 | 5 | 3 | 4 |
| Accrued Expenses | 12 | 8 | 5 | 6 |
| Deferred Revenue | 5 | 7 | 18 | 22 |
| **Cash from Operations** | **129** | **116** | **106** | **90** |
| **Investing Activities** |
| Capital Expenditures | (15) | (12) | (10) | (8) |
| Capitalized Software | (60) | (40) | (25) | (15) |
| Acquisitions | (95) | (85) | (45) | (25) |
| **Cash from Investing** | **(170)** | **(137)** | **(80)** | **(48)** |
| **Financing Activities** |
| Debt Proceeds | 45 | 35 | 17 | 8 |
| Stock Issuance | 6 | 4 | 3 | 2 |
| **Cash from Financing** | **51** | **39** | **20** | **10** |
| **Change in Cash** | **10** | **18** | **46** | **52** |

---

## Exhibit 4: Selected Disclosures

**Revenue Recognition (from footnotes):**
"The Company recognizes revenue under ASC 606. For multi-year contracts, the Company allocates transaction price to performance obligations based on standalone selling prices. Professional services are recognized as services are performed. License revenue may be recognized upon delivery or over the contract term."

**Capitalized Software:**
"The Company capitalizes certain software development costs after technological feasibility is established. Capitalized costs are amortized over estimated useful lives of 3-5 years."

**Related Party Transaction:**
"The Company recognized $35 million in revenue from TechPartner LLC, an entity in which the CEO holds a 15% ownership stake."

**Accounting Change:**
"In 2023, the Company changed its estimate for the useful life of capitalized software from 3 years to 5 years. The effect was to reduce amortization expense by $8 million in 2024."

---

## Discussion Questions

### Question 1: Revenue Quality Assessment
Analyze revenue growth quality. What red flags do you see in receivables, unbilled revenue, and deferred revenue?

### Question 2: Expense Manipulation
Evaluate R&D capitalization and the useful life change. Quantify the impact on reported earnings.

### Question 3: Cash Flow Analysis
Compare cash flow to earnings. Calculate key quality metrics and identify concerns.

### Question 4: Related Party Analysis
Assess the related party transaction. What concerns does this raise?

### Question 5: Earnings Quality Conclusion
Quantify the likely manipulation and estimate "real" earnings.

---

## Analysis Framework

### Revenue Quality Assessment

**Revenue Growth vs. Receivables Growth:**

| Metric | 2024 | 2023 | 2022 |
|--------|------|------|------|
| Revenue Growth | 23% | 25% | 24% |
| A/R Growth | 56% | 57% | 44% |
| Ratio (A/R Growth / Rev Growth) | 2.4x | 2.3x | 1.8x |

**Red Flag #1:** Receivables growing 2-2.5x faster than revenue.

**Days Sales Outstanding:**
```
2024: (280/800) × 365 = 128 days
2023: (180/650) × 365 = 101 days
2022: (115/520) × 365 = 81 days
2021: (80/420) × 365 = 70 days

DSO increased 58 days in 3 years!
```

**Red Flag #2:** DSO nearly doubled—highly unusual for software.

**Unbilled Revenue:**
```
Growth:
2024: $45M (125% growth)
2023: $20M (150% growth)
2022: $8M (167% growth)

As % of Revenue:
2024: 5.6%
2023: 3.1%
2022: 1.5%
```

**Red Flag #3:** Unbilled revenue growing much faster than revenue—potential premature recognition.

**Deferred Revenue:**
```
2024: $140M (+4%)
2023: $135M (+5%)
2022: $128M (+16%)
2021: $110M

Deferred revenue growth slowing dramatically despite revenue acceleration
```

**Red Flag #4:** Healthy SaaS companies have deferred revenue growing WITH revenue. Flat deferred revenue + growing revenue could mean:
- Pulling forward revenue
- Shorter contract terms
- Less prepayment

### Expense Manipulation Analysis

**Capitalized Software Analysis:**

```
Capitalized Software Spending:
2024: $60M
2023: $40M
2022: $25M
2021: $15M

As % of R&D Expense:
2024: 60/100 = 60%
2023: 40/95 = 42%
2022: 25/88 = 28%
2021: 15/80 = 19%
```

**Red Flag #5:** Capitalization rate tripled in 3 years—shifting expenses to balance sheet.

**Impact of Capitalization:**
```
If 2024 used 2021 capitalization rate (19%):
Would capitalize: 100 × 19% = $19M
Actually capitalized: $60M
Extra income from over-capitalization: $41M
```

**Useful Life Change:**
```
Change from 3 to 5 years reduced amortization by $8M
This is disclosed but still inflates earnings
```

**Total Expense Manipulation:**
- Over-capitalization: ~$41M
- Useful life change: ~$8M
- Total: ~$49M pre-tax impact

### Cash Flow Quality

**OCF/Net Income:**
```
2024: 129/110 = 1.17x ← Looks OK at first
2023: 116/77 = 1.51x
2022: 106/52 = 2.04x
2021: 90/31 = 2.90x

Trend: Rapidly deteriorating despite looking acceptable
```

**Adjusting for Manipulation:**
```
Reported Net Income 2024: $110M
Add back stock-based comp (non-cash expense): Already in OCF

But consider:
- Capitalized software reduces operating expense, increases investing outflow
- Should be included in "true" operating cash flow

Adjusted OCF = OCF + Capitalized Software
2024: 129 + 60 = $189M

vs. Adjusted Net Income (removing capitalization benefit):
Net Income + Capitalization - Normal level
$110M + $60M - $19M = $151M (if expensing all R&D)

Ratio: 189/151 = 1.25x ← Still looks OK
```

**But Working Capital is Consuming Cash:**
```
Working Capital Use:
2024: $123M consumed (A/R, unbilled, prepaids - payables, accrued)
2023: $71M consumed
2022: $38M consumed

Growing consumption suggests revenue may not convert to cash
```

### Related Party Transaction

**Analysis:**
```
Related party revenue: $35M
Total revenue: $800M
Percent: 4.4%

CEO owns 15% of customer
Creates incentive for non-arm's-length transaction
```

**Concerns:**
1. Is pricing at market?
2. Is the customer real/creditworthy?
3. Are terms normal?
4. Is revenue being stuffed?

**Red Flag #6:** Material related-party revenue with CEO ownership interest.

### Quantifying Manipulation

**Estimated "Real" Earnings:**

| Item | Reported | Adjustment | Adjusted |
|------|----------|------------|----------|
| Net Income | $110M | | |
| Overcapitalization | | ($41M) | |
| Useful Life Change | | ($8M) | |
| Subtotal Expense Adjustments | | ($49M) | $61M |
| Less: Tax at 25% | | $12M | |
| **After-Tax Adjustment** | | **($37M)** | **$73M** |

**Related Party (if not arm's-length):**
- If 50% of related party revenue is questionable: ($17.5M × 0.75 = $13M after-tax)
- Further adjusted earnings: $60M

**"Real" Earnings Estimate:**
- Reported: $110M
- Adjusted: $60-73M (46-34% lower)

### Conclusion

**Summary of Red Flags:**

| # | Red Flag | Severity |
|---|----------|----------|
| 1 | A/R growing 2x+ revenue growth | High |
| 2 | DSO doubled in 3 years | High |
| 3 | Unbilled revenue accelerating | Medium |
| 4 | Deferred revenue stagnant | Medium |
| 5 | R&D capitalization rate tripled | High |
| 6 | Related party revenue | Medium |

**Estimated Earnings Quality:**
- Reported EPS: Significantly overstated
- "Real" earnings: 35-45% lower than reported
- Manipulation appears systematic and growing

**Investment Recommendation:**
Strong evidence supports the short position. Key catalysts:
1. Auditor scrutiny of receivables
2. Related-party transaction disclosure
3. Capitalization policy challenge
4. Cash flow deterioration becoming obvious

---

## Teaching Note

### Key Learning Points

1. **Multiple red flags together are definitive**: Any one could be explained; all together indicate manipulation

2. **Growth vs. cash is key**: Revenue can be fabricated; cash is harder to fake

3. **Policy changes signal manipulation**: Useful life extension, capitalization increases

4. **Trend analysis reveals problems**: Quality deteriorates over time

5. **Related parties enable manipulation**: Scrutinize all related-party transactions

### Famous Frauds with Similar Patterns

- **Enron**: Complex structures, related parties, cash flow gaps
- **WorldCom**: Capitalizing operating expenses
- **Autonomy**: Aggressive revenue recognition
- **Luckin Coffee**: Fabricated revenue, related parties

---

*Return to [Module 3 Overview](../README.md)*
