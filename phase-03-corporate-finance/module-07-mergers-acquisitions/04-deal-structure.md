# Deal Structure

## Learning Objectives

- Understand transaction structure options
- Evaluate cash vs. stock consideration
- Design earnout and contingent payment structures
- Implement deal protection mechanisms
- Navigate tax and legal structure decisions

---

## Introduction

Deal structure determines how value is transferred, risk is allocated, and economic outcomes are realized. The right structure can bridge valuation gaps, allocate risk appropriately, and create value for both parties. Poor structuring can doom otherwise sound transactions.

---

## Core Concepts

### Transaction Structure Overview

```
Key Structural Decisions:

1. Form of Transaction
   ├── Stock purchase
   ├── Asset purchase
   └── Merger

2. Consideration Type
   ├── All cash
   ├── All stock
   ├── Mixed (cash + stock)
   └── Contingent (earnouts)

3. Tax Structure
   ├── Taxable
   └── Tax-free reorganization

4. Legal Structure
   ├── Direct acquisition
   ├── Forward merger
   ├── Reverse merger
   └── Triangular merger
```

### Stock Purchase vs. Asset Purchase

**Stock Purchase:**

```
Buyer acquires shares of target company.

Advantages for Buyer:
- Simpler transaction
- All assets/liabilities transfer automatically
- Contracts typically transfer (check CoC)
- Faster to execute

Disadvantages for Buyer:
- Inherit all liabilities (known and unknown)
- No asset step-up (taxable purchase)
- Historical tax exposure

Advantages for Seller:
- Capital gains treatment
- Clean exit
- Simpler structure
```

**Asset Purchase:**

```
Buyer acquires specific assets.

Advantages for Buyer:
- Cherry-pick assets
- Avoid unknown liabilities
- Asset step-up (tax basis)
- Leave unwanted items behind

Disadvantages for Buyer:
- Must transfer each asset/contract
- Bulk sales compliance
- Assignment and consent required
- More complex execution

Advantages for Seller:
- Retain entity for other purposes
- Control what's sold

Disadvantages for Seller:
- Double taxation (corporate + shareholder)
- More complex closing
- May retain liabilities
```

### Comparison Table

| Factor | Stock Purchase | Asset Purchase |
|--------|----------------|----------------|
| Liability transfer | All | Selected |
| Tax basis step-up | No (taxable) | Yes |
| Contract transfer | Automatic (mostly) | Requires consent |
| Complexity | Lower | Higher |
| Seller tax | Capital gains | Ordinary + capital |
| Licenses/permits | Transfer with entity | May need reissuance |

---

## Consideration Structure

### All-Cash Deal

```
Characteristics:
- Certain value to seller
- No ongoing exposure
- Clean exit

When Preferred:
- Seller wants certainty
- Buyer has cash/debt capacity
- Seller doesn't want buyer exposure
- Quick close needed

Buyer Considerations:
- Cash drain
- Debt financing risk
- Interest cost
- Opportunity cost
```

### All-Stock Deal

```
Characteristics:
- Shared risk/reward
- Alignment post-close
- Potential tax deferral

When Preferred:
- Buyer stock highly valued
- Combined entity upside
- Tax-free desired
- Cash/leverage constrained

Exchange Ratio:
Fixed Ratio: Set number of shares
Floating Ratio: Fixed value in shares

Example:
Target value: $500M
Buyer price: $50/share
Exchange: 10M shares (0.1 per target share)
```

### Fixed vs. Floating Exchange Ratios

**Fixed Exchange Ratio:**

```
Definition: Set number of buyer shares per target share

Example: 0.5 buyer shares per target share

Impact:
- Buyer stock ↑: Target gets more value
- Buyer stock ↓: Target gets less value

Risk: Target bears market risk between signing and closing
```

**Floating (Collared) Exchange Ratio:**

```
Definition: Adjusts to deliver fixed value

Example: Deliver $50 of buyer stock per target share
If buyer at $100: 0.5 shares
If buyer at $80: 0.625 shares

Collar Structure:
- Floor: Minimum shares issued
- Cap: Maximum shares issued
- Within collar: Floating ratio
```

### Mixed Consideration

```
Structure: Part cash + Part stock

Example:
$200M deal = $100M cash + $100M stock

Benefits:
- Balances certainty and upside
- Tax efficiency options
- Financing flexibility
- Risk sharing

Complexity:
- Proration mechanics
- Election procedures
- Allocation among shareholders
```

---

## Earnouts and Contingent Payments

### Earnout Structure

