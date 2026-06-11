//root/lektion-10-testing-und-deploy/sum.test.ts
// @ts-nocheck

function sum(a: number, b: number) {
  return a + b;
}

test("sum addiert korrekt", () => {
  // expect(...).toBe(...) = exakter Gleichheitsvergleich.
  expect(sum(2, 3)).toBe(5);
});
