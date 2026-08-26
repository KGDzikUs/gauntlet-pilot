import { test } from "node:test";
import assert from "node:assert/strict";

import { suma, srednia } from "../src/licznik.js";

test("suma pustej tablicy wynosi zero", () => {
  assert.equal(suma([]), 0);
});

test("suma dodaje wszystkie elementy", () => {
  assert.equal(suma([1, 2, 3, 4]), 10);
});

test("suma odrzuca wejście, które nie jest tablicą", () => {
  assert.throws(() => suma("1,2,3"), TypeError);
});

test("srednia liczy średnią arytmetyczną", () => {
  assert.equal(srednia([2, 4, 6]), 4);
});

test("srednia z pustej tablicy jest błędem, nie zerem", () => {
  // Kontrola przeciwna do „zwróć 0": zero jest poprawnym wynikiem dla [0],
  // więc użycie go jako sygnału braku danych zlewa dwa różne stany.
  assert.throws(() => srednia([]), RangeError);
});

test("suma zachowuje sie poprawnie dla liczb ujemnych", () => {
  assert.equal(suma([-2, 5]), 3);
});
