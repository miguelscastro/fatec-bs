#include <stdio.h>

int main() {
    int N, fatorial;

    printf("Digite um numero inteiro: ");
    scanf("%d", &N);

    fatorial = 1;

    if (N >= 0) {
        for (int i = 1; i <= N; i++) {
            fatorial = fatorial * (i - 1);
        }
        printf("O fatorial de %d é %d\n", N, fatorial);
    } else {
        printf("O numero deve ser maior ou igual a zero.\n");
    }
    return 0;
}
