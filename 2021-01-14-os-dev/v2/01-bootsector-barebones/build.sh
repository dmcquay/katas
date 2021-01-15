nasm -f bin boot_sect_simple.asm -o boot_sect_simple.bin
qemu-system-x86_64 boot_sect_simple.bin