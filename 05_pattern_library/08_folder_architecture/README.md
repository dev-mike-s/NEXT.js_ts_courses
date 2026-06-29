# 08 Folder Architecture

Ordner sollen dir beim Denken helfen.

## Layer-first

```txt
src/
  components/
  models/
  lib/
  app/
```

Gut fuer kleine Projekte und Lernrepos.

## Feature-first

```txt
src/
  features/
    feedback/
      components/
      models/
      api/
```

Gut, wenn eine Domain groesser wird.

## Empfehlung fuer dich

Fuer `0_NEXT.JS_TS_COURSES`: layer-first, weil du Patterns schnell finden willst.

Fuer echte Apps ab mittlerer Groesse: feature-first pruefen, sobald ein Feature eigene Komponenten, API, Tests und Models bekommt.
