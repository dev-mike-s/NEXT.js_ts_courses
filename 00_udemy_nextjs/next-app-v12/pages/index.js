//root/pages/index.js
/**
 * Seitenkomponente im Pages Router, liefert statische oder leicht dynamische Inhalte fuer definierte Shop-Routen.
 * Funktionale React-Komponente, Next Head oder Next Image fuer SEO und Medien, optional einfache Listenlogik.
 * Input lokale Konstanten oder Imports, Logic JSX-Komposition, Output gerenderte Seite fuer den angeforderten Pfad.
 * Next.js Besonderheit Dateisystem-Routing erzeugt Route direkt aus Datei- und Ordnernamen innerhalb von pages.
 */

import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Willkommen</title>
                <meta name="keywords" content="next.js, react"/>
            </Head>
            <h1>Willkommen zu Next.js v12</h1>
        </div>);
}
