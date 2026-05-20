//root/data/artikel.ts
/**
 * Statisches Datenmodul, liefert Artikel- oder Produktkatalog als zentrale In-Memory-Quelle fuer Demo und Seed.
 * ES-Module-Exports, optionale TypeScript-Interfaces, verschachtelte Objekt- und Array-Strukturen als Domain-Modell.
 * Input harte Literale in Arrays, Logic nur Strukturierung im Modul, Output konsumierbare Daten fuer UI, API und Seeder.
 * Next.js Besonderheit gleiche Daten koennen von Pages API Routes oder App Route Handlers serverseitig wiederverwendet werden.
 */

export interface Pullover {
    id: string;
    name: string;
    groesse: 's' | 'm' | 'l';
}
export const pullover: Pullover[] = [
    {id: '1', name: 'Wollpullover', groesse: 's'},
    {id: '2', name: 'Rollkragenpullover', groesse: 'm'},
    {id: '3', name: 'Kapuzenpullover', groesse: 'l'},
];
