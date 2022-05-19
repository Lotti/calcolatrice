// pos: 0  1  2  3  4  5  6  7  8  9 10
//  Sk: 1  1  2  3  5  8 13 21 34 55 89
// la somma dei risultati delle 2 posizioni precedenti
// corrisponde al risultato della posizione "pos"
function fibonacci(pos) {
    if (pos === 0 || pos === 1) { // caso base
        return 1;
    }
    return fibonacci(pos - 2) + fibonacci(pos - 1);
}

function fibonacciArray(pos) {
    let risultato;
    const arr = [];

    for (let n = 0; n <= pos; n++) {
        if (n == 0 || n == 1) { // caso base
            risultato = 1;
        } else {
            risultato = arr[n - 1] + arr[n - 2];
        }
        arr.push(risultato);
    }

    return risultato;
}

function fibonacciIterativo(pos) {
    let risultato;
    let pos_1 = 0;
    let pos_2 = 0;
    for (let n = 0; n <= pos; n++) {
        if (n == 0 || n == 1) { // caso base
            risultato = 1;
        } else {
            risultato = pos_1 + pos_2;
        }
        pos_2 = pos_1; // n-1 -> n-2
        pos_1 = risultato; // n -> n-1
    }

    return risultato;
}



console.log(
    fibonacci(0), fibonacci(1), fibonacci(2),
    fibonacci(3), fibonacci(4), fibonacci(5),
    fibonacci(6), fibonacci(7), fibonacci(8),
    fibonacci(9), fibonacci(10), fibonacci(11)
);