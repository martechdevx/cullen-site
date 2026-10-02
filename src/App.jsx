import { useState, useRef, useEffect } from 'react'
import heroImg from "./images/cullen.jpeg"
import aboutImg from "./images/cport.jpg"
import webImg from "./images/web.png"
import websImg from "./images/store 2.png"
import metaimg from "./images/meta.png"
import marketingImg from "./images/saless.png"
import ecomImg from "./images/ecom.avif"
// import logo from "./asset/Bc-logo.png"

import shotFirstSale from "./images/results/first-sale.jpeg"
import shotMillion from "./images/results/million-milestone.jpeg"
import shot10kDay from "./images/results/10k-day.jpeg"
import shot485 from "./images/results/485-growth.jpeg"
import shot15k from "./images/results/1-5k-spike.jpeg"
import shot19Days from "./images/results/19-days-in.jpeg"
import shot100k from "./images/results/100k-day.jpeg"
import shot155 from "./images/results/155-lift.jpeg"
import shotFlooding from "./images/results/orders-flooding.jpeg"
import shot82 from "./images/results/82-returning.png"


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
];

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
    href: 'https://cullenconsults.pages.dev/',
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

const RESULT_SHOTS = [
  {
    tag: 'First Sale',
    headline: "Landed his first order days after launch — before he even knew how to fulfill it.",
    img: shotFirstSale,
    accent: 'sage',
  },
  {
    tag: '$1M Milestone',
    headline: "Crossed $1,001,648 in total sales from a store that almost never launched.",
    img: shotMillion,
    accent: 'gold',
  },
  {
    tag: '10K Day',
    headline: "Another day on the books — $10K+ in sales and 190 orders in 24 hours.",
    img: shot10kDay,
    accent: 'sage',
  },
  {
    tag: '485% Growth',
    headline: "Sales up 485% and orders up 395% in the same stretch of days.",
    img: shot485,
    accent: 'gold',
  },
  {
    tag: '1.5K% Spike',
    headline: "33 orders in a single day — a jump the client couldn't quite believe.",
    img: shot15k,
    accent: 'sage',
  },
  {
    tag: '19 Days In',
    headline: "19 days since launch and already 'the most mind-blowing experience of my life.'",
    img: shot19Days,
    accent: 'gold',
  },
  {
    tag: '$100K Day',
    headline: "A single day that crossed six figures — $100,071 in sales.",
    img: shot100k,
    accent: 'sage',
  },
  {
    tag: '155% Lift',
    headline: "Sales, orders, and conversion rate all jumped together in the same week.",
    img: shot155,
    accent: 'gold',
  },
  {
    tag: 'Orders Flooding In',
    headline: "Order after order after order — back to back, all morning long.",
    img: shotFlooding,
    accent: 'sage',
  },
  {
    tag: '82% Returning',
    headline: "An 82% returning customer rate — proof the store keeps people coming back.",
    img: shot82,
    accent: 'gold',
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

function ResultsGallery({ items }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])

  // Triplicate the array so the user can scroll endlessly in both directions
  const displayItems = [...items, ...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = null
    let isDown = false
    let startX = 0
    let startScrollLeft = 0

    // Start the scroll position at the middle set on load
    if (track.scrollLeft === 0) {
      track.scrollLeft = track.scrollWidth / 3
    }

    const update = () => {
      const singleSetWidth = track.scrollWidth / 3

      // Seamless wrap-around check when approaching edges
      if (track.scrollLeft <= 10) {
        track.scrollLeft += singleSetWidth
      } else if (track.scrollLeft >= singleSetWidth * 2 - 10) {
        track.scrollLeft -= singleSetWidth
      }

      // Dynamic coverflow depth and scale calculations
      const trackRect = track.getBoundingClientRect()
      const center = trackRect.left + trackRect.width / 2
      cardRefs.current.forEach((el) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const cardCenter = r.left + r.width / 2
        const dist = Math.abs(center - cardCenter)
        const maxDist = trackRect.width / 2 + r.width / 2
        const t = Math.min(dist / maxDist, 1)
        const scale = 1.08 - t * 0.28
        const opacity = 1 - t * 0.6
        el.style.transform = `scale(${scale.toFixed(3)})`
        el.style.opacity = opacity.toFixed(3)
        el.style.zIndex = String(Math.round((1 - t) * 100))
      })
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        update()
        raf = null
      })
    }

    const onMouseDown = (e) => {
      isDown = true
      track.classList.add('is-dragging')
      startX = e.pageX - track.offsetLeft
      startScrollLeft = track.scrollLeft
    }

    const onMouseLeave = () => {
      isDown = false
      track.classList.remove('is-dragging')
    }

    const onMouseUp = () => {
      isDown = false
      track.classList.remove('is-dragging')
    }

    const onMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.5 // Adjust 1.5 multiplier to change scroll speed
      track.scrollLeft = startScrollLeft - walk
    }

    update()
    track.addEventListener('scroll', onScroll, { passive: true })
    track.addEventListener('mousedown', onMouseDown)
    track.addEventListener('mouseleave', onMouseLeave)
    track.addEventListener('mouseup', onMouseUp)
    track.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onScroll)

    return () => {
      track.removeEventListener('scroll', onScroll)
      track.removeEventListener('mousedown', onMouseDown)
      track.removeEventListener('mouseleave', onMouseLeave)
      track.removeEventListener('mouseup', onMouseUp)
      track.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [items])

  return (
    <div className="results-gallery">
      <div className="results-track" ref={trackRef}>
        {displayItems.map((r, i) => (
          <div
            className="result-card"
            key={`${r.tag}-${i}`}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <span className={`result-tag result-tag-${r.accent}`}>{r.tag}</span>
            <p className="result-headline">{r.headline}</p>
            <div className="result-shot">
              <img src={r.img} alt={r.tag} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      <div className="results-hint">&larr; Scroll or drag to see more results &rarr;</div>
    </div>
  )
}

function AnimatedCount({ value }) {
  const [count, setCount] = useState(1)
  const countRef = useRef(null)

  useEffect(() => {
    const element = countRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value)
      return
    }

    let frameId
    let observer
    let startTime
    let previousCount = 1

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1800, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 4)
      const nextCount = Math.max(1, Math.floor(1 + (value - 1) * easedProgress))

      if (nextCount !== previousCount) {
        previousCount = nextCount
        setCount(nextCount)
      }

      if (progress < 1) frameId = requestAnimationFrame(animate)
    }

    const start = () => {
      frameId = requestAnimationFrame(animate)
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          start()
        }
      }, { threshold: 0.5 })
      observer.observe(element)
    } else {
      start()
    }

    return () => {
      observer?.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value])

  return <strong ref={countRef} aria-label={`${value}+ clients mentored`}>{count}+</strong>
}

