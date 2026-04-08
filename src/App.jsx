import { useState } from "react";

const brand = {
  fonts: {
    heading: { name: "Literata", css: "'Literata', serif", import: "Literata:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400" },
    body: { name: "Instrument Serif", css: "'Instrument Serif', serif", import: "Instrument+Serif:ital@0;1" },
  },
  colors: {
    bg: "#FAF8F2",
    text: "#1B1B1B",
    accent: "#1B4332",
    accentMid: "#2D6A4F",
    muted: "#8B8578",
    border: "#E8E4DA",
  },
};

const fontUrl = `https://fonts.googleapis.com/css2?family=${brand.fonts.heading.import}&family=${brand.fonts.body.import}&display=swap`;

function Swatch({ hex, label, large }) {
  const dark = hex.replace("#","").match(/.{2}/g).reduce((s,c)=>s+parseInt(c,16),0) < 400;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <div style={{
        width: large ? 72 : 56, height: large ? 72 : 56, borderRadius: "12px", backgroundColor: hex,
        border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.5px", color: brand.colors.text }}>{hex}</div>
        <div style={{ fontSize: "9px", color: brand.colors.muted, marginTop: "1px" }}>{label}</div>
      </div>
    </div>
  );
}

export default function BrandKit() {
  const [tab, setTab] = useState("overview");
  const c = brand.colors;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: c.bg, color: c.text, fontFamily: brand.fonts.body.css }}>
      <link href={fontUrl} rel="stylesheet" />

      {/* Header */}
      <div style={{ padding: "40px 24px 0", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: c.muted, marginBottom: "8px", fontFamily: brand.fonts.body.css }}>BRAND KIT</div>
        <h1 style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(32px, 7vw, 52px)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 6px 0", color: c.accent }}>
          Tony Bakes
        </h1>
        <p style={{ fontSize: "16px", color: c.muted, margin: "0 0 24px 0", lineHeight: 1.5 }}>
          Builder. 10+ years. Systems that generate revenue on autopilot.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0", borderBottom: `1px solid ${c.border}` }}>
          {[
            { key: "overview", label: "Overview" },
            { key: "typography", label: "Typography" },
            { key: "colors", label: "Colors" },
            { key: "preview", label: "Live Preview" },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              padding: "12px 18px", fontSize: "12px", fontWeight: tab === t.key ? 700 : 400,
              fontFamily: brand.fonts.body.css, border: "none", cursor: "pointer",
              borderBottom: tab === t.key ? `2px solid ${c.accent}` : "2px solid transparent",
              backgroundColor: "transparent", color: tab === t.key ? c.text : c.muted,
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "28px 24px 60px" }}>

        {/* ===== OVERVIEW ===== */}
        {tab === "overview" && (
          <div>
            {/* Hero card */}
            <div style={{
              backgroundColor: c.accent, borderRadius: "16px", padding: "clamp(28px, 5vw, 48px)",
              marginBottom: "28px", color: "#FAF8F2",
            }}>
              <h2 style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 12px 0" }}>
                I Build Revenue Systems.
              </h2>
              <p style={{ fontSize: "clamp(14px, 2vw, 17px)", opacity: 0.7, lineHeight: 1.6, margin: "0 0 24px 0" }}>
                YouTube infrastructure, content engines, and products that compound. Built by someone who ships every day at 5am.
              </p>
              <div style={{ display: "flex", gap: "clamp(20px, 5vw, 48px)", flexWrap: "wrap", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                {[{ v: "400M+", l: "Views Built" }, { v: "$50K", l: "From One System" }, { v: "10+", l: "Years Building" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", opacity: 0.5, marginTop: "4px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick specs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ padding: "20px", borderRadius: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.muted, marginBottom: "10px" }}>HEADING FONT</div>
                <div style={{ fontFamily: brand.fonts.heading.css, fontSize: "28px", fontWeight: 700, lineHeight: 1.1, marginBottom: "4px" }}>Literata</div>
                <div style={{ fontSize: "12px", color: c.muted }}>Newspaper editorial serif</div>
              </div>
              <div style={{ padding: "20px", borderRadius: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.muted, marginBottom: "10px" }}>BODY FONT</div>
                <div style={{ fontFamily: brand.fonts.body.css, fontSize: "28px", fontWeight: 400, lineHeight: 1.1, marginBottom: "4px" }}>Instrument Serif</div>
                <div style={{ fontSize: "12px", color: c.muted }}>Sharp modern editorial</div>
              </div>
            </div>

            {/* Palette strip */}
            <div style={{ marginTop: "16px", padding: "20px", borderRadius: "12px", border: `1px solid ${c.border}` }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.muted, marginBottom: "14px" }}>COLOR PALETTE</div>
              <div style={{ display: "flex", gap: "0", borderRadius: "10px", overflow: "hidden", height: "48px" }}>
                {[c.bg, c.accent, c.accentMid, c.muted, c.border, c.text].map((hex, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: hex }} title={hex} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== TYPOGRAPHY ===== */}
        {tab === "typography" && (
          <div>
            {/* Heading specimen */}
            <div style={{ marginBottom: "36px" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "16px" }}>HEADING — LITERATA</div>
              <div style={{ fontFamily: brand.fonts.heading.css, marginBottom: "20px" }}>
                {[
                  { size: 48, weight: 700, text: "Revenue Systems" },
                  { size: 36, weight: 700, text: "Built From Scratch" },
                  { size: 28, weight: 600, text: "Content Infrastructure" },
                  { size: 22, weight: 600, text: "Products That Compound" },
                  { size: 18, weight: 500, text: "YouTube Engines, Funnels, Offers" },
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "10px", color: c.muted, minWidth: "36px", textAlign: "right" }}>{row.size}px</span>
                    <span style={{ fontSize: `${row.size}px`, fontWeight: row.weight, lineHeight: 1.15 }}>{row.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "16px 20px", borderRadius: "10px", backgroundColor: "rgba(27,67,50,0.04)", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "11px", color: c.muted, lineHeight: 1.5 }}>
                  <strong style={{ color: c.text }}>Literata</strong> — Google Play Books typeface by TypeTogether. Sharp, refined, built for long-form digital reading. Variable weight from 400–800. Newspaper-grade authority without decorative excess.
                </div>
              </div>
            </div>

            {/* Body specimen */}
            <div style={{ marginBottom: "36px" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "16px" }}>BODY — INSTRUMENT SERIF</div>
              <div style={{ fontFamily: brand.fonts.body.css }}>
                <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "12px" }}>
                  Everyone obsesses over views. They chase virality like it's the only path to revenue. But what if I told you the system behind the video matters more than the video itself?
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "12px", color: c.text, opacity: 0.7 }}>
                  That's what I learned after building content infrastructure for over a decade. The video had 5,000 views. No ads. No sponsorship deals. Just a system I engineered to convert attention into revenue.
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: c.muted }}>
                  The funnel, the offer, the follow-up sequence — all built from scratch. That's the difference between content and infrastructure. Between views and revenue.
                </p>
              </div>

              <div style={{ marginTop: "16px", padding: "16px 20px", borderRadius: "10px", backgroundColor: "rgba(27,67,50,0.04)", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "11px", color: c.muted, lineHeight: 1.5 }}>
                  <strong style={{ color: c.text }}>Instrument Serif</strong> — by Rodrigo Fuenzalida & Jordan Egstad. Sharp, modern editorial serif with clean authority. No rounded edges. Designed for display and body text.
                </div>
              </div>
            </div>

            {/* Pairing demo */}
            <div>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "16px" }}>THE PAIRING</div>
              <div style={{ padding: "28px", borderRadius: "12px", border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: "9px", letterSpacing: "2px", color: c.accent, fontWeight: 700, marginBottom: "8px", fontFamily: brand.fonts.body.css }}>CASE STUDY</div>
                <h3 style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 8px 0" }}>
                  How I Made $50K From a Video With 5,000 Views
                </h3>
                <div style={{ fontFamily: brand.fonts.body.css, fontSize: "13px", color: c.muted, marginBottom: "16px" }}>
                  By Tony Bakes · 8 min read · February 2026
                </div>
                <p style={{ fontFamily: brand.fonts.body.css, fontSize: "16px", lineHeight: 1.7, color: c.text, opacity: 0.7, margin: 0 }}>
                  Everyone obsesses over views. They chase virality like it's the only path to revenue. But what if I told you the system behind the video matters more than the video itself? That's what I learned after building content infrastructure for over a decade.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ===== COLORS ===== */}
        {tab === "colors" && (
          <div>
            <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "20px" }}>WARM CREAM / FOREST DARK</div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
              <Swatch hex={c.bg} label="Background" large />
              <Swatch hex={c.accent} label="Primary" large />
              <Swatch hex={c.accentMid} label="Secondary" large />
              <Swatch hex={c.text} label="Text" large />
              <Swatch hex={c.muted} label="Muted" large />
              <Swatch hex={c.border} label="Border" large />
            </div>

            {/* Dark on light */}
            <div style={{ marginBottom: "16px", padding: "28px", borderRadius: "12px", backgroundColor: c.bg, border: `1px solid ${c.border}` }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.muted, marginBottom: "12px" }}>LIGHT MODE</div>
              <h3 style={{ fontFamily: brand.fonts.heading.css, fontSize: "28px", fontWeight: 700, color: c.accent, margin: "0 0 8px 0" }}>Revenue Systems That Compound</h3>
              <p style={{ fontFamily: brand.fonts.body.css, fontSize: "15px", color: c.text, opacity: 0.65, lineHeight: 1.6, margin: 0 }}>
                Built by someone who ships every day at 5am. Ten years of building systems that generate revenue on autopilot.
              </p>
            </div>

            {/* Light on dark */}
            <div style={{ marginBottom: "16px", padding: "28px", borderRadius: "12px", backgroundColor: c.accent }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>DARK MODE</div>
              <h3 style={{ fontFamily: brand.fonts.heading.css, fontSize: "28px", fontWeight: 700, color: "#FAF8F2", margin: "0 0 8px 0" }}>Revenue Systems That Compound</h3>
              <p style={{ fontFamily: brand.fonts.body.css, fontSize: "15px", color: "#FAF8F2", opacity: 0.65, lineHeight: 1.6, margin: 0 }}>
                Built by someone who ships every day at 5am. Ten years of building systems that generate revenue on autopilot.
              </p>
            </div>

            {/* Mid green on dark */}
            <div style={{ padding: "28px", borderRadius: "12px", backgroundColor: "#0D2818" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>FOREST NIGHT</div>
              <h3 style={{ fontFamily: brand.fonts.heading.css, fontSize: "28px", fontWeight: 700, color: c.accentMid, margin: "0 0 8px 0" }}>Revenue Systems That Compound</h3>
              <p style={{ fontFamily: brand.fonts.body.css, fontSize: "15px", color: "#F0FDF4", opacity: 0.6, lineHeight: 1.6, margin: 0 }}>
                Built by someone who ships every day at 5am. Ten years of building systems that generate revenue on autopilot.
              </p>
            </div>

            {/* CSS reference */}
            <div style={{ marginTop: "28px", padding: "20px", borderRadius: "10px", backgroundColor: "rgba(27,67,50,0.04)", border: `1px solid ${c.border}` }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "10px" }}>CSS VARIABLES</div>
              <pre style={{ fontFamily: "'Courier New', monospace", fontSize: "12px", color: c.text, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>
{`:root {
  --font-heading: 'Literata', serif;
  --font-body: 'Instrument Serif', serif;
  --color-bg: ${c.bg};
  --color-text: ${c.text};
  --color-accent: ${c.accent};
  --color-accent-mid: ${c.accentMid};
  --color-muted: ${c.muted};
  --color-border: ${c.border};
}`}
              </pre>
            </div>
          </div>
        )}

        {/* ===== LIVE PREVIEW ===== */}
        {tab === "preview" && (
          <div>
            <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: c.accent, marginBottom: "20px" }}>FULL PAGE PREVIEW</div>

            {/* Simulated landing page */}
            <div style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.border}` }}>
              {/* Nav */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: `1px solid ${c.border}`, backgroundColor: c.bg }}>
                <div style={{ fontFamily: brand.fonts.heading.css, fontSize: "18px", fontWeight: 700, color: c.accent }}>Tony Bakes</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  {["Products", "Case Studies", "About"].map(item => (
                    <span key={item} style={{ fontFamily: brand.fonts.body.css, fontSize: "14px", color: c.muted, cursor: "pointer" }}>{item}</span>
                  ))}
                </div>
              </div>

              {/* Hero */}
              <div style={{ padding: "clamp(32px, 6vw, 64px) 24px", backgroundColor: c.bg, textAlign: "center" }}>
                <div style={{ fontSize: "10px", letterSpacing: "3px", color: c.accentMid, fontWeight: 700, marginBottom: "12px" }}>10+ YEARS BUILDING</div>
                <h1 style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 16px 0", color: c.text, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                  I Build Systems That Generate Revenue on Autopilot
                </h1>
                <p style={{ fontFamily: brand.fonts.body.css, fontSize: "clamp(15px, 2vw, 18px)", color: c.muted, lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 24px" }}>
                  YouTube infrastructure, content engines, and products that compound — all built from scratch.
                </p>
                <button style={{
                  fontFamily: brand.fonts.body.css, fontSize: "14px", fontWeight: 400,
                  padding: "12px 32px", borderRadius: "8px", border: "none", cursor: "pointer",
                  backgroundColor: c.accent, color: c.bg, letterSpacing: "0.5px",
                }}>See What I've Built</button>
              </div>

              {/* Stats bar */}
              <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 6vw, 64px)", padding: "24px", backgroundColor: c.accent }}>
                {[{ v: "400M+", l: "Views Built" }, { v: "$50K", l: "One System" }, { v: "1.5M", l: "Subscribers" }, { v: "10+", l: "Years" }].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 700, color: "#FAF8F2" }}>{s.v}</div>
                    <div style={{ fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(250,248,242,0.45)", marginTop: "2px" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div style={{ padding: "32px 24px", backgroundColor: c.bg }}>
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "2px", color: c.accentMid, fontWeight: 700, marginBottom: "6px" }}>WHAT I'VE BUILT</div>
                  <h2 style={{ fontFamily: brand.fonts.heading.css, fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, margin: 0, color: c.text }}>Products & Systems</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                  {[
                    { title: "Contenomics", desc: "SaaS platform for content creators. Courses, templates, funnels, analytics." },
                    { title: "YouTube Systems", desc: "Content infrastructure that turns views into revenue without ads." },
                    { title: "Revenue Funnels", desc: "End-to-end conversion systems engineered from scratch." },
                  ].map((card, i) => (
                    <div key={i} style={{ padding: "20px", borderRadius: "10px", border: `1px solid ${c.border}`, transition: "border-color 0.15s", cursor: "pointer" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = c.accent}
                      onMouseLeave={e => e.currentTarget.style.borderColor = c.border}
                    >
                      <h3 style={{ fontFamily: brand.fonts.heading.css, fontSize: "18px", fontWeight: 700, margin: "0 0 6px 0" }}>{card.title}</h3>
                      <p style={{ fontFamily: brand.fonts.body.css, fontSize: "14px", color: c.muted, lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: "20px 24px", borderTop: `1px solid ${c.border}`, backgroundColor: c.bg, textAlign: "center" }}>
                <div style={{ fontFamily: brand.fonts.body.css, fontSize: "13px", color: c.muted }}>
                  © 2026 Tony Bakes · Built from scratch
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
