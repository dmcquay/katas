I thought it would be fun to build an operating system (hopefully an extremely basic one!).

Following this video:
https://www.youtube.com/watch?v=rr-9w2gITDM

While googling stuff as I worked through this, I found this other tutorial that looked interesting:
https://github.com/cfenollosa/os-tutorial

In the video it says to install roxxiso, but that is a typo. It should be xorriso.

`docker build -t os-dev .`

0x1BADB002 magic number that tells the boot loader that this can start the OS

```
docker-compose run dev
cd os
nasm -f elf32 kernel.asm -o kasm.o
gcc -m32 -c kernel.c -o kc.o
ld -m elf_i386 -T link.ld -o kernel.bin kasm.o kc.o
qemu-system-i386 -kernel kernel.bin
```

That last qemu line didn't work in docker because there is no available video device.
[This tutorial](https://github.com/cfenollosa/os-tutorial/tree/master/00-environment) says you can install qemu directly on osx via brew, so I'm going to try running it that way.

From os dir...
```
brew install qemu
qemu-system-x86_64 os/kernel.asm
```

```
brew install --cask virtualbox
brew install --cask vagrant
```

config.vm.provider "virtualbox" do |v|
  v.gui = true
  v.name = "OS Dev"
end

23:41