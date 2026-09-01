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

export function mediana(liczby) {
  if (liczby.length === 0) {
    // Tak samo jak przy średniej: zero elementów nie ma mediany, a zwrócenie
    // jakiejkolwiek wartości udawałoby wynik tam, gdzie go nie ma.
    throw new RangeError("mediana z pustej tablicy nie istnieje");
  }
  // Kopiujemy przed sortowaniem, żeby nie mutować tablicy wywołującego — i
  // robimy to raz, wspólnie dla obu gałęzi długości, a nie osobno w każdej.
  // Komparator numeryczny jest konieczny: domyślny .sort() porównuje
  // leksykograficznie i dałby błędny porządek dla liczb wielocyfrowych.
  const posortowane = [...liczby].sort((a, b) => a - b);
  const srodek = Math.floor(posortowane.length / 2);
  if (posortowane.length % 2 !== 0) {
    return posortowane[srodek];
  }
  return (posortowane[srodek - 1] + posortowane[srodek]) / 2;
}
