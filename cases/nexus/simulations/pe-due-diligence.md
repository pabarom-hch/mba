# Due Diligence Deep Dive Simulation

## PE Turnaround: TechServices Corp Acquisition

**Estimated Time**: 60-75 minutes
**Difficulty**: Advanced
**Prerequisites**: PE Curriculum Phase 3 (Due Diligence)

---

## Learning Objectives

By completing this simulation, you will:
1. Conduct a Quality of Earnings (QofE) analysis with EBITDA adjustments
2. Assess management team capabilities and retention risk
3. Identify key deal risks and develop mitigation strategies
4. Analyze customer concentration and revenue quality
5. Evaluate IT systems and integration requirements

---

## Part 1: Quality of Earnings Analysis

### The Situation

Apex Partners has signed a Letter of Intent to acquire TechServices Corp at a $10M enterprise value (6.7x LTM adjusted EBITDA). You're leading the buy-side due diligence workstream. Management has provided their adjusted EBITDA of $1.5M, but you need to validate these adjustments.

### Reported vs Adjusted EBITDA

Management reported EBITDA of $1.2M but claims the following add-backs:

| Item | Amount | Management Rationale |
|------|--------|---------------------|
| Owner compensation above market | $180,000 | CEO pays herself $80K above market rate |
| One-time legal settlement | $75,000 | Settled IP dispute, non-recurring |
| Non-recurring recruiting costs | $45,000 | Aggressive hiring push for new contract |

### Exercise 1: Validate the Add-backs

For each adjustment, determine if you would:
- **Accept** (A): Valid, supportable, non-recurring
- **Reject** (R): Not supportable or will recur
- **Haircut** (H): Partially accept with discount

| Adjustment | Your Decision | Reasoning |
|------------|---------------|-----------|
| Owner compensation above market | _____ | |
| Legal settlement | _____ | |
| Recruiting costs | _____ | |

**Your Adjusted EBITDA**: $_______

<details>
<summary>Show Analysis</summary>

**Owner Compensation**: **ACCEPT** - Standard PE adjustment. Market salary for CEO role is ~$220K, she's paid $300K. Well documented.

**Legal Settlement**: **HAIRCUT to $50K** - While the specific IP settlement was one-time, the company has had 2 legal disputes in 3 years. Budget for ongoing legal costs.

**Recruiting Costs**: **HAIRCUT to $20K** - Some recruiting is always ongoing for a growing services business. Only truly exceptional one-time costs should add back.

**Validated Adjusted EBITDA**: $1,200,000 + $180,000 + $50,000 + $20,000 = **$1,450,000**

This is 3.3% below management's $1.5M claim - reasonable variance.

</details>

---

## Part 2: Revenue Quality Assessment

### Customer Concentration Analysis

Review the top customer data:

| Customer | Annual Revenue | % of Total | Contract Type | Renewal Date |
|----------|---------------|------------|---------------|--------------|
| Client A | $2,700,000 | 18% | T&M | Month-to-month |
| Client B | $2,100,000 | 14% | Fixed Price | Dec 2026 |
| Client C | $1,650,000 | 11% | Retainer | Sep 2026 |
| Client D | $1,200,000 | 8% | T&M | Month-to-month |
| Client E | $900,000 | 6% | T&M | Annual renewal |
| Others | $6,450,000 | 43% | Various | Various |

### Exercise 2: Customer Risk Assessment

Answer the following:

1. **Top 4 Concentration**: ____% of revenue
2. **Revenue at risk** (month-to-month contracts): $_______
3. **Key customer risk rating** (High/Medium/Low): _______

**Mitigation Strategy** (describe in 2-3 sentences):

<details>
<summary>Show Analysis</summary>

1. **Top 4 Concentration**: 51% (18+14+11+8)
2. **Revenue at risk**: $3,900,000 (26% - Client A + D month-to-month)
3. **Risk Rating**: **MEDIUM-HIGH**

**Mitigation Strategy**:
- Require seller reps that no customer termination notices received
- Include customer concentration earn-out (reduce price if any top 4 customer leaves within 12 months)
- Post-close: CEO visits to top 4 customers within 30 days

</details>

---

## Part 3: Management Assessment

### Leadership Team Evaluation

You've conducted interviews with the management team. Complete the assessment:

| Role | Name | Tenure | Interview Notes | Rating |
|------|------|--------|-----------------|--------|
| CEO | Sarah Chen | 8 years | Strong strategic vision, deep customer relationships, willing to roll equity | _____ |
| CFO | Michael Torres | 3 years | Competent at current scale, may need upgrade for growth | _____ |
| COO | OPEN | - | Position vacant for 6 months, delivery issues emerging | _____ |
| VP Sales | Jennifer Walsh | 5 years | Strong pipeline builder, team likes her, culture carrier | _____ |

