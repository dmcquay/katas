import string
import random
from pymongo import MongoClient

def random_string(length=5):
    # Generate a random string of the specified length
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))

def update_documents():
    # MongoDB connection setup
    client = MongoClient('mongodb://root:pass@127.0.0.1:27017/?authSource=admin&replicaSet=rs0')
    db = client['test']
    posts_collection = db['Posts']

    for post in posts_collection.find():
        # Append a new random string to the 'items' array of the current document
        new_item = random_string()
        posts_collection.update_one(
            {'_id': post['_id']},
            {'$push': {'items': new_item}}
        )
    print('Updated all documents with a new item.')

if __name__ == "__main__":
    update_documents()
