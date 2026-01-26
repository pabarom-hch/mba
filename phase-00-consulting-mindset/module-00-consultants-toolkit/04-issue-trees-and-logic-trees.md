# Issue Trees and Logic Trees

## Learning Objectives

- Understand the difference between issue trees and logic trees
- Build issue trees to decompose complex problems
- Use logic trees to structure arguments and recommendations
- Apply both tools to real business problems

---

## Introduction

Issue trees and logic trees are the visual workhorses of consulting. They take the MECE principle and turn it into a practical tool for breaking down problems (issue trees) and building arguments (logic trees).

If MECE is the grammar of structured thinking, trees are the sentences.

---

## Core Concepts

### Issue Trees

**Definition:** A hierarchical breakdown of a problem into its component parts, organized MECE at each level.

**Purpose:** To decompose a complex question into answerable sub-questions.

**Visual Structure:**
```
                    ROOT QUESTION
                    (Main problem)
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
      Branch 1        Branch 2        Branch 3
     (Sub-issue)     (Sub-issue)     (Sub-issue)
         │               │               │
     ┌───┴───┐      ┌───┴───┐      ┌───┴───┐
     ▼       ▼      ▼       ▼      ▼       ▼
  Sub-sub  Sub-sub  etc.
```

**Rules:**
1. Root question is clear and specific
2. Each level is MECE
3. Branches break down the parent (not duplicate it)
4. Go deep enough to reach actionable/answerable questions
5. Typically 3-5 branches per level, 3-4 levels deep

### Building an Issue Tree

**Step 1: Define the Root Question**
Start with a clear, specific question.

Bad: "What's wrong with our business?"
Good: "Why has profit margin declined from 15% to 8% over 24 months?"

**Step 2: Identify First-Level Branches**
Ask: "What are the MECE components of this question?"

For the profit margin question:
```
Why has profit margin declined?
├── Revenue-side factors
└── Cost-side factors
```

This is MECE because profit = revenue - costs.

**Step 3: Decompose Each Branch**
Continue breaking down until you reach testable questions:

```
Why has profit margin declined from 15% to 8%?
│
├── Revenue-side factors (revenue declined OR mix worsened)
│   ├── Price changes
│   │   ├── Did we reduce prices?
│   │   └── Did customer mix shift to lower-price tiers?
│   │
│   └── Volume changes
│       ├── Did we lose customers?
│       └── Did existing customers buy less?
│
└── Cost-side factors (costs increased)
    ├── Variable costs increased
    │   ├── Input costs rose
    │   ├── Labor costs rose
    │   └── Shipping/logistics costs rose
    │
    └── Fixed costs increased
        ├── Facilities/rent costs rose
        ├── Technology/infrastructure costs rose
        └── Administrative overhead rose
```

**Step 4: Verify MECE at Each Level**
Check: Is each level mutually exclusive AND collectively exhaustive?

### Types of Issue Trees

#### 1. Why Trees (Diagnostic)
Used to understand root causes.

Root: "Why is X happening?"

```
Why are customers churning?
├── Product-related reasons
├── Service-related reasons
├── Price-related reasons
└── Competitive reasons
```

#### 2. How Trees (Solution)
Used to identify potential actions.

Root: "How can we achieve X?"

```
How can we grow revenue by 20%?
├── Increase prices
├── Increase volume with existing customers
├── Acquire new customers
└── Enter new markets/segments
```

#### 3. What Trees (Options)
Used to map choices.

Root: "What options do we have?"

```
What should we do with Business Unit X?
├── Keep and invest
├── Keep and harvest
├── Sell or divest
└── Shut down
```

### Logic Trees

**Definition:** A hierarchical structure that supports a conclusion through grouped, ordered arguments.

**Purpose:** To build a compelling case for a recommendation.

**Key Difference from Issue Trees:**
- Issue trees break down questions
- Logic trees build up answers

**Visual Structure:**
```
                    RECOMMENDATION
                    (What we should do)
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
      Reason 1         Reason 2         Reason 3
    (Supporting)      (Supporting)      (Supporting)
         │                │                │
     ┌───┴───┐       ┌───┴───┐       ┌───┴───┐
     ▼       ▼       ▼       ▼       ▼       ▼
  Evidence  Evidence Evidence Evidence Evidence Evidence
```

### Building a Logic Tree

**Step 1: State the Recommendation**
Clear, specific, actionable.

"We should acquire Company X for $500M."

**Step 2: Identify Supporting Reasons**
Ask: "Why should we do this?" (MECE)

```
We should acquire Company X
├── Strategic fit is strong
├── Financial returns are attractive
└── Risks are manageable
```

**Step 3: Add Evidence Under Each Reason**
Ask: "What proves this reason is true?"

