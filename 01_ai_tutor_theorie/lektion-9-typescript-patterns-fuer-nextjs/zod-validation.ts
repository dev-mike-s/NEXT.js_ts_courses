//root/lektion-9-typescript-patterns-fuer-nextjs/zod-validation.ts
/*
  Zod verbindet Runtime-Validation mit TypeScript-Typen, damit Schema und Typ nicht auseinanderlaufen.
  Feature-Historie: Zod ist eine externe Runtime-Validation-Library. z.infer ist kein Next.js-Feature, sondern ein modernes TypeScript/Fullstack-Muster.
*/

import {z} from "zod";

// Runtime-Validierung + statische Typen aus einer Quelle.
export const CreateTaskSchema = z.object({
  title: z.string().min(3),
  priority: z.enum(["low", "medium", "high"]),
});

// infer erzeugt automatisch den TS-Typ aus dem Schema.
export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;

export async function parseTaskInput(raw: unknown): Promise<CreateTaskInput> {
  return CreateTaskSchema.parseAsync(raw);
}


