import { useState } from 'react'
import heroImg from "./images/cullen.jpeg"
import aboutImg from "./images/cullen2.jpeg"
import webImg from "./images/web.png"
import websImg from "./images/store 2.png"
import metaimg from "./images/meta.png"
import marketingImg from "./images/saless.png"
import ecomImg from "./images/ecom.avif"
// import logo from "./asset/Bc-logo.png"

const NAV_LINKS = ['About', 'Services', 'Work', 'Results', 'FAQ']

const SERVICES = [
  {
    n: 'E-commerce Web Design',
    desc: 'High-converting online stores built to captivate visitors, establish brand authority, and turn traffic into revenue.',
  },
  {
    n: 'Marketing',
    desc: 'Data-driven ad campaigns across Meta and social platforms engineered to lower acquisition costs and scale your brand.',
  },
  {
    n: 'Branding & Optimization',
    desc: 'Cohesive visual identities and tactical UX upgrades designed to maximize customer trust and lifetime value.',
  },
  {
    n: 'Conversion Rate Optimization',
    desc: 'Data-informed tweaks across your funnel — from landing page to checkout — focused on measurable lift.',
  },
]

const WORK = [
  {
    tag: 'Web Design',
    title: 'Website Design/Optimization',
    desc: 'Building sleek, high-end digital storefronts optimized for visual storytelling, seamless mobile navigation, and high conversion rates.',
    href: '#contact',
    src: websImg,
  },
  {
    tag: 'Performance Marketing',
    title: 'Ad Strategy & Retargeting',
    desc: 'Building high-performance paid traffic strategies utilizing data-driven ad funnels and advanced creative testing frameworks across Meta and TikTok.',
    href: '#contact',
    src: metaimg,
  },
  {
    tag: 'Conversion Rate Optimization',
    title: 'Sales & Conversion Growth',
    desc: 'Building restructured frontend offer positioning, cart abandonment sequences, and checkout funnels to maximize transactional throughput and lifetime value.',
    href: '#contact',
    src: marketingImg,
  },
  {
    tag: 'Agency',
    title: 'Full-Service Projects',
    desc: 'For end-to-end builds \u2014 design, storefront setup, and marketing growth, see the agency side of the work at Cullen Consult.',
    href: 'https://cullenconsult.framer.website/',
    src: ecomImg,
    external: true,
  },
]

const TESTIMONIALS = [
  {
    quote: 'Cullen quickly identified issues within our store structure that had been overlooked for months. The attention to detail and ability to explain improvements clearly made all the difference.',
    name: 'Sterling',
    role: 'Store Structure Consultation',
  },
  {
    quote: 'Communication was smooth from start to finish. Every recommendation came with a clear reason behind it, which made the process far more valuable than generic advice.',
    name: 'Sinclair',
    role: 'Shopify Store Owner',
  },
  {
    quote: 'The product page improvements made our store feel significantly more professional. Navigation became clearer and the overall customer experience improved noticeably.',
    name: 'Henderson',
    role: 'Product Page Optimization',
  },
]

const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'I focus on high-end e-commerce store optimization, conversion rate enhancement, performance marketing funnels, and direct 1-on-1 mentorship designed to help brands scale sustainably.',
  },
  {
    q: 'Do you work with new stores or established ones?',
    a: 'Both \u2014 new stores get a solid structural foundation, established stores get a focused audit to fix what\u2019s costing them sales.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most audits take 3\u20135 days. Full optimization projects usually run 1\u20132 weeks depending on scope.',
  },
  {
    q: 'How do I get started?',
    a: 'Reach out through the contact form below, or send a message directly \u2014 I typically reply within 24 hours.',
  },
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-q">
        <span>{item.q}</span>
        <span className="icon">+</span>
      </div>
      <div className="faq-a">{item.a}</div>
    </div>
  )
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <a href='#top'>Benedict Cullen</a>
            {/* <svg className="logo-mark" viewBox="0 0 32 32" fill="none">
              <path d="M4 22L8 10L16 16L24 10L28 22" stroke="#c9a660" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/>
              <circle cx="8" cy="10" r="2" fill="#c9a660"/>
              <circle cx="16" cy="16" r="2" fill="#e0c17f"/>
              <circle cx="24" cy="10" r="2" fill="#c9a660"/>
            </svg> */}
          </div>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </div>
          <a href="#contact" className="nav-cta nav-cta-desktop">Work With Me</a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Work With Me</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div>
            <span className="hero-eyebrow">Available</span>
            <h1>CULLEN</h1>
            <p className="sub">
              E-commerce founder helping ecom brands fix what&rsquo;s quietly costing them sales &mdash;
              through store audits, product page optimization, conversion-focused design and effective marketing strategies.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary">Work With Me &rarr;</a>
              <a href="#work" className="btn-secondary">See the Work</a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={heroImg} alt="Cullen portrait" />
            <div className="hero-portrait-tag">Based in the United Kingdom</div>
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-grid">
          <div>
            <div className="stat-label">Completed Projects</div>
            <div className="stat-value">115+</div>
          </div>
          <div>
            <div className="stat-label">Stores Audited</div>
            <div className="stat-value">95+</div>
          </div>
          <div>
            <div className="stat-label">Client Revenue</div>
            <div className="stat-value">$25.4M+</div>
          </div>
          <div>
            <div className="stat-label">Mentorship</div>
            <div className="stat-value">Open</div>
          </div>
        </div>
      </div>

      <main className="container">
        {/* ABOUT */}
        <section id="about" className="about">
          <div className="about-media">
            <img src={aboutImg} alt="About Cullen" />
          </div>
          <div>
            <span className="section-eyebrow">About</span>
            <h2 style={{fontFamily: 'var(--display)', fontSize: 'clamp(28px, 4vw, 38px)', margin: '0 0 20px'}}>
              An e-commerce founder who works on stores, not just theory
            </h2>
            <p className="about-quote">
              &ldquo;Most stores aren&rsquo;t losing sales because of one big problem &mdash; it&rsquo;s five small ones nobody looked at closely.&rdquo;
            </p>
            <p>
              Cullen is a UK-based e-commerce founder and Shopify consultant focused on the structural and
              experience issues that quietly cap a store&rsquo;s conversion rate. The work centers on what&rsquo;s
              provable: cleaner navigation, product pages that build trust, and a checkout path with less
              friction between a visitor and a sale.
            </p>
            <p style={{marginTop: 14}}>
              Rather than generic best-practice advice, every project starts with a direct audit of the
              actual store &mdash; identifying the specific points where customers hesitate or drop off, and
              fixing those first.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <div className="section-head">
            <span className="section-eyebrow">Services</span>
            <h2>Where the <em>work</em> actually happens</h2>
          </div>
          <div className="services-list">
            {SERVICES.map((s) => (
              <div className="service-row" key={s.n}>
                <h3>{s.n}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK / RESULTS */}
        <section id="work">
          <div className="section-head">
            <span className="section-eyebrow">Work & Case Studies</span>
            <h2>Recent <em>results</em></h2>
          </div>
          <div className="work-grid">
            {WORK.map((w) => (
              <a
                className="work-card"
                key={w.title}
                href={w.href}
                target={w.external ? '_blank' : undefined}
                rel={w.external ? 'noopener noreferrer' : undefined}
              >
                <div className="work-card-media">
                  <span className="work-card-tag">{w.tag}</span>
                  <img src={w.src} alt={`${w.title} placeholder`} />
                </div>
                <div className="work-card-body">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                  <span className="work-card-link">{w.external ? 'Visit Cullen Consult' : 'Discuss a project like this'} &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="results">
          <div className="section-head">
            <span className="section-eyebrow">Client Feedback</span>
            <h2>What store owners <em>say</em></h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* SOCIAL PROOF STRIP */}
      <div className="social-strip">
        <h3>Building in <em>public</em>, every week.</h3>
        <div className="social-cols">
          <div className="social-col">
            <a href="https://www.instagram.com/ecom.cullen" target="_blank" rel="noopener noreferrer">Instagram &rarr;</a>
            <span className="count">@ecom.cullen</span>
          </div>
          <div className="social-col">
            <a href="https://twitter.com/ecomcullen" target="_blank" rel="noopener noreferrer">X / Twitter &rarr;</a>
            <span className="count">@ecomcullen</span>
          </div>
          <div className="social-col">
            <a href="https://www.facebook.com/ecomcullen" target="_blank" rel="noopener noreferrer">Facebook &rarr;</a>
            <span className="count">@ecomcullen</span>
          </div>
          <div className="social-col">
            <a href="https://www.behance.net/benedict_cullen" target="_blank" rel="noopener noreferrer">Behance &rarr;</a>
            <span className="count">Portfolio</span>
          </div>
        </div>
      </div>

      <main className="container">
        {/* CTA DUAL CARDS */}
        <section>
          <div className="section-head">
            <span className="section-eyebrow">Let&rsquo;s Build</span>
            <h2>Two ways to <em>work together</em></h2>
          </div>
          <div className="cta-grid">
            <div className="cta-card gold">
              <h3>1-on-1 Mentorship</h3>
              <p>A Direct, personal guidance to help you build, fix, and grow your online business step-by-step.</p>
              <a href="#contact" className="btn-primary">Apply to Work With Me &rarr;</a>
            </div>
            <div className="cta-card">
              <h3>Full Agency Build</h3>
              <p>For complete store builds, branding, and ongoing growth work, see the agency side of things at Cullen Consult.</p>
              <a href="https://cullenconsult.framer.website/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit Cullen Consult &rarr;</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2>Your questions, <em>answered</em></h2>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.q}
                item={f}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{textAlign: 'center'}}>
          <div className="section-head" style={{margin: '0 auto 40px', maxWidth: 560}}>
            <span className="section-eyebrow">Contact</span>
            <h2>Let&rsquo;s talk about <em>your store</em></h2>
          </div>
          <a href="https://workwithcullen.figma.site/" className="btn-primary">Apply Here &rarr;</a>
          {/* <p style={{color: 'var(--text-faint)', fontSize: 13, marginTop: 16}}>
            cullenbenedict1@gmail.com &middot; Typically replies within 24 hours
          </p> */}
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-links">
              {NAV_LINKS.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
              ))}
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/ecom.cullen" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/ecomcullen" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/ecomcullen" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.behance.net/benedict_cullen" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <i className="fa-brands fa-behance"></i>
              </a>
            </div>
          </div>
          <h2 className="footer-name">CULLEN</h2>
          <div className="footer-bottom">
            <span>&copy; 2026 Benedict Cullen. All rights reserved.</span>
            <a href="#top">Back to top &uarr;</a>
          </div>
        </div>
      </footer>
    </>
  )
}