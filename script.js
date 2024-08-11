// script.js

function calculer() {
    const debit = parseFloat(document.getElementById('debit').value);
    const pressionMax = parseFloat(document.getElementById('pressionMax').value);
    const pressionInitiale = parseFloat(document.getElementById('pressionInitiale').value);

    const nbBouteilles6L = parseInt(document.getElementById('bouteilles6').value);
    const nbBouteilles9L = parseInt(document.getElementById('bouteilles9').value);
    const nbBouteilles12L = parseInt(document.getElementById('bouteilles12').value);
    const nbBouteilles15L = parseInt(document.getElementById('bouteilles15').value);

    const volumes = [
        { volume: 6, nombre: nbBouteilles6L },
        { volume: 9, nombre: nbBouteilles9L },
        { volume: 12, nombre: nbBouteilles12L },
        { volume: 15, nombre: nbBouteilles15L }
    ];

    // Calculer le volume total d'air à gonfler
    const volumeAirNecessaire = volumes.reduce((total, bouteille) => {
        return total + (pressionMax - pressionInitiale) * bouteille.volume * bouteille.nombre;
    }, 0);

    // Convertir le débit du compresseur en litres par minute
    const debitLitresParMinute = (debit * 1000) / 60;

    // Calculer le temps de gonflage (en minutes)
    const tempsGonflage = volumeAirNecessaire / debitLitresParMinute;

    // Afficher le résultat
    document.getElementById('resultats').innerText = `Volume d'air nécessaire : ${volumeAirNecessaire.toFixed(2)} L
    Temps de gonflage estimé : ${tempsGonflage.toFixed(2)} minutes`;
}