**Rating Scale**: A (Keep, critical), B (Keep, develop), C (Monitor), D (Replace within 6 months)

### Exercise 3: Management Rollover Structure

The CEO expects $5M from the sale. Design a retention package:

| Component | Amount/Terms | Purpose |
|-----------|--------------|---------|
| Rollover Equity | ___% of proceeds | Alignment |
| Retention Bonus | $______ | Stay incentive |
| Vesting Schedule | _____ years | Lock-up |

<details>
<summary>Show Assessment</summary>

**Ratings**:
- CEO: **A** - Essential, cultural leader, customer relationships
- CFO: **B** - Keep but may need more senior hire in Year 2
- COO: **D** - Critical gap, hire within 60 days post-close
- VP Sales: **A** - Keep, promote to Chief Revenue Officer consideration

**Recommended Retention Package**:
| Component | Amount/Terms | Purpose |
|-----------|--------------|---------|
| Rollover Equity | 15% ($750K) | Alignment with exit upside |
| Retention Bonus | $150K/year for 2 years | Stay incentive |
| Vesting Schedule | 4-year with 1-year cliff | Lock-up |

</details>

---

## Part 4: Key Risk Register

### Exercise 4: Risk Identification & Mitigation

Based on your due diligence, complete the risk register:

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| Customer concentration (top 4 = 51%) | _____ | _____ | |
| No COO - operational gaps | _____ | _____ | |
| Key employee risk (3 consultants = 40% billable) | _____ | _____ | |
| Limited recurring revenue (10% retainer) | _____ | _____ | |
| Manual PSA systems (spreadsheets) | _____ | _____ | |

**Severity/Likelihood Scale**: High (H), Medium (M), Low (L)

### Deal Breakers Assessment

Based on your findings, would you recommend:
- [ ] Proceed with deal as structured
- [ ] Proceed with price reduction
- [ ] Proceed with additional protections (escrow, earn-out, reps)
- [ ] Walk away

**Recommended price adjustment (if any)**: $_______

<details>
<summary>Show Risk Assessment</summary>

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| Customer concentration | M | M | Earn-out protection, customer visits |
| No COO | H | H | Hire within 60 days, use operating partner |
| Key employee risk | M | M | Retention bonuses, career paths |
| Limited recurring | M | M | Build managed services offering |
| Manual PSA | L | L | Budget $50K for ConnectWise implementation |

**Recommendation**: Proceed with additional protections
- 10% escrow for 18 months
- Customer concentration earn-out
- Management retention agreements signed at close

**Price adjustment**: Reduce by $250,000 (for validated EBITDA variance and COO hire cost)

</details>

---

## Part 5: IT Systems & Integration

### Current State Assessment

| System | Current | Status | Recommendation |
|--------|---------|--------|----------------|
| ERP | QuickBooks Enterprise | Adequate | Keep for Year 1 |
| CRM | Salesforce | Good | Leverage for add-on integrations |
| PSA | Manual spreadsheets | Poor | Replace with ConnectWise |
| HRIS | ADP | Adequate | Keep |
| Project Tracking | Microsoft Project | Poor | Consolidate to PSA |

### Exercise 5: Integration Budget

Estimate the Year 1 IT integration budget:

| Initiative | Budget | Priority |
|------------|--------|----------|
| PSA Implementation | $_____ | High |
| Data migration & cleanup | $_____ | High |
| BI/Dashboard setup | $_____ | Medium |
| Security audit & remediation | $_____ | High |
| **Total IT Budget** | **$_____** | |

<details>
<summary>Show Budget</summary>

| Initiative | Budget | Priority |
|------------|--------|----------|
| PSA Implementation | $45,000 | High |
| Data migration & cleanup | $15,000 | High |
| BI/Dashboard setup | $20,000 | Medium |
| Security audit & remediation | $25,000 | High |
| **Total IT Budget** | **$105,000** | |

This should be factored into Year 1 operating plan and EBITDA projections.

</details>

---

## Summary Deliverable

Complete the Due Diligence Summary for the Investment Committee:

**Deal**: TechServices Corp
**Proposed EV**: $10,000,000 (6.7x Adj. EBITDA)

**Key Findings**:
1. EBITDA validates at $1.45M (3% below management's $1.5M)
2. Customer concentration risk mitigatable with earn-out
3. Critical COO hire needed within 60 days
4. Management team overall strong, CEO rolling meaningful equity

**Recommendation**: _________________

**Revised Terms**: _________________

---

## Next Steps

Continue to the [100-Day Plan Builder](/cases/nexus/simulations/pe-hundred-day-plan) to design the post-acquisition value creation plan.
