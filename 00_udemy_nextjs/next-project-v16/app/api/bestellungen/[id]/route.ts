//root/app/api/bestellungen/[id]/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit dynamischen Segmentparametern fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {NextResponse} from "next/server";
import dbConnect from "@/utils/mongodb";
import Bestellung from "@/models/Bestellung";

type RouteParams = {
    params: Promise<{
        id: string;
    }>;
};
export async function PUT(request: Request, {params}: RouteParams) {
    try {
        await dbConnect();
        const {id} = await params;
        const body = await request.json();
        const update = await Bestellung.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if (!update) {
            return NextResponse.json({error: "Bestellung nicht gefunden"}, {status: 404});
        }
        return NextResponse.json(update, {status: 200});
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
export async function DELETE(request: Request, {params}: RouteParams) {
    try {
        await dbConnect();
        const {id} = await params;
        const geloescht = await Bestellung.findByIdAndDelete(id);
        if (!geloescht) {
            return NextResponse.json({error: "Bestellung nicht gefunden"}, {status: 404});
        }
        return NextResponse.json({message: "Erfolgreich gelöscht"}, {status: 200});
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
