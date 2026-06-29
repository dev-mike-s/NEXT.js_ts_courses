// Pattern: UI-Model fuer ein Formular
// Ziel: Feldliste zentral halten, Komponente rendert nur noch Feldtypen.

//@ts-nocheck

type Translation = {
  dish: string;
  dishRating: string;
  comment: string;
  submit: string;
};

type FeedbackField =
  | {
      kind: "text";
      name: "dish";
      label: string;
      placeholder: string;
    }
  | {
      kind: "rating";
      name: "dishRating";
      label: string;
      min: 1;
      max: 5;
    }
  | {
      kind: "textarea";
      name: "comment";
      label: string;
    };

type FeedbackFormUiModel = {
  title: string;
  submitLabel: string;
  fields: FeedbackField[];
};

export function createFeedbackFormUiModel(
  restaurantName: string,
  translation: Translation
): FeedbackFormUiModel {
  return {
    title: `Feedback - ${restaurantName}`,
    submitLabel: translation.submit,
    fields: [
      {
        kind: "text",
        name: "dish",
        label: translation.dish,
        placeholder: "z. B. Pizza Margherita",
      },
      {
        kind: "rating",
        name: "dishRating",
        label: translation.dishRating,
        min: 1,
        max: 5,
      },
      {
        kind: "textarea",
        name: "comment",
        label: translation.comment,
      },
    ],
  };
}

export function ExampleForm({ model }: { model: FeedbackFormUiModel }) {
  return (
    <form>
      <h1>{model.title}</h1>

      {model.fields.map((field) => {
        if (field.kind === "rating") {
          return (
            <label key={field.name}>
              {field.label}
              <input name={field.name} type="number" min={field.min} max={field.max} />
            </label>
          );
        }

        if (field.kind === "textarea") {
          return (
            <label key={field.name}>
              {field.label}
              <textarea name={field.name} />
            </label>
          );
        }

        return (
          <label key={field.name}>
            {field.label}
            <input name={field.name} placeholder={field.placeholder} />
          </label>
        );
      })}

      <button type="submit">{model.submitLabel}</button>
    </form>
  );
}
