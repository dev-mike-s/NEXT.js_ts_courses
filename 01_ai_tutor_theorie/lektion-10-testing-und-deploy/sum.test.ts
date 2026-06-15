//root/lektion-10-testing-und-deploy/sum.test.ts
/*
  Kleinster moeglicher Unit-Test: Eine reine Funktion bekommt feste Eingaben und der Test beschreibt das erwartete Ergebnis.
  Feature-Historie: test/expect kommen vom Test Runner, z.B. Jest oder Vitest, nicht von Next.js. Das Muster ist zeitlos und nicht brandneu.
*/

function sum(a: number, b: number) {
  return a + b;
}

test("sum addiert korrekt", () => {
  // expect(...).toBe(...) = exakter Gleichheitsvergleich.
  expect(sum(2, 3)).toBe(5);
});


