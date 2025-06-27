package classes;

public abstract class Animal {
    private String nome;
    private String raca;

    public Animal(String nome, String raca) {
        this.nome = nome;
        this.raca = raca;
    };

    public abstract String emitirSom();
}
