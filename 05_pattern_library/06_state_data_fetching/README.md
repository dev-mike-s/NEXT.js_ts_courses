# 06 State Data Fetching

State ist nicht gleich State.

## Drei Arten

- UI-State: Modal offen, Tab aktiv, Input fokussiert.
- Server-State: Daten aus API oder Datenbank.
- Form-State: aktuelle Eingaben vor dem Absenden.

## Regel

Vermische diese Arten nicht unnoetig.

Ein `useState` fuer ein offenes Dropdown ist okay.
Ein `useState` als Ersatz fuer Serverdaten-Caching wird schnell teuer.

## Gute Suchbegriffe

- `loading state`
- `error state`
- `empty state`
- `server state`
- `client state`
- `optimistic update`
