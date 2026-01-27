# Machine Learning Basics

## Learning Objectives

- Distinguish between supervised and unsupervised learning
- Understand core ML algorithms and their applications
- Evaluate model performance appropriately
- Recognize and prevent overfitting
- Apply feature engineering techniques
- Communicate ML results to business stakeholders

---

## Machine Learning Paradigms

### Supervised vs. Unsupervised Learning

```
MACHINE LEARNING TAXONOMY:
─────────────────────────────────────────────────────

                    Machine Learning
                          │
          ┌───────────────┼───────────────┐
          │               │               │
    SUPERVISED      UNSUPERVISED    REINFORCEMENT
          │               │               │
    ┌─────┴─────┐   ┌─────┴─────┐   Learn from
    │           │   │           │   environment
Regression  Classification  Clustering  Dimensionality
(numbers)   (categories)  (grouping)   Reduction
    │           │           │           │
Examples:   Examples:    Examples:    Examples:
• Sales     • Spam       • Customer   • PCA
• Prices    • Fraud      segments     • t-SNE
• Scores    • Churn      • Products   • Compression


SUPERVISED LEARNING:
─────────────────────────────────────────────────────
Input: Features (X) + Labels (Y)
Goal: Learn mapping from X → Y
Test: Predict Y for new X

Training Data:
┌────────────────────────────┬────────────┐
│ Features (X)               │ Label (Y)  │
├────────────────────────────┼────────────┤
│ Age=35, Income=$80K        │ Approved   │
│ Age=22, Income=$30K        │ Denied     │
│ Age=45, Income=$120K       │ Approved   │
└────────────────────────────┴────────────┘


UNSUPERVISED LEARNING:
─────────────────────────────────────────────────────
Input: Features (X) only - NO labels
Goal: Find hidden patterns/structure
Test: Evaluate structure quality

Training Data:
┌────────────────────────────┐
│ Features (X)               │
├────────────────────────────┤
│ Age=35, Income=$80K        │ → Cluster 1
│ Age=22, Income=$30K        │ → Cluster 2
│ Age=45, Income=$120K       │ → Cluster 1
└────────────────────────────┘
```

---

## Supervised Learning Algorithms

### Ensemble Methods

```
RANDOM FOREST:
─────────────────────────────────────────────────────

Multiple decision trees → Vote/Average

     Data
       │
       ▼
┌──────────────────────────────────────────────────┐
│              Bootstrap Samples                    │
│  ┌─────┐    ┌─────┐    ┌─────┐       ┌─────┐    │
│  │Data │    │Data │    │Data │  ...  │Data │    │
│  │ 1   │    │ 2   │    │ 3   │       │ n   │    │
│  └──┬──┘    └──┬──┘    └──┬──┘       └──┬──┘    │
│     │          │          │              │       │
│     ▼          ▼          ▼              ▼       │
│  ┌─────┐    ┌─────┐    ┌─────┐       ┌─────┐    │
│  │Tree │    │Tree │    │Tree │  ...  │Tree │    │
│  │ 1   │    │ 2   │    │ 3   │       │ n   │    │
│  └──┬──┘    └──┬──┘    └──┬──┘       └──┬──┘    │
│     │          │          │              │       │
│     └──────────┴──────────┴──────┬───────┘       │
│                                  │               │
│                           ┌─────▼─────┐          │
│                           │   VOTE    │          │
│                           │ (majority)│          │
│                           └───────────┘          │
└──────────────────────────────────────────────────┘

Key Concepts:
• Bagging: Each tree trained on random sample (with replacement)
• Feature randomness: Each split considers random subset of features
• Reduces overfitting compared to single tree
• Feature importance: How much each variable contributes


GRADIENT BOOSTING:
─────────────────────────────────────────────────────

Sequential trees, each correcting previous errors

                    Initial
                   Prediction
                       │
                       ▼
┌──────────────────────────────────────────────────┐
│                                                  │
│  Tree 1 → Residuals → Tree 2 → Residuals → ...  │
│     │                    │                       │
│     └────────┬───────────┘                       │
│              │                                   │
│              ▼                                   │
│      Final Prediction =                          │
│      Tree1 + α×Tree2 + α×Tree3 + ...            │
│                                                  │
│      α = learning rate (small, e.g., 0.1)       │
└──────────────────────────────────────────────────┘

Popular Implementations:
• XGBoost: Fast, regularized
• LightGBM: Efficient for large data
• CatBoost: Handles categorical features well

Often top performers in competitions
```

### Support Vector Machines

