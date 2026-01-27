# Capital Gains Strategies

## Learning Objectives

- Distinguish between short-term and long-term capital gains taxation
- Implement tax-loss harvesting effectively
- Navigate wash sale rules and substantially identical securities
- Apply specific identification for optimal tax lots
- Plan for Net Investment Income Tax (NIIT) implications

---

## Introduction

Capital gains taxation offers significant planning opportunities because of the preferential rates on long-term gains and the flexibility in timing realization. Strategic management of capital gains and losses can add 0.5-1% or more to after-tax investment returns annually. This "tax alpha" compounds significantly over an investment lifetime.

---

## Capital Gains Taxation

### Short-Term vs. Long-Term

```
HOLDING PERIOD:
─────────────────────────────────────────────────────
Short-term: ≤ 1 year (day acquired to day sold)
Long-term: > 1 year

Counting rule: "Day after" counting
Purchased January 15, 2024
Short-term through January 15, 2025
Long-term starting January 16, 2025

TAX RATES:
─────────────────────────────────────────────────────
SHORT-TERM: Taxed as ordinary income (10-37%)

LONG-TERM (2024 rates):
Filing Status     0%           15%          20%
─────────────────────────────────────────────────────
Single           ≤$47,025     $47,026-     >$518,900
                              $518,900
MFJ              ≤$94,050     $94,051-     >$583,750
                              $583,750
HoH              ≤$63,000     $63,001-     >$551,350
                              $551,350

SPECIAL RATES:
─────────────────────────────────────────────────────
Collectibles (art, coins, etc.): Max 28%
Section 1250 (depreciation recapture): Max 25%
Qualified Small Business Stock (QSBS): Potential 100% exclusion
```

### Net Investment Income Tax (NIIT)

```
THE 3.8% SURTAX:
─────────────────────────────────────────────────────
Applies to lesser of:
1. Net investment income, OR
2. MAGI exceeding threshold

Thresholds:
Single: $200,000
MFJ: $250,000
MFS: $125,000

Net Investment Income includes:
- Interest
- Dividends
- Capital gains
- Rental income (passive)
- Royalties
- Passive business income

Does NOT include:
- Wages/self-employment income
- Active business income
- Tax-exempt interest
- Retirement account distributions

EFFECTIVE RATES WITH NIIT:
─────────────────────────────────────────────────────
Short-term gains: Up to 37% + 3.8% = 40.8%
Long-term gains: Up to 20% + 3.8% = 23.8%
```

---

## Tax-Loss Harvesting

### The Strategy

```
CONCEPT:
─────────────────────────────────────────────────────
Sell investments at a loss to:
1. Offset capital gains
2. Reduce taxable income (up to $3,000/year)
3. Carry forward excess losses
4. Maintain market exposure with similar investment

LOSS HIERARCHY:
─────────────────────────────────────────────────────
Step 1: Short-term losses offset short-term gains
Step 2: Long-term losses offset long-term gains
Step 3: Net ST loss offsets net LT gain (or vice versa)
Step 4: Net loss offsets $3,000 ordinary income
Step 5: Remaining loss carries forward indefinitely

VALUE OF LOSSES:
─────────────────────────────────────────────────────
Offset ST gain: Saves up to 40.8% (with NIIT)
Offset LT gain: Saves up to 23.8%
Offset income: Saves at marginal rate
Carry forward: Present value diminishes over time
```

### Implementation Process

```
STEP 1: Identify Loss Candidates
─────────────────────────────────────────────────────
Review portfolio for unrealized losses
Consider:
- Loss magnitude
- Holding period (ST vs. LT)
- Basis (specific lots)
- Original investment thesis

STEP 2: Consider Wash Sale Implications
─────────────────────────────────────────────────────
Cannot repurchase "substantially identical" security
within 30 days before or after sale
(61-day window total)

STEP 3: Select Replacement Investment
─────────────────────────────────────────────────────
Maintain market exposure with different security
Options:
- Different company in same sector
- Different index tracking similar market
- ETF vs. mutual fund (or vice versa)
- Wait 31 days and repurchase same security

STEP 4: Execute Trades
─────────────────────────────────────────────────────
Sell loss position
Immediately buy replacement (if using substitute)
Document for tax records

STEP 5: Track Basis
─────────────────────────────────────────────────────
New holding period starts for replacement
Original basis "lost" (disallowed loss)
Recovery when sell replacement
```

### Wash Sale Rules

