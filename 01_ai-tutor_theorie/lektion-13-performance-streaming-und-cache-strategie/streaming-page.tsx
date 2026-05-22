//root/lektion-13-performance-streaming-und-cache-strategie/streaming-page.tsx
// @ts-nocheck

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
