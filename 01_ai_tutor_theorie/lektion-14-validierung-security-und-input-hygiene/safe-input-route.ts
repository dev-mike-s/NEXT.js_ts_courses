//root/lektion-14-validierung-security-und-input-hygiene/safe-input-route.ts
/*
  Eingaben von aussen werden zuerst validiert, bevor die Route fachlich mit ihnen weiterarbeitet.
  Feature-Historie: Zod ist eine externe Library, kein Next.js-Feature. Route Handlers sind App-Router-Style ab Next.js 13.2.
*/

import {z} from "zod";

const ContactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  const raw = await request.json();
  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    return Response.json({ok: false, error: "Validation fehlgeschlagen"}, {status: 400});
  }

  return Response.json({ok: true, data: parsed.data}, {status: 201});
}


