# 01 TypeScript Contracts

Hier liegen Beispiele fuer Typen, die ueber Grenzen gehen:

- Formular -> API
- API -> Datenbank
- Datenbank -> UI
- Server -> Client

## Regel

Ein Prisma-Model ist nicht automatisch ein UI-Model.
Ein Form-State ist nicht automatisch ein API-Payload.

Gib jeder Schicht einen eigenen Namen, wenn die Daten ueber eine Grenze gehen.

## Gute Dateinamen

- `feedback.contract.ts`
- `user.dto.ts`
- `order.mapper.ts`
- `api-result.ts`
- `form-defaults.ts`
