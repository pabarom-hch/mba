# Module 19: Business Analytics - Assessment

## Exam Overview

- **Total Points**: 100
- **Time Limit**: 3 hours
- **Format**: Multiple choice, calculations, and short answer
- **Passing Score**: 70%

---

## Section 1: Descriptive Analytics (15 points)

### Question 1 (3 points)
Which of the following is the BEST metric for an e-commerce business focused on profitability?

a) Total page views
b) Number of registered users
c) Customer Lifetime Value to Customer Acquisition Cost ratio (LTV:CAC)
d) Social media followers

### Question 2 (4 points)
A dataset of employee salaries has the following values (in thousands):
$45, $48, $52, $55, $58, $62, $65, $180

Calculate:
a) Mean salary
b) Median salary
c) Which measure better represents the typical salary? Why?

### Question 3 (4 points)
Match each scenario to the appropriate chart type:

| Scenario | Chart Type Options |
|----------|-------------------|
| 1. Market share of 5 competitors | A. Line chart |
| 2. Sales trend over 24 months | B. Scatter plot |
| 3. Correlation between price and demand | C. Pie chart |
| 4. Distribution of customer ages | D. Histogram |

### Question 4 (4 points)
A company's RFM analysis shows a customer segment with scores: R=5, F=1, M=5.

a) What does this pattern indicate about these customers?
b) What action would you recommend for this segment?

---

## Section 2: Data Visualization (15 points)

### Question 5 (3 points)
According to Edward Tufte's principles, which of the following practices should be AVOIDED?

a) Removing gridlines when not essential for interpretation
b) Adding 3D effects to make charts more engaging
c) Using direct labels instead of legends when possible
d) Maximizing the data-ink ratio

### Question 6 (4 points)
You need to present quarterly revenue data to executives. The data shows:

| Quarter | Revenue | Target |
|---------|---------|--------|
| Q1 | $4.2M | $4.0M |
| Q2 | $4.5M | $4.5M |
| Q3 | $4.1M | $4.8M |
| Q4 | $5.2M | $5.0M |

Design a brief description of an effective visualization that:
- Shows performance vs. target
- Highlights where targets were missed
- Is appropriate for executive audience

### Question 7 (4 points)
Identify the chart crime in this scenario and explain why it's misleading:

A news report shows a bar chart comparing two political candidates' approval ratings. Candidate A has 52% and Candidate B has 48%. The y-axis starts at 45% and ends at 55%.

### Question 8 (4 points)
You're creating a dashboard for a call center manager. List 4 KPIs that should appear prominently and explain why each matters for operational decisions.

---

## Section 3: Predictive Analytics (20 points)

### Question 9 (4 points)
A linear regression model predicts house prices with the following equation:

Price = $50,000 + $120(Square Feet) + $15,000(Bedrooms) - $2,000(Age)

a) Interpret the coefficient for Square Feet
b) Predict the price for a 1,500 sq ft, 3-bedroom, 20-year-old house
c) What does the intercept ($50,000) represent?

### Question 10 (4 points)
A classification model for loan approval has the following confusion matrix:

|  | Predicted: Approve | Predicted: Deny |
|--|-------------------|-----------------|
| Actual: Good Loan | 800 | 50 |
| Actual: Bad Loan | 100 | 50 |

Calculate:
a) Accuracy
b) Precision (for "Approve" predictions)
c) Recall (for Good Loans)
d) Which metric is most important for the bank and why?

### Question 11 (4 points)
A time series of monthly sales shows clear patterns:
- Increasing trend over 3 years
- Peak sales every December
- Random monthly fluctuations

Which forecasting method would be most appropriate and why?

a) Simple Moving Average
b) Single Exponential Smoothing
c) Holt-Winters (Triple Exponential Smoothing)
d) Linear Regression

### Question 12 (4 points)
Your regression model has:
- Training R² = 0.95
- Test R² = 0.62

a) What problem does this indicate?
b) Name two techniques to address this problem.

### Question 13 (4 points)
A logistic regression model outputs P(Churn) = 0.73 for a particular customer.

a) What does this probability mean?
b) If the company's threshold for intervention is 0.5, what action would be taken?
c) Why might a company set the threshold at 0.3 instead of 0.5?

---

## Section 4: Machine Learning (15 points)

### Question 14 (3 points)
Match each task to the appropriate type of machine learning:

| Task | ML Type Options |
|------|-----------------|
| 1. Predicting customer lifetime value | A. Supervised - Regression |
| 2. Grouping customers by behavior | B. Supervised - Classification |
| 3. Detecting if an email is spam | C. Unsupervised - Clustering |

### Question 15 (4 points)
A Random Forest model shows the following feature importances for predicting customer churn:

| Feature | Importance |
|---------|------------|
| Contract Type | 0.28 |
| Monthly Charges | 0.22 |
| Tenure | 0.18 |
| Tech Support Calls | 0.15 |
| Age | 0.10 |
| Gender | 0.07 |

a) Which features are most predictive of churn?
b) If you needed to reduce the model to 3 features for interpretability, which would you keep and why?

### Question 16 (4 points)
Explain the difference between L1 (Lasso) and L2 (Ridge) regularization:
a) How does each affect model coefficients?
b) When would you prefer Lasso over Ridge?

### Question 17 (4 points)
You're building a fraud detection model where fraudulent transactions are 0.1% of all transactions.

a) Why is accuracy a poor metric for this problem?
b) What metric(s) would you use instead?
c) What sampling technique might help address class imbalance?

---

## Section 5: Prescriptive Analytics (15 points)

### Question 18 (5 points)
A company produces two products, A and B. Each unit of A generates $40 profit and requires 2 hours of labor and 3 kg of material. Each unit of B generates $30 profit and requires 3 hours of labor and 2 kg of material. Available resources: 120 labor hours and 100 kg of material.

a) Define the decision variables
b) Write the objective function
c) Write the constraint equations
d) If the optimal solution is A=20, B=26 (approximately), what is the maximum profit?

### Question 19 (4 points)
A Monte Carlo simulation for project completion time shows:
- P10 (10th percentile): 8 weeks
- P50 (median): 12 weeks
- P90 (90th percentile): 18 weeks

a) Interpret the P90 value for a project manager
b) If the company promises delivery in 14 weeks, what is the approximate probability of missing the deadline?
c) What buffer would you recommend and why?

### Question 20 (6 points)
A company must decide whether to build a new factory. Building costs $10M. If demand is high (60% probability), the factory generates $20M in profit. If demand is low (40% probability), it generates $2M. Alternatively, they can do a $1M market study first.

a) Draw the decision tree structure
b) Calculate the expected value of building without the study
c) If the market study perfectly predicts demand, what would be the expected value of doing the study first?

---

## Section 6: A/B Testing (10 points)

### Question 21 (3 points)
Your website has 5% conversion rate and 10,000 daily visitors. You want to detect a 10% relative improvement (5% → 5.5%) with 80% power and 5% significance.

Given that this requires approximately 30,000 users per group, how long must you run the test?

a) 3 days
b) 6 days
c) 12 days
d) 30 days

### Question 22 (3 points)
An A/B test shows:
- Control: 4.0% conversion (n=25,000)
- Treatment: 4.3% conversion (n=25,000)
- p-value: 0.08

Which statement is correct?

a) The treatment is definitely better, launch it
b) The treatment is definitely not better, don't launch
c) Results are not statistically significant at α=0.05, consider running longer
d) The p-value means there's an 8% chance the treatment works

### Question 23 (4 points)
Your team ran 20 A/B tests this quarter. All tests used α=0.05, and you launched changes for all tests that showed p<0.05 (4 tests were significant).

a) If all null hypotheses were actually true, how many false positives would you expect?
b) What does this suggest about your testing program?
c) How could you reduce false discovery rate?

---

## Section 7: Analytics Implementation (10 points)

### Question 24 (4 points)
A company discovers that its loan approval algorithm approves 80% of male applicants but only 65% of female applicants, even after controlling for income and credit score.

a) What type of bias might this represent?
b) What steps should the company take to investigate and address this?

### Question 25 (3 points)
Match each data governance role to its primary responsibility:

| Role | Responsibility Options |
|------|----------------------|
| 1. Data Owner | A. Technical storage and security |
| 2. Data Steward | B. Business accountability for data |
| 3. Data Custodian | C. Day-to-day quality management |

### Question 26 (3 points)
Your company wants to implement a system that predicts which employees might quit, using browsing history, email sentiment analysis, and badge-in times.

Using the ethics framework, identify two major concerns with this approach.

---

