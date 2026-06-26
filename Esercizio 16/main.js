console.log("script JS caricato");

let balance = Number(prompt("Inserisci il tuo saldo attuale"));

if (balance >= 0) {
    let money = Number(prompt("Inserisci l'importo da prelevare"));
    if (balance >= money) {
        console.log("Prelievo effettuato, nuovo saldo: " + (balance - money) + "€");
    } else {
        console.log("Saldo insufficiente");
    }
}