# Game Theory

## Learning Objectives

- Understand strategic interdependence and its implications
- Apply Nash equilibrium to competitive situations
- Recognize common game structures (Prisoner's Dilemma, Coordination, etc.)
- Use game theory for competitive strategy and negotiations
- Understand how repeated games differ from one-shot games

---

## Introduction

Game theory analyzes strategic interactions where your outcome depends not just on your choices, but on others' choices too. It's the mathematics of strategic thinking.

For CEOs, game theory is essential for understanding competition, negotiation, and any situation where you must anticipate how others will respond to your moves.

---

## Core Concepts

### What Makes a Game

**Elements of a Game:**
1. **Players:** Who is involved?
2. **Strategies:** What choices does each player have?
3. **Payoffs:** What outcomes result from each combination of choices?
4. **Information:** What does each player know?
5. **Timing:** Do players move simultaneously or sequentially?

### The Prisoner's Dilemma

The most famous game in economics—and the most common in business.

**Setup:**
Two prisoners are interrogated separately. Each can confess or stay silent.

**Payoff Matrix:**

|  | Prisoner B: Silent | Prisoner B: Confess |
|---|-------------------|---------------------|
| **Prisoner A: Silent** | A: -1, B: -1 | A: -10, B: 0 |
| **Prisoner A: Confess** | A: 0, B: -10 | A: -5, B: -5 |

*(Payoffs are years in prison; negative = bad)*

**Analysis:**
- If B stays silent, A does better confessing (0 vs. -1)
- If B confesses, A does better confessing (-5 vs. -10)
- Confessing is **dominant** for A (better regardless of B's choice)
- Same logic applies to B
- **Both confess** (-5, -5) even though both silent (-1, -1) is better for both

**Key Insight:** Individual rationality leads to collective irrationality.

### Nash Equilibrium

**Definition:** A Nash equilibrium is a set of strategies where no player can improve their payoff by unilaterally changing their strategy.

"Given what everyone else is doing, no one wants to change."

**In Prisoner's Dilemma:** (Confess, Confess) is Nash equilibrium
- Given B confesses, A doesn't want to switch to silent
- Given A confesses, B doesn't want to switch to silent

**Finding Nash Equilibrium:**
1. For each player, identify best response to each of opponent's strategies
2. Nash equilibrium is where best responses coincide

### Dominant Strategies

**Dominant Strategy:** A strategy that is best regardless of what others do.

**Types:**
- **Strictly dominant:** Always better
- **Weakly dominant:** Never worse, sometimes better

If all players have dominant strategies, the game is straightforward—play your dominant strategy.

**But most games don't have dominant strategies.** You must think about what others will do.

### Business Applications of Prisoner's Dilemma

**Price Wars:**
|  | Competitor: High Price | Competitor: Low Price |
|---|----------------------|---------------------|
| **You: High Price** | $10M, $10M | $2M, $12M |
| **You: Low Price** | $12M, $2M | $5M, $5M |

Both firms pricing low is Nash equilibrium, but both pricing high is better for both. This explains why oligopolies want to avoid price wars.

**Advertising Wars:**
|  | Competitor: Don't Advertise | Competitor: Advertise |
|---|---------------------------|----------------------|
| **You: Don't Advertise** | $8M, $8M | $4M, $10M |
| **You: Advertise** | $10M, $4M | $6M, $6M |

Both advertise (Nash equilibrium), but neither gains share—advertising is just a cost.

### Coordination Games

Games where players want to coordinate but may fail.

**Technology Standards:**
|  | Firm B: Standard X | Firm B: Standard Y |
|---|-------------------|-------------------|
| **Firm A: Standard X** | $10M, $10M | $0, $0 |
| **Firm A: Standard Y** | $0, $0 | $10M, $10M |

Two Nash equilibria: (X, X) and (Y, Y). Both prefer to coordinate, but on which?

**Battle of the Sexes:**
|  | Partner: Opera | Partner: Football |
|---|---------------|------------------|
| **You: Opera** | 3, 2 | 0, 0 |
| **You: Football** | 0, 0 | 2, 3 |

Both prefer to be together but have different preferences for where. Communication and negotiation become important.

### Chicken (Hawk-Dove) Game

A game about escalation and commitment.

|  | Opponent: Swerve | Opponent: Straight |
|---|-----------------|-------------------|
| **You: Swerve** | 0, 0 | -1, +1 |
| **You: Straight** | +1, -1 | -10, -10 |

Two Nash equilibria: (Swerve, Straight) and (Straight, Swerve).

**Business Application:** Market entry chicken
- If both enter an unprofitable market, both lose big
- If one enters alone, they win
- Who will blink?

**Strategic Implications:**
- Credible commitment matters (burning bridges)
- Reputation for toughness has value
- Escalation is risky

### Sequential Games

Many business situations involve sequential moves, not simultaneous.

**Game Tree for Market Entry:**

```
                    Incumbent
                   /          \
               Fight         Accommodate
              /     \       /          \
         Entrant  Entrant  Entrant    Entrant
         enters    stays   enters      stays
         (-2,-2)   (0,5)   (3,3)      (0,5)
```

**Backward Induction:** Solve from the end backward.
- If incumbent accommodates, entrant enters (3 > 0)
- If incumbent fights, entrant stays out (0 > -2)
- Incumbent payoffs: Fight and entrant stays = 5; Accommodate and entrant enters = 3
- Incumbent prefers to fight... but is the threat credible?

**Credibility Problem:** Once entrant is in, fighting gives incumbent -2 vs. accommodating gives 3. The threat to fight may not be credible.

### Repeated Games

Most business relationships are repeated, not one-shot. This changes everything.

**In Repeated Prisoner's Dilemma:**
- Cooperation can be sustained through reputation
- "Tit for tat" strategy: cooperate first, then mirror opponent's previous move
- Threat of future punishment deters cheating

**Folk Theorem:** In infinitely repeated games with patient players, cooperation can be sustained as an equilibrium.

**Business Implication:**
- In ongoing relationships, cooperation is possible
- Reputation matters
- Short-term opportunism has long-term costs
- Final periods are dangerous (no future to protect)

### Commitment and Credibility

**Credible threats and promises require:**
1. **Capability:** Can you actually follow through?
2. **Incentive:** Will you want to follow through when the time comes?

**Making Commitments Credible:**
- **Burn bridges:** Eliminate your ability to back down
- **Reputation:** Build track record
- **Contracts:** Legal enforcement
- **Public statements:** Social cost of reneging

---

## Consulting Application

### Competitive Analysis Framework

**Step 1: Identify the Game**
- Who are the players?
- What are their strategies?
- What are the payoffs?
- Is it simultaneous or sequential?
- Is it one-shot or repeated?

**Step 2: Find Equilibrium**
- What is the Nash equilibrium?
- Is there a dominant strategy?
- Are there multiple equilibria?

**Step 3: Strategic Implications**
- Is the equilibrium good or bad for us?
- Can we change the game?
- What commitments would help?

### Changing the Game

If you don't like the equilibrium, change the game:

| Tactic | How It Works |
|--------|--------------|
| Commitment | Make certain strategies incredible |
| Reputation | Change opponents' beliefs about your payoffs |
| Contracts | Change payoffs through legal penalties |
| Side payments | Change payoffs through transfers |
| Sequencing | Move first to establish facts on ground |
| Communication | Coordinate on better equilibrium |

---

## CEO Application

### Competitive Strategy

**Pricing Decisions:**
Don't just ask "What price maximizes my profit?"
Ask "What price maximizes my profit given how competitors will respond?"

**Capacity Decisions:**
Building capacity signals commitment. Excess capacity can deter entry.

**Investment Decisions:**
Early investment can preempt competition (first-mover advantage through commitment).

### Negotiations

**Negotiations are games.** Apply game theory:

1. **Know your BATNA** (Best Alternative to Negotiated Agreement) - This is your reservation price
2. **Know their BATNA** - This is their reservation price
3. **ZOPA** (Zone of Possible Agreement) exists if BATNAs overlap
4. **Credible threats** matter - Only threats you'd actually carry out influence behavior

### Managing Competition

**Avoid Prisoner's Dilemmas:**
- Seek differentiation (change the game)
- Build relationships (repeated game)
- Communicate (coordinate better outcomes)
- Create switching costs (change payoffs)

**In Coordination Games:**
- Move first and communicate clearly
- Establish standards
- Build coalitions

**In Chicken Games:**
- Demonstrate commitment
- Build reputation for toughness
- But know when to back down (avoid mutual destruction)

---

## Worked Example

### Situation
Two airlines serve a regional route. Each is deciding whether to cut prices.

**Payoff Matrix (Quarterly Profit in $M):**

|  | Airline B: Maintain Price | Airline B: Cut Price |
|---|--------------------------|---------------------|
| **Airline A: Maintain Price** | $5M, $5M | $2M, $6M |
| **Airline A: Cut Price** | $6M, $2M | $3M, $3M |

### Analysis

**Step 1: Identify Dominant Strategies**

For Airline A:
- If B maintains: Cut ($6M) > Maintain ($5M)
- If B cuts: Cut ($3M) > Maintain ($2M)
- Cut is dominant for A

For Airline B:
- If A maintains: Cut ($6M) > Maintain ($5M)
- If A cuts: Cut ($3M) > Maintain ($2M)
- Cut is dominant for B

**Step 2: Find Nash Equilibrium**

(Cut, Cut) with payoffs ($3M, $3M) is the Nash equilibrium.

**Step 3: Assess the Situation**

This is a Prisoner's Dilemma. Both would prefer ($5M, $5M) but end up at ($3M, $3M).

### Strategic Options

**Option 1: Accept the Equilibrium**
Compete on price, earn $3M. Focus on cost efficiency.

**Option 2: Tacit Coordination**
Signal pricing intentions. Match competitor's prices. Works better in repeated games.

**Option 3: Differentiation**
Change the game by making products less substitutable. Frequent flyer programs, better service, different routes.

**Option 4: Capacity Discipline**
Reduce capacity to make maintain-price credible. Less incentive to cut if planes are full.

**Option 5: Communication (where legal)**
Price leadership where one firm sets and others follow.

---

## Common Mistakes

### 1. Ignoring Competitor Response
**Mistake:** "If we cut prices, we'll gain share."
**Reality:** Competitors respond. You may gain nothing and destroy margin.

### 2. Assuming One-Shot Games
**Mistake:** "We should defect because it's profitable today."
**Reality:** Business relationships are repeated. Today's defection affects tomorrow's cooperation.

### 3. Making Incredible Threats
**Mistake:** "We'll cut prices to zero if they enter!"
**Reality:** If it's not credible, it won't deter. Competitors know you won't destroy yourself.

### 4. Missing the Game
**Mistake:** "This is a simple pricing decision."
**Reality:** Many decisions are strategic games. Identify when game theory applies.

### 5. Ignoring Multiple Equilibria
**Mistake:** "There's one right answer."
**Reality:** Some games have multiple equilibria. Coordination and communication matter.

---

## Key Takeaways

1. **Strategic interdependence means your outcome depends on others' choices** - Think about their moves
2. **Nash equilibrium: No one wants to change unilaterally** - This is where games settle
3. **Prisoner's Dilemma is everywhere in business** - Individual rationality ≠ collective rationality
4. **Repeated games enable cooperation** - Reputation and future matter
5. **Credibility makes threats and promises work** - Commitment devices help
6. **You can change the game** - Don't just play; alter the structure
7. **First understand the game, then play it** - Identify players, strategies, payoffs, timing

---

## Practice Problems

### Problem 1: Equilibrium Finding
Two firms are choosing between high and low advertising:

|  | Firm B: Low Ad | Firm B: High Ad |
|---|---------------|-----------------|
| **Firm A: Low Ad** | $4M, $4M | $1M, $5M |
| **Firm A: High Ad** | $5M, $1M | $2M, $2M |

Find the Nash equilibrium. Is this a Prisoner's Dilemma?

### Problem 2: Sequential Game
An incumbent monopolist faces a potential entrant. If the entrant enters, incumbent can fight (costly for both) or accommodate (split market). Draw the game tree and solve using backward induction. What is the subgame perfect equilibrium?

### Problem 3: Commitment Strategy
You're entering a market where the incumbent has threatened to cut prices to drive you out. What strategies could make this threat non-credible? What could the incumbent do to make it credible?

---

## Further Reading

- **"The Art of Strategy"** by Dixit & Nalebuff - Accessible game theory
- **"Co-opetition"** by Brandenburger & Nalebuff - Business applications
- **"Thinking Strategically"** by Dixit & Nalebuff - Classic introduction
- **"Game Theory for Applied Economists"** by Gibbons - More technical

---

*Next: [Market Failures](09-market-failures.md)*
