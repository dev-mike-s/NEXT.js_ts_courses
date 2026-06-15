//root/lektion-9-typescript-patterns-fuer-nextjs/params-types.ts
/*
  Typmuster fuer dynamische App-Router-Params: Die konkrete Route legt fest, welche Felder existieren.
  Feature-Historie: Promise-params passen zum Next.js-15-Umstieg auf Async Request APIs. Dynamische Routen selbst gibt es in Next.js schon lange; App-Router-Params ab Next.js 13.
*/

// Generischer Helfertyp fuer async params in App Router Kontexten.
export type AsyncParams<T> = Promise<T>;

export type PostParams = {
  id: string;
};

export async function readPostId(params: AsyncParams<PostParams>) {
  const {id} = await params;
  return id;
}


