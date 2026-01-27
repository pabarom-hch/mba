# Equity Accounting

## Learning Objectives

- Understand the components of shareholders' equity
- Master stock issuance, repurchase, and dividend accounting
- Analyze equity quality and book value
- Interpret stock-based compensation
- Apply equity analysis to valuation decisions

---

## Introduction

Shareholders' equity represents the residual interest—what's left after liabilities. But equity is more than just a number; it tells the story of how the company has been funded and how profitable it has been. For CEOs, understanding equity helps with capital structure decisions, compensation design, and investor communication.

---

## Core Concepts

### Components of Shareholders' Equity

```
Shareholders' Equity:
  Common Stock (Par Value × Shares Issued)       $XX
  Additional Paid-in Capital (APIC)              $XX
  Retained Earnings                              $XX
  Treasury Stock (cost of repurchased shares)   ($XX)
  Accumulated Other Comprehensive Income (AOCI)  $XX
  ─────────────────────────────────────────────────
  Total Shareholders' Equity                     $XX
```

### Common Stock

**Par Value:**
- Arbitrary nominal value (often $0.01 or $1)
- Legal significance only
- Common Stock = Par × Shares Issued

**Additional Paid-in Capital (APIC):**
- Amount received above par value
- APIC = Proceeds - Par Value

**Example: Stock Issuance**
```
Issue 1,000,000 shares at $25/share
Par value: $1/share

Cash received: $25,000,000
Common Stock (Par): 1,000,000 × $1 = $1,000,000
APIC: $25,000,000 - $1,000,000 = $24,000,000

Journal Entry:
Debit: Cash                     $25,000,000
Credit: Common Stock             $1,000,000
Credit: APIC                    $24,000,000
```

### Retained Earnings

**Definition:** Cumulative net income minus cumulative dividends.

**Roll-Forward:**
```
Beginning Retained Earnings       $XXX
+ Net Income                       XX
- Dividends Declared              (XX)
+/- Prior Period Adjustments       XX
= Ending Retained Earnings       $XXX
```

**Dividend Types:**

| Type | Impact on Retained Earnings |
|------|----------------------------|
| Cash dividend | Decreases RE when declared |
| Stock dividend | Decreases RE (transfers to stock/APIC) |
| Stock split | No change in RE (just more shares) |

### Treasury Stock

**Definition:** Company's own stock that has been repurchased.

**Cost Method (Most Common):**
```
Repurchase Entry:
Debit: Treasury Stock (at cost)   $XX
Credit: Cash                      $XX

Reissue Entry (if price > cost):
Debit: Cash                       $XX
Credit: Treasury Stock            $XX
Credit: APIC                      $XX
```

**Impact:**
- Reduces shareholders' equity
- Reduces shares outstanding
- Shown as negative on balance sheet

### Accumulated Other Comprehensive Income (AOCI)

**Components:**
- Unrealized gains/losses on available-for-sale securities
- Foreign currency translation adjustments
- Pension adjustments
- Cash flow hedge gains/losses

**Comprehensive Income:**
```
Net Income                                  $XX
+ Other Comprehensive Income                 XX
  - Foreign currency translation             $X
  - Unrealized investment gains              $X
  - Pension adjustments                      $X
= Comprehensive Income                      $XX
```

---

## Stock-Based Compensation

### Overview

**Types:**
- Stock options
- Restricted stock units (RSUs)
- Performance shares
- Employee stock purchase plans (ESPP)

**Accounting Treatment:**
- Expense recognized over vesting period
- Based on grant-date fair value
- Non-cash expense (add back for cash flow)

### Stock Options

**Fair Value Methods:**
- Black-Scholes model (most common)
- Binomial models

**Example:**
```
Grant 100,000 options
Fair value per option: $10
Vesting period: 4 years

Annual Expense: ($10 × 100,000) / 4 = $250,000

Journal Entry (annual):
Debit: Stock Compensation Expense    $250,000
Credit: APIC                         $250,000
```

### Restricted Stock Units (RSUs)

**Simpler Valuation:**
- Fair value = Stock price at grant date
- No Black-Scholes needed

**Example:**
```
Grant 50,000 RSUs
Stock price at grant: $40
Vesting: 3 years

Annual Expense: ($40 × 50,000) / 3 = $667,000
```

---

## Equity Analysis

### Key Metrics

**Book Value Per Share:**
```
BVPS = Shareholders' Equity / Shares Outstanding
```

**Price-to-Book Ratio:**
```
P/B = Stock Price / Book Value Per Share
```

**Return on Equity:**
```
ROE = Net Income / Average Shareholders' Equity
```

**Quality of Equity:**
- High retained earnings = Profitable history
- High APIC, low RE = Raised money, not profitable
- Negative RE = Accumulated losses
- Large treasury stock = Share buybacks

### Book Value Analysis

| Situation | Interpretation |
|-----------|---------------|
| P/B < 1 | Stock trades below book value (cheap or distressed) |
| P/B = 1-2 | Near book value (typical for banks, industrials) |
| P/B > 3 | Premium valuation (growth, intangible value) |

