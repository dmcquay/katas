import os
import sys
import fcntl
import errno
import select

def set_non_blocking(fd):
    """ Set a file descriptor to non-blocking mode """
    flags = fcntl.fcntl(fd, fcntl.F_GETFL)
    fcntl.fcntl(fd, fcntl.F_SETFL, flags | os.O_NONBLOCK)

def main():
    set_non_blocking(sys.stdout.fileno())  # Set stdout to non-blocking

    while True:
        rlist, _, _ = select.select([sys.stdin], [], [])
        for fd in rlist:
            if fd == sys.stdin:
                data = os.read(sys.stdin.fileno(), 1024)  # Read up to 1024 bytes from stdin
                if not data:
                    return  # No more data, exit the loop

                while data:
                    try:
                        bytes_written = os.write(sys.stdout.fileno(), data)
                        data = data[bytes_written:]  # Remove the written data from the buffer
                    except BlockingIOError as e:
                        if e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK:
                            sys.stderr.write("Pipe buffer is full, waiting...\n")
                            _, wlist, _ = select.select([], [sys.stdout], [])
                            continue  # Try writing again
                        else:
                            raise

if __name__ == "__main__":
    main()
