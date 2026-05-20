//root/app/api/pullover/[id]/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit dynamischen Segmentparametern fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {pullover} from '@/data/artikel';
import {NextResponse} from 'next/server';

interface RouteProps {

    params: Promise<{
        id: string;
    }>;
}
export async function GET(request: Request, {params}: RouteProps) {

    const resolvedParams = await params;
    const id = resolvedParams.id;
    const ausgabe = pullover.find(p => p.id === id);

    if (ausgabe) {
        return NextResponse.json(ausgabe);
    }
    else {
        return NextResponse.json({text: 'ID nicht vorhanden'}, {status: 404});
    }
}
