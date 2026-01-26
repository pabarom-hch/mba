# Hypothesis-Driven Thinking

## Learning Objectives

- Understand why hypothesis-driven approaches outperform exploratory analysis
- Learn to form strong initial hypotheses even with limited information
- Design analyses that efficiently test hypotheses
- Know when to pivot vs. persevere with a hypothesis

---

## Introduction

Most people analyze problems by gathering data first, then looking for patterns, then forming conclusions. This feels thorough but is deeply inefficient.

Consultants work backwards: form a hypothesis first, then gather only the data needed to prove or disprove it. This isn't about being right from the start—it's about focusing effort and accelerating learning.

Think of it as the scientific method applied to business: hypothesis → experiment → conclusion → iterate.

---

## Core Concepts

### What is a Hypothesis?

A hypothesis is a **testable statement** about what you believe is true and why.

**Structure:**
```
I believe [specific assertion]
because [reasoning/evidence]
which I will test by [analysis/data gathering]
```

**Example - Weak:**
"Maybe our sales are down because of competition."

**Example - Strong:**
"I believe our 15% sales decline is primarily driven by competitor X's new product launch (accounting for ~10% of decline) because they've captured our price-sensitive segment, which I will test by analyzing customer defection data and win/loss reports from the past 6 months."

### Why Hypotheses Work

#### 1. Focus
Without a hypothesis, analysts collect everything "just in case." With a hypothesis, you collect only what tests your belief.

```
Without Hypothesis:
"Let's gather all sales data, market data, customer surveys,
competitive intelligence, economic indicators..."
→ Weeks of work, unclear direction

With Hypothesis:
"Let's test if price-sensitive customers are defecting to Competitor X"
→ Pull win/loss data, segment by price sensitivity, interview 10 lost customers
→ Days of focused work, clear answer
```

#### 2. Speed
Hypothesis-driven work is 3-5x faster because you:
- Know exactly what data you need
- Can delegate with precision
- Recognize when you have enough evidence
- Don't get lost in interesting-but-irrelevant tangents

#### 3. Quality
Counter-intuitively, starting with an answer produces better analysis because:
- You must articulate your logic explicitly
- Disconfirming evidence is clear (your hypothesis is wrong)
- You iterate faster, testing multiple hypotheses

### The Hypothesis Pyramid

Structure hypotheses in a hierarchy:

```
CORE HYPOTHESIS (Answer to the main question)
"We should expand into Market X"
        │
        ├── SUPPORTING HYPOTHESIS 1
        │   "Market X is attractive"
        │   ├── Sub-hypothesis: Market is large enough (>$500M)
        │   ├── Sub-hypothesis: Market is growing (>10% CAGR)
        │   └── Sub-hypothesis: Margins are acceptable (>20%)
        │
        ├── SUPPORTING HYPOTHESIS 2
        │   "We can win in Market X"
        │   ├── Sub-hypothesis: Our capabilities transfer
        │   ├── Sub-hypothesis: Competition is fragmented
        │   └── Sub-hypothesis: We have channel access
        │
        └── SUPPORTING HYPOTHESIS 3
            "The investment is worthwhile"
            ├── Sub-hypothesis: ROI exceeds hurdle rate
            ├── Sub-hypothesis: Risk is manageable
            └── Sub-hypothesis: Opportunity cost is acceptable
```

Each level requires its own testing.

### Forming Good Hypotheses

#### Sources of Initial Hypotheses

1. **Pattern Recognition**
   - "This looks like other situations where X was true"
   - Leverage experience and case studies

2. **First Principles**
   - "If A and B are true, then C should follow"
   - Logical deduction from known facts

3. **Expert Input**
   - "People who know this space believe X"
   - Client executives, industry experts, internal specialists

4. **Analogies**
   - "When Company Y faced this, Z happened"
   - Cross-industry parallels

5. **Contrarian Thinking**
   - "Everyone believes X, but what if the opposite is true?"
   - Challenge conventional wisdom

#### The "Day One Hypothesis"

At McKinsey, teams form a "day one answer"—their best guess at the recommendation before any deep analysis.

**Why this works:**
- Forces explicit thinking about what success looks like
- Creates a target to aim for (or disprove)
- Identifies the key uncertainties immediately
- Aligns the team on direction

**How to form a day one hypothesis:**
1. Read all available background materials
2. Talk to 2-3 people who know the situation
3. Apply pattern recognition from similar situations
4. Ask: "If I had to answer this today, what would I say?"

**Important:** The day one hypothesis is expected to be wrong or incomplete. That's fine. Its job is to focus the work, not to be the final answer.

