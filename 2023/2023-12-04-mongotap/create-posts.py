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

def random_string(length=5):
    # Generate a random string of the specified length
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))

def generate_random_items(num_items=0):
    # Generate an array of random strings
    return [random_string() for _ in range(num_items)]

def insert_documents(client, batch_size):
    # MongoDB connection setup
    db = client['test']
    posts_collection = db['Posts']

    batch = []
    prev_time = time.time()

    try:
        while True:
            # Create a document with a random string content
            document = {
                "content": random_string(),
                "items": generate_random_items()
            }

            batch.append(document)

            # When the batch reaches the specified size, insert it
            if len(batch) == batch_size:
                posts_collection.insert_many(batch)
                # print(f'Inserted a batch of {batch_size} documents in {time.time() - prev_time} seconds.')
                prev_time = time.time()
                batch = []
                break

    except KeyboardInterrupt:
        print('Batch insertion stopped.')

if __name__ == "__main__":
    client = MongoClient('mongodb://root:pass@127.0.0.1:27017/?authSource=admin&replicaSet=rs0')
    batch_size = 100  # Adjust the batch size as needed
    docs_inserted = 0
    desired_doc_count = 300000
    while docs_inserted < desired_doc_count:
        insert_documents(client, batch_size)
        docs_inserted += batch_size
        # print(f'Doc count: {docs_inserted}')

