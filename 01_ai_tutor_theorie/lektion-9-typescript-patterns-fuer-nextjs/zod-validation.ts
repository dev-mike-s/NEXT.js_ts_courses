//root/lektion-9-typescript-patterns-fuer-nextjs/zod-validation.ts
// @ts-nocheck

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
