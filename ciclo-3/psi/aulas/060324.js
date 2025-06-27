function filtrarPar(ls) {
    return console.log(ls);
}
filtrarPar([1, 2, 3, 4])

function filtrarPar2(ls) {
    let aux = []
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] % 2 == 0) {
            aux.push(ls[i])
        }
    }
    return aux;
}
console.log(filtrarPar2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// =========================================================================1
function filtrarImpar(ls) {
    let aux = []
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] % 2 != 0 && ls[i] > 15) {
            aux.push(ls[i])
        }
    }
    return aux;
}
console.log(filtrarImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17]));
// ===============================================================================2
function filtrarPalavras(lp) {
    let aux = [];
    for (let i = 0; i < lp.length; i++) {
        if (lp[i].length >= 3 && lp[i].length <= 7) {
            aux.push(lp[i])
        }
    }
    return aux;
}
console.log(filtrarPalavras(["batata", "maca", "banana", "santos", "pneumoultramicroscópiosilicovulcanoconiótico"]));
// =============================================================================3
function listaReversa(ls) {
    let aux = []
    for (let i = ls.length - 1; i >= 0; i--) {
        aux.push(ls[i])
    }
    return aux
}
console.log(listaReversa([1, 2, 3, 4, 5, 6, 7]));
// ================================================
function listaListas(ls) {
    let aux = []
    for (let i = 0; i < ls.length; i++) {
        aux.push(listaReversa(ls[i]))
    }
    return aux
}
console.log(listaListas([[1, 2, 3], [4, 5, 6], [7, 8]]));