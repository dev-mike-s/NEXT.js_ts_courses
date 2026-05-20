"use client";

import { useState } from "react";

// Props + State in einer kleinen Komponente.
export default function LikeButton({ label }: { label: string }) {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>{label}: {likes}</button>;
}
