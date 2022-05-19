function moltiplicazione(a, b) {
    const c = a * b;
    return c;
}
console.log('moltiplicazione(5,2) ->', moltiplicazione(5, 2)); // --> 10

function moltiplicazione2Per5() {
    let risultato;
    risultato = 2 + 2 + 2 + 2 + 2;
    return risultato;
}
console.log('moltiplicazione2Per5() ->', moltiplicazione2Per5()); // --> 10

function moltiplicazionePer5(k) {
    let Sk = 0;
    for (let n = 0; n < k; n++) {
        Sk = Sk + 5;
    }
    return Sk;
}
console.log('moltiplicazionePer5(2) -> ', moltiplicazionePer5(2));

function moltiplicazioneSomme(j, k) {
    let Sk = 0;
    for (let n = 0; n < k; n++) {
        Sk = Sk + j;
    }
    return Sk;
}
console.log('moltiplicazioneSomme(5,2) -> ', moltiplicazioneSomme(5, 2));
console.log('moltiplicazioneSomme(12,4) -> ', moltiplicazioneSomme(12, 4));
