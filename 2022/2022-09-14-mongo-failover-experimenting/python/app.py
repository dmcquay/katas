import datetime
from pymongo import MongoClient
import os

client = MongoClient(os.environ["MONGO_URI"])
db = client.default

user = {
    "name": "Dustin",
    "date": datetime.datetime.utcnow()
}
inserted_user = db.users.insert_one(user)
print(inserted_user.inserted_id)