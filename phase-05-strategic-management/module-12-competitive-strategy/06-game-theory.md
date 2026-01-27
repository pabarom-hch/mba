# Game Theory in Competitive Strategy

## Learning Objectives

- Apply game theory concepts to strategic decisions
- Analyze Nash equilibrium in competitive situations
- Understand prisoner's dilemma and cooperation dynamics
- Design strategies for repeated games
- Use game theory to predict competitor behavior

---

## Introduction

Game theory provides a rigorous framework for analyzing strategic interactions where the outcome depends on the choices of multiple decision-makers. In business, competitors, suppliers, and customers are all strategic players whose actions affect your results. Understanding game theory enables better prediction of competitor behavior and more sophisticated strategy design.

---

## Fundamentals of Game Theory

### Basic Concepts

```
KEY DEFINITIONS:
─────────────────────────────────────────────────────
GAME: Strategic situation with multiple players

PLAYERS: Decision-makers in the game
         (firms, individuals, governments)

STRATEGIES: Actions available to each player

PAYOFFS: Outcomes for each combination of strategies

EQUILIBRIUM: Stable outcome where no player wants to
             change strategy given others' strategies
```

### Types of Games

```
SIMULTANEOUS VS. SEQUENTIAL:
─────────────────────────────────────────────────────
Simultaneous: Players choose without knowing others' choices
              Example: Price setting, sealed bid auctions

Sequential: Players move in order, observing prior moves
            Example: Market entry, chess

ZERO-SUM VS. NON-ZERO-SUM:
─────────────────────────────────────────────────────
Zero-sum: One player's gain = another's loss
          Example: Market share in mature market

Non-zero-sum: Total payoffs can vary
              Example: Industry standards, cooperation

ONE-SHOT VS. REPEATED:
─────────────────────────────────────────────────────
One-shot: Single interaction
          Example: One-time negotiation

Repeated: Multiple interactions over time
          Example: Ongoing competitive rivalry
```

---

## The Prisoner's Dilemma

### Classic Setup

```
THE SCENARIO:
─────────────────────────────────────────────────────
Two prisoners, arrested for crime
Cannot communicate
Each must choose: Confess or Stay Silent

PAYOFF MATRIX (Years in Prison):
─────────────────────────────────────────────────────
                    PRISONER B
                    Silent    Confess
        ┌───────────┬─────────┬─────────┐
        │ Silent    │  1, 1   │  10, 0  │
Prisoner├───────────┼─────────┼─────────┤
   A    │ Confess   │  0, 10  │  5, 5   │
        └───────────┴─────────┴─────────┘

(First number = A's payoff, Second = B's payoff)

ANALYSIS:
─────────────────────────────────────────────────────
If B stays silent:
  A silent = 1 year
  A confess = 0 years  ← A prefers to confess

If B confesses:
  A silent = 10 years
  A confess = 5 years  ← A prefers to confess

CONFESS is DOMINANT STRATEGY for both!
Both confess → 5 years each
But: Both silent would be 1 year each (better!)

EQUILIBRIUM IS NOT OPTIMAL for players
```

### Business Applications

```
PRICE WAR DILEMMA:
─────────────────────────────────────────────────────
Two airlines compete on route
Each chooses: High price or Low price

PAYOFF MATRIX (Profit in $M):
─────────────────────────────────────────────────────
                    AIRLINE B
                   High     Low
        ┌─────────┬─────────┬─────────┐
        │  High   │ 50, 50  │ 10, 60  │
Airline ├─────────┼─────────┼─────────┤
   A    │  Low    │ 60, 10  │ 20, 20  │
        └─────────┴─────────┴─────────┘

Same structure as Prisoner's Dilemma!
Dominant strategy: Low price
Equilibrium: Both low → $20M each
But: Both high would yield $50M each

THIS EXPLAINS PRICE WARS
─────────────────────────────────────────────────────
Individual incentive to cut price
But collective result is worse for all
Dilemma: How to achieve cooperation?
```

---

## Nash Equilibrium

### Definition and Identification

```
NASH EQUILIBRIUM:
─────────────────────────────────────────────────────
Set of strategies where no player can improve
their payoff by unilaterally changing strategy,
given what other players are doing

FINDING NASH EQUILIBRIUM:
─────────────────────────────────────────────────────
1. For each strategy of Player B:
   Find Player A's best response

2. For each strategy of Player A:
   Find Player B's best response

3. Nash Equilibrium = Where best responses intersect
```

### Examples

