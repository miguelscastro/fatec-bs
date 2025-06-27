function eventos(){
    document.querySelector("#btn1")
        .addEventListener("click", ola);
}
function ola(){
    alert("ola");
}

window.onload = eventos;