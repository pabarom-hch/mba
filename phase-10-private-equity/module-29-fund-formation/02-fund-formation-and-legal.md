# Lesson 2: Fund Formation & Legal

> Navigating the legal, regulatory, and structural requirements of establishing a PE fund

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain the key terms and provisions of a Limited Partnership Agreement (LPA)
- Describe the purpose and contents of a Private Placement Memorandum (PPM)
- Navigate SEC registration requirements and Investment Company Act exemptions
- Calculate distribution waterfall mechanics under European and American structures
- Select appropriate service providers for fund operations
- Estimate formation costs and timelines

---

## Introduction

Fund formation is where strategy meets legal structure. Once a GP has validated their investment thesis (Lesson 1), they must translate that strategy into a legally compliant fund vehicle. This involves drafting the governing documents, securing regulatory approvals or exemptions, and assembling a team of service providers who will support the fund throughout its life.

This lesson covers the legal architecture of a PE fund in depth. Module 25 Lesson 2 introduced GP/LP structures and the basics of carried interest. Here we go significantly deeper into the specific provisions of the LPA, the regulatory framework governing private funds, and the practical considerations of formation.

The stakes are high: a poorly drafted LPA can create misaligned incentives, expose the GP to liability, or make fundraising more difficult. Conversely, institutional-quality fund documents signal credibility and professionalism to sophisticated LPs.

---

## Core Concepts

### Fund Documentation Hierarchy

Every PE fund is governed by a set of interrelated legal documents:

```
┌──────────────────────────────────────────────────────────────┐
│                 FUND DOCUMENTATION HIERARCHY                  │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  LIMITED PARTNERSHIP AGREEMENT (LPA)                     │ │
│  │  The governing document — defines all rights,            │ │
│  │  obligations, economics, and governance                   │ │
│  └─────────────────────────────────────────────────────────┘ │
│                          │                                    │
│            ┌─────────────┼─────────────┐                     │
│            ▼             ▼             ▼                      │
│  ┌──────────────┐ ┌──────────┐ ┌──────────────┐             │
│  │     PPM      │ │Subscriptn│ │ Side Letters  │             │
│  │              │ │Agreement │ │              │             │
│  │ Offering     │ │          │ │ Individual   │             │
│  │ document     │ │ LP's     │ │ LP-specific  │             │
│  │ with risk    │ │ capital  │ │ modifications│             │
│  │ disclosures  │ │ commitment│ │ to LPA terms │             │
│  └──────────────┘ └──────────┘ └──────────────┘             │
│                                                               │
│  Supporting Documents:                                        │
│  • GP Entity Operating Agreement                              │
│  • Investment Management Agreement                            │
│  • Compliance Manual                                          │
│  • Code of Ethics                                             │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### The Limited Partnership Agreement (LPA) — Deep Dive

The LPA is the single most important document in fund formation. It governs every aspect of the GP-LP relationship.

#### Key Economic Terms

**1. Management Fee**

| Component | Standard Terms | Variations |
|-----------|---------------|------------|
| **Rate (investment period)** | 1.5-2.0% of committed capital | Lower for larger funds ($1B+: 1.0-1.5%) |
| **Rate (post-investment period)** | 1.0-1.5% of invested capital (at cost or fair value) | Step-down incentivizes exits |
| **Calculation base** | Committed → Invested (at step-down) | Some funds use NAV throughout |
| **Payment frequency** | Quarterly in advance | Semi-annual less common |
| **Offset provisions** | 80-100% offset of transaction/monitoring fees | Full offset becoming standard (ILPA) |
| **Fund I typical** | 2.0% / 1.5% with 100% offset | Slightly higher rates acceptable |

**Management Fee Calculation Example:**

```
$300M Fund, 2.0% during investment period (Years 1-4)
Step-down to 1.5% on invested capital (Years 5-10)

Year 1-4: $300M × 2.0% = $6.0M per year
Year 5:   Assume $200M invested at cost
          $200M × 1.5% = $3.0M per year
Year 8:   Assume $120M invested (exits have occurred)
          $120M × 1.5% = $1.8M per year

Total fees over 10-year life: ~$42-48M (varies with deployment/exit pace)
```

**2. Carried Interest**

Carried interest is the GP's share of fund profits, typically 20%. The critical structural question is **when** carry is calculated:

| Structure | Calculation Basis | GP Risk | LP Protection |
|-----------|------------------|---------|---------------|
| **European (whole-fund)** | Carry calculated on entire fund after all capital + preferred return is returned | Lower carry earlier, higher alignment | Stronger — GP waits longer |
| **American (deal-by-deal)** | Carry calculated on each deal independently | GP receives carry earlier | Weaker — need clawback protection |
| **Hybrid** | Deal-by-deal with loss netting or escrow | Middle ground | Moderate |

**European Waterfall (Whole-Fund) — Standard for Buyout:**

```
Step 1: Return of Capital
  └─ 100% to LPs until all contributed capital is returned

