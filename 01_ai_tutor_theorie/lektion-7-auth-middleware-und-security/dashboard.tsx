//root/lektion-7-auth-middleware-und-security/dashboard.tsx
/*
  Geschuetzte Seite als Demo: Inhalt wird nur gerendert, wenn ein Login-Zustand vorhanden ist.
  Feature-Historie: Conditional Rendering ist altes React-Grundwissen. Als app/dashboard/page.tsx ist die Datei App-Router-Style, stabil ab Next.js 13.4.
*/

// app/dashboard/page.tsx

// Demo-Guard. Echt: Session aus Cookie/JWT/Provider pruefen.
const isLoggedIn = false;

export default function DashboardPage() {
  if (!isLoggedIn) return <p>Kein Zugriff. Bitte einloggen.</p>;
  return <h1>Dashboard</h1>;
}