### Testing Hypotheses

#### Design Tests, Not Analysis

For each hypothesis, ask:
- What would I need to see to believe this is true?
- What would I need to see to believe this is false?
- What's the fastest way to get that evidence?

**Example:**

Hypothesis: "Customer churn is driven by poor product quality"

| Evidence FOR | Evidence AGAINST |
|--------------|------------------|
| High complaint rates about bugs | Complaints focus on price/service, not product |
| Defecting customers cite quality | Quality scores similar to retained customers |
| Quality metrics declining | Churn started before quality decline |

**Test:** Pull customer exit survey data, segment by stated reason. If <30% cite quality, hypothesis is likely wrong.

#### The "Prove and Disprove" Approach

For important hypotheses, explicitly try to disprove them:
- What's the strongest argument against this?
- Who would disagree, and why?
- What data would make me abandon this hypothesis?

This prevents confirmation bias and strengthens surviving hypotheses.

#### Ghost Decks and Ghost Slides

Before doing analysis, create the **ghost deck**—the presentation you would give if your hypothesis is correct.

- What slides would you need?
- What data would each slide show?
- What conclusion would each slide support?

Then work backwards: gather only the data needed to fill those slides.

If the data doesn't support the hypothesis, update the deck structure accordingly.

### When to Abandon a Hypothesis

**Pivot signals:**
- Clear disconfirming evidence from reliable source
- Multiple data points contradict the hypothesis
- Unable to find any supporting evidence after reasonable effort
- New information fundamentally changes the situation

**Don't pivot when:**
- Data is ambiguous but not contradictory
- You haven't tested the hypothesis properly yet
- One data point conflicts (look for patterns)
- Pivoting would be easier than defending the hypothesis

**The 70% Rule:**
If you have 70% confidence in your hypothesis, continue refining it. If you have <50% confidence after initial testing, consider pivoting.

---

## Consulting Application

### How BCG Uses Hypothesis-Driven Work

BCG structures engagements around "key questions" that drive hypotheses:

**Phase 1: Hypothesis Generation (Week 1)**
- Define 3-5 key questions
- Form initial hypotheses for each
- Identify critical unknowns
- Design work plan to test hypotheses

**Phase 2: Hypothesis Testing (Weeks 2-4)**
- Gather data against specific hypotheses
- Conduct interviews with hypothesis-testing questions
- Build models to test quantitative hypotheses
- Track hypothesis confidence levels

**Phase 3: Hypothesis Refinement (Week 5)**
- Update hypotheses based on evidence
- Integrate findings across workstreams
- Develop synthesized point of view
- Pressure-test with client

### The "Hypothesis-Data-Insight" Framework

For each workstream, consultants track:

| Hypothesis | Data Needed | Data Source | Finding | So What |
|------------|-------------|-------------|---------|---------|
| Price is below market | Competitive pricing | Market research | 15% below | Can raise 10% |
| Churn is fixable | Exit surveys | CRM data | 60% cite service | Service investment |

This creates a clear audit trail from hypothesis to insight.

---

## CEO Application

### Strategic Decision Making

As CEO, major decisions benefit from explicit hypotheses:

**M&A Example:**
Core Hypothesis: "Acquiring Company X will create $200M in value"

Supporting Hypotheses:
1. Revenue synergies are achievable ($50M)
2. Cost synergies are achievable ($75M)
3. Integration risk is manageable
4. Financing is available at acceptable terms
5. Regulatory approval is likely

Each can be tested independently before committing.

### Running Strategy Sessions

Structure board strategy discussions around hypotheses:

**Poor Approach:**
"Let's discuss our strategic options and gather input."
→ Leads to unfocused conversation, no resolution

**Strong Approach:**
"I believe we should pursue Strategy A because of X, Y, Z. Let me walk you through the evidence and then I want to hear where you think I'm wrong."
→ Focused debate, clear decision points

### Delegating Effectively

Give teams hypotheses, not open-ended questions:

**Poor Delegation:**
"Can you look into why our margins are declining?"

**Strong Delegation:**
"My hypothesis is that our margin decline is driven primarily by product mix shift (customers buying more low-margin products). Can you test this by analyzing product-level margins and mix changes over the past 8 quarters? If this isn't the driver, look at price realization and input costs."

---

## Worked Example

### Situation
A healthcare company's flagship drug is losing market share despite no new competitors. Leadership is puzzled.

### Step 1: Generate Hypotheses

Based on pattern recognition and initial conversations:

