package com.teste;

import com.aula4.Aluno;
import com.aula4.Nota;
import com.aula4.Sapo;

public class Main {
    public static void main(String[] args) {
        System.out.println("");
        Aluno a = new Aluno("teste", "0050832311005");
        System.err.println(a.getNome());
        a.setNome("Aluno1");
        a.Mostrar();
        System.out.println("");

        Nota n = new Nota("Teste1", "IDS001", 8, 7);
        n.setP1(10);
        n.mostrarDados();
        
        System.out.println("");

        Sapo s1 = new Sapo();
        Sapo s2 = new Sapo();
        Sapo s3 = new Sapo();

        s1.mostrarPulos();
        s2.mostrarPulos();
        s3.mostrarPulos();

        Sapo.mostrarSapos();

        System.out.println("");
    }
}
