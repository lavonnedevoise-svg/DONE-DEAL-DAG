export default function Home() {
  return (
    <main>
      <div className="card" style={{ padding: 26 }}>
        <h1 className="h1">DeVoise Ascension Group</h1>
        <p className="p">
          We take you higher. Luxury-grade strategy, publishing, and digital systems built for elevation.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">Book a Call</a>
          <a className="btn btnGhost" href="/services">View Services</a>
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