Step 2: Preferred Return
  └─ 100% to LPs until 8% IRR (compounded) is achieved
     on all contributed capital

Step 3: GP Catch-Up
  └─ 80-100% to GP until GP has received 20% of total
     profits (Step 2 + Step 3)

Step 4: Carried Interest Split
  └─ 80% to LPs / 20% to GP on all remaining profits
```

**American Waterfall (Deal-by-Deal):**

```
For EACH realized deal:
  Step 1: Return invested capital for that deal
  Step 2: Preferred return (8%) on that deal's capital
  Step 3: GP catch-up to 20%
  Step 4: 80/20 split

PLUS: Loss carry-forward or escrow provisions
      Clawback at fund termination
```

**3. Other Key Economic Terms**

| Term | Standard | Purpose |
|------|----------|---------|
| **Hurdle rate** | 8% (compounded annually) | Minimum return before GP earns carry |
| **Catch-up** | 80% or 100% to GP | Speed at which GP "catches up" to 20% |
| **GP commitment** | 1-5% of fund | Alignment signal; institutional LPs expect 2%+ |
| **Clawback** | GP returns excess carry at fund end | Protects LPs in deal-by-deal waterfalls |
| **Organizational expenses** | Capped at $500K-$1.5M | Fund pays GP's formation costs |
| **Transaction fees** | 80-100% offset to mgmt fee | Reduces double-dipping concern |

#### Key Governance Terms

| Provision | Standard | Purpose |
|-----------|----------|---------|
| **Key Person** | 2-3 named professionals must dedicate "substantially all" time | Ensures team stability; triggers suspension if key person departs |
| **No-Fault Termination** | 75-80% LP vote to terminate GP | LP safety valve; rarely used but important protection |
| **For-Cause Termination** | Simple majority for fraud, felony, etc. | Removal for misconduct |
| **LPAC** | 3-7 LP representatives | Approve conflicts, review valuations |
| **Investment restrictions** | Max 10-20% per deal, sector limits, geography limits | Ensure diversification per strategy |
| **Fund term** | 10 years + 2× one-year extensions | LPAC or LP vote for extensions |
| **Excuse/exclude** | LP can opt out of specific investments | For legal/regulatory conflicts |
| **Most Favored Nation (MFN)** | LP can elect terms given to other LPs | Prevents preferential side letters |

### Private Placement Memorandum (PPM)

The PPM is the fund's offering document — the primary disclosure document provided to prospective investors.

**Key Sections:**

| Section | Contents | Purpose |
|---------|----------|---------|
| **Executive Summary** | Fund overview, strategy, team | Attract interest |
| **Investment Strategy** | Detailed thesis, target market, value creation | Define the mandate |
| **Management Team** | Bios, track records, roles | Demonstrate capability |
| **Terms Summary** | Fees, carry, hurdle, key provisions | Economic alignment |
| **Risk Factors** | 15-30+ pages of specific risks | Legal protection for GP |
| **Tax Considerations** | Federal, state, ERISA, UBTI | LP tax planning |
| **Legal Structure** | Fund entities, jurisdiction | Structural clarity |
| **Conflicts of Interest** | All potential conflicts disclosed | Transparency |

**PPM Risk Factors** include (but are not limited to):
- Illiquidity of PE investments
- Leverage risk
- Concentration risk
- Key person departure risk
- Regulatory and tax changes
- Valuation uncertainty
- Competition for deals
- Past performance not indicative of future results

### Subscription Agreement and Side Letters

**Subscription Agreement** — the LP's formal commitment to invest:

| Component | Purpose |
|-----------|---------|
| Capital commitment amount | How much the LP is committing |
| Investor representations | Accredited investor / qualified purchaser status |
| KYC/AML information | Regulatory compliance |
| Tax status | Taxable, tax-exempt, ERISA, non-US |
| Power and authority | Legal authorization to invest |

**Investor Qualification Requirements:**

| Exemption | Investor Standard | Max Investors |
|-----------|------------------|---------------|
| **3(c)(1)** | Accredited investor ($1M net worth or $200K income) | 100 |
| **3(c)(7)** | Qualified purchaser ($5M+ in investments) | 2,000 |

**Side Letters** — individual modifications to LPA terms for specific LPs:

| Common Side Letter Provisions | Typical Requestor |
|-------------------------------|-------------------|
| Management fee discount (10-25 bps) | Large LPs ($50M+) |
| Co-investment rights (pro rata or priority) | Anchor investors |
| LPAC seat | Top 3-5 LPs |
| Enhanced reporting requirements | Institutional LPs |
| Excuse rights for certain investments | Tax-exempt, ERISA |
| MFN clause | Most institutional LPs |
| Transfer rights | Fund of funds |
| ESG reporting | Pensions, endowments |

### Regulatory Framework

#### Registration Decision Tree

```
┌───────────────────────────────────────────────────────┐
│           DO YOU NEED TO REGISTER WITH THE SEC?        │
├───────────────────────────────────────────────────────┤
│                                                        │
│  AUM ≥ $150M in PE fund assets?                       │
│     │                                                  │
│     ├─ YES → Register as Investment Adviser (Form ADV) │
│     │                                                  │
│     └─ NO → Do you qualify for an exemption?           │
│              │                                         │
│              ├─ < $150M in PE fund AUM?                │
│              │   → Exempt Reporting Adviser (ERA)      │
│              │   → Still file abbreviated Form ADV     │
│              │                                         │
│              ├─ Only advise venture capital funds?      │
│              │   → VC Fund Adviser Exemption           │
│              │                                         │
│              └─ Foreign Private Adviser?                │
│                  → < 15 US clients, < $25M US AUM     │
│                                                        │
│  Note: State registration may still be required        │
│  depending on AUM and state of operations              │
│                                                        │
└───────────────────────────────────────────────────────┘
```

#### Key Regulatory Requirements

| Requirement | Applicability | Details |
|-------------|--------------|---------|
| **Form ADV Part 1** | All RIAs and ERAs | Firm info, AUM, disciplinary history |
| **Form ADV Part 2 (Brochure)** | Registered advisers | Fees, conflicts, investment process |
| **Form PF** | PE advisers with $150M+ AUM | Quarterly/annual fund reporting to SEC |
| **Form D** | All private funds | Filed within 15 days of first sale |
| **Blue Sky filings** | State-by-state | Notice filings in states where LPs reside |
| **AML/KYC** | All funds | Verify LP identity, source of funds |
| **ERISA compliance** | Funds accepting pension capital | 25% ERISA limit to avoid plan asset status |

### Service Provider Selection

#### Core Service Providers

| Provider | Role | Selection Criteria | Typical Annual Cost |
|----------|------|-------------------|-------------------|
| **Fund Counsel** | LPA drafting, regulatory, ongoing advice | PE fund specialization, reputation | $150K-$500K+ (formation), $50K-$100K/yr |
| **Fund Administrator** | NAV calculations, capital calls, reporting | Technology platform, PE experience | $75K-$200K/yr |
| **Auditor** | Annual audit, tax returns | Brand recognition, PE expertise | $50K-$150K/yr |
| **Tax Advisor** | K-1 preparation, tax planning | Multi-state, international capability | $50K-$150K/yr |
| **Compliance Consultant** | CCO services, annual review | SEC exam experience | $30K-$75K/yr |
| **Custodian/Prime Broker** | Asset safekeeping | Institutional quality, reporting | $10K-$50K/yr |

#### Formation Cost Estimate

| Cost Category | Fund I ($100-200M) | Fund III ($500M+) |
|---------------|--------------------|--------------------|
| Legal (formation) | $150K-$300K | $300K-$750K |
| Legal (side letters, closings) | $50K-$100K | $100K-$250K |
| Regulatory filings | $10K-$25K | $15K-$50K |
| Fund admin setup | $10K-$25K | $25K-$50K |
| D&O / E&O insurance | $15K-$50K | $50K-$150K |
| Technology (CRM, portal) | $10K-$30K | $50K-$100K |
| **Total Formation** | **$250K-$530K** | **$540K-$1.35M** |

### Formation Timeline

```
MONTH:    1        2        3        4        5        6
          │        │        │        │        │        │
