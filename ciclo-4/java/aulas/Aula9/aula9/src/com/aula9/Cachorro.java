package com.aula9;

// import com.aula9.Nadavel;
// import com.aula9.Brincavel;


public class Cachorro extends Animal implements Nadavel, Brincavel {
    public Cachorro(String nome){
        super(nome);
    }

    @Override
    public void emitirSom(){
        System.out.println("au au!");
    }

    @Override
    public void brincar(){
        System.out.println("Brincou...");
    }

    @Override
    public void nadar(){
        System.out.println("Nado cahorrinho");
    }
}
