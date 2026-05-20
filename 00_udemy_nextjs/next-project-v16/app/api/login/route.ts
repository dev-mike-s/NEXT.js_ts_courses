//root/app/api/login/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit statischen Segmentpfaden fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {NextResponse} from "next/server";
import * as cookie from "cookie";

export async function POST(req: Request) {
    try {
        const {benutzer, passwort} = await req.json();
        if (benutzer === process.env.ADMIN_BENUTZER &&
            passwort === process.env.ADMIN_PASSWORT) {

            const response = NextResponse.json("Erfolgreich", {status: 200});

            response.headers.set("Set-Cookie", cookie.serialize("token", process.env.TOKEN!, {
                maxAge: 3600,
                sameSite: "strict",
                path: "/",
                httpOnly: true,
            }));

            return response;
        }
        return NextResponse.json("Zugriff verweigert", {status: 401});
    }
    catch (error) {
        return NextResponse.json("Fehler", {status: 500});
    }
}
