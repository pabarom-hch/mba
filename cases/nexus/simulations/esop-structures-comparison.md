# Employee Ownership Structures: Deep Dive Comparison

## Overview

This module compares three primary employee ownership structures for private companies:

1. **Traditional ESOP** (Employee Stock Ownership Plan)
2. **Direct Equity Grants** (Options, RSUs, Profits Interests)
3. **ESPP** (Employee Stock Purchase Plan)

Each structure has distinct tax implications, governance requirements, and suitability for different situations.

---

## Executive Summary

| Factor | Traditional ESOP | Direct Equity | ESPP |
|--------|------------------|---------------|------|
| **Best For** | Independent companies | PE-backed exits | Public companies |
| **Complexity** | High | Medium | Low |
| **Tax Efficiency** | Excellent | Good | Moderate |
| **PE Compatible** | Low | High | Low |
| **Setup Cost** | $50-100K | $20-40K | $15-30K |
| **Governance** | Trustee-managed | Board-managed | HR-managed |

---

## Structure 1: Traditional ESOP

### How It Works

```
ESOP TRUST STRUCTURE
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         ┌──────────────────┐                                │
│                         │   ESOP TRUST     │                                │
│                         │  (Holds Shares)  │                                │
│                         └────────┬─────────┘                                │
│                                  │                                          │
│            ┌─────────────────────┼─────────────────────┐                    │
│            │                     │                     │                    │
│            ▼                     ▼                     ▼                    │
│    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐              │
│    │   Trustee    │     │   Company    │     │  Employees   │              │
│    │  (Fiduciary) │     │ (Contributes │     │  (Beneficial │              │
│    │              │     │   to Trust)  │     │   Owners)    │              │
│    └──────────────┘     └──────────────┘     └──────────────┘              │
│                                                                             │
│ CONTRIBUTION FLOW:                                                          │
│ 1. Company makes tax-deductible contributions to ESOP Trust                │
│ 2. Trust purchases company stock (from company or shareholders)            │
│ 3. Shares allocated to individual employee accounts                        │
│ 4. Employees vest over time (typically 3-6 years)                          │
│ 5. Distribution at retirement, disability, death, or termination           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Tax Treatment

| Party | Tax Benefit |
|-------|-------------|
| **Company** | Contributions to ESOP are tax-deductible (including principal on ESOP loans) |
| **Employee** | No tax until distribution; can roll into IRA to further defer |
| **S-Corp** | ESOP-owned portion not subject to federal income tax |
| **Seller** | Section 1042 rollover: defer capital gains by reinvesting in qualified securities (C-Corp only) |

### Example: TechServices ESOP Scenario

**Assumptions:**
- Company Value: $80M at exit
- ESOP Ownership: 15%
- Employees: 250
- Average Tenure: 4 years

**Allocation Method**: 60% based on compensation, 40% based on tenure

| Employee Tier | Count | Avg Compensation | Tenure Factor | Allocation % | Value |
|---------------|-------|------------------|---------------|--------------|-------|
| Executive | 4 | $200K | 1.5x | 8% | $960,000 |
| Director | 20 | $120K | 1.2x | 18% | $2,160,000 |
| Manager | 40 | $90K | 1.1x | 22% | $2,640,000 |
| Staff | 186 | $65K | 1.0x | 52% | $6,240,000 |
| **Total** | 250 | | | 100% | $12,000,000 |

**Per-Employee Breakdown:**

| Tier | Count | Per-Person Value |
|------|-------|------------------|
| Executive | 4 | $240,000 |
| Director | 20 | $108,000 |
| Manager | 40 | $66,000 |
| Staff | 186 | $33,548 |

### Governance & Compliance

```
ESOP GOVERNANCE REQUIREMENTS
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ ANNUAL REQUIREMENTS                                                         │
│ ├── Independent 409A valuation (fair market value)                         │
│ ├── Form 5500 filing with DOL                                              │
│ ├── Plan audit (if 100+ participants)                                      │
│ ├── Summary Annual Report to participants                                  │
│ └── Participant statements                                                 │
│                                                                             │
│ FIDUCIARY DUTIES (Trustee)                                                 │
│ ├── Act solely in interest of participants                                 │
│ ├── Prudent investment standard                                            │
│ ├── Diversification requirements                                           │
│ ├── Follow plan documents                                                  │
│ └── Avoid prohibited transactions                                          │
│                                                                             │
│ KEY RISKS                                                                   │
│ ├── DOL investigations for fiduciary breaches                              │
│ ├── Participant lawsuits for imprudent investments                         │
│ ├── Valuation challenges (overpayment claims)                              │
│ └── Repurchase obligation at termination                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Pros and Cons

