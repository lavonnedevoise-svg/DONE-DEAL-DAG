export default function ContactPage() {
  return (
    <main style={{ padding: 56, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, marginTop: 0 }}>Contact</h1>

      <p style={{ opacity: 0.9, lineHeight: 1.75 }}>
        Ready to build? The fastest way is to book a call.
      </p>

      <a
        href="https://calendly.com/dondevoise/benefits-ail"
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

      <p style={{ marginTop: 18, opacity: 0.8 }}>
        Or email: <b>ddevoiseinternational@gmail.com</b>
      </p>
    </main>
  );
}
