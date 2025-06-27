function avaliacao() {
    var formulario = document.querySelector("#formularioAvaliacao");
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var formData = new FormData(formulario);
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        console.log("Dados Enviados:", data);

        formulario.reset();
    });
}

// Teclas de atalho
document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
        event.preventDefault();
        document.getElementById('topo').scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        event.preventDefault();
        document.getElementById('1').scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F3') {
        event.preventDefault();
        document.getElementById('social').scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F4') {
        event.preventDefault();
        document.getElementById('social').scrollIntoView({
            behavior: 'smooth'
        });
    }
  });

//  Formulario
function checkForm() {
    document.querySelector(".click").addEventListener("click",evt =>{
        let avisos = document.querySelector(".avisos");
        let nome = document.querySelector("#nome").value;
        let oknome = validarNome(nome);
        let email = document.querySelector("#email").value;
        let okemail = validarEmail(email);
        let tel = document.querySelector("#telefone").value;
        let oktel = validarTel(tel);
        let filme = document.querySelector("#filme").value;
        let okfilme = validarFilme(filme);
        let comentario =document.querySelector("#comentario").value;
        let okcomentario = validarMsg(comentario);
        if(okemail && okfilme && oknome && okcomentario & oktel){
            avisos.innerHTML = "<span class = 'bold'>Formulário enviado com Sucesso!</span>";
            avisos.style.opacity = "1";
            avisos.style.padding = "20px 20px";
            avisos.style.width = "fit-space";
            avisos.style.margin = "20px auto";
            avisos.style.backgroundColor = "#8b0000";
            return true;
        }else{
            avisos.innerHTML = "<span class='bold'> Algo deu errado - Confira o modelo!</span><br><br>";
            if(!oknome){
                avisos.innerHTML += "<span class='errorText'>Usuário inválido - mínimo 3 caractéres!</span><br>";
            }
            if(!okemail){
                avisos.innerHTML += "<span class='errorText'>Endereço invalido - mínimo de 4 caractéres!</span><br>";
            }
            if(!oktel){
                avisos.innerHTML += "<span class='errorText'>Número invalido - (12-3456-7890)</span><br>";
            }
            if(!okfilme){
                avisos.innerHTML += "<span class='errorText'>O campo não pode estar em branco!</span><br>";
            }
            // if (!okcomentario){
            //     avisos.innerHTML += "<span class='bold'>O campo não pode estar vazio! "
            // }
            avisos.style.padding = "20px 20px";
            avisos.style.width = "fit-space";
            avisos.style.backgroundColor = "#8b0000";
            avisos.style.margin = "20px auto";
            avisos.style.opacity = "1";
            avisos.style.borderRadius = "0.5rem"
            return false;
        }
    })

}
function validarNome(nome){
    nome = nome.split(' ').join('');
    if (!nome) return false;
    if (nome.match(/^\d+$/)) return false;
    return true;
}

function validarTel(tel){
    tel = tel.split(' ').join('');
    if (!tel) return false;
    if (!tel.match(/^\d+$/)) return false;
    return true;
}

function validarEmail(email){
    email = email.split(' ').join('');
    if (!email) return false;
    if (!email.match(/\S+@\S+.\S+/)) return false;
    return true;
}


function validarFilme(filme){
    filme = filme.split(' ').join('');
    if (!filme) return false;
    return true;
}



function validarMsg(comentario){
    comentario = comentario.split(' ').join('');
    if (!comentario) return false;
    return true;
}

window.onload=checkForm;