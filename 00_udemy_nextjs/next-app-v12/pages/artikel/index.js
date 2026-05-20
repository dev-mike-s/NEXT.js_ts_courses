//root/pages/artikel/index.js
/**
 * Seitenkomponente im Pages Router, liefert statische oder leicht dynamische Inhalte fuer definierte Shop-Routen.
 * Funktionale React-Komponente, Next Head oder Next Image fuer SEO und Medien, optional einfache Listenlogik.
 * Input lokale Konstanten oder Imports, Logic JSX-Komposition, Output gerenderte Seite fuer den angeforderten Pfad.
 * Next.js Besonderheit Dateisystem-Routing erzeugt Route direkt aus Datei- und Ordnernamen innerhalb von pages.
 */

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {

    return (
        <div>
            <Head>
                <title>Artikel Übersicht</title>
            </Head>

            <h1>Artikelübersicht</h1>

            {['1', '2', '3', '4', '5', '6'].map(path => {

                return (
                    <div key={path}>
                        <img src={`/bilder/${path}.jpg`} alt='artikel' width={600} height={600}/>
                    </div>);
            })}

        </div>);
}
