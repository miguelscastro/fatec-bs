let userLogado = JSON.parse(localStorage.getItem("userLogado"));

document.addEventListener('DOMContentLoaded', () => {
  let logado = document.querySelector("#logado");
  logado.textContent = userLogado.nome;
});

function sair() {
  document.querySelector("#logado").textContent = ""
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "index.html";
}
