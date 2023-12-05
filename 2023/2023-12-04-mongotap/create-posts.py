import time
import signal
import sys
import string
import random
from pymongo import MongoClient
from bson.objectid import ObjectId

def signal_handler(sig, frame):
    print('Interrupted with Ctrl+C, stopping the insertion process.')
    sys.exit(0)

# Register the signal handler for Ctrl+C
signal.signal(signal.SIGINT, signal_handler)

def random_string(length=50):
    # Generate a random string of the specified length
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))

def insert_documents(batch_size):
    # MongoDB connection setup
    client = MongoClient('mongodb://root:pass@127.0.0.1:27017/?authSource=admin&replicaSet=rs0')
    # client = MongoClient('mongodb://localhost:27017/')
    db = client['test']
    posts_collection = db['Posts']

    batch = []

    try:
        while True:
            # Create a document with a random string content
            document = {"content": random_string()}
            batch.append(document)

            # When the batch reaches the specified size, insert it
            if len(batch) == batch_size:
                posts_collection.insert_many(batch)
                print(f'Inserted a batch of {batch_size} documents.')
                batch = []

            # Small delay to avoid too rapid insertion (can be adjusted)
            time.sleep(0.01)

    except KeyboardInterrupt:
        print('Batch insertion stopped.')

if __name__ == "__main__":
    batch_size = 100  # Adjust the batch size as needed
    insert_documents(batch_size)

