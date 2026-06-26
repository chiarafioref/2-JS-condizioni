console.log("script JS caricato");

let totalPrice = Number(prompt("Inserisci il prezzo totale"));

if (totalPrice >= 50) {
    console.log("Spedizione gratuita");
} else {
    const shippingCost = 5;
    console.log("Il prezzo totale con il costo di spedizione è " + (totalPrice + shippingCost) + "€");
}