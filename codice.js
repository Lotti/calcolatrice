let operando1;
let operando2;
let operatore;
let risultato;
const NUMERO_MASSIMO_CIFRE = 10;
const risultatoDOM = document.querySelector('#risultato');

function reset() { // resetta le variabili
    operando1 = null;
    operando2 = null;
    operatore = null;
    risultato = null;
    mostra(""); // pulisce lo schermo della calcolatrice
}

function input(bottone) {
    if (bottone === 'C') {
        reset();
    } else if (bottone === '=') {
        // fai l'operazione
        // stampa risultato
    } else if (['*', '-', '+'].includes(bottone)) {
        // registra l'operazione
        // passaggio a secondo operando
    } else { // primo e secondo operando
        if (...) { // variabile booleana per capire quando passare da operando1 a operando2
            operando1 = acquisci_operando(operando1, bottone);
            mostra(operando1);
            console.log(operando1);
        } else {
            operando2 = acquisci_operando(operando2, bottone);
            mostra(operando2)
            console.log(operando2);
        }
    }
}

/**
 * 
 * @param {string} op 
 * @param {number} val 
 * @returns {string}
 */
function acquisci_operando(op, val) {
    if (op === null) {
        op = '';
    }

    if (typeof op === 'string' && op.length > NUMERO_MASSIMO_CIFRE) {
        return op;
    }

    const nuovo = op.toString() + val.toString();
    return nuovo;
}

function somma(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 + op2;
    return ris;
}

function sottrazione(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 - op2;
    return ris;
}

function moltiplicazione(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 * op2;
    return ris;
}

/*
function divisione(op1, op2) { // assunzione: i parametri in input sono numeri
    risultato = op1 / op2;
    return risultato;
}
*/

function mostra(valore) {
    risultatoDOM.value = valore;
}

// -----

reset();