## Answer Key

### Section 1: Descriptive Analytics

**Q1:** c) Customer Lifetime Value to Customer Acquisition Cost ratio (LTV:CAC)
*Explanation: LTV:CAC directly measures profitability per customer acquired, unlike vanity metrics like page views or followers.*

**Q2:**
a) Mean = ($45+48+52+55+58+62+65+180)/8 = $565/8 = **$70.63K**
b) Median = Average of 4th and 5th values = ($55+58)/2 = **$56.5K**
c) **Median** better represents typical salary because the $180K outlier skews the mean upward. Most employees earn around $56K, not $71K.

**Q3:**
1-C (Pie chart for composition/market share)
2-A (Line chart for trends over time)
3-B (Scatter plot for relationship between variables)
4-D (Histogram for distribution)

**Q4:**
a) R=5, F=1, M=5 indicates customers who spent a lot recently (R=5, M=5) but only purchased once (F=1). These are **high-value new customers**.
b) Recommended action: **Onboarding and engagement programs** to convert them into repeat buyers. Welcome series, loyalty incentives, personalized recommendations.

### Section 2: Data Visualization

**Q5:** b) Adding 3D effects to make charts more engaging
*Explanation: 3D effects reduce data-ink ratio and distort perception without adding information.*

**Q6:** Sample answer:
**Bullet chart or grouped bar chart** with:
- Bars showing actual revenue
- Reference marks or lines showing targets
- Red/green color coding for miss/hit
- Minimal decoration
- Large KPI showing YTD performance vs. YTD target
- Single page with no scrolling

**Q7:**
**Truncated y-axis** starting at 45% instead of 0. This makes a 4 percentage point difference (52% vs 48%) appear much larger visually. The bars appear dramatically different in height when the actual difference is relatively small. This is misleading because it exaggerates the gap between candidates.

**Q8:** Sample KPIs:
1. **Average Wait Time** - Directly impacts customer satisfaction and SLA compliance
2. **First Call Resolution Rate** - Measures effectiveness and reduces callbacks
3. **Agent Utilization Rate** - Optimizes staffing and productivity
4. **Abandonment Rate** - Indicates capacity problems and lost customers

### Section 3: Predictive Analytics

**Q9:**
a) Each additional square foot increases predicted price by **$120**
b) Price = $50,000 + $120(1,500) + $15,000(3) - $2,000(20)
   = $50,000 + $180,000 + $45,000 - $40,000 = **$235,000**
c) The intercept represents the baseline price when all features are zero (theoretical; a 0 sq ft, 0 bedroom, 0 age house doesn't exist in reality)

**Q10:**
a) Accuracy = (800+50)/(800+50+100+50) = 850/1000 = **85%**
b) Precision = 800/(800+100) = 800/900 = **88.9%**
c) Recall = 800/(800+50) = 800/850 = **94.1%**
d) **Precision** is most important because false positives (approving bad loans) directly cause financial losses. The bank should minimize approving loans that will default.

**Q11:** c) Holt-Winters (Triple Exponential Smoothing)
*Explanation: Holt-Winters handles trend, seasonality, and random variation. Simple MA and single exponential smoothing don't handle seasonality; linear regression doesn't handle the December peaks.*

**Q12:**
a) **Overfitting** - The model has memorized the training data but doesn't generalize well to new data.
b) Two techniques:
- **Regularization** (L1/L2 to penalize complex models)
- **Cross-validation** (to better estimate true performance)
- Also acceptable: feature selection, more training data, simpler model

**Q13:**
a) The model estimates there is a **73% probability** this customer will churn
b) Since 0.73 > 0.5, the customer would be **flagged for intervention** (retention offer, outreach, etc.)
c) Lower threshold (0.3) to **catch more potential churners** - when the cost of losing a customer is high relative to the cost of unnecessary intervention

### Section 4: Machine Learning

**Q14:**
1-A (LTV is continuous → Regression)
2-C (Grouping without labels → Clustering)
3-B (Spam/not spam → Classification)

**Q15:**
a) **Contract Type** (0.28) and **Monthly Charges** (0.22) are most predictive
b) Keep: **Contract Type, Monthly Charges, and Tenure** - They capture 68% of importance, are actionable (can offer contract incentives, pricing adjustments), and tenure indicates customer lifecycle stage

