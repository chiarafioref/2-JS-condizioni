console.log("script JS caricato");

let username = prompt("Inserisci il tuo username");
let password = Number(prompt("Inserisci la tua password"));

if (username === "admin" && password === 1234) {
    console.log("Login effettuato");
} else {
    console.log("Credenziali errate");
}