//root/store/useWarenkorbStore.ts
/**
 * Quellcodedatei mit klar abgegrenzter Teilverantwortung innerhalb der Next.js-Anwendung, wartbar ueber modulare Struktur.
 * React- und JavaScript beziehungsweise TypeScript-Konzepte, modulare Imports, funktionale Implementierung und kontrollierte Seiteneffekte.
 * Input aus Props, Route, Store oder Request, Logic in Funktionen und Bedingungen, Output als UI, JSON oder Persistenzoperation.
 * Next.js Besonderheit Integration in App-Router Dateikonvention, Routing- und Rendering-Lebenszyklus.
 */

import {create} from 'zustand';
interface WarenkorbItem {
    warenkorbId: string;
    _id: string;
    name: string;
    preis: number;
    extras: any[];
    menge: number;
    bild: string;
    url: string;
}
interface WarenkorbState {
    produkte: WarenkorbItem[];
    wAnzahl: number;
    gesamtbetrag: number;
    addProdukt: (produkt: Omit<WarenkorbItem, 'warenkorbId'>) => void;
    loescheProdukt: (warenkorbId: string) => void;
    leeren: () => void;
}
export const useWarenkorbStore = create<WarenkorbState>((set) => ({
    produkte: [],
    wAnzahl: 0,
    gesamtbetrag: 0,
    leeren: () => set({
        produkte: [],
        wAnzahl: 0,
        gesamtbetrag: 0
    }),
    addProdukt: (neuItem) => set((state) => {
        const warenkorbId = crypto.randomUUID();
        const neueProdukte = [...state.produkte, {...neuItem, warenkorbId}];
        return {
            produkte: neueProdukte,
            wAnzahl: neueProdukte.length,
            gesamtbetrag: state.gesamtbetrag + (neuItem.preis * neuItem.menge)
        };
    }),
    loescheProdukt: (warenkorbId) => set((state) => {
        const produktZuEntfernen = state.produkte.find(p => p.warenkorbId === warenkorbId);
        if (!produktZuEntfernen)
            return state;
        const gefilterteProdukte = state.produkte.filter(p => p.warenkorbId !== warenkorbId);
        return {
            produkte: gefilterteProdukte,
            wAnzahl: gefilterteProdukte.length,
            gesamtbetrag: state.gesamtbetrag - (produktZuEntfernen.preis * produktZuEntfernen.menge)
        };
    }),
}));
