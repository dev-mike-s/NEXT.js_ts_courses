//root/pages/api/login.js
/**
 * Serverseitiger API-Endpunkt im Pages Router, kapselt statische API-Pfade und Business-Logik fuer Datenzugriffe.
 * Node-Request-Handler-Signatur mit req und res, HTTP-Methodenswitch, Datenbank- oder In-Memory-Operationen, JSON-Responses.
 * Input HTTP-Request mit Body, Query und Cookies, Logic Validierung sowie CRUD oder Auth-Pruefung, Output Statuscode und JSON-Payload.
 * Next.js Besonderheit pages/api wird als server-only Bundle ausgefuehrt und vergroessert nicht das Client-Bundle.
 */

import * as cookie from "cookie";

export default function handler(req, res) {

    if (req.method === "POST") {

        const {benutzer, passwort} = req.body;

        if (benutzer === process.env.ADMIN_BENUTZER &&
            passwort === process.env.ADMIN_PASSWORT) {

            res.setHeader("Set-Cookie", cookie.serialize("token", process.env.TOKEN, {
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
                httpOnly: true,
            }));

            res.status(200).json("Erfolgreich");
        }
        else {
            res.status(400).json("Login fehlgeschlagen");
        }
    }
}
