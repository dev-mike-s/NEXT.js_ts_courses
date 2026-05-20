// app/posts/[id]/page.tsx
// [id] ist ein dynamischer URL Teil.

export default function PostDetailPage({ params }: { params: { id: string } }) {
  return <p>Aktuelle ID: {params.id}</p>;
}
