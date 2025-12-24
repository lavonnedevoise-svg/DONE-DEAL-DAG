export default function Home() {
  return (
    <main>
    {/* HERO */}
<div className="card" style={{ padding: 30 }}> <img
  src="/dag-logo.png"
  alt="DeVoise Ascension Group"
  style={{ height: 64, width: "auto", display: "block", margin: "0 auto 14px" }}
/>


  <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.6 }}>
    DEVOISE ASCENSION GROUP
  </div>

  <h1 className="h1" style={{ marginTop: 10 }}>
    Build once. <br /> Ascend continuously.
  </h1>

  <p className="p" style={{ maxWidth: 760 }}>
    Premium publishing, brand systems, and automation for creators and entrepreneurs
    who want to look established, convert cleanly, and scale without chaos.
  </p>

{/* WHAT WE BUILD */}
<section style={{ marginTop: 28 }}>
  <h2 className="h2">What We Build</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 14,
      marginTop: 12,
    }}
  >
    <div className="card">
      <h3 style={{ margin: 0 }}>Done-For-You Publishing</h3>
      <p className="p">
        We turn ideas into premium books, intellectual property, and authority assets designed
        to sell, scale, and position you as the expert.
      </p>
    </div>

    <div className="card">
      <h3 style={{ margin: 0 }}>Brand Systems</h3>
      <p className="p">
        Messaging, positioning, and pages that make you look established before you ever speak.
      </p>
    </div>

    <div className="card">
      <h3 style={{ margin: 0 }}>Funnels &amp; Automation</h3>
      <p className="p">
        Lead capture and follow-up systems that remove friction, protect opportunities, and
        compound growth.
      </p>
    </div>
  </div>
</section>



  {/* CTA */}
  <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
    <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">
      Book the 30-min Call
    </a>
    <a className="btn btnGhost" href="/services">
      View Services & Pricing
    </a>
  </div>
</div>


      <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
        <div className="card">
          <h2 className="h2">Publishing</h2>
          <p className="p">From idea → outline → manuscript → KDP-ready files. Clean, premium, fast.</p>
        </div>

        <div className="card">
          <h2 className="h2">Brand Systems</h2>
          <p className="p">Positioning, pages, and assets that make you look established and convert.</p>
        </div>

        <div className="card">
          <h2 className="h2">Funnels + Automation</h2>
          <p className="p">Lead capture + follow-ups so you stop losing money to silence.</p>
        </div>
      </div>
    </main>
  );
}
