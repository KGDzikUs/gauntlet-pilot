# gauntlet-pilot

Repozytorium pilotażowe dla [Gauntleta](https://github.com/KGDzikUs) — lokalnego,
deterministycznego orchestratora prowadzącego jeden milestone od planu do scalenia.

**To repozytorium nie ma własnego celu.** Powstało po to, żeby wykonać na nim
pierwszy prawdziwy przebieg Gauntleta i zmierzyć trzy rzeczy:

1. czy montaż składa się na repozytorium innym niż to, na którym powstawał;
2. ile naprawdę kosztuje jedna rola modelu (zapis w `runs/<run>/usage.jsonl`);
3. czy bramki odmawiają wtedy, kiedy powinny — i czy każda odmowa ma powód,
   który da się wskazać palcem.

Sukces pilota to **nie** „PR się zmergował".

## Co tu jest

```
src/licznik.js              trywialna jednostka pracy
test/licznik.test.js        testy do niej (node:test)
.github/workflows/ci.yml    CI na pull_request — bramka CI Gauntleta wiąże się z tym workflow
```

## Uruchomienie lokalne

```bash
npm test
```

Bez zależności. `npm install` nie jest potrzebne.
