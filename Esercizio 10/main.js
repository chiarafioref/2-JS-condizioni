console.log("script JS caricato");

let hours = Number(prompt("Inserire le ore di sosta"));

if (hours <= 2) {
    console.log("Il prezzo totale è di 5€");
} else if (hours <= 5) {
    console.log("Il prezzo totale è di 10€")
} else {
    console.log("Il prezzo è di 15€")
}