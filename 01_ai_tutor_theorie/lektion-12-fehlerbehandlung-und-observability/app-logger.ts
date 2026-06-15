//root/lektion-12-fehlerbehandlung-und-observability/app-logger.ts
/*
  Strukturierter Logger: JSON-Logs lassen sich in Cloud-Log-Tools nach level, message und meta-Feldern filtern.
  Feature-Historie: Strukturierte Logs sind kein Next.js-Feature, sondern ein etabliertes Backend-/Cloud-Pattern.
*/

type LogLevel = "info" | "warn" | "error";

export function log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
  // Strukturierte Logs fuer bessere Filterbarkeit in Cloud Log Tools.
  console.log(JSON.stringify({
    ts: new Date().toISOString(),
    level,
    message,
    meta: meta ?? {},
  }));
}


