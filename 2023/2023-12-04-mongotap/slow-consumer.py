import sys
import time

batch_size = 100
effective_session_timeout_minutes = 20

sleep_seconds = (effective_session_timeout_minutes / batch_size) * 60

def slow_process():
    for line in sys.stdin:
        time.sleep(sleep_seconds)

if __name__ == "__main__":
    slow_process()
