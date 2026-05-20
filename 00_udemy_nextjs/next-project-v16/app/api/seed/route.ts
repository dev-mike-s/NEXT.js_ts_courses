//root/app/api/seed/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit statischen Segmentpfaden fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {NextResponse} from "next/server";
import dbConnect from "@/utils/mongodb";
import Bestellung from "@/models/Bestellung";
import Produkt from "@/models/Produkt";
import jsondb from "@/jsondb/produkte";

export async function GET(request: Request) {

    const {searchParams} = new URL(request.url);
    const reset = searchParams.get("reset");

    try {
        await dbConnect();

        if (reset === "true") {

            await Produkt.deleteMany({});
            await Bestellung.deleteMany({});
        }
        const produktAnzahl = await Produkt.countDocuments();

        if (produktAnzahl === 0) {

            const produkteZumImportieren = jsondb.produkte.map((p) => ({
                ...p,
                extras: p.extras || []
            }));

            await Produkt.insertMany(produkteZumImportieren);
            return NextResponse.json({
                success: true,
                message: `${produkteZumImportieren.length} Produkte inklusive Extras erfolgreich importiert.`
            });
        }
        return NextResponse.json({
            message: "Produkte sind bereits vorhanden. Nutze ?reset=true zum Neu-Importieren."
        });
    }
    catch (error: any) {
        return NextResponse.json({success: false, error: error.message}, {status: 500});
    }
}