```
THE RULE:
─────────────────────────────────────────────────────
Loss DISALLOWED if you buy "substantially identical"
security within 30 days before or after the sale

30 days before ← SALE → 30 days after
└─────────── 61-day window ───────────┘

Applies to:
- Same security
- Option on same security
- Contract to acquire same security

SUBSTANTIALLY IDENTICAL:
─────────────────────────────────────────────────────
Same security: Definitely identical
Different share class: Usually identical
Options on same stock: Identical
Mutual fund vs. ETF same index: Gray area (generally OK)
Different index funds: Generally NOT identical

Safe Replacements:
Sell: S&P 500 ETF (SPY)
Buy: Total Stock Market ETF (VTI) ✓

Sell: Vanguard Growth Fund
Buy: iShares Growth ETF ✓ (probably)

Sell: Apple stock
Buy: Technology ETF ✓ (different basket)

Risky:
Sell: Vanguard S&P 500 (VOO)
Buy: iShares S&P 500 (IVV) ✗ (same index)

CONSEQUENCES IF TRIGGERED:
─────────────────────────────────────────────────────
Loss disallowed (not deductible)
BUT: Loss added to basis of replacement shares
Holding period of original shares tacks on
Loss recovered when sell replacement
(Deferral, not permanent loss of benefit)
```

### Harvesting Example

```
PORTFOLIO BEFORE HARVEST:
─────────────────────────────────────────────────────
Security          Shares    Basis      Value    Gain/Loss
─────────────────────────────────────────────────────
SPY (S&P 500)     200      $80,000    $100,000  +$20,000
AAPL (Apple)      500      $50,000    $40,000   -$10,000
AMZN (Amazon)     100      $35,000    $30,000   -$5,000
VTI (Total Mkt)   300      $45,000    $60,000   +$15,000

Unrealized gains: +$35,000
Unrealized losses: -$15,000
Net: +$20,000

SCENARIO: Client realizes $40,000 LTCG elsewhere

Without Harvesting:
LTCG: $40,000
Tax (15%): $6,000

With Harvesting:
Sell AAPL: Realize -$10,000 loss
Sell AMZN: Realize -$5,000 loss
Buy replacement ETFs (QQQ, tech sector fund)

Net LTCG: $40,000 - $15,000 = $25,000
Tax (15%): $3,750
Savings: $2,250

Still maintain market exposure through replacements
```

---

## Specific Identification

### Choosing Tax Lots

```
TAX LOT METHODS:
─────────────────────────────────────────────────────
FIFO (First-In, First-Out):
Default method if no election
Oldest shares sold first
May not be optimal

LIFO (Last-In, First-Out):
Newest shares sold first
Not available for mutual funds

Specific Identification:
You choose which lots to sell
Maximum flexibility
Must identify BEFORE or at time of sale
Broker must confirm in writing

Average Cost:
Only for mutual funds
Averages all share costs
Simpler but less flexible

OPTIMAL STRATEGY:
─────────────────────────────────────────────────────
For gains: Sell highest-basis lots (minimize gain)
For losses: Sell lowest-basis lots (maximize loss)
Consider holding period: ST vs. LT implications
```

### Specific ID Example

```
APPLE STOCK PURCHASES:
─────────────────────────────────────────────────────
Lot 1: 100 shares @ $100, Jan 2022 (basis $10,000)
Lot 2: 100 shares @ $150, Jun 2022 (basis $15,000)
Lot 3: 100 shares @ $180, Jan 2023 (basis $18,000)
Lot 4: 100 shares @ $130, Aug 2024 (basis $13,000)

Current price: $175/share
Total shares: 400
Total basis: $56,000
Total value: $70,000
Total gain: $14,000

SCENARIO: Sell 100 shares

Using FIFO (default):
Sell Lot 1: $17,500 - $10,000 = $7,500 LTCG
Tax (15%): $1,125

Using Specific ID (optimal for gain):
Sell Lot 3: $17,500 - $18,000 = -$500 LTCL
Tax: $0 (plus $500 loss to use elsewhere)
Difference: $1,125 + $75 = $1,200 better

Using Specific ID (maximize loss):
Sell Lot 4: $17,500 - $13,000 = $4,500 STCG
Tax (32%): $1,440
WORSE because ST rate higher

Optimal choice: Lot 3 (highest basis, long-term)
```

---

## Gain Deferral Strategies

### Installment Sales

