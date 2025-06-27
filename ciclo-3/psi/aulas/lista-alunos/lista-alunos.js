function tabelaISW(listaAlunos) {
    var acumulado = "<table><thead><tr><th>Nome</th>"
        + "<th>RA</th>"
        + "<th>Curso</th>"
        + "<th>Idade</th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>";
    for (let i = 0; i < listaAlunos.length; i++) {
        acumulado = acumulado
            + "<tr><td>" + listaAlunos[i].nome + "</td>";
        + "<td>" + listaAlunos[i].ra + "</td>";
        + "<td>" + listaAlunos[i].curso + "</td>";
        + "<td>" + listaAlunos[i].idade + "</td></tr>";
    }
    acumulado = acumulado + "</tbody></table>";
    document.write(acumulado);//Mostra o conteúdo na tela
}
var alunos =
    [{ nome: "Diego", ra: "0050832311001", curso: "SI", idade: 19 }
        , { nome: "Larissa", ra: "0050832311004", curso: "SI", idade: 18 },
        , { nome: "Danilo", ra: "0050832311020", curso: "SI", idade: 18 },
        , { nome: "Adriano", ra: "0050832311036", curso: "SI", idade: 18 }
    ];
tabelaISW(listaAlunos);