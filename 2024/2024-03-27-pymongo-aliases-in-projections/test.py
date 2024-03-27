from pymongo import MongoClient

# Connect to the local MongoDB server
client = MongoClient('mongodb://localhost:27017/')

# Access the database
db = client['projection-alias-test']

# Access the collection
collection = db['mycollection']

# Insert some records
records = [
    {"name": "John", "age": 25},
    {"name": "Jane", "age": 30},
    {"name": "Bob", "age": 35}
]
collection.insert_many(records)

# Read the records with a projection
projection = {"nameAlias": "$name", "_id": 0}  # Include only the 'name' field, exclude '_id' field
result = collection.find({}, projection)

# Print the retrieved records
for record in result:
    print(record)