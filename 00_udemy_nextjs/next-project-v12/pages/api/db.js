//root/pages/api/db.js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt statische API-Pfade und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import dbConnect from '../../utils/mongodb';
import jsondb from '../../jsondb/produkte';
import Produkt from '../../models/Produkt';

export default async function handler(req, res) {

    try {
        await dbConnect();
        await Produkt.deleteMany();
        await Produkt.insertMany(jsondb.produkte);

        const produkte = await Produkt.find();
        res.send(produkte);
    }
    catch (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
}
