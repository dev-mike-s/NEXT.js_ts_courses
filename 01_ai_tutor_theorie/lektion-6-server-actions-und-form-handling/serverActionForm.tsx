//root/lektion-6-server-actions-und-form-handling/serverActionForm.tsx
// @ts-nocheck

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
