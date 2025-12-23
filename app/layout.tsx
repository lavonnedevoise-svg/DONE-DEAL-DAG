export default function Home() {
return (
<main style={{ padding: "48px", fontFamily: "system-ui" }}>
<h1 style={{ fontSize: "40px", marginBottom: "12px" }}>
DeVoise Ascension Group
</h1>
<p style={{ fontSize: "18px", maxWidth: "720px", lineHeight: 1.6 }}>
We take you higher. Luxury-grade strategy, publishing, and digital systems
built for elevation.
</p>

<div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
<a
href="https://calendly.com/lavonnedevoise/30min"
style={{
padding: "12px 16px",
borderRadius: "10px",
background: "#111",
color: "#fff",
textDecoration: "none",
fontWeight: 600,
}}
>
Book a Call
</a>
<a
href="#services"
style={{
padding: "12px 16px",
borderRadius: "10px",
border: "1px solid #111",
color: "#111",
textDecoration: "none",
fontWeight: 600,
}}
>
View Services
</a>
</div>

<section id="services" style={{ marginTop: "48px" }}>
<h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Services</h2>
<ul style={{ lineHeight: 1.9 }}>
<li>E-Book Services (Done-for-You)</li>
<li>Publishing + KDP Setup</li>
<li>Brand Systems + Funnels</li>
</ul>
</section>
</main>
);
}
