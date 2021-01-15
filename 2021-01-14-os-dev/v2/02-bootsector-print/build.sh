nasm -f bin boot_sect_hello.asm -o boot_sect_hello.bin
qemu-system-x86_64 boot_sect_hello.bin