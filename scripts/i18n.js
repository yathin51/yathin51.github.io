/**
 * Internationalization (i18n) Engine for Yathin Kullachana Somaiah's Portfolio
 * Supports English (en) and German (de) with localStorage persistence.
 */

const I18N_DATA = {
  en: {
    nav: {
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
      btnInsights: "Explore Employment Insights →",
      btnResumeEn: "Resume (EN)",
      btnResumeDe: "Lebenslauf (DE)",
      btnContact: "Contact Me"
    },
    stats: {
      years: "10+ Years",
      yearsLabel: "Platform Engineering",
      tps: "1,000+ TPS",
      tpsLabel: "Peak Distributed Concurrency",
      cost: "20%+",
      costLabel: "Cloud Cost Optimization",
      migrations: "Zero",
      migrationsLabel: "Downtime DB Migrations"
    },
    sections: {
      careerTitle: "Employment & Career Insights",
      careerSubtitle: "Demonstrated track record of delivering resilient backend platforms and mission-critical systems across banking, trading, and enterprise SaaS.",
      projectsTitle: "Featured Engineering Case Studies",
      projectsSubtitle: "Deep dive into production architectures: high-throughput trading, zero-downtime data migrations, and API governance engines.",
      skillsTitle: "Core Technical Competencies",
      skillsSubtitle: "Comprehensive matrix of languages, distributed frameworks, cloud architectures, and databases leveraged in production environments.",
      certTitle: "Verified Certifications & Credentials",
      certSubtitle: "Formal industry credentials in Java, event streaming, generative AI, and enterprise engineering.",
      contactTitle: "Get In Touch",
      contactSubtitle: "Available for Senior Staff Engineer, Lead Backend Engineer, and Platform Architecture roles in Germany and remote."
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
      titlePrefix: "Architektur von",
      titleHighlight: "Hochleistungs-",
      titleSuffix: "Verteilten Systemen & Plattformen",
      badgeExperience: "10+ Jahre Erfahrung",
      badgeSpecialist: "JVM & Spring Spezialist",
      summary: "Oracle-zertifizierter Senior Staff & Platform Engineer mit über einem Jahrzehnt praktischer Erfahrung in der Entwicklung robuster verteilter Architekturen, hochgradig nebenläufiger Microservices (1.000+ TPS) und Enterprise API Gateways. Nachweisbare Erfolge bei der Reduzierung der Cloud-Ausgaben um 20%+, ausfallfreien Datenbankmigrationen und unternehmenskritischen Plattformen in Banking, Derivatehandel und SaaS in Deutschland und weltweit.",
      btnInsights: "Berufserfahrung ansehen →",
      btnResumeEn: "Resume (EN)",
      btnResumeDe: "Lebenslauf (DE)",
      btnContact: "Kontakt aufnehmen"
    },
    stats: {
      years: "10+ Jahre",
      yearsLabel: "Plattformentwicklung",
      tps: "1.000+ TPS",
      tpsLabel: "Höchste verteilte Parallelität",
      cost: "20%+",
      costLabel: "Cloud-Kostenoptimierung",
      migrations: "Null",
      migrationsLabel: "Ausfallzeit bei DB-Migrationen"
    },
    sections: {
      careerTitle: "Berufserfahrung & Einblicke",
      careerSubtitle: "Nachgewiesene Erfolge bei der Bereitstellung robuster Backend-Plattformen und unternehmenskritischer Systeme in den Bereichen Banking, Handel und Enterprise-SaaS.",
      projectsTitle: "Ausgewählte Projektstudien",
      projectsSubtitle: "Tiefere Einblicke in Produktionsarchitekturen: Hochdurchsatzhandel, ausfallfreie Datenmigrationen und API-Governance-Engines.",
      skillsTitle: "Technische Kernkompetenzen",
      skillsSubtitle: "Umfassende Matrix von Sprachen, verteilten Frameworks, Cloud-Architekturen und Datenbanken, die in Produktionsumgebungen eingesetzt werden.",
      certTitle: "Verifizierte Zertifizierungen & Bildung",
      certSubtitle: "Offizielle Branchenzertifikate in Java, Event Streaming, Generative KI und Enterprise Engineering.",
      contactTitle: "Kontaktieren Sie mich",
      contactSubtitle: "Verfügbar für Positionen als Senior Staff Engineer, Lead Backend Engineer und Platform Architect in Deutschland und remote."
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

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.get(key);
      if (text) {
        el.textContent = text;
      }
    });

    // Update toggle button text if exists
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = `🌐 <span class="lang-text">${lang.toUpperCase()}</span>`;
      toggleBtn.setAttribute('title', lang === 'en' ? 'Switch to German' : 'Auf Englisch umstellen');
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
