# A/B Testing

## Learning Objectives

- Design statistically valid experiments
- Calculate appropriate sample sizes
- Interpret statistical significance correctly
- Avoid common experimentation pitfalls
- Implement testing programs at scale
- Make data-driven decisions from test results

---

## Experimentation Fundamentals

### Why A/B Testing?

```
THE VALUE OF EXPERIMENTATION:
─────────────────────────────────────────────────────

CORRELATION vs. CAUSATION:
─────────────────────────────────────────────────────

Observation: Users who use feature X have 20% higher retention

Does feature X CAUSE higher retention?
OR
Do high-retention users CHOOSE to use feature X?

         Feature X ────?───► Retention
              │                  ▲
              │                  │
              └──── User Type ───┘

A/B Test: Randomly assign users to see feature X or not
          Now we can measure CAUSAL effect


BENEFITS OF A/B TESTING:
─────────────────────────────────────────────────────

1. Isolates causal impact
2. Quantifies effect size
3. Reduces decision risk
4. Settles debates with data
5. Enables iterative improvement

Google, Amazon, Netflix run thousands of tests annually
Small improvements × Large scale = Massive impact
```

### Experiment Structure

```
A/B TEST ANATOMY:
─────────────────────────────────────────────────────

                Total Traffic
                     │
                     ▼
        ┌────────────────────────┐
        │    RANDOMIZATION       │
        └───────────┬────────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
         ▼                     ▼
    ┌─────────┐           ┌─────────┐
    │ Control │           │Treatment│
    │  (A)    │           │  (B)    │
    │ 50%     │           │  50%    │
    │         │           │         │
    │ Current │           │   New   │
    │ Version │           │ Version │
    └────┬────┘           └────┬────┘
         │                     │
         ▼                     ▼
    ┌─────────┐           ┌─────────┐
    │ Measure │           │ Measure │
    │ Outcome │           │ Outcome │
    │  (2.5%) │           │ (2.8%)  │
    └─────────┘           └─────────┘
                    │
                    ▼
            Statistical Test:
            Is 2.8% > 2.5% real
            or just random noise?


KEY COMPONENTS:
─────────────────────────────────────────────────────

1. HYPOTHESIS
   H₀: No difference (Treatment = Control)
   H₁: There is a difference (Treatment ≠ Control)

2. RANDOMIZATION UNIT
   What gets randomly assigned?
   • User (most common)
   • Session
   • Page view
   • Device

3. METRICS
   Primary: The ONE metric that determines success
   Secondary: Supporting metrics for context
   Guardrail: Metrics that shouldn't degrade

4. SAMPLE SIZE & DURATION
   How many observations needed?
   How long to run the test?
```

---

## Statistical Significance

### Hypothesis Testing Framework

```
HYPOTHESIS TESTING:
─────────────────────────────────────────────────────

H₀ (Null):        No effect (control = treatment)
H₁ (Alternative): There is an effect

α (Alpha):        Significance level (typically 0.05)
                  Probability of false positive

p-value:          Probability of observing data
                  if H₀ is true

Decision Rule:
─────────────────────────────────────────────────────
If p-value < α: Reject H₀ (statistically significant)
If p-value ≥ α: Fail to reject H₀ (not significant)


VISUAL REPRESENTATION:
─────────────────────────────────────────────────────

Under Null Hypothesis (H₀):

Probability
    │
    │         ████
    │       ████████
    │     ████████████
    │   ████████████████
    │ ████████████████████
    │████████████████████████▓▓▓▓
    └────────────────────────┼────
                          Critical
                           Value

    Central area: Results consistent with H₀
    ▓▓▓ Tail (α): Reject H₀ if result falls here

If observed difference is in the tail → Significant
```

### Understanding p-values

```
P-VALUE INTERPRETATION:
─────────────────────────────────────────────────────

p-value = 0.03 means:

"If there truly were NO difference between versions,
 we would see a difference THIS large or larger
 only 3% of the time by random chance."

COMMON MISINTERPRETATIONS:
─────────────────────────────────────────────────────

WRONG: "There's a 3% chance the null is true"
RIGHT: "If null is true, 3% chance of this result"

WRONG: "97% probability that treatment is better"
RIGHT: "Evidence against null is strong"

WRONG: "Effect size is large because p is small"
RIGHT: "p-value says nothing about effect SIZE"


P-VALUE THRESHOLDS:
─────────────────────────────────────────────────────

p < 0.001   ★★★  Very strong evidence
p < 0.01    ★★   Strong evidence
p < 0.05    ★    Moderate evidence (standard)
p < 0.10    †    Weak evidence (marginal)
p ≥ 0.10         Insufficient evidence

Note: These are conventions, not magic numbers
      Context and effect size matter too
```

