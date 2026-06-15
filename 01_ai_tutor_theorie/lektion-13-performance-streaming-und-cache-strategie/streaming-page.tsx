//root/lektion-13-performance-streaming-und-cache-strategie/streaming-page.tsx
/*
  Streaming-Demo mit Suspense: Der schnelle Teil der Seite kann sofort erscheinen, waehrend langsame Serverarbeit nachgeliefert wird.
  Feature-Historie: Suspense gibt es seit React 16.6; Streaming SSR mit Suspense ist React 18. Im Next.js App Router ist das Muster ab Next.js 13.4 produktionsreif.
*/

import {Suspense} from "react";

async function SlowWidget() {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return <div>Langsames Widget ist fertig geladen.</div>;
}

export default function StreamingPage() {
  return (
    <main>
      <h1>Streaming Demo</h1>

      {/*
        Suspense zeigt fallback sofort an,
        waehrend SlowWidget serverseitig weiterlaeuft.
      */}
      <Suspense fallback={<p>Lade Widget...</p>}>
        <SlowWidget />
      </Suspense>
    </main>
  );
}