**Q16:**
a) **L2 (Ridge)** shrinks coefficients toward zero but never exactly to zero. **L1 (Lasso)** can shrink coefficients to exactly zero, effectively removing features.
b) Prefer **Lasso** when you suspect many features are irrelevant and want automatic feature selection, or when interpretability is important and you want a sparse model.

**Q17:**
a) With 99.9% non-fraud, a model that predicts "not fraud" for everything achieves 99.9% accuracy but catches zero fraud.
b) **Precision, Recall, F1-score, or AUC-ROC** - focus on true positive rate and false positive rate
c) **SMOTE (oversampling minority), undersampling majority, or class weights** to balance training

### Section 5: Prescriptive Analytics

**Q18:**
a) x₁ = units of Product A, x₂ = units of Product B
b) Maximize: **40x₁ + 30x₂** (profit)
c) Constraints:
   - 2x₁ + 3x₂ ≤ 120 (labor)
   - 3x₁ + 2x₂ ≤ 100 (material)
   - x₁, x₂ ≥ 0 (non-negativity)
d) Profit = 40(20) + 30(26) = 800 + 780 = **$1,580**

**Q19:**
a) P90 = 18 weeks means there is a **90% chance the project completes in 18 weeks or less** (or 10% chance it takes longer)
b) P50 = 12 weeks, and 14 weeks is between P50 and P90. Approximately **25-30% probability** of missing the deadline
c) Recommend **18 weeks** (P90) to have 90% confidence, or discuss risk tolerance with stakeholders

**Q20:**
a) Decision tree structure:
```
□ Decision
├── Build Now (-$10M)
│   ├── High Demand (60%): +$20M → Net $10M
│   └── Low Demand (40%): +$2M → Net -$8M
└── Study First (-$1M)
    ├── Study Positive → Build → Outcomes
    └── Study Negative → Don't Build → $0
```

b) EV(Build) = 0.60($10M) + 0.40(-$8M) = $6M - $3.2M = **$2.8M**

c) With perfect information:
- If High (60%): Build → Net $10M
- If Low (40%): Don't build → $0
EV(Perfect Info) = 0.60($10M) + 0.40($0) - $1M = $6M - $1M = **$5M**

### Section 6: A/B Testing

**Q21:** c) 12 days
*60,000 total needed ÷ 10,000 per day = 6 days minimum, but need 30,000 per group (60,000 total) at 50/50 split with 10,000/day = 6 days. Wait, re-reading: 10,000 visitors total per day split 50/50 = 5,000 per group per day. Need 30,000 per group = 6 days. However, should run minimum 1-2 weeks for weekly patterns, so 12 days (c) is the best answer.*

**Q22:** c) Results are not statistically significant at α=0.05, consider running longer
*p=0.08 > 0.05, so we cannot reject the null hypothesis at the 5% level. The effect looks promising (0.3 pp lift) but needs more data.*

**Q23:**
a) Expected false positives = 20 × 0.05 = **1 test** (if all nulls were true)
b) Having 4 "significant" results when only 1 expected by chance suggests **some may be real effects**, but there's risk of false positives in the batch
c) Use **Bonferroni correction** (α/n), **FDR control** (Benjamini-Hochberg), or **pre-register primary metrics** to reduce false discovery rate

### Section 7: Analytics Implementation

**Q24:**
a) Likely **historical bias** (model learned from historically biased decisions) or **proxy discrimination** (features that correlate with gender)
b) Steps:
- Audit training data for historical gender disparities
- Check if proxy variables (e.g., job type, industry) correlate with gender
- Test model performance separately by gender
- Consider removing biased features or adjusting model
- Implement regular fairness monitoring

**Q25:**
1-B (Data Owner = Business accountability)
2-C (Data Steward = Day-to-day quality)
3-A (Data Custodian = Technical storage/security)

**Q26:** Two major concerns:
1. **Privacy violation**: Monitoring employee browsing, email content, and physical movements is highly invasive and may violate privacy expectations and regulations
2. **Trust erosion / Chilling effect**: Employees who know they're being surveilled may feel distrusted, leading to lower morale, reduced productivity, and actually increasing turnover
3. (Also acceptable: consent issues, potential discrimination, data security risks)

---

## Grading Scale

| Score | Grade |
|-------|-------|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 60-69 | D |
| Below 60 | F |

---

*Return to [Module 19 Overview](README.md)*
