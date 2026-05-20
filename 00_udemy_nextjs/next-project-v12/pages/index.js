//root/pages/index.js
/**
 * Seitenkomponente im Pages Router, liefert statische oder leicht dynamische Inhalte fuer definierte Shop-Routen.
 * Funktionale React-Komponente, Next Head oder Next Image fuer SEO und Medien, optional einfache Listenlogik.
 * Input lokale Konstanten oder Imports, Logic JSX-Komposition, Output gerenderte Seite fuer den angeforderten Pfad.
 * Next.js Besonderheit Dateisystem-Routing erzeugt Route direkt aus Datei- und Ordnernamen innerhalb von pages.
 */

import Slider from "../komponenten/Slider";
import ProduktListe from "../komponenten/ProduktListe";
import dbConnect from "../utils/mongodb";
import Produkt from "../models/Produkt";
export default function HomePage({produkte}) {

    console.log("[v12][HomePage] Rendering gestartet mit " + (produkte?.length || 0) + " Produkten");

    return (
        <div>
          <Slider />
          <ProduktListe produkte={produkte}/>
        </div>);
}
export async function getServerSideProps() {
    try {
        await dbConnect();
        console.log("[index.js][getServerSideProps] Abfrage der Produkt-Collection läuft...");

        const res = await Produkt.find({}).lean();
        const produkte = JSON.parse(JSON.stringify(res));

        return {
            props: {
                produkte
            }
        };
    }
    catch (e) {
        console.error("[index.js][getServerSideProps] Fehler beim Laden der Daten:", e.message);
        return {
            props: {
                produkte: []
            }
        };
    }
}
