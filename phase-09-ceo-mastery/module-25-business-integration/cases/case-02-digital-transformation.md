# Case Study 2: Atlas Insurance Digital Transformation

## Module 25: Business Integration Capstone | Phase 9: CEO Mastery

---

## Navigation

[← Case 1: Turnaround](case-01-turnaround.md) | [Module Overview](../README.md) | [Case 3: MBA Comprehensive →](case-03-mba-comprehensive.md)

---

## Case Overview

You are the newly appointed CEO of Atlas Insurance Group, a 90-year-old regional property and casualty insurer facing disruption from InsurTech competitors and changing customer expectations. Your mandate is to lead a comprehensive digital transformation while maintaining profitability and managing risk. This case integrates technology, change management, strategy, and organizational transformation.

**Time to Complete**: 3-4 hours
**Difficulty**: Advanced
**Integration Requirement**: All nine phases with emphasis on digital/technology

---

## Company Background

### Company Profile

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ATLAS INSURANCE GROUP                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Founded: 1934 | Headquarters: Hartford, Connecticut                       │
│   Industry: Property & Casualty Insurance                                   │
│                                                                             │
│   BUSINESS LINES                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Personal Lines (55% of premium)                                   │  │
│   │   • Auto insurance                     $1.8B premium                │  │
│   │   • Homeowners insurance               $1.2B premium                │  │
│   │   • Personal umbrella                  $0.3B premium                │  │
│   │                                                                     │  │
│   │   Commercial Lines (35% of premium)                                 │  │
│   │   • Small business                     $1.1B premium                │  │
│   │   • Middle market commercial           $0.9B premium                │  │
│   │   • Workers' compensation              $0.5B premium                │  │
│   │                                                                     │  │
│   │   Specialty Lines (10% of premium)                                  │  │
│   │   • Professional liability             $0.4B premium                │  │
│   │   • Cyber insurance                    $0.2B premium                │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   KEY FACTS                                                                 │
│   • Total Premium: $6.4 billion                                            │
│   • Employees: 8,500                                                        │
│   • Geographic footprint: 15 northeastern and midwestern states            │
│   • Distribution: 85% independent agents, 15% direct                       │
│   • AM Best Rating: A (Excellent)                                          │
│   • Policyholders: 2.8 million households                                  │
│   • Average policy tenure: 7.2 years (industry avg: 4.5 years)             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Historical Performance

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FINANCIAL PERFORMANCE ($ MILLIONS)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                       Year -3    Year -2    Year -1    Current              │
│                       ──────    ──────     ──────     ───────              │
│   Net Premiums        $5,950    $6,100     $6,250     $6,400               │
│   Premium Growth        4%        3%         2%         2%                 │
│                                                                             │
│   Loss Ratio           65%       66%        68%        70%                 │
│   Expense Ratio        32%       32%        33%        34%                 │
│   Combined Ratio       97%       98%       101%       104%                 │
│                                                                             │
│   Investment Income    $380      $365       $355       $345                │
│   Net Income           $295      $245       $165       $85                 │
│   ROE                  12.5%     10.2%      6.8%       3.5%                │
│                                                                             │
│   PERFORMANCE TRAJECTORY                                                    │
│                                                                             │
│   Combined Ratio (lower is better)                                          │
│                                                                             │
│        110%│                              ●                                 │
│            │                                   ●                            │
│        105%│                                                                │
│            │                         ●                                      │
│        100%│───────────────────────────────────────── Target (100%)         │
│            │    ●                                                           │
│         97%│         ●                                                      │
│            │                                                                │
│            └─────────────────────────────────────                           │
│              Y-4   Y-3   Y-2   Y-1   Current                                │
│                                                                             │
│   Industry Average Combined Ratio: 99%                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Technology Landscape

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CURRENT TECHNOLOGY STATE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   CORE SYSTEMS                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   System              Age     Status           Annual Cost          │  │
│   │   ─────────────────────────────────────────────────────────────    │  │
│   │   Policy Admin        25 yrs  End of life      $45M maintenance    │  │
│   │   Claims Management   18 yrs  Outdated         $28M maintenance    │  │
│   │   Billing System      22 yrs  Functional       $15M maintenance    │  │
│   │   Agent Portal        12 yrs  Inadequate       $8M maintenance     │  │
│   │   Customer Portal      8 yrs  Basic            $5M maintenance     │  │
│   │   Data Warehouse      15 yrs  Inflexible       $12M maintenance    │  │
│   │                                                                     │  │
│   │   Total Annual IT Spend: $285M (4.5% of premium)                   │  │
│   │   Industry Leaders: 3-4% of premium                                │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   TECHNOLOGY DEBT                                                           │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Critical Issues:                                                  │  │
│   │   • 6 different policy admin systems (from acquisitions)            │  │
│   │   • COBOL mainframe handles 60% of transactions                     │  │
│   │   • Manual processes require 800+ FTE in operations                 │  │
│   │   • Average time to launch new product: 18 months                   │  │
│   │   • Cannot offer real-time quotes (batch processing only)           │  │
│   │   • No API layer for partner integration                            │  │
│   │   • Data exists in 40+ siloed systems                               │  │
│   │   • Only 15% of data is usable for analytics                        │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   DIGITAL CAPABILITIES ASSESSMENT                                           │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Capability               Atlas    Industry    InsurTech           │  │
│   │                            Score    Average     Leaders             │  │
│   │   ─────────────────────────────────────────────────────────────    │  │
│   │   Online Quote/Bind        2/10      5/10        9/10               │  │
│   │   Mobile Experience        2/10      6/10        9/10               │  │
│   │   Self-Service Claims      3/10      5/10        8/10               │  │
│   │   AI/ML in Underwriting    1/10      4/10        8/10               │  │
│   │   Data Analytics           2/10      5/10        9/10               │  │
│   │   Agent Digital Tools      3/10      6/10        8/10               │  │
│   │   API/Integration          1/10      5/10        9/10               │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Market Disruption

