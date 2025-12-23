export default function ServicesPage() {
  return (
    <main style={{ padding: 56, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, marginTop: 0 }}>Services</h1>
      <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
        Pick what you need. If you’re not sure, book a call and we’ll map the cleanest path.
      </p>

      <div style={{ marginTop: 26, display: "grid", gap: 16 }}>
        <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 18 }}>
          <h2 style={{ marginTop: 0 }}>E-Book Services (Done-for-You)</h2>
          <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
            <li>Outline + structure</li>
            <li>Writing / ghostwriting support</li>
            <li>Formatting (KDP-ready)</li>
            <li>Cover direction + upload support</li>
          </ul>
        </div>

        <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 18 }}>
          <h2 style={{ marginTop: 0 }}>Publishing + KDP Setup</h2>
          <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
            <li>Print + Kindle interior files</li>
            <li>Metadata + keywords</li>
            <li>Trim, margins, bleed checks</li>
            <li>Upload + launch checklist</li>
          </ul>
        </div>

        <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 18 }}>
          <h2 style={{ marginTop: 0 }}>Brand Systems + Funnels</h2>
          <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
            <li>Landing page + offer clarity</li>
            <li>Email capture + follow-up</li>
            <li>Automation strategy</li>
            <li>Conversion-focused structure</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 26 }}>
        <a
          href="https://calendly.com/lavonnedevoise/30min"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 12,
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Book a Call
        </a>
      </div>
    </main>
  );
}
