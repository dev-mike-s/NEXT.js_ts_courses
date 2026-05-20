"use client";

import { useState } from "react";

// Client Component, da useState nur im Client erlaubt ist.
export default function CounterClient() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Klicks: {count}
    </button>
  );
}
