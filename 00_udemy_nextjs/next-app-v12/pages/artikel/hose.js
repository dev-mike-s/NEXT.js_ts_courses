//root/pages/artikel/hose.js
/**
 * Seitenkomponente im Pages Router, liefert statische oder leicht dynamische Inhalte fuer definierte Shop-Routen.
 * Funktionale React-Komponente, Next Head oder Next Image fuer SEO und Medien, optional einfache Listenlogik.
 * Input lokale Konstanten oder Imports, Logic JSX-Komposition, Output gerenderte Seite fuer den angeforderten Pfad.
 * Next.js Besonderheit Dateisystem-Routing erzeugt Route direkt aus Datei- und Ordnernamen innerhalb von pages.
 */

import Image from 'next/image';
import hose1 from '../../public/bilder/1.jpg';

export default function Home() {

    return (
        <div className="card">
            <h1>Hose</h1>
            <img src={hose1} alt='artikel' width={600} height={600}/>
        </div>);
}
