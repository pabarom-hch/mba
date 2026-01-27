# Case Study: Divisional Cost of Capital at Diversified Holdings

## Case Overview

| Element | Detail |
|---------|--------|
| Company | Diversified Holdings Corp. |
| Industry | Multi-Industry Conglomerate |
| Revenue | $8 billion |
| Situation | Capital misallocation across divisions |
| Challenge | Implement divisional hurdle rates |
| Time Limit | 45 minutes |

---

## Background

Diversified Holdings Corp. is a conglomerate operating in four distinct business segments: Technology Solutions, Consumer Products, Financial Services, and Healthcare Equipment. The company has historically used a single corporate hurdle rate (WACC) for all capital allocation decisions.

A recent McKinsey study suggested the company may be systematically misallocating capital—over-investing in high-risk divisions and under-investing in low-risk divisions. The CEO has asked you to develop divisional cost of capital estimates and recommend a new capital allocation framework.

---

## Exhibit 1: Company Overview

**Corporate Financials:**

| Metric | Value |
|--------|-------|
| Total Revenue | $8,000M |
| Total EBITDA | $1,200M |
| Market Capitalization | $12,000M |
| Total Debt | $3,000M |
| Enterprise Value | $15,000M |
| Corporate Beta | 1.05 |
| Corporate WACC | 9.0% |

**Division Breakdown:**

| Division | Revenue | EBITDA | Capital Employed |
|----------|---------|--------|-----------------|
| Technology Solutions | $2,500M | $450M | $3,000M |
| Consumer Products | $2,800M | $360M | $2,400M |
| Financial Services | $1,500M | $280M | $2,800M |
| Healthcare Equipment | $1,200M | $110M | $1,800M |
| **Total** | **$8,000M** | **$1,200M** | **$10,000M** |

---

## Exhibit 2: Pure-Play Comparable Companies

**Technology Solutions Comparables:**

| Company | Equity Beta | D/E | Revenue ($M) |
|---------|-------------|-----|--------------|
| TechCorp A | 1.45 | 0.20 | 3,200 |
| TechCorp B | 1.55 | 0.30 | 2,100 |
| TechCorp C | 1.35 | 0.15 | 4,500 |
| Average | 1.45 | 0.22 | |

**Consumer Products Comparables:**

| Company | Equity Beta | D/E | Revenue ($M) |
|---------|-------------|-----|--------------|
| Consumer A | 0.85 | 0.50 | 4,000 |
| Consumer B | 0.90 | 0.40 | 2,800 |
| Consumer C | 0.80 | 0.45 | 3,500 |
| Average | 0.85 | 0.45 | |

**Financial Services Comparables:**

| Company | Equity Beta | D/E | Revenue ($M) |
|---------|-------------|-----|--------------|
| FinServ A | 1.30 | 0.80 | 2,500 |
| FinServ B | 1.25 | 0.70 | 1,800 |
| FinServ C | 1.40 | 0.90 | 2,200 |
| Average | 1.32 | 0.80 | |

**Healthcare Equipment Comparables:**

| Company | Equity Beta | D/E | Revenue ($M) |
|---------|-------------|-----|--------------|
| Healthcare A | 1.05 | 0.25 | 1,500 |
| Healthcare B | 1.10 | 0.30 | 2,000 |
| Healthcare C | 0.95 | 0.20 | 1,200 |
| Average | 1.03 | 0.25 | |

---

## Exhibit 3: Market Parameters

| Parameter | Value |
|-----------|-------|
| Risk-free rate | 4.0% |
| Equity risk premium | 5.5% |
| Corporate tax rate | 25% |
| Corporate D/E | 0.25 |
| Corporate cost of debt | 5.5% |

---

## Exhibit 4: Recent Capital Allocation

**Last 3 Years Capital Expenditure ($M):**

| Division | 2022 | 2023 | 2024 | Total | % of Total |
|----------|------|------|------|-------|-----------|
| Technology | 180 | 220 | 280 | 680 | 42% |
| Consumer | 90 | 100 | 110 | 300 | 19% |
| Financial Services | 150 | 180 | 200 | 530 | 33% |
| Healthcare | 30 | 40 | 30 | 100 | 6% |
| **Total** | **450** | **540** | **620** | **1,610** | **100%** |

**Actual ROIC by Division:**