```
Definition: Portion of price contingent on future performance

Why Use:
- Bridge valuation gaps
- Seller retains upside
- Reduce buyer risk
- Align incentives

Typical Structure:
Base Price: $80M
Earnout: Up to $20M
Metric: EBITDA targets over 2 years

Year 1: If EBITDA > $10M → $5M
Year 2: If EBITDA > $12M → $10M
Stretch: If EBITDA > $15M → additional $5M
```

### Earnout Mechanics

**Key Terms:**

```
Metric Selection:
├── Revenue (less controllable)
├── EBITDA (common)
├── EBIT
├── Net income
├── Operating metrics (customers, units)
└── Milestones (product launch, regulatory)

Measurement Period:
├── 1-3 years typical
├── Annual or cumulative
└── Acceleration provisions

Calculation Rules:
├── Accounting standards
├── Adjustment provisions
├── Audit rights
└── Dispute resolution
```

### Earnout Pitfalls

```
Conflict Areas:

1. Buyer Manipulation
   - Starve the business of investment
   - Allocate costs to earnout entity
   - Change accounting practices

2. Measurement Disputes
   - GAAP interpretation
   - Excluded items
   - Allocation methodology

3. Seller Frustration
   - Loss of control
   - Strategic changes
   - Integration conflicts

Mitigation:
- Clear definitions
- Covenant to operate normally
- Third-party dispute resolution
- Acceleration provisions
```

### Contingent Value Rights (CVRs)

```
Structure: Tradeable right to additional payment

When Used:
- Binary outcome (drug approval, litigation)
- Quantifiable milestone
- Marketable securities desired

Example:
Pharma acquisition with CVR:
Base: $50/share
CVR: Additional $10 if drug approved

CVR trades separately post-close
Provides price discovery
```

---

## Deal Protection Mechanisms

### Buyer Protections

**Termination Fees (Break-Up Fees):**

```
Purpose: Compensate buyer if deal fails due to seller

Typical Size: 2-4% of deal value

Triggers:
- Seller accepts higher bid
- Seller board changes recommendation
- Shareholder vote fails

Example:
$500M deal × 3% = $15M termination fee
```

**No-Shop / Go-Shop Provisions:**

```
No-Shop:
- Seller cannot solicit alternatives
- Must reject unsolicited offers
- Fiduciary out for superior offers

Go-Shop:
- Period to actively seek alternatives
- Typically 30-60 days post-signing
- Lower termination fee during window
- Higher fee after window closes
```

**Matching Rights:**

```
Buyer right to match superior proposal

Process:
1. Superior proposal received
2. Notice to original buyer
3. 3-5 days to match
4. If matched, deal proceeds
5. If not, termination allowed
```

### Seller Protections

**Reverse Termination Fee:**

```
Purpose: Compensate seller if buyer fails

Triggers:
- Financing failure
- Regulatory failure
- Buyer breach

Size: Often matches regular termination fee
```

**Hell or High Water:**

```
Buyer commitment to obtain regulatory approval
at any cost, including divestitures

"Hell or High Water" = Unconditional commitment

Important for:
- Regulatory risk allocation
- Antitrust concerns
- Foreign investment reviews
```

**Financing Contingency:**

```
Seller preference: No financing contingency
- Buyer has committed financing
- Reverse termination fee if financing fails

Buyer preference: Financing contingency
- Protection if debt market disruption
- Material adverse change out
```

---

## Tax Structuring

### Taxable vs. Tax-Free

**Taxable Transaction:**

```
Characteristics:
- Cash consideration (usually)
- Seller recognizes gain immediately
- Buyer gets stepped-up basis

Seller Impact:
- Capital gains (federal ~20% + state)
- Net investment income tax (3.8%)
- Immediate tax liability

Buyer Impact:
- Asset basis = purchase price
- Higher depreciation/amortization
- Future tax deductions
```

**Tax-Free Reorganization:**

```
Requirements (Type A - Merger):
- Continuity of interest (40%+ stock)
- Continuity of business enterprise
- Business purpose

Seller Impact:
- No immediate gain recognition
- Carryover basis in new stock
- Tax deferred until sale of acquirer stock

Buyer Impact:
- Carryover basis in assets
- No step-up
- Lower future deductions
```

### Structure Comparison

| Factor | Taxable | Tax-Free |
|--------|---------|----------|
| Consideration | Cash | Stock (mainly) |
| Seller tax | Immediate | Deferred |
| Buyer basis | Stepped-up | Carryover |
| Complexity | Lower | Higher |
| Flexibility | More | Less |