```
COORDINATION GAME:
─────────────────────────────────────────────────────
Two firms choosing technology standard

                    FIRM B
                   Beta    VHS
        ┌─────────┬─────────┬─────────┐
        │  Beta   │ 10, 10  │  0, 0   │
 FIRM A ├─────────┼─────────┼─────────┤
        │  VHS    │  0, 0   │ 10, 10  │
        └─────────┴─────────┴─────────┘

Two Nash Equilibria:
• Both Beta (10, 10)
• Both VHS (10, 10)

Challenge: Which equilibrium will emerge?
Depends on: History, signaling, first-mover

CHICKEN GAME:
─────────────────────────────────────────────────────
Two firms considering market entry

                    FIRM B
                   Enter   Stay Out
        ┌─────────┬─────────┬─────────┐
        │ Enter   │ -5, -5  │ 10, 0   │
 FIRM A ├─────────┼─────────┼─────────┤
        │Stay Out │  0, 10  │  0, 0   │
        └─────────┴─────────┴─────────┘

Two Nash Equilibria:
• A enters, B stays out (10, 0)
• B enters, A stays out (0, 10)

Challenge: Who "wins" depends on commitment
```

---

## Repeated Games

### Cooperation Through Repetition

```
THE INSIGHT:
─────────────────────────────────────────────────────
In one-shot games: Defection often dominates
In repeated games: Cooperation can emerge

WHY?
─────────────────────────────────────────────────────
Future matters
Defection today → Retaliation tomorrow
Present value of cooperation > One-time defection gain
```

### Strategies for Repeated Games

```
TIT-FOR-TAT:
─────────────────────────────────────────────────────
Round 1: Cooperate
Round 2+: Do whatever opponent did last round

Properties:
• Nice (starts cooperating)
• Retaliatory (punishes defection)
• Forgiving (returns to cooperation)
• Clear (easy to understand)

In tournaments: Often outperforms complex strategies

GRIM TRIGGER:
─────────────────────────────────────────────────────
Cooperate until opponent defects
Then defect forever

Properties:
• Strong punishment threat
• No forgiveness
• Credibility may be questioned

FOLK THEOREM:
─────────────────────────────────────────────────────
In infinitely repeated games with sufficient patience,
any outcome where players get at least their
"minimax" payoff can be sustained as equilibrium

Implication: Many equilibria possible in repeated games
             Depends on discount rate, strategies
```

### Business Implications

```
SUSTAINING COOPERATION:
─────────────────────────────────────────────────────
1. Increase future importance
   • Long-term relationships
   • Reputation considerations
   • Exit costs

2. Improve observability
   • Transparent pricing
   • Industry associations
   • Price leadership

3. Increase interaction frequency
   • More opportunities to punish/reward
   • Faster feedback loops

4. Reduce number of players
   • Cooperation harder with many players
   • Consolidation can help

5. Reduce asymmetries
   • Similar firms cooperate better
   • Different incentives create problems
```

---

## Sequential Games

### Decision Trees

```
GAME TREE (Extensive Form):
─────────────────────────────────────────────────────
Market Entry Game:

                     Entrant
                    /      \
               Enter        Stay Out
                 |             |
              Incumbent      (0, 20)
              /       \
         Fight      Accommodate
           |             |
        (-5, -5)      (5, 10)

Reading: (Entrant payoff, Incumbent payoff)

BACKWARD INDUCTION:
─────────────────────────────────────────────────────
Start at end, work backward

If Entrant enters:
  Incumbent: Fight (-5) vs Accommodate (10) → Accommodate

Knowing this:
  Entrant: Stay out (0) vs Enter (5) → Enter

EQUILIBRIUM: Enter, Accommodate
             Payoffs: (5, 10)
```

### Commitment in Sequential Games

```
MAKING THREATS CREDIBLE:
─────────────────────────────────────────────────────
Problem: Incumbent's threat to fight not credible
         After entry, accommodation is optimal

Solution: COMMITMENT
─────────────────────────────────────────────────────
• Build excess capacity (sunk cost)
• Reputation for aggression
• Contractual obligations
• Organizational structure

                     Entrant
                    /      \
               Enter        Stay Out
                 |             |
              Incumbent      (0, 20)
              (with capacity)
              /       \
         Fight      Accommodate
           |             |
        (2, -5)       (5, 10)

Now Fight is credible (2 > 5 not true, but capacity changes payoffs)
With commitment: Stay out (0, 20)
```

---

## Strategic Moves

