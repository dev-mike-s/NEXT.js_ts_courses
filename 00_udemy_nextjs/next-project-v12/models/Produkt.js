//root/models/Produkt.js
/**
 * Persistenzmodell fuer MongoDB, definiert Dokumentstruktur, Validierung und Collection-Verhalten im Shop-Domainkontext.
 * Mongoose Schema-Definitionen, Feldrestriktionen, Subdokumente, Model-Caching ueber mongoose.models oder models Pattern.
 * Input Anwendungsdaten aus API oder Server Components, Logic Schema-Validierung und Mapping, Output gespeicherte oder geladene Dokumente.
 * Next.js Besonderheit serverseitige Nutzung in API Routes und Route Handlers, verhindert Recompile-Model-Konflikte im Dev-Modus.
 */

import mongoose from "mongoose";
const ProduktSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    beschreibung: {
        type: String,
        required: true,
        maxlength: 250
    },
    kategorie: {
        type: String,
        required: true,
        maxlength: 30
    },
    preis: {
        type: Number,
        required: true,
        maxlength: 50
    },
    url: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true,
    },
    bild: {
        type: String,
        required: true,
    },
    extras: {
        type: [
            {
                text: {
                    type: String,
                    required: true
                },
                preis: {
                    type: Number,
                    required: true,
                }
            }
        ]
    },
});
export default mongoose.models.Produkt || mongoose.model("Produkt", ProduktSchema);