**Primary Hypotheses:**
1. Prescribing patterns have shifted (doctors choosing alternatives)
2. Payer restrictions have increased (insurance companies limiting coverage)
3. Patient compliance has declined (patients stopping medication)
4. Distribution issues have emerged (stockouts, access problems)

### Step 2: Prioritize Hypotheses

Quick analysis suggests:
- No distribution issues reported → Deprioritize H4
- No payer policy changes in period → Deprioritize H2 (initially)
- Prescribing patterns worth investigating → Prioritize H1
- Compliance data available → Prioritize H3

Focus on H1 and H3.

### Step 3: Design Tests

**Hypothesis 1: Prescribing patterns shifted**

| Test | Data Source | Threshold |
|------|-------------|-----------|
| New Rx declining faster than total market? | IQVIA data | >5% gap |
| Specific physician segments defecting? | Prescriber data | >20% decline in any segment |
| Competitor mentioned in prescriber surveys? | Survey data | >30% mention |

**Hypothesis 3: Compliance declining**

| Test | Data Source | Threshold |
|------|-------------|-----------|
| Refill rates declining? | Pharmacy data | >10% decline |
| Abandonment increasing? | Pharmacy data | >5% increase |
| Patient satisfaction declining? | Survey data | NPS down >10 |

### Step 4: Gather Data and Test

**Findings:**
- New prescriptions down 18% vs. market down 5% → Supports H1
- Specialist physicians down 35%, primary care stable → Supports H1
- Refill rates stable → Does not support H3
- Competitor mentioned by 52% of switching physicians → Supports H1

### Step 5: Refine and Conclude

**Refined Hypothesis:**
"Market share loss is driven by specialist physician defection to Competitor Y's new formulation, which offers once-daily dosing vs. our twice-daily requirement."

**Test Refinement:**
- What % of specialist scripts went to Competitor Y? → 65%
- Did once-daily dosing matter? → Survey shows #1 reason for switch

**Final Conclusion:**
Core hypothesis confirmed with specificity. Recommend development of extended-release formulation and specialist-focused counter-detailing program.

---

## Common Mistakes

### 1. Hypothesis = Guess
**Mistake:** Treating hypotheses as guesses rather than reasoned beliefs
**Fix:** Always state "because" after your hypothesis. No reasoning = not a hypothesis.

### 2. Confirmation Bias
**Mistake:** Only looking for evidence that supports your hypothesis
**Fix:** Explicitly list disconfirming evidence. Ask "what would prove me wrong?"

### 3. Clinging to Dead Hypotheses
**Mistake:** Continuing to search for support after evidence clearly contradicts
**Fix:** Set clear thresholds before testing. Be willing to pivot.

### 4. Hypothesis Too Vague
**Mistake:** "Sales are probably down because of competition"
**Fix:** Specify what competition, what mechanism, what magnitude

### 5. All Hypotheses, No Testing
**Mistake:** Generating elegant hypothesis trees but never testing them
**Fix:** Each hypothesis must have a test plan. Time-box hypothesis generation.

---

## Key Takeaways

1. **Start with an answer** - Form a hypothesis before analyzing
2. **Be specific** - Vague hypotheses can't be tested
3. **State your logic** - "I believe X because Y"
4. **Design tests** - Know what would confirm and disconfirm
5. **Gather focused data** - Only what tests the hypothesis
6. **Be willing to pivot** - Hypotheses are meant to be refined
7. **Track confidence** - Know how certain you are and why

---

## Practice Problems

### Problem 1: Hypothesis Formation
A restaurant chain has seen same-store sales decline 8% over 6 months. Form three competing hypotheses for why this might be happening. For each, state the hypothesis, your reasoning, and how you would test it.

### Problem 2: Test Design
Your hypothesis is: "Our B2B software company's win rate has declined because our product lacks a mobile app, which competitors now have."

Design a test plan: What specific data would confirm this? What would disconfirm it? What threshold would make you abandon this hypothesis?

### Problem 3: Day One Hypothesis
You're a consultant starting an engagement Monday. Client is a mid-size bank seeing customer deposits decline. You have 30 minutes of background reading and one 15-minute call with the CFO.

Write out your day one hypothesis, including:
- Core hypothesis
- Key supporting hypotheses
- Biggest uncertainties
- Week 1 workplan to test

---

## Further Reading

- **"Bulletproof Problem Solving"** by Charles Conn and Robert McLean - McKinsey methodology
- **"Hypothesis-Driven Development"** - Agile approach to product building
- **"The Lean Startup"** by Eric Ries - Hypothesis testing in entrepreneurship
- **"Superforecasting"** by Philip Tetlock - How to form and update beliefs

---

*Next: [MECE Principle](03-mece-principle.md)*
