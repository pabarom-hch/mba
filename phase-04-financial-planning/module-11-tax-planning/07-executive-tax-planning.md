# Executive Tax Planning

## Learning Objectives

- Navigate taxation of stock options (ISOs and NSOs)
- Optimize restricted stock unit (RSU) taxation
- Plan deferred compensation distributions under 409A
- Structure golden parachute and severance for tax efficiency
- Manage concentrated stock positions for tax purposes

---

## Introduction

Executive compensation creates unique tax planning challenges due to the complexity and magnitude of equity awards, deferred compensation, and employment packages. Poor planning can result in tax rates exceeding 50% on compensation, while strategic planning can significantly reduce tax burden. This chapter addresses the tax implications of common executive compensation elements.

---

## Stock Option Taxation

### Incentive Stock Options (ISOs)

```
ISO CHARACTERISTICS:
─────────────────────────────────────────────────────
- Preferential tax treatment possible
- Must meet specific requirements
- Limited annual vesting ($100K rule)
- Employee only (not contractors)

QUALIFYING DISPOSITION:
─────────────────────────────────────────────────────
Requirements:
1. Hold stock 2+ years from grant date
2. Hold stock 1+ year from exercise date

Tax treatment:
- At exercise: No regular income tax
- At sale: All gain is long-term capital gain
- Saves: Ordinary rates vs. LTCG rates

Example:
Grant price: $10
Exercise price: $10
FMV at exercise: $50
Sale price: $70
Shares: 1,000

If qualifying disposition:
Gain: $70 - $10 = $60/share
LTCG: $60,000
Tax (20%): $12,000

If sold immediately (disqualifying):
Spread at exercise: ($50-$10) × 1,000 = $40,000 ordinary
Additional gain: ($70-$50) × 1,000 = $20,000 STCG
Tax (37%): $22,200

Savings from qualifying: $10,200
```

### ISO Alternative Minimum Tax

```
AMT TRAP:
─────────────────────────────────────────────────────
At exercise: Spread is AMT preference item
May trigger AMT even though no regular tax

Example:
Exercise 10,000 ISOs
Grant price: $10
FMV at exercise: $60
Spread: $500,000

Regular tax: $0 (no income recognition)
AMT adjustment: +$500,000
If pushes into AMT: Tax at 26-28%
Potential AMT: ~$130,000

AND: If stock drops before you sell
     Still owe AMT on spread at exercise
     "Underwater ISO" problem from dot-com era

PLANNING:
─────────────────────────────────────────────────────
1. Calculate AMT exposure before exercise
2. Consider exercising over multiple years
3. Exercise and sell same year (no AMT issue)
4. Exercise when spread is small
5. Consider disqualifying disposition if AMT too high
```

### Nonqualified Stock Options (NSOs)

```
NSO TAXATION:
─────────────────────────────────────────────────────
At grant: No tax (if no readily ascertainable value)
At exercise: Spread = ordinary income + employment taxes
At sale: Gain/loss from exercise price = capital gain/loss

Example:
Exercise 10,000 NSOs
Strike price: $20
FMV at exercise: $80
Spread: $600,000

At exercise:
Ordinary income: $600,000
Employment taxes: FICA (up to wage base) + Medicare
Additional Medicare (0.9%): $5,400
Federal tax (37%): $222,000
State tax (10%): $60,000
Total tax on exercise: ~$287,400

New basis: $80/share
If sell later at $100:
LTCG: $20 × 10,000 = $200,000
Tax (23.8%): $47,600

Total tax: $335,000 on $800,000 total compensation
Effective rate: 41.9%
```

### Option Exercise Strategies

```
EXERCISE AND HOLD:
─────────────────────────────────────────────────────
Pros:
- Start long-term holding period
- Potential for future appreciation
- ISOs: Possible LTCG treatment

Cons:
- Pay tax now on spread
- Risk if stock declines
- Capital at risk

EXERCISE AND SELL:
─────────────────────────────────────────────────────
Pros:
- Lock in gain
- Diversify
- Certain outcome

Cons:
- Short-term gain (NSO same either way)
- ISO: Disqualifying disposition
- No future appreciation

CASHLESS EXERCISE:
─────────────────────────────────────────────────────
Broker lends funds to exercise
Immediately sells enough to cover
Net shares delivered

Tax: Same as exercise and partial sell
Benefit: No cash outlay required
Common for executives without liquid funds

NET EXERCISE:
─────────────────────────────────────────────────────
Surrender some options to pay exercise price
Receive net shares

Tax: Spread on net shares is income
Benefit: No cash needed
Must be permitted by plan
```

---

## Restricted Stock Units (RSUs)

### RSU Taxation

