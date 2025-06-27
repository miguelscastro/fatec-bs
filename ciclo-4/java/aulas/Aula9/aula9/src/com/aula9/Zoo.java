package com.aula9;
import java.util.ArrayList;


public class Zoo {
    // O polimorfismo de subtipo deixa que a variável jaula aceite tanto Cachorro quanto Gato
    private ArrayList<Animal> jaula;
    
    public Zoo(){
        jaula = new ArrayList<Animal>();
    }

    // OBS: O método enjaular (Animal a) aceita tanto GAto quanto Cachorro por causa do polimorfismo de subtipos

    public void enjaular(Animal a){
        jaula.add(a);
    }

    public void todosEmitemSom(){
        for (Animal animal : jaula){
            animal.emitirSom();
        }
    }
}
