//root/pages/api/bestellungen/[nr].js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt dynamische API-Segmentparameter und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import dbConnect from "../../../utils/mongodb";
import Bestellung from "../../../models/Bestellung";

export default async function handler(req, res) {

    const {method, query: {nr}} = req;
    await dbConnect();

    if (method === "GET") {
        try {
            const bestellung = await Bestellung.findById(nr);
            res.status(200).json(bestellung);
        }
        catch (error) {
            res.status(200).json({error});
        }
    }
    if (method === "PUT") {
        try {
            const bestellung = await Bestellung.findByIdAndUpdate(nr, req.body, {new: true});
            res.status(200).json(bestellung);
        }
        catch (error) {
            res.status(500).json({error});
        }
    }
    if (method === "DELETE") {
        try {
            const bestellung = await Bestellung.findByIdAndDelete(nr);
            res.status(200).json(bestellung);
        }
        catch (error) {
            res.status(500).json({error});
        }
    }
}