```
BASIC RSU TAX TREATMENT:
─────────────────────────────────────────────────────
At grant: No tax
At vesting: FMV = ordinary income + employment taxes
At sale: Gain/loss from vesting price = capital gain/loss

Example:
5,000 RSUs vest
FMV at vesting: $100/share
Value: $500,000

At vesting:
Ordinary income: $500,000
Federal tax (37%): $185,000
State tax (10%): $50,000
FICA: Capped + Medicare (1.45% + 0.9%): ~$11,750
Total: ~$246,750 tax

Net shares received (after withholding):
$500,000 - $246,750 = $253,250
Shares: ~2,533 shares (if sold for withholding)

If hold and sell later at $120:
Basis: $100/share
LTCG: $20/share
Tax: 23.8%
```

### RSU Planning Strategies

```
TAX WITHHOLDING METHODS:
─────────────────────────────────────────────────────
1. Sell-to-Cover: Sell shares to pay withholding
   Most common
   Automatic diversification
   No cash needed

2. Net Shares: Fewer shares delivered (net of tax)
   Similar to sell-to-cover
   Company handles sale

3. Cash Payment: Pay withholding in cash
   Keep all shares
   Requires liquidity
   More concentrated

SUPPLEMENTAL WITHHOLDING:
─────────────────────────────────────────────────────
RSUs often withheld at supplemental rate (22% federal)
If actual rate higher (37%), underwithholding
May owe significant amount at filing
Consider increasing other withholding
Or make estimated payments

VESTING TIMING:
─────────────────────────────────────────────────────
Little control over timing (set by company)
Consider:
- Charitable donations of vested stock
- Tax-loss harvesting in other positions
- Bunching deductions in high-vesting years
```

---

## Section 83(b) Elections

### Restricted Stock 83(b) Election

```
WHAT IS 83(B):
─────────────────────────────────────────────────────
Elect to be taxed at GRANT (not vesting)
Applies to restricted stock (not RSUs typically)
Must file within 30 days of grant

WHY ELECT:
- If stock will appreciate significantly
- Pay tax on lower value now
- All future appreciation = capital gain

EXAMPLE:
Receive 10,000 restricted shares
FMV at grant: $5/share
Vests over 4 years
Expected FMV at full vest: $50/share

Without 83(b):
At vesting: $50 × 10,000 = $500,000 ordinary income
Tax (37%): $185,000

With 83(b):
At grant: $5 × 10,000 = $50,000 ordinary income
Tax (37%): $18,500
At sale (if $50): ($50-$5) × 10,000 = $450,000 LTCG
Tax (23.8%): $107,100
Total: $125,600

Savings: $185,000 - $125,600 = $59,400

RISK:
─────────────────────────────────────────────────────
If you forfeit: No deduction for tax paid
If stock declines: Paid tax on higher value
Must pay tax now with no liquidity
```

---

## Deferred Compensation

### 409A Nonqualified Deferred Compensation

```
409A OVERVIEW:
─────────────────────────────────────────────────────
Governs nonqualified deferred compensation
Election timing: Before year compensation earned
Cannot accelerate distributions
Limited distribution triggers

DISTRIBUTION TRIGGERS:
- Separation from service
- Disability
- Death
- Change in control (if properly structured)
- Specified date/schedule
- Unforeseeable emergency

PENALTIES FOR VIOLATION:
─────────────────────────────────────────────────────
All deferred amounts immediately taxable
20% additional penalty tax
Interest from date of deferral
AVOID violations at all costs
```

### NQDC Tax Planning

```
ELECTION STRATEGY:
─────────────────────────────────────────────────────
When to defer:
- High current income, lower expected retirement
- Want to shift income between states
- Spreading large amounts over time

Payout options:
- Lump sum: Large amount, bracket spike
- Installments: Smoothed income, longer deferral
- Specific date: Can plan around

Example:
Defer $500,000 bonus
Elect 10-year installments at retirement

Current tax if received:
$500,000 × 50% (Fed + State) = $250,000

Deferred and distributed over 10 years:
$50,000/year at potentially lower rate (25%)
$50,000 × 25% = $12,500/year
Total over 10 years: $125,000

Savings: $125,000 (plus investment growth on deferred tax)

RISKS:
─────────────────────────────────────────────────────
1. Company bankruptcy (unsecured creditor)
2. Tax rates may increase
3. State may change (source rules vary)
4. Cannot access before trigger
```

### Coordination with Retirement

```
DISTRIBUTION SEQUENCING:
─────────────────────────────────────────────────────
Social Security: May delay if large NQDC income
Traditional IRA: May delay withdrawals
Roth conversions: Limited during high NQDC years

Example timeline:
Age 60-65: NQDC distributions $200,000/year
           Social Security: Delay
           Traditional IRA: Don't withdraw
           Taxable: Minimal to stay in bracket

Age 66-72: NQDC ends
           Social Security: Begin
           Traditional IRA: Roth conversions
           Fill lower brackets

Age 73+: RMDs begin
         Social Security continues
         Lower NQDC years allow conversion
```

