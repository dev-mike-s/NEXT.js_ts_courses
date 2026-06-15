//root/lektion-4-datenfetching-caching-und-dynamic-routes/news.tsx
/*
  Server Component mit Revalidierung: Die Seite darf kurz gecacht und danach erneuert werden.
  Feature-Historie: ISR kam als Konzept in Next.js 9.5. Die Server-Component/App-Router-Variante mit revalidate gehoert zu Next.js 13, stabil ab 13.4.
*/

// app/news/page.tsx

// Export-Konvention: Next.js liest diesen Wert fuer Revalidate.
export const revalidate = 60;

export default async function NewsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const posts: Array<{id: number; title: string}> = await res.json();

  return <div>{posts.map((p) => <p key={p.id}>{p.title}</p>)}</div>;
}


