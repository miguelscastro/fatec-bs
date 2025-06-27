#include <stdio.h>
#include <stdlib.h>

int main() {
    char N[5][50];
    char T[5][20];
    int control, name, number;

    control = 0;
    name = 0;
    number = 0;

    for (control = 0; control < 5; control++) {
        printf("Digite o nome: ");
        scanf("%s", N[name]);
        name++;
        fflush(stdin);
    }
    for (control = 0; control < 5; control++) {
        printf("Digite o numero de telefone [(XX)XXXXX-XXXX]: ");
        scanf("%s", T[number]);
        number++;
        fflush(stdin);
    }
    printf("Nomes e numeros:\n");

    for (name = 0; name < 5; name++) {
        number = 4 - name;
        printf("%s %s\n", N[name], T[number]);
    }
    return 0;
}
