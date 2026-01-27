# Cost of Debt

## Learning Objectives

- Calculate the cost of debt using different methods
- Understand the tax advantage of debt
- Apply credit spreads to estimate cost of debt
- Recognize factors that affect a company's borrowing cost
- Handle complex debt structures

---

## Introduction

Cost of debt is typically the easiest cost of capital component to estimate because it's directly observable in markets. When a company borrows money, the interest rate it pays represents its cost of debt. But there are nuances—especially the tax shield—that make this seemingly simple concept important to master.

---

## Core Concepts

### Pre-Tax vs. After-Tax Cost

**The Tax Shield:**
Interest expense is tax-deductible, reducing the effective cost of debt.

```
After-Tax Cost of Debt = rd × (1 - T)

Where:
rd = Pre-tax cost of debt
T = Marginal tax rate
```

**Example:**
```
Pre-tax cost of debt: 6%
Tax rate: 25%

After-tax cost = 6% × (1 - 0.25) = 4.5%

The government "pays" 25% of your interest cost.
```

### Methods to Estimate Cost of Debt

**1. Yield to Maturity (Preferred)**
```
Use YTM on company's outstanding bonds

Example:
Company has 10-year bonds trading at $950 (par = $1,000)
Coupon: 5% annual
YTM calculation: ~5.7%

Cost of debt = 5.7%
```

**2. Credit Spread Approach**
```
Cost of Debt = Risk-Free Rate + Credit Spread

Credit spread depends on:
- Company's credit rating
- Current market conditions
- Bond maturity
```

**3. Recent Borrowing Rate**
```
What rate did the company recently pay?
Advantage: Reflects actual market terms
Disadvantage: May be stale or for specific purpose
```

### Credit Ratings and Spreads

| Rating | Spread (bps) | Typical rd |
|--------|--------------|-----------|
| AAA | 50-75 | 4.5-4.8% |
| AA | 75-100 | 4.8-5.0% |
| A | 100-150 | 5.0-5.5% |
| BBB | 150-250 | 5.5-6.5% |
| BB | 250-400 | 6.5-8.0% |
| B | 400-600 | 8.0-10.0% |
| CCC | 600-1000 | 10.0-14.0% |

*(Spreads vary with market conditions; based on 10-year Treasuries)*

### Factors Affecting Cost of Debt

| Factor | Lower rd | Higher rd |
|--------|---------|-----------|
| Credit rating | Higher | Lower |
| Debt maturity | Shorter | Longer |
| Collateral | Secured | Unsecured |
| Covenants | Tighter | Looser |
| Interest rates | Lower environment | Higher environment |
| Industry risk | Stable | Volatile |

---

## Complex Debt Structures

### Multiple Debt Tranches

**Weighted Average:**
```
rd = Σ (Weighti × ri)

Example:
Senior secured: $200M at 5%
Senior unsecured: $300M at 6%
Subordinated: $100M at 8%

Weighted rd = (200×5% + 300×6% + 100×8%) / 600
           = (10 + 18 + 8) / 600
           = 6.0%
```

### Floating Rate Debt

```
For floating rate debt, use:
- Current floating rate, OR
- Swap equivalent fixed rate

Example:
Floating at SOFR + 150 bps
Current SOFR: 4.5%
Current rd = 4.5% + 1.5% = 6.0%
```

### Convertible Debt

```
Convertible bonds have lower coupons due to equity option.
For WACC purposes:
- Use straight debt cost (without conversion option)
- Or decompose into debt + equity components
```

### Operating Leases

```
Under IFRS 16 / ASC 842:
- Leases are capitalized (on balance sheet)
- Implicit interest rate is cost of "lease debt"
- Include in total debt for WACC
```

---

## Practical Considerations

### Which Rate to Use?

**Preferred Order:**
1. YTM on actively traded long-term bonds
2. New borrowing rate (recent issuance)
3. Credit spread approach
4. Bank loan rate (if no bonds)

### Term Structure Matching

```
Match debt cost to project horizon:

Short-term project (1-2 years):
Use short-term debt cost

Long-term project (10+ years):
Use long-term debt cost

Most WACC calculations use long-term cost.
```

### Private Companies

