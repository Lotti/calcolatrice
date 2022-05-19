const colori = {
    rosso: "\x1b[31m",
    verde: "\x1b[32m",
    giallo: "\x1b[33m",
    blu: "\x1b[34m",
    magenta: "\x1b[35m",
    ciano: "\x1b[36m",
    bianco: "\x1b[37m",
}
function palla() {
    const elenco_colori = Object.values(colori); // torna un array
    const posizione_random = Math.floor(Math.random() * elenco_colori.length);
    const colore = elenco_colori[posizione_random];
    process.stdout.write(colore + '*' + '\x1b[0m');
}
function stampa(a) {
    process.stdout.write(a);
}


/**
 * 
 * Esercizio per casa: completare l'albero di Natale in tempo per l'8 Dicembre!
 * 
 */
function alberoDiNatale(righe) {
    for (let r = 0; r < righe; r++) {
        const colonne = r + 1;
        for (let c = 0; c < colonne; c++) {
            palla();
        }
        stampa('\n');
    }

    // per i più volenterosi: aggiungere tronco che sporge da sotto la chioma
}
alberoDiNatale(10);
