//root/app/benutzer/page.tsx
/**
 * Page-Datei im App Router, definiert die route-spezifische Benutzeroberflaeche fuer ein URL-Segment.
 * Server Component ohne Client-Bundle-Overhead, JSX-Komposition und modulare Imports.
 * Input Route-Kontext sowie optionale Datenabfragen, Logic Renderaufbau pro Segment, Output finaler Seiteninhalt im Layout-Rahmen.
 * Next.js Besonderheit page.tsx ist leaf-segmentgebunden, macht den Ordnerpfad oeffentlich erreichbar und folgt file-system routing.
 */

interface User {
    id: number;
    username: string;
}
export default async function BenutzerUebersicht() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {revalidate: 300}
    });
    const users: User[] = await antwort.json();
    return (<div>
            <h1>Liste der Benutzer</h1>
            {users.map((user) => (<h2 key={user.id}>
                    {user.username}
                </h2>))}
        </div>);
}
