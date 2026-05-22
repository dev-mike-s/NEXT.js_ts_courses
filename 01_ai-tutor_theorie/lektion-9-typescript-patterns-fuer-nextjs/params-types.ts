//root/lektion-9-typescript-patterns-fuer-nextjs/params-types.ts
// @ts-nocheck

// Generischer Helfertyp fuer async params in App Router Kontexten.
export type AsyncParams<T> = Promise<T>;

export type PostParams = {
  id: string;
};

export async function readPostId(params: AsyncParams<PostParams>) {
  const {id} = await params;
  return id;
}
