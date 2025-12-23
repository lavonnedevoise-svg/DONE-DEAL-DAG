export default function Home() {
return (
<main style={{ padding: 56, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
<header style={{ marginBottom: 28 }}>
<h1 style={{ fontSize: 56, margin: 0, letterSpacing: -1 }}>
DeVoise Ascension Group
</h1>
<p style={{ fontSize: 18, marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
We take you higher. Luxury-grade strategy, publishing, and digital systems built for elevation.
</p>

<div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
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

<a
href="#services"
style={{
display: "inline-block",
padding: "12px 16px",
borderRadius: 12,
background: "#f2f2f2",
color: "#111",
textDecoration: "none",
fontWeight: 700,
}}
>
View Services
</a>
</div>
</header>

<section id="services" style={{ marginTop: 44 }}>
<h2 style={{ fontSize: 28, marginBottom: 10 }}>Services</h2>
<ul style={{ lineHeight: 1.9, paddingLeft: 18, marginTop: 0 }}>
<li><b>E-Book Services (Done-for-You)</b> — outline → write → format → publish.</li>
<li><b>Publishing + KDP Setup</b> — print + Kindle files, covers, metadata.</li>
<li><b>Brand Systems + Funnels</b> — landing pages, lead capture, automation.</li>
</ul>
</section>

<section id="about" style={{ marginTop: 44 }}>
<h2 style={{ fontSize: 28, marginBottom: 10 }}>About</h2>
<p style={{ lineHeight: 1.7, opacity: 0.9 }}>
DeVoise Ascension Group builds premium publishing and digital infrastructure for creators,
entrepreneurs, and mission-led brands—so your message looks expensive, feels intentional,
and converts.
</p>
</section>

<section id="contact" style={{ marginTop: 44 }}>
<h2 style={{ fontSize: 28, marginBottom: 10 }}>Contact</h2>
<p style={{ lineHeight: 1.7, opacity: 0.9 }}>
Ready to build? Book a call and we’ll map the fastest path from idea → asset → revenue.
</p>
<a
href="https://calendly.com/lavonnedevoise/30min"
style={{ fontWeight: 700 }}
>
calendly.com/lavonnedevoise/30min
</a>
</section>
</main>
);
}