---

## Golden Parachutes and Severance

### Section 280G Golden Parachute Rules

```
280G OVERVIEW:
─────────────────────────────────────────────────────
Applies when:
- Change in ownership/control
- Payments to "disqualified individual"
- Payments exceed "base amount" threshold

DISQUALIFIED INDIVIDUALS:
- Officers
- Highly compensated employees
- Top 1% by compensation
- Shareholders (1%+)

BASE AMOUNT:
Average W-2 compensation over prior 5 years
If parachute payments > 3× base amount:
Entire excess is "excess parachute payment"

PENALTIES:
- Company: Cannot deduct excess payments
- Executive: 20% excise tax on excess (Section 4999)
```

### Parachute Planning

```
AVOIDING EXCESS PARACHUTE:
─────────────────────────────────────────────────────
1. Cap at safe harbor (2.99× base amount)
   Commonly negotiated
   Avoids excise tax entirely

2. Reasonable compensation carve-out
   Some payments exempt if for services
   Must establish with contemporaneous evidence
   Consulting agreements, non-compete

3. 280G stockholder approval
   Private company exemption if approved
   75% of voting shareholders
   Removes penalties entirely

GROSS-UP PROVISIONS:
─────────────────────────────────────────────────────
Company pays additional amount to cover excise tax
Very expensive for company
Executive receives net of what intended
Less common now (scrutiny from shareholders)

MODIFIED CAP:
─────────────────────────────────────────────────────
"Better of" provision:
- Reduced to safe harbor (no excise), OR
- Full amount less excise tax
Whichever nets more to executive

Example:
Base amount: $1,000,000
Parachute payment: $3,500,000
Safe harbor: $2,990,000

Full payment with excise:
Excess: $3,500,000 - $2,990,000 = $510,000
Excise (20%): $102,000
Net: $3,398,000

Reduced to safe harbor:
Payment: $2,990,000
Net: $2,990,000

Better: Full payment ($3,398,000 > $2,990,000)
But if excise higher: Safe harbor may win
```

---

## Concentrated Stock Management

### Tax-Efficient Diversification

```
CHALLENGE:
─────────────────────────────────────────────────────
Large position in single stock
Highly appreciated (low basis)
Selling triggers large capital gain
But holding = concentration risk

STRATEGIES:

1. ANNUAL GIFTING:
─────────────────────────────────────────────────────
Gift appreciated stock using annual exclusion
Donees can sell (in lower bracket)
$18,000 × multiple recipients = significant

2. CHARITABLE GIVING:
─────────────────────────────────────────────────────
Donate to DAF or charity directly
Full FMV deduction
No capital gains tax
Great for highly appreciated stock

3. SYSTEMATIC SELLING:
─────────────────────────────────────────────────────
Sell fixed amount annually
Spread gain over multiple years
Stay in lower brackets each year
May take many years

4. 10b5-1 PLANS:
─────────────────────────────────────────────────────
Pre-planned sales while not possessing MNPI
Automatic execution
Good corporate governance
Cannot be modified when have inside info
```

### Advanced Diversification Techniques

```
EXCHANGE FUNDS:
─────────────────────────────────────────────────────
Pool appreciated stock with other investors
Receive diversified portfolio interest
No current tax (partnership formation)
Must hold 7+ years to diversify individual lots
Works best for large positions

PREPAID VARIABLE FORWARDS:
─────────────────────────────────────────────────────
Contract to sell stock at future date
Receive upfront cash (85-90% of value)
Retain upside participation (capped)
No current tax (loan treatment)
Tax at settlement
Effectively monetizes without selling

EQUITY COLLARS:
─────────────────────────────────────────────────────
Buy protective put (downside protection)
Sell covered call (cap upside)
Finance put with call premium
Maintains ownership (no sale)
Defer tax while hedging

QUALIFIED OPPORTUNITY ZONE:
─────────────────────────────────────────────────────
Sell stock, realize gain
Invest gain in QOZ fund within 180 days
Defer original gain until 2026
10+ year hold: New gains tax-free
```

---

## State Tax Planning for Executives

### Relocation Strategies

