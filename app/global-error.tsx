"use client";

export default function GlobalError({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
return (
<html>
<body style={{ margin: 0, fontFamily: "system-ui", padding: 48 }}>
<h1 style={{ fontSize: 28, marginBottom: 10 }}>Global site error</h1>
<p style={{ opacity: 0.8, marginBottom: 18 }}>
This catches crashes that happen in the root layout before the page renders.
Copy the message below and send it to G.
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
</body>
</html>
);
}
