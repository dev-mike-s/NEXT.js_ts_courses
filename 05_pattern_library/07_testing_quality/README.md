# 07 Testing Quality

Tests sollen nicht alles testen. Sie sollen dir sagen, ob ein wichtiges Pattern noch stimmt.

## Testarten

- Contract-Test: Schema, Mapper, Defaults.
- Component-Test: sichtbares Verhalten.
- Route-Test: HTTP-Status und Payloads.
- Service-Test: fachliche Entscheidungen.

## Faustregel

Je zentraler ein Helfer ist, desto eher lohnt sich ein kleiner Unit-Test.
Je mehr User-Verhalten betroffen ist, desto eher lohnt sich ein Component- oder Integration-Test.
