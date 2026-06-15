//root/lektion-6-server-actions-und-form-handling/serverActionWithSubmitEvent.tsx
/*
  Client-gesteuertes Formular mit Server Action: Die UI verhindert den Standard-Submit und zeigt danach einen Status an.
  Feature-Historie: Der Client-Submit-Handler ist klassisches React; der direkte Aufruf einer Server Action ist modernes Next.js, stabil ab Next.js 14.
*/

"use client";

import {FormEvent, useState} from "react";
import {submitContact} from "./actions";

export default function ServerActionWithSubmitEvent() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Pattern B:
    // Payload lokal formen, dann typsicher an die Server Action uebergeben.
    const result = await submitContact({
      name: String(formData.get("name") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    setStatus(result.ok ? "Gesendet" : result.error ?? "Fehler");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <textarea name="message" placeholder="Nachricht" />
      <button type="submit">Absenden</button>
      <p>{status}</p>
    </form>
  );
}


