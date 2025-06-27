function soma(a, b) {
    return console.log(a + b);
}
soma(2, 3)
soma(4, 9)
soma("oi", 3)
soma("olá", "mundo")
soma(true, true)

console.log("=====================");

function subtracao(a, b) {
    return console.log(a - b);
}
subtracao(2, 3)
subtracao(4, 9)
subtracao("oi", 3)
subtracao("olá", "mundo")
subtracao(false, true)

function maior(a, b) {
    if (a > b) {
        return console.log((a + " eh maior"));
    } else {
        return console.log((b + " eh maior"));
    }
}
maior(2, 3)
maior(4, 9)
maior("oi", 3)
maior("olá", "mundo")
maior(false, true)
