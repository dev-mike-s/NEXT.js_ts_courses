//root/lektion-9-typescript-patterns-fuer-nextjs/api-response-types.ts
// @ts-nocheck

// Discriminated Union fuer konsistente API-Antworten.
export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiError = {
  ok: false;
  error: string;
};

export type ApiResult<T> = ApiSuccess<T> | ApiError;

export function toResponse<T>(result: ApiResult<T>) {
  // result.ok steuert den Statuscode zentral.
  return Response.json(result, {status: result.ok ? 200 : 400});
}
