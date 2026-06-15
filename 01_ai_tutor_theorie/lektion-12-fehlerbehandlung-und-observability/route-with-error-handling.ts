//root/lektion-12-fehlerbehandlung-und-observability/route-with-error-handling.ts
/*
  Route Handler mit try/catch: Interne Details werden geloggt, der Client bekommt nur eine stabile Fehlermeldung.
  Feature-Historie: try/catch ist klassisch; Route Handlers gehoeren zum App Router ab Next.js 13.2, stabil im App-Router-Kontext ab 13.4.
*/

import {log} from "./app-logger";

export async function GET() {
  try {
    // Simulierter Business-Code
    return Response.json({ok: true, data: {status: "healthy"}});
  } catch (error) {
    log("error", "Health route failed", {
      error: error instanceof Error ? error.message : "unknown",
    });

    return Response.json({ok: false, error: "Interner Fehler"}, {status: 500});
  }
}


