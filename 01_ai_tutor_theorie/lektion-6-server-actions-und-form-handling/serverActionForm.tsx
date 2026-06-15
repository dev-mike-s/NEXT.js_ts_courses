//root/lektion-6-server-actions-und-form-handling/serverActionForm.tsx
/*
  Formular ohne eigenen Client-Handler: Next.js ruft die Server Action aus dem action-Attribut auf und uebergibt FormData.
  Feature-Historie: form action={serverAction} ist Server-Action-Pattern: Alpha in Next.js 13.4, stabil ab Next.js 14; es baut auf klassischen HTML-Formularen auf.
*/

// app/contact/page.tsx

import {submitContactFromFormData} from "./actions";

export default function ServerActionForm() {
  return (
    <form
      // Pattern A:
      // action bindet direkt eine Server Action an das Formular.
      action={submitContactFromFormData}
    >
      <input name="name" placeholder="Name" />
      <textarea name="message" placeholder="Nachricht" />
      <button type="submit">Absenden</button>
    </form>
  );
}


