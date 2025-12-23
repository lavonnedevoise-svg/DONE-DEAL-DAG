export const metadata = {
title: "DeVoise Ascension Group",
description: "We take you higher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body style={{ margin: 0, background: "#fff", color: "#111" }}>
{children}
</body>
</html>
);
}
