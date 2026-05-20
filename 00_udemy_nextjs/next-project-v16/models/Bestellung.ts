//root/models/Bestellung.ts
/**
 * Persistenzmodell fuer MongoDB, definiert Dokumentstruktur, Validierung und Collection-Verhalten im Shop-Domainkontext.
 * Mongoose Schema-Definitionen, Feldrestriktionen, Subdokumente, Model-Caching ueber mongoose.models oder models Pattern.
 * Input Anwendungsdaten aus API oder Server Components, Logic Schema-Validierung und Mapping, Output gespeicherte oder geladene Dokumente.
 * Next.js Besonderheit serverseitige Nutzung in API Routes und Route Handlers, verhindert Recompile-Model-Konflikte im Dev-Modus.
 */

import mongoose, {Schema, model, models, Document} from "mongoose";
export interface IBestellung extends Document {
    kunde: string;
    adresse: string;
    betrag: number;
    status: number;
    zahlung: number;
    archiviert: boolean;
    produkte: IBestelltesProdukt[];
}
interface IBestelltesProdukt {
    name: string;
    menge: number;
    extras: string[];
}
const BestellungSchema = new Schema({
    kunde: {type: String, required: true, maxlength: 100},
    adresse: {type: String, required: true, maxlength: 200},
    betrag: {type: Number, required: true},
    status: {type: Number, default: 0},
    zahlung: {type: Number, required: true},
    archiviert: {type: Boolean, default: false},
    produkte: [
        {
            name: {type: String, required: true},
            menge: {type: Number, required: true},
            extras: [{type: String}]
        }
    ]
}, {timestamps: true});
export default models.Bestellung || model<IBestellung>("Bestellung", BestellungSchema);
