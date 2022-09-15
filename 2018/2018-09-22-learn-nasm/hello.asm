%define SYSCALL_WRITE 0x02000004
%define SYSCALL_EXIT 0x02000001

global start

section .text

start:    
  mov rax, SYSCALL_WRITE ; system call for write
  mov rdi, 1 ; file handle 1 is stdout
  mov rsi, message ; address of string to output
  mov rdx, 13 ; number of bytes
  syscall ; invoke operating system to do the write
  mov rax, SYSCALL_EXIT ; system call for exit
  xor rdi, rdi ; exit code 0
  syscall ; invoke operating system to exit

section .data

message:
  db "Hello, World", 10 ; note the newline at the end
