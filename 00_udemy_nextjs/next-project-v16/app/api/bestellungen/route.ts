//root/app/api/bestellungen/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit statischen Segmentpfaden fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {NextResponse} from "next/server";
import dbConnect from "@/utils/mongodb";
import Bestellung from "@/models/Bestellung";

export async function GET() {
    try {
        await dbConnect();
        const bestellungen = await Bestellung.find({}).sort({createdAt: -1});
        return NextResponse.json(bestellungen, {status: 200});
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const neueBestellung = await Bestellung.create(body);
        return NextResponse.json(neueBestellung, {status: 201});
    }
    catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
