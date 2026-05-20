// app/posts/page.tsx
// Daten werden serverseitig geladen.

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("API Fehler");
  return res.json();
}

export default async function PostsPage() {
  const posts: Array<{ id: number; title: string }> = await getPosts();
  return <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}
