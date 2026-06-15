//root/lektion-2-routing-layout-und-navigation/layout.tsx
/*
  RootLayout ist die aeusserste App-Router-Huelle; Navigation und children erscheinen dadurch seitenuebergreifend.
  Feature-Historie: app/layout.tsx ist App-Router-Architektur und ersetzt im app-Verzeichnis viele alte _app/_document-Anwendungsfaelle. Stabil ab Next.js 13.4.
*/

// app/layout.tsx
// ------------------------------------------------------------
// Root Layout: Dieses Layout umschliesst ALLE Seiten im app/-Baum.
// children enthaelt jeweils den gerenderten Inhalt der aktuellen Route.
// ------------------------------------------------------------

import Link from "next/link";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de">
      <body>
        {/*
          Globale Navigation:
          - next/link erzeugt Client Navigation (kein voller Hard Reload)
          - href ist die Zielroute
        */}
        <nav style={{display: "flex", gap: 12}}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>

        {/*
          children = Platzhalter fuer den aktiven Seiteninhalt.
          Kurzschreibweise erklaert:
          - {children} ist JSX-Ausdruckssyntax fuer JavaScript-Werte.
        */}
        {children}
      </body>
    </html>
  );
}


