import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeVoise Ascension Group",
  description: "We take you higher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, background: "#fff", color: "#111", fontFamily: "system-ui" }}>
        <div style={{ borderBottom: "1px solid #eee" }}>
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "#111", fontWeight: 800 }}>
              DeVoise Ascension Group
            </a>

            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/services" style={{ textDecoration: "none", color: "#111" }}>Services</a>
              <a href="/about" style={{ textDecoration: "none", color: "#111" }}>About</a>
              <a href="/contact" style={{ textDecoration: "none", color: "#111" }}>Contact</a>
              <a
                href="https://calendly.com/lavonnedevoise/30min"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  background: "#111",
                  padding: "8px 12px",
                  borderRadius: 12,
                  fontWeight: 700,
                }}
              >
                Book a Call
              </a>
            </nav>
          </div>
        </div>

        {children}

        <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: "18px 20px", opacity: 0.75 }}>
            © {new Date().getFullYear()} DeVoise Ascension Group · We take you higher.
          </div>
        </footer>
      </body>
    </html>
  );
}
