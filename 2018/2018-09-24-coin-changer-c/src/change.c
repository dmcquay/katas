#include "change.h"

struct coins getChange(int cents) {
    struct coins c;
    c.quarters = cents / 25;
    cents -= c.quarters * 25;
    c.dimes = cents / 10;
    return c;
}