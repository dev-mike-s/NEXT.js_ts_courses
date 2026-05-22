//root/lektion-15-webhooks-jobs-und-queue-grundlagen/webhook-route.ts
// @ts-nocheck

// app/api/webhooks/provider/route.ts

export const runtime = "nodejs";

export async function POST(request: Request) {
  // Signaturpruefung ist Pflicht in echter Produktion.
  // Hier nur Demo-Parsing.
  const payload = await request.json();

  // In echten Apps: Event in Queue schreiben statt schwerer Sync-Logik.
  return Response.json({ok: true, receivedType: payload?.type ?? "unknown"}, {status: 202});
}
