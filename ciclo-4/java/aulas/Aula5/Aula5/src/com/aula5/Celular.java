package com.aula5;

public class Celular {
    private Bateria bateria;
    private String nome;
    private boolean ligado;

    public Celular(Bateria bateria, String nome) {
        this.bateria = bateria;
        this.nome = nome;
        this.ligado = !bateria.isVazio();
    }
    public void ligar() {
        if(!bateria.isVazio() && !ligado) {
            System.out.println("Olá, " + nome);
            bateria.gastar();
            ligado = true;
        }
    }
    public void desligar() {
        if(ligado || bateria.isVazio()) {
            System.out.println("...");
            ligado = false;
        }
    }
    public void chamar(){
        if(ligado && !bateria.isVazio()){
            System.out.println("chamada...");
            bateria.gastar();
        }
    }
    public void conectarUSB(int qt) {
        for (int i = 0; i < qt; i++) {
            bateria.recarregar();
        }
    }
    
}
