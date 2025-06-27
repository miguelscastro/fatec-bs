function tryObj() {
    var aluno = {
        "nome": "Miguel",
        "ra": "0050832311005",
        "curso": "SI"
    };
    var materia = {
        "nome": "Desenvolvimento de Sítios Internet",
        "codigo": "ISW-008",
        "professor": "Garcia",
        "semestre": 3,
        "ch": 80
    };
    var generico = {
        3: 7,
        "oi": true,
        false: 3.1
    };
    aluno["idade"] = 18

    console.log(aluno.idade);
    console.log("=====================");
    console.log(materia.codigo);
    console.log("=====================");
    console.log(generico[3]);
    console.log("=====================");
    console.log(generico["oi"]);
    console.log("=====================");
    console.log(generico[false]);
    console.log("=====================");
}
tryObj()

function runObj() {
    var obj = {
        3: 7,
        2.5: "oi",
        "php": false,
        "javascript": true
    };
    for (let i in obj) {
        console.log(i + ": " + obj[i]);
    }
}
runObj()

function doTable(obj) {
    var acumulado = "<table><thead<tr><th>Nome<th>"
        + "<th>RA</th>"
        + "<th>Curso</th>"
        + "<th>Idade</th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>"
        + "<tr>";
    for (let i in obj) {
        acumulado = acumulado + "<td>" + obj[i] + "</td>"
    }
    acumulado = acumulado + "</tr></tbody></table>"
    document.write(acumulado)
}
doTable({ nome: "Larissa", ra: "0050832311004", curso: "SI", idade: 18 });

function createStudents(students) {
    var acumulado = "<table><thead><tr><th> Nome </th>"
        + "<th>RA</th>"
        + "<th>Curso</th>"
        + "<th>Idade</th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>"
    for (let i = 0; i < students.length; i++) {
        acumulado = acumulado
            + "<tr><td>" + students[i].nome + "</td>"
            + "<td>" + students[i].ra + "</td>"
            + "<td>" + students[i].curso + "</td>"
            + "<td>" + students[i].idade + "</td></tr>"
    }
    acumulado = acumulado + "</body></table>"
    document.write(acumulado)
}
var student = [
    { nome: "Diego", ra: "0050832311001", curso: "SI", idade: 19 },
    { nome: "Larissa", ra: "0050832311004", curso: "SI", idade: 18 },
    { nome: "Danilo", ra: "0050832311020", curso: "SI", idade: 18 },
    { nome: "Adriano", ra: "0050832311036", curso: "SI", idade: 18 }
]
createStudents(student)