function ApplyHerePage() {
  const applyUrl = 'https://form.typeform.com/to/jM26rk0a'
  const blueprintUrl = 'https://gamma.app/docs/The-Authority-Blueprint-A-to-Z-roadmap--az3wpx7hqq4idcd'
  const blueprintEmbedUrl = 'https://gamma.app/embed/az3wpx7hqq4idcd'

  return (
    <div className="apply-page" id="top">
      <nav className="nav">
        <div className="nav-inner">
          <a className="logo" href="/">Benedict Cullen</a>
          <a className="nav-cta" href="/">Back to Home</a>
        </div>
      </nav>

      <main>
        <header className="apply-hero">
          <div className="apply-hero-glow" />
          <div className="container apply-hero-inner">
            <span className="hero-eyebrow">Professional Mentorship &amp; Consulting</span>
            <h1><span>Unlock Your Success Journey</span><span>Work With Me Directly</span></h1>
            <p>High-impact mentorship and roadmap strategies for serious growth.</p>
            <a className="btn-primary" href={applyUrl} target="_blank" rel="noopener noreferrer">Apply Now <span aria-hidden="true">&rarr;</span></a>
            <div className="apply-client-count"><AnimatedCount value={57} /><span>Clients Mentored</span></div>
          </div>
        </header>

        {/* <section className="apply-proof">
          <div className="container apply-proof-points">
            <p><span aria-hidden="true">✦</span> Mentored 50+ clients</p>
            <p><span aria-hidden="true">↗</span> Avg. 2.5x growth</p>
            <p><span aria-hidden="true">◎</span> Trusted by entrepreneurs worldwide</p>
          </div>
        </section> */}

        <section className="container apply-section">
          <div className="section-head">
            <span className="section-eyebrow">Client outcomes</span>
            <h2>Real results from <em>real clients</em></h2>
          </div>
          <div className="apply-testimonials">
            <article><div className="testi-stars">★★★★★</div><p>“Doubled revenue in 90 days”</p><span>— Chris M.</span></article>
            <article><div className="testi-stars">★★★★★</div><p>“3x revenue growth in 6 weeks”</p><span>— Sarah L.</span></article>
            <article><div className="testi-stars">★★★★★</div><p>“Scaled from $5k to $25k/month”</p><span>— Michael R.</span></article>
          </div>
        </section>

        <section className="apply-blueprint">
          <div className="container apply-blueprint-inner">
            <div>
              <span className="section-eyebrow">Exclusive offer</span>
              <h2>The Authority <em>Blueprint</em></h2>
              <p className="apply-blueprint-subtitle">A to Z Roadmap to Dropshipping</p>
              <ul className="apply-benefits">
                <li>Step-by-step system for scaling your business</li>
                <li>Proven templates, strategies, and tools</li>
                <li>Instant access and implementation guidance</li>
                <li>Personal support and accountability</li>
                <li>Industry-tested frameworks</li>
                <li>Lifetime access to resources</li>
              </ul>
              <a className="btn-primary" href={blueprintUrl} target="_blank" rel="noopener noreferrer">Access the Roadmap <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="apply-blueprint-preview">
              <div className="apply-preview-toolbar">
                <span className="apply-preview-status">Live roadmap preview</span>
                <a href={blueprintUrl} target="_blank" rel="noopener noreferrer">Open full roadmap <span aria-hidden="true">↗</span></a>
              </div>
              <iframe
                className="apply-blueprint-iframe"
                src={blueprintEmbedUrl}
                title="The Authority Blueprint roadmap preview"
                loading="lazy"
                allow="fullscreen"
              />
            </div>
          </div>
        </section>

        <section className="container apply-section apply-process">
          <div className="section-head">
            <span className="section-eyebrow">Your next steps</span>
            <h2>How it <em>works</em></h2>
            <p>A simple 3-step process to transform your business.</p>
          </div>
          <div className="apply-steps">
            <article><span>01</span><h3>Apply</h3><p>Fill form to start your journey.</p></article>
            <article><span>02</span><h3>Strategy</h3><p>Personal mentorship &amp; roadmap planning.</p></article>
            <article><span>03</span><h3>Execute</h3><p>Implement strategies and scale your results.</p></article>
          </div>
          <p className="apply-timeline">Average time to see results: Most clients see significant improvements within 30-90 days of implementation.</p>
        </section>

        <section className="apply-final-cta">
          <div className="container">
            <span className="section-eyebrow">Limited availability</span>
            <h2>Ready to transform your business?</h2>
            <p>Join successful entrepreneurs who’ve already taken the leap. Your journey starts today.</p>
            <div className="hero-ctas">
              <a className="btn-primary" href={applyUrl} target="_blank" rel="noopener noreferrer">Apply Now <span aria-hidden="true">&rarr;</span></a>
              <a className="btn-secondary" href={applyUrl} target="_blank" rel="noopener noreferrer">Get 1-on-1 Mentorship</a>
            </div>
            <div className="apply-final-proof"><span>50+ Success Stories</span><span>Proven Results</span></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="apply-footer-top">
            <div>
              <h3>CullenConsults</h3>
              <p>Empowering entrepreneurs and business owners to achieve extraordinary growth through proven strategies and personalized mentorship.</p>
            </div>
            <nav aria-label="Footer links">
              <a href="/">Home</a>
              <a href={applyUrl} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} CullenConsults. All rights reserved.</span>
            <a href="#top">Back to top &uarr;</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  if (window.location.pathname.replace(/\/$/, '') === '/applyhere') {
    return <ApplyHerePage />
  }

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
            <h2>People just like you who followed the right <em>system</em></h2>
          </div>
        </section>
      </main>

      {/* RESULTS GALLERY (full-bleed horizontal scroll) */}
      <ResultsGallery items={RESULT_SHOTS} />

      <main className="container">
        <section style={{ paddingTop: 0 }}>
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

          {/* DISCLAIMER BLOCK */}
          <p className="results-disclaimer">
            <strong>*DISCLAIMER:</strong> Individual results vary based on effort, budget, product offer, and market conditions. These feedbacks showcase real client outcomes achieved using this exact system, but past performance does not guarantee identical results. Your success depends on execution and consistency.
          </p>
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
              <a href="https://cullenconsults.pages.dev/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit Cullen Consult &rarr;</a>
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
          <a href="/applyhere" className="btn-primary">Apply Here &rarr;</a>
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
            <span>&copy; {new Date().getFullYear()} Benedict Cullen. All rights reserved.</span>
            <a href="#top">Back to top &uarr;</a>
          </div>
        </div>
      </footer>
    </>
  )
}