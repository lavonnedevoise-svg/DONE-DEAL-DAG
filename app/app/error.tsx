"use client";

export default function Error({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
return (
<main style={{ padding: 48, fontFamily: "system-ui" }}>
<h1 style={{ fontSize: 28, marginBottom: 10 }}>Site error</h1>
<p style={{ opacity: 0.8, marginBottom: 18 }}>
The page loaded, then a script crashed. Copy the message below and send it to G.
</p>
<pre
style={{
background: "#111",
color: "#fff",
padding: 16,
borderRadius: 10,
overflowX: "auto",
maxWidth: 900,
whiteSpace: "pre-wrap",
}}
>
{error?.message || "Unknown error"}
</pre>

<button
onClick={() => reset()}
style={{
marginTop: 18,
padding: "10px 14px",
borderRadius: 10,
border: "1px solid #111",
background: "#fff",
cursor: "pointer",
fontWeight: 600,
}}
>
Retry
</button>
</main>
);
}