LEGAL     ├─ Engage counsel ─┤        │        │        │
          │        ├─ Draft LPA/PPM──┤        │        │
          │        │        │  ├─ LP negotiations ─────┤
          │        │        │        │        │  ├─ Finalize docs
          │        │        │        │        │        │
REGULATORY├─ Determine structure ┤   │        │        │
          │        │  ├─ File Form D (after 1st sale)  │
          │        │  ├─ Form ADV ────┤        │        │
          │        │        │        │        │        │
SERVICE   ├─ Select providers ──┤    │        │        │
PROVIDERS │        │  ├─ Onboard admin ┤       │        │
          │        │        │  ├─ Setup accounts ┤     │
          │        │        │        │        │        │
FUNDRAISE │  ├─ Market sounding (from Lesson 1) ──────┤│
          │        │        │  ├─ Formal fundraising ──┤
          │        │        │        │        │  ├─ First Close
```

---

## Frameworks & Models

### Regulatory Decision Framework

For a US-based PE fund manager:

| Question | Answer → Path |
|----------|---------------|
| Total PE AUM ≥ $150M? | Yes → Full SEC registration required |
| Total PE AUM < $150M? | Exempt Reporting Adviser (ERA) — file abbreviated Form ADV |
| Only VC funds? | VC Adviser Exemption — file Form ADV, lighter compliance |
| Accepting ERISA capital? | Keep benefit plan assets below 25% to avoid plan asset status |
| 3(c)(1) or 3(c)(7)? | 3(c)(1) if <100 accredited investors; 3(c)(7) if need more or want QP-only |
| Non-US investors? | Consider offshore feeder or parallel fund structure |

### Service Provider Evaluation Matrix

| Criteria | Weight | Provider A | Provider B | Provider C |
|----------|--------|-----------|-----------|-----------|
| PE specialization | 25% | Score 1-5 | Score 1-5 | Score 1-5 |
| Technology/platform | 20% | | | |
| Reputation with LPs | 20% | | | |
| Cost | 15% | | | |
| References | 10% | | | |
| Team continuity | 10% | | | |
| **Weighted Total** | **100%** | | | |

---

## Worked Example: Drafting Key LPA Terms

**Scenario:** Apex Growth Fund I, LP — a $250M growth equity fund.

**Proposed LPA Terms:**

| Term | Proposed | Rationale |
|------|----------|-----------|
| Management fee | 2.0% committed (Y1-4), 1.5% invested (Y5-10) | Standard for Fund I; step-down incentivizes deployment |
| Carried interest | 20% | Standard |
| Waterfall | European (whole-fund) | ILPA-preferred; stronger LP protection |
| Preferred return | 8% compounded annually | Market standard |
| Catch-up | 100% to GP | Common; 80% catch-up also seen |
| GP commitment | 2.5% ($6.25M) | Above minimum; signals conviction |
| Fund term | 10 years + 2× 1-year extensions | Standard with LPAC approval |
| Key persons | 2 co-founders | Must devote "substantially all" business time |
| Investment limits | Max 15% per deal; min 10 investments | Ensures portfolio diversification |
| Org expense cap | $750K | Reasonable for $250M fund |
| Fee offset | 100% of transaction/monitoring fees | ILPA best practice |

**Waterfall Calculation Example:**

```
Fund: $250M committed, $240M called/invested
Total distributions: $600M (2.5x gross)
Preferred return: 8% compounded