```
SUPPORT VECTOR MACHINE (SVM):
─────────────────────────────────────────────────────

Find the best separating hyperplane

    Class B              Maximum
       ○                  Margin
       ○   ○         ╱    │    ╲
         ○   ○      ╱     │     ╲
           ○  ●    ╱●     │      ╲ Class A
         ○    ●  ╱ ●      │       ●  ●
       ○     ● ╱  ●       │      ●    ●
            ●╱   ●        │     ●
           ╱  ●           │    ●  ●
          ╱               │
    Margin ←────────→ Margin

Support Vectors: Points on the margin boundaries

Key Parameters:
• C: Regularization (trade-off between margin and errors)
• Kernel: Transform to higher dimensions (linear, RBF, polynomial)

Kernel Trick (for non-linear data):
─────────────────────────────────────────────────────

Original Space:              After Kernel Transform:
    ○ ○ ○                         ○ ○ ○
  ○ ● ● ● ○                   ─────────────
  ○ ● ● ● ○                       ● ● ●
    ○ ○ ○                         ● ● ●

Not linearly separable → Linearly separable in higher dimension
```

### Neural Networks (Overview)

```
NEURAL NETWORK STRUCTURE:
─────────────────────────────────────────────────────

    Input        Hidden         Hidden        Output
    Layer        Layer 1        Layer 2       Layer

    ○───────────●───────────●───────────○
         \     / \         / \         /
    ○─────\───●───\───────●───\───────○
           \ / \   \     / \   \     /
    ○───────●───●───●───●───●───●───○
           / \ /   /     \ /   /     \
    ○─────/───●───/───────●───/───────○
         /     \ /         \ /         \
    ○───────────●───────────●───────────○

  (Features)   (Learn       (Learn      (Prediction)
               patterns)    patterns)


DEEP LEARNING USE CASES:
─────────────────────────────────────────────────────

Application          Architecture
─────────────────────────────────────────────────────
Image recognition    CNN (Convolutional)
Text/Language        Transformers (BERT, GPT)
Sequence data        RNN/LSTM
Recommendations      Embeddings + Neural Nets

Business Caution:
• Requires large data (thousands to millions)
• "Black box" - hard to explain
• Computationally expensive
• May be overkill for structured data
```

---

## Unsupervised Learning

### Clustering Algorithms

```
K-MEANS CLUSTERING:
─────────────────────────────────────────────────────

Algorithm:
1. Choose K (number of clusters)
2. Randomly initialize K centroids
3. Assign each point to nearest centroid
4. Recalculate centroids as cluster means
5. Repeat 3-4 until convergence

Iteration 1:             Iteration 2:             Final:
    × ○○                    ×                      ○ ○
   ○○○    ●●●             ○○○○    ●●●●           ○○○○    ●●●●
  ○○○     ●●●             ○○○○ ×  ●●●●            ○○○  ×  ●●●●
           ×                      ●●●                  ●  ●●●
                                   ×                    ×

× = Centroid   ○● = Data points in different clusters


CHOOSING K (Elbow Method):
─────────────────────────────────────────────────────

Within-Cluster Sum of Squares (WCSS)
    │
    │╲
    │ ╲
    │  ╲___
    │      ╲___
    │          ╲_____╲___________
    │          ↑
    │       "Elbow"
    │      (optimal K)
    └─────────────────────────────
      1  2  3  4  5  6  7  8
              Number of Clusters (K)


HIERARCHICAL CLUSTERING:
─────────────────────────────────────────────────────

Dendrogram (tree of clusters):

                    ┌───────────────┐
                    │               │
            ┌───────┴───┐       ┌───┴───┐
            │           │       │       │
        ┌───┴───┐   ┌───┴───┐   │       │
        │       │   │       │   │       │
        A       B   C       D   E       F

Cut at desired height to get clusters
No need to pre-specify K
```

### Dimensionality Reduction

```
PRINCIPAL COMPONENT ANALYSIS (PCA):
─────────────────────────────────────────────────────

Reduce many variables to fewer while preserving information

Original: 100 features → PCA → 10 principal components

How it works:
─────────────────────────────────────────────────────

Original Data (2D):         After PCA:
      │     • • •              PC1
      │   • • • • •            ──────────────→
      │ • • • • • • •           • • • • • • •
      │   • • • • •
      │     • • •
      └─────────────

PC1 captures direction of maximum variance
PC2 captures next most variance (perpendicular to PC1)

Variance Explained:
─────────────────────────────────────────────────────

Cumulative Variance Explained
    │
100%┤                    ●───●───●───●
    │            ●───●───●
80% ┤        ●───●
    │    ●───●
60% ┤●───●
    │
40% ┤
    │
    └──────────────────────────────
      PC1 PC2 PC3 PC4 PC5 PC6 PC7

Goal: Keep enough PCs to capture ~80-95% of variance

Applications:
• Visualization (reduce to 2-3 dimensions)
• Noise reduction
• Feature compression before other ML
• Addressing multicollinearity
```

