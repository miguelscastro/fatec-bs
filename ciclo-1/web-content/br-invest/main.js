let botoes = document.getElementsByClassName("b");
let campos = document.getElementsByClassName("c");

for (let i = 1; i < campos.length; i++) {
  campos[i].style.display = "none";
}

botoes[0].classList.add("ativo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    for (let j = 0; j < campos.length; j++) {
      campos[j].style.display = "none";
    }
    
    campos[i].style.display = "block";
    
    for (let k = 0; k < botoes.length; k++) {
      botoes[k].classList.remove("ativo");
    }
    
    botoes[i].classList.add("ativo");
  });
}

let botaoT = document.getElementById('botao');

botaoT.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})