console.log("script JS caricato");

let gender = prompt("Sei uomo o donna? m/f");
let age = Number(prompt("Quanti anni hai?"));

if (gender === "m" && age >= 67) {
    console.log("Puoi andare in pensione");
} else if (gender === "f" && age >= 62) {
    console.log("Puoi andare in pensione");
} else {
    console.log("Devi ancora lavorare");
}