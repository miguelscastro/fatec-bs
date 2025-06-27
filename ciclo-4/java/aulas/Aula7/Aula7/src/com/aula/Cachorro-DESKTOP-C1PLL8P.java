package com.aula;

public class Cachorro extends Animal{

    private String raca;

    public Cachorro(String nome, String raca){
        super(nome); //Essa comando eh obrigatorio
        //A inicializacao de qualquer outro atributo
        //DEVE ocorrer apos o super.
        this.raca = raca;
    }

    public void latir(){
        System.out.println(getNome() + ": AUAU");
    }

    public void mostrarRaca(){
        System.out.println(raca);
    }

}
