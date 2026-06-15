//root/lektion-3-client-state-events-und-javascript/counter.tsx
/*
  Client Component fuer lokales UI-Verhalten: useState speichert nur den Zustand dieses Buttons im Browser.
  Feature-Historie: useState kam mit React Hooks in React 16.8. "use client" ist moderner App-Router-Kontext, produktionsreif ab Next.js 13.4.
*/

"use client";

// "use client" markiert die Datei als Client Component.
// Warum: useState basiert auf Browser-Interaktion und darf nicht in
// reinen Server Components verwendet werden.

import {useState} from "react";

export default function CounterClient() {
  // useState(0) gibt ein Tupel zurueck: [aktuellerWert, SetterFunktion].
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() =>
        // (prev) => prev + 1 ist eine "funktionale State-Aktualisierung".
        // prev = letzter stabiler State, nicht der moeglicherweise stale Wert.
        setCount((prev) => prev + 1)
      }
    >
      Klicks: {count}
    </button>
  );
}


