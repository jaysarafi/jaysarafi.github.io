/*
  All papers live in this one file.

  To add a paper: copy one entry, paste it into the right list, and edit it.
  To remove a link: delete that line.
  PDFs go in the papers/ folder. Slides go in the slides/ folder.

  Fields
    title      Paper title (required)
    jmp        true adds a "Job Market Paper" label next to the title
    coauthors  List of { name, url }. url can be null.
    status     Short line such as "Revise and Resubmit, Journal of International Economics"
    abstract   Full abstract (shown behind an "Abstract" toggle)
    note       Short status note (work in progress)
    pdf        Path to a draft PDF in this repo, e.g. "papers/debt_maturity.pdf"
    slides     Path to slides in this repo, e.g. "slides/debt_maturity.pdf"
    ssrn       SSRN link

  The title links to the PDF if there is one, otherwise to SSRN.
  Any value written as "TODO" shows up highlighted so it is easy to spot.
*/

window.WORKING_PAPERS = [
  {
    title: "The Effect of U.S. Monetary Policy on Foreign Firms: Does Debt Maturity Matter?",
    jmp: false,
    coauthors: [
      { name: "Sebastiao Oliveira", url: "https://sites.google.com/view/sebastiaooliveira" },
      { name: "Pedro Simon", url: "https://sites.google.com/view/pedrovitalesimon/home" }
    ],
    status: "Revise and Resubmit, Journal of International Economics",
    abstract: "We show that foreign firms with more long-term debt coming due cut investment by more after contractionary U.S. monetary policy shocks in emerging economies, but not in advanced economies. This pattern is strongest in emerging economies with lower sovereign ratings and wider banking spreads. We rationalize these findings with a model in which firms refinance maturing debt at a marginal cost that rises with the amount placed, and U.S. tightening steepens this funding schedule where refinancing capacity is more sensitive to global conditions. Our findings suggest that debt maturity is an important dimension of heterogeneity in the international transmission of U.S. monetary policy.",
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5009007"
  },
  {
    title: "Optimal Sovereign Debt Structure: Evidence and Theory",
    coauthors: [
      { name: "Jaewon Choi", url: "https://sites.google.com/site/jaewchoi1203" },
      { name: "Sebastiao Oliveira", url: "https://sites.google.com/view/sebastiaooliveira" },
      { name: "Josef Zechner", url: "https://www.wu.ac.at/en/finance/people/faculty/josef-zechner" }
    ],
    abstract: "We document that emerging-market sovereigns have increased leverage while shifting toward local-currency borrowing, alongside a pronounced shortening of maturities. In contrast, advanced economies exhibit neither trend and fund almost exclusively in local currency. We rationalize these patterns with a model in which a sovereign without commitment jointly chooses debt currency and maturity, trading off inflation distortions, rollover risk, and currency mismatch. Higher local-currency leverage, weaker institutions, and greater foreign participation in local-currency markets tilt sovereigns toward shorter maturities, heightening exposure to rollover crises. When commitment frictions are severe, sovereigns rely on foreign-currency debt instead. Using novel granular bond-level data and plausibly exogenous capital-flow shocks, we find strong empirical support.",
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5471087"
  },
  {
    title: "Seized Knowledge: Wartime Vesting and the Long-Run Growth of U.S. Innovation",
    coauthors: [
      { name: "Lovepreet Singh", url: "https://multanilovepreet94.github.io/" }
    ],
    abstract: "During World War II, the United States seized U.S. patents held by residents of the Axis and Axis-occupied countries. Beginning in 1942, the Alien Property Custodian seized about 38,000 patents and licensed them to any American applicant. We digitize the seized patents and construct a measure of each patent subclass’s exposure to the seizure. We find that in exposed subclasses, U.S.-origin patenting rose sharply in 1942, to about 27 percent above unexposed subclasses, and remained 38 percent higher as late as 1975. The increase is larger and more persistent for patents assigned to U.S. firms, and it is not explained by wartime research funding. Patenting in the United States by inventors from the Axis and occupied countries fell by about 78 percent in the exposed subclasses and had not recovered by 1975. The seizure persistently shifted invention in the exposed technologies from foreign to American inventors.",
    pdf: "papers/Rafi_Singh_Seized_Knowledge.pdf"
  },
  {
    title: "Beyond Primary Completion: The Gender Cost of School Access Expansion",
    coauthors: [
      { name: "Siho Park", url: "https://siho-park.github.io/" }
    ]
  },
  {
    title: "Parental Schooling and Children’s Health Behaviors: Evidence from School Expansion in Indonesia",
    coauthors: [
      { name: "Siho Park", url: "https://siho-park.github.io/" }
    ]
  }
];

window.WORK_IN_PROGRESS = [
  {
    title: "Spillover of US Monetary Policy to Asian Economies via Production Networks Channel",
    coauthors: [],
    note: "Draft in progress"
  }
];
