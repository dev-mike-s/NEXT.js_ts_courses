//root/lektion-12-fehlerbehandlung-und-observability/app-logger.ts
// @ts-nocheck

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
