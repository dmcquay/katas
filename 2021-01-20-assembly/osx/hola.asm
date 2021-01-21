; ----------------------------------------------------------------------------------------
; This is an macOS console program that writes "Hola, mundo" on one line and then exits.
; It uses puts from the C library.  To assemble and run:
;
;     nasm -fmacho64 hola.asm && gcc hola.o && ./a.out
; ----------------------------------------------------------------------------------------

          global    _main
          extern    _puts

          section   .text
_main:    push      rbx                     ; Call stack must be aligned
          lea       rdi, [rel message]      ; First argument is address of message
          call      _puts                   ; puts(message)
          pop       rbx                     ; Fix up stack before returning
          ret

          section   .data
message:  db        "Hola, mundo", 0        ; C strings need a zero byte at the end