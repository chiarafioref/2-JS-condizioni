console.log("script JS caricato");

const ticketPrice = 36;
let weight = Number(prompt("Inserisci il peso della valigia."));

if (weight > 23) {
    console.log("Il prezzo del biglietto è " + (ticketPrice + 20) + "€");
} else {
    console.log("Il costo del biglietto è " + ticketPrice + "€");
}