| Division | Capital | NOPAT | ROIC |
|----------|---------|-------|------|
| Technology | $3,000M | $300M | 10.0% |
| Consumer | $2,400M | $230M | 9.6% |
| Financial Services | $2,800M | $180M | 6.4% |
| Healthcare | $1,800M | $75M | 4.2% |

---

## Exhibit 5: Pending Investment Proposals

| Project | Division | Investment | Expected IRR | Using 9% WACC |
|---------|----------|------------|--------------|---------------|
| AI Platform | Technology | $150M | 14% | Accept |
| Brand Refresh | Consumer | $80M | 8% | Reject |
| Trading System | Financial Services | $100M | 10% | Accept |
| Diagnostic Device | Healthcare | $60M | 7% | Reject |
| Cloud Migration | Technology | $50M | 11% | Accept |
| Distribution Center | Consumer | $40M | 10% | Accept |

---

## Discussion Questions

### Question 1: Unlevered Beta Calculation
Calculate the unlevered beta for each of the four divisions using the pure-play comparables.

### Question 2: Divisional WACC
Calculate the cost of capital for each division, assuming each uses the corporate capital structure (D/E = 0.25).

### Question 3: Capital Allocation Assessment
Using divisional WACCs, re-evaluate the pending investment proposals. Which decisions change?

### Question 4: Historical Analysis
What does the ROIC vs. WACC analysis tell us about historical capital allocation?

### Question 5: Implementation Recommendation
How would you recommend implementing divisional cost of capital at Diversified Holdings?

---

## Analysis Framework

### Unlevered Beta Calculation

**Technology Solutions:**
```
Comparables average βL = 1.45, D/E = 0.22

βU = βL / [1 + (1-T) × D/E]
βU = 1.45 / [1 + 0.75 × 0.22]
βU = 1.45 / 1.165
βU = 1.24
```

**Consumer Products:**
```
Comparables average βL = 0.85, D/E = 0.45

βU = 0.85 / [1 + 0.75 × 0.45]
βU = 0.85 / 1.34
βU = 0.63
```

**Financial Services:**
```
Comparables average βL = 1.32, D/E = 0.80

βU = 1.32 / [1 + 0.75 × 0.80]
βU = 1.32 / 1.60
βU = 0.83
```

**Healthcare Equipment:**
```
Comparables average βL = 1.03, D/E = 0.25

βU = 1.03 / [1 + 0.75 × 0.25]
βU = 1.03 / 1.19
βU = 0.87
```

**Summary of Unlevered Betas:**

| Division | βU |
|----------|-----|
| Technology | 1.24 |
| Consumer Products | 0.63 |
| Financial Services | 0.83 |
| Healthcare Equipment | 0.87 |

### Divisional WACC Calculation

**Step 1: Relever to Corporate D/E (0.25)**

```
Technology:
βL = 1.24 × [1 + 0.75 × 0.25] = 1.24 × 1.19 = 1.48

Consumer:
βL = 0.63 × [1 + 0.75 × 0.25] = 0.63 × 1.19 = 0.75

Financial Services:
βL = 0.83 × [1 + 0.75 × 0.25] = 0.83 × 1.19 = 0.99

Healthcare:
βL = 0.87 × [1 + 0.75 × 0.25] = 0.87 × 1.19 = 1.04
```

**Step 2: Calculate Cost of Equity (CAPM)**

```
Technology:
re = 4.0% + 1.48 × 5.5% = 4.0% + 8.14% = 12.14%

Consumer:
re = 4.0% + 0.75 × 5.5% = 4.0% + 4.13% = 8.13%

Financial Services:
re = 4.0% + 0.99 × 5.5% = 4.0% + 5.45% = 9.45%

Healthcare:
re = 4.0% + 1.04 × 5.5% = 4.0% + 5.72% = 9.72%
```

**Step 3: Calculate Divisional WACC**

Using corporate D/E = 0.25:
- D/V = 0.25 / 1.25 = 20%
- E/V = 1.00 / 1.25 = 80%
- After-tax rd = 5.5% × 0.75 = 4.13%

```
Technology:
WACC = (80% × 12.14%) + (20% × 4.13%) = 9.71% + 0.83% = 10.54%

Consumer:
WACC = (80% × 8.13%) + (20% × 4.13%) = 6.50% + 0.83% = 7.33%

Financial Services:
WACC = (80% × 9.45%) + (20% × 4.13%) = 7.56% + 0.83% = 8.39%

Healthcare:
WACC = (80% × 9.72%) + (20% × 4.13%) = 7.78% + 0.83% = 8.61%
```

