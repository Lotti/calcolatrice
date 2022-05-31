const colori = {
  rosso: "\x1b[31m",
  verde: "\x1b[32m",
  giallo: "\x1b[33m",
  blu: "\x1b[34m",
  magenta: "\x1b[35m",
  ciano: "\x1b[36m",
}
function palla() {
  const elenco_colori = Object.values(colori); // torna un array
  const posizione_random = Math.floor(Math.random() * elenco_colori.length);
  const colore = elenco_colori[posizione_random];
  process.stdout.write(colore + '*' + '\x1b[0m');
}
function bianca() {
  process.stdout.write('@');
}
function stampa(a) {
  process.stdout.write(a);
}
function spazio() {
  stampa(' ');
}
function a_capo() {
  stampa('\n');
}
function tronco() {
  process.stdout.write('#');
}

/**
 * 
 * Esercizio per casa: completare l'albero di Natale in tempo per l'8 Dicembre!
 * 
 */
function alberoDiNataleLaVendetta(righe) {
  let palle = 1;
  for (let riga = 1; riga <= righe; riga++) {
    let spazi = righe - riga;
    for (let s = 0; s < spazi; s++) {
      spazio();
    }

    for (let p = 0; p < palle; p++) {
      palla();
    }

    a_capo();
    palle += 2;
  }
}

function alberoDiNatale(righe) { // 10
  if (righe < 5) {
    console.log('Mi dispiace ma abbiamo finito gli alberi piccoli.');
    return;
  }

  // LA CHIOMA
  for (let riga = 1; riga <= righe; riga++) {
    let spazi = righe - riga;
    for (let s = 0; s < spazi; s++) {
      spazio();
    }
    const bianche = riga;
    for (let b = 0; b < bianche; b++) {
      palla();
    }
    const colonne = riga - 1; // stampo un asterisco in meno
    for (let colonna = 0; colonna < colonne; colonna++) {
      palla(); // stampa un asterisco colorato
    }
    a_capo(); // vado a capo
  }

  // IL TRONCO!
  const altezza_tronco = Math.ceil(righe / 3); // 4
  for (let riga = 1; riga <= altezza_tronco; riga++) {
    const spazi = righe / 5 * 4;
    const larghezza_tronco = Math.ceil(righe / 3); // 4
    for (let s = 0; s < spazi; s++) {
      spazio();
    }
    for (let b = 0; b < larghezza_tronco; b++) {
      tronco();
    }
    a_capo();
  }
}

alberoDiNatale(10);
// alberoDiNataleLaVendetta(10);
// alberoDiNatale(20);
// alberoDiNatale(5);
// alberoDiNatale(3);
