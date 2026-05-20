//root/app/api/pullover/route.ts
/**
 * Route-Handler im App Router, implementiert HTTP-Endpunkte mit statischen Segmentpfaden fuer Shop- und Admin-Prozesse.
 * Web Request Response API, benannte Methodenfunktionen GET POST PUT DELETE, NextResponse fuer serialisierte Antworten.
 * Input Request-Objekt inklusive JSON-Body, Params und SearchParams, Logic Validierung sowie DB-Operationen, Output JSON mit Status.
 * Next.js Besonderheit route.ts ersetzt API Routes im App Router, laeuft serverseitig und unterstuetzt Dynamic Segments.
 */

import {pullover} from '@/data/artikel';
import {NextResponse} from 'next/server';

export async function GET() {

    return NextResponse.json(pullover);
}