### Competitive Landscape

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    COMPETITIVE DISRUPTION                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║   INSURTECH THREATS                                                        ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Lemonade (Personal Lines)                                         │ ║
║   │   • AI-powered claims: 3 minutes vs. industry 30 days               │ ║
║   │   • 90-second policy issuance                                       │ ║
║   │   • Targeting younger demographics Atlas is losing                  │ ║
║   │   • Growing 100%+ annually in Atlas markets                         │ ║
║   │                                                                     │ ║
║   │   Root Insurance (Auto)                                             │ ║
║   │   • Telematics-based pricing                                        │ ║
║   │   • Mobile-first experience                                         │ ║
║   │   • 30% lower premiums for good drivers                             │ ║
║   │   • Attracting Atlas's best risks                                   │ ║
║   │                                                                     │ ║
║   │   Hippo (Homeowners)                                                │ ║
║   │   • Smart home integration                                          │ ║
║   │   • Proactive risk prevention                                       │ ║
║   │   • Real-time property data                                         │ ║
║   │   • Premium savings through IoT                                     │ ║
║   │                                                                     │ ║
║   │   Next Insurance (Commercial)                                       │ ║
║   │   • Instant online quotes for small business                        │ ║
║   │   • Industry-specific products                                      │ ║
║   │   • 10-minute quote-to-bind                                         │ ║
║   │   • Growing 200%+ in Atlas's markets                                │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
║   TRADITIONAL COMPETITOR MOVES                                             ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   State Farm: $1B digital transformation; mobile app 4.8★ rating    │ ║
║   │   Progressive: AI underwriting; usage-based insurance leader        │ ║
║   │   Travelers: Advanced analytics; commercial digital platform        │ ║
║   │   Liberty Mutual: Cloud migration complete; API-first architecture  │ ║
║   │                                                                     │ ║
║   │   All major competitors have committed $500M-$2B to transformation  │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
║   CUSTOMER EXPECTATION SHIFTS                                              ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Customer Research Findings (n=2,500 policyholders):               │ ║
║   │                                                                     │ ║
║   │   • 72% want to get quotes online without talking to anyone         │ ║
║   │   • 65% would switch for better mobile experience                   │ ║
║   │   • 78% expect claims updates via app/text                          │ ║
║   │   • 45% have already received InsurTech quotes                      │ ║
║   │   • NPS dropped from 45 to 32 over three years                      │ ║
║   │   • Under-35 customer acquisition down 40% over 5 years             │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Market Share Erosion

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MARKET POSITION DETERIORATION                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PERSONAL AUTO MARKET SHARE (Atlas's Core States)                          │
│                                                                             │
│           Year -5    Year -3    Current    Projected Y+3                    │
│           ───────    ───────    ───────    ─────────────                    │
│   Atlas    15.5%      14.2%      12.8%       10.5%?                         │
│   State Farm 22%       23%        23%         24%                           │
│   GEICO     12%        14%        16%         18%                           │
│   Progressive 10%      11%        13%         15%                           │
│   InsurTechs  0%        1%         3%          8%?                          │
│   Others    40.5%      36.8%      32.2%       24.5%                         │
│                                                                             │
│   CUSTOMER DEMOGRAPHICS (Age Distribution)                                  │
│                                                                             │
│   Age Group    Atlas Mix    Market Mix    Gap                               │
│   ─────────    ─────────    ──────────    ───                               │
│   18-34          15%          28%        -13%  ← Critical gap               │
│   35-50          28%          32%         -4%                               │
│   51-65          32%          24%         +8%                               │
│   65+            25%          16%         +9%                               │
│                                                                             │
│   KEY INSIGHT: Atlas's customer base is aging. If trends continue,         │
│   natural attrition will accelerate as older customers pass away            │
│   and younger customers choose digital-native competitors.                  │
│                                                                             │
│   PREMIUM RETENTION RATES                                                   │
│                                                                             │
│                 Year -3    Year -2    Year -1    Current                    │
│                 ───────    ───────    ───────    ───────                    │
│   Personal Auto   92%        90%        88%        85%                      │
│   Homeowners      95%        94%        93%        91%                      │
│   Commercial      93%        92%        91%        89%                      │
│                                                                             │
│   Each 1% retention decline = ~$60M premium loss annually                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Internal Assessment

### Organizational Challenges

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ORGANIZATIONAL ASSESSMENT                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   WORKFORCE PROFILE                                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Total Employees: 8,500                                            │  │
│   │                                                                     │  │
│   │   Tenure Distribution:          Digital Skills:                     │  │
│   │   • <5 years:     25%           • Strong:        12%               │  │
│   │   • 5-15 years:   35%           • Moderate:      35%               │  │
│   │   • 15-25 years:  25%           • Limited:       40%               │  │
│   │   • 25+ years:    15%           • None:          13%               │  │
│   │                                                                     │  │
│   │   Average Age: 48 (industry: 42)                                    │  │
│   │   Average Tenure: 14 years (industry: 8 years)                      │  │
│   │                                                                     │  │
│   │   Key Positions Hardest to Fill:                                    │  │
│   │   • Data scientists (12 open reqs, 8+ months average)               │  │
│   │   • Cloud engineers (18 open reqs)                                  │  │
│   │   • UX designers (6 open reqs)                                      │  │
│   │   • Product managers (8 open reqs)                                  │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   CULTURE ASSESSMENT                                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Strengths:                        Challenges:                     │  │
│   │   • Deep insurance expertise        • Risk-averse culture           │  │
│   │   • Strong customer relationships   • "We've always done it         │  │
│   │   • Loyal, experienced workforce      this way" mentality           │  │
│   │   • Collaborative environment       • Slow decision-making          │  │
│   │   • Ethical culture                 • Siloed departments            │  │
│   │                                     • Fear of technology             │  │
│   │                                     • Resistance to change           │  │
│   │                                                                     │  │
│   │   Employee Survey Results (most recent):                            │  │
│   │   • "Company is prepared for digital future": 28% agree             │  │
│   │   • "Leadership understands technology": 32% agree                  │  │
│   │   • "I have skills needed for future": 45% agree                    │  │
│   │   • "Afraid of losing job to automation": 52% agree                 │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   LEADERSHIP TEAM                                                           │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Position         Tenure    Digital Savvy    Transformation Ready │  │
│   │   ─────────────────────────────────────────────────────────────    │  │
│   │   CFO              22 yrs    Low              Skeptical            │  │
│   │   CIO              15 yrs    Medium           Mixed                │  │
│   │   COO              18 yrs    Low              Resistant            │  │
│   │   Chief Actuary    25 yrs    Medium           Skeptical            │  │
│   │   EVP Personal     12 yrs    Low              Resistant            │  │
│   │   EVP Commercial   8 yrs     Medium           Supportive           │  │
│   │   CHRO             5 yrs     High             Champion             │  │
│   │   CMO              3 yrs     High             Champion             │  │
│   │   General Counsel  20 yrs    Low              Cautious             │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Distribution Channel Dynamics

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DISTRIBUTION ANALYSIS                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   INDEPENDENT AGENT NETWORK                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Total Appointed Agents: 4,200                                     │  │
│   │   Active Agents (wrote business this year): 3,100                   │  │
│   │   Average Atlas Share of Agent's Book: 18%                          │  │
│   │                                                                     │  │
│   │   Agent Demographics:                                               │  │
│   │   • Average age: 54                                                 │  │
│   │   • <35 years old: 8%                                               │  │
│   │   • Will retire in 5 years: 25%                                     │  │
│   │                                                                     │  │
│   │   Agent Feedback:                                                   │  │
│   │   • "Atlas systems are slowest to work with"                        │  │
│   │   • "Can't compete with Progressive's instant quotes"               │  │
│   │   • "Young customers don't want to call me"                         │  │
│   │   • "I need better digital tools"                                   │  │
│   │   • "Commission cuts will make me move business elsewhere"          │  │
│   │                                                                     │  │
│   │   Top Agent Concerns About Digital:                                 │  │
│   │   • 82% worried about being "disintermediated"                      │  │
│   │   • 65% feel underprepared for digital selling                      │  │
│   │   • 45% considering dropping Atlas due to poor systems              │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   DIRECT CHANNEL                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Current: 15% of new business                                      │  │
│   │   Call center: 95% of direct business                               │  │
│   │   Online self-service: 5% of direct business                        │  │
│   │                                                                     │  │
│   │   Industry Benchmark:                                               │  │
│   │   • GEICO: 100% direct, 80% digital                                │  │
│   │   • Progressive: 50% direct, 70% digital                            │  │
│   │   • Industry average: 35% direct, 45% digital                       │  │
│   │                                                                     │  │
│   │   Atlas Online Quote Completion Rate: 18%                           │  │
│   │   Industry Average: 45%                                             │  │
│   │   InsurTech Leaders: 72%                                            │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   CHANNEL CONFLICT RISK                                                     │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │   Tension Points:                                                   │  │
│   │   • Agents view digital as threat to their business                 │  │
│   │   • Direct-to-consumer would compete with agents                    │  │
│   │   • Agents historically powerful political force                    │  │
│   │   • Any digital investment seen as "taking from agents"             │  │
│   │                                                                     │  │
│   │   Past Experience:                                                  │  │
│   │   • 2018: Attempted direct initiative; agent revolt; project killed │  │
│   │   • Lost 400 agents and $180M premium                               │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Strategic Options

The board has asked you to evaluate the following options:

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    STRATEGIC OPTIONS                                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║   OPTION 1: BIG BANG TRANSFORMATION                                        ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Description: Complete core system replacement in 3-4 years        │ ║
║   │                                                                     │ ║
║   │   Investment: $600-800M over 4 years                                │ ║
║   │   Key Features:                                                     │ ║
║   │   • Replace all legacy systems with modern cloud platform           │ ║
║   │   • Build new digital customer experience                           │ ║
║   │   • Create omnichannel distribution                                 │ ║
║   │   • Implement AI/ML across underwriting and claims                  │ ║
║   │                                                                     │ ║
║   │   Pros: Comprehensive solution, industry-leading capabilities       │ ║
║   │   Cons: High risk, long timeline, execution complexity              │ ║
║   │         Historical failure rate of large IT projects: 70%           │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
║   OPTION 2: INCREMENTAL MODERNIZATION                                      ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Description: Gradual modernization through API layer and digital  │ ║
║   │                front-ends while preserving core systems             │ ║
║   │                                                                     │ ║
║   │   Investment: $200-300M over 5 years                                │ ║
║   │   Key Features:                                                     │ ║
║   │   • API layer on top of existing systems                            │ ║
║   │   • New customer and agent digital interfaces                       │ ║
║   │   • Selective use of AI/ML tools                                    │ ║
║   │   • Cloud hosting for new capabilities only                         │ ║
║   │                                                                     │ ║
║   │   Pros: Lower risk, faster wins, preserves existing investment      │ ║
║   │   Cons: May not solve fundamental problems, perpetuates tech debt   │ ║
║   │         Competitors may outpace, limited transformation potential   │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
║   OPTION 3: ACQUIRE INSURTECH / BUILD DIGITAL ARM                          ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Description: Acquire or build separate digital-native business    │ ║
║   │                                                                     │ ║
║   │   Investment: $300-500M for acquisition + $100M annual investment   │ ║
║   │   Key Features:                                                     │ ║
║   │   • Acquire InsurTech for technology and talent                     │ ║
║   │   • Operate separately to protect digital culture                   │ ║
║   │   • Migrate younger customers to digital brand                      │ ║
║   │   • Eventually merge capabilities back                              │ ║
║   │                                                                     │ ║
║   │   Pros: Fast capability acquisition, talent infusion, market signal │ ║
║   │   Cons: Integration risk, culture clash, two companies to run       │ ║
║   │         May not solve core business issues                          │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
║   OPTION 4: STRATEGIC PARTNERSHIP                                          ║
║   ┌─────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                     │ ║
║   │   Description: Partner with technology vendor for platform          │ ║
║   │                                                                     │ ║
║   │   Investment: $100-150M upfront + $50M+ annual fees                 │ ║
║   │   Key Features:                                                     │ ║
║   │   • Use vendor platform (Duck Creek, Guidewire, etc.)               │ ║
║   │   • Leverage vendor's R&D investment                                │ ║
║   │   • Standard implementation with customization                      │ ║
║   │   • Vendor assumes technology risk                                  │ ║
║   │                                                                     │ ║
║   │   Pros: Proven platform, faster implementation, less risk           │ ║
║   │   Cons: Less differentiation, dependency, ongoing fees              │ ║
║   │         Competitors may use same platform                           │ ║
║   │                                                                     │ ║
║   └─────────────────────────────────────────────────────────────────────┘ ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Board Expectations

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BOARD MANDATE                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   IMMEDIATE PRIORITIES                                                      │
│   • Stop market share erosion                                               │
│   • Improve customer experience (NPS from 32 to 50 in 3 years)              │
│   • Halt expense ratio deterioration                                        │
│                                                                             │
│   STRATEGIC OUTCOMES (3-5 YEAR)                                             │
│   • Return combined ratio below 100%                                        │
│   • Achieve 4%+ premium growth (market rate)                                │
│   • Build digital capabilities competitive with industry                    │
│   • Attract younger customer demographic                                    │
│   • Maintain strong agent relationships                                     │
│                                                                             │
│   FINANCIAL PARAMETERS                                                      │
│   • Maximum investment: $500M over 5 years                                  │
│   • Maintain AM Best A rating (min $2B surplus)                             │
│   • ROE must not fall below 5% during transformation                        │
│   • Dividends can be reduced but not eliminated                             │
│                                                                             │
│   RISK TOLERANCE                                                            │
│   • Moderate; board has seen too many failed IT projects                    │
│   • Prefer phased approach with clear milestones                            │
│   • Must maintain customer service during transition                        │
│   • Cannot afford regulatory issues or data breaches                        │
│                                                                             │
│   STAKEHOLDER CONSIDERATIONS                                                │
│   • Independent agents must remain viable channel                           │
│   • Employee displacement must be managed humanely                          │
│   • Community presence matters (headquarters in Hartford)                   │
│   • Regulators watching digital practices closely                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Case Questions

### Part A: Strategic Assessment (Apply Phase 1, 3 knowledge)

1. **Market Analysis**
   - What is driving the erosion of Atlas's competitive position?
   - How should Atlas think about its "right to win" in the digital future?
   - Is digital transformation the right diagnosis, or are there other issues?

2. **Strategic Choice**
   - Evaluate each of the four strategic options
   - What hybrid approach might be optimal?
   - What is your recommended strategic direction and why?

### Part B: Digital Strategy (Apply Phase 7, 8 knowledge)

3. **Technology Architecture**
   - What should Atlas's target technology architecture look like?
   - How should Atlas approach the build vs. buy vs. partner decision?
   - What technology investments should be prioritized first?

4. **Data and Analytics**
   - How should Atlas leverage data as a competitive advantage?
   - What AI/ML applications offer the highest value?
   - What data governance capabilities are needed?

5. **Digital Customer Experience**
   - Design the target digital customer experience for Atlas
   - How should Atlas approach mobile-first design?
   - What customer journeys should be digitized first?

### Part C: Channel Strategy (Apply Phase 4 knowledge)

6. **Distribution Transformation**
   - How should Atlas evolve its distribution model?
   - What is your strategy to avoid the channel conflict that killed the 2018 initiative?
   - What digital tools and support should agents receive?

7. **Direct-to-Consumer**
   - Should Atlas build a direct digital channel?
   - How can Atlas compete with GEICO and InsurTechs?
   - What customer segments should be targeted through which channels?

### Part D: People and Change (Apply Phase 6, 9 knowledge)

8. **Organization Design**
   - What organizational changes are needed to support digital transformation?
   - Should Atlas create a separate digital unit or integrate capabilities?
   - What new roles and skills are required?

9. **Change Management**
   - How would you address employee fears about automation?
   - What is your strategy for the executive team (some resistant, some supportive)?
   - How would you create urgency without creating panic?

10. **Talent Strategy**
    - How will Atlas attract digital talent to Hartford?
    - What should be done about the 52% of employees who fear losing their jobs?
    - How do you reskill 8,500 employees for a digital future?

### Part E: Financial Analysis (Apply Phase 2 knowledge)

11. **Investment Case**
    - Develop a financial model for your recommended approach
    - What are the expected costs, benefits, and ROI?
    - How will you fund the transformation while maintaining capital adequacy?

12. **Value Drivers**
    - What value will digital transformation create?
    - How will success be measured?
    - What is the downside scenario if transformation fails?

### Part F: Implementation (Apply all phases)

13. **Transformation Roadmap**
    - Develop a detailed 5-year transformation roadmap
    - What are the key phases and milestones?
    - What dependencies and sequencing matter most?

14. **Governance and Risk**
    - How should the transformation be governed?
    - What are the biggest risks and how will you mitigate them?
    - What metrics will you track to measure progress?

15. **CEO Agenda**
    - What should be your 100-day plan for launching this transformation?
    - How will you allocate your personal time and attention?
    - What board communication cadence and content will you use?

---

## Supporting Exhibits

### Exhibit 1: Customer Journey Pain Points

| Journey Stage | Current State | Customer Feedback | Competitive Gap |
|---------------|---------------|-------------------|-----------------|
| Get Quote | 20+ minutes, requires call | "Why can't I just get a quote online?" | InsurTechs: 2-3 minutes |
| Buy Policy | Paper forms, mail/fax | "It's 2024, why am I faxing?" | InsurTechs: 5 minutes digital |
| Manage Policy | Call only, 9-5 hours | "I can only call during work hours" | Self-service available 24/7 |
| File Claim | 45-minute call, forms | "I had to tell my story 5 times" | AI-powered: 3 minutes |
| Track Claim | Call for updates | "Why can't I see status online?" | Real-time tracking standard |
| Renew | Paper bill, check payment | "I forgot and my policy lapsed" | Auto-renewal, digital payment |

### Exhibit 2: Benchmarking Analysis

| Capability | Atlas | Industry Avg | Best-in-Class | Gap |
|------------|-------|--------------|---------------|-----|
| Quote-to-Bind (minutes) | 1,440 | 60 | 5 | Critical |
| Claims cycle time (days) | 21 | 12 | 3 | Critical |
| Customer self-service rate | 15% | 45% | 80% | Critical |
| Mobile app rating | 2.1★ | 3.8★ | 4.8★ | Critical |
| Expense ratio | 34% | 30% | 22% | High |
| Agent digital satisfaction | 45% | 65% | 85% | High |
| Data scientist/actuary ratio | 0.1 | 0.3 | 0.8 | High |

### Exhibit 3: Transformation Investment Scenarios

| Scenario | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Total |
|----------|--------|--------|--------|--------|--------|-------|
| Big Bang | $120M | $180M | $200M | $180M | $120M | $800M |
| Incremental | $40M | $50M | $60M | $70M | $80M | $300M |
| Acquire/Build | $350M | $80M | $70M | $60M | $50M | $610M |
| Partnership | $80M | $50M | $50M | $50M | $50M | $280M |

---

## Evaluation Criteria

Your response will be evaluated on:

1. **Strategic Clarity** (25%) - Clear, defensible strategic choices
2. **Digital Competence** (25%) - Sophisticated understanding of technology/digital
3. **Change Leadership** (20%) - Realistic approach to people and culture change
4. **Financial Rigor** (15%) - Sound financial analysis and business case
5. **Implementation Quality** (15%) - Practical, executable roadmap

---

## Submission Guidelines

Prepare a comprehensive digital transformation plan including:

1. Executive Summary (2 pages)
2. Strategic Assessment and Diagnosis (3-4 pages)
3. Digital Strategy and Architecture (3-4 pages)
4. Channel Strategy (2-3 pages)
5. People and Change Strategy (3-4 pages)
6. Financial Analysis and Business Case (2-3 pages)
7. Implementation Roadmap (3-4 pages)
8. Governance and Risk Management (2 pages)
9. CEO 100-Day Plan (1-2 pages)

---

*Case Study 2 of 3 | Module 25: Business Integration Capstone*
