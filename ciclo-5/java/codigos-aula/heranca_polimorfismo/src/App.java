import classes.Gato;
import classes.Pato;
import classes.Cachorro;
import classes.Animal;

public class App {
    public static void main(String[] args) throws Exception {
        // Cachorro c = new Cachorro("Caramelo", "Vira Lata");
        Animal g = new Gato("frajola", "vira lata");
        g = new Pato("Pato Donald", "duck donalds");

        // System.out.println(c.emitirSom());
        System.out.println(g.emitirSom());
    }
}

// Polimorfismo: Capacidade de uma variável de um supertipo (classe pai) tem de
// referenciar quaisquer um dos subtipos (classes filhas) em tempo de execução.

// Sobreescrita: Quando um método abstrato, ou não, da classe da classe pai têm
// comportamento modificado ou sobreescrito pelo subtipo da classe filha