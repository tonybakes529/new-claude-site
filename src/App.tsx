import { useState, useEffect, useRef } from 'react'
import { Check, X, ChevronRight } from 'lucide-react'

const brand = {
  bg: '#FAF8F2',
  text: '#1B1B1B',
  primary: '#1B4332',
  secondary: '#2D6A4F',
  muted: '#8B8578',
  border: '#E8E4DA',
  cream: '#FAF8F2',
  dark: '#0D1F17',
  cardDark: '#132A1E',
  red: '#DC3C3C',
}

const fontHeading = "'Literata', serif"
const fontBody = "'Instrument Serif', serif"

/* ──────────────────── NAV ──────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(250,248,242,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${brand.border}` : '1px solid transparent',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: fontHeading,
          fontWeight: 700,
          fontSize: '24px',
          color: brand.primary,
          textDecoration: 'none',
        }}
      >
        Bakes Media
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'System', href: '#system' },
            { label: 'Proof', href: '#proof' },
            { label: 'Process', href: '#process' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: fontBody,
                fontSize: '20px',
                color: brand.muted,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = brand.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = brand.muted)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          style={{
            fontFamily: fontBody,
            fontSize: '20px',
            color: brand.cream,
            background: brand.primary,
            padding: '10px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = brand.secondary
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = brand.primary
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  )
}

/* ──────────────────── HERO ──────────────────── */
function Hero() {
  const stats = [
    { value: '400M+', label: 'Views Built' },
    { value: '$50K', label: 'From One Funnel' },
    { value: '1.5M', label: 'Subscribers' },
    { value: '10+', label: 'Years Building' },
  ]

  return (
    <section
      style={{
        background: brand.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '100px 24px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src="/illustrations/hero.png"
        alt=""
        aria-hidden="true"
        className="hero-illustration"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '900px',
          width: '80%',
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: 'none',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <h1
        style={{
          fontFamily: fontHeading,
          fontWeight: 700,
          fontSize: 'clamp(42px, 5.5vw, 80px)',
          lineHeight: 1.1,
          color: brand.text,
          maxWidth: '1200px',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        I Build the Revenue Infrastructure Behind{' '}
        <span style={{ color: brand.primary }}>Your YouTube Channel.</span>
      </h1>
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          aspectRatio: '16/9',
          border: `2px solid ${brand.secondary}`,
          borderRadius: '16px',
          background: brand.cardDark,
          position: 'relative',
          boxShadow: '0 0 60px rgba(45,106,79,0.2)',
          overflow: 'hidden',
          margin: '0 auto',
          zIndex: 1,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1167378880?badge=0&autopause=0&player_id=0&app_id=58479"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="TONY VSL Revised"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          maxWidth: '800px',
          width: '100%',
          marginTop: '32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: brand.primary,
                lineHeight: 1.2,
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 'clamp(13px, 1.2vw, 16px)',
                color: brand.muted,
                marginTop: '4px',
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────── PROBLEM ──────────────────── */
function ProblemSection() {
  return (
    <section style={{ background: brand.dark, padding: '80px 24px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.15,
            color: brand.cream,
          }}
        >
          Your Content Isn't the Problem.{' '}
          <span style={{ color: brand.secondary }}>Your Infrastructure Is.</span>
        </h2>
        <div>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: '22px',
              color: 'rgba(250,248,242,0.7)',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}
          >
            Most creators post content and hope it generates revenue. But content without
            infrastructure is just noise — no funnels capturing leads, no offers converting
            viewers, no automated paths turning attention into income.
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: '22px',
              color: 'rgba(250,248,242,0.7)',
              lineHeight: 1.7,
            }}
          >
            The businesses winning on YouTube haven't just figured out content. They've built
            systems — where every video connects to a funnel, every funnel connects to an offer,
            and every offer connects to measurable revenue.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── VSL SHOWCASE ──────────────────── */
function VSLShowcase() {
  const videos = [
    {
      id: 'vsl-jt-junk',
      src: 'https://player.vimeo.com/video/1170310302?badge=0&autopause=0&player_id=0&app_id=58479',
      title: 'testimonial-video',
      name: 'Tanner & Jakie Hurst',
      company: 'JT Junk Solutions',
      quote: '\u201CWe can directly track $50,000 in revenue to Tony and the Bakes Media Team\u201D',
    },
    {
      id: 'vsl-laura',
      src: 'https://player.vimeo.com/video/1170310322?badge=0&autopause=0&player_id=0&app_id=58479',
      title: 'laura-testimonial-video',
      name: 'Laura Spaulding',
      company: 'Crime Scene Cleaning',
      quote: '\u201CHe got me 13,000,000 views on my first video\u201D',
    },
  ]

  return (
    <section style={{ background: brand.dark, padding: '40px 24px' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        flexWrap: 'wrap',
      }}>
        {videos.map((v) => (
          <div key={v.id} style={{ width: '100%', maxWidth: '280px', textAlign: 'center' }}>
            {/* Video container */}
            <div
              style={{
                width: '100%',
                aspectRatio: '9/16',
                background: brand.cardDark,
                border: `2px solid ${brand.secondary}`,
                borderRadius: '16px',
                boxShadow: '0 0 60px rgba(45,106,79,0.2)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <iframe
                src={v.src}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={v.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
            {/* Caption */}
            <div style={{ marginTop: '16px' }}>
              {v.name && (
                <p style={{
                  fontFamily: fontHeading,
                  fontWeight: 600,
                  fontSize: '15px',
                  color: brand.cream,
                  marginBottom: '4px',
                }}>
                  {v.name}{v.company && ` \u2014 ${v.company}`}
                </p>
              )}
              <p style={{
                fontFamily: fontBody,
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'rgba(250,248,242,0.6)',
                lineHeight: 1.5,
              }}>
                {v.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────── CASE STUDIES ──────────────────── */
function CaseStudies() {
  const cases = [
    {
      header: 'Full System → $50K+ Revenue',
      name: 'JT Junk Solutions',
      link: '#case-jt-junk',
      stats: [
        '$50K+ Coaching Sales from YouTube Funnel',
        '90 Qualified Sales Calls via Automated Pipeline',
        '$500K in First-Year Affiliate SaaS Revenue',
        '242,358 Qualified Clicks Through CTA System',
        '43 Paid Signups via Conversion Path',
        'YouTube Monetized as Bonus Revenue Stream',
      ],
    },
    {
      header: 'Content Engine → $200K Revenue',
      name: 'Crime Scene Cleaning',
      link: '#case-crime-scene',
      stats: [
        '$200K in Added Revenue from System',
        '140,000,000 Total Views',
        '1,400,000 Subscribers Built',
        'Content → Authority → Inbound Demand Pipeline',
      ],
    },
    {
      header: 'SEO Infrastructure → $8M Sales',
      name: 'John Deere',
      link: '#case-john-deere',
      stats: [
        '$8M in Sales via SEO Content System',
        '2.3M+ Views from Search-Based Strategy',
        '46% Traffic from External (Google) Sources',
        'Ranked for High-Intent Buyer Queries',
        'Shorts Indexed in Google Video Results',
      ],
    },
  ]

  return (
    <section id="proof" style={{ background: brand.dark, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p
            style={{
              fontFamily: fontHeading,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: brand.muted,
              marginBottom: '16px',
            }}
          >
            PROOF, NOT PROMISES
          </p>
          <h2
            style={{
              fontFamily: fontHeading,
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: brand.cream,
              marginBottom: '16px',
            }}
          >
            Real Systems. Real Revenue.
          </h2>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: '22px',
              color: brand.muted,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            These aren't just content wins — they're full infrastructure builds where every piece
            connects to revenue.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {cases.map((c) => (
            <div
              key={c.name}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid rgba(45,106,79,0.3)`,
                background: brand.cardDark,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.secondary
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,106,79,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45,106,79,0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  background: `linear-gradient(135deg, ${brand.dark}, ${brand.cardDark})`,
                  padding: '40px 24px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 700,
                    fontSize: '22px',
                    color: brand.cream,
                  }}
                >
                  {c.header}
                </p>
              </div>
              <div style={{ padding: '24px' }}>
                <p
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 600,
                    fontSize: '18px',
                    color: brand.cream,
                    marginBottom: '16px',
                  }}
                >
                  {c.name}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                  {c.stats.map((stat) => (
                    <li
                      key={stat}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                        fontFamily: fontBody,
                        fontSize: '18px',
                        color: 'rgba(250,248,242,0.8)',
                        lineHeight: 1.5,
                      }}
                    >
                      <Check
                        size={16}
                        color={brand.primary}
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      {stat}
                    </li>
                  ))}
                </ul>
                <a
                  href={c.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: fontHeading,
                    fontWeight: 600,
                    fontSize: '15px',
                    color: brand.cream,
                    background: brand.primary,
                    padding: '10px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = brand.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = brand.primary)}
                >
                  Read the Full Case Study <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── COMPARISON CARDS ──────────────────── */
function ComparisonCards() {
  return (
    <section style={{ background: brand.bg, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Set 1 */}
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            color: brand.text,
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          What You <span style={{ color: brand.red }}>Won't</span> Be Doing With Me:
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '24px' }}>
              The Common Approach
            </h3>
            {[
              'Hire an editor and hope content alone generates leads',
              'Post videos with no funnel, no offer, and no conversion path',
              'Outsource to cheap freelancers and call it a strategy',
              'Try to piece together strategy, editing, SEO, and sales yourself',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.red, marginBottom: '24px' }}>
              Why It Fails
            </h3>
            {[
              "Content without a system is just noise — views don't pay bills, conversions do",
              'Without a funnel, every viewer is a dead end with no path to buy',
              "Cheap content without strategy produces volume, not value. Outsourcing doesn't replace the ability to script, position, and convert.",
              'Doing it all yourself means nothing gets done at the level it needs to perform',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Set 2 */}
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            color: brand.text,
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          What I Build <span style={{ color: brand.secondary }}>Instead:</span>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '24px' }}>
              The Infrastructure
            </h3>
            {[
              'An owned media channel built on strategy, creative skill, and data',
              'Funnels that capture, nurture, and convert — automatically',
              'Offers engineered to close, not just attract',
              'Full execution — scripting, production, editing, packaging, SEO, distribution',
              'Data-driven decisions at every step — not guesswork',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <Check size={16} color={brand.secondary} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '24px' }}>
              What That Means For You
            </h3>
            {[
              'A revenue system — not a content calendar',
              'Every video tied to a conversion event',
              'Prospects who arrive pre-sold through your content',
              'End-to-end management — strategy to execution, fully handled',
              'Outreach and podcast placements that extend your reach beyond YouTube',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <Check size={16} color={brand.secondary} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── 7-STEP PROCESS ──────────────────── */
function ProcessSection() {
  const steps = [
    { num: 1, title: 'Funnel Architecture', desc: 'We audit your offer, map your sales process, and design the conversion path that turns viewers into buyers.', img: '/illustrations/step1-funnel.png' },
    { num: 2, title: 'Research & Ideation', desc: 'We dig into search data, competitor gaps, and audience behavior to find the topics that attract buyers — not just viewers.', img: '/illustrations/step2-research.png' },
    { num: 3, title: 'Scripting & Structure', desc: 'Every script is built by writers who understand hooks, persuasion, and pacing — structured to hold attention and drive action.', img: '/illustrations/step3-scripting.png' },
    { num: 4, title: 'Production & Editing', desc: 'Skilled editors build pacing, trust, and retention into every cut — the things that keep people watching and buying.', img: '/illustrations/step4-production.png' },
    { num: 5, title: 'Packaging & CTR', desc: 'Thumbnails and titles designed by creatives who understand what earns the click — then tested and refined based on real performance data.', img: '/illustrations/step5-thumbnails.png' },
    { num: 6, title: 'SEO & Distribution', desc: 'Content structured to rank in both YouTube and Google search. Metadata, timing, and distribution dialed in so every video compounds over time.', img: '/illustrations/step6-seo.png' },
  ]

  return (
    <section id="process" style={{ background: brand.bg, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: fontHeading, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: brand.muted, marginBottom: '16px' }}>
            THE FULL STACK
          </p>
          <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: brand.text }}>
            One System. End to End. Built to Convert.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ background: '#fff', border: `1px solid ${brand.border}`, borderRadius: '16px', padding: '32px' }}>
              <img
                src={step.img}
                alt=""
                aria-hidden="true"
                className="step-illustration"
                style={{
                  display: 'block',
                  margin: '0 auto 12px',
                  height: '160px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: brand.primary,
                  color: brand.cream,
                  fontFamily: fontHeading,
                  fontWeight: 700,
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.muted, lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Step 7 */}
        <div style={{ background: '#fff', border: `2px solid ${brand.primary}`, borderRadius: '16px', padding: '40px' }}>
          <img
            src="/illustrations/step7-tracking.png"
            alt=""
            aria-hidden="true"
            className="step-illustration"
            style={{
              display: 'block',
              margin: '0 auto 24px',
              height: '280px',
              maxWidth: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: brand.primary,
                color: brand.cream,
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              7
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '26px', color: brand.text, marginBottom: '12px' }}>
                Tracking, Attribution & Revenue Intelligence
              </h3>
              <p style={{ fontFamily: fontBody, fontSize: '20px', color: brand.muted, lineHeight: 1.7 }}>
                We build a performance database that tracks CTR, retention, traffic sources,
                funnel drop-off, and sales attribution — so every decision is backed by data,
                not guesswork. AI surfaces the patterns. You see exactly what's working and
                what's leaking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── REVENUE ENGINE WHEEL ──────────────────── */
function RevenueEngine() {
  const [hovered, setHovered] = useState<number | null>(null)

  const steps = [
    { number: '01', title: 'Funnel Architecture', us: true },
    { number: '02', title: 'Research & Ideation', us: true },
    { number: '03', title: 'Script & Structure', us: true },
    { number: '04', title: 'You Record.', you: true },
    { number: '05', title: 'Edit & Produce', us: true },
    { number: '06', title: 'Packaging & CTR', us: true },
    { number: '07', title: 'SEO & Distribution', us: true },
    { number: '08', title: 'Automated Funnels', us: true },
    { number: '09', title: 'Tracking & Attribution', us: true },
  ]

  return (
    <section id="system" style={{ background: brand.dark, padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,106,79,0.4) 0%, transparent 65%)',
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: fontHeading,
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: brand.secondary,
            border: `1px solid ${brand.secondary}`,
            borderRadius: '999px',
            padding: '6px 20px',
            marginBottom: '24px',
          }}>
            The Full System
          </span>

          <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: brand.cream, marginBottom: '16px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Content Is the Entry Point.{' '}
            <span style={{ color: brand.secondary }}>The System Is What Converts.</span>
          </h2>

          <p style={{ fontFamily: fontBody, fontSize: '22px', color: 'rgba(250,248,242,0.7)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
            We handle 8 of the 9 steps. You handle one — recording.
            Everything else is engineered, automated, and optimized by us.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: brand.secondary }} />
            <span style={{ fontFamily: fontHeading, fontSize: '11px', fontWeight: 600, color: 'rgba(250,248,242,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Bakes Media
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: brand.cream }} />
            <span style={{ fontFamily: fontHeading, fontSize: '11px', fontWeight: 600, color: 'rgba(250,248,242,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              You
            </span>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {steps.map((step, i) => {
            const isYou = step.you === true
            const isHovered = hovered === i
            return (
              <div
                key={step.number}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: isYou ? '32px 40px' : '22px 40px',
                  background: isYou
                    ? 'rgba(250,248,242,0.09)'
                    : isHovered
                      ? 'rgba(45,106,79,0.22)'
                      : 'rgba(255,255,255,0.03)',
                  border: isYou
                    ? '1px solid rgba(250,248,242,0.18)'
                    : `1px solid ${isHovered ? 'rgba(45,106,79,0.4)' : 'rgba(255,255,255,0.05)'}`,
                  borderRadius: '10px',
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent bar on left */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                  background: isYou ? brand.cream : isHovered ? brand.secondary : 'rgba(45,106,79,0.2)',
                  borderRadius: '10px 0 0 10px',
                  transition: 'background 0.2s ease',
                }} />

                {/* Number */}
                <span style={{
                  fontFamily: fontHeading, fontSize: '11px', fontWeight: 700,
                  color: isYou ? 'rgba(250,248,242,0.3)' : 'rgba(45,106,79,0.5)',
                  letterSpacing: '0.1em', minWidth: '28px', paddingLeft: '12px',
                }}>
                  {step.number}
                </span>

                {/* Title */}
                <span style={{
                  fontFamily: fontHeading,
                  fontSize: isYou ? '32px' : '22px',
                  fontWeight: 700,
                  color: isYou ? brand.cream : 'rgba(250,248,242,0.9)',
                  letterSpacing: isYou ? '-0.02em' : '-0.01em',
                  flex: 1,
                  transition: 'color 0.2s',
                }}>
                  {step.title}
                </span>

                {/* Owner badge */}
                {isYou ? (
                  <span style={{
                    background: brand.cream, color: brand.dark,
                    fontFamily: fontHeading, fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '7px 20px', borderRadius: '999px', whiteSpace: 'nowrap',
                  }}>
                    ← Your Only Job
                  </span>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '2px',
                      background: brand.secondary, opacity: isHovered ? 1 : 0.4,
                      transition: 'opacity 0.2s',
                    }} />
                    <span style={{
                      fontFamily: fontHeading, fontSize: '11px', fontWeight: 600,
                      color: isHovered ? brand.secondary : 'rgba(45,106,79,0.5)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'color 0.2s',
                    }}>
                      Us
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div style={{
          marginTop: '48px',
          background: brand.cardDark,
          border: '1px solid rgba(45,106,79,0.3)',
          borderRadius: '12px',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: fontHeading, fontSize: '44px', fontWeight: 700, color: brand.secondary, lineHeight: 1, marginBottom: '4px' }}>
                8
              </div>
              <div style={{ fontFamily: fontHeading, fontSize: '11px', fontWeight: 600, color: 'rgba(250,248,242,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Steps We Own
              </div>
            </div>
            <div>
              <div style={{ fontFamily: fontHeading, fontSize: '44px', fontWeight: 700, color: brand.cream, lineHeight: 1, marginBottom: '4px' }}>
                1
              </div>
              <div style={{ fontFamily: fontHeading, fontSize: '11px', fontWeight: 600, color: 'rgba(250,248,242,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Step You Own
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{
                fontFamily: fontBody, fontStyle: 'italic',
                fontSize: '18px', color: 'rgba(250,248,242,0.5)', lineHeight: 1.5, maxWidth: '280px',
              }}>
                "You record. We do the rest."
              </p>
            </div>
          </div>

          <a
            href="#cta"
            style={{
              display: 'inline-block',
              fontFamily: fontBody,
              fontSize: '20px',
              color: brand.cream,
              background: brand.primary,
              padding: '10px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = brand.secondary
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = brand.primary
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Book a Strategy Call →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── FAQ + COMPARISON ──────────────────── */
function FinalComparison() {
  const faqs: { question: string; hasAudio?: boolean; videoUrl?: string; buttonText?: string; buttonHref?: string }[] = [
    {
      question: '\u201CI\u2019ve been burned by a content agency before.\u201D Why won\u2019t you do the same thing to me?',
      hasAudio: true,
      videoUrl: 'https://player.vimeo.com/video/1170340336?h=be83632c9c&badge=0&autopause=0&player_id=0&app_id=58479',
    },
    {
      question: '\u201CViews don\u2019t equal money \u2014 how does this actually generate revenue?\u201D',
      videoUrl: 'https://player.vimeo.com/video/1170340184?h=dc4a4296da&badge=0&autopause=0&player_id=0&app_id=58479',
      buttonText: 'See How It Works',
      buttonHref: 'https://bakesmedia.vercel.app/how-it-works.html',
    },
    {
      question: '\u201CHow long until I actually see results?\u201D',
      videoUrl: 'https://player.vimeo.com/video/1170340218?h=c04da688b6&badge=0&autopause=0&player_id=0&app_id=58479',
      buttonText: 'See Our Timeline',
      buttonHref: 'https://bakesmedia.vercel.app/90-day-timeline.html',
    },
    {
      question: '\u201CHow much does it cost?\u201D',
      videoUrl: 'https://player.vimeo.com/video/1170340245?h=8fc867e63f&badge=0&autopause=0&player_id=0&app_id=58479',
      buttonText: 'View Pricing',
      buttonHref: 'https://bakesmedia.vercel.app/consulting.html',
    },
    {
      question: '\u201CCan YouTube really work for my type of business?\u201D',
      videoUrl: 'https://player.vimeo.com/video/1170340378?badge=0&autopause=0&player_id=0&app_id=58479',
      buttonText: 'See Case Studies',
      buttonHref: '#proof',
    },
    {
      question: '\u201CI\u2019ve been posting content and nothing happens.\u201D',
      videoUrl: 'https://player.vimeo.com/video/1170340299?h=80fcfe6867&badge=0&autopause=0&player_id=0&app_id=58479',
      buttonText: 'Learn Our Method',
      buttonHref: 'https://bakesmedia.vercel.app/how-it-works.html',
    },
  ]

  return (
    <section style={{ background: brand.bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: brand.text, marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ 3×2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '64px',
        }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '20px',
                border: `1px solid ${brand.border}`,
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.secondary
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,106,79,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = brand.border
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Question */}
              <p style={{
                fontFamily: fontHeading,
                fontWeight: 600,
                fontSize: '15px',
                color: brand.text,
                lineHeight: 1.4,
                minHeight: '63px',
              }}>
                {faq.question}
              </p>

              {/* Video — fixed 1:1 aspect ratio, edge-to-edge */}
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                background: brand.dark,
              }}>
                {faq.videoUrl ? (
                  <iframe
                    src={faq.videoUrl}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`faq-video-${i}`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(250,248,242,0.1)',
                    border: '2px solid rgba(250,248,242,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderLeft: '14px solid rgba(250,248,242,0.5)',
                      marginLeft: '3px',
                    }} />
                  </div>
                )}
              </div>

              {/* Bottom section — audio player OR CTA button */}
              {faq.hasAudio ? (
                <audio
                  controls
                  preload="metadata"
                  src="https://hct0gdycqvi2owm9.public.blob.vercel-storage.com/%E2%80%8EAudio%20Message%20from%20Anton%20Wisbiski.m4a"
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '8px',
                  }}
                />
              ) : faq.buttonText ? (
                <a
                  href={faq.buttonHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    fontFamily: fontBody,
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#fff',
                    background: brand.dark,
                    padding: '12px 16px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = brand.primary
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = brand.dark
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {faq.buttonText} →
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* Comparison cards (existing) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '24px' }}>
              Content Without Infrastructure
            </h3>
            {[
              'Views that go nowhere \u2014 disconnected from any revenue path',
              'No path for a viewer to buy, book, or subscribe',
              'Manual follow-up that drains your time and loses leads',
              'Re-explaining your offer on every single call',
              'Starting over every month \u2014 no compounding, no momentum',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '24px' }}>
              Content With a System Behind It
            </h3>
            {[
              'Funnels that capture and convert automatically',
              'Prospects who arrive pre-sold through your content',
              'Automated follow-up sequences that nurture without you',
              'Fit-focused sales calls with buyers, not browsers',
              'A compounding system that builds momentum every week',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <Check size={16} color={brand.secondary} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.text, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── FINAL CTA ──────────────────── */
function FinalCTA() {
  const bookerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bookerRef.current) return
    // Avoid loading the script twice
    if (bookerRef.current.querySelector('script')) return
    const script = document.createElement('script')
    script.src = 'https://beamcal.com/meet/embed/tony_discovery_call/booker_tony_discovery_call'
    script.async = true
    bookerRef.current.appendChild(script)
  }, [])

  return (
    <section
      id="cta"
      style={{
        background: `linear-gradient(180deg, ${brand.bg} 0%, rgba(27,67,50,0.05) 100%)`,
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: brand.text, marginBottom: '20px' }}>
          Ready to Install the System?
        </h2>
        <p style={{ fontFamily: fontBody, fontSize: '22px', color: brand.muted, lineHeight: 1.7, marginBottom: '40px' }}>
          Book a strategy call. We'll map your offer, your audience, and the infrastructure
          that connects content to revenue — so every video works harder than the last.
        </p>
        <div ref={bookerRef} style={{ width: '100%', minHeight: '400px' }} />
      </div>
    </section>
  )
}

/* ──────────────────── FOOTER ──────────────────── */
function SiteFooter() {
  return (
    <footer
      style={{
        background: brand.bg,
        borderTop: `1px solid ${brand.border}`,
        padding: '32px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <span style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '20px', color: brand.primary }}>
        Bakes Media
      </span>
      <span style={{ fontFamily: fontBody, fontSize: '18px', color: brand.muted }}>
        &copy; 2026 Tony Bakes &middot; Built from scratch
      </span>
    </footer>
  )
}

/* ──────────────────── APP ──────────────────── */
export default function App() {
  return (
    <div style={{ background: brand.bg, color: brand.text }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${brand.bg}; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .step-illustration { height: 120px !important; }
          .section-illustration { height: 140px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <ProblemSection />
      <VSLShowcase />
      <CaseStudies />
      <ComparisonCards />
      <ProcessSection />
      <RevenueEngine />
      <FinalComparison />
      <FinalCTA />
      <SiteFooter />
    </div>
  )
}
