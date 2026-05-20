//root/models/Bestellung.js
/**
 * Persistenzmodell fuer MongoDB, definiert Dokumentstruktur, Validierung und Collection-Verhalten im Shop-Domainkontext.
 * Mongoose Schema-Definitionen, Feldrestriktionen, Subdokumente, Model-Caching ueber mongoose.models oder models Pattern.
 * Input Anwendungsdaten aus API oder Server Components, Logic Schema-Validierung und Mapping, Output gespeicherte oder geladene Dokumente.
 * Next.js Besonderheit serverseitige Nutzung in API Routes und Route Handlers, verhindert Recompile-Model-Konflikte im Dev-Modus.
 */

import mongoose from "mongoose";
const BestellungSchema = new mongoose.Schema({
    kunde: {
        type: String,
        required: true,
        maxlength: 100
    },
    adresse: {
        type: String,
        required: true,
        maxlength: 200
    },
    betrag: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    zahlung: {
        type: Number,
        required: true,
    },
    produkte: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                menge: {
                    type: Number,
                    required: true
                },
                extras: {
                    type: [
                        {
                            type: String,
                        }
                    ],
                }
            }
        ]
    }
}, {timestamps: true});
export default mongoose.models.Bestellung || mongoose.model("Bestellung", BestellungSchema);
