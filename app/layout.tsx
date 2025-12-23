import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeVoise Ascension Group",
  description: "We take you higher.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#fff",
          color: "#111",
          fontFamily: "system-ui",
        }}
      >
        {/* Top Nav */}
        <div style={{ borderBottom: "1px solid #eee" }}>
          <nav
            style={{
              maxWidth: 980,
              margin: "0 auto",
              padding: "16px 56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#111",
                fontWeight: 800,
                letterSpacing: -0.3,
              }}
            >
              DeVoise Ascension Group
            </Link>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/services" style={{ textDecoration: "none", color: "#111" }}>
                Services
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#111" }}>
                About
              </Link>
              <Link href="/contact" style={{ textDecoration: "none", color: "#111" }}>
                Contact
              </Link>

              <a
                href="https://calendly.com/dondevoise/benefits-ail"
                style={{
                  textDecoration: "none",
                  background: "#111",
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontWeight: 700,
                }}
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              padding: "22px 56px",
              opacity: 0.8,
              fontSize: 14,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>© {new Date().getFullYear()} DeVoise Ascension Group</span>
            <span>We take you higher.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
