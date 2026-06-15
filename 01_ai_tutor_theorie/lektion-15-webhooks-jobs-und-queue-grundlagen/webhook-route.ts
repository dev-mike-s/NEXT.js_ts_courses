//root/lektion-15-webhooks-jobs-und-queue-grundlagen/webhook-route.ts
/*
  Webhook-Grundmuster: Ein externer Provider ruft die Route auf; echte Apps pruefen Signaturen und verarbeiten Events oft asynchron.
  Feature-Historie: Webhooks und HTTP 202 sind aeltere Backend-Patterns. route.ts gehoert zu Next.js Route Handlers ab 13.2, stabil im App Router ab 13.4.
*/

// app/api/webhooks/provider/route.ts

export const runtime = "nodejs";

export async function POST(request: Request) {
  // Signaturpruefung ist Pflicht in echter Produktion.
  // Hier nur Demo-Parsing.
  const payload = await request.json();

  // In echten Apps: Event in Queue schreiben statt schwerer Sync-Logik.
  return Response.json({ok: true, receivedType: payload?.type ?? "unknown"}, {status: 202});
}


