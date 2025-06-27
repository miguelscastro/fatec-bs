import com.aula9.Zoo;
import com.aula9.Gato;
import com.aula9.Animal;
import com.aula9.Cachorro;

// Interface: possui a mesma função semântica de uma classe abstrata, porém som alguma diferenças:

//- Não pode ter atributod, apenas constantes.
// - Todo o método é público e abstrato por padrão 
// - Uma classe pode implementar várias interfaces

public class App {
    public static void main(String[] args) throws Exception {
        Zoo z = new Zoo();
        z.enjaular(new Gato("Frajola"));
        z.enjaular(new Cachorro("Rex"));
        z.enjaular(new Cachorro("Jordan"));

        z.todosEmitemSom();
        
        // Downcast: é a possibilidade de reciperar a referência de um subtipo. Prática não recomendada

        Animal a = new Gato("Um gato");
        a.emitirSom();

        Gato g = (Gato) a;
        g.arranhar();
        System.out.println(a.getNome());
        
        // Erro: Classcast Exception
        // Cachorro k = (Cachorro) a;
        // k.brincar();

        // Upcast:  é a possibilidade de reciperar a referência de um supertipo.


    }
}
