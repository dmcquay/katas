import os
import fcntl
import errno

r, w = os.pipe()  # Create a pipe

# Set the write descriptor to non-blocking
fcntl.fcntl(w, fcntl.F_SETFL, os.O_NONBLOCK)

bytes_written = 0
try:
    while True:
        os.write(w, b'x')
        bytes_written += 1
except BlockingIOError as e:
    if e.errno == errno.EAGAIN or e.errno == errno.EWOULDBLOCK:
        print(f"Pipe buffer size is approximately: {bytes_written} bytes")
    else:
        raise

os.close(r)
os.close(w)
