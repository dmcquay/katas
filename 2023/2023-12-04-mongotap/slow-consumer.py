import sys
import time

def slow_process():
    for line in sys.stdin:
        print(f"Processing: {line.strip()}")
        time.sleep(5)  # Sleep for 5 seconds to simulate slow processing

if __name__ == "__main__":
    slow_process()