For companies without traded debt:
```
1. Estimate synthetic credit rating
2. Apply appropriate spread to risk-free rate
3. Use comparable public company spreads
```

---

## CEO Application

### Managing Cost of Debt

| Strategy | Impact |
|----------|--------|
| Improve credit metrics | Lower spreads |
| Refinance when rates fall | Lower interest cost |
| Diversify funding sources | Better terms |
| Maintain bank relationships | Access in tough times |
| Manage maturity profile | Reduce refinancing risk |

### Questions to Ask Your CFO

1. "What's our weighted average cost of debt?"
2. "How do we compare to peers?"
3. "When is our next refinancing?"
4. "What's our credit rating trajectory?"
5. "Are there opportunities to lower cost?"

---

## Worked Example

### Comprehensive Cost of Debt Calculation

**Company Profile:**
- Credit rating: BBB
- Outstanding bonds: $500M
- Bank term loan: $200M
- Tax rate: 25%

**Bond Details:**
- Par: $1,000
- Current price: $980
- Coupon: 5.5% (semi-annual)
- Maturity: 8 years

**Term Loan:**
- Rate: SOFR + 175 bps
- Current SOFR: 4.25%

**Step 1: Calculate Bond YTM**
```
Price = Σ [Coupon / (1+r)^t] + [Par / (1+r)^n]
$980 = Σ [$27.50 / (1+r)^t] + [$1,000 / (1+r)^16]

Solving: YTM ≈ 5.8%
```

**Step 2: Calculate Term Loan Cost**
```
rd = 4.25% + 1.75% = 6.0%
```

**Step 3: Calculate Weighted Pre-Tax Cost**
```
Total debt: $700M
Bond weight: 500/700 = 71.4%
Loan weight: 200/700 = 28.6%

Weighted rd = 71.4% × 5.8% + 28.6% × 6.0%
            = 4.14% + 1.72%
            = 5.86%
```

**Step 4: Calculate After-Tax Cost**
```
After-tax rd = 5.86% × (1 - 0.25) = 4.40%
```

---

## Common Mistakes

### 1. Using Coupon Rate Instead of YTM
**Mistake:** "Our bonds pay 5%, so cost of debt is 5%."
**Reality:** If bonds trade at a premium/discount, YTM differs from coupon.

### 2. Forgetting the Tax Shield
**Mistake:** Using pre-tax cost of debt in WACC.
**Reality:** After-tax cost is what matters for WACC.

### 3. Using Book Value of Debt
**Mistake:** Weighting by face value of debt.
**Reality:** Use market value (though often close to book).

### 4. Ignoring All Debt Components
**Mistake:** Only looking at bonds, ignoring leases, bank debt.
**Reality:** Include all interest-bearing obligations.

### 5. Using Historical Rates
**Mistake:** "We borrowed at 4% three years ago."
**Reality:** Use current market rates for new/marginal cost.

---

## Key Takeaways

1. **After-tax cost matters** - Interest is tax-deductible
2. **YTM is preferred** - Reflects current market conditions
3. **Credit rating drives spreads** - Better rating = lower cost
4. **Use market values** - For weighting debt in WACC
5. **Include all debt** - Bonds, loans, leases, etc.
6. **Match term to project** - Long-term rates for long-term projects
7. **Monitor and manage** - Cost of debt is partially controllable

---

## Practice Problems

### Problem 1: After-Tax Cost
Company has bonds at 7% YTM and tax rate of 30%. What is the after-tax cost of debt?

### Problem 2: Weighted Cost
| Debt Type | Amount | Rate |
|-----------|--------|------|
| Senior bonds | $400M | 5.5% |
| Subordinated | $200M | 7.5% |
| Bank debt | $100M | 6.0% |

Calculate weighted pre-tax and after-tax cost of debt (tax rate 25%).

### Problem 3: Synthetic Rating
A private company has:
- Interest coverage: 4x
- Debt/EBITDA: 2.5x
- Debt/Capital: 40%

This suggests a BBB rating. If the 10-year Treasury is 4%, what cost of debt would you estimate?

---

*Next: [Cost of Equity - CAPM](02-cost-of-equity-capm.md)*
