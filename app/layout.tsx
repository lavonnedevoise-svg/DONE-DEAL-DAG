import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "DeVoise Ascension Group",
  description: "We take you higher.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="navWrap">
          <div className="container navInner">
       <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
  <div
    className="navInner"
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "16px 20px",
    }}
  >
    <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src="/logo.png"
        alt="DeVoise Ascension Group"
        style={{ height: 42 }}
      />
    </a>

    <nav className="links">
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a
        href="https://calendly.com/lavonnedevoise/30min"
        className="btn btnPrimary"
      >
        Book a Call
      </a>
    </nav>
  </div>
</header>


            <div className="links">
              <Link href="/" className="link">Home</Link>
              <Link href="/services" className="link">Services</Link>
              <Link href="/about" className="link">About</Link>
              <Link href="/contact" className="link">Contact</Link>
              <a className="btn btnPrimary" href="https://calendly.com/lavonnedevoise/30min">
                Book a Call
              </a>
            </div>
          </div>
        </div>

        <main className="container" style={{ paddingTop: 34, paddingBottom: 56 }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div>© {new Date().getFullYear()} DeVoise Ascension Group</div>
            <div>We take you higher.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
