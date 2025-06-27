package com.aula9;
// Classes abstratas: São classes que não podem ser instanciadas e podem possuir métodos abstratos. Serve apenas para herança
// método abstrato: métodos sem corpo de código que  serve apenas para ser sobrescrito. Só classes abstratas podem ter métodos abstratos.

//OBS: Uma subclasse concreta é obrigada a implementar o método abstrato herdado

public abstract class Animal {

    private String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public abstract void emitirSom();
}
