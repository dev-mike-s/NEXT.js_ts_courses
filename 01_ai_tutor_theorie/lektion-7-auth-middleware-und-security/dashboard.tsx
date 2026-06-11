//root/lektion-7-auth-middleware-und-security/dashboard.tsx
// @ts-nocheck

// app/dashboard/page.tsx

// Demo-Guard. Echt: Session aus Cookie/JWT/Provider pruefen.
const isLoggedIn = false;

export default function DashboardPage() {
  if (!isLoggedIn) return <p>Kein Zugriff. Bitte einloggen.</p>;
  return <h1>Dashboard</h1>;
}