**Book Value Limitations:**
- Based on historical cost
- Doesn't capture intangible value
- Can be manipulated through accounting choices

---

## CEO Application

### Capital Allocation Decisions

**Options for Excess Cash:**

| Option | Impact on Equity |
|--------|-----------------|
| Reinvest in business | No direct impact (becomes assets) |
| Pay dividends | Reduces retained earnings |
| Repurchase stock | Creates treasury stock |
| Pay down debt | No equity impact |
| Acquire companies | Goodwill may be added |

### Dividend Policy

**Considerations:**
- Tax implications for shareholders
- Signal to market
- Consistency expectations
- Alternative uses of cash
- Shareholder preferences

**Dividend Metrics:**
```
Dividend Yield = Annual Dividend / Stock Price

Payout Ratio = Dividends / Net Income

Dividend Coverage = EPS / DPS
```

### Share Repurchases

**Advantages:**
- Tax-efficient (capital gains vs. ordinary income)
- Flexible (can adjust based on conditions)
- Increases EPS (fewer shares)
- Signals undervaluation

**Disadvantages:**
- May indicate lack of growth opportunities
- Can be done at poor prices
- Benefits may go to executives (EPS-based comp)

**Repurchase Metrics:**
```
Buyback Yield = $ Repurchased / Market Cap

Shares Retired = Shares Bought / Beginning Shares
```

### Stock Compensation

**CEO Considerations:**
- Alignment with shareholder interests
- Dilution to existing shareholders
- Expense impact on earnings
- Cash flow neutral
- Retention and motivation

---

## Worked Example

### Equity Analysis: TechCo

**Shareholders' Equity ($ millions):**

| Component | 2024 | 2023 |
|-----------|------|------|
| Common Stock ($0.01 par) | $0.5 | $0.5 |
| APIC | $800 | $750 |
| Retained Earnings | $400 | $320 |
| Treasury Stock | ($200) | ($150) |
| AOCI | ($30) | ($20) |
| **Total Equity** | **$970.5** | **$900.5** |

**Additional Data:**
- Net Income 2024: $150M
- Dividends 2024: $30M
- Stock Issued: $50M (for acquisitions)
- Stock Repurchased: $50M
- Shares Outstanding: 50M
- Stock Price: $60

**Analysis:**

**Retained Earnings Roll-Forward:**
```
Beginning RE: $320M
+ Net Income: $150M
- Dividends: ($30M)
= Expected Ending: $440M
Actual: $400M
Difference: ($40M) ← Other adjustments?
```

**Equity Changes:**
- APIC increased $50M (new stock issued)
- Treasury increased $50M (buybacks)
- AOCI decreased $10M (unrealized losses)

**Valuation Metrics:**
```
Book Value Per Share: $970.5M / 50M = $19.41

Price-to-Book: $60 / $19.41 = 3.1x

ROE: $150M / [($970.5M + $900.5M)/2] = 16.0%
```

**Assessment:**
- P/B of 3.1x suggests market sees value beyond book value
- ROE of 16% is healthy
- Company both issuing and buying back stock (M&A + returns)
- Growing retained earnings shows profitability

---

## Common Mistakes

### 1. Confusing Par Value with Stock Value
**Mistake:** Thinking par value means anything economically.
**Reality:** Par is arbitrary; APIC is where the value goes.

### 2. Ignoring Stock Compensation
**Mistake:** Viewing stock comp as "free" compensation.
**Reality:** It's real cost; dilutes existing shareholders.

### 3. Misunderstanding Treasury Stock
**Mistake:** Treating treasury stock as an asset.
**Reality:** It's a reduction of equity (contra-equity).

### 4. Book Value as True Value
**Mistake:** Using book value for valuation decisions.
**Reality:** Book value often understates or overstates true value.

### 5. Dividend Focus Only
**Mistake:** Judging capital return by dividends alone.
**Reality:** Buybacks are also capital return; consider total yield.

---

## Key Takeaways

1. **Equity is residual** - What's left after liabilities
2. **Retained earnings shows history** - Cumulative profits minus dividends
3. **Treasury stock reduces equity** - Shows as negative
4. **AOCI captures unrealized items** - Bypasses income statement
5. **Stock compensation is real expense** - Creates dilution
6. **Book value has limitations** - Historical cost basis
7. **Capital return includes buybacks** - Not just dividends

---

## Practice Problems

### Problem 1: Stock Issuance
Company issues 500,000 shares at $50 per share. Par value is $1.
Show the journal entry and calculate the impact on each equity component.

### Problem 2: Treasury Stock
Company has 10M shares outstanding at $40 average book value ($400M equity).
Repurchases 1M shares at $60 per share.
What is new equity? New book value per share?

### Problem 3: Stock Compensation
Grant 200,000 RSUs when stock price is $25. Vesting over 4 years.
What is annual expense? What's the total dilution if stock price at exercise is $40?

---

*Next: [Financial Statement Analysis](11-financial-analysis.md)*
