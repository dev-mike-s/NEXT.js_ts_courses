//root/app/artikel/[artikelid]/variante/[varianteid]/page.tsx
/**
 * Dynamische Routen-Page im App Router, bildet Segmentparameter auf konkrete Inhalte oder Filterausgaben ab.
 * Server Component mit async params oder optional generateStaticParams, bedingte JSX-Auswahl je Parameterauspraegung.
 * Input URL-Segmente und optionale externe Daten, Logic Param-Aufloesung und Darstellungsentscheidung, Output routekonforme Seite.
 * Next.js Besonderheit App-Router Dynamic Segments verwenden Promise-params, Catch-all und Optional Catch-all folgen Dateikonvention.
 */

interface PageProps {
    params: Promise<{
        artikelid: string;
        varianteid: string;
    }>;
}
export default async function ArtikelVariante( {params}: PageProps) {

    const resolvedParams = await params;

    return (
        <div>
            <h1>
                Die ID lautet {resolvedParams.artikelid} und für Variante {resolvedParams.varianteid}

            </h1>
        </div>);
}
