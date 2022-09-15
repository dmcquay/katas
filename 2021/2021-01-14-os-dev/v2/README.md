https://github.com/cfenollosa/os-tutorial

```
brew install qemu nasm
```

On my system, `which nasm` is `/usr/local/bin/nasm` which is the one we want. Yay!

I think I need to use `qemu-system-x86_64` for qemu commands.

x86 is little-endian, meaning the least-significant byte is stored at the smallest address. That is opposite of how we are used to writing numbers. e.g. 123 3 is the least significant, but in little-endian, 1 is the least significant.

https://en.wikipedia.org/wiki/X86_instruction_listings

# Make a bootable USB

I think this may work, but I can't figure out how to get VirtualBox to boot directly from a physical USB, so I haven't tested it. But here were the commands just in case I want to try on a physical computer sometime.

Note: you need to replace `/dev/disk2s1` with the actual disk. I found this by mounting the USB, `df` and look at the output. Then unmount the device before running this command:

`sudo dd if=boot_sect.bin of=/dev/disk2s1 bs=512 count=1`

I'm struggling to get this to boot on real hardware. Haven't tried yet, but someone said this tutorial works on real hardware.
[Playlist](https://www.youtube.com/watch?v=1rnA6wpF0o4&list=PLHh55M_Kq4OApWScZyPl5HhgsTJS9MZ6M)
[Tutorial](https://github.com/AlgorithMan-de/wyoos)

But I'm also reading that my current approach should work if the hardware supports BIOS or CSM. I think Macs do not. They are UEFI only. Not 100% sure though.

Also, this tutorial is largely based on this paper: https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf
The paper goes on to explore 32-bit mode (up to now has been 16 bit).

# Make a bootable floppy image and boot to it in VirtualBox

- Open VirtualBox
- Create a new VM (OS type is other/unknown)
- Minimum memory
- Create a floppy controller with a newly created floppy image attached to it
- Write your boot sector binary to the floppy image: `dd conv=notrunc bs=512 count=1 if=boot_sect.bin of=floppy.img`
- Boot your VM!

# The trouble with trying to run on real hardware

Everyone is migrating to UEFI. CSM provides legacy (BIOS) support, but many manufacturers are dropping CSM support. I don't have
any computers in my house that will run CSM/BIOS. I do have a Raspberry PI that might be fun to experiment with, but it has a
completely different boot process so that will be an entirely new thing to learn. Plus the ISA is different (ARM). So I'm afraid
I'm stuck with qemu and VBox for now.