---

## Model Evaluation

### Cross-Validation Strategies

```
K-FOLD CROSS-VALIDATION:
─────────────────────────────────────────────────────

Full Dataset split into K folds (e.g., K=5)

Fold 1: [TEST][train][train][train][train] → Score 1
Fold 2: [train][TEST][train][train][train] → Score 2
Fold 3: [train][train][TEST][train][train] → Score 3
Fold 4: [train][train][train][TEST][train] → Score 4
Fold 5: [train][train][train][train][TEST] → Score 5

Final Score = Average(Score 1, 2, 3, 4, 5)

Benefits:
• Every data point used for both training and testing
• More reliable estimate than single train/test split
• Standard deviation shows model stability


STRATIFIED K-FOLD:
─────────────────────────────────────────────────────

Maintains class proportions in each fold

Original: 90% Class A, 10% Class B (imbalanced)

Each Fold:
[A A A A A A A A A B] ← Same 90/10 ratio

Important for: Imbalanced classification problems


LEAVE-ONE-OUT CROSS-VALIDATION (LOOCV):
─────────────────────────────────────────────────────

K = N (each data point is its own fold)

Iteration 1: [TEST][train][train]...[train][train]
Iteration 2: [train][TEST][train]...[train][train]
...
Iteration N: [train][train][train]...[train][TEST]

Computationally expensive but thorough
```

### Preventing Overfitting

```
REGULARIZATION TECHNIQUES:
─────────────────────────────────────────────────────

RIDGE (L2) REGULARIZATION:
─────────────────────────────────────────────────────
Loss = Original_Loss + λ × Σ(β²)

• Shrinks coefficients toward zero
• Never exactly zero
• Good when all features may be relevant

LASSO (L1) REGULARIZATION:
─────────────────────────────────────────────────────
Loss = Original_Loss + λ × Σ|β|

• Can shrink coefficients to exactly zero
• Performs feature selection
• Good when you suspect many irrelevant features

ELASTIC NET:
─────────────────────────────────────────────────────
Loss = Original_Loss + λ₁×Σ|β| + λ₂×Σ(β²)

• Combination of L1 and L2
• Best of both worlds


OTHER TECHNIQUES:
─────────────────────────────────────────────────────

Dropout (Neural Networks):
• Randomly "turn off" neurons during training
• Forces network to not rely on specific paths

Early Stopping:
─────────────────────────────────────────────────────

Error
    │
    │╲
    │ ╲____
    │      ╲  Test Error
    │       ╲_____╱──────────────
    │        ↑     ╲
    │    Stop Here! ╲ (starts overfitting)
    │                Training Error
    └────────────────────────────────
           Training Iterations

Pruning (Trees):
• Grow full tree, then remove branches
• Cross-validate optimal tree depth
```

---

## Feature Engineering

### Feature Creation

```
FEATURE ENGINEERING TECHNIQUES:
─────────────────────────────────────────────────────

NUMERICAL TRANSFORMATIONS:
─────────────────────────────────────────────────────
Original          Transformation
─────────────────────────────────────────────────────
Income            log(Income)        - Reduce skew
Age               Age²               - Capture non-linear
Dates             Days since event   - Convert to numeric
                  Month, Day, Year   - Extract components
                  Is_Weekend         - Binary indicator


CATEGORICAL ENCODING:
─────────────────────────────────────────────────────

One-Hot Encoding:
Color      → Red  Green  Blue
─────────────────────────────────────
Red        →  1     0      0
Green      →  0     1      0
Blue       →  0     0      1

Label Encoding (ordinal):
Size       → Code
─────────────────────
Small      →  1
Medium     →  2
Large      →  3

Target Encoding (advanced):
Category   → Mean of target for that category


INTERACTION FEATURES:
─────────────────────────────────────────────────────
Age × Income       (spending power proxy)
Clicks × Time      (engagement intensity)
Feature A / Feature B  (ratios)


DOMAIN-SPECIFIC FEATURES:
─────────────────────────────────────────────────────
E-commerce:
• Days since last purchase
• Average order value
• Items per order
• Favorite category

Finance:
• Debt-to-income ratio
• Payment streak
• Credit utilization
```

### Feature Selection

