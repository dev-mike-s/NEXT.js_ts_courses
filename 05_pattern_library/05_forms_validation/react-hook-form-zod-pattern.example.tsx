// Pattern: React Hook Form + Zod
// Ziel: Formular-State und Validierung sauber zusammenhalten.

//@ts-nocheck

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(1000),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

const defaultContactFormInput: ContactFormInput = {
  email: "",
  message: "",
};

export function ContactFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultContactFormInput,
  });

  async function onSubmit(input: ContactFormInput) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        E-Mail
        <input {...register("email")} />
      </label>
      {errors.email ? <p>{errors.email.message}</p> : null}

      <label>
        Nachricht
        <textarea {...register("message")} />
      </label>
      {errors.message ? <p>{errors.message.message}</p> : null}

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sendet..." : "Senden"}
      </button>
    </form>
  );
}
