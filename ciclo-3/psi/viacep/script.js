const enderecosSalvos = [];

function consultaEnd() {
    let cep = document.querySelector('#cep').value.trim();
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    fetch(url).then(function(response) {
        response.json().then(mostrarEnd);
    });
}

function mostrarEnd(dados) {
    let resultado = document.querySelector("#resultado");

    if (dados.erro) {
        resultado.innerHTML = "Não foi possível encontrar esse CEP";
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                               <p>Complemento: ${dados.complemento}</p>
                               <p>Bairro: ${dados.bairro}</p>
                               <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`;
        salvarEndereco(dados);
    }
}

function salvarEndereco(dados) {
    const index = enderecosSalvos.findIndex(endereco => endereco.cep === dados.cep);
    if (index === -1) {
        enderecosSalvos.push(dados);
    } else {
        enderecosSalvos[index] = dados;
    }
    atualizarListaEnderecos();
}

function atualizarListaEnderecos() {
    const lista = document.getElementById('enderecos-lista');
    lista.innerHTML = '';

    enderecosSalvos.forEach((endereco, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `CEP: ${endereco.cep}, Endereço: ${endereco.logradouro}, Cidade: ${endereco.localidade} - ${endereco.uf}`;
        listItem.id = `endereco-${index}`;
        lista.appendChild(listItem);
    });
}

function atualizarEndereco() {
    const cep = document.getElementById('update-cep').value.trim();
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response) {
        response.json().then(dados => {
            if (dados.erro) {
                alert("CEP inválido!");
            } else {
                const index = enderecosSalvos.findIndex(endereco => endereco.cep === cep);
                if (index > -1) {
                    enderecosSalvos[index] = dados;
                    atualizarListaEnderecos();
                } else {
                    alert("Endereço não encontrado para atualização!");
                }
            }
        });
    });
}

function deletarEndereco() {
    const cep = document.getElementById('delete-cep').value.trim();
    const index = enderecosSalvos.findIndex(endereco => endereco.cep === cep);

    if (index > -1) {
        enderecosSalvos.splice(index, 1);
        atualizarListaEnderecos();
    } else {
        alert("Endereço não encontrado para deleção!");
    }
}


/* força o uso de numeros e hífen nos inputs*/
function validarInput(input) {
    const v=input.value;
    input.value=v.replace(/[^0-9-]/g, '');

    
}