---

## Consulting Application

### Deal Structure Advisory

**Engagement Focus:**

```
1. Structure Options Analysis
   - Identify alternatives
   - Tax impact modeling
   - Stakeholder analysis

2. Earnout Design
   - Metric selection
   - Term negotiation
   - Documentation support

3. Negotiation Support
   - Term sheet review
   - Position development
   - Creative solutions
```

### Key Deliverables

```
Structure Analysis:
├── Options comparison matrix
├── Tax impact analysis
├── Stakeholder implications
└── Recommendation

Earnout Analysis:
├── Metric alternatives
├── Probability-weighted value
├── Term negotiations positions
└── Documentation guidance
```

---

## CEO Application

### Structure Considerations as Buyer

**Decision Framework:**

```
Cash vs. Stock:

Use Cash When:
- Target shareholders want certainty
- Your stock is undervalued
- You have debt capacity
- Integration risk is high

Use Stock When:
- Your stock is highly valued
- You want to share risk
- Cash is constrained
- Tax-free desired by seller
- You want seller alignment
```

### Structure Considerations as Seller

**What to Negotiate:**

```
1. Consideration Mix
   - Cash for certainty
   - Stock for upside/tax
   - Balance based on situation

2. Earnout Terms
   - Metrics you can influence
   - Reasonable targets
   - Strong protections
   - Audit rights

3. Protections
   - Reverse termination fee
   - Financing conditions
   - Regulatory commitments
   - Collar on stock
```

---

## Worked Example

### Structuring the Acquisition of TechTarget

**Situation:**
BigCo acquiring TechTarget for $300M

**Seller Situation:**
- Founders own 40% (tax-sensitive)
- VCs own 50% (want cash exit)
- Management owns 10% (want to stay)

**Buyer Situation:**
- Strong stock price
- Moderate debt capacity
- Concerned about performance risk

**Proposed Structure:**

```
Consideration Mix:
- Cash: $180M (60%)
- Stock: $120M (40%)

Allocation:
- Founders: All stock ($120M) - tax deferred
- VCs: All cash ($150M) - clean exit
- Management: Cash ($30M) - immediate value

Earnout:
- Additional $50M based on Year 1-2 revenue
- $25M if revenue > $60M in Year 1
- $25M if revenue > $75M in Year 2
- Management stays to earn it
```

**Deal Protection:**

```
For Buyer:
- 3% termination fee ($9M)
- No-shop with fiduciary out
- 4-day matching right

For Seller:
- Reverse termination fee ($9M)
- Committed financing
- Hell or high water for regulatory
- Collar: ±15% on stock component
```

**Tax Structure:**

```
Overall: Hybrid

Stock portion: Tax-free for founders
- Continuity of interest met (40%)
- Business purpose requirement
- No gain recognition

Cash portion: Taxable
- VCs prefer cash (portfolio liquidity)
- Taxed at capital gains rates
```

---

## Common Mistakes

### 1. Earnouts Without Control
**Mistake:** Seller earnout with no influence over results.
**Fix:** Seller covenants, standalone accounting, protections.

### 2. Ignoring Tax Impact
**Mistake:** Structure without tax analysis.
**Fix:** Tax advisor involved early; model net proceeds.

### 3. Inadequate Deal Protection
**Mistake:** Buyer exposed to topping bid without protection.
**Fix:** Appropriate termination fee and matching rights.

### 4. Complex Structures
**Mistake:** Over-engineered structures that create disputes.
**Fix:** Simplicity where possible; clear documentation.

---

## Key Takeaways

1. **Structure creates and allocates value** - Not just legal technicality
2. **Cash vs. stock is fundamental** - Different risk/reward profiles
3. **Earnouts bridge gaps** - But create complexity and conflict
4. **Tax matters significantly** - 20-30% of value at stake
5. **Protections balance risk** - Both sides need appropriate coverage
6. **Complexity has costs** - Simple structures execute better
7. **Stakeholder alignment** - Different parties have different preferences

---

## Practice Problems

### Problem 1: Consideration
$200M deal. Seller is 70% founder (tax-sensitive), 30% employees. Design consideration mix.

### Problem 2: Earnout
Buyer willing to pay $80M, seller wants $100M. Design an earnout to bridge the $20M gap.

### Problem 3: Tax Analysis
Compare after-tax proceeds to seller in $100M deal: (a) all cash, (b) 50/50 cash/stock tax-free. Assume 25% tax rate.

---

*Next: [Merger Analysis](05-merger-analysis.md)*
