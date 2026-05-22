//root/lektion-3-client-state-events-und-javascript/submitEventForm.tsx
// @ts-nocheck

"use client";

import {FormEvent} from "react";

type ContactPayload = {
  name: string;
  message: string;
};

export default function SubmitEventForm({onSend}: {onSend: (payload: ContactPayload) => Promise<void>}) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Verhindert den Browser-Standard (Seite neu laden).
    event.preventDefault();

    // FormData liest alle Felder aus dem Formular.
    const formData = new FormData(event.currentTarget);

    const payload: ContactPayload = {
      // Kurzschreibweise erklaert:
      // formData.get("name") kann string | File | null sein.
      // ?? "" -> falls null, nutze leerer String.
      // String(...) -> garantiert Typ string.
      name: String(formData.get("name") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    await onSend(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <textarea name="message" placeholder="Nachricht" />
      <button type="submit">Senden</button>
    </form>
  );
}