Step 1: Return of Capital
  LPs receive: $240M
  Remaining: $600M - $240M = $360M

Step 2: Preferred Return
  LPs entitled to 8% compounded over ~5 years
  On $240M: ~$113M preferred return
  LPs receive: $113M
  Remaining: $360M - $113M = $247M

Step 3: GP Catch-Up (100%)
  GP catches up to 20% of total profits
  Total profits = $360M
  GP target = $360M × 20% = $72M
  GP receives: $72M (100% of distributions until caught up)
  Remaining: $247M - $72M = $175M

Step 4: 80/20 Split
  LPs receive: $175M × 80% = $140M
  GP receives: $175M × 20% = $35M

TOTALS:
  LPs: $240M + $113M + $140M = $493M (2.05x net)
  GP carry: $72M + $35M = $107M
  Net to GP (carry only): $107M
  GP total (carry + fees): $107M + ~$42M fees = $149M
```

---

## PE Application

### How Top PE Firms Structure Their Funds

| Firm Tier | Typical Structure | Key Differences |
|-----------|------------------|-----------------|
| **Mega ($10B+)** | Master-feeder, multiple share classes, offshore vehicles | Lower fees (1.0-1.5%), higher GP commit |
| **Large ($2-10B)** | Domestic LP + offshore parallel | Competitive fees, established terms |
| **Mid-Market ($500M-2B)** | Domestic LP, possible offshore feeder | Standard 2/20, some customization |
| **Lower Mid ($100-500M)** | Single domestic LP | Standard 2/20, simpler structure |
| **Emerging (<$100M)** | Single LP or LLC | Higher fees acceptable, simpler docs |

---

## CEO Application

CEOs should understand fund documents because:

1. **Management incentive alignment** — The LPA's carry structure determines how aggressively the GP will push for exits, growth, or leverage
2. **Fund term constraints** — Know when the fund needs to exit your company
3. **Key person clauses** — If a key person departs, the fund may pause new investments, affecting planned add-on acquisitions
4. **Investment restrictions** — May limit the GP's ability to make follow-on investments or support your growth plans
5. **LP governance** — The LPAC may need to approve certain transactions involving your company

---

## Common Mistakes

| Mistake | Problem | Better Approach |
|---------|---------|-----------------|
| Using generic legal templates | Missing PE-specific provisions | Hire specialized fund counsel |
| Skimping on legal counsel | Poor LPA terms that haunt you for 10+ years | Invest $200K+ in quality fund formation |
| American waterfall without protections | LP pushback, carry clawback risk | Use European waterfall for Fund I |
| No key person clause | LPs won't invest without it | Include 2-3 key persons, clear trigger/cure |
| Organizational expense cap too high | LPs view as excessive GP enrichment | Cap at $500K-$1M for Fund I |
| Ignoring ERISA limits | Becoming subject to ERISA plan asset rules | Track benefit plan investors at 25% threshold |
| Rushing formation | Errors in documents, regulatory gaps | Allow 4-6 months for proper formation |

---

## Key Takeaways

1. **The LPA is the governing document** — every economic and governance provision flows from it
2. **European waterfall** is the institutional standard for buyout/growth funds and is preferred by LPs for Fund I
3. **PPM risk factors** protect the GP legally but must be comprehensive and accurate
4. **Regulatory structure** depends on AUM, strategy, and investor types — most PE funds use 3(c)(7) with qualified purchasers
5. **Service provider selection** is critical — fund administrators, auditors, and legal counsel form the operational backbone
6. **Formation costs** range from $250K to $1.5M+ depending on fund size and complexity
7. **Allow 4-6 months** from engaging counsel to first close, with fundraising running in parallel

---

## Practice Problems

### Problem 1: Waterfall Calculation

A $200M fund (European waterfall, 8% preferred return, 100% GP catch-up, 20% carry) has the following results after 6 years:
- Total capital called: $190M
- Total distributions: $475M

Calculate: (a) LP preferred return amount, (b) GP carry, (c) Net LP multiple (TVPI), (d) GP total carry as a percentage of profits.

### Problem 2: Regulatory Structure

A GP is forming a $120M PE fund. They expect 45 investors: 30 accredited investors ($1-5M commitments) and 15 qualified purchasers ($5M+ commitments). They will not reach $150M AUM.

a) Should they use a 3(c)(1) or 3(c)(7) exemption? Why?
b) Do they need to register as an investment adviser with the SEC?
c) What Form D filing requirements apply?

### Problem 3: Fee Economics

Compare the LP net returns for two fee structures on a $300M fund that generates 2.0x gross over 5 years:

| Structure | Mgmt Fee | Carry | Hurdle |
|-----------|----------|-------|--------|
| A (Emerging) | 2.0% / 1.5% | 20% | 8% |
| B (Established) | 1.5% / 1.0% | 20% | 8% |

Calculate total management fees, carry, and net LP returns for each.

### Problem 4: Service Provider Selection

You are forming a $175M lower mid-market buyout fund. Your budget for Year 1 service providers (excluding legal formation) is $250K. Prioritize the following providers and explain your rationale:
- Fund administrator ($100K/year)
- Auditor ($75K/year)
- Outsourced CCO ($50K/year)
- Investor portal technology ($30K/year)
- D&O insurance ($40K/year)

---

## Further Reading

- **"Raising Capital for Private Equity Funds"** by Marcia Ellis — Definitive legal guide
- **"Private Equity Fund Formation"** by Allen & Overy — Technical legal reference
- **ILPA Principles 3.0** — LP expectations for fund terms and governance
- **SEC Investment Advisers Act of 1940** — Primary regulatory framework

---

## Connection to Nexus

Fund formation concepts are foundational to understanding:
- Why Nexus portfolio companies operate under specific governance structures
- How fund terms influence GP behavior and portfolio company decision-making
- The regulatory environment that shapes institutional investing
- Why LPA provisions matter for portfolio company M&A and exit timing

See Module 25 Lesson 2 for fund economics basics that this lesson builds upon.

---

*Previous: [Lesson 1: Fund Strategy & Validation](01-fund-strategy-and-validation.md)*
*Next: [Lesson 3: Capital Raising & Fundraising](03-capital-raising-and-fundraising.md)*
*Return to [Module Overview](README.md)*