| Pros | Cons |
|------|------|
| Significant tax advantages | High setup and ongoing costs |
| Broad employee participation | Complex governance (ERISA) |
| Creates retirement benefit | Annual valuation required |
| Seller can defer capital gains | Repurchase obligation liability |
| S-Corp tax exemption | Limited flexibility |
| Proven employee engagement | DOL oversight and audits |

### When to Use Traditional ESOP

**Ideal Scenarios:**
- Succession planning (retiring founder)
- Long-term independent ownership
- S-Corp seeking federal tax exemption
- Companies prioritizing broad employee wealth

**Avoid When:**
- Planning PE sale in <5 years
- Need flexibility in equity allocation
- Limited administrative bandwidth
- Variable/uncertain company valuation

---

## Structure 2: Direct Equity Grants

### Types of Equity Grants

```
DIRECT EQUITY GRANT OPTIONS
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ STOCK OPTIONS                                                               │
│ ├── ISOs (Incentive Stock Options)                                         │
│ │   ├── Tax-advantaged for employees                                       │
│ │   ├── $100K/year grant limit                                             │
│ │   ├── Must exercise within 90 days of leaving                            │
│ │   └── AMT implications at exercise                                       │
│ │                                                                           │
│ └── NSOs (Non-Qualified Stock Options)                                     │
│     ├── No limit on grants                                                 │
│     ├── Ordinary income tax at exercise                                    │
│     ├── Company gets deduction at exercise                                 │
│     └── More flexible terms                                                │
│                                                                             │
│ RESTRICTED STOCK                                                            │
│ ├── RSUs (Restricted Stock Units)                                          │
│ │   ├── Shares delivered at vesting                                        │
│ │   ├── Taxed as ordinary income at vesting                                │
│ │   └── No upfront payment required                                        │
│ │                                                                           │
│ └── Restricted Stock Awards                                                │
│     ├── Shares issued immediately (with restrictions)                      │
│     ├── 83(b) election available                                           │
│     └── Risk of forfeiture during vesting                                  │
│                                                                             │
│ LLC/PARTNERSHIP                                                             │
│ └── Profits Interests                                                      │
│     ├── Capital gains treatment                                            │
│     ├── Only participate in value above grant threshold                    │
│     ├── K-1 tax reporting                                                  │
│     └── Popular for PE-backed companies                                    │
│                                                                             │
│ SYNTHETIC/PHANTOM                                                           │
│ └── Phantom Equity / SARs                                                  │
│     ├── Cash-settled (no actual shares)                                    │
│     ├── Simpler administration                                             │
│     ├── No dilution to cap table                                           │
│     └── Taxed as ordinary income                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Tax Comparison

| Grant Type | At Grant | At Vest/Exercise | At Sale | Company Deduction |
|------------|----------|------------------|---------|-------------------|
| **ISO** | None | None (but AMT) | Capital Gains | None |
| **NSO** | None | Ordinary Income | Capital Gains | Yes, at exercise |
| **RSU** | None | Ordinary Income | Capital Gains | Yes, at vesting |
| **Restricted Stock (83b)** | Ordinary Income | None | Capital Gains | Yes, at grant |
| **Profits Interest** | None | None | Capital Gains | None |
| **Phantom/SAR** | None | N/A | Ordinary Income | Yes, at payout |

### Example: TechServices Direct Equity Plan

**Pool Size**: 15% of fully-diluted equity

**Tiered Allocation:**

```
EQUITY ALLOCATION PYRAMID
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                           ┌───────┐                                         │
│                           │ CEO   │ 2.5%  →  $3,000,000                    │
│                           │       │                                         │
│                       ┌───┴───────┴───┐                                     │
│                       │   C-Suite     │ 2.5%  →  $3,000,000 (3 people)     │
│                       │   (CFO, COO)  │                                     │
│                   ┌───┴───────────────┴───┐                                 │
│                   │      VP Level         │ 2.0%  →  $2,400,000 (6 people) │
│                   │                       │                                 │
│               ┌───┴───────────────────────┴───┐                             │
│               │         Directors             │ 2.5%  →  $3,000,000        │
│               │         (15 people)           │         (15 people)        │
│           ┌───┴───────────────────────────────┴───┐                         │
│           │           All Other Staff             │ 5.5%  →  $6,600,000    │
│           │           (Phantom Equity)            │         (220 people)   │
│           │           (220 people)                │                         │
│           └───────────────────────────────────────┘                         │
│                                                                             │
│ TOTAL POOL: 15% = $12,000,000 at $80M exit                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Vesting Schedules

