https://github.com/cfenollosa/os-tutorial

```
brew install qemu nasm
```

On my system, `which nasm` is `/usr/local/bin/nasm` which is the one we want. Yay!

I think I need to use `qemu-system-x86_64` for qemu commands.

x86 is little-endian, meaning the least-significant byte is stored at the smallest address. That is opposite of how we are used to writing numbers. e.g. 123 3 is the least significant, but in little-endian, 1 is the least significant.