### Type I and Type II Errors

```
ERROR TYPES:
─────────────────────────────────────────────────────

                    Reality
                    ─────────────────────────
                    H₀ True      H₀ False
                    (No effect)  (Real effect)
                    ─────────────────────────
Decision  │ Don't   │ Correct    │ Type II    │
          │ Reject  │ (True      │ Error      │
          │ H₀      │ Negative)  │ (False     │
          │         │            │ Negative)  │
          │─────────┼────────────┼────────────│
          │ Reject  │ Type I     │ Correct    │
          │ H₀      │ Error      │ (True      │
          │         │ (False     │ Positive)  │
          │         │ Positive)  │            │
                    ─────────────────────────


TYPE I ERROR (False Positive): α
─────────────────────────────────────────────────────
• Conclude there's an effect when there isn't
• Launch a change that doesn't actually help
• Cost: Wasted development, potential harm
• Control: Set α (typically 5%)

TYPE II ERROR (False Negative): β
─────────────────────────────────────────────────────
• Fail to detect a real effect
• Don't launch a change that would have helped
• Cost: Missed opportunity
• Control: Increase sample size, power

POWER = 1 - β
─────────────────────────────────────────────────────
• Probability of detecting a real effect
• Standard: 80% power
• Higher power = larger sample needed
```

---

## Sample Size Calculation

### Key Parameters

```
SAMPLE SIZE FORMULA:
─────────────────────────────────────────────────────

For comparing two proportions (conversion rates):

n = 2 × [(Z_α/2 + Z_β)² × p(1-p)] / δ²

Where:
• n = sample size per group
• Z_α/2 = Z-value for significance (1.96 for α=0.05)
• Z_β = Z-value for power (0.84 for 80% power)
• p = baseline conversion rate
• δ = minimum detectable effect (MDE)


PARAMETER IMPACTS:
─────────────────────────────────────────────────────

                    Sample Size
                         │
Higher baseline rate ────┴──── Lower sample needed
Lower MDE ───────────────────► Higher sample needed
Higher power wanted ─────────► Higher sample needed
Lower alpha wanted ──────────► Higher sample needed


EXAMPLE CALCULATION:
─────────────────────────────────────────────────────

Baseline conversion: 5%
Minimum detectable effect: 10% relative (5% → 5.5%)
Significance: α = 0.05 (two-sided)
Power: 80%

n = 2 × [(1.96 + 0.84)² × 0.05 × 0.95] / (0.005)²
n = 2 × [7.84 × 0.0475] / 0.000025
n = 2 × 14,896
n ≈ 29,800 per group

Total sample needed: ~60,000 users
```

### Practical Considerations

```
SAMPLE SIZE PLANNING:
─────────────────────────────────────────────────────

QUESTION 1: What effect size do we care about?
─────────────────────────────────────────────────────
• 10% relative lift? 5%? 1%?
• Smaller effect = Larger sample = Longer test
• Balance: Statistical sensitivity vs. Practical need

Effect Size    Sample/Group    Duration (1K/day)
─────────────────────────────────────────────────────
20% relative   7,400          ~1 week
10% relative   29,800         ~1 month
5% relative    119,000        ~4 months


QUESTION 2: How long can we run the test?
─────────────────────────────────────────────────────
Daily traffic → Sample available → MDE achievable

Traffic  Duration  Total Sample  MDE (5% base)
─────────────────────────────────────────────────────
1K/day   1 week    7,000        ~23% relative
1K/day   1 month   30,000       ~10% relative
10K/day  1 week    70,000       ~7% relative


QUESTION 3: What's the baseline rate?
─────────────────────────────────────────────────────
• Rare events (1% conversion) need more samples
• Common events (50%) need fewer samples

Baseline Rate   Sample/Group (10% MDE, 80% power)
─────────────────────────────────────────────────────
1%              152,000
5%              29,800
10%             13,900
50%             3,100
```

---

## Experiment Design Best Practices

### Randomization

```
RANDOMIZATION PRINCIPLES:
─────────────────────────────────────────────────────

WHY RANDOMIZE?
─────────────────────────────────────────────────────
• Eliminates selection bias
• Balances unknown confounders
• Enables causal inference

RANDOMIZATION UNIT:
─────────────────────────────────────────────────────

Unit            Pros                 Cons
─────────────────────────────────────────────────────
User            Consistent UX        Longer data
                across sessions      collection

Session         Faster data          Inconsistent
                collection           experience

Page View       Maximum sample       Very noisy,
                                    confusing UX


STRATIFIED RANDOMIZATION:
─────────────────────────────────────────────────────

Ensure balance on important segments

Example: Mobile vs. Desktop

Random Only:           Stratified:
─────────────────────  ─────────────────────
Control  Treatment     Control  Treatment
─────────────────────  ─────────────────────
Mobile:   45%   55%    Mobile:   50%   50%
Desktop:  55%   45%    Desktop:  50%   50%

Stratified ensures each segment is balanced
```

### Common Pitfalls

```
A/B TESTING PITFALLS:
─────────────────────────────────────────────────────

1. PEEKING (Early stopping)
─────────────────────────────────────────────────────

DON'T: Check results daily and stop when significant

         p-value over time
    1.0  │●
         │ ●
    0.5  │  ●    ●
         │   ●  ● ●   ●    ← Multiple looks inflate
    0.1  │──●●───────────── false positive rate
   0.05  │───────●──●──●───
         └──────────────────
          Day 1  Day 7  Day 14

Peeking inflates Type I error from 5% to >20%!

SOLUTION: Pre-specify sample size and analysis time
          OR use sequential testing methods


2. MULTIPLE COMPARISONS
─────────────────────────────────────────────────────

Testing many variants or metrics increases false positives

5 metrics at α=0.05 each:
P(at least one false positive) = 1 - (0.95)⁵ = 23%!

SOLUTION: Bonferroni correction: α_adj = α / n
          Or: Pre-specify ONE primary metric


3. SURVIVORSHIP BIAS
─────────────────────────────────────────────────────

Only analyzing users who completed the flow

Bad: Compare checkout completion among those who
     reached checkout (ignores those who bounced)

Good: Compare end-to-end conversion from entry


4. NOVELTY EFFECT
─────────────────────────────────────────────────────

New design gets more clicks... temporarily

Week 1: Treatment +15%
Week 4: Treatment +2%

SOLUTION: Run tests longer, monitor time trends
```

### Test Duration Guidelines

```
HOW LONG TO RUN TESTS:
─────────────────────────────────────────────────────

MINIMUM DURATION:
─────────────────────────────────────────────────────
• At least 1 full week (capture day-of-week effects)
• Better: 2 full weeks
• Ideal: 1 full business cycle

FACTORS AFFECTING DURATION:
─────────────────────────────────────────────────────

Factor               Impact on Duration
─────────────────────────────────────────────────────
Lower traffic        Longer (need more time for samples)
Smaller effect       Longer (need more precision)
Higher power         Longer (more samples needed)
Weekly patterns      Min 1 week (cover all days)
Monthly patterns     Min 1 month (cover full cycle)


WHEN TO STOP:
─────────────────────────────────────────────────────

STOP when ALL conditions met:
□ Reached pre-determined sample size
□ Achieved statistical significance OR
  conclusively showed no practical effect
□ Completed minimum duration (1-2 weeks)
□ Results are stable (not still changing)

DON'T stop just because:
✗ Result looks good at day 3
✗ You're impatient
✗ Someone needs a decision
```

---

## Analysis and Interpretation

### Statistical Tests

```
CHOOSING THE RIGHT TEST:
─────────────────────────────────────────────────────

PROPORTIONS (Conversion rate, CTR):
─────────────────────────────────────────────────────
• Chi-square test
• Z-test for proportions

Example: Control 5.0% vs Treatment 5.5%
         Is this difference significant?


MEANS (Revenue, time on site):
─────────────────────────────────────────────────────
• t-test (assumes normal distribution)
• Mann-Whitney U (non-parametric)

Example: Control $45 avg vs Treatment $48 avg
         Is this difference significant?


PRACTICAL EXAMPLE:
─────────────────────────────────────────────────────

Test: New checkout button color

Results:
              Control     Treatment
─────────────────────────────────────────────────────
Sample        50,000      50,000
Conversions   2,500       2,750
Rate          5.0%        5.5%

Z-test:
z = (0.055 - 0.050) / √[0.0525 × 0.9475 × (1/50000 + 1/50000)]
z = 0.005 / 0.00141 = 3.54

p-value < 0.001 ★★★

Conclusion: Statistically significant improvement
            95% CI for lift: [0.22%, 0.78%]
            Most likely lift: ~0.5% absolute (10% relative)
```

### Practical vs. Statistical Significance

```
EFFECT SIZE MATTERS:
─────────────────────────────────────────────────────

Scenario A: Large sample, tiny effect
─────────────────────────────────────────────────────
Control: 10.00%
Treatment: 10.02%
Sample: 10 million
Result: p < 0.001 ★★★

Statistically significant? Yes!
Practically significant? No! (0.2% relative lift)


Scenario B: Small sample, meaningful effect
─────────────────────────────────────────────────────
Control: 10.0%
Treatment: 11.5%
Sample: 5,000
Result: p = 0.08

Statistically significant? No (marginally)
Practically significant? Yes! (15% relative lift)

Action: Run longer to confirm


INTERPRETATION FRAMEWORK:
─────────────────────────────────────────────────────

                Stat Significant
                Yes         No
             ┌───────────┬───────────┐
Practically  │   WIN!    │ Run longer│
Significant  │   Launch  │ or accept │
  Yes        │           │ some risk │
             ├───────────┼───────────┤
Practically  │ Real but  │ No effect │
Significant  │ too small │ Don't     │
  No         │ Don't     │ launch    │
             │ launch    │           │
             └───────────┴───────────┘
```

---

## Scaling Experimentation

### Testing Program Maturity

```
EXPERIMENTATION MATURITY MODEL:
─────────────────────────────────────────────────────

LEVEL 1: AD HOC
─────────────────────────────────────────────────────
• Occasional tests
• No standardization
• Results often inconclusive
• Low velocity (5-10 tests/year)

LEVEL 2: EMERGING
─────────────────────────────────────────────────────
• Regular testing cadence
• Basic documentation
• Dedicated owner
• Medium velocity (20-50 tests/year)

LEVEL 3: STRUCTURED
─────────────────────────────────────────────────────
• Testing platform/tools
• Standard methodology
• Shared knowledge base
• High velocity (100+ tests/year)

LEVEL 4: OPTIMIZED
─────────────────────────────────────────────────────
• Automated analysis
• ML-powered optimization
• Culture of experimentation
• Very high velocity (1000+ tests/year)


BUILDING BLOCKS:
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│              TESTING INFRASTRUCTURE              │
├──────────────────────────────────────────────────┤
│                                                  │
│  [Randomization]  [Assignment]  [Tracking]      │
│       │               │             │           │
│       └───────────────┴─────────────┘           │
│                       │                         │
│                       ▼                         │
│              ┌─────────────────┐                │
│              │    Analysis     │                │
│              │    Pipeline     │                │
│              └─────────────────┘                │
│                       │                         │
│                       ▼                         │
│              ┌─────────────────┐                │
│              │   Knowledge     │                │
│              │   Repository    │                │
│              └─────────────────┘                │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Multi-Armed Bandits

```
EXPLORE vs. EXPLOIT:
─────────────────────────────────────────────────────

Traditional A/B Test:
• 50/50 split throughout
• "Waste" traffic on worse variant
• Best for: Learning true effect

Multi-Armed Bandit:
• Dynamic allocation
• More traffic to winning variant
• Best for: Optimizing outcomes

BANDIT APPROACH:
─────────────────────────────────────────────────────

Day 1:  A ████████████ (50%)  B ████████████ (50%)
Day 3:  A ████████ (40%)      B ████████████████ (60%)
Day 7:  A ████ (20%)          B ████████████████████████ (80%)
Day 14: A ██ (10%)            B ██████████████████████████████ (90%)

As B shows higher conversion, allocate more traffic to B

WHEN TO USE BANDITS:
─────────────────────────────────────────────────────
• Short-term promotions
• Headlines, creative testing
• When learning precise effect is less important
• High opportunity cost of suboptimal assignment

WHEN TO USE TRADITIONAL A/B:
─────────────────────────────────────────────────────
• Need accurate effect estimates
• Long-term product changes
• Building institutional knowledge
• Low opportunity cost of even split
```

---

## Key Takeaways

1. **A/B tests establish causation** - Correlation alone isn't enough
2. **Calculate sample size upfront** - Don't peek or stop early
3. **p-value is not probability of truth** - It's probability of data given no effect
4. **Effect size matters** - Statistical significance isn't practical significance
5. **One primary metric** - Multiple comparisons inflate false positives
6. **Run for full weeks** - Capture day-of-week patterns
7. **Build a testing culture** - Systematic experimentation compounds

---

## Practice Exercises

### Exercise 1: Sample Size Calculation
Your website has 10,000 daily visitors with 3% conversion rate. You want to detect a 15% relative improvement (3% → 3.45%) with 80% power and 5% significance. How long must you run the test?

### Exercise 2: Test Interpretation
An A/B test shows Treatment conversion of 4.2% vs Control 4.0%. With 20,000 users per group, p-value is 0.12. What do you conclude? What do you recommend?

### Exercise 3: Experiment Design
Design an A/B test for a new onboarding flow. Specify:
- Hypothesis
- Primary metric
- Guardrail metrics
- Randomization unit
- Minimum sample size
- Test duration

### Exercise 4: Error Analysis
You ran 20 A/B tests last quarter. 4 showed significant results at p < 0.05 and were launched. If all null hypotheses were actually true, how many false positives would you expect? What does this imply about your testing program?

---

*Next: [Analytics Implementation](07-analytics-implementation.md)*
