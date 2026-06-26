console.log("script JS caricato");

let totalPrice = Number(prompt("Inserisci il prezzo totale"));
let fidelity = prompt("Hai la tessera fedeltà? si/no");

if (fidelity === "si") {
    const discount = totalPrice * 0.10;
    console.log("Il totale è " + (totalPrice - discount) + "€");
} else {
    console.log("Il totale è " + totalPrice + "€");
}