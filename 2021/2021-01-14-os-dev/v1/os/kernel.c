kmain()
{
  char* vidmem=(char)0xb8000;
  vidmem[0] = 'A';
  vidmem[1] = 0x07; // grey color
}