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
    cursor = posts_collection.find()
    for post in cursor:
        i += 1
        print(f'{i}')
        time.sleep(.5)

if __name__ == "__main__":
    main()

# Findings
#
# When no batch size is specified, the initial batch is 101.
# Subsequent batches will include as many docs as will fit within the 16 MB limit.
# We can observe this by looking at the nreturned property in the logs below, which were generated with no batch size specified.
# This agrees with Mongo's docs on [cursor batches](https://www.mongodb.com/docs/manual/tutorial/iterate-a-cursor/#cursor-batches).
# If a batch size is specified, then all batches will be of that size or less (up to the 16 MB limit).
#
# {
#   "t": { "$date": "2023-12-13T02:51:16.529+00:00" },
#   "s": "I",
#   "c": "COMMAND",
#   "id": 51803,
#   "ctx": "conn14",
#   "msg": "Slow query",
#   "attr": {
#     "type": "command",
#     "ns": "test.Posts",
#     "command": {
#       "find": "Posts",
#       "filter": {},
#       "lsid": { "id": { "$uuid": "ff56f393-2187-4eec-a5e0-f7a5ca5bf4ce" } },
#       "$clusterTime": {
#         "clusterTime": { "$timestamp": { "t": 1702435870, "i": 1 } },
#         "signature": {
#           "hash": {
#             "$binary": {
#               "base64": "fiofDErQVs+dT2TKnKDiqTiZvWY=",
#               "subType": "0"
#             }
#           },
#           "keyId": 7311906256338288645
#         }
#       },
#       "$db": "test"
#     },
#     "planSummary": "COLLSCAN",
#     "cursorid": 8871200774192792033,
#     "keysExamined": 0,
#     "docsExamined": 101,
#     "numYields": 0,
#     "nreturned": 101,
#     "reslen": 510467,
#     "locks": {
#       "FeatureCompatibilityVersion": { "acquireCount": { "r": 1 } },
#       "ReplicationStateTransition": { "acquireCount": { "w": 1 } },
#       "Global": { "acquireCount": { "r": 1 } },
#       "Database": { "acquireCount": { "r": 1 } },
#       "Collection": { "acquireCount": { "r": 1 } },
#       "Mutex": { "acquireCount": { "r": 1 } }
#     },
#     "storage": {},
#     "protocol": "op_msg",
#     "durationMillis": 0
#   }
# }
#
# {
#   "t": { "$date": "2023-12-13T02:52:07.401+00:00" },
#   "s": "I",
#   "c": "COMMAND",
#   "id": 51803,
#   "ctx": "conn14",
#   "msg": "Slow query",
#   "attr": {
#     "type": "command",
#     "ns": "test.Posts",
#     "command": {
#       "getMore": 8871200774192792033,
#       "collection": "Posts",
#       "lsid": { "id": { "$uuid": "ff56f393-2187-4eec-a5e0-f7a5ca5bf4ce" } },
#       "$clusterTime": {
#         "clusterTime": { "$timestamp": { "t": 1702435920, "i": 1 } },
#         "signature": {
#           "hash": {
#             "$binary": {
#               "base64": "LrUVAb8aGG0afrntG/nVy/S/BIc=",
#               "subType": "0"
#             }
#           },
#           "keyId": 7311906256338288645
#         }
#       },
#       "$db": "test"
#     },
#     "originatingCommand": {
#       "find": "Posts",
#       "filter": {},
#       "lsid": { "id": { "$uuid": "ff56f393-2187-4eec-a5e0-f7a5ca5bf4ce" } },
#       "$clusterTime": {
#         "clusterTime": { "$timestamp": { "t": 1702435870, "i": 1 } },
#         "signature": {
#           "hash": {
#             "$binary": {
#               "base64": "fiofDErQVs+dT2TKnKDiqTiZvWY=",
#               "subType": "0"
#             }
#           },
#           "keyId": 7311906256338288645
#         }
#       },
#       "$db": "test"
#     },
#     "planSummary": "COLLSCAN",
#     "cursorid": 8871200774192792033,
#     "keysExamined": 0,
#     "docsExamined": 199,
#     "cursorExhausted": true,
#     "numYields": 0,
#     "nreturned": 199,
#     "reslen": 1005660,
#     "locks": {
#       "FeatureCompatibilityVersion": { "acquireCount": { "r": 1 } },
#       "ReplicationStateTransition": { "acquireCount": { "w": 1 } },
#       "Global": { "acquireCount": { "r": 1 } },
#       "Database": { "acquireCount": { "r": 1 } },
#       "Collection": { "acquireCount": { "r": 1 } },
#       "Mutex": { "acquireCount": { "r": 1 } }
#     },
#     "storage": {},
#     "protocol": "op_msg",
#     "durationMillis": 2
#   }
# }
