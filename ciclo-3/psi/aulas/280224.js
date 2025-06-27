// function hello() {
//     return "Olá"
// }
// console.log(hello());

// function dividir () {
//     var a = prompt("Digite um número")
//     var b = prompt("Digite outro número")
//     if(b!=0){
//         console.log(a/b);
//     } else {
//         console.log("Erro");
//     }
// }
// dividir(10,2)

// ====================================================

function lista() {
    var ls = [1, 3, 4];
    ls.push(5, 7)
    for (let i = 0; i < ls.length; i++) {
        console.log(ls[i]);
    }
    return ls
}
lista()

// ======================================================

function media(lista) {
    var mediaFinal = 0
    for (let i = 0; i < lista.length; i++) {
        mediaFinal = mediaFinal + lista[i]
    }
    return mediaFinal / lista.length
}
let l = [1, 3, 4, 5]
console.log(media(l));

// =========================================================

function variancia(lista) {
    var m = media(lista)
    var soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma = soma + (lista[i] - m) * (lista[i] - m)
    }
    return soma / lista.length
}

let l2 = [1, 3, 4, 5]
console.log(variancia(l2));