console.log("script JS caricato");

let vote = Number(prompt("Inserisci il tuo voto"));

if (vote < 6) {
    console.log("Insufficiente");
} else if (vote >= 6 && vote <= 7) {
    console.log("Sufficiente");
} else if (vote >= 8 && vote <= 9) {
    console.log("Buono");
} else if (vote === 10) {
    console.log("Ottimo");
}
