CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  kafka_addresses TEXT[] NOT NULL
);