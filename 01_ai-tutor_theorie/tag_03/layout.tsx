// @ts-nocheck

// app/layout.tsx
// Root Layout umschliesst alle Seiten.

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* Diese Navigation erscheint auf jeder Seite */}
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
