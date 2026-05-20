//root/komponenten/Produktliste.jsx
/**
 * Produktlisten-Komponente, rendert Katalogkarten und verlinkt in Detailansichten des Bestellflusses.
 * Server Component mit DB-Fetching und Typisierung, Next Link, Next Image und UI-Bibliothekselemente.
 * Input Produktdaten aus Props oder Datenbank, Logic Mapping in Karten und Preisdarstellung, Output gridbasierte Bestelluebersicht.
 * Next.js Besonderheit im App Router kann Datenzugriff direkt in Server Components erfolgen, im Pages Router ueber vorgeladene Props.
 */

import {Card, Button} from 'react-bootstrap';
import Link from 'next/link';

export default function Produktliste( {produkte} ) {

    return (
        <div>
            <div className="row row-cols-3">
                {produkte?.map((produkt) => (
                    <div key={produkt._id || produkt.name} className="mt-3 col">
                        <Card>
                            <Link href={`/produkte/${produkt.url}`} passHref>
                                <a>
                                    <Card.Img variante="top" src={produkt.bild}/>
                                </a>
                            </Link>

                            <Card.Body>
                                <Card.Title>
                                    {produkt.name} {produkt.preis.toFixed(2)} €
                                </Card.Title>

                                <Card.Text>
                                    {produkt.beschreibung}
                                </Card.Text>
                                
                                <Link href={`/produkte/${produkt.url}`} passHref>
                                    <a>
                                        <Button variant="danger">
                                            Bestellen
                                        </Button>
                                    </a>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </div>))}
            </div>
            <br>

            </br>
        </div>);
}
