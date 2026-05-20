//root/app/benutzer/[id]/page.tsx
/**
 * Dynamische Routen-Page im App Router, bildet Segmentparameter auf konkrete Inhalte oder Filterausgaben ab.
 * Server Component mit async params oder optional generateStaticParams, bedingte JSX-Auswahl je Parameterauspraegung.
 * Input URL-Segmente und optionale externe Daten, Logic Param-Aufloesung und Darstellungsentscheidung, Output routekonforme Seite.
 * Next.js Besonderheit App-Router Dynamic Segments verwenden Promise-params, Catch-all und Optional Catch-all folgen Dateikonvention.
 */

interface User {
    id: number;
    username: string;
}
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}
export async function generateStaticParams() {

    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await antwort.json();

    return users.map((user) => ({
        id: users.toString(),
    }));
}
export default async function EinzelnerBenutzer({params}: PageProps) {

    const resolvedParams = await params;
    const antwort = await fetch(`https://jsonplaceholder.typicode.com/users/${resolvedParams.id}`);
    const user: User = await antwort.json();

    return (
        <div>
            <h1>Benutzer</h1>
            <h2>{user.username}</h2>
        </div>);
}
