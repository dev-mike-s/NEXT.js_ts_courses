//root/app/autos/page.tsx
/**
 * Page-Datei im App Router, definiert die route-spezifische Benutzeroberflaeche fuer ein URL-Segment.
 * Server Component ohne Client-Bundle-Overhead, JSX-Komposition und modulare Imports.
 * Input Route-Kontext sowie optionale Datenabfragen, Logic Renderaufbau pro Segment, Output finaler Seiteninhalt im Layout-Rahmen.
 * Next.js Besonderheit page.tsx ist leaf-segmentgebunden, macht den Ordnerpfad oeffentlich erreichbar und folgt file-system routing.
 */

//@ts-nocheck

interface PageProps {
    params: Promise<{
        params?: string[];
    }>;
}
export default async function AutosPage({params}: PageProps) {

    const resolvedParams = await params;
    const urlParams = resolvedParams.params || [];

    if (urlParams.length === 2) {
        return (
            <div>
                <h1>Alle {urlParams[0]} für unter {urlParams[1]} Euro</h1>
            </div>);
    }
    if (urlParams.length === 1) {

        return <h1>Alle {urlParams[0]}</h1>;
    }
    return <h1>Autos</h1>;
}
