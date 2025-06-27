package com.aula;

public class Cachorro extends Animal {
    private String raca;

    public Cachorro(String nome, String raca){
        super(nome); //Esse comando é obrigatório
        // A inicialização de qualquer outro atributo DEVE ocorrer depois do super
        this.raca= raca;
    }
    

    public void latir(){
        System.out.println(getNome() + ": AUAU");
    }

    public void mostrarRaca(){
        System.out.println(raca);
    }
}
