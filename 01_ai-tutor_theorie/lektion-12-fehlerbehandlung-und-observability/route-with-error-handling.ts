//root/lektion-12-fehlerbehandlung-und-observability/route-with-error-handling.ts
// @ts-nocheck

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
