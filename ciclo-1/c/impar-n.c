#include <stdio.h>

int main() {
    int impar = 1;
    int cont, n;

    do {
        printf("Digite um numero inteiro: ");
        scanf("%d", &n);

        if (n <= 0) {
            printf("O numero deve ser maior que 0.\n");
        }
    } while (n <= 0);

    for (cont = 1; cont <= n; cont++) {
        printf("%d, ", impar);
        impar += 2;
    }

    return 0;
}