export default function Home() {
return (
<main style={{ padding: 56, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
<header style={{ marginBottom: 28 }}>
<h1 style={{ fontSize: 56, margin: 0, letterSpacing: -1 }}>DeVoise Ascension Group</h1>
<p style={{ fontSize: 18, marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
We take you higher. Luxury-grade strategy, publishing, and digital systems built for elevation.
</p>

<div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
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

<a
href="/services"
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

<section style={{ marginTop: 44 }}>
<h2 style={{ fontSize: 28, marginBottom: 10 }}>What we build</h2>
<ul style={{ lineHeight: 1.9, paddingLeft: 18, marginTop: 0 }}>
<li><b>Done-for-you publishing</b> that looks premium and sells.</li>
<li><b>Brand systems</b> that make you feel established.</li>
<li><b>Funnels + automation</b> so leads don’t fall through cracks.</li>
</ul>
</section>
</main>
);
}
