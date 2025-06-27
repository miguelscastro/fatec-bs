// URL Alvo: https://fatecrl.edu.br/cursos/sistemas-para-internet/grades

function objetivos() {
    let ciclos = document.querySelectorAll(".tab-grid-content")
    for (let i = 0; i < ciclos.length; i++) {
        const divMaterias = ciclos[i]

        console.log("Ciclo: ", i + 1);

        for (let i = 0; i < divMaterias.children.length; i++) {
            const materias = divMaterias.children[i]

            for (let i = 0; i < materias.children.length; i++) {
                const disciplina = materias.children[i]
                const objetivo = disciplina.children[1]

                console.log(objetivo.children[0].innerText, objetivo.children[1].innerText)
            }
        }
    }
}
function ementas() {
    let ciclos = document.querySelectorAll(".tab-grid-content")
    for (let i = 0; i < ciclos.length; i++) {
        const divMaterias = ciclos[i]

        console.log("Ciclo: ", i + 1);

        for (let i = 0; i < divMaterias.children.length; i++) {
            const materias = divMaterias.children[i]

            for (let i = 0; i < materias.children.length; i++) {
                const disciplina = materias.children[i]
                const ementa = disciplina.children[1]

                console.log(ementa.children[2].innerText, ementa.children[3].innerText)
            }
        }
    }
}
function materias() {
    let ciclos = document.querySelectorAll(".tab-grid-content")
    for (let i = 0; i < ciclos.length; i++) {
        const divMaterias = ciclos[i]

        console.log("Ciclo: ", i + 1);

        for (let i = 0; i < divMaterias.children.length; i++) {
            const materias = divMaterias.children[i]

            for (let i = 0; i < materias.children.length; i++) {
                const disciplina = materias.children[i]
                const nome = disciplina.children[0]

                console.log(nome.children[0].innerText)
            }
        }
    }
}
function siglas() {
    let ciclos = document.querySelectorAll(".tab-grid-content")
    for (let i = 0; i < ciclos.length; i++) {
        const divMaterias = ciclos[i]

        console.log("Ciclo: ", i + 1);

        for (let i = 0; i < divMaterias.children.length; i++) {
            const materias = divMaterias.children[i]

            for (let i = 0; i < materias.children.length; i++) {
                const disciplina = materias.children[i]
                const siglas = disciplina.children[0]

                console.log(siglas.textContent.split("|")[1])
            }
        }
    }
}
function escolha(alvo){
    switch (alvo) {
        case objetivos: objetivos()
        break;
        case ementas: ementas() 
        break;
        case materias: materias()
        break;
        case siglas: siglas()
        break;
        default: return;
    }
}