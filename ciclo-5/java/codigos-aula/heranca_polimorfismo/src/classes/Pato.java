package classes;

public class Pato extends Animal {
    public Pato(String nome, String raca) {
        super(nome, raca);
    }

    public String miar() {
        return "Miau";
    }

    @Override
    public String emitirSom() {
        return "Quac Quac";
    }

}
