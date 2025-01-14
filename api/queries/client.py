import os
from pymongo import MongoClient

client = MongoClient(os.environ.get("DATABASE_URL", ""))
db = client["mongo-data"]


DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME")


class MongoQueries:
    @property
    def collection(self):
        db = client["mongo-data"]
        return db[self.collection_name]


db_users = []
db_properties = []
db_reservations = []
