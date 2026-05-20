//root/pages/api/index.js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt statische API-Pfade und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import {pullover} from '../../data/artikel';

export default function handler(req, res) {

    res.status(200).json(pullover);
}