```
CONCEPT:
─────────────────────────────────────────────────────
Spread gain recognition over payment period
Pay tax as payments received
Interest element taxed separately

REQUIREMENTS:
- At least one payment after sale year
- Cannot use for publicly traded securities
- Cannot use for dealer inventory

CALCULATION:
─────────────────────────────────────────────────────
Gross profit ratio = Gain / Contract price

Each payment:
- Return of basis: Not taxed
- Gain portion: Taxable
- Interest: Ordinary income

Example:
Selling price: $500,000
Basis: $200,000
Gain: $300,000
Gross profit ratio: 60%

Terms: $100,000 down + $100,000/year for 4 years

Each $100,000 payment:
- $40,000 return of basis
- $60,000 capital gain
- Plus interest on balance

Benefit: Spread $300,000 gain over 5 years
         May stay in lower bracket each year
```

### Opportunity Zone Investments

```
QUALIFIED OPPORTUNITY ZONES (QOZ):
─────────────────────────────────────────────────────
Purpose: Economic development in designated areas
Benefit: Defer and potentially reduce capital gains

How it works:
1. Realize capital gain from any source
2. Within 180 days, invest gain in Qualified Opportunity Fund
3. Defer recognition of original gain until:
   - Sale of QOF investment, or
   - December 31, 2026 (statutory date)
4. If hold QOF 10+ years:
   - NEW gains on QOF investment are tax-free

Example:
2024: Realize $1,000,000 gain from stock sale
2024: Invest $1,000,000 in Opportunity Zone Fund
2026: Pay tax on original $1,000,000 gain
      (deferred 2 years)
2034: Sell OZ investment for $2,500,000
      Gain on OZ investment: $1,500,000
      TAX ON OZ GAIN: $0 (held 10+ years)

Considerations:
- Must invest in designated census tracts
- QOF must deploy 90% in qualified property
- Real estate projects common
- Higher risk than diversified investments
```

### 1031 Like-Kind Exchange

```
REAL ESTATE ONLY (post-2017):
─────────────────────────────────────────────────────
Exchange investment real estate for investment real estate
Defer all capital gains (and depreciation recapture)

Requirements:
- Must be "like-kind" (real property for real property)
- Must identify replacement within 45 days
- Must close within 180 days
- Use qualified intermediary
- Cannot receive "boot" (cash or unlike property)

Example:
Sell: Apartment building for $2,000,000
Basis: $500,000
Gain: $1,500,000

Regular sale tax (20% + 3.8%): $357,000

1031 Exchange:
Buy: Office building for $2,200,000
Tax: $0 (deferred)
New basis: $500,000 + $200,000 new investment = $700,000

Can continue exchanging indefinitely
At death: Stepped-up basis = no tax ever

BOOT:
─────────────────────────────────────────────────────
If receive cash or other property (boot):
Must recognize gain to extent of boot

Example:
Sell: $2,000,000
Buy: $1,700,000 + receive $300,000 cash
Boot: $300,000
Taxable gain: $300,000 (even though total gain was $1,500,000)
```

---

## Charitable Giving of Appreciated Assets

### Donating Stock vs. Cash

```
COMPARISON:
─────────────────────────────────────────────────────
Asset: Stock worth $100,000, basis $20,000, held 5 years
Marginal rate: 35% ordinary, 20% LTCG

OPTION A: Sell stock, donate cash
Sell stock: $100,000
Capital gains tax (20%): $16,000
Net after tax: $84,000
Charitable deduction: $84,000
Tax savings (35%): $29,400
Net cost of donation: $84,000 - $29,400 = $54,600

OPTION B: Donate stock directly
Donate stock: $100,000 (FMV)
Capital gains tax: $0
Charitable deduction: $100,000
Tax savings (35%): $35,000
Net cost of donation: $100,000 - $35,000 = $65,000

Wait - Option B looks worse?
Let's recalculate the true benefit:

OPTION A: Net wealth position
Start: $100,000 stock
After sale: $100,000 - $16,000 tax = $84,000
After donation: $0
Tax savings: $29,400
Net wealth reduction: $54,600

OPTION B: Net wealth position
Start: $100,000 stock
After donation: $0
Tax savings: $35,000
Capital gains avoided: $16,000
Net wealth reduction: $49,000

CORRECT COMPARISON:
Option B saves: $54,600 - $49,000 = $5,600 MORE
Because you avoid paying the capital gains tax
AND get the full FMV deduction
```

### Charitable Remainder Trust

