function testeDOM() {
    let aux = "";
    for (let idx in document) {
        aux += idx + "=>" + document[idx] + "<br>";
    }
    document.writeln(aux);
}
function mostrarItem2() {
    let li = document.getElementById("item2");
    li.innerHTML = "mudado pelo js"
    li.style.backgroundColor = "pink"
    li.style.color = "#000000"

}

function mostrarLi() {
    let li = document.querySelector("li");
    li.innerHTML = "mudado pelo js"
    li.style.backgroundColor = "aquamarine"
    li.style.color = "#000000"
}

function mostrarClass() {
    let li = document.querySelector(".class1");
    li.innerHTML = "mudado pelo js"
    li.style.backgroundColor = "green"
    li.style.color = "#000000"
}

function marcar(obj) {
    obj.style.backgroundColor = "yellow"
}
function marcarDiv(obj) {
    obj.classList.add("outraClass")
    obj.classList.remove("classe1")
}

function mudar(obj) {
    let classeAtual = obj.classList[0]

    if (classeAtual === "branco") {
        obj.classList.remove("branco")
        obj.classList.add("rosa")
        return
    }
    obj.classList.remove("rosa")
    obj.classList.add("branco")
}

// testeDOM()
testeDOM(li)
mostrarLi()
mostrarClass()
function change(obj) {
    let classeAtual = obj.classList[0]

        if(classeAtual == "verde") {
            obj.classList.add("amarelo")
            obj.classList.remove("verde")
            obj.classList.remove("branco")
            aux++
        } else if(classeAtual == "amarelo") {
            obj.classList.remove("amarelo")
            obj.classList.remove("verde")
            obj.classList.add("branco")
            aux++
        } else {
            obj.classList.remove("amarelo")
            obj.classList.add("verde")
            obj.classList.remove("branco")
            aux++
        }
}