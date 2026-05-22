//root/lektion-14-validierung-security-und-input-hygiene/safe-input-route.ts
// @ts-nocheck

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
