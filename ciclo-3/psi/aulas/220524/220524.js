// 1) Calcular a soma de todos os pares usando fold(reduce) e unfold
// 2) Calcular a soma de todos os pares usando fold(reduce) e filter
// 3) Calcular o reverso de uma string usando reduce
// 4) Calcular a media de todos os valores positivos e pares usando fold e unfold
// 5) Fazer a sequência de fibonnaci usando unfold
// 6) Fazer a sequência [2, 2, 2, 2, 2, 10, 18, 34...] usando unfold

// forEach -> recebe umma ação -> não retorna nada
//  map -> recebe uma função -> retorna algo

function evento() {
    alert("oi");
}

function main() {
    document.querySelector("#div1").addEventListener("mouseenter", e => {
        e.target.style.backgroundColor="yellow"
    })
    document.querySelector("#div1").addEventListener("mouseleave", e => {
        e.target.style.backgroundColor="white"
    })
    document.querySelector(".classe").addEventListener("click", e => {
        evento()
    })
}

function ex() {
    document.querySelector(".classe2").addEventListener("dblclick", e => {
        e.target.innerHTML="clicado"
    })

    document.querySelectorAll("li").forEach(e => {
        e.addEventListener("click",e => {
            e.target.style.backgroundColor="pink"
        })
    })
    document.querySelectorAll("li").forEach(e => {
        e.addEventListener("dblclick",e => {
            e.target.style.backgroundColor="green"
        })
    })
    document.querySelectorAll(".classe3").forEach(e => {
        e.addEventListener("click", e => {
            e.target.style.display="none"
        })
    })
}
window.onload = ex, main

