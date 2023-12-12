import sys
import time

def slow_process():
    for line in sys.stdin:
        time.sleep(0.0446)

if __name__ == "__main__":
    slow_process()
