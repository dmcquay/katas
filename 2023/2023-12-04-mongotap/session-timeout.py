import time
from pymongo import MongoClient

MONGO_URI = 'mongodb://root:pass@127.0.0.1:27017/?authSource=admin&replicaSet=rs0'

def main():
    client = MongoClient(MONGO_URI)
    db = client['test']
    posts_collection = db['Posts']

    for post in posts_collection.find():
        time.sleep(60 * 60 * 10)

if __name__ == "__main__":
    main()