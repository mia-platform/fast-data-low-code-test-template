# How to

## Branch

Fatti un branch per configurazione che vuoi modificarti.
Parti da: **d-starter**, contiene la configurazione che esiste nei SoR di testE2E

## Files to update

### ER Schema

_./configurations/erSchema.ts_

Metti dentro l'ER Schema che vuoi testare

### Aggregation

_./configurations/aggregation.ts_

Metti dentro l'Aggregation che vuoi testare

### Interfaces

_./tests/interfaces.ts_

L'oggetto _ProjectionSchema_ deve contenere un type TS contenente tutte le projection che stai testando.
Serve a verificare che la SV attesa nel test sia una struttura valida

### Fixtures

_./tests/aggregator/case-1/fixtures.ts_

Metti dentro un Record<projectionName, fixture[]> dove _projectionName_ è il nome della projection (collection) e _fixture[]_ è un array composto dagli oggetti di tale collection.

Rappresenta tutti i valori di partenza salvati su DB. Da qui si creerà la SV.

### Expected

_./tests/aggregator/case-1/expected.ts_

La Single View attesa. 
Serve altro?

## Execute test

Il comando deve essere: `MONGODB_URL=mongodb://localhost:27017/fast-data-low-code-template npm run test`
Fatti un comando sul package.json (es. `npm run test:local`) o qualcosa del genere

## Save your configuration

Runna `npm run compile-config`. Dentro la folder _./config-out_ ti ritrovi i json di Aggregation, ER Schema e altro da portare in console

## More

Ci sono anche supporto alle cast function e alle validazioni, ma non le ho provate