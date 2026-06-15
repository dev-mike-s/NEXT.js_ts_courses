//root/lektion-6-server-actions-und-form-handling/actions.ts
/*
  Server Actions laufen auf dem Server und halten die Validierung zentral, egal ob Daten als Objekt oder FormData ankommen.
  Feature-Historie: Server Actions waren in Next.js 13.4 Alpha und wurden in Next.js 14 stabil. In React selbst gehoeren Actions/Server Actions zur React-19-Generation.
*/

"use server";

// Diese Datei laeuft serverseitig. Keine Browser APIs verwenden.

type ContactPayload = {
  name: string;
  message: string;
};

export async function submitContact(payload: ContactPayload) {
  if (!payload.name || !payload.message) {
    return {ok: false, error: "Name und Nachricht sind Pflicht."};
  }

  // In echten Apps wuerde hier Persistenz passieren (DB, Queue, Mail).
  return {ok: true, info: `Von ${payload.name}: ${payload.message}`};
}

export async function submitContactFromFormData(formData: FormData) {
  // Mapping FormData -> typisiertes DTO.
  const payload: ContactPayload = {
    name: String(formData.get("name") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  return submitContact(payload);
}


