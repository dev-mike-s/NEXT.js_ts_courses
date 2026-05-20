// app/dashboard/page.tsx
// Demo Guard (ohne echte Auth Library).

const isLoggedIn = false;

export default function DashboardPage() {
  if (!isLoggedIn) return <p>Kein Zugriff. Bitte einloggen.</p>;
  return <h1>Dashboard</h1>;
}
