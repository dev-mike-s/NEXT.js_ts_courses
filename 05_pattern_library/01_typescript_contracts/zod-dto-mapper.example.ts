// Pattern: Zod Schema + DTO + Mapper
// Ziel: Client und Server teilen dieselbe Datenform, aber Mapper halten Umwandlungen sichtbar.

//@ts-nocheck

import { z } from "zod";

const ratingSchema = z.number().int().min(1).max(5);

export const feedbackFormSchema = z.object({
  dish: z.string().trim().min(1).max(200),
  dishRating: ratingSchema,
  comment: z.string().trim().max(1000).optional(),
});

export const feedbackApiSchema = feedbackFormSchema.extend({
  restaurantSlug: z.string().trim().min(1).max(120),
});

export type FeedbackFormInput = z.infer<typeof feedbackFormSchema>;
export type FeedbackApiPayload = z.infer<typeof feedbackApiSchema>;

export const defaultFeedbackFormInput: FeedbackFormInput = {
  dish: "",
  dishRating: 5,
  comment: "",
};

export function toFeedbackApiPayload(
  input: FeedbackFormInput,
  restaurantSlug: string
): FeedbackApiPayload {
  return {
    ...input,
    restaurantSlug,
  };
}

export function emptyStringToNull(value: string | undefined): string | null {
  const trimmedValue = value?.trim() ?? "";
  return trimmedValue.length > 0 ? trimmedValue : null;
}