```
BEFORE RELOCATING (TO LOWER-TAX STATE):
─────────────────────────────────────────────────────
Accelerate income in current state:
- Exercise stock options
- Roth conversions
- Bonus timing
- Realize capital gains

If moving TO high-tax state: Opposite strategy

ESTABLISHING DOMICILE:
─────────────────────────────────────────────────────
Move primary residence
Change driver's license, voter registration
Update wills and trusts
Move bank accounts
Professional licenses
Spend majority of time in new state
Document, document, document

STATE SOURCE RULES:
─────────────────────────────────────────────────────
Some states tax income "sourced" to state
Even if you've moved
Stock options: May be taxed where earned
NQDC: Various state rules (allocation formulas)
RSUs: Generally taxed where performed services

Example:
Worked in CA 10 years, move to TX
Exercise options in TX
CA may still tax portion earned while in CA
"Allocation" based on time
```

### Multi-State Complications

```
EXECUTIVE TAX TRAPS:
─────────────────────────────────────────────────────
1. Nonresident taxation:
   Work in NYC 1 day? May owe NY tax
   "Convenience of employer" rules

2. Double taxation:
   Credits may not fully offset
   State A taxes all income
   State B taxes sourced income
   Credit mechanism imperfect

3. Audit risk:
   High-income moves get scrutiny
   CA, NY aggressive in auditing
   Keep meticulous records

PLANNING:
─────────────────────────────────────────────────────
Track days in each state
Understand telecommuting rules
Coordinate compensation timing with moves
Consider state tax impact in offer negotiations
```

---

## Worked Example: Executive Tax Planning

### Profile

```
Jennifer Chen
─────────────────────────────────────────────────────
Position: CEO, Tech Company
Base salary: $750,000
Annual bonus: $500,000
RSU grant: $2,000,000/year (4-year vesting)
ISO grant: 50,000 shares, $30 strike
NQDC balance: $3,000,000 (10-year payout)
Location: California
Age: 55, planning retirement at 60
```

### Current Year Tax Planning

```
COMPENSATION COMPONENTS:
─────────────────────────────────────────────────────
Salary: $750,000
Bonus: $500,000
RSU vesting: $2,000,000 (cost basis at vest)
Total ordinary income: $3,250,000

Current state: CA (13.3%)
Federal bracket: 37%
NIIT: 3.8%
Combined rate: ~54%

STRATEGIES:

1. RSU Management:
   - Sell sufficient for taxes
   - Charitable donation of appreciated shares
   - 10b5-1 plan for systematic diversification

2. ISO Timing:
   - Current FMV $50 (spread $20)
   - Wait for better timing or exercise gradually
   - Consider AMT impact

3. Bonus Deferral:
   - Elect to defer $250,000 into NQDC
   - Reduces current income by $250,000
   - Tax savings: $135,000 (at 54%)

4. Charitable Giving:
   - Donate $100,000 appreciated stock (basis $30K)
   - Avoid $70,000 LTCG
   - Deduction value: $54,000
   - Total benefit: $70,000 × 23.8% + $54,000 = $70,660
```

### Retirement Transition Planning

```
RETIREMENT AT 60 (5 YEARS):
─────────────────────────────────────────────────────
Plan: Move to TX (no state income tax)

Year 1-4: Continue in CA
Year 5: Relocate to TX mid-year

Option exercises: After move to TX
NQDC distributions: Begin after move
RSU sales: After move where possible

5-YEAR PROJECTION:
─────────────────────────────────────────────────────
Year 1-4: Maximize deferrals, charitable giving
Year 5: Move to TX, establish domicile
         Exercise ISOs (no state tax)
Year 6+: Begin NQDC distributions in TX
         $300,000/year for 10 years
         No state tax (vs. 13.3% in CA)
         State tax savings: ~$400,000 over 10 years

Caution:
- CA may audit the move
- Some income still CA-sourced
- Must truly relocate (not just paperwork)
```

---

## Key Takeaways

1. **ISOs offer LTCG treatment** - But AMT is the trap; plan exercises carefully
2. **NSO spread is ordinary income** - Plus employment taxes at exercise
3. **RSUs vest as ordinary income** - No control over timing; plan around it
4. **83(b) elections can save taxes** - If stock appreciates; risk if forfeit
5. **409A governs NQDC** - Election timing is critical and irrevocable
6. **Golden parachutes have penalties** - 20% excise tax on excess payments
7. **Diversification is tax-costly** - Use charitable giving and systematic strategies
8. **State residence matters enormously** - Plan moves around compensation events

---

## Practice Problems

### Problem 1: ISO vs. NSO
Compare tax on 10,000 options: Strike $20, exercise at $60, sell at $80. One year hold. Calculate as ISO vs. NSO.

### Problem 2: RSU Withholding
$1,000,000 RSU vests. Federal 37%, state 10%, FICA capped. Calculate underwithholding if company withholds at supplemental rate (22% federal).

### Problem 3: Relocation Planning
Executive moving from NY (10.9%) to FL. Has $2M in unvested RSUs. Design timing strategy.

---

*Next: [Module Assessment](assessment.md)*
