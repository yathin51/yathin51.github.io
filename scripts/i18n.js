/**
 * Comprehensive Internationalization (i18n) Engine for Yathin Kullachana Somaiah's Portfolio
 * Supports complete English (en) and German (de) detailing across all pages with persistence.
 */

const I18N_DATA = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Employment",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
      resumeBtn: "Resume (PDF)"
    },
    hero: {
      status: "Open to Opportunities • Senior Staff & Lead Roles • Germany / Remote",
      titlePrefix: "Architecting",
      titleHighlight: "High-Throughput",
      titleSuffix: "Distributed Systems & Platforms",
      badgeExperience: "10+ Years Experience",
      badgeSpecialist: "JVM & Spring Specialist",
      summary: "Oracle-certified Senior Staff & Platform Engineer with over a decade of hands-on experience designing resilient distributed architectures, high-concurrency microservices (1,000+ TPS), and enterprise API gateways. Proven track record driving 20%+ cloud spend reduction, zero-downtime database migrations, and mission-critical banking, derivatives trading, and SaaS platforms across Germany and globally.",
      btnInsights: "Explore Employment Insights",
      btnResumeEn: "Resume (EN)",
      btnResumeDe: "Lebenslauf (DE)",
      btnContact: "Contact Me",
      quickLocation: "📍 Saarbrücken, Germany",
      quickPermit: "⚡ Unrestricted German Work Permit",
      quickLanguages: "🌐 English (Fluent) • German (B1)",
      badgeScaleLabel: "Scale",
      badgeScaleDesc: "1,000+ TPS Systems",
      badgeCloudLabel: "Cloud Impact",
      badgeCloudDesc: "20%+ Cost Optimization"
    },
    stats: {
      yearsNum: "10+",
      yearsLabel: "Years Experience",
      tpsNum: "1000+",
      tpsLabel: "TPS Concurrency",
      costNum: "20%+",
      costLabel: "Cloud Cost Saved",
      servicesNum: "25+",
      servicesLabel: "Production Services",
      clientsNum: "6",
      clientsLabel: "Enterprise Clients"
    },
    sections: {
      careerEyebrow: "Career Journey",
      careerTitle: "Employment & Leadership Insights",
      careerSubtitle: "A comprehensive chronicle of technical leadership, architectural transformations, and measurable business outcomes across global fintech, SaaS platforms, and enterprise systems.",
      projectsEyebrow: "Technical Case Studies",
      projectsTitle: "Featured Engineering Case Studies",
      projectsSubtitle: "Deep dive into production architectures: high-throughput trading, zero-downtime data migrations, and API governance engines.",
      skillsEyebrow: "Technical Mastery",
      skillsTitle: "Core Technical Competencies",
      skillsSubtitle: "Comprehensive matrix of languages, distributed frameworks, cloud architectures, and databases leveraged in production environments.",
      certEyebrow: "Accreditations",
      certTitle: "Verified Certifications & Credentials",
      certSubtitle: "Formal industry credentials in Java, event streaming, generative AI, and enterprise engineering.",
      contactEyebrow: "Professional Inquiries",
      contactTitle: "Get In Touch",
      contactSubtitle: "Available for Senior Staff Engineer, Lead Backend Engineer, and Platform Architecture roles in Germany and remote."
    },
    subpageNav: {
      returnHome: "← Return to Home",
      downloadResume: "Download Resume (PDF)",
      contactMe: "Contact Me",
      reviewExperience: "Review Employment History →"
    },
    experience: {
      altimetrik: {
        role: "Senior Staff Engineer — Product & Platform Integration",
        company: "Altimetrik India Private Limited",
        location: "📍 Bengaluru, India (Client: Citibank BSI)",
        period: "Mar 2024 – Dec 2025",
        summary: "Led the engineering and platform architecture of mission-critical banking and transactional services for Citibank BSI (Payments & E-Commerce) and BHN enterprise platforms, driving domain-driven design, distributed streaming, and AI-accelerated development practices.",
        ach1: "<strong>High-Throughput Concurrency:</strong> Architected and scaled event-driven microservices sustaining <strong>800+ TPS</strong> with minimal cloud resource overhead by enforcing distributed locks, Hazelcast caching, and multithreading optimization.",
        ach2: "<strong>Citibank BSI Payment Processing:</strong> Operated high-concurrency event-driven transaction streams utilizing <strong>Apache Kafka</strong>, implementing distributed transaction idempotency and delivery guarantees for rigorous financial auditability.",
        ach3: "<strong>Cloud Infrastructure Optimization:</strong> Engineered containerized deployments on <strong>AWS (EC2, S3, SNS/SQS)</strong> and OpenShift, optimizing cloud allocation and generating <strong>over 20% cloud cost reduction</strong>.",
        ach4: "<strong>Enterprise Repository Migration:</strong> Automated and scripted the complex migration of nearly <strong>150 repositories</strong> from BitBucket to GitHub with automated CI/CD and security vulnerability scanning via BlackDuck.",
        ach5: "<strong>AI-Assisted Engineering:</strong> Championed modern developer workflows using Claude Code and Cursor, accelerating delivery velocity while maintaining strict code craftsmanship standards.",
        viewStudies: "View Altimetrik Case Studies →"
      },
      apiwiz: {
        role: "Lead Platform Engineer",
        company: "APIwiz (Itorix Software Pvt. Ltd.)",
        location: "📍 Bengaluru, India",
        period: "Jun 2022 – Jan 2024",
        summary: "Pioneered the API ecosystem strategy by designing the flagship API Compliance module for traffic governance, schema validation, and operational insights.",
        ach1: "<strong>API Compliance Engine:</strong> Designed and deployed flagship SaaS modules evaluating contract governance rules at <strong>1,000+ TPS</strong> via Kong and APISIX gateways.",
        ach2: "<strong>20% Cloud Cost Savings:</strong> Reduced infrastructure spend by 20% across AWS and GCP through Hazelcast in-memory caching and RabbitMQ synchronization.",
        ach3: "<strong>Enterprise Data Protection:</strong> Applied 256-bit encryption, hashing protocols, and OAuth2 token authorization for high-security platform requirements.",
        ach4: "<strong>High Availability:</strong> Ensured 99.9% uptime with Kubernetes/Docker container orchestration and real-time observability via InfluxDB and Grafana.",
        viewStudies: "View APIwiz Case Studies →"
      },
      brillio: {
        role: "Senior Technical Specialist",
        company: "Brillio Technologies",
        location: "📍 Bengaluru, India (Client: eBay)",
        period: "Aug 2021 – May 2022",
        summary: "Spearheaded the architectural redesign and migration of 15 interconnected microservices for eBay's enterprise People Management systems from monolithic legacy stacks.",
        ach1: "<strong>Microservices Architecture:</strong> Designed 15 scalable Spring Boot microservices, decoupling core HR processes from legacy PL/SQL stored procedures and J2EE monoliths.",
        ach2: "<strong>Latency Optimization:</strong> Reduced database query latency by <strong>35%</strong> across Oracle DB and PostgreSQL through optimized schema indexing and Redis caching.",
        ach3: "<strong>Zero-Downtime Delivery:</strong> Orchestrated seamless database migrations and Spring Boot adoption with zero business interruption for global employees.",
        viewStudies: "View Brillio Case Studies →"
      },
      iginfotech: {
        role: "Senior Developer — FinTech & Derivatives",
        company: "IG Markets (IG Infotech)",
        location: "📍 Bengaluru, India",
        period: "Dec 2019 – Aug 2021",
        summary: "Architected and managed 25 Spring Boot applications for a leading derivatives trading brokerage, focusing on digital customer onboarding and real-time risk assessment.",
        ach1: "<strong>Frictionless Onboarding:</strong> Streamlined user verification, KYC, and AML risk assessment pipelines to handle surges in retail market volatility.",
        ach2: "<strong>Trading Reliability:</strong> Managed and enhanced 25 microservices with OAuth2, JWT authentication, and resilient Oracle database integration.",
        ach3: "<strong>Automated Quality:</strong> Developed automated Cucumber BDD test suites, reducing pre-release regression defects by 40%.",
        viewStudies: "View IG Infotech Case Studies →"
      },
      nscglobal: {
        role: "Senior Software Engineer",
        company: "NSC Global (Client: AT&T)",
        location: "📍 Bengaluru, India",
        period: "Feb 2017 – Dec 2019",
        summary: "Managed and modernized enterprise WebSphere MQ message broker infrastructure across 27 high-load telecommunications applications for AT&T.",
        ach1: "<strong>Message Infrastructure:</strong> Sustained 99.99% uptime across IBM WebSphere MQ and RabbitMQ for 27 mission-critical telco applications.",
        ach2: "<strong>Network Modeling Services:</strong> Developed new Spring Boot microservices to automate network model provisioning and inventory management.",
        ach3: "<strong>Runtime Resilience:</strong> Optimized IBM WebSphere application server performance and automated cluster failover routines.",
        viewStudies: "View NSC Global Case Studies →"
      },
      attra: {
        role: "Software Engineer → Senior Software Engineer",
        company: "Attra Infotech Pvt. Ltd.",
        location: "📍 Bengaluru, India",
        period: "Oct 2013 – Feb 2017",
        summary: "Engineered enterprise web services, statement generation platforms, and dynamic document processing for banking and card payment clients.",
        ach1: "<strong>Core Financial Services:</strong> Built high-reliability JAX-WS SOAP and REST services for credit card and transaction processing.",
        ach2: "<strong>Dynamic Document Pipeline:</strong> Engineered high-volume statement conversion and PDF web services using Adobe LiveCycle ES2.",
        ach3: "<strong>Batch ETL Orchestration:</strong> Automated nightly transactional reconciliation workflows using Control-M and Informatica.",
        viewStudies: "View Attra Case Studies →"
      }
    },
    aboutPage: {
      eyebrow: "Professional Profile",
      title: "About Me",
      subtitle: "Senior Backend & Platform Software Engineer specializing in distributed JVM architectures, event streaming, and cloud platforms.",
      p1: "I am an Oracle-certified Senior Staff Engineer with over 10 years of professional software craftsmanship experience. My career has been devoted to engineering high-availability, low-latency transaction engines, event-driven streaming pipelines, and API gateways across demanding domains including investment banking, derivatives trading, and enterprise SaaS.",
      p2: "Throughout my career at companies like <strong>Altimetrik (Citibank)</strong>, <strong>APIwiz</strong>, <strong>Brillio (eBay)</strong>, <strong>IG Infotech</strong>, and <strong>NSC Global (AT&T)</strong>, I have led technical modernizations that transformed legacy monoliths into decoupled, containerized microservices handling upwards of <strong>1,000 TPS</strong> while lowering cloud expenditure by <strong>20%+</strong>.",
      tenetsTitle: "Core Engineering Tenets",
      tenet1: "<strong>Zero-Tolerance for Data Inconsistency:</strong> Designing strict idempotent event consumers, distributed locks (Redis/Redlock), and resilient transaction boundaries.",
      tenet2: "<strong>Pragmatic Modernization:</strong> Migrating legacy PL/SQL, J2EE, and SOAP systems into clean, observable Spring Boot microservices without business downtime.",
      tenet3: "<strong>Cloud & Resource Stewardship:</strong> Squeezing maximum throughput out of minimal cloud instances on AWS and GCP through Hazelcast caching and reactive JVM concurrency.",
      tenet4: "<strong>Developer Velocity & Quality:</strong> Leveraging modern AI-assisted engineering tools (Claude Code, Cursor) alongside TDD, Cucumber BDD, and SonarQube quality gates.",
      btnEmployment: "Explore Employment Details →",
      btnResumeEn: "Download Resume (EN)",
      btnContact: "Get In Touch",
      quickFactsTitle: "Quick Facts",
      qfLocation: "<strong>📍 Location:</strong> Saarbrücken, Germany",
      qfPermit: "<strong>⚡ Work Authorization:</strong> Unrestricted German Work Permit",
      qfEdu: "<strong>🎓 Education:</strong> B.E. in Electronics & Communication (VTU, Anabin H+)",
      qfLang: "<strong>🌐 Languages:</strong> English (Fluent), German (B1)",
      qfCert: "<strong>📜 Certified:</strong> Oracle Java Programmer, Kafka Fundamentals, Generative AI Mastermind"
    },
    certPage: {
      eyebrow: "Accreditations",
      title: "Certifications & Education",
      subtitle: "Official engineering certifications, specialized training in modern distributed architectures and AI engineering, and formal academic degree.",
      viewBtn: "🔍 View Verified Certificate",
      card1Badge: "Official Certification",
      card1Title: "Oracle Certified Associate, Java SE 8 Programmer",
      card1Issuer: "Issued by Oracle University • 2025",
      card2Badge: "AI Engineering",
      card2Title: "Generative AI Engineering Mastermind",
      card2Issuer: "Issued by Outskill • 2026",
      card2Desc: "Advanced LLM agentic patterns, tool use, prompt caching, evaluation frameworks, and production inference.",
      card3Badge: "AI Architecture",
      card3Title: "RAG Developer Certification",
      card3Issuer: "Issued by CreateBytes Xperts (CBX) • 2026",
      card3Desc: "End-to-end Retrieval-Augmented Generation, vector embeddings, chunking strategies, and hybrid semantic search.",
      card4Badge: "Distributed Streaming",
      card4Title: "Kafka Fundamentals",
      card4Issuer: "Issued by Coursera / Confluent • 2025",
      card5Badge: "Frontend & Async",
      card5Title: "Modern JavaScript with ES6",
      card5Issuer: "Issued by Coursera • 2025",
      card6Badge: "Full-Stack Bootcamp",
      card6Title: "JavaScript with ReactJS Bootcamp",
      card6Issuer: "Issued by BIT Mesra • 2021",
      card7Badge: "Academic Degree",
      card7Title: "Bachelor of Engineering (B.E.)",
      card7Issuer: "Electronics & Communication Engineering",
      card7Desc: "Visvesvaraya Technological University (VTU), Karnataka, India. Full degree recognition across Germany (Anabin H+).",
      card8Badge: "Java Technologies",
      card8Title: "Web Component Development using Java",
      card8Issuer: "Issued by NIIT • 2013",
      card8Desc: "Enterprise Java component lifecycle, Servlets, JSP, and multi-tier application architecture."
    },
    skillsPage: {
      eyebrow: "Technical Mastery",
      title: "Skills & Architecture Matrix",
      subtitle: "Structured inventory of core languages, enterprise backend frameworks, distributed streaming tools, and DevOps infrastructure.",
      searchPlaceholder: "Filter skills (e.g. Kafka, Java, Docker, Spring, AWS, Postgres)...",
      catLanguages: "Languages & Runtimes",
      catBackend: "Backend & Frameworks",
      catArch: "Architecture & System Design",
      catStreaming: "Streaming, Queues & Gateways",
      catCloud: "Cloud, Containers & DevOps",
      catDatabases: "Databases & Observability"
    },
    projectsPage: {
      eyebrow: "Technical Case Studies",
      title: "Engineering Projects & System Architecture",
      subtitle: "Architectural breakdowns, concurrency solutions, API platform integrations, and cloud cost optimizations delivered across enterprise environments.",
      filterAll: "All Projects",
      filterStreaming: "High TPS & Kafka",
      filterPlatform: "API Platforms & Gateways",
      filterModernization: "Enterprise Modernization",
      cardLink: "View Detailed Case Study →",
      openSourceTitle: "Open Source & GitHub Repositories",
      openSourceDesc: "Explore my open source implementations, algorithm repositories, and system design proofs-of-concept on GitHub.",
      openSourceBtn: "Visit GitHub Profile (@yathin51)",
      p1Category: "FinTech & Event Streaming",
      p1Title: "Citibank BSI Payment & Settlement Pipeline",
      p1Desc: "Architected and operated high-throughput event-driven microservices for Citibank BSI handling digital payments and e-commerce settlements. Implemented Apache Kafka partition key strategies, message idempotency, and distributed locking to guarantee zero transaction loss in concurrent processing.",
      p1Metric: "⚡ 800+ TPS Sustained Concurrency • 100% Financial Auditability",
      p2Category: "Platform Engineering",
      p2Title: "Flagship API Compliance SaaS Module",
      p2Desc: "Conceived and engineered the core API Compliance platform at APIwiz. Integrated Kong and APISIX gateways with Hazelcast in-memory caching to inspect high-frequency API traffic, evaluate contract governance rules, and prevent non-compliant API schema deployments.",
      p2Metric: "⚡ 1,000+ TPS Evaluation Rate • 20% Cloud Cost Savings",
      p3Category: "Cloud Migration",
      p3Title: "eBay Enterprise People Management Modernization",
      p3Desc: "Spearheaded the complete decoupled migration of eBay's legacy human capital systems. Replaced dense PL/SQL stored procedures and monolithic J2EE with 15 lightweight, decoupled Spring Boot microservices backed by containerized infrastructure.",
      p3Metric: "⚡ 35% Database Query Latency Reduction across Oracle & Postgres",
      p4Category: "FinTech & Security",
      p4Title: "IG Trading Client Onboarding & KYC Engine",
      p4Desc: "Developed the mission-critical onboarding and regulatory compliance service for derivatives trading broker IG. Implemented OAuth2 authentication, secure customer registration pipelines, and strict automated PII data masking.",
      p4Metric: "⚡ 30% Defect Reduction through Automated Cucumber BDD Test Suites",
      p5Category: "Distributed Systems",
      p5Title: "BHN Bloom Distributed Transaction Engine",
      p5Desc: "Engineered distributed locking mechanisms using Redis and multi-threaded JVM routines to ensure high-accuracy, race-condition-free responses in high-throughput voucher and payment transactions under minimal AWS cloud resource consumption.",
      p5Metric: "⚡ 800+ TPS with Low Cloud Utilization • Multi-Threaded Stability",
      p6Category: "Enterprise Integration",
      p6Title: "AT&T Network Systems Asynchronous Messaging",
      p6Desc: "Designed asynchronous messaging pipelines combining RabbitMQ and IBM WebSphere MQ objects for AT&T telecom network models. Streamlined automated CI/CD release pipelines using Jenkins and Linux runner environments.",
      p6Metric: "⚡ 27 Mission-Critical Telecommunication Services Supported",
      p7Category: "Enterprise SOA",
      p7Title: "GE Capital Enterprise Integration & Document Automation",
      p7Desc: "Developed contract-first JAX-WS SOAP WebServices on IBM WebSphere 8.5 for commercial financing approvals, coupling automated Adobe LiveCycle PDF document generation with Control-M batch ETL automation.",
      p7Metric: "⚡ Automated Multi-Format WebService Responses & Document Pipelines"
    },
    subpageNav: {
      returnHome: "← Return to Home",
      viewEmployment: "View Employment Insights →",
      viewSkills: "View Skills & Architecture →",
      viewProjects: "View Project Work →",
      viewCertifications: "View Certifications →",
      contactYathin: "Contact Yathin",
      downloadResume: "Download Resume (PDF)"
    },
    contactPage: {
      eyebrow: "Professional Inquiries",
      title: "Get In Touch",
      subtitle: "I am actively open to Senior Staff, Lead Backend Engineer, and Distributed Systems Architect opportunities in Germany and Europe.",
      connectTitle: "Let’s Connect",
      connectDesc: "Feel free to reach out directly via email or professional networks to discuss potential roles, architectural consultations, or engineering collaborations.",
      emailLabel: "Email",
      locationLabel: "Current Location",
      locationVal: "Saarbrücken, Germany",
      permitLabel: "Work Authorization",
      permitVal: "Unrestricted German Work Permit (No sponsorship needed)",
      onlineLabel: "Online Presence",
      materialsTitle: "Application Materials",
      materialsDesc: "Download official PDF resumes tailored for technical hiring teams and recruiters:",
      downloadEn: "Download English Resume (PDF)",
      downloadDe: "Download German Lebenslauf (PDF)",
      sendEmail: "Send Direct Email Message ✉️"
    },
    chatbot: {
      title: "YKS AI Assistant",
      status: "Online & Ready",
      welcome: "Hello! I am Yathin's portfolio assistant. How can I help you evaluate his profile?",
      chipCareer: "💼 Career & Leadership",
      chipScale: "⚡ High-Throughput (1000+ TPS)",
      chipSkills: "🛠️ Core Tech Stack",
      chipAuth: "📍 Location & Work Permit",
      chipResume: "📄 Download Resumes",
      inputPlaceholder: "Ask about Yathin's experience..."
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      experience: "Berufserfahrung",
      projects: "Projekte",
      skills: "Fähigkeiten",
      certifications: "Zertifikate",
      contact: "Kontakt",
      resumeBtn: "Lebenslauf (PDF)"
    },
    hero: {
      status: "Offen für Angebote • Senior Staff & Lead Rollen • Deutschland / Remote",
      titlePrefix: "Architektur",
      titleHighlight: "Hochperformanter",
      titleSuffix: "Verteilter Systeme & Plattformen",
      badgeExperience: "10+ Jahre Erfahrung",
      badgeSpecialist: "JVM & Spring Spezialist",
      summary: "Oracle-zertifizierter Senior Staff & Platform Engineer mit über einem Jahrzehnt praktischer Erfahrung in der Entwicklung robuster verteilter Architekturen, hochgradig nebenläufiger Microservices (1.000+ TPS) und Enterprise API Gateways. Nachweisbare Erfolge bei der Reduzierung der Cloud-Ausgaben um 20%+, ausfallfreien Datenbankmigrationen und unternehmenskritischen Plattformen in Banking, Derivatehandel und SaaS in Deutschland und weltweit.",
      btnInsights: "Berufserfahrung ansehen",
      btnResumeEn: "Resume (EN)",
      btnResumeDe: "Lebenslauf (DE)",
      btnContact: "Kontakt aufnehmen",
      quickLocation: "📍 Saarbrücken, Deutschland",
      quickPermit: "⚡ Uneingeschränkte Arbeitserlaubnis (DE)",
      quickLanguages: "🌐 Englisch (Verhandlungssicher) • Deutsch (B1)",
      badgeScaleLabel: "Skalierung",
      badgeScaleDesc: "1.000+ TPS Systeme",
      badgeCloudLabel: "Cloud-Effizienz",
      badgeCloudDesc: "20%+ Kostenoptimierung"
    },
    stats: {
      yearsNum: "10+",
      yearsLabel: "Jahre Erfahrung",
      tpsNum: "1000+",
      tpsLabel: "TPS Parallelität",
      costNum: "20%+",
      costLabel: "Cloud-Kosten gespart",
      servicesNum: "25+",
      servicesLabel: "Produktionsdienste",
      clientsNum: "6",
      clientsLabel: "Enterprise-Kunden"
    },
    sections: {
      careerEyebrow: "Werdegang & Profil",
      careerTitle: "Berufserfahrung & Einblicke",
      careerSubtitle: "Eine umfassende Chronik technischer Führung, architektonischer Transformationen und messbarer Geschäftserfolge in globalen Fintech-, SaaS- und Unternehmenssystemen.",
      projectsEyebrow: "Technische Fallstudien",
      projectsTitle: "Ausgewählte Projektstudien",
      projectsSubtitle: "Tiefere Einblicke in Produktionsarchitekturen: Hochdurchsatzhandel, ausfallfreie Datenmigrationen und API-Governance-Engines.",
      skillsEyebrow: "Technische Kompetenz",
      skillsTitle: "Fähigkeiten & Architekturmatrix",
      skillsSubtitle: "Umfassende Matrix von Sprachen, verteilten Frameworks, Cloud-Architekturen und Datenbanken, die in Produktionsumgebungen eingesetzt werden.",
      certEyebrow: "Akkreditierungen",
      certTitle: "Zertifikate & Bildung",
      certSubtitle: "Offizielle Branchenzertifikate in Java, Event Streaming, Generativer KI und Enterprise Engineering sowie akademischer Abschluss.",
      contactEyebrow: "Berufliche Anfragen",
      contactTitle: "Kontakt aufnehmen",
      contactSubtitle: "Verfügbar für Positionen als Senior Staff Engineer, Lead Backend Engineer und Platform Architect in Deutschland und remote."
    },
    subpageNav: {
      returnHome: "← Zurück zur Startseite",
      downloadResume: "Lebenslauf herunterladen (PDF)",
      contactMe: "Kontakt aufnehmen",
      reviewExperience: "Berufserfahrung ansehen →"
    },
    experience: {
      altimetrik: {
        role: "Senior Staff Engineer — Produkt- & Plattformintegration",
        company: "Altimetrik India Private Limited",
        location: "📍 Bengaluru, Indien (Kunde: Citibank BSI)",
        period: "März 2024 – Dez 2025",
        summary: "Leitung des Engineerings und der Plattformarchitektur unternehmenskritischer Banking- und Transaktionsdienste für Citibank BSI (Payments & E-Commerce) und BHN-Enterprise-Plattformen mit Domain-Driven Design, Distributed Streaming und KI-beschleunigten Entwicklungspraktiken.",
        ach1: "<strong>Hochdurchsatz-Parallelität:</strong> Skalierung von Event-gesteuerten Microservices auf <strong>800+ TPS</strong> bei minimalem Cloud-Ressourcenverbrauch durch verteilte Sperren (Distributed Locks), Hazelcast-Caching und Multithreading-Optimierung.",
        ach2: "<strong>Citibank BSI Zahlungsabwicklung:</strong> Betrieb hochgradig nebenläufiger Transaktions-Streams mit <strong>Apache Kafka</strong>, Idempotenz bei verteilten Transaktionen und Liefergarantien für strikte finanzielle Nachvollziehbarkeit.",
        ach3: "<strong>Cloud-Infrastruktur-Optimierung:</strong> Containerisierte Bereitstellungen auf <strong>AWS (EC2, S3, SNS/SQS)</strong> und OpenShift mit einer Senkung der Cloud-Ausgaben um <strong>über 20%</strong>.",
        ach4: "<strong>Enterprise-Repository-Migration:</strong> Automatisierte Migration von rund <strong>150 Repositories</strong> von BitBucket zu GitHub mit CI/CD-Pipelines und BlackDuck-Sicherheitsscans.",
        ach5: "<strong>KI-gestütztes Engineering:</strong> Etablierung moderner Entwickler-Workflows mit Claude Code und Cursor zur Beschleunigung der Liefergeschwindigkeit bei höchsten Code-Qualitätsstandards.",
        viewStudies: "Altimetrik Fallstudien ansehen →"
      },
      apiwiz: {
        role: "Lead Platform Engineer",
        company: "APIwiz (Itorix Software Pvt. Ltd.)",
        location: "📍 Bengaluru, Indien",
        period: "Jun 2022 – Jan 2024",
        summary: "Definition der API-Ökosystemstrategie und Entwicklung des Flaggschiff-Moduls API Compliance für Traffic-Management, Contract-Governance und operative Einblicke.",
        ach1: "<strong>API-Compliance-Plattform:</strong> Entwurf und Produktivsetzung von Flaggschiff-Modulen zur Echtzeit-Validierung von API-Verträgen bei <strong>1.000+ TPS</strong> über Kong und APISIX Gateways.",
        ach2: "<strong>20% Cloud-Kostenreduktion:</strong> Senkung der Cloud-Infrastrukturkosten auf <strong>AWS und GCP um 20%</strong> durch intelligentes Hazelcast-Caching und RabbitMQ-Synchronisierung.",
        ach3: "<strong>Datensicherheit & Verschlüsselung:</strong> Implementierung von <strong>256-Bit-Verschlüsselung</strong>, Hashing-Mechanismen und OAuth2-Autorisierung für hochsensible Unternehmensdaten.",
        ach4: "<strong>Hochverfügbarkeit:</strong> Orchestrierung von Kubernetes- und Docker-Clustern mit Ausfallsicherheit (99,9% Uptime) und Echtzeit-Überwachung via InfluxDB und Grafana.",
        viewStudies: "APIwiz Fallstudien ansehen →"
      },
      brillio: {
        role: "Senior Technical Specialist",
        company: "Brillio Technologies",
        location: "📍 Bengaluru, Indien (Kunde: eBay)",
        period: "Aug 2021 – Mai 2022",
        summary: "Architektur und Migration von 15 entkoppelten Microservices für die HR- und People-Management-Systeme von eBay von älteren PL/SQL- und J2EE-Monolithen zu modernem Spring Boot.",
        ach1: "<strong>Microservices-Architektur:</strong> Entwurf von 15 skalierbaren Microservices mit Spring Boot und Hibernate, wodurch die Systemwartbarkeit und Release-Zyklen drastisch verbessert wurden.",
        ach2: "<strong>Latenz-Optimierung:</strong> Reduzierung der Datenbankabfrage-Latenzzeiten um <strong>35%</strong> auf Oracle DB und PostgreSQL durch strukturierte Indexierung und Redis-Caching.",
        ach3: "<strong>Ausfallfreie Migration:</strong> Nahtlose Ablösung von Altsystemen ohne Unterbrechung laufender Geschäftsprozesse für Tausende weltweiter eBay-Mitarbeiter.",
        viewStudies: "Brillio Fallstudien ansehen →"
      },
      iginfotech: {
        role: "Senior Developer — FinTech & Derivate",
        company: "IG Markets (IG Infotech)",
        location: "📍 Bengaluru, Indien",
        period: "Dez 2019 – Aug 2021",
        summary: "Konfiguration und Weiterentwicklung von 25 Spring Boot-Handelsanwendungen für einen führenden globalen Derivate-Broker mit Fokus auf performantes Kunden-Onboarding und Risikomanagement.",
        ach1: "<strong>Onboarding & KYC:</strong> Optimierung der digitalen KYC-, Verifizierungs- und Risikobewertungs-Pipelines für weltweite Kunden unter Einhaltung strenger Finanzauflagen.",
        ach2: "<strong>Trading-Systeme:</strong> Wartung und Leistungsoptimierung von 25 geschäftskritischen Handelsanwendungen mit OAuth2, JWT und Oracle DB.",
        ach3: "<strong>Test-Driven Quality:</strong> Aufbau automatisierter Cucumber BDD-Test-Suites, wodurch Regressionen vor Produktiv-Deployments um 40% gesenkt wurden.",
        viewStudies: "IG Infotech Fallstudien ansehen →"
      },
      nscglobal: {
        role: "Senior Software Engineer",
        company: "NSC Global (im Auftrag von AT&T)",
        location: "📍 Bengaluru, Indien",
        period: "Feb 2017 – Dez 2019",
        summary: "Verwaltung und Modernisierung unternehmenskritischer WebSphere MQ-Message-Broker für 27 hochbelastete Telekommunikationsanwendungen von AT&T sowie Entwicklung neuer Spring Boot-Dienste.",
        ach1: "<strong>Message-Broker-Management:</strong> Gewährleistung stabiler Message-Flows über WebSphere MQ und RabbitMQ für 27 geschäftskritische Enterprise-Dienste mit 99,99% Zuverlässigkeit.",
        ach2: "<strong>Netzwerk-Microservices:</strong> Modernisierung von Netzwerkmodell-Diensten mit Spring Boot, Java 8 und Oracle DB.",
        ach3: "<strong>Laufzeit-Stabilität:</strong> Resilientes Tuning von IBM WebSphere Application Servern und automatisierte Fehlerbehandlung.",
        viewStudies: "NSC Global Fallstudien ansehen →"
      },
      attra: {
        role: "Software Engineer → Senior Software Engineer",
        company: "Attra Infotech Pvt. Ltd.",
        location: "📍 Bengaluru, Indien",
        period: "Okt 2013 – Feb 2017",
        summary: "Entwicklung von Enterprise Web Services, dynamischen Dokumenten- und PDF-Generierungsplattformen für Bank- und Finanzkunden.",
        ach1: "<strong>Web Services:</strong> Entwicklung robuster JAX-WS SOAP- und REST-Dienste aus WSDL-Spezifikationen für Bankkunden.",
        ach2: "<strong>Dynamische Dokumentenerstellung:</strong> Erstellung von PDF-Konvertierungs- und Kontoauszugsdiensten mit Adobe LiveCycle ES2.",
        ach3: "<strong>ETL & Batch:</strong> Automatisierung von nächtlichen Daten- und ETL-Jobs mit Control-M und Informatica.",
        viewStudies: "Attra Fallstudien ansehen →"
      }
    },
    aboutPage: {
      eyebrow: "Berufliches Profil",
      title: "Über mich",
      subtitle: "Senior Backend & Platform Software Engineer mit Spezialisierung auf verteilte JVM-Architekturen, Event Streaming und Cloud-Plattformen.",
      p1: "Ich bin ein Oracle-zertifizierter Senior Staff Engineer mit über 10 Jahren professioneller Erfahrung in der Softwareentwicklung. Mein beruflicher Schwerpunkt liegt im Entwurf hochverfügbarer, latenzarmer Transaktions-Engines, Event-gesteuerter Streaming-Pipelines und API-Gateways in anspruchsvollen Branchen wie Investmentbanking, Derivatehandel und Enterprise-SaaS.",
      p2: "In meiner bisherigen Laufbahn bei Unternehmen wie <strong>Altimetrik (Citibank)</strong>, <strong>APIwiz</strong>, <strong>Brillio (eBay)</strong>, <strong>IG Infotech</strong> und <strong>NSC Global (AT&T)</strong> habe ich technische Modernisierungen geleitet, die monolithische Altsysteme in entkoppelte, containerisierte Microservices für über <strong>1.000 TPS</strong> überführten und die Cloud-Kosten um <strong>20%+</strong> senkten.",
      tenetsTitle: "Ingenieurwissenschaftliche Grundsätze",
      tenet1: "<strong>Keine Toleranz für Dateninkonsistenz:</strong> Strikt idempotente Event-Consumer, verteilte Sperrmechanismen (Redis/Redlock) und ausfallsichere Transaktionsgrenzen.",
      tenet2: "<strong>Pragmatische Modernisierung:</strong> Ablösung alter PL/SQL-, J2EE- und SOAP-Systeme durch saubere, beobachtbare Spring Boot-Microservices ohne Ausfallzeiten.",
      tenet3: "<strong>Cloud- & Ressourceneffizienz:</strong> Maximaler Durchsatz bei minimalem Instanzenbedarf auf AWS und GCP durch Hazelcast-Caching und reaktive JVM-Nebenläufigkeit.",
      tenet4: "<strong>Entwicklungsgeschwindigkeit & Qualität:</strong> Nutzung moderner KI-gestützter Entwicklungswerkzeuge (Claude Code, Cursor) kombiniert mit TDD, Cucumber BDD und SonarQube.",
      btnEmployment: "Berufserfahrung ansehen →",
      btnResumeEn: "Resume herunterladen (EN)",
      btnContact: "Kontakt aufnehmen",
      quickFactsTitle: "Kurzübersicht",
      qfLocation: "<strong>📍 Standort:</strong> Saarbrücken, Deutschland",
      qfPermit: "<strong>⚡ Arbeitserlaubnis:</strong> Uneingeschränkte deutsche Arbeitserlaubnis",
      qfEdu: "<strong>🎓 Ausbildung:</strong> B.E. in Elektronik & Kommunikation (VTU, Anabin H+)",
      qfLang: "<strong>🌐 Sprachen:</strong> Englisch (Verhandlungssicher), Deutsch (B1)",
      qfCert: "<strong>📜 Zertifikate:</strong> Oracle Java Programmer, Kafka Fundamentals, Generative AI Mastermind"
    },
    certPage: {
      eyebrow: "Akkreditierungen",
      title: "Zertifikate & Bildung",
      subtitle: "Offizielle Branchenzertifikate, spezialisierte Weiterbildung in modernen verteilten Architekturen und KI-Engineering sowie formaler Hochschulabschluss.",
      viewBtn: "🔍 Verifiziertes Zertifikat ansehen",
      card1Badge: "Offizielle Zertifizierung",
      card1Title: "Oracle Certified Associate, Java SE 8 Programmer",
      card1Issuer: "Ausgestellt von Oracle University • 2025",
      card2Badge: "KI-Engineering",
      card2Title: "Generative AI Engineering Mastermind",
      card2Issuer: "Ausgestellt von Outskill • 2026",
      card2Desc: "Fortgeschrittene LLM-Agentenmuster, Tool-Nutzung, Prompt-Caching, Evaluierungs-Frameworks und Produktionsinferenz.",
      card3Badge: "KI-Architektur",
      card3Title: "RAG Developer Certification",
      card3Issuer: "Ausgestellt von CreateBytes Xperts (CBX) • 2026",
      card3Desc: "End-to-End Retrieval-Augmented Generation, Vektor-Embeddings, Chunking-Strategien und hybride semantische Suche.",
      card4Badge: "Distributed Streaming",
      card4Title: "Kafka Fundamentals",
      card4Issuer: "Ausgestellt von Coursera / Confluent • 2025",
      card5Badge: "Frontend & Async",
      card5Title: "Modern JavaScript with ES6",
      card5Issuer: "Ausgestellt von Coursera • 2025",
      card6Badge: "Full-Stack Bootcamp",
      card6Title: "JavaScript with ReactJS Bootcamp",
      card6Issuer: "Ausgestellt von BIT Mesra • 2021",
      card7Badge: "Hochschulabschluss",
      card7Title: "Bachelor of Engineering (B.E.)",
      card7Issuer: "Elektronik & Kommunikationstechnik",
      card7Desc: "Visvesvaraya Technological University (VTU), Karnataka, Indien. Vollständige Anerkennung des Abschlusses in Deutschland (Anabin H+).",
      card8Badge: "Java-Technologien",
      card8Title: "Web Component Development using Java",
      card8Issuer: "Ausgestellt von NIIT • 2013",
      card8Desc: "Enterprise Java-Komponenten-Lebenszyklus, Servlets, JSP und mehrschichtige Anwendungsarchitektur."
    },
    skillsPage: {
      eyebrow: "Technische Kompetenz",
      title: "Fähigkeiten & Architektur-Matrix",
      subtitle: "Strukturiertes Inventar zentraler Programmiersprachen, Enterprise-Backend-Frameworks, verteilter Streaming-Tools und DevOps-Infrastruktur.",
      searchPlaceholder: "Fähigkeiten filtern (z.B. Kafka, Java, Docker, Spring, AWS, Postgres)...",
      catLanguages: "Sprachen & Laufzeitumgebungen",
      catBackend: "Backend & Frameworks",
      catArch: "Architektur & Systemdesign",
      catStreaming: "Streaming, Queues & Gateways",
      catCloud: "Cloud, Container & DevOps",
      catDatabases: "Datenbanken & Observability"
    },
    projectsPage: {
      eyebrow: "Technische Fallstudien",
      title: "Projekte & Systemarchitektur",
      subtitle: "Architekturanalysen, Nebenläufigkeitslösungen, API-Plattformintegrationen und Cloud-Kostenoptimierungen in Enterprise-Umgebungen.",
      filterAll: "Alle Projekte",
      filterStreaming: "High TPS & Kafka",
      filterPlatform: "API-Plattformen & Gateways",
      filterModernization: "Enterprise-Modernisierung",
      cardLink: "Detaillierte Fallstudie ansehen →",
      openSourceTitle: "Open Source & GitHub Repositories",
      openSourceDesc: "Entdecken Sie meine Open-Source-Implementierungen, Algorithmen-Repositories und System-Design-Konzepte auf GitHub.",
      openSourceBtn: "GitHub-Profil besuchen (@yathin51)",
      p1Category: "FinTech & Event Streaming",
      p1Title: "Citibank BSI Zahlungs- & Abrechnungspipeline",
      p1Desc: "Entwurf und Betrieb ereignisgesteuerter Hochdurchsatz-Microservices für Citibank BSI für digitale Zahlungen und E-Commerce-Abrechnungen. Implementierung von Apache Kafka Partition-Key-Strategien, Nachrichten-Idempotenz und verteilten Locks zur Vermeidung von Transaktionsverlusten bei hochgradig paralleler Verarbeitung.",
      p1Metric: "⚡ 800+ TPS anhaltende Nebenläufigkeit • 100% finanzielle Revisionssicherheit",
      p2Category: "Plattform-Engineering",
      p2Title: "API Compliance SaaS-Kernmodul",
      p2Desc: "Konzeption und Entwicklung der zentralen API-Compliance-Plattform bei APIwiz. Integration von Kong- und APISIX-Gateways mit In-Memory-Caching über Hazelcast zur Prüfung hochfrequenten API-Datenverkehrs, Durchsetzung von Governance-Regeln und Verhinderung nicht-konformer API-Schemas.",
      p2Metric: "⚡ 1.000+ TPS Prüfrate • 20% Cloud-Kosteneinsparung",
      p3Category: "Cloud-Migration",
      p3Title: "eBay Enterprise People Management Modernisierung",
      p3Desc: "Federführende entkoppelte Migration der bestehenden Personal- und Unternehmenssysteme von eBay. Ablösung komplexer PL/SQL-Prozeduren und monolithischer J2EE-Systeme durch 15 schlanke, entkoppelte Spring Boot-Microservices auf containerisierter Infrastruktur.",
      p3Metric: "⚡ 35% Reduzierung der Abfragelatenz bei Oracle & PostgreSQL",
      p4Category: "FinTech & Sicherheit",
      p4Title: "IG Trading Kunden-Onboarding & KYC-Engine",
      p4Desc: "Entwicklung des geschäftskritischen Onboarding- und Compliance-Dienstes für den Derivate-Broker IG. Implementierung von OAuth2-Authentifizierung, sicheren Registrierungspipelines und automatisierter Maskierung personenbezogener Daten (PII).",
      p4Metric: "⚡ 30% Fehlerreduktion durch automatisierte Cucumber BDD Testsuiten",
      p5Category: "Verteilte Systeme",
      p5Title: "BHN Bloom Verteilte Transaktions-Engine",
      p5Desc: "Entwicklung verteilter Sperrmechanismen mit Redis und Multithreading-JVM-Routinen für wettlaufsichere Transaktionsabwicklungen bei Gutschein- und Zahlungsdiensten mit minimalem Cloud-Ressourcenverbrauch auf AWS.",
      p5Metric: "⚡ 800+ TPS bei niedriger Cloud-Auslastung • Multithreading-Stabilität",
      p6Category: "Enterprise-Integration",
      p6Title: "AT&T Netzwerksysteme Asynchrones Messaging",
      p6Desc: "Entwurf asynchroner Messaging-Pipelines mit RabbitMQ und IBM WebSphere MQ für Telekommunikations-Netzwerkmodelle von AT&T. Optimierung automatisierter CI/CD-Pipelines mit Jenkins auf Linux-Build-Umgebungen.",
      p6Metric: "⚡ 27 unternehmenskritische Telekommunikationsdienste unterstützt",
      p7Category: "Enterprise-SOA",
      p7Title: "GE Capital Enterprise-Integration & Dokumentenautomatisierung",
      p7Desc: "Entwicklung von Contract-First JAX-WS SOAP-Webdiensten auf IBM WebSphere 8.5 für gewerbliche Finanzierungsanträge sowie automatisierte PDF-Generierung mit Adobe LiveCycle und Control-M Batch-ETL.",
      p7Metric: "⚡ Automatisierte WebService-Antworten & Dokumentengenerierung"
    },
    subpageNav: {
      returnHome: "← Zurück zur Startseite",
      viewEmployment: "Berufserfahrung ansehen →",
      viewSkills: "Fähigkeiten & Architektur →",
      viewProjects: "Projekte ansehen →",
      viewCertifications: "Zertifikate ansehen →",
      contactYathin: "Kontakt aufnehmen",
      downloadResume: "Lebenslauf herunterladen (PDF)"
    },
    contactPage: {
      eyebrow: "Berufliche Anfragen",
      title: "Kontakt aufnehmen",
      subtitle: "Ich stehe gerne für Positionen als Senior Staff Engineer, Lead Backend Engineer und Distributed Systems Architect in Deutschland und Europa zur Verfügung.",
      connectTitle: "Lassen Sie uns vernetzen",
      connectDesc: "Kontaktieren Sie mich gerne direkt per E-Mail oder über professionelle Netzwerke, um potenzielle Rollen, Architekturberatungen oder technische Zusammenarbeiten zu besprechen.",
      emailLabel: "E-Mail",
      locationLabel: "Aktueller Standort",
      locationVal: "Saarbrücken, Deutschland",
      permitLabel: "Arbeitserlaubnis",
      permitVal: "Uneingeschränkte deutsche Arbeitserlaubnis (kein Sponsoring erforderlich)",
      onlineLabel: "Online-Präsenz",
      materialsTitle: "Bewerbungsunterlagen",
      materialsDesc: "Offizielle PDF-Lebensläufe für technische Recruiting-Teams und Hiring Manager herunterladen:",
      downloadEn: "Download English Resume (PDF)",
      downloadDe: "Download German Lebenslauf (PDF)",
      sendEmail: "Direkte E-Mail senden ✉️"
    },
    chatbot: {
      title: "YKS KI-Assistent",
      status: "Online & Bereit",
      welcome: "Hallo! Ich bin Yathins Portfolio-Assistent. Wie kann ich Ihnen helfen, sein Profil kennenzulernen?",
      chipCareer: "💼 Werdegang & Führung",
      chipScale: "⚡ Hochdurchsatz (1000+ TPS)",
      chipSkills: "🛠️ Technologiestack",
      chipAuth: "📍 Standort & Arbeitserlaubnis",
      chipResume: "📄 Lebenslauf herunterladen",
      inputPlaceholder: "Fragen Sie zu Yathins Erfahrung..."
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('yks_portfolio_lang') || 'en';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupListeners();
  }

  setLanguage(lang) {
    if (!I18N_DATA[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('yks_portfolio_lang', lang);
    this.applyLanguage(lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  get(key) {
    const parts = key.split('.');
    let val = I18N_DATA[this.currentLang];
    for (const p of parts) {
      if (val && val[p] !== undefined) {
        val = val[p];
      } else {
        return null;
      }
    }
    return val;
  }

  applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    // 1. Text elements
    const textEls = document.querySelectorAll('[data-i18n]');
    textEls.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key);
      if (val) el.textContent = val;
    });

    // 2. HTML elements
    const htmlEls = document.querySelectorAll('[data-i18n-html]');
    htmlEls.forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.get(key);
      if (val) el.innerHTML = val;
    });

    // 3. Placeholders
    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.get(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // 4. Update Resume Download Buttons
    const resumeLinks = document.querySelectorAll('a.resume-action-btn, a[href*="Resume_EN.pdf"], a[href*="Lebenslauf_DE.pdf"]');
    resumeLinks.forEach((link) => {
      const currentHref = link.getAttribute('href') || '';
      const prefix = currentHref.startsWith('../') ? '../docs/' : 'docs/';
      if (link.classList.contains('resume-action-btn')) {
        const textSpan = link.querySelector('[data-i18n="nav.resumeBtn"]');
        if (textSpan) {
          textSpan.textContent = lang === 'de' ? 'Lebenslauf (PDF)' : 'Resume (PDF)';
        }
        link.href = lang === 'de' 
          ? prefix + 'YathinKS_Lebenslauf_DE.pdf' 
          : prefix + 'YathinKS_Resume_EN.pdf';
      }
    });

    // 5. Update Lang Toggle Button
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = `🌐 <span class="lang-text">${lang.toUpperCase()}</span>`;
      toggleBtn.setAttribute('title', lang === 'en' ? 'Auf Deutsch umstellen' : 'Switch to English');
    }
  }

  setupListeners() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#lang-toggle-btn');
      if (btn) {
        const nextLang = this.currentLang === 'en' ? 'de' : 'en';
        this.setLanguage(nextLang);
      }
    });
  }
}

window.i18n = new I18nManager();
