package classes;

public class Cachorro extends Animal {
    public Cachorro(String nome, String raca) {
        super(nome, raca);
    }

    public String latir() {
        return "Au";
    }

    @Override
    public String emitirSom() {
        return "Au";
    }

}
