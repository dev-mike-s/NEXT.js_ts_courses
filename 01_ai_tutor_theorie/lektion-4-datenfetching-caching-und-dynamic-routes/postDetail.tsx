//root/lektion-4-datenfetching-caching-und-dynamic-routes/postDetail.tsx
/*
  Dynamische Route: Das URL-Segment [id] wird aus params gelesen und kann fuer Datenabfragen genutzt werden.
  Feature-Historie: Dynamische Routen sind in Next.js alt; app/posts/[id]/page.tsx ist App Router ab Next.js 13. Async params als Promise sind Next.js-15-Stil.
*/

// app/posts/[id]/page.tsx

// In neueren App-Router-Kontexten koennen params async aufgeloest werden.
type Params = Promise<{id: string}>;

export default async function PostDetailPage({params}: {params: Params}) {
  // await params: explizites Aufloesen des Segmentobjekts.
  const {id} = await params;

  return <p>Aktuelle ID: {id}</p>;
}


