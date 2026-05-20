// app/news/page.tsx
// Revalidate: Seite wird spaetestens alle 60s neu erzeugt.

export const revalidate = 60;

export default async function NewsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const posts: Array<{ id: number; title: string }> = await res.json();
  return <div>{posts.map((p) => <p key={p.id}>{p.title}</p>)}</div>;
}
