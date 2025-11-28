export const cbmCourses = [
  {
    id: "cbm7",
    courseTitle: "Certified Billing Morphologist (CBM – 7 Levels)",
    price: 29999,
    introPrice: 6599,
    levels: [
      {
        level: 1,
        title: "Healthcare Billing & RCM Fundamentals",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Overview of Healthcare Revenue Cycle",
            description:
              "End-to-end revenue cycle, stakeholders, billing and finance overview.",
          },
          {
            title: "Medical Billing Roles & Documents",
            description:
              "Roles of billers, coders, TPAs and key billing documents.",
          },
          {
            title: "Patient Access & Registration",
            description:
              "Front-end registration, demographics, insurance verification.",
          },
          {
            title: "Healthcare Insurance Basics",
            description:
              "Insurance fundamentals: premiums, deductibles, co-pay, policy structure.",
          },
        ],
        keyConcepts: [
          "Revenue cycle phases and accurate revenue capture.",
          "Billing roles and cross-functional responsibilities.",
          "Accurate patient data entry and insurance checks.",
          "Insurance elements and their impact on billing.",
        ],
        assessment: [
          "Revenue cycle terminology quiz",
          "Insurance concepts quiz",
          "Short written billing flow assignment",
        ],
        project: "Role-play patient registration and insurance verification",
        format: [
          "Video lectures",
          "PDF tutorials",
          "Interactive quizzes",
          "Simulation exercise",
        ],
      },
      {
        level: 2,
        title: "Medical Coding & Documentation Mastery",
        suggestedLearningHours: "12 hours",
        lessons: [
          {
            title: "Medical Terminology & Anatomy for Billing",
            description: "Medical vocabulary and anatomy basics.",
          },
          {
            title: "Diagnosis Coding (ICD-10)",
            description:
              "ICD-10 principles for diagnoses and preventing coding errors.",
          },
          {
            title: "Procedure Coding & Charge Master",
            description:
              "CPT, ICD-10-PCS, DRGs vs fee-for-service, charge master updates.",
          },
          {
            title: "Documentation Standards",
            description:
              "Accurate documentation to support billing and coding.",
          },
        ],
        keyConcepts: [
          "Medical terms for accurate code assignment.",
          "Applying ICD-10 guidelines to diagnoses.",
          "Procedure coding and chargemaster usage.",
          "Complete documentation supporting billed services.",
        ],
        assessment: [
          "Medical terminology matching test",
          "ICD-10 coding exercises",
          "Chargemaster correction drills",
        ],
        project:
          "Analyze a patient case, assign correct codes, and prepare a mock billing form",
        format: [
          "Video lessons",
          "PDF coding guides",
          "Interactive simulations",
          "Worksheets",
        ],
      },
      {
        level: 3,
        title: "Billing Operations & Claim Preparation",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Inpatient vs Outpatient Billing",
            description:
              "Differences in IP and OP billing, DRGs, and itemized billing.",
          },
          {
            title: "Billing Documentation & Forms",
            description:
              "UB-04, itemized bills, invoices, and clinical attachments.",
          },
          {
            title: "Claims Submission & EDI",
            description:
              "Electronic submission, clearinghouses, and EDI workflows.",
          },
          {
            title: "Pre-authorization & Cashless Processes",
            description:
              "Pre-auth workflow and insurer cashless approval process.",
          },
        ],
        keyConcepts: [
          "Rules for IP vs OP billing.",
          "Compliant and complete billing documentation.",
          "EDI claim lifecycle and error resolution.",
          "IRDAI cashless facility and pre-authorization.",
        ],
        assessment: [
          "Create sample IP & OP bills",
          "UB-04 form completion",
          "Simulated EDI claim submission",
          "Mock pre-authorization workflow",
        ],
        project: "End-to-end claim preparation and submission simulation",
        format: [
          "Video tutorials",
          "Billing templates",
          "Case studies",
          "Workflow simulations",
        ],
      },
      {
        level: 4,
        title: "Denials Management & Reimbursement",
        suggestedLearningHours: "8 hours",
        lessons: [
          {
            title: "Denial Reasons & Prevention",
            description: "Common denial causes and claim scrubbing strategies.",
          },
          {
            title: "Claims Follow-up & Resubmission",
            description:
              "EOB interpretation, appeals, corrections, resubmission.",
          },
          {
            title: "Payment Posting & Reconciliation",
            description: "Posting payments, adjustments, and reconciling A/R.",
          },
          {
            title: "Patient Billing & Collections",
            description:
              "Patient statements, co-pay collections, ethical billing.",
          },
        ],
        keyConcepts: [
          "Denial trend analysis and prevention.",
          "Appeal process and insurer timelines.",
          "Accurate payment posting and reconciliation.",
          "Ethical patient collection practices.",
        ],
        assessment: [
          "Denied claim correction exercise",
          "Payment posting simulation",
          "Denial codes quiz",
        ],
        project: "Create a denial tracking log with corrective actions",
        format: [
          "Scenario-based learning",
          "Spreadsheet exercises",
          "PDF guides",
          "Video walkthroughs",
        ],
      },
      {
        level: 5,
        title: "Healthcare Compliance & Ethics in Billing",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Regulatory Compliance (IRDAI & Global)",
            description: "IRDAI billing compliance, HIPAA-like standards.",
          },
          {
            title: "Ethical Billing Practices",
            description:
              "Avoiding upcoding, undercoding, and unethical billing.",
          },
          {
            title: "Fraud Detection & Prevention",
            description: "Identifying fraud patterns and audit practices.",
          },
          {
            title: "Internal Audits & Quality Assurance",
            description:
              "Conducting billing audits and ensuring revenue integrity.",
          },
        ],
        keyConcepts: [
          "IRDAI compliance rules.",
          "Ethical billing standards.",
          "Billing fraud red flags.",
          "Audit methodologies.",
        ],
        assessment: [
          "Compliance issue identification case study",
          "Ethics scenario quiz",
          "Fraud case group discussion",
        ],
        project: "Audit real-like billing records and submit an audit report",
        format: [
          "Interactive case studies",
          "Compliance PDFs",
          "Webinars",
          "Quizzes",
        ],
      },
      {
        level: 6,
        title: "Data Analytics & Process Improvement in Billing",
        suggestedLearningHours: "8 hours",
        lessons: [
          {
            title: "Revenue Cycle Performance Metrics",
            description:
              "KPIs like A/R days, denial rate, net collection rate.",
          },
          {
            title: "Data Analysis for Revenue Integrity",
            description:
              "Using analytics to detect denials and revenue leakage.",
          },
          {
            title: "Lean Six Sigma in Billing",
            description: "Process improvement methodologies for billing.",
          },
          {
            title: "Implementing Process Changes",
            description: "Workflow mapping, bottlenecks, automation.",
          },
        ],
        keyConcepts: [
          "RCM KPI definitions and monitoring.",
          "Dashboard analysis for revenue leakage.",
          "Lean/Six Sigma basics for billing.",
          "Billing process change management.",
        ],
        assessment: [
          "Create a billing KPI dashboard",
          "Billing workflow mapping",
          "Lean concept quiz",
        ],
        project: "Process improvement proposal using Six Sigma principles",
        format: [
          "Video tutorials",
          "PDF guides",
          "Data sets",
          "Discussion forums",
        ],
      },
      {
        level: 7,
        title: "Capstone – Integrated Billing Morphology Project",
        suggestedLearningHours: "12 hours",
        lessons: [
          {
            title: "Capstone Project Orientation",
            description:
              "Understanding the full end-to-end billing project requirements.",
          },
          {
            title: "Project Work",
            description:
              "Apply coding, billing, claims, compliance, and analytics to a complex case.",
          },
          {
            title: "Presentation & Review",
            description:
              "Final report and presentation of the full billing lifecycle.",
          },
        ],
        keyConcepts: [
          "End-to-end billing integration.",
          "Ethical and compliant billing decisions.",
          "Using analytics to improve RCM outcomes.",
          "Reflective practice and process optimization.",
        ],
        assessment: [
          "Major capstone project",
          "Complete billing cycle documentation",
          "Final presentation",
        ],
        project:
          "Complete a real-case billing cycle from registration to payment posting",
        format: [
          "Independent project",
          "Mentorship sessions",
          "PDF guidelines",
          "Presentation submission",
        ],
      },
    ],
  },
  {
    id: "chis7",
    courseTitle: "Certified Health Insurance Specialist (CHIS – 7 Levels)",
    price: 38999,
    introPrice: 6599,
    levels: [
      {
        level: 1,
        title: "Health Insurance Basics & IRDAI Regulations",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Introduction to Health Insurance",
            description:
              "Fundamental terms like premium, deductible, co-pay, sum insured, and policy structure.",
          },
          {
            title: "IRDAI Regulatory Framework",
            description:
              "Role of IRDAI, key definitions, TPA guidelines, and regulatory structure.",
          },
          {
            title: "Policy Features & Types",
            description:
              "Individual vs group plans, floaters, underwriting basics, and exclusions.",
          },
        ],
        keyConcepts: [
          "Roles of insurer, insured, and policyholder.",
          "Premiums, deductibles, co-payments, coverage limits.",
          "IRDAI regulations and guidelines.",
          "Types of health insurance plans.",
        ],
        assessment: [
          "Terminology quiz",
          "Feature comparison exercise",
          "IRDAI rules short assignment",
        ],
        project: "Create a one-page insurance terminology cheat sheet",
        format: ["Videos", "PDFs", "Quizzes", "Assignments"],
      },

      {
        level: 2,
        title: "Insurance Products, Networks & TPA Operations",
        suggestedLearningHours: "12 hours",
        lessons: [
          {
            title: "Health Insurance Products",
            description:
              "Indemnity vs benefit-based plans, coverage patterns, premium calculation.",
          },
          {
            title: "Benefits, Exclusions & Riders",
            description:
              "Waiting periods, exclusions, additional riders, sub-limits.",
          },
          {
            title: "Network Hospitals & Empanelment",
            description:
              "Hospital empanelment process, contract terms, network development.",
          },
          {
            title: "Role of TPAs",
            description:
              "TPA functions such as pre-auth, claims processing, and hospital coordination.",
          },
        ],
        keyConcepts: [
          "Plan types and underwriting factors.",
          "Exclusions, riders, waiting periods.",
          "Network hospital models.",
          "TPA workflow and responsibilities.",
        ],
        assessment: [
          "Compare two insurance products",
          "Premium calculation exercise",
          "Benefits and exclusions quiz",
        ],
        project: "Draft a mock insurer–hospital empanelment clause",
        format: ["Videos", "PDFs", "Simulations", "Use-cases"],
      },

      {
        level: 3,
        title: "Cashless & Reimbursement Claims",
        suggestedLearningHours: "8 hours",
        lessons: [
          {
            title: "Cashless Claims Process",
            description:
              "End-to-end cashless workflow from admission to approval.",
          },
          {
            title: "Reimbursement Claims Process",
            description:
              "Submitting reimbursement claims with supporting documents.",
          },
          {
            title: "Claims Documentation",
            description:
              "Bills, discharge summary, prescriptions, medical records — requirements and checks.",
          },
        ],
        keyConcepts: [
          "Pre-authorization workflow.",
          "Cashless vs reimbursement differences.",
          "Mandatory claim documents.",
        ],
        assessment: [
          "Pre-auth simulation",
          "Create reimbursement claim package",
          "Documentation quiz",
        ],
        project: "Create a comparison flowchart for cashless vs reimbursement",
        format: ["Videos", "Case studies", "Quizzes", "Templates"],
      },

      {
        level: 4,
        title: "Claims Adjudication & TPA Coordination",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Claim Adjudication Fundamentals",
            description:
              "Coverage checks, sub-limits, co-pay, non-payables, payable amount calculation.",
          },
          {
            title: "TPA Claims Workflow",
            description:
              "Internal workflow from claim intimation to insurer communication.",
          },
          {
            title: "Hospital Coordination",
            description:
              "Clarification requests, document follow-up, communication skills.",
          },
          {
            title: "Settlement & Payout Calculation",
            description: "Settlement statement creation and reconciliation.",
          },
        ],
        keyConcepts: [
          "Adjudication rules.",
          "TPA involvement in claims.",
          "Hospital–TPA communication.",
          "Settlement calculations.",
        ],
        assessment: [
          "Adjudication form exercise",
          "Claim calculation quiz",
          "Role-play scenarios",
        ],
        project:
          "Prepare a Claims Decision Report for a complex hospitalization case",
        format: ["Workflows", "PDF guides", "Videos", "Simulations"],
      },

      {
        level: 5,
        title: "Rejections, Appeals & Grievance Redressal",
        suggestedLearningHours: "8 hours",
        lessons: [
          {
            title: "Claim Rejections & Denials",
            description:
              "Common reasons for denial, preventable errors, and how to avoid them.",
          },
          {
            title: "Appeals & Reconsideration",
            description:
              "Drafting effective appeal letters, timelines, and justification.",
          },
          {
            title: "IRDAI Grievance Handling",
            description:
              "Escalation stages: insurer → grievance cell → Ombudsman.",
          },
          {
            title: "Disallowed Amounts",
            description: "Reasons for deductions and communication techniques.",
          },
        ],
        keyConcepts: [
          "Denial vs rejection.",
          "Appeal drafting.",
          "IRDAI grievance process.",
          "Disallowance categories.",
        ],
        assessment: [
          "Case study of denied claim",
          "Appeal letter writing",
          "IRDAI grievance quiz",
        ],
        project:
          "Prepare a Grievance Report with escalation sequence and justification",
        format: ["Case studies", "PDF rules", "Quizzes", "Role-plays"],
      },

      {
        level: 6,
        title: "Fraud Prevention & Global Best Practices",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Insurance Fraud Types",
            description:
              "Provider fraud, patient fraud, internal fraud, and detection signals.",
          },
          {
            title: "IRDAI Fraud Control Guidelines",
            description:
              "Mandatory fraud monitoring, reporting formats, risk mitigation.",
          },
          {
            title: "Ethical Claims Handling",
            description: "Professional integrity, fairness, confidentiality.",
          },
          {
            title: "International Best Practices",
            description:
              "HIPAA, GDPR, medical coding standards, global compliance norms.",
          },
        ],
        keyConcepts: [
          "Fraud patterns.",
          "IRDAI fraud rules.",
          "Ethical claims management.",
          "Global security standards.",
        ],
        assessment: [
          "Fraud identification quiz",
          "Case analysis",
          "Ethics scenario assessment",
        ],
        project:
          "Create a Fraud Prevention Checklist for a TPA or insurance claims team",
        format: ["Videos", "PDFs", "Scenario exercises", "Group discussion"],
      },

      {
        level: 7,
        title: "Capstone – End-to-End Claims Management",
        suggestedLearningHours: "12 hours",
        lessons: [
          {
            title: "Claims Audit Techniques",
            description:
              "Audit completeness, accuracy checks, missed charge detection.",
          },
          {
            title: "End-to-End Claims Simulation",
            description:
              "Complete workflow from enrollment → hospitalization → payout.",
          },
          {
            title: "Presentation & Reporting",
            description: "Final report creation and project presentation.",
          },
        ],
        keyConcepts: [
          "Claims auditing.",
          "Revenue leakage detection.",
          "Practical application across all modules.",
          "Process optimization.",
        ],
        assessment: [
          "Audit assignment",
          "Full case simulation",
          "Final project presentation",
        ],
        project:
          "Complete an end-to-end Claims Management Project and submit a claims audit report",
        format: ["Project", "Mentor sessions", "PDF templates", "Presentation"],
      },
    ],
  },
  {
    id: "chbse2",
    courseTitle:
      "Certified Healthcare Billing Support Executive (CHBSE – 2 Levels)",
    price: 15999,
    introPrice: 5999,
    levels: [
      {
        level: 1,
        title: "Foundations of Hospital Billing",
        suggestedLearningHours: "18 hours",
        lessons: [
          {
            title: "Introduction to Hospital Billing",
            description:
              "Hospital revenue cycle overview, stakeholders, billing terminology, documents, and the RCM workflow.",
          },
          {
            title: "Medical Terminology for Billers",
            description:
              "Key medical terms and basic anatomy needed to understand diagnoses and services.",
          },
          {
            title: "Basics of Diagnosis Coding",
            description:
              "Introduction to ICD-10-CM guidelines and the importance of complete and error-free diagnosis coding.",
          },
          {
            title: "Procedure Coding Basics",
            description:
              "CPT, ICD-10-PCS basics and an introduction to the hospital chargemaster.",
          },
          {
            title: "Patient Registration & Insurance Verification",
            description:
              "Front-end processes: patient demographics, insurance data, eligibility checks, and their impact on claim success.",
          },
          {
            title: "Cashless Claims & Pre-authorization",
            description:
              "Cashless hospitalization workflow, insurer communication, and TPA coordination for pre-auth approvals.",
          },
        ],
        keyConcepts: [
          "End-to-end hospital billing cycle and key billing roles.",
          "Using medical terminology to support accurate coding.",
          "Distinguishing diagnosis and procedure codes.",
          "Chargemaster maintenance and DRG vs itemized billing.",
          "Accurate patient registration and insurance verification.",
          "IRDAI cashless facility rules and pre-authorization workflow.",
        ],
        assessment: [
          "Terminology and revenue cycle quizzes",
          "Medical vocabulary matching exercise",
          "ICD-10 coding practice for simple cases",
          "Simulated patient registration activity",
          "Pre-authorization form completion task",
        ],
        project:
          "Mini-project: Complete registration, assign codes, and prepare a preliminary hospital bill for a sample patient scenario.",
        format: [
          "Video sessions",
          "Interactive e-learning modules",
          "Downloadable reference documents",
          "Practical simulations",
        ],
      },

      {
        level: 2,
        title: "Advanced Hospital Billing & Claims",
        suggestedLearningHours: "20 hours",
        lessons: [
          {
            title: "Inpatient vs Outpatient Billing",
            description:
              "Detailed IP vs OP billing rules, package rates, itemized services, room charges, surgical packages, and day-care billing.",
          },
          {
            title: "Hospital Billing Documentation",
            description:
              "Preparing itemized bills, statements, discharge summaries, and UB-04 (CMS-1450) claim forms.",
          },
          {
            title: "Electronic Claims Submission (EDI)",
            description:
              "Claim submission workflow, clearinghouses, file formats, status tracking, and resolving EDI errors.",
          },
          {
            title: "Denials Management",
            description:
              "Identifying denial causes, interpreting EOBs, preparing corrections, resubmissions, and appeal letters.",
          },
          {
            title: "Regulatory Compliance in Billing",
            description:
              "IRDAI billing regulations, anti-fraud rules, patient rights, insurer discount policies, and ethical billing practices.",
          },
          {
            title: "Capstone Project – Integrated Billing Case",
            description:
              "Complete end-to-end billing case from admission to final claim settlement.",
          },
        ],
        keyConcepts: [
          "Advanced IP vs OP billing structures and rules.",
          "Complete billing documentation and use of UB-04.",
          "EDI workflows and resolving claim file rejections.",
          "Denial analysis, correction, and appeal strategies.",
          "IRDAI regulations and ethical billing standards.",
          "Integrating all billing skills into a real-case scenario.",
        ],
        assessment: [
          "Inpatient and outpatient bill creation exercises",
          "UB-04 form completion",
          "Simulated EDI claim submission and error correction",
          "Denied claim analysis and appeal drafting",
          "Compliance quizzes",
        ],
        project:
          "Capstone Billing Project: Complete registration, coding, billing creation, claim submission, denial handling, and final settlement for a provided hospital case.",
        format: [
          "Video lectures",
          "Software demos",
          "Downloadable templates and forms",
          "Capstone simulation with instructor feedback",
        ],
      },
    ],
  },
  {
    id: "hhs3",
    courseTitle: "Certified Healthcare Hospitality Specialist (HHS – 3 Levels)",
    price: 18599,
    introPrice: 5599,
    levels: [
      // LEVEL 1 -----------------------------------------
      {
        level: 1,
        title: "Fundamentals of Healthcare Hospitality",
        suggestedLearningHours: "8 hours",
        lessons: [
          {
            title: "Introduction to Healthcare Hospitality",
            description:
              "Defines hospitality in healthcare: creating a welcoming and comfortable environment. Covers patient experience impact on outcomes and hospital reputation.",
          },
          {
            title: "Communication & Service Excellence",
            description:
              "Soft skills training: polite communication, active listening, empathy, cultural sensitivity, and managing patient inquiries or wait-time concerns professionally.",
          },
          {
            title: "Environment & Amenities Management",
            description:
              "Maintaining a hospitable environment: cleanliness, comfortable waiting areas, amenities like wheelchairs/water, and coordination with facility teams.",
          },
          {
            title: "Basics of Patient Rights & Confidentiality",
            description:
              "Understanding patient rights including privacy and dignity. Teaches boundaries of information sharing and professional confidentiality.",
          },
        ],
        keyConcepts: [
          "Patient-centered care and hospitality mindset.",
          "Communication techniques to reduce anxiety.",
          "Impact of physical environment on patient perception.",
          "Patient privacy and confidentiality basics.",
        ],
        assessment: [
          "Scenario-based communication quiz.",
          "Role-play for handling wait-time complaints.",
          "Short reflection writing on importance of hospitality.",
        ],
        project:
          "Clinic Walk-through Audit: Assess hospitality factors (signage, cleanliness, staff behavior) and give improvement suggestions.",
        format: [
          "Online video demonstrations",
          "Slides/infographics for communication skills",
          "Interactive role-play",
          "Self-evaluation checklists",
        ],
      },

      // LEVEL 2 -----------------------------------------
      {
        level: 2,
        title: "Patient Experience & Service Quality",
        suggestedLearningHours: "10 hours",
        lessons: [
          {
            title: "Patient Experience Journey Mapping",
            description:
              "Mapping the patient journey end-to-end and identifying touchpoints for service improvement.",
          },
          {
            title: "Service Quality Standards",
            description:
              "Introduces SERVQUAL and hospital service excellence standards, with tools to measure satisfaction.",
          },
          {
            title: "Handling Difficult Situations",
            description:
              "Techniques for de-escalation, conflict resolution, service recovery, and handling anxious or upset patients.",
          },
          {
            title: "Cultural Competence in Healthcare Service",
            description:
              "Respecting cultural differences, adapting communication styles, and accommodating special needs.",
          },
          {
            title: "Coordination with Clinical Teams",
            description:
              "How hospitality teams work with clinical staff to ensure smooth patient communication and experience.",
          },
        ],
        keyConcepts: [
          "Understanding and improving patient touchpoints.",
          "Benchmarking service quality and using patient feedback.",
          "Professional conflict resolution in healthcare.",
          "Cultural awareness and personalized patient service.",
          "Interdepartmental communication for smoother care delivery.",
        ],
        assessment: [
          "Angry patient role-play evaluation.",
          "Quiz on service quality principles.",
          "Case study analysis of poor patient journey.",
        ],
        project:
          "Create a Patient Experience Improvement Plan with at least three actionable service enhancements.",
        format: [
          "Patient testimonial videos",
          "Journey mapping templates",
          "Discussion workshops",
          "Written assignments",
        ],
      },

      // LEVEL 3 -----------------------------------------
      {
        level: 3,
        title: "Advanced Healthcare Hospitality & Leadership",
        suggestedLearningHours: "12 hours",
        lessons: [
          {
            title: "Hospitality Program Management",
            description:
              "Managing hospital hospitality programs like concierge, volunteer services, amenities, and patient liaison teams.",
          },
          {
            title: "Training & Mentoring Staff",
            description:
              "Developing staff through training, SOP creation, mentoring, and performance evaluation.",
          },
          {
            title: "Measuring Satisfaction & Quality Improvement",
            description:
              "Using surveys (NPS, Press Ganey), data interpretation, and PDSA cycles for continuous improvement.",
          },
          {
            title: "Healthcare Hospitality Capstone Project",
            description:
              "Create a proposal for a new hospitality initiative or improvement project.",
          },
        ],
        keyConcepts: [
          "Leadership principles for patient experience teams.",
          "Importance of SOPs and continuous staff training.",
          "Using satisfaction metrics for service improvement.",
          "Planning and executing new hospitality initiatives.",
        ],
        assessment: [
          "Draft a patient satisfaction survey + action plan.",
          "Leadership scenario multiple-choice quiz.",
          "SOP drafting evaluation.",
        ],
        project:
          "Capstone Initiative Proposal: A detailed proposal for improving or introducing a hospitality service in a healthcare facility.",
        format: [
          "Case study readings",
          "SOP & project plan templates",
          "Mentorship webinars",
          "Peer review of capstone project",
        ],
      },
    ],
  },
  {
    id: "ccc-cs",
    courseTitle: "Certified Clinical Claims & Cashless Specialist (CCC-CS)",
    introPrice: 7599,
    totalLevels: 6,
    price: 39999,
    rating: 4.9,

    levels: [
      // -----------------------------------------------------
      // LEVEL 1
      // -----------------------------------------------------
      {
        level: 1,
        title: "Health Insurance & Billing Foundations",
        suggestedLearningHours: "10",

        lessons: [
          {
            title: "Lesson 1: Healthcare Insurance Overview",
            description:
              "Explains how health insurance works—coverage, premiums, exclusions, and key terminology essential for understanding clinical claims.",
          },
          {
            title: "Lesson 2: Hospital Billing Basics",
            description:
              "Introduces core hospital billing components such as itemized bills, doctor fees, room rent, and pharmacy charges.",
          },
          {
            title: "Lesson 3: Network Hospitals & Cashless Eligibility",
            description:
              "Covers network empanelment, cashless eligibility criteria, and differences between in-network and out-of-network processes.",
          },
          {
            title: "Lesson 4: Roles in Claims Process",
            description:
              "Overview of responsibilities of hospital billing teams, TPAs, insurers, and patients during claim processing.",
          },
        ],

        keyConcepts: [
          "Insurance basics: coverage, sum insured, deductions, exclusions",
          "How to interpret a hospital bill",
          "Understanding network hospitals & cashless flow",
          "Roles of TPA, insurer, patient, hospital",
        ],

        assessment: [
          "Quiz on basic billing & insurance terms",
          "Worksheet on labeling parts of a hospital bill",
          "Scenario-based role understanding",
        ],

        assignment:
          "Create a simple infographic explaining Cashless vs Reimbursement flow.",
      },

      // -----------------------------------------------------
      // LEVEL 2
      // -----------------------------------------------------
      {
        level: 2,
        title: "Pre-Authorization & Cashless Claim Processing",
        suggestedLearningHours: "8",

        lessons: [
          {
            title: "Lesson 1: Pre-Authorization Procedures",
            description:
              "Step-by-step guide to filling pre-auth forms with diagnosis, treatment details, and cost estimates.",
          },
          {
            title: "Lesson 2: TPA Coordination for Cashless",
            description:
              "Effective communication techniques for handling TPA queries and approvals.",
          },
          {
            title: "Lesson 3: Inpatient Cashless Workflow",
            description:
              "Admission-to-discharge workflow for cashless cases with interim approvals.",
          },
          {
            title: "Lesson 4: Discharge and Claim Closure",
            description:
              "Preparing final bills, reconciliation, insurer settlement, and patient communication.",
          },
        ],

        keyConcepts: [
          "Pre-auth evaluation criteria",
          "TPA communication best practices",
          "Interim and enhancement approvals",
          "Cashless final settlement process",
        ],

        assessment: [
          "Pre-auth form completion exercise",
          "Mock TPA email/phone query handling",
          "Cashless workflow step-order quiz",
        ],

        assignment:
          "Create a 'Cashless Claim Journal' for a sample patient scenario.",
      },

      // -----------------------------------------------------
      // LEVEL 3
      // -----------------------------------------------------
      {
        level: 3,
        title: "Reimbursement Claim Processing",
        suggestedLearningHours: "6",

        lessons: [
          {
            title: "Lesson 1: Reimbursement Form Filling",
            description:
              "Field-by-field explanation of filling insurer reimbursement claim forms.",
          },
          {
            title: "Lesson 2: Compiling Claim Documents",
            description:
              "Preparing complete document bundles including bills, summaries, prescriptions, and receipts.",
          },
          {
            title: "Lesson 3: Submission and Tracking",
            description:
              "Online and offline claim submission methods with status-tracking techniques.",
          },
          {
            title: "Lesson 4: Coordination with Patients",
            description:
              "Guiding patients about deadlines, documentation, and error-free submission.",
          },
        ],

        keyConcepts: [
          "Reimbursement document checklist",
          "Submission methods",
          "Avoiding claim rejection",
          "Advising patients professionally",
        ],

        assessment: [
          "Fill missing fields on sample claim form",
          "Document identification quiz",
          "Role-play explaining reimbursement steps to a patient",
        ],

        assignment: "Create a 1-page Reimbursement Guide for patients.",
      },

      // -----------------------------------------------------
      // LEVEL 4
      // -----------------------------------------------------
      {
        level: 4,
        title: "Claims Adjudication & Settlement Calculations",
        suggestedLearningHours: "10",

        lessons: [
          {
            title: "Lesson 1: Policy Terms Impact on Claims",
            description:
              "Deep dive into sub-limits, co-pay, deductibles, non-payables, waiting periods, and exclusions.",
          },
          {
            title: "Lesson 2: Claim Adjudication Process",
            description:
              "Internal insurer process of verification, evaluation, and approval.",
          },
          {
            title: "Lesson 3: Calculating Payable Amounts",
            description:
              "Hands-on settlement calculation practice on multiple scenarios.",
          },
          {
            title: "Lesson 4: Communication of Settlements",
            description:
              "Understanding EOB/settlement letters and explaining deductions clearly.",
          },
        ],

        keyConcepts: [
          "Policy conditions affecting payouts",
          "Adjudication checklist",
          "Manual claim settlement calculation",
          "Decoding EOB statements",
        ],

        assessment: [
          "Mini-scenario settlement calculations",
          "Mock adjudication review",
          "Policy-term quiz",
        ],

        assignment:
          "Create a Claim Settlement Worksheet for a multi-bill case.",
      },

      // -----------------------------------------------------
      // LEVEL 5
      // -----------------------------------------------------
      {
        level: 5,
        title: "Denial Management & Appeals",
        suggestedLearningHours: "8",

        lessons: [
          {
            title: "Lesson 1: Common Reasons for Denial",
            description:
              "Explains coding errors, missing docs, lapsed policies, and coverage issues.",
          },
          {
            title: "Lesson 2: Resolving Claim Queries",
            description:
              "Drafting professional replies to insurer queries and retrieving necessary documents.",
          },
          {
            title: "Lesson 3: Preparing Appeal Letters",
            description:
              "Crafting professional, evidence-backed appeal letters with policy references.",
          },
          {
            title: "Lesson 4: Escalation & Ombudsman",
            description:
              "How and when to escalate unresolved disputes via grievance channels or Ombudsman.",
          },
        ],

        keyConcepts: [
          "Types of denials: technical vs policy",
          "Effective query response strategies",
          "Writing strong appeal letters",
          "IRDAI grievance process",
        ],

        assessment: [
          "Analyse and break down a denial letter",
          "Denial scenario decision-making",
          "Draft a query response",
        ],

        assignment: "Write a full Appeal Letter for a denied claim case study.",
      },

      // -----------------------------------------------------
      // LEVEL 6
      // -----------------------------------------------------
      {
        level: 6,
        title: "Compliance, Fraud & Capstone Project",
        suggestedLearningHours: "12",

        lessons: [
          {
            title: "Lesson 1: Regulatory Compliance in Claims",
            description:
              "Covers IRDAI claim timelines, fair practice rules, documentation norms.",
          },
          {
            title: "Lesson 2: Fraud Detection in Claims",
            description:
              "Identifying fraud indicators and working with fraud investigation units.",
          },
          {
            title: "Lesson 3: Ethical Conduct & Patient Trust",
            description:
              "Ensuring confidentiality, transparency, and ethical decision-making.",
          },
          {
            title: "Lesson 4: Capstone Project",
            description:
              "Complete end-to-end claim handling for a complex case scenario.",
          },
        ],

        keyConcepts: [
          "IRDAI norms",
          "Fraud red flags",
          "Ethical standards",
          "End-to-end claim management",
        ],

        assessment: [
          "Compliance quiz",
          "Fraud scenario analysis",
          "Final capstone project evaluation",
        ],

        assignment:
          "Create a complete End-to-End Claim File with forms, communication logs, calculations, and final outcome.",
      },
    ],
  },
  {
    id: "chsa",
    courseTitle: "Certified Healthcare Service Associate (CHSA)",
    introPrice: 4599,
    totalLevels: 1,
    price: 8999,
    rating: 4.8,

    levels: [
      {
        level: 1,
        title: "Healthcare Service Associate Fundamentals",
        suggestedLearningHours: "15",

        lessons: [
          {
            title: "Lesson 1: Healthcare System & Role of Service Associates",
            description:
              "Introduction to how hospitals and clinics operate, understanding the patient journey, and the responsibilities of service associates including front-desk, patient guidance, and coordination with clinical teams.",
          },
          {
            title: "Lesson 2: Patient Registration & Scheduling",
            description:
              "Training on accurate patient data collection and efficient scheduling of appointments or admissions to prevent downstream billing errors.",
          },
          {
            title: "Lesson 3: Communication & Customer Service Skills",
            description:
              "Teaches warm greetings, clear communication, empathy, handling patient inquiries/complaints, confidentiality principles, and cultural sensitivity in healthcare.",
          },
          {
            title: "Lesson 4: Insurance Basics for Front-Desk",
            description:
              "Basic overview of health insurance terms like co-pay, network hospitals, cashless vs reimbursement, and directing patients to the right department.",
          },
          {
            title: "Lesson 5: Hospital Information Systems (HIS) Introduction",
            description:
              "Hands-on with hospital software for registration, patient check-in, appointment management, printing ID bands, and basic record updates.",
          },
          {
            title: "Lesson 6: Safety, Etiquette & Hospital Protocols",
            description:
              "Covers patient privacy, infection control basics, telephone etiquette, emergency redirection, and general hospital service protocols.",
          },
        ],

        keyConcepts: [
          "Patient-centric service and the importance of first impressions",
          "Accurate data entry during registration to avoid billing/admin issues",
          "Clear and empathetic communication with patients",
          "Basic insurance knowledge for initial guidance",
          "Understanding hospital workflows: scheduling, admission, discharge",
          "Professional ethics, confidentiality, and protocol adherence",
        ],

        assessment: [
          "Role-play practice: greeting and checking in a patient",
          "Quizzes on hospital terminology and insurance basics",
          "HIS software checklist evaluation for accurate input",
        ],

        assignment:
          "Patient Admission Simulation: Fill a fictional patient's registration form (or mock HIS screen) and explain the next steps you would guide them through, such as insurance verification and documentation requirements.",

        format:
          "Interactive e-learning with videos, HIS mock interface practice, scenario-based discussions, and instructor-led Q&A sessions.",
      },
    ],
  },
];
