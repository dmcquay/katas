ax is the 16-bit, "short" size register. It was added in 1979 with the 8086 CPU, but is used in DOS or BIOS code to this day. al and ah are the 8-bit, "char" size registers. al is the low 8 bits, ah is the high 8 bits.

Interrupts
http://www.osdever.net/tutorials/view/irqs
IRQ lines
represent a physical device plugged into the computer
They can send an interrupt signal which causes the CPU
to immediately stop what it is doing, look up which IRQ
line caused the interrupt, look up what address in memory
to start executing from some lookup table. When the procedure
is finished, CPU picks up where it left off.