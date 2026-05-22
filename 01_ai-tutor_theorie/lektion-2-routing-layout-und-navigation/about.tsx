//root/lektion-2-routing-layout-und-navigation/about.tsx
// @ts-nocheck

// app/about/page.tsx
// ------------------------------------------------------------
// Diese Komponente ist eine einfache "Page" im App Router.
// Dateikonvention: app/about/page.tsx -> URL: /about
// ------------------------------------------------------------

export default function AboutPage() {
  return (
    <main>
      {/*
        <h1> ist die semantische Hauptueberschrift der Seite.
        Semantik ist fuer Accessibility und SEO relevant.
      */}
      <h1>About</h1>

      {/*
        Statischer Text als Beispiel fuer eine serverseitig gerenderte Seite.
      */}
      <p>Statische Seite im App Router.</p>
    </main>
  );
}
