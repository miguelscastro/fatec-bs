package com.aula;

// Caso a classe superior tenha construtor, é obrigatório usar construtor na subclasse

public class Animal {
    private String nome;
    // Caso usasse protected não haveria necessidade de usar getNome. No entanto, o uso do protected é considerado uma má prática.
    
    public Animal(String nome){
        this.nome = nome;
    }

    public void mostrarNome(){
        System.out.println("Nome: " + nome);
    }

    public void emitirSom(){
        // NÃO SEI QUAL ANIMAL
        System.out.println("SOM GENERICO");
    }

    public String getNome() {
        return nome;
    }
}