**Divisional WACC Summary:**

| Division | βU | βL | re | WACC |
|----------|-----|-----|-----|------|
| Technology | 1.24 | 1.48 | 12.1% | 10.5% |
| Consumer Products | 0.63 | 0.75 | 8.1% | 7.3% |
| Financial Services | 0.83 | 0.99 | 9.5% | 8.4% |
| Healthcare Equipment | 0.87 | 1.04 | 9.7% | 8.6% |
| **Corporate** | | 1.05 | 9.8% | 9.0% |

### Re-Evaluation of Investment Proposals

| Project | Division | IRR | Corp WACC 9% | Div WACC | New Decision |
|---------|----------|-----|--------------|----------|--------------|
| AI Platform | Tech | 14% | Accept | 10.5% | **Accept** |
| Brand Refresh | Consumer | 8% | Reject | 7.3% | **Accept** ✓ |
| Trading System | FinServ | 10% | Accept | 8.4% | **Accept** |
| Diagnostic Device | Healthcare | 7% | Reject | 8.6% | **Reject** |
| Cloud Migration | Tech | 11% | Accept | 10.5% | **Accept** |
| Distribution Center | Consumer | 10% | Accept | 7.3% | **Accept** |

**Key Change:** Brand Refresh (Consumer Products) should be **accepted**. Using corporate WACC, a valuable consumer project was being rejected.

### Historical Capital Allocation Analysis

**ROIC vs. WACC Comparison:**

| Division | ROIC | Div WACC | Spread | Value Creating? |
|----------|------|----------|--------|-----------------|
| Technology | 10.0% | 10.5% | -0.5% | **No** (marginally) |
| Consumer | 9.6% | 7.3% | +2.3% | **Yes** |
| Financial Services | 6.4% | 8.4% | -2.0% | **No** |
| Healthcare | 4.2% | 8.6% | -4.4% | **No** |

**Capital Allocation vs. Value Creation:**

| Division | % of CapEx | Value Creating? | Misallocation |
|----------|-----------|-----------------|---------------|
| Technology | 42% | Marginal | Over-invested |
| Consumer | 19% | Yes | **Under-invested** |
| Financial Services | 33% | No | **Over-invested** |
| Healthcare | 6% | No | Appropriately limited |

**Key Finding:** Consumer Products is the only division clearly creating value, yet receives only 19% of capital. Financial Services is destroying value but receives 33% of capital.

### Implementation Recommendations

**1. Adopt Divisional WACCs:**
```
Recommended Hurdle Rates:
- Technology: 11% (WACC + buffer)
- Consumer Products: 8%
- Financial Services: 9%
- Healthcare Equipment: 9%
```

**2. Governance Framework:**
- Annual divisional WACC review
- Pure-play universe updated quarterly
- Capital allocation linked to value creation
- Performance measured against divisional hurdles

**3. Capital Reallocation:**
- Shift CapEx toward Consumer Products
- Reduce Financial Services investment
- Require higher returns from Technology
- Consider strategic alternatives for Healthcare

**4. Transition Period:**
- Year 1: Introduce divisional rates with flexibility
- Year 2: Full implementation
- Year 3: Link to management incentives

**5. Communication:**
- Educate divisional managers
- Explain rationale and methodology
- Create transparency on performance vs. hurdle

---

## Teaching Note

### Key Learning Points

1. **Single WACC distorts allocation** - Different risks need different rates
2. **Pure-play beta method works** - For divisions without separate trading
3. **ROIC vs. WACC is key metric** - Shows value creation/destruction
4. **Implementation matters** - Right answer needs right process
5. **Conglomerate discount explained** - Misallocation destroys value

### Discussion Extensions

- Should each division have different capital structure?
- What if pure-play comparables are imperfect?
- How would you handle a division with no good comparables?
- Should divisional WACCs be used for performance bonuses?

### Common Student Mistakes

- Using levered betas directly without unlevering
- Forgetting to relever to appropriate capital structure
- Using divisional capital structures instead of corporate
- Not connecting WACC analysis to strategic implications

---

*Return to [Module 5 Overview](../README.md)*
