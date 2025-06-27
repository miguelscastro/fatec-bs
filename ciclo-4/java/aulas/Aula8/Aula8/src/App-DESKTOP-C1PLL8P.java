
import com.sobrescrita.Animal;
import com.sobrescrita.Gato;

public class App {
    public static void main(String[] args) throws Exception {
        
        //Pode, pois Gato <= Animal.
        Animal a = new Gato("frajola");
        //O Polimorfismo coloca para funcionar
        //os metodos que sao generalizaveis
        a.emitirSom();
        System.out.println(a.getNome());

    }
}
