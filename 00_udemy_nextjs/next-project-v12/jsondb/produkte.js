//root/jsondb/produkte.js
/**
 * Statisches Datenmodul, liefert Artikel- oder Produktkatalog als zentrale In-Memory-Quelle fuer Demo und Seed.
 * ES-Module-Exports, optionale TypeScript-Interfaces, verschachtelte Objekt- und Array-Strukturen als Domain-Modell.
 * Input harte Literale in Arrays, Logic nur Strukturierung im Modul, Output konsumierbare Daten fuer UI, API und Seeder.
 * Next.js Besonderheit gleiche Daten koennen von Pages API Routes oder App Route Handlers serverseitig wiederverwendet werden.
 */

const jsondb = {
    produkte: [
        {
            name: 'Crispy Burger',
            beschreibung: 'Saftiges Rindfleisch mit knusprigem Bacon und Spezialsauce im American Style.',
            kategorie: 'Hauptgericht',
            preis: 6.99,
            url: 'burger',
            bild: '/bilder/produkte/burger.jpg',
            extras: [
                {text: 'Doppelt Fleisch', preis: 4.00},
                {text: 'Extra Scharf (JalapeÃ±os)', preis: 0.50},
                {text: 'Cheddar KÃ¤se', preis: 1.00}
            ]
        },
        {
            name: 'Coca Cola',
            beschreibung: 'EisgekÃ¼hlte, erfrischende Cola in der 0.33l Glasflasche.',
            kategorie: 'Trinken',
            preis: 1.99,
            url: 'cola',
            bild: '/bilder/produkte/cola.jpg',
            extras: [
                {text: 'EiswÃ¼rfel & Zitrone', preis: 0.00}
            ]
        },
        {
            name: 'Erdbeer Eis',
            beschreibung: 'Drei Kugeln cremiges Erdbeereis mit frischen Erdbeeren und einer Sahnehaube.',
            kategorie: 'Nachspeise',
            preis: 3.50,
            url: 'eis',
            bild: '/bilder/produkte/eis.jpg',
            extras: [
                {text: 'Schokosauce', preis: 0.80},
                {text: 'Extra Sahne', preis: 0.50}
            ]
        },
        {
            name: 'Lahmacun',
            beschreibung: 'TÃ¼rkische Pizza mit wÃ¼rzigem Hackfleischbelag, serviert mit frischem Salat.',
            kategorie: 'Hauptgericht',
            preis: 5.50,
            url: 'lahmacun',
            bild: '/bilder/produkte/lahmacun.jpg',
            extras: [
                {text: 'Mit SchafskÃ¤se', preis: 1.00},
                {text: 'Knoblauchsauce', preis: 0.30}
            ]
        },
        {
            name: 'Lasagne',
            beschreibung: 'Hausgemachte Schichtnudeln mit Bolognese-Sauce und goldbraunem KÃ¤se Ã¼berbacken.',
            kategorie: 'Hauptgericht',
            preis: 9.20,
            url: 'lasagne',
            bild: '/bilder/produkte/lasagne.jpg',
            extras: []
        },
        {
            name: 'Schokoladen Muffin',
            beschreibung: 'Flauschiger Muffin mit flÃ¼ssigem Schokoladenkern und SchokostÃ¼ckchen.',
            kategorie: 'Nachspeise',
            preis: 3.20,
            url: 'muffin',
            bild: '/bilder/produkte/muffin.jpg',
            extras: []
        },
        {
            name: 'Pizza Original',
            beschreibung: 'Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum.',
            kategorie: 'Hauptgericht',
            preis: 8.50,
            url: 'pizza',
            bild: '/bilder/produkte/pizza.jpg',
            extras: [
                {text: 'Extra KÃ¤se', preis: 1.50},
                {text: 'Salami', preis: 1.20}
            ]
        },
        {
            name: 'SÃ¼ÃŸkartoffel Pommes',
            beschreibung: 'Knusprig frittierte SÃ¼ÃŸkartoffelstÃ¤bchen mit hausgemachtem Avocado-Dip.',
            kategorie: 'Hauptgericht',
            preis: 4.80,
            url: 'pommes',
            bild: '/bilder/produkte/pommes.jpg',
            extras: [
                {text: 'TrÃ¼ffel-Mayonnaise', preis: 1.20}
            ]
        }
    ]
};
export default jsondb;
