//root/pages/api/[id].js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt dynamische API-Segmentparameter und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import {pullover} from '../../data/artikel';

export default function handler( {query: {id}}, res) {

    const ausgabe = pullover.filter(pullover => pullover.id === id);

    if (ausgabe.length > 0) {
        res.status(200).json(ausgabe[0]);
    }
    else {
        res.status(404).json({text: 'ID nicht vorhanden'});
    }
}
