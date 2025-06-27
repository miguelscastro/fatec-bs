package com.aula4;

public class Aluno {
    public String nome, ra;
    public Aluno(String nome, String ra){
        this.nome = nome;
        this.ra= ra;
    }
    public void Mostrar() {
        System.err.println(nome);
        System.err.println(ra);
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getNome(){
        return nome;
    }
    public void setRa(String ra) {
        this.ra = ra;
    }
    public String getRA(){
        return ra;
    }
}