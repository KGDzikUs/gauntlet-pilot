/**
 * Celowo trywialna jednostka pracy.
 *
 * Pilot bada Gauntleta, nie ten kod. Funkcja istnieje po to, żeby było co
 * zmienić i co zwalidować — a błąd w niej ma być widoczny w teście, a nie
 * ukryty pod brakiem testów.
 */

export function suma(liczby) {
  if (!Array.isArray(liczby)) {
    throw new TypeError("suma oczekuje tablicy");
  }
  return liczby.reduce((acc, n) => acc + n, 0);
}

export function srednia(liczby) {
  if (liczby.length === 0) {
    // Zero elementów nie ma średniej. Zwrócenie 0 udawałoby wynik.
    throw new RangeError("srednia z pustej tablicy nie istnieje");
  }
  return suma(liczby) / liczby.length;
}