```
FEATURE SELECTION METHODS:
─────────────────────────────────────────────────────

FILTER METHODS (before modeling):
─────────────────────────────────────────────────────
• Correlation with target
• Mutual information
• Chi-square test

Remove features with near-zero correlation

WRAPPER METHODS (using model):
─────────────────────────────────────────────────────

Forward Selection:
Start empty → Add best feature → Repeat

Backward Elimination:
Start all → Remove worst feature → Repeat

Computationally expensive but thorough


EMBEDDED METHODS (during modeling):
─────────────────────────────────────────────────────
• LASSO (coefficients → 0)
• Tree-based importance

Feature Importance (Random Forest):
─────────────────────────────────────────────────────
Feature          Importance
─────────────────────────────────────────────────────
Income           ████████████████████ 0.35
Credit Score     ██████████████ 0.25
Debt Ratio       ██████████ 0.18
Employment       ██████ 0.12
Age              ████ 0.07
Other            ██ 0.03

Focus on top features, consider removing bottom ones
```

---

## ML Project Workflow

### End-to-End Process

```
ML PROJECT LIFECYCLE:
─────────────────────────────────────────────────────

┌──────────────────────────────────────────────────┐
│ 1. PROBLEM DEFINITION                            │
│    • What decision are we trying to improve?     │
│    • What does success look like?                │
│    • What data do we need?                       │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│ 2. DATA COLLECTION & EXPLORATION                 │
│    • Gather relevant data                        │
│    • Understand distributions, missing values    │
│    • Identify data quality issues                │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│ 3. DATA PREPARATION                              │
│    • Clean data (handle missing, outliers)       │
│    • Feature engineering                         │
│    • Split: Train / Validation / Test            │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│ 4. MODEL TRAINING & SELECTION                    │
│    • Try multiple algorithms                     │
│    • Tune hyperparameters                        │
│    • Cross-validate                              │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│ 5. EVALUATION                                    │
│    • Test set performance                        │
│    • Business metric impact                      │
│    • Fairness and bias checks                    │
└───────────────────────┬──────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│ 6. DEPLOYMENT & MONITORING                       │
│    • Put model into production                   │
│    • Monitor performance over time               │
│    • Retrain when performance degrades           │
└──────────────────────────────────────────────────┘
```

### Communicating Results

```
ML RESULTS FOR BUSINESS STAKEHOLDERS:
─────────────────────────────────────────────────────

WHAT TO COMMUNICATE:
─────────────────────────────────────────────────────

1. Business Impact (lead with this):
   "This model will reduce customer churn by 15%,
    saving approximately $2M annually."

2. How It Works (simple explanation):
   "The model identifies at-risk customers based on
    usage patterns, support tickets, and payment history."

3. Confidence Level:
   "The model correctly identifies 80% of customers
    who will churn, with a 10% false alarm rate."

4. Limitations:
   "Performance is lower for new customers (<3 months)
    due to limited data history."

5. Next Steps:
   "We recommend piloting with the top 100 at-risk
    customers next month."


AVOID:
─────────────────────────────────────────────────────
• Technical jargon (AUC, hyperparameters, regularization)
• Overconfidence ("the model is always right")
• Underselling limitations ("it's just a model")


VISUALIZATION FOR STAKEHOLDERS:
─────────────────────────────────────────────────────

Predicted Churn Risk Distribution:

High Risk   ████████████████████ 120 customers (12%)
            "Intervene immediately"

Medium Risk █████████████████████████████ 280 (28%)
            "Monitor closely"

Low Risk    ██████████████████████████████████████████████████ 600 (60%)
            "Standard engagement"

Recommended Action: Target top 120 high-risk customers
                    with retention offer ($50 credit)
```

---

## Key Takeaways

1. **Supervised needs labels** - Regression/classification require known outcomes to train
2. **Unsupervised finds patterns** - Clustering and dimensionality reduction discover structure
3. **Ensemble methods often win** - Random Forest and Gradient Boosting are reliable workhorses
4. **Cross-validate everything** - Never trust single train/test split
5. **Regularization prevents overfitting** - L1 selects features, L2 shrinks coefficients
6. **Feature engineering adds value** - Domain knowledge often beats algorithm choice
7. **Explain in business terms** - Impact, confidence, limitations, next steps

---

## Practice Exercises

### Exercise 1: Algorithm Selection
For each scenario, recommend an appropriate algorithm and justify:
a) Predicting customer lifetime value (continuous)
b) Segmenting customers for marketing campaigns
c) Detecting fraudulent transactions (rare events)
d) Reducing 1000 survey questions to key themes

### Exercise 2: Feature Engineering
Given e-commerce transaction data (customer_id, date, amount, product_category), create 5 meaningful features for predicting next-month purchase probability.

### Exercise 3: Model Evaluation
A fraud detection model has 99% accuracy but only catches 40% of actual frauds. Is this model good? What metrics would you prioritize?

### Exercise 4: Stakeholder Presentation
Prepare a 5-minute presentation for executives explaining a churn prediction model: what it does, how well it works, and recommended actions.

---

*Next: [Prescriptive Analytics](05-prescriptive-analytics.md)*
