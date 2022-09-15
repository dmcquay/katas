#ifndef HELLO_H_
#define HELLO_H_

struct coins {
    int quarters;
    int dimes;
};

struct coins getChange(int cents);

#endif