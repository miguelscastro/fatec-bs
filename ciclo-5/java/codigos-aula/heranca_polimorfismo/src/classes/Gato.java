package classes;

public class Gato extends Animal {
    public Gato(String nome, String raca) {
        super(nome, raca);
    }

    public String miar() {
        return "Miau";
    }

    @Override
    public String emitirSom() {
        return "Miau";
    }

}
