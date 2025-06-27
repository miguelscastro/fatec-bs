package com.aula.sobrescrita;

public class Cachorro extends Animal {

       // Sobrescrita (Override): É tam,bém uma maneira de resolver ambiguidades de nome de método, porém o uso de herança deve estar envolvido. O nome e a lista de parâmetris devem ser iguais, mas o método tem que resifdir em classes distintas ligadas por herança

    public Cachorro(String nome){
        super(nome);
    }

    // é um annotation (comentario que pode ser usado como metadado) que indica se a sobrescrita está ou não correta.
    // Boa prática
    // OBS1: O modificador de acesso não pode ser maior que o da super classe.
    // OBS2: O retorno deve ser o mesmo
    // OBS3: Generalização (usar um mesmo nome p/ descrever comportamentos similares) é uma boa prática.
    @Override
    public void emitirSom(){
        System.out.println("AUAU");
    }

    public void brincar(){
        System.out.println("...");
    }
}

