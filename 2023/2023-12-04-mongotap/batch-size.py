# https://www.mongodb.com/docs/v4.4/tutorial/iterate-a-cursor/#cursor-batches
# https://stackoverflow.com/questions/54815892/pymongo-cursor-batch-size

# This file is used to just fetch a bunch of docs with a low batch_size so that the batches can be easily observed in logs.
# Note that we are also running `db.setProfilingLevel(0,-1)` in `mongodb-init.sh` so that there will be logs showing batch
# size. After or during running this script, you can `docker compose logs | grep batchSize` to see related logs.

import time
from pymongo import MongoClient

MONGO_URI = 'mongodb://root:pass@127.0.0.1:27017/?authSource=admin&replicaSet=rs0'

def main():
    client = MongoClient(MONGO_URI)
    db = client['test']
    posts_collection = db['Posts']

    i = 0
    cursor = posts_collection.find(batch_size=10)
    for post in cursor:
        i += 1
        print(f'{i}')
        time.sleep(.5)

if __name__ == "__main__":
    main()