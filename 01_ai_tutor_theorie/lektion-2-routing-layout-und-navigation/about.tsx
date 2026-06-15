//root/lektion-2-routing-layout-und-navigation/about.tsx
/*
  App-Router-Konvention: In app/about/page.tsx waere diese Komponente die Seite fuer /about.
  Feature-Historie: File-based Routing ist eine alte Next.js-Kernidee. Die app/.../page.tsx-Konvention gehoert zum App Router, stabil ab Next.js 13.4.
*/

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


