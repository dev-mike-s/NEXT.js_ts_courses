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
            beschreibung: 'american style burger',
            kategorie: 'Hauptgericht',
            preis: 6.99,
            url: 'burger',
            bild: '/bilder/produkte/burger.jpg',
            extras: [
                {text: 'Extra KÃ¤se', preis: 1.00},
                {text: 'Bacon', preis: 1.50},
                {text: 'Doppelt Fleisch', preis: 2.50}
            ]
        },
        {
            name: 'Coca Cola',
            beschreibung: 'EisgekÃ¼hlte Cola',
            kategorie: 'Trinken',
            preis: 1.99,
            url: 'cola',
            bild: '/bilder/produkte/cola.jpg'
        },
        {
            name: 'Erdbeer Eis',
            beschreibung: 'Eis mit Erdbeeren und Sahne',
            kategorie: 'Nachspeise',
            preis: 2.99,
            url: 'erdbeereis',
            bild: '/bilder/produkte/eis.jpg'
        },
        {
            name: 'Lahmacun',
            beschreibung: 'turkish style lahmacun',
            kategorie: 'Hauptgericht',
            preis: 4.50,
            url: 'lahmacun',
            bild: '/bilder/produkte/lahmacun.jpg'
        },
        {
            name: 'Lasagne',
            beschreibung: 'Lasagne aus Italien',
            kategorie: 'Hauptgericht',
            preis: 8.50,
            url: 'lasagne',
            bild: '/bilder/produkte/lasagne.jpg'
        },
        {
            name: 'Schokoladen Muffin',
            beschreibung: 'Sehr sÃ¼ÃŸer Schoko Muffin',
            kategorie: 'Nachspeise',
            preis: 3.20,
            url: 'muffin',
            bild: '/bilder/produkte/muffin.jpg'
        },
        {
            name: 'Pizza Original',
            beschreibung: '4 season Pizza',
            kategorie: 'Hauptgericht',
            preis: 7.50,
            url: 'pizza',
            bild: '/bilder/produkte/pizza.jpg',
            extras: [
                {text: 'Extra KÃ¤se', preis: 1.20},
                {text: 'Scharf', preis: 0.00},
                {text: 'Knoblauch', preis: 0.50}
            ]
        },
        {
            name: 'SÃ¼ÃŸkartoffel Pommes',
            beschreibung: 'SÃ¼ÃŸkartoffel Pommes mit Dip',
            kategorie: 'Hauptgericht',
            preis: 4.80,
            url: 'pommes',
            bild: '/bilder/produkte/pommes.jpg'
        },
    ]
};
export default jsondb;
