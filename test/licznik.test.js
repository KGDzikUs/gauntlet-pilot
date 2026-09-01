import { test } from "node:test";
import assert from "node:assert/strict";

import { suma, srednia, mediana } from "../src/licznik.js";

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

test("mediana nieparzystej liczby elementów to element środkowy", () => {
  assert.equal(mediana([1, 2, 3]), 2);
});

test("mediana jednoelementowej tablicy to jej jedyny element", () => {
  assert.equal(mediana([5]), 5);
});

test("mediana parzystej liczby elementów to średnia dwóch środkowych", () => {
  assert.equal(mediana([1, 2, 3, 4]), 2.5);
});

test("mediana dwuelementowej tablicy to średnia obu elementów", () => {
  assert.equal(mediana([1, 3]), 2);
});

test("mediana sortuje wejście przed wyborem środka", () => {
  assert.equal(mediana([3, 1, 2]), 2);
});

test("mediana sortuje wejście także przy parzystej liczbie elementów", () => {
  assert.equal(mediana([10, 2, 1, 3]), 2.5);
});

test("mediana porównuje liczby numerycznie, nie leksykograficznie", () => {
  assert.equal(mediana([10, 9, 1]), 9);
});

test("mediana działa dla wartości ujemnych", () => {
  assert.equal(mediana([-5, -1, -3]), -3);
});

test("mediana z pustej tablicy jest błędem, nie zerem", () => {
  assert.throws(() => mediana([]), RangeError);
});

test("mediana nie modyfikuje przekazanej tablicy o nieparzystej długości", () => {
  const dane = [3, 1, 2];
  mediana(dane);
  assert.deepEqual(dane, [3, 1, 2]);
});

test("mediana nie modyfikuje przekazanej tablicy o parzystej długości", () => {
  const dane = [10, 2, 1, 3];
  mediana(dane);
  assert.deepEqual(dane, [10, 2, 1, 3]);
});
