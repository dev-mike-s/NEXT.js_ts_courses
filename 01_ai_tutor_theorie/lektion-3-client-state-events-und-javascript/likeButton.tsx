//root/lektion-3-client-state-events-und-javascript/likeButton.tsx
/*
  Kleines Event-State-Beispiel: label kommt als Prop von aussen, likes gehoert der Komponente selbst.
  Feature-Historie: React State und Event Handler sind klassische React-Grundlagen; useState gibt es seit React 16.8. "use client" gehoert zum App Router ab Next.js 13.4.
*/

"use client";

import {useState} from "react";

export default function LikeButton({label}: {label: string}) {
  // likes ist lokale UI-Information nur fuer diese Komponente.
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => {
        // Gleiche Technik wie beim Counter:
        // funktionales Update verhindert Race Conditions bei schnellen Klicks.
        setLikes((n) => n + 1);
      }}
    >
      {/* label kommt als Prop vom Parent */}
      {label}: {likes}
    </button>
  );
}


