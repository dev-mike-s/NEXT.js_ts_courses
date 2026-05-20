//root/redux/warenkorbSlice.js
/**
 * Quellcodedatei mit klar abgegrenzter Teilverantwortung innerhalb der Next.js-Anwendung, wartbar ueber modulare Struktur.
 * React- und JavaScript beziehungsweise TypeScript-Konzepte, modulare Imports, funktionale Implementierung und kontrollierte Seiteneffekte.
 * Input aus Props, Route, Store oder Request, Logic in Funktionen und Bedingungen, Output als UI, JSON oder Persistenzoperation.
 * Next.js Besonderheit Integration in Pages-Router Dateikonvention, Routing- und Rendering-Lebenszyklus.
 */

import {createSlice} from '@reduxjs/toolkit';

const warenkorbSlice = createSlice({

    name: "warenkorb",
    initialState: {
        produkte: [],
        gesamtbetrag: 0,
        wAnzahl: 0,
    },
    reducers: {
        addProdukte: (state, action) => {
            state.produkte.push(action.payload);
            state.wAnzahl += 1;
            state.gesamtbetrag += action.payload.preis * action.payload.menge;
        },
        leeren: (state) => {
            state.produkte = [];
            state.wAnzahl = 0;
            state.gesamtbetrag = 0;
        },
        loescheProdukt: (state, action) => {
            const leftProdukte = state.produkte.filter((produkt) => produkt._id !== action.payload._id);
            state.produkte = leftProdukte;
            state.wAnzahl -= 1;
            state.gesamtbetrag -= action.payload.preis * action.payload.menge;
        }
    },
});

export const {loescheProdukt, addProdukte, leeren} = warenkorbSlice.actions;
export default warenkorbSlice.reducer;
