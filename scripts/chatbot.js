/**
 * Interactive AI Assistant ChatBot
 * Ported from resume-site with interactive animated SVG character,
 * mouse-tracking head angle, bilingual prompt chips, and intelligent FAQ matcher.
 */

(function () {
  const KNOWLEDGE_BASE = {
    en: {
      welcome: "Hello! I am Yathin's portfolio assistant. Ask me about his 10+ years of distributed systems engineering, high-throughput architectures, tech stack, or location & work authorization.",
      chips: [
        { id: "career", text: "💼 Career Overview" },
        { id: "scale", text: "⚡ Scale (1,000+ TPS)" },
        { id: "tech", text: "🛠️ Core Tech Stack" },
        { id: "location", text: "📍 Location & Visa" },
        { id: "resume", text: "📄 Resumes (EN/DE)" }
      ],
      answers: {
        career: "Yathin has over 10 years of enterprise software engineering experience across 6 organizations: NSC Global (Cisco Client), IG Infotech (FinTech/trading), APIwiz (API platform gateway), Altimetrik (Citibank/Blackhawk), Brillio, and Attra Infotech. He specializes in distributed platforms, cloud architecture, and mission-critical microservices.",
        scale: "Yathin has architected platforms handling over 1,000 TPS with sub-100ms latency. At IG Infotech, he engineered distributed Kafka event streaming pipelines and executed zero-downtime database migrations with automated circuit breakers and Hazelcast caching.",
        tech: "Core competencies include Java (8/11/17/21), Spring Boot 3.x, Apache Kafka, Distributed Caching (Hazelcast, Redis), Cloud Architecture (AWS, GCP), Docker, Kubernetes, PostgreSQL, MongoDB, Reactive Programming, TDD, and CI/CD pipelines.",
        location: "Yathin is based in Saarbrücken, Germany, and holds an Unrestricted German Work Permit (no visa sponsorship required). He is immediately available for Senior Staff Engineer, Lead Backend Engineer, and Platform Architect roles (Remote or Hybrid in Germany).",
        resume: "You can download official resumes directly:<br>• <a href='docs/YathinKS_Resume_EN.pdf' target='_blank' style='color:var(--accent-primary);text-decoration:underline;'>Download English Resume (PDF)</a><br>• <a href='docs/YathinKS_Lebenslauf_DE.pdf' target='_blank' style='color:var(--accent-primary);text-decoration:underline;'>Download German Lebenslauf (PDF)</a>",
        fallback: "Thank you for asking! Yathin is an Oracle-certified Senior Staff & Platform Engineer with 10+ years of experience in distributed JVM microservices, event streaming, and cloud platforms. You can reach him directly at <a href='mailto:yathin.ksomaiah@gmail.com' style='color:var(--accent-primary);'>yathin.ksomaiah@gmail.com</a>."
      }
    },
    de: {
      welcome: "Hallo! Ich bin Yathins Portfolio-Assistent. Fragen Sie mich nach seinen 10+ Jahren Erfahrung in verteilten Systemen, Hochdurchsatzarchitekturen, Technologiestacks oder Standort & Arbeitserlaubnis.",
      chips: [
        { id: "career", text: "💼 Werdegang & Profil" },
        { id: "scale", text: "⚡ Hochdurchsatz (1000+ TPS)" },
        { id: "tech", text: "🛠️ Technologiestack" },
        { id: "location", text: "📍 Standort & Arbeitserlaubnis" },
        { id: "resume", text: "📄 Lebenslauf (PDF)" }
      ],
      answers: {
        career: "Yathin verfügt über mehr als 10 Jahre Erfahrung in der Software- und Plattformentwicklung bei 6 Unternehmen: NSC Global (Cisco Client), IG Infotech (FinTech/Handel), APIwiz (API Gateway), Altimetrik (Citibank/Blackhawk), Brillio und Attra Infotech. Sein Schwerpunkt liegt auf robusten Backend-Plattformen und Cloud-Architekturen.",
        scale: "Yathin hat Plattformen für mehr als 1.000 TPS mit Latenzzeiten unter 100 ms entworfen. Bei IG Infotech entwickelte er verteilte Kafka-Event-Streaming-Pipelines und führte unterbrechungsfreie Datenbankmigrationen mit automatisierten Schutzschaltern und Hazelcast-Caching durch.",
        tech: "Zu seinen Kernkompetenzen gehören Java (8/11/17/21), Spring Boot 3.x, Apache Kafka, verteiltes Caching (Hazelcast, Redis), Cloud-Architektur (AWS, GCP), Docker, Kubernetes, PostgreSQL, MongoDB, reaktive Programmierung, TDD und CI/CD-Pipelines.",
        location: "Yathin hat seinen Wohnsitz in Saarbrücken, Deutschland, und besitzt eine uneingeschränkte deutsche Arbeitserlaubnis (kein Sponsoring erforderlich). Er ist verfügbar für Positionen als Senior Staff Engineer, Lead Backend Engineer und Platform Architect (Remote oder Hybrid in Deutschland).",
        resume: "Sie können die offiziellen Unterlagen direkt herunterladen:<br>• <a href='docs/YathinKS_Lebenslauf_DE.pdf' target='_blank' style='color:var(--accent-primary);text-decoration:underline;'>Deutschen Lebenslauf herunterladen (PDF)</a><br>• <a href='docs/YathinKS_Resume_EN.pdf' target='_blank' style='color:var(--accent-primary);text-decoration:underline;'>Englischen Resume herunterladen (PDF)</a>",
        fallback: "Vielen Dank für Ihre Anfrage! Yathin ist Oracle-zertifizierter Senior Staff & Platform Engineer mit 10+ Jahren Erfahrung in verteilten JVM-Microservices, Event-Streaming und Cloud-Plattformen. Sie erreichen ihn direkt unter <a href='mailto:yathin.ksomaiah@gmail.com' style='color:var(--accent-primary);'>yathin.ksomaiah@gmail.com</a>."
      }
    }
  };

  class ChatBotUI {
    constructor() {
      this.isOpen = false;
      this.currentLang = localStorage.getItem('yks_portfolio_lang') || 'en';
      this.init();
    }

    init() {
      this.injectMarkup();
      this.cacheElements();
      this.bindEvents();
      this.renderChips();
    }

    injectMarkup() {
      if (document.getElementById('chatbot-root')) return;

      const container = document.createElement('div');
      container.id = 'chatbot-root';
      container.className = 'chatbot-container';
      container.innerHTML = `
        <!-- Floating Robot Character -->
        <div id="robot-avatar" class="robot-character" title="Click to chat with AI Assistant" aria-label="Open AI Assistant">
          <svg width="74" height="74" viewBox="0 0 100 100" class="robot-svg">
            <!-- Body -->
            <rect x="30" y="55" width="40" height="35" rx="10" fill="rgba(99, 102, 241, 0.25)" stroke="#6366f1" stroke-width="2" />
            <rect x="36" y="62" width="28" height="22" rx="5" fill="rgba(99, 102, 241, 0.15)" />
            <circle cx="50" cy="73" r="5" fill="#38bdf8" opacity="0.8" />

            <!-- Neck -->
            <rect x="45" y="50" width="10" height="5" fill="#6366f1" />

            <!-- Head Group with rotation & tilt -->
            <g id="robot-head">
              <rect x="25" y="20" width="50" height="34" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="2" />
              <rect x="30" y="25" width="40" height="24" rx="6" fill="rgba(99, 102, 241, 0.1)" />

              <!-- Eyes -->
              <ellipse id="eye-left" cx="40" cy="37" rx="4" ry="4" fill="#38bdf8" />
              <ellipse id="eye-right" cx="60" cy="37" rx="4" ry="4" fill="#38bdf8" />

              <!-- Antenna -->
              <line x1="50" y1="20" x2="50" y2="10" stroke="#6366f1" stroke-width="2" />
              <circle cx="50" cy="8" r="3.5" fill="#38bdf8" class="antenna-glow" />
            </g>

            <!-- Arms -->
            <path d="M 25 65 Q 14 65 15 76" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" />
            <path d="M 75 65 Q 86 65 85 76" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" />
          </svg>
          <div class="robot-status-ring">
            <span class="status-pulse-dot"></span>
          </div>
          <div class="robot-speech-bubble" id="robot-speech-bubble">
            Chat with me! 👋
          </div>
        </div>

        <!-- Chat Window Window -->
        <div id="chat-window" class="chat-window" style="display: none;">
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-header-icon">⚡</div>
              <div>
                <h4 id="chat-title" class="chat-title">YKS AI Assistant</h4>
                <div class="chat-status-text">
                  <span class="status-dot"></span>
                  <span id="chat-status-label">Online & Ready</span>
                </div>
              </div>
            </div>
            <button id="chat-close-btn" class="chat-close-btn" aria-label="Close Chat Window">✕</button>
          </div>

          <div id="chat-messages" class="chat-messages">
            <div class="chat-msg bot">
              <p id="chat-welcome-text"></p>
              <span class="msg-time" id="msg-time-initial"></span>
            </div>
          </div>

          <!-- Suggested Query Chips -->
          <div id="chat-chips-container" class="chat-chips-container"></div>

          <!-- Input Box -->
          <form id="chat-form" class="chat-input-form">
            <input
              type="text"
              id="chat-input"
              class="chat-input"
              placeholder="Ask about Yathin's experience..."
              autocomplete="off"
            />
            <button type="submit" class="chat-send-btn" aria-label="Send Message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      `;

      document.body.appendChild(container);
    }

    cacheElements() {
      this.avatar = document.getElementById('robot-avatar');
      this.head = document.getElementById('robot-head');
      this.speechBubble = document.getElementById('robot-speech-bubble');
      this.window = document.getElementById('chat-window');
      this.closeBtn = document.getElementById('chat-close-btn');
      this.messagesContainer = document.getElementById('chat-messages');
      this.chipsContainer = document.getElementById('chat-chips-container');
      this.form = document.getElementById('chat-form');
      this.input = document.getElementById('chat-input');
      this.welcomeText = document.getElementById('chat-welcome-text');
      this.statusLabel = document.getElementById('chat-status-label');
      this.title = document.getElementById('chat-title');
      this.initialTime = document.getElementById('msg-time-initial');
    }

    bindEvents() {
      this.avatar.addEventListener('click', () => this.toggleChat(true));
      this.closeBtn.addEventListener('click', () => this.toggleChat(false));

      // Head tracking mouse
      window.addEventListener('mousemove', (e) => this.handleMouseMove(e));

      // Listen for language changes from i18n
      window.addEventListener('languageChanged', (e) => {
        this.currentLang = e.detail.lang;
        this.updateTexts();
      });

      // Submit user query
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.input.value.trim();
        if (text) {
          this.handleUserQuery(text);
          this.input.value = '';
        }
      });

      this.updateTexts();
    }

    handleMouseMove(e) {
      if (this.isOpen || !this.avatar || !this.head) return;
      const rect = this.avatar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = Math.max(-10, Math.min(10, (e.clientX - centerX) / 40));
      const deltaY = Math.max(-8, Math.min(8, (e.clientY - centerY) / 40));
      this.head.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    toggleChat(open) {
      this.isOpen = open;
      if (open) {
        this.avatar.classList.add('hidden');
        this.window.style.display = 'flex';
        this.input.focus();
        if (this.messagesContainer) {
          this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }
      } else {
        this.window.style.display = 'none';
        this.avatar.classList.remove('hidden');
        if (this.head) this.head.style.transform = 'none';
      }
    }

    updateTexts() {
      const data = KNOWLEDGE_BASE[this.currentLang] || KNOWLEDGE_BASE.en;
      if (this.welcomeText) this.welcomeText.textContent = data.welcome;
      if (this.title) this.title.textContent = this.currentLang === 'de' ? 'YKS KI-Assistent' : 'YKS AI Assistant';
      if (this.statusLabel) this.statusLabel.textContent = this.currentLang === 'de' ? 'Online & Bereit' : 'Online & Ready';
      if (this.input) this.input.placeholder = this.currentLang === 'de' ? 'Fragen Sie zu Yathins Erfahrung...' : "Ask about Yathin's experience...";
      if (this.initialTime) this.initialTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (this.speechBubble) this.speechBubble.textContent = this.currentLang === 'de' ? 'Sprechen Sie mit mir! 👋' : 'Chat with me! 👋';
      this.renderChips();
    }

    renderChips() {
      if (!this.chipsContainer) return;
      const data = KNOWLEDGE_BASE[this.currentLang] || KNOWLEDGE_BASE.en;
      this.chipsContainer.innerHTML = '';

      data.chips.forEach((chip) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chat-chip';
        btn.textContent = chip.text;
        btn.addEventListener('click', () => {
          this.handleChipClick(chip.id, chip.text);
        });
        this.chipsContainer.appendChild(btn);
      });
    }

    handleChipClick(id, displayText) {
      this.appendMessage('user', displayText);
      const data = KNOWLEDGE_BASE[this.currentLang] || KNOWLEDGE_BASE.en;
      const answer = data.answers[id] || data.answers.fallback;

      // Small typing simulation delay
      setTimeout(() => {
        this.appendMessage('bot', answer);
      }, 400);
    }

    handleUserQuery(query) {
      this.appendMessage('user', query);
      const data = KNOWLEDGE_BASE[this.currentLang] || KNOWLEDGE_BASE.en;
      const lower = query.toLowerCase();
      let answerKey = 'fallback';

      if (lower.includes('experience') || lower.includes('career') || lower.includes('work') || lower.includes('werdegang') || lower.includes('erfahrung') || lower.includes('lead') || lower.includes('staff')) {
        answerKey = 'career';
      } else if (lower.includes('scale') || lower.includes('throughput') || lower.includes('tps') || lower.includes('concurrency') || lower.includes('parallel') || lower.includes('performance')) {
        answerKey = 'scale';
      } else if (lower.includes('tech') || lower.includes('skill') || lower.includes('stack') || lower.includes('java') || lower.includes('kafka') || lower.includes('spring') || lower.includes('aws') || lower.includes('cloud')) {
        answerKey = 'tech';
      } else if (lower.includes('location') || lower.includes('permit') || lower.includes('germany') || lower.includes('visa') || lower.includes('deutschland') || lower.includes('standort') || lower.includes('wohnort') || lower.includes('arbeitserlaubnis')) {
        answerKey = 'location';
      } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('lebenslauf') || lower.includes('pdf') || lower.includes('download')) {
        answerKey = 'resume';
      }

      const answer = data.answers[answerKey];
      setTimeout(() => {
        this.appendMessage('bot', answer);
      }, 450);
    }

    appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-msg ${sender}`;
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      msgDiv.innerHTML = `
        <p>${text}</p>
        <span class="msg-time">${now}</span>
      `;
      this.messagesContainer.appendChild(msgDiv);
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ChatBotUI());
  } else {
    new ChatBotUI();
  }
})();