```
CONCEPT:
─────────────────────────────────────────────────────
Irrevocable trust that:
1. Provides income to donor for life/term
2. Remainder goes to charity at end

Benefits:
- Immediate partial charitable deduction
- No capital gains when trust sells asset
- Diversify concentrated position tax-free
- Income stream for life
- Reduce estate

TYPES:
─────────────────────────────────────────────────────
CRAT (Charitable Remainder Annuity Trust):
Fixed dollar amount annually
Cannot add assets
Annuity: 5-50% of initial value

CRUT (Charitable Remainder Unitrust):
Fixed percentage of trust value annually
Can add assets
Unitrust amount: 5-50% of annual value

Example:
Create CRUT with $1,000,000 appreciated stock (basis $200,000)
Payout rate: 5%
Age: 65
IRS interest rate: 5%

Without trust:
Sell stock: $1,000,000
Capital gains tax: $160,000
Invest remainder: $840,000
Income at 5%: $42,000

With CRUT:
Contribute stock: $1,000,000
Capital gains tax: $0
Trust sells and reinvests: $1,000,000
Income (5%): $50,000
Charitable deduction: ~$400,000 (depends on age, rate)
Tax savings (35%): $140,000

Net benefit: More income + tax savings + charitable impact
```

---

## Stepped-Up Basis Planning

### Basis Step-Up at Death

```
THE RULE:
─────────────────────────────────────────────────────
Inherited assets receive basis = FMV at death
All unrealized gains erased
Heirs pay no income tax on pre-death appreciation

Exception: IRAs and retirement accounts (IRD)
           No step-up; distributed as income

PLANNING IMPLICATION:
─────────────────────────────────────────────────────
Hold highly appreciated assets until death
Don't harvest "gains" in appreciated assets
Do harvest losses (retain basis reduction)

Example:
Stock purchased: $100,000
Value at death: $1,000,000
Unrealized gain: $900,000

If sold before death:
LTCG tax (23.8%): $214,200

If held until death:
Heir's basis: $1,000,000
Tax on gain: $0
Savings: $214,200

"Step-up" effectively forgives all income tax on appreciation
```

### Planning Strategies

```
ASSET LOCATION FOR ESTATE:
─────────────────────────────────────────────────────
Hold until death: Highly appreciated assets
Sell or give now: Low-basis assets (can harvest loss)
Give to charity: Highly appreciated (double benefit)

AVOID SELLING APPRECIATED ASSETS:
─────────────────────────────────────────────────────
Borrow against appreciated assets instead
Use asset-backed loans (portfolio loans)
Interest may be deductible
Never realize the gain

Example:
$5,000,000 portfolio
$4,000,000 unrealized gain
Borrow $1,000,000 at 5% = $50,000/year interest
Avoid $952,000 in capital gains tax (23.8%)

If die before repaying:
Estate settles loan from stepped-up assets
Zero capital gains tax ever paid

CAUTION: Step-Down also exists
─────────────────────────────────────────────────────
If asset has DECLINED in value:
Basis steps DOWN to FMV at death
Loss is permanently lost

Strategy: Realize losses before death
          Give cash, not depreciated assets
```

---

## Key Takeaways

1. **Holding period matters enormously** - 0-23.8% vs. 10-40.8% rate difference
2. **Harvest losses regularly** - Create tax alpha through systematic harvesting
3. **Avoid wash sales** - 61-day window with substantially identical securities
4. **Use specific identification** - Choose optimal lots for each sale
5. **Donate appreciated assets** - Double benefit: avoid gains + full deduction
6. **Consider installment sales** - Spread gain over multiple years
7. **Plan for step-up** - Hold appreciated assets for basis increase at death
8. **Mind the NIIT** - Additional 3.8% above $250K MFJ

---

## Practice Problems

### Problem 1: Loss Harvesting
Portfolio has $30,000 unrealized loss in S&P 500 ETF (SPY) and $50,000 realized LTCG. Design a tax-loss harvesting strategy avoiding wash sales.

### Problem 2: Specific Identification
Shares purchased: 100@$50 (Jan 2022), 100@$75 (Jun 2023), 100@$60 (Dec 2024). Current price $70. Selling 100 shares. Which lot minimizes taxes?

### Problem 3: Charitable Stock
$50,000 stock with $10,000 basis. Client in 32% bracket. Compare donating stock vs. selling and donating cash.

---

*Next: [Investment Taxation](04-investment-taxation.md)*
