function main(){
    $("div").click(() => {
        $(this).css("background-color", "pink")
    })
}
$ (document).ready(main);

// function contador() {
//     let conta = 0
//     $("button").click(function (){
//         $(this).html(++conta)
//     })
// }
// $ (document).ready(contador);

function contador() {
    let conta = 0
    document.querySelector(".contador").addEventListener("click", e => {
        e.target.innerHTML = ++conta
    })
}
window.onload = contador