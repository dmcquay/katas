#include <stdio.h>
#include "change.h"

int main(void) {
    int cents = 65;
    struct coins c = getChange(cents);
    printf("Quarters: %d\n", c.quarters);
    printf("Dimes: %d\n", c.dimes);
}