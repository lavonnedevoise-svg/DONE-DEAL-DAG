export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <div className="card" style={{ padding: 26 }}>
        <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.4 }}>
          SERVICES
        </div>

        <h1 className="h1" style={{ fontSize: 46, marginTop: 10 }}>
          Choose your lane.
        </h1>

        <p className="p">
          Premium publishing, brand systems, and automation—built fast, built clean, built to convert.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">
            Book a Call
          </a>
          <a className="btn btnGhost" href="/contact">
            Ask a Question
          </a>
        </div>
      </div>

      {/* Offer Cards */}
      <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
        {/* Starter */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
  <h2 className="h2">Starter</h2>
  <div style={{ color: "var(--gold2)", fontWeight: 900 }}>$1,500</div>
</div>


          <p className="p" style={{ marginTop: 6 }}>
            For the person who needs a clean, professional foundation—fast.
          </p>

          <ul style={{ lineHeight: 1.95, paddingLeft: 18, margin: "14px 0 0", color: "var(--muted)" }}>
            <li>Offer clarity + positioning (what you sell, who it’s for)</li>
            <li>1-page landing page structure (copy + section blueprint)</li>
            <li>Call-to-action setup (Calendly / contact)</li>
            <li>Launch checklist (simple, executable)</li>
          </ul>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">Book Starter Call</a>
            <a className="btn btnGhost" href="/contact">Questions</a>
          </div>
        </div>

        {/* Authority */}
        <div className="card" style={{ border: "1px solid rgba(212,175,55,.35)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
  <h2 className="h2">Authority</h2>
  <div style={{ color: "var(--gold)", fontWeight: 900 }}>$3,500 · Most Popular</div>
</div>


          <p className="p" style={{ marginTop: 6 }}>
            For creators & entrepreneurs who need a premium look + a real system behind it.
          </p>

          <ul style={{ lineHeight: 1.95, paddingLeft: 18, margin: "14px 0 0", color: "var(--muted)" }}>
            <li>Homepage + Services page (conversion-first)</li>
            <li>Basic funnel flow (lead capture + next step)</li>
            <li>Email follow-up outline (what to send + when)</li>
            <li>Publishing support or offer packaging (your choice)</li>
          </ul>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">Book Authority Call</a>
            <a className="btn btnGhost" href="/contact">Questions</a>
          </div>
        </div>

        {/* Ascension */}
        <div className="card">
         <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
  <h2 className="h2">Ascension</h2>
  <div style={{ color: "var(--gold2)", fontWeight: 900 }}>Starting at $7,500</div>
</div>


          <p className="p" style={{ marginTop: 6 }}>
            For high-intent brands that want the full build: premium presentation + automation + execution support.
          </p>

          <ul style={{ lineHeight: 1.95, paddingLeft: 18, margin: "14px 0 0", color: "var(--muted)" }}>
            <li>Full site foundation (Home / Services / About / Contact)</li>
            <li>Offer suite mapping (what to sell now vs later)</li>
            <li>Automation plan (lead → follow-up → booking)</li>
            <li>Publishing system or funnel buildout (based on your priority)</li>
          </ul>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">Book Ascension Call</a>
            <a className="btn btnGhost" href="/contact">Questions</a>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="card" style={{ marginTop: 18, padding: 22, textAlign: "center" }}>
        <h2 className="h2" style={{ marginBottom: 6 }}>Not sure which fits?</h2>
        <p className="p" style={{ margin: "0 auto", maxWidth: 760 }}>
          Book a call. We’ll pick the fastest lane, cut the fluff, and build what actually moves revenue.
        </p>
<p className="p" style={{ fontSize: 15, opacity: 0.7 }}>
  All projects begin with a strategy call to confirm fit, scope, and timeline.
</p>

        <div style={{ marginTop: 16 }}>
          <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">Book the 30-min Call</a>
        </div>
      </div>
    </main>
  );
}
