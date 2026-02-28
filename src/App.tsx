import { useState, useEffect } from 'react'
import { Play, Check, X, ChevronRight } from 'lucide-react'

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
          fontSize: '20px',
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
                fontSize: '16px',
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
            fontSize: '15px',
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
        padding: '120px 24px 60px',
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '900px',
          width: '80%',
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: 'none',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <p
        style={{
          fontFamily: fontHeading,
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: brand.muted,
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        YOUTUBE REVENUE INFRASTRUCTURE
      </p>
      <h1
        style={{
          fontFamily: fontHeading,
          fontWeight: 700,
          fontSize: 'clamp(36px, 5vw, 72px)',
          lineHeight: 1.1,
          color: brand.text,
          maxWidth: '900px',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        I Build the Revenue Infrastructure Behind{' '}
        <span style={{ color: brand.primary }}>Your YouTube Channel.</span>
      </h1>
      <p
        style={{
          fontFamily: fontBody,
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: brand.muted,
          maxWidth: '700px',
          lineHeight: 1.6,
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Content is just the front end. I build the full system — funnels, offers, automated
        conversion paths, and revenue tracking — powered by a creative team that knows how to
        implement AI where it actually moves the needle.
      </p>
      <a
        href="#cta"
        style={{
          fontFamily: fontBody,
          fontSize: '17px',
          color: brand.cream,
          background: brand.primary,
          padding: '14px 36px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'all 0.2s',
          display: 'inline-block',
          position: 'relative',
          zIndex: 1,
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '32px',
          width: '100%',
          maxWidth: '800px',
          marginTop: '64px',
          paddingTop: '40px',
          borderTop: `1px solid ${brand.border}`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: brand.primary,
                marginBottom: '4px',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: fontHeading,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: brand.muted,
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

/* ──────────────────── VIDEO ──────────────────── */
function VideoSection() {
  return (
    <section
      style={{
        background: brand.dark,
        padding: '80px 24px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '16/9',
          border: `2px solid ${brand.secondary}`,
          borderRadius: '16px',
          background: brand.cardDark,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(45,106,79,0.2)',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
        >
          <Play size={32} color={brand.cream} fill={brand.cream} />
        </div>
        <p
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '24px',
            fontFamily: fontBody,
            fontSize: '14px',
            color: 'rgba(250,248,242,0.7)',
          }}
        >
          Watch: How systems turn content into revenue
        </p>
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
            fontSize: 'clamp(28px, 3.5vw, 44px)',
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
              fontSize: '18px',
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
              fontSize: '18px',
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

/* ──────────────────── THUMBNAIL PORTFOLIO ──────────────────── */
function ThumbnailPortfolio() {
  const thumbnails = [
    'Junk Removal Playbook',
    'John Deere 335P',
    'Tractor Breakdown',
    'Lawn Tractor vs Zero-Turn',
    'Airbnb $500/Night',
    'Recession Proof Cash Flow',
    '$500,000 Growth',
    'SDE vs EBITDA',
    'Zero Bookings Fix',
  ]

  const gradients = [
    'linear-gradient(135deg, rgba(27,67,50,0.6), rgba(13,31,23,0.9))',
    'linear-gradient(225deg, rgba(45,106,79,0.5), rgba(13,31,23,0.9))',
    'linear-gradient(45deg, rgba(27,67,50,0.4), rgba(19,42,30,0.9))',
    'linear-gradient(180deg, rgba(45,106,79,0.5), rgba(13,31,23,0.9))',
    'linear-gradient(315deg, rgba(27,67,50,0.6), rgba(13,31,23,0.9))',
    'linear-gradient(90deg, rgba(45,106,79,0.4), rgba(19,42,30,0.9))',
    'linear-gradient(160deg, rgba(27,67,50,0.5), rgba(13,31,23,0.9))',
    'linear-gradient(200deg, rgba(45,106,79,0.6), rgba(13,31,23,0.9))',
    'linear-gradient(270deg, rgba(27,67,50,0.4), rgba(19,42,30,0.9))',
  ]

  return (
    <section style={{ background: brand.dark, padding: '40px 24px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: fontHeading,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: brand.muted,
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          SYSTEMS I'VE BUILT
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {thumbnails.map((title, i) => (
            <div
              key={title}
              style={{
                aspectRatio: '16/9',
                background: gradients[i],
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: fontHeading,
                  fontWeight: 700,
                  fontSize: '16px',
                  color: brand.cream,
                  textAlign: 'center',
                }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: fontBody,
            fontSize: '14px',
            color: brand.muted,
            textAlign: 'center',
            marginTop: '32px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Every thumbnail is part of a larger system — scripted, produced, and connected to a
          conversion funnel
        </p>
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
    <section id="proof" style={{ background: brand.bg, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p
            style={{
              fontFamily: fontHeading,
              fontSize: '10px',
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
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: brand.text,
              marginBottom: '16px',
            }}
          >
            Real Systems. Real Revenue.
          </h2>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: '18px',
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
                border: `1px solid ${brand.border}`,
                background: '#fff',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.primary
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,67,50,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = brand.border
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
                    fontSize: '18px',
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
                    fontSize: '14px',
                    color: brand.text,
                    marginBottom: '16px',
                  }}
                >
                  {c.name}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.stats.map((stat) => (
                    <li
                      key={stat}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                        fontFamily: fontBody,
                        fontSize: '14px',
                        color: brand.text,
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── BUSINESS OWNER + CREATIVE/AI ──────────────────── */
function BusinessOwnerSection() {
  const creativeLead = [
    { title: 'Strategy & Positioning', desc: 'Shaped by a decade of experience, not a prompt' },
    { title: 'Scripting & Storytelling', desc: 'Crafted by writers who understand persuasion' },
    { title: 'Production & Editing', desc: 'Built by editors who know how to hold attention' },
    { title: 'Thumbnail Design', desc: 'Designed by creatives who understand what stops the scroll' },
  ]

  const aiAccelerates = [
    { title: 'Research & Topic Intelligence', desc: 'AI surfaces high-intent topics so the creative team builds on data' },
    { title: 'SEO & Metadata Optimization', desc: 'Optimized through AI models trained on what ranks' },
    { title: 'Automated Funnel Sequences', desc: 'Email flows and follow-up that nurture leads without manual effort' },
    { title: 'Performance Intelligence', desc: 'AI identifies which content drives revenue and where funnels leak' },
  ]

  return (
    <section style={{ background: brand.dark, padding: '100px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            lineHeight: 1.15,
            color: brand.cream,
            marginBottom: '24px',
          }}
        >
          You Don't Need a YouTube Strategy.{' '}
          <span style={{ color: brand.secondary }}>You Need Revenue Infrastructure.</span>
        </h2>
        <p
          style={{
            fontFamily: fontBody,
            fontSize: '18px',
            color: 'rgba(250,248,242,0.7)',
            maxWidth: '700px',
            margin: '0 auto 64px',
            lineHeight: 1.7,
          }}
        >
          YouTube strategies are for creators chasing views. Businesses need systems — where
          content feeds funnels, funnels feed offers, and offers feed measurable, compounding
          revenue.
        </p>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          border: `2px solid ${brand.secondary}`,
          borderRadius: '20px',
          background: `linear-gradient(180deg, ${brand.cardDark}, ${brand.dark})`,
          padding: 'clamp(32px, 4vw, 64px)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: fontHeading,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: brand.muted,
              marginBottom: '16px',
            }}
          >
            CREATIVE SKILL + AI IMPLEMENTATION
          </p>
          <h3
            style={{
              fontFamily: fontHeading,
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: brand.cream,
              marginBottom: '16px',
            }}
          >
            A Creative Team That Knows How to Implement AI.
          </h3>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: '16px',
              color: 'rgba(250,248,242,0.7)',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Anyone can subscribe to AI tools. The difference is knowing where they belong in the
            process and where they don't. We lead with creative strategy and production skill —
            then implement AI as precision tools to accelerate research, optimize distribution,
            and automate the conversion layers that turn content into revenue.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
          }}
        >
          <div>
            <img
              src="/illustrations/creative-human.png"
              alt=""
              aria-hidden="true"
              className="section-illustration"
              style={{
                display: 'block',
                margin: '0 auto 20px',
                height: '180px',
                objectFit: 'contain',
                opacity: 0.2,
              }}
            />
            <p
              style={{
                fontFamily: fontHeading,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: brand.secondary,
                marginBottom: '24px',
              }}
            >
              WHERE CREATIVITY LEADS
            </p>
            {creativeLead.map((item) => (
              <div key={item.title} style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: fontHeading, fontWeight: 600, fontSize: '15px', color: brand.cream, marginBottom: '4px' }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.6)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/illustrations/ai-machine.png"
              alt=""
              aria-hidden="true"
              className="section-illustration"
              style={{
                display: 'block',
                margin: '0 auto 20px',
                height: '180px',
                objectFit: 'contain',
                opacity: 0.2,
              }}
            />
            <p
              style={{
                fontFamily: fontHeading,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: brand.secondary,
                marginBottom: '24px',
              }}
            >
              WHERE AI ACCELERATES
            </p>
            {aiAccelerates.map((item) => (
              <div key={item.title} style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: fontHeading, fontWeight: 600, fontSize: '15px', color: brand.cream, marginBottom: '4px' }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.6)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: fontBody,
            fontStyle: 'italic',
            fontSize: '16px',
            color: 'rgba(250,248,242,0.7)',
            textAlign: 'center',
            marginTop: '48px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          The creative work is what makes your brand worth watching. AI is what makes the system
          behind it scale.
        </p>
      </div>
    </section>
  )
}

/* ──────────────────── COMPARISON CARDS ──────────────────── */
function ComparisonCards() {
  return (
    <section style={{ background: brand.dark, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Set 1 */}
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: brand.cream,
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
          <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.cream, marginBottom: '24px' }}>
              The Common Approach
            </h3>
            {[
              'Hire an editor and hope content alone generates leads',
              'Post videos with no funnel, no offer, and no conversion path',
              'Let AI generate everything and call it a strategy',
              'Try to piece together strategy, editing, SEO, and sales yourself',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.red, marginBottom: '24px' }}>
              Why It Fails
            </h3>
            {[
              "Content without a system is just noise — views don't pay bills, conversions do",
              'Without a funnel, every viewer is a dead end with no path to buy',
              "AI without creative skill and strategy produces volume, not value. Tools don't replace the ability to script, position, and convert.",
              'Doing it all yourself means nothing gets done at the level it needs to perform',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Set 2 */}
        <h2
          style={{
            fontFamily: fontHeading,
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: brand.cream,
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
          <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.cream, marginBottom: '24px' }}>
              The Infrastructure
            </h3>
            {[
              'An owned media channel built on strategy, creative skill, and data',
              'Funnels that capture, nurture, and convert — automatically',
              'Offers engineered to close, not just attract',
              'Full execution — scripting, production, editing, packaging, SEO, distribution',
              'AI implemented where it accelerates — not where it replaces skill',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <Check size={16} color={brand.secondary} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
            <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.cream, marginBottom: '24px' }}>
              What That Means For You
            </h3>
            {[
              'A revenue system — not a content calendar',
              'Every video tied to a conversion event',
              'Prospects who arrive pre-sold through your content',
              "End-to-end management with AI in the toolkit, not the driver's seat",
              'Outreach and podcast placements that extend your reach beyond YouTube',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <Check size={16} color={brand.secondary} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
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
    { num: 2, title: 'Research & Ideation', desc: 'AI surfaces high-intent topics and competitor gaps. The creative team turns raw data into buyer-attracting angles.', img: '/illustrations/step2-research.png' },
    { num: 3, title: 'Scripting & Structure', desc: 'AI informs the data layer — but the storytelling, hooks, and persuasion come from writers with real experience.', img: '/illustrations/step3-scripting.png' },
    { num: 4, title: 'Production & Editing', desc: 'No AI shortcuts here. Skilled editors build pacing, trust, and retention — the things that keep people watching and buying.', img: '/illustrations/step4-production.png' },
    { num: 5, title: 'Packaging & CTR', desc: 'Creatives design the thumbnails and titles. AI helps test variations and optimize click-through rates at scale.', img: '/illustrations/step5-thumbnails.png' },
    { num: 6, title: 'SEO & Distribution', desc: 'AI optimizes metadata and distribution timing. Content is structured to rank in YouTube and Google search, compounding over time.', img: '/illustrations/step6-seo.png' },
  ]

  return (
    <section id="process" style={{ background: brand.bg, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: fontHeading, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: brand.muted, marginBottom: '16px' }}>
            THE FULL STACK
          </p>
          <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', color: brand.text }}>
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
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.text, marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: fontBody, fontSize: '14px', color: brand.muted, lineHeight: 1.6 }}>
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
                fontSize: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              7
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '22px', color: brand.text, marginBottom: '12px' }}>
                Tracking, Attribution & Revenue Intelligence
              </h3>
              <p style={{ fontFamily: fontBody, fontSize: '15px', color: brand.muted, lineHeight: 1.7 }}>
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
  const nodes = [
    'Funnel Architecture',
    'Research & Ideation',
    'Script & Structure',
    'You Record',
    'Edit & Produce',
    'Packaging & CTR',
    'SEO & Distribution',
    'Automated Funnels',
    'Tracking & Attribution',
  ]

  return (
    <section id="system" style={{ background: brand.dark, padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', color: brand.cream, marginBottom: '16px' }}>
          Content Is the Entry Point.{' '}
          <span style={{ color: brand.secondary }}>The System Is What Converts.</span>
        </h2>
        <p style={{ fontFamily: fontBody, fontSize: '18px', color: 'rgba(250,248,242,0.7)', maxWidth: '650px', margin: '0 auto 64px', lineHeight: 1.7 }}>
          Creative skill builds trust. Automation builds infrastructure. Together, they build revenue.
        </p>

        <div
          className="engine-wheel"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '1',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0',
              borderRadius: '50%',
              border: `2px solid ${brand.secondary}`,
              boxShadow: '0 0 40px rgba(45,106,79,0.15), inset 0 0 40px rgba(45,106,79,0.05)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: brand.primary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              zIndex: 2,
            }}
          >
            <p style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: brand.cream, textAlign: 'center', lineHeight: 1.3, marginBottom: '4px' }}>
              REVENUE INFRASTRUCTURE ENGINE
            </p>
            <p style={{ fontFamily: fontBody, fontSize: '9px', color: 'rgba(250,248,242,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              CREATIVE + AI + SYSTEMS
            </p>
          </div>
          {nodes.map((node, i) => {
            const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2
            const radius = 42
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)
            return (
              <div
                key={node}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: brand.cardDark,
                  border: `1px solid ${brand.secondary}`,
                  borderRadius: '10px',
                  padding: '8px 14px',
                  zIndex: 3,
                  whiteSpace: 'nowrap',
                }}
              >
                <p style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '11px', color: brand.cream }}>
                  {node}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── FINAL COMPARISON ──────────────────── */
function FinalComparison() {
  return (
    <section style={{ background: brand.dark, padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(220,60,60,0.2)' }}>
          <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.cream, marginBottom: '24px' }}>
            Content Without Infrastructure
          </h3>
          {[
            'Views that go nowhere — disconnected from any revenue path',
            'No path for a viewer to buy, book, or subscribe',
            'Manual follow-up that drains your time and loses leads',
            'Re-explaining your offer on every single call',
            'Starting over every month — no compounding, no momentum',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
              <X size={16} color={brand.red} style={{ flexShrink: 0, marginTop: '3px' }} />
              <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
        <div style={{ background: brand.cardDark, borderRadius: '16px', padding: '32px', border: '1px solid rgba(45,106,79,0.3)' }}>
          <h3 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '18px', color: brand.cream, marginBottom: '24px' }}>
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
              <p style={{ fontFamily: fontBody, fontSize: '14px', color: 'rgba(250,248,242,0.7)', lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── FINAL CTA ──────────────────── */
function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        background: `linear-gradient(180deg, ${brand.bg} 0%, rgba(27,67,50,0.05) 100%)`,
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', color: brand.text, marginBottom: '20px' }}>
          Ready to Install the System?
        </h2>
        <p style={{ fontFamily: fontBody, fontSize: '18px', color: brand.muted, lineHeight: 1.7, marginBottom: '40px' }}>
          Book a strategy call. We'll map your offer, your audience, and the infrastructure
          that connects content to revenue — so every video works harder than the last.
        </p>
        <a
          href="#cta"
          style={{
            fontFamily: fontBody,
            fontSize: '17px',
            color: brand.cream,
            background: brand.primary,
            padding: '16px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
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
          Book a Call <ChevronRight size={18} />
        </a>
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
      <span style={{ fontFamily: fontHeading, fontWeight: 700, fontSize: '16px', color: brand.primary }}>
        Bakes Media
      </span>
      <span style={{ fontFamily: fontBody, fontSize: '14px', color: brand.muted }}>
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
          .engine-wheel { display: none !important; }
          .step-illustration { height: 120px !important; }
          .section-illustration { height: 140px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <VideoSection />
      <ProblemSection />
      <ThumbnailPortfolio />
      <CaseStudies />
      <BusinessOwnerSection />
      <ComparisonCards />
      <ProcessSection />
      <RevenueEngine />
      <FinalComparison />
      <FinalCTA />
      <SiteFooter />
    </div>
  )
}
