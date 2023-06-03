# Crypto Chart
_This readme is also available in [english](README_ENG.md)_

En Vue.js-applikation som hämtar historiska priser för olika kryptovalutor :dollar: :credit_card: från Coingecko API och visar dem på ett linjediagram med hjälp av Chart.js.

Även nyhetsartiklar ang crypto går att hitta och läsa. 

## Installation
Klona detta repository.
* Kör nedan kommando i projektets katalog för att installera nödvändiga paket.
```javascript
npm install
``` 

* Kör sedan nedan kommando för att starta servern.
```javascript
npm run serve
```


# Användning
Välj tidsperioden från drop-down menyn.
Diagrammet uppdateras för att visa historiska priser för Bitcoin för den valda tidsperioden.

## Teknologier som används
* [Vue.js](https://vuejs.org/)
* [axios](https://github.com/axios/axios)
* [Chart.js](https://www.chartjs.org/)
* [Coingecko API](https://www.coingecko.com/en/api/documentation)
* [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

# Demo
Du hittar en live demo av applikationen på [Crypto Chart](cryptchartapp.netlify.app)

## Nyhetsartiklar
Tyvärr fungerar inte nyhetsartiklar på demot. Detta är pga api:et inte tillåter distrubering av api utan betalning
    "Requests from the browser are not allowed on the Developer plan, except from localhost."
![News page](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDU5M2FkNmU1ODZlN2MyMDlkMjk3ZDFiMDRjNDliNjgxZmM2MzIzZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kgnjhTshlmH2ktFTGe/giphy.gif)
## Förbättringar

- [ ] ~~Låta användaren söka efter en specifik kryptovaluta~~
    - Kommer ej att implementeras pga. sättet API:et är uppbyggt. "id" för att söka efter valuta matchar inte alltid namnet på valutan.
- [X] Gör hela appliaktionen bättre anpassad för mindre skärmar
- [X] Låta användaren ändra färgen på grafen
- [X] Visa bättre felmeddelanden än alert

## Licens
Det här projektet är licensierat under Apache License 2.0. Se  [LICENSE](LICENSE) för mer information.
