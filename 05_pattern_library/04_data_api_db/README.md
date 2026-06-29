# 04 Data API DB

Dieser Bereich ist fuer alles, was zwischen API und Datenbank vermittelt.

## Problem

In Junior-Projekten landet Prisma oft direkt ueberall:

- in Pages
- in Komponenten
- in Route Handlern mit viel Zusatzlogik
- in Tests ohne klare Grenze

Das ist fuer kleine Apps okay, wird aber schnell unuebersichtlich.

## Bessere Suchanker

- `repository`: spricht mit Prisma.
- `service`: entscheidet fachliche Regeln.
- `mapper`: wandelt API/Form/DB-Formen um.
- `schema`: validiert Input.
