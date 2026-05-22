//root/lektion-4-datenfetching-caching-und-dynamic-routes/postDetail.tsx
// @ts-nocheck

// app/posts/[id]/page.tsx

// In neueren App-Router-Kontexten koennen params async aufgeloest werden.
type Params = Promise<{id: string}>;

export default async function PostDetailPage({params}: {params: Params}) {
  // await params: explizites Aufloesen des Segmentobjekts.
  const {id} = await params;

  return <p>Aktuelle ID: {id}</p>;
}
