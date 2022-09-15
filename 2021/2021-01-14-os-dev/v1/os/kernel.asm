bits    32
section   .text
  align   4
  dd      0x1BADB002
  dd      0x00
  dd      - (0x1BADB002+0x00)

global start
extern kmain    ; this function is going to be located in our c code (kernel.c)
start:
  cli           ; clears the interrupts
  call kmain    ; execute the kmain function from kernel.c
  hlt           ; tells the cpu to halt