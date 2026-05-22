//root/lektion-4-datenfetching-caching-und-dynamic-routes/posts.tsx
// @ts-nocheck

// app/posts/page.tsx

// Typsicherheit fuer externe API-Antworten.
type Post = {id: number; title: string};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    // next.revalidate: Seite wird spaetestens alle 120s neu erzeugt.
    next: {revalidate: 120},
  });

  // Fail-fast bei HTTP-Fehlern.
  if (!res.ok) throw new Error("API Fehler beim Laden der Posts");

  return res.json();
}

export default async function PostsPage() {
  // Server Component darf async sein und direkt await nutzen.
  const posts = await getPosts();

  return <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}
