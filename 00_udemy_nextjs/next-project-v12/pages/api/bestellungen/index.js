//root/pages/api/bestellungen/index.js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt statische API-Pfade und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import dbConnect from "../../../utils/mongodb";
import Bestellung from "../../../models/Bestellung";

export default async function handler(req, res) {

    const {method} = req;
    await dbConnect();

    if (method === "GET") {
        try {
            const bestellungen = await Bestellung.find();
            res.status(200).json(bestellungen);
        }
        catch (error) {
            res.status(500).json({error});
        }
    }
    if (method === "POST") {
        try {
            const bestellung = await Bestellung.create(req.body);
            res.status(201).json(bestellung);
        }
        catch (error) {
            res.status(500).json({error});
        }
    }
}
