f=$1
if [ -d $1 ]; then
  echo "adding file name"
  f=$1/boot_sect.asm
fi
rm -f boot_sect.bin
nasm -f bin $f -o boot_sect.bin
qemu-system-x86_64 boot_sect.bin