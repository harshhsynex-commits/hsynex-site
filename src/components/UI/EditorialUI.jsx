import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Solutions dataset containing all 6 core disciplines.
 */
export const solutionsData = [
  {
    slug: 'web-applications',
    title: 'Web Applications',
    short: 'Customer-facing experiences with a product backbone.',
    problem: 'Replace fragmented digital touchpoints with one clear experience.',
    build: 'Portals, dashboards, internal tools and customer platforms.',
    useCases: 'Customer portals, operations dashboards, booking and workflow tools.',
    tech: ['React', 'Vite', 'Next.js', 'TypeScript', 'Tailwind/CSS Modules'],
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    short: 'Native-feeling tools for teams in motion.',
    problem: 'Put the right workflow in the hands of people wherever work happens.',
    build: 'Cross-platform mobile products for customers and teams.',
    useCases: 'Customer apps, field operations, workforce tools and companion apps.',
    tech: ['React Native', 'Expo', 'Offline Sync', 'Push Protocols', 'Biometrics'],
  },
  {
    slug: 'business-software',
    title: 'Business Software',
    short: 'Workflows, operations and data in one place.',
    problem: 'Turn manual, disconnected operations into a system people can trust.',
    build: 'Purpose-built software around how your business actually works.',
    useCases: 'Orders, operations, reporting, inventory and team workflows.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Role Matrix'],
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    short: 'Focused software that earns a place in the daily stack.',
    problem: 'Move from a promising software idea to a product people can use.',
    build: 'Product discovery, UX, frontend, backend and deployment.',
    useCases: 'New SaaS products, MVPs, subscriptions and admin systems.',
    tech: ['Multi-Tenant DB', 'Stripe Billing', 'WebSockets', 'Telemetry', 'Cloud API'],
  },
  {
    slug: 'cms-admin-systems',
    title: 'CMS & Admin Systems',
    short: 'Clear control rooms for content and teams.',
    problem: 'Give the people running the business control without the clutter.',
    build: 'Content, users, roles, permissions and operational admin tools.',
    useCases: 'Content management, ecommerce administration and team control.',
    tech: ['Headless CMS', 'GraphQL', 'Media Pipelines', 'Audit Logs'],
  },
  {
    slug: 'automation-integrations',
    title: 'Automation & Integrations',
    short: 'The connective tissue between the tools you already use.',
    problem: 'Reduce repetitive work and make systems exchange useful information.',
    build: 'APIs, workflows and integrations designed around your process.',
    useCases: 'CRM, payments, email, inventory, notifications and APIs.',
    tech: ['Webhook Engines', 'Worker Queues', 'REST/OpenAPI', 'Event Streaming'],
  },
];

export const technologies = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'React Native',
  'Next.js',
  'REST APIs',
  'Cloud Infrastructure',
];

/**
 * Lightweight SEO hook to dynamically manage document title and meta description.
 */
export function useSEO(title, description) {
  useEffect(() => {
    if (title) {
      document.title = `${title} — HSynex`;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);
}

/**
 * Editorial primary or secondary action button with inline arrow icon.
 */
export function HSButton({ children, to = '/contact', secondary = false, onClick, className = '' }) {
  const content = (
    <>
      <span>{children}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </>
  );

  const classes = `hs-btn ${secondary ? 'hs-btn-secondary' : 'hs-btn-primary'} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  if (to.startsWith('http') || to.startsWith('mailto:')) {
    return (
      <a href={to} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  );
}

/**
 * Page Hero component with technical grid background.
 */
export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero-section">
      <div className="technical-grid pointer-events-none" style={{ position: 'absolute', inset: 0, opacity: 0.45 }} />
      <div className="container" style={{ position: 'relative' }}>
        {eyebrow && <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {text && <p className="page-hero-text">{text}</p>}
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}

/**
 * Section Title component with eyebrow, headline, and optional narrative.
 */
export function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="editorial-section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

/**
 * Detailed technology items with SVG icons, categories, and architecture descriptors.
 */
export const technologiesList = [
  {
    name: 'React 19',
    category: 'FRONTEND',
    desc: 'Component architecture, concurrent rendering, and reactive state systems.',
    color: '#00D1FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D1FF" strokeWidth="1.75">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#00D1FF" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'BACKEND',
    desc: 'High-throughput asynchronous runtimes and microservice engines.',
    color: '#22C55E',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.75">
        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5 12 2" />
        <polyline points="12 12 12 22" />
        <polyline points="12 12 21 7.5" />
        <polyline points="12 12 3 7.5" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'TYPE SYSTEM',
    desc: 'Strict compile-time type safety across frontend and API contracts.',
    color: '#3B82F6',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.75">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h6M10 8v8" />
        <path d="M14 13.5c.5.5 1.2.8 2 .8 1 0 1.5-.5 1.5-1.2s-.5-1-1.5-1.3l-.5-.2c-1.2-.4-1.8-1-1.8-2 0-1.2 1-2.1 2.3-2.1 1 0 1.8.4 2.3 1M14 16" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'FULLSTACK',
    desc: 'Edge server-side rendering, streaming interfaces, and optimal SEO.',
    color: '#FFFFFF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 16V8l8 10V8" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'DATABASE',
    desc: 'ACID-compliant relational database with JSONB and row-level security.',
    color: '#38BDF8',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.75">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    category: 'MOBILE',
    desc: 'Cross-platform iOS and Android applications with native fluidity.',
    color: '#00D1FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D1FF" strokeWidth="1.75">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <circle cx="12" cy="18" r="1" fill="#00D1FF" />
        <ellipse cx="12" cy="10" rx="4" ry="1.7" />
        <ellipse cx="12" cy="10" rx="4" ry="1.7" transform="rotate(60 12 10)" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    category: 'IN-MEMORY CACHE',
    desc: 'Sub-millisecond pub/sub message brokers and distributed cache layers.',
    color: '#EF4444',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.75">
        <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
        <polygon points="12 9 22 15.5 12 22 2 15.5 12 9" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'CONTAINERS',
    desc: 'Reproducible isolated microservices and automated deployment containers.',
    color: '#2563EB',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.75">
        <rect x="2" y="10" width="4" height="3" />
        <rect x="7" y="10" width="4" height="3" />
        <rect x="12" y="10" width="4" height="3" />
        <rect x="7" y="6" width="4" height="3" />
        <rect x="12" y="6" width="4" height="3" />
        <path d="M2 13c1 5 6 7 12 7 6 0 8-3 8-7-2 0-4 .5-6 .5-4 0-6-1.5-8-1.5-2 0-4 1-6 1z" />
      </svg>
    ),
  },
  {
    name: 'Cloud / AWS',
    category: 'INFRASTRUCTURE',
    desc: 'Self-healing, auto-scaling cloud deployments with 99.99% uptime SLAs.',
    color: '#F59E0B',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.75">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'GraphQL & REST',
    category: 'API ARCHITECTURE',
    desc: 'Clean, versioned, zero-trust APIs with automated OpenAPI documentation.',
    color: '#E11D48',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="1.75">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="10" y2="15.5" />
        <line x1="15.5" y1="7.5" x2="14" y2="15.5" />
        <line x1="9" y1="6" x2="15" y2="6" />
      </svg>
    ),
  },
];

/**
 * Interactive Swiper Slider component for technology competencies.
 */
export function TechStrip() {
  const scrollContainer = (direction) => {
    const el = document.getElementById('tech-swiper-track');
    if (el) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="tech-slider-section">
      <div className="container">
        <div className="tech-slider-header">
          <div>
            <p className="eyebrow">ENGINEERING CAPABILITIES</p>
            <h2 className="tech-slider-title">TECHNOLOGIES WE RUN IN PRODUCTION</h2>
            <p className="tech-slider-sub">
              Zero-bloat modern standards engineered for sub-second performance, security, and scalability.
            </p>
          </div>

          <div className="tech-slider-controls">
            <button
              onClick={() => scrollContainer('left')}
              className="slider-nav-btn"
              aria-label="Previous technologies"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollContainer('right')}
              className="slider-nav-btn"
              aria-label="Next technologies"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Swiper Track */}
        <div id="tech-swiper-track" className="tech-swiper-track">
          {technologiesList.map((item) => (
            <div key={item.name} className="tech-swiper-card">
              <div className="tech-card-top">
                <div className="tech-icon-wrapper" style={{ boxShadow: `0 0 20px ${item.color}20` }}>
                  {item.icon}
                </div>
                <span className="tech-category-pill">{item.category}</span>
              </div>
              <h3 className="tech-card-name">{item.name}</h3>
              <p className="tech-card-desc">{item.desc}</p>
              <div className="tech-card-bar" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * High-impact CTA banner for conversion.
 */
export function CTASection() {
  return (
    <section className="editorial-cta-section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>START A CONVERSATION</p>
        <div className="cta-flex-container">
          <h2 className="cta-huge-title">
            HAVE A PROBLEM<br />
            <span style={{ color: 'var(--hsynex-cyan)' }}>WORTH SOLVING?</span>
          </h2>
          <div style={{ maxWidth: '340px' }}>
            <p style={{ color: 'var(--hsynex-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
              Let's turn it into something useful, scalable, and built for the real world.
            </p>
            <div style={{ marginTop: '1.75rem' }}>
              <HSButton to="/contact">LET'S BUILD SOMETHING</HSButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Editorial tabular list of all 6 solutions.
 */
export function ServiceRows() {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      {solutionsData.map((s, i) => (
        <Link key={s.slug} to={`/solutions/${s.slug}`} className="service-row-item">
          <span className="service-row-num">0{i + 1}</span>
          <div>
            <h3 className="service-row-title">{s.title}</h3>
            <p className="service-row-short">{s.short}</p>
          </div>
          <span className="service-row-arrow">
            EXPLORE &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}

/**
 * 5-Step Delivery Timeline.
 */
export function Timeline() {
  const steps = [
    ['01', 'DISCOVER', 'Understand the operational bottleneck.'],
    ['02', 'DESIGN', 'Define the UX surface and architecture.'],
    ['03', 'BUILD', 'Engineer the product with clean standards.'],
    ['04', 'LAUNCH', 'Deploy into production with zero downtime.'],
    ['05', 'SCALE', 'Continuously monitor and evolve the system.'],
  ];

  return (
    <div className="timeline-grid" style={{ marginTop: '2.5rem' }}>
      {steps.map(([n, t, d]) => (
        <div key={n} className="timeline-step">
          <span className="timeline-step-num">{n}</span>
          <h3 className="timeline-step-title">{t}</h3>
          <p className="timeline-step-desc">{d}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Visual schematic concept preview for product concepts.
 */
export function VisualPreview({ label = 'PRODUCT CONCEPT' }) {
  return (
    <div className="preview-panel" style={{ padding: '1.5rem', minHeight: '300px' }}>
      <p className="eyebrow">{label}</p>
      <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
        <div style={{ gridColumn: 'span 2', height: '110px', border: '1px solid rgba(0, 209, 255, 0.3)', background: 'rgba(0, 209, 255, 0.05)' }} />
        <div style={{ height: '110px', border: '1px solid var(--hsynex-border)', background: 'rgba(30, 41, 59, 0.4)' }} />
        <div style={{ height: '50px', border: '1px solid var(--hsynex-border)', background: 'rgba(30, 41, 59, 0.4)' }} />
        <div style={{ gridColumn: 'span 2', height: '50px', border: '1px solid var(--hsynex-border)', background: 'rgba(30, 41, 59, 0.4)' }} />
      </div>
    </div>
  );
}
