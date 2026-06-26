console.log("script JS caricato");

let temperature = Number(prompt("Inserisci la temperatura esterna"));

if (temperature < 15) {
    let rain = prompt("Piove? si/no");
    if (rain === "si") {
        console.log("Metti l'impermeabile");
    } else {
        console.log("Metti giacca");
    }
} else {
    console.log("Vai leggero");
}