| Tier | Vesting Structure | Rationale |
|------|-------------------|-----------|
| CEO | 25% at 1 year, then monthly over 36 months | Align with PE hold period |
| C-Suite | 4-year with 1-year cliff | Standard executive vesting |
| VP/Directors | 4-year with 1-year cliff | Retention through exit |
| Staff (Phantom) | 3-year cliff | Reward tenure, simplify admin |

### Grant Documentation

**Required Documents:**
1. **Equity Incentive Plan** - Board-approved umbrella plan
2. **Grant Agreement** - Individual employee terms
3. **409A Valuation** - Fair market value (required for strike price)
4. **Exercise Agreement** - For options (at exercise)
5. **Cap Table** - Ownership tracking (Carta, Pulley, Shareworks)

### Pros and Cons

| Pros | Cons |
|------|------|
| Flexible allocation | Less tax-advantaged than ESOP |
| Simple governance | Individual grant administration |
| PE-compatible | 409A valuation required |
| Differentiated rewards | Potentially complex cap table |
| Aligns with exit | Options may be underwater |
| Standard market practice | Early exercise complications |

### When to Use Direct Equity

**Ideal Scenarios:**
- PE-backed companies planning exit
- Startups with growth trajectory
- Need to differentiate by role/performance
- Management incentive alignment

**Avoid When:**
- Want broad, equal participation
- Seeking maximum tax efficiency
- Company value is uncertain/declining
- Limited legal/admin support

---

## Structure 3: ESPP (Employee Stock Purchase Plan)

### How It Works

```
ESPP STRUCTURE
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ PURCHASE PERIOD (Typically 6 months)                                       │
│                                                                             │
│    ┌───────────────────────────────────────────────────────────────────┐   │
│    │  Start                                            End              │   │
│    │   │                                                │               │   │
│    │   ▼                                                ▼               │   │
│    │  FMV: $10                                         FMV: $15        │   │
│    │                                                                    │   │
│    │   ├─────────────────────────────────────────────────┤              │   │
│    │   │           Employee payroll deductions           │              │   │
│    │   │              (1-10% of salary)                  │              │   │
│    │   └─────────────────────────────────────────────────┘              │   │
│    │                                                                    │   │
│    │   Purchase Price = LOWER of (Start or End FMV) × 85%              │   │
│    │                  = $10 × 85% = $8.50                              │   │
│    │                                                                    │   │
│    │   Employee Benefit = $15 - $8.50 = $6.50/share (76% gain)         │   │
│    │                                                                    │   │
│    └───────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ TAX TREATMENT (Qualified 423 Plan)                                         │
│ ├── If held 2+ years from grant date AND 1+ year from purchase:           │
│ │   └── Discount + gain taxed as capital gains                            │
│ └── If sold earlier (disqualifying disposition):                          │
│     └── Discount taxed as ordinary income, remainder as capital gains     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Terms

| Term | Typical Value | IRS Limit |
|------|---------------|-----------|
| Discount | 15% | 15% max |
| Lookback | Yes (lower of start/end) | Optional |
| Purchase Limit | 10% of salary | $25,000/year FMV |
| Purchase Frequency | Semi-annual | Quarterly to annual |
| Eligibility | 1+ year tenure | 2+ years max |

### Example Calculation

**Employee Profile:**
- Salary: $80,000
- Contribution: 10% ($8,000/year = $4,000 per 6-month period)
- Stock price at period start: $10
- Stock price at period end: $12

**Purchase:**
- Lookback price: $10 (lower of start/end)
- Discount: 15%
- Purchase price: $10 × 0.85 = $8.50
- Shares purchased: $4,000 ÷ $8.50 = 470 shares
- Market value at purchase: 470 × $12 = $5,640
- **Immediate gain**: $5,640 - $4,000 = $1,640 (41% return)

### Pros and Cons

| Pros | Cons |
|------|------|
| Simple to understand | Requires liquid market for shares |
| Low administrative burden | Limited tax advantages |
| Voluntary participation | Annual contribution limits |
| Immediate discount benefit | Stock price risk |
| Non-discriminatory | Not suitable for private companies |
| Payroll integration | Periodic share issuance complexity |

### When to Use ESPP

**Ideal Scenarios:**
- Public companies
- Pre-IPO companies (post-IPO ESPP)
- Regular liquidity events
- Broad employee benefit

**Avoid When:**
- Private company (no market for shares)
- Uncertain exit timeline
- Need differentiated compensation
- Limited payroll system capability

---

## Choosing the Right Structure

### Decision Framework

```
EMPLOYEE OWNERSHIP DECISION TREE
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ Q1: Is the company planning to stay independent long-term (10+ years)?     │
│     │                                                                       │
│     ├── YES → Consider TRADITIONAL ESOP                                    │
│     │         ├── Tax advantages worth complexity                          │
│     │         └── Ideal for succession planning                            │
│     │                                                                       │
│     └── NO → Continue to Q2                                                │
│                                                                             │
│ Q2: Is there a PE sponsor or planned exit in <5 years?                     │
│     │                                                                       │
│     ├── YES → Use DIRECT EQUITY GRANTS                                     │
│     │         ├── Flexible allocation                                      │
│     │         ├── Aligns with exit                                         │
│     │         └── PE standard practice                                     │
│     │                                                                       │
│     └── NO → Continue to Q3                                                │
│                                                                             │
│ Q3: Is the company public or planning IPO soon?                            │
│     │                                                                       │
│     ├── YES → Consider ESPP (post-IPO)                                     │
│     │         ├── Simple, broad participation                              │
│     │         └── Combine with direct equity for execs                     │
│     │                                                                       │
│     └── NO → Use DIRECT EQUITY or PHANTOM EQUITY                           │
│               ├── Phantom for simplicity                                   │
│               └── Options/RSUs for tax efficiency                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Hybrid Approaches

Most companies use combinations:

| Combination | When to Use |
|-------------|-------------|
| **ESOP + Options** | Broad ownership (ESOP) plus executive incentives (options) |
| **Options + Phantom** | Executives get real equity, staff gets cash-settled phantom |
| **RSUs + ESPP** | Public company: RSUs for retention, ESPP for broad participation |
| **Profits Interests + Phantom** | LLC structure: management gets profits interests, staff gets phantom |

---

## Implementation Checklist

### For Traditional ESOP

- [ ] Engage ESOP legal counsel
- [ ] Select trustee (internal or independent)
- [ ] Obtain independent valuation
- [ ] Draft plan documents
- [ ] Board/shareholder approval
- [ ] File Form 5500 registration
- [ ] Communicate to employees
- [ ] Set up annual administration process

### For Direct Equity Grants

- [ ] Engage equity compensation counsel
- [ ] Obtain 409A valuation
- [ ] Draft Equity Incentive Plan
- [ ] Board approval of plan and pool
- [ ] Shareholder approval (if required)
- [ ] Set up cap table management (Carta, etc.)
- [ ] Draft grant agreement templates
- [ ] Develop communication materials
- [ ] Train managers on grant discussions

### For ESPP

- [ ] Engage ESPP administrator
- [ ] Draft plan document
- [ ] Shareholder approval (423 plan)
- [ ] Integrate with payroll system
- [ ] Set purchase period calendar
- [ ] Employee enrollment process
- [ ] Develop employee education
- [ ] Coordinate with transfer agent

---

## Discussion Questions

1. **Tax Optimization**: Given a 4-year PE hold period, which structure maximizes after-tax employee proceeds? What assumptions drive your answer?

2. **Retention vs. Fairness**: Direct equity allows differentiated grants; ESOPs allocate by formula. Which better serves company goals? Employee goals?

3. **Complexity Trade-offs**: Traditional ESOPs have higher setup/ongoing costs but better tax treatment. At what company size does the math favor each approach?

4. **PE Perspective**: Why do most PE firms prefer direct equity over ESOPs? What would change their preference?

5. **Exit Mechanics**: At a liquidity event, how does each structure handle the payout? What are the cash flow implications for the buyer?

---

## Case Application: TechServices Corp

### Selected Approach: Hybrid Direct Equity

Apex Partners selected a **Direct Equity + Phantom Equity hybrid** for TechServices:

| Component | Structure | Recipients | Pool % |
|-----------|-----------|------------|--------|
| Executive Options | NSOs | CEO, CFO, COO | 5% |
| Key Employee Options | ISOs/NSOs | VPs, Directors | 4% |
| Broad-Based Phantom | Cash-settled | All employees (1+ yr) | 5% |
| Reserve | Unallocated | Future hires | 1% |
| **Total** | | | **15%** |

**Rationale:**
1. **PE Compatibility**: Direct equity aligns incentives with exit
2. **Executive Retention**: Real equity creates ownership mentality
3. **Broad Participation**: Phantom equity includes all employees simply
4. **Tax Efficiency**: ISOs where eligible, NSOs for flexibility
5. **Administrative Simplicity**: Phantom avoids cap table complexity for 200+ staff

---

*Module for: [Case 07: PE Turnaround & Buy-and-Build](../case-studies/case-07-pe-turnaround-buyout.md)*
*Data Source: [PE Turnaround Dataset](../datasets/pe-turnaround.json)*
*Return to [Nexus Simulations](../README.md)*