```
We should acquire Company X for $500M
│
├── Strategic fit is strong
│   ├── Fills our capability gap in AI
│   ├── Gives access to 50 enterprise customers
│   └── Aligned with our 5-year technology roadmap
│
├── Financial returns are attractive
│   ├── IRR of 25% exceeds 15% hurdle rate
│   ├── Payback period of 3.2 years
│   └── Revenue synergies of $40M identified
│
└── Risks are manageable
    ├── Integration risk mitigated by retention packages
    ├── Technology risk low (mature platform)
    └── Regulatory approval likely (no overlap)
```

### Deductive vs. Inductive Logic Trees

**Deductive (Top-Down):**
Starts with a general principle, applies it to a specific case.

```
Major Premise: Markets with >15% growth are attractive
Minor Premise: Market X is growing at 22%
Conclusion: Market X is attractive
```

**Inductive (Bottom-Up):**
Starts with specific observations, builds to a general conclusion.

```
Observation 1: Customer A increased spend 40%
Observation 2: Customer B increased spend 35%
Observation 3: Customer C increased spend 50%
Conclusion: Our expansion strategy is working
```

**Consulting Application:**
- Use **deductive** when you have established frameworks or criteria
- Use **inductive** when you're synthesizing from evidence

### Connecting Issue Trees and Logic Trees

**Issue Tree → Analysis → Logic Tree → Recommendation**

```
PHASE 1: ISSUE TREE (Problem breakdown)
"Why is profitability declining?"
├── Revenue factors
│   └── [Analysis reveals: Price compression]
└── Cost factors
    └── [Analysis reveals: Labor costs up 20%]

PHASE 2: LOGIC TREE (Recommendation)
"We should focus on cost reduction, specifically labor"
├── Labor is the biggest cost driver (20% increase)
├── Labor efficiency is below benchmark (analysis)
└── We have clear levers to pull (automation, spans)
```

---

## Consulting Application

### How McKinsey Uses Issue Trees

**Day 1-2: Initial Issue Tree**
Team builds first-draft issue tree in kickoff session. This becomes the "work plan" structure.

**Each Branch = Workstream**
```
Client Question: How should we respond to digital disruption?
├── Branch 1: Digital threats → Workstream A (Market team)
├── Branch 2: Our capabilities → Workstream B (Operations team)
├── Branch 3: Investment options → Workstream C (Finance team)
└── Branch 4: Implementation → Workstream D (Change team)
```

**Weekly Updates**
Issue tree is updated as learning emerges. Branches get pruned, added, or refined.

### The "Pyramid" Connection

Issue trees break problems down (top → bottom).
Logic trees build recommendations up (bottom → top).
The Pyramid Principle structures the communication of the logic tree.

```
ISSUE TREE          ANALYSIS          LOGIC TREE          PYRAMID
(Break down)    →   (Test)      →    (Build up)     →   (Communicate)
```

### Ghost Trees

Before deep analysis, consultants create "ghost" issue trees—the structure they expect to find. This:
- Focuses data gathering
- Identifies gaps in thinking
- Enables parallel work before all data is in

---

## CEO Application

### Running Strategy Offsites

Use issue trees to structure strategy discussions:

**Before (Unstructured):**
"Let's discuss our strategy for next year."
→ Leads to rambling, circular conversation

**After (Issue Tree Structure):**
```
Strategic Planning Offsite Agenda

1. Where are we today? (Diagnosis)
   ├── Market position
   ├── Financial health
   └── Organizational capabilities

2. Where do we want to be? (Ambition)
   ├── Financial targets
   ├── Market position goals
   └── Capability requirements

3. How do we get there? (Strategy)
   ├── Organic growth initiatives
   ├── Inorganic opportunities
   └── Capability building

4. What could go wrong? (Risks)
   ├── Execution risks
   ├── Market risks
   └── Competitive risks
```

### Decision Making

Structure major decisions using logic trees:

**Decision: Should we expand to Europe?**

```
RECOMMENDATION: Yes, we should expand to Europe

├── Europe is attractive
│   ├── $2B addressable market
│   ├── Growing 12% annually
│   └── Less competitive than US market
│
├── We can win
│   ├── Our product fits European needs
│   ├── We have channel partnership options
│   └── Three successful competitors prove model works
│
└── Returns justify investment
    ├── NPV of $150M at 12% discount rate
    ├── Break-even in Year 3
    └── Option value for APAC expansion
```

### Delegating Analysis

Give teams issue trees, not vague questions:

**Vague:** "Can you look into our customer satisfaction issues?"

**Clear (with Issue Tree):**
```
Analyze customer satisfaction decline:

├── Is satisfaction actually declining?
│   ├── What do NPS trends show?
│   └── How do we compare to industry benchmark?
│
├── Where is the problem concentrated?
│   ├── By customer segment?
│   ├── By product line?
│   └── By geography?
│
└── What's driving the decline?
    ├── Product quality issues?
    ├── Service/support issues?
    └── Expectation-setting issues?

Deliverable: One-page summary with key findings and recommended actions
```

---

## Worked Example

### Situation
A software company's sales team is missing quota. The VP of Sales asks for help understanding why and what to do.

### Step 1: Build the Issue Tree (Diagnostic)

**Root Question:** Why is the sales team missing quota by 25%?

```
Why is sales team missing quota?
│
├── 1. QUOTA IS WRONG (target issue)
│   ├── Quota set based on faulty assumptions?
│   ├── Market opportunity smaller than believed?
│   └── Competitor landscape changed after quota set?
│
├── 2. PIPELINE IS INSUFFICIENT (lead generation)
│   ├── Marketing generating fewer leads?
│   ├── Lead quality declining?
│   └── SDR team underperforming?
│
├── 3. CONVERSION IS POOR (deal execution)
│   ├── Win rate declining?
│   │   ├── Losing more to competitors?
│   │   ├── Losing more to "no decision"?
│   │   └── Sales skills/training gap?
│   │
│   └── Deal sizes shrinking?
│       ├── Customers buying less?
│       └── Discounting increasing?
│
└── 4. CAPACITY IS LACKING (sales team)
    ├── Insufficient headcount?
    ├── Too many new/ramping reps?
    └── High turnover disrupting performance?
```

### Step 2: Prioritize and Analyze

Quick data review reveals:
- Quota was based on 30% market growth; actual was 12% ← Relevant
- Pipeline is actually up 15% ← Not the issue
- Win rate dropped from 25% to 18% ← Relevant
- Deal size stable ← Not the issue
- Team capacity adequate ← Not the issue

Focus analysis on: Quota methodology + Win rate decline

### Step 3: Deep Analysis on Priority Areas

**Win Rate Analysis:**
```
Win Rate Decline: 25% → 18%
│
├── Lost to Competitor A: Up 8 percentage points
│   └── Root cause: Their new AI feature
│
├── Lost to "No Decision": Up 3 percentage points
│   └── Root cause: Economic uncertainty, longer cycles
│
└── Lost to other: Flat
```

### Step 4: Build Logic Tree (Solution)

**Recommendation:** Adjust quota down 15% AND invest in AI feature to restore win rate

```
Adjust quota and invest in AI feature
│
├── Quota was set with flawed assumptions
│   ├── Market growth was 12%, not 30%
│   ├── Competitive dynamics changed (Competitor A)
│   └── Adjusting aligns quota with realistic opportunity
│
├── Win rate is recoverable
│   ├── Loss to Competitor A is driving decline
│   ├── Their advantage is a single feature (AI)
│   └── We can ship competitive feature in 6 months
│
└── This approach is better than alternatives
    ├── Firing reps doesn't fix the structural issue
    ├── Increasing pipeline without fixing win rate wastes resources
    └── Combined approach addresses root causes
```

---

## Common Mistakes

### 1. Root Question Too Vague
**Bad:** "What's wrong with sales?"
**Good:** "Why is win rate down 7 points in Enterprise segment?"

### 2. Not MECE at Each Level
**Check:** Can anything fit in two branches? Is anything missing?

### 3. Branches Don't Break Down Parent
**Bad:**
```
How to grow revenue?
├── Grow revenue in North America  ← Just restates parent
├── Grow revenue in Europe
```
**Good:**
```
How to grow revenue?
├── Increase price
├── Increase volume
└── Enter new markets
```

### 4. Wrong Depth
**Too Shallow:** Branches are still too broad to answer
**Too Deep:** Analysis paralysis, diminishing returns

**Right Depth:** When you reach questions that can be answered with available data/analysis.

### 5. Mixing Diagnostic and Solution Trees
Keep "Why?" trees separate from "How?" trees. First diagnose, then solve.

---

## Key Takeaways

1. **Issue trees break down problems** - Turn complex questions into answerable parts
2. **Logic trees build up arguments** - Support recommendations with evidence
3. **Always MECE** - Each level must be mutually exclusive and collectively exhaustive
4. **Start with root question** - Clear, specific, answerable
5. **Right depth matters** - Deep enough to be actionable, not deeper
6. **Trees evolve** - Update as you learn
7. **Trees enable delegation** - Each branch can be a workstream

---

## Practice Problems

### Problem 1: Build an Issue Tree
Your company's employee engagement scores dropped 15 points in the last survey. Build an issue tree to diagnose potential causes.

### Problem 2: Build a Logic Tree
You're recommending that your company invest $5M in a customer success team. Build a logic tree supporting this recommendation.

### Problem 3: Fix This Tree
What's wrong with this issue tree? Fix it.

```
Why are customers complaining?
├── Product quality issues
├── Customer service is slow
├── Customers have high expectations
├── Our product doesn't work well
└── Competitors set unrealistic benchmarks
```

---

## Further Reading

- **"The McKinsey Mind"** by Ethan Rasiel - Issue tree methodology
- **"Pyramid Principle"** by Barbara Minto - Logic tree communication
- **"Bulletproof Problem Solving"** by Conn & McLean - Modern tree-building techniques
- **Craft of Consulting** - Visual examples of trees in practice

---

*Next: [Pyramid Principle](05-pyramid-principle.md)*
