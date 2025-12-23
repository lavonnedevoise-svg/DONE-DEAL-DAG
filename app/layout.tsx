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
            <Link href="/" className="brand">DeVoise Ascension Group</Link>

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
