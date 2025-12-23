import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "DeVoise Ascension Group",
  description: "We take you higher.",
};

const container: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "0 24px",
  fontFamily: "system-ui",
};

const navWrap: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  background: "#fff",
};

const navInner: React.CSSProperties = {
  ...container,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 68,
};

const brand: React.CSSProperties = {
  fontWeight: 800,
  letterSpacing: -0.3,
  color: "#111",
  textDecoration: "none",
};

const navLinks: React.CSSProperties = {
  display: "flex",
  gap: 14,
  alignItems: "center",
  flexWrap: "wrap",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 700,
  padding: "8px 10px",
  borderRadius: 10,
};

const ctaStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#fff",
  background: "#111",
  fontWeight: 800,
  padding: "10px 12px",
  borderRadius: 12,
};

const mainStyle: React.CSSProperties = {
  ...container,
  paddingTop: 28,
  paddingBottom: 48,
};

const footerWrap: React.CSSProperties = {
  borderTop: "1px solid #eee",
  marginTop: 40,
  background: "#fff",
};

const footerInner: React.CSSProperties = {
  ...container,
  paddingTop: 18,
  paddingBottom: 18,
  fontSize: 14,
  opacity: 0.8,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 10,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff", color: "#111" }}>
        <div style={navWrap}>
          <div style={navInner}>
            <Link href="/" style={brand}>
              DeVoise Ascension Group
            </Link>

            <nav style={navLinks}>
              <Link href="/" style={linkStyle}>
                Home
              </Link>
              <Link href="/services" style={linkStyle}>
                Services
              </Link>
              <Link href="/about" style={linkStyle}>
                About
              </Link>
              <Link href="/contact" style={linkStyle}>
                Contact
              </Link>

              <a
                href="https://calendly.com/dondevoise/benefits-ail"
                style={ctaStyle}
              >
                Book a Call
              </a>
            </nav>
          </div>
        </div>

        <main style={mainStyle}>{children}</main>

        <footer style={footerWrap}>
          <div style={footerInner}>
            <div>© {new Date().getFullYear()} DeVoise Ascension Group</div>
            <div>We take you higher.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
