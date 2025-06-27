package com.aula4;

public class Nota {
    private String nome, disciplina;
    private double p1, p2;

    public Nota(String nome, String disciplina, double p1, double p2) {
        this.nome = nome;
        this.disciplina = disciplina;
        this.p1 = Math.max(0, p1);
        this.p2 = Math.max(0, p2);
    }
    public void mostrarSituacao(){
        double media = 0.5*(p1+p2);
        if(media >= 6) {
            System.out.println("AP");
        } else {
            System.out.println("RN");
        }
    }
    public void setP1(double p1) {
        this.p1 = p1;
    }
    public void mostrarDados(){
        System.out.println(nome);
        System.out.println(disciplina);
        System.out.println(p1);
        System.out.println(p2);
        mostrarSituacao();
    }
}
