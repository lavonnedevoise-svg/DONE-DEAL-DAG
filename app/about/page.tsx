export default function AboutPage() {
  return (
    <main style={{ padding: 56, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, marginTop: 0 }}>About</h1>

      <p style={{ opacity: 0.9, lineHeight: 1.75 }}>
        DeVoise Ascension Group builds premium publishing and digital infrastructure for creators,
        entrepreneurs, and mission-led brands—so your message looks expensive, feels intentional,
        and converts.
      </p>

      <h2 style={{ marginTop: 28 }}>The standard</h2>
      <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
        <li>Luxury presentation (clean, bold, intentional)</li>
        <li>Speed with excellence (no sloppy shortcuts)</li>
        <li>Systems that scale (so you don’t rebuild every month)</li>
      </ul>
    </main>
  );
}