### Types of Strategic Moves

```
UNCONDITIONAL MOVES:
─────────────────────────────────────────────────────
Commitment: "I will do X regardless"
            Burning bridges, sunk investments
            Changes game by eliminating your options

CONDITIONAL MOVES:
─────────────────────────────────────────────────────
Threat: "If you do X, I will do Y (which hurts you)"
        Must be credible
        Aims to deter opponent action

Promise: "If you do X, I will do Y (which helps you)"
         Aims to encourage opponent action
         Must be credible

WARNING: Announcing you'll do what you'd do anyway
         (not a strategic move, just information)

ASSURANCE: Promise to do something in opponent's interest
           if they cooperate
```

### Commitment Examples

```
COMMITMENT TACTICS:
─────────────────────────────────────────────────────
1. Contracts
   • Exclusive dealing agreements
   • Most-favored-customer clauses
   • Binding price commitments

2. Reputation
   • Track record of following through
   • Public statements by CEO
   • Brand promises

3. Organization
   • Delegate to agents with different incentives
   • Sales compensation based on volume
   • Create internal pressures

4. Burning bridges
   • Sunk investments
   • Public commitments
   • Eliminating retreat options
```

---

## Coalitions and Cooperation

### N-Person Games

```
CHALLENGES WITH MULTIPLE PLAYERS:
─────────────────────────────────────────────────────
• Coordination more difficult
• Free-rider problems
• Coalition formation
• Detecting defection harder

COALITION FORMATION:
─────────────────────────────────────────────────────
Some players may form alliances
Divide payoffs within coalition
Excludes others

Examples:
• OPEC (cartel)
• Industry associations
• Strategic alliances
• Joint ventures
```

### Cooperative Game Theory

```
CHARACTERISTIC FUNCTION:
─────────────────────────────────────────────────────
v(S) = Value that coalition S can guarantee

Example: Three firms considering joint venture
v({A}) = 10  (A alone)
v({B}) = 10  (B alone)
v({C}) = 10  (C alone)
v({A,B}) = 30 (A and B together)
v({A,C}) = 25
v({B,C}) = 25
v({A,B,C}) = 40 (all three)

Question: How should 40 be divided?

SHAPLEY VALUE: Fair division based on marginal contributions
```

---

## Applications to Business Strategy

### Price Competition

```
BERTRAND COMPETITION:
─────────────────────────────────────────────────────
Firms compete on price simultaneously
Identical products

Result: Price = Marginal cost (zero profit)
Why: Any price above MC, competitor undercuts

COURNOT COMPETITION:
─────────────────────────────────────────────────────
Firms compete on quantity simultaneously

Result: Price > MC, positive profits
Depends on number of firms

TACIT COLLUSION:
─────────────────────────────────────────────────────
Firms maintain high prices without explicit agreement
Enabled by:
• Repeated interaction
• Observable prices
• Similar cost structures
• Credible punishment
```

### Entry Deterrence

```
LIMIT PRICING:
─────────────────────────────────────────────────────
Keep price low to signal low costs
Deter entry by reducing expected profits

CAPACITY COMMITMENT:
─────────────────────────────────────────────────────
Build excess capacity as entry deterrent
Signal willingness to flood market

STRATEGIC R&D:
─────────────────────────────────────────────────────
Patent around technologies
Raise entry costs for followers
```

---

## Key Takeaways

1. **Games are strategic interactions** - Outcomes depend on all players
2. **Nash equilibrium is stability concept** - No unilateral improvement possible
3. **Prisoner's dilemma explains many price wars** - Rational individual behavior leads to poor collective outcome
4. **Repetition enables cooperation** - Future matters, retaliation possible
5. **Sequential games require backward induction** - Anticipate responses
6. **Commitment changes the game** - Credible commitments shift equilibrium
7. **Multiple equilibria are common** - History and signaling determine selection
8. **Cooperation is achievable but fragile** - Requires right conditions

---

## Practice Problems

### Problem 1: Payoff Matrix
Create a payoff matrix for two ride-sharing companies deciding whether to offer subsidized rides. Identify Nash equilibrium(s).

### Problem 2: Repeated Game
Two competitors have been in a tacit pricing agreement. One defects with a price cut. Using tit-for-tat, predict the next five periods.

### Problem 3: Sequential Entry
Draw a game tree for a market where an entrant decides first, then incumbent decides whether to fight or accommodate. Solve by backward induction.

---

*Next: [Hypercompetition](07-hypercompetition.md)*
