// ======================================================= materias
function listSubjects () {
    let subjects = []
    for (let i = 1; i <= 25; i++) {
        subjects.push(document.querySelector("#span_vACD_DISCIPLINANOME_00" + digit(i)).innerHTML)
    }
    return subjects
}

function digit(i) {
    if (i <= 9)
        return `0` + i
    return i
}

// ========================================================= aprovado

function aprovedNot () {
    let aproved = []
    for (let i=1;i<=25;i++) {
        aproved.push(document.querySelector("#span_vACD_ALUNOHISTORICOAPROVADA_00" + digit(i)).innerHTML)
    }
    return aproved
}
