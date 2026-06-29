// Pattern: Route Handler mit Validierung am Rand
// Ziel: request.json() bleibt unknown, bis Zod validiert hat.

//@ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createNoteSchema = z.object({
  title: z.string().trim().min(1).max(120),
  body: z.string().trim().max(5000).optional(),
});

export async function POST(request: NextRequest) {
  const rawBody: unknown = await request.json();
  const parsedBody = createNoteSchema.safeParse(rawBody);

  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const payload = parsedBody.data;

  return NextResponse.json(
    {
      id: "example-id",
      title: payload.title,
    },
    { status: 201 }
  );
}
