package com.aula9;

import java.util.ArrayList;

public class Zoo {
    //O Polimorfismo de subtipo deixa que a variavel
    //jaula aceite tanto Cachorro quanto Gato.
    private ArrayList<Animal> jaula;

    public Zoo(){
        jaula = new ArrayList<Animal>();
    }

    //Aqui ocorre um upcast.
    public void enjaular(Animal a){
        jaula.add(a);
    }

    public void todosEmitemSom(){
        for(Animal animal : jaula){
            animal.emitirSom();
        }
    }

}
