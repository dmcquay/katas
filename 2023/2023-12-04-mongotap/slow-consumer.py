import sys
import time

def slow_process():
    i = 0
    for line in sys.stdin:
        print(f"Processing: {line.strip()}")
        i += 1
        if i == 100:
            time.sleep(8 * 60)

if __name__ == "__main__":
    slow_process()
