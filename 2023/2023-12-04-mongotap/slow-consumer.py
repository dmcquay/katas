import sys
import time

def slow_process():
    i = 0
    for line in sys.stdin:
        i += 1
        # print(f"Processing line {i}")
        if i % 20 == 0:
            print(f"Processing batch {int(i / 20)}")
            time.sleep(.5)
        # if i == 50:
        #     time.sleep(5 * 60)

if __name__ == "__main__":
    slow_process()
