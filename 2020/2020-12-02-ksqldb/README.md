The purpose of this practice is to learn about ksqlDB. This is my first time reading about it or trying to set it up.

Starting with their [quickstart](https://ksqldb.io/quickstart.html)

Next I went through the [tutorial on materialized caches](https://docs.ksqldb.io/en/latest/tutorials/materialized/?_ga=2.118896713.1192941730.1606942292-720229173.1596646518).

I skipped the parts about Debezium because my data is already in Kafka. I merely need to read those, join them and form a materialized view.

## Commands to try

```sh
dc up -d
docker exec -it ksqldb-cli ksql http://ksqldb-server:8088
```

_Note: To exit ksqlDB's interactive CLI, type `exit`._

Need to run this to tell ksqlDB to start all queries from the earliest point in each topic:
```sql
SET 'auto.offset.reset' = 'earliest';
```

```sql
CREATE STREAM users (id INT, name VARCHAR)
  WITH (kafka_topic='users', value_format='json', partitions=1);
```

or if you are creating a stream for an existing topic:

```sql
CREATE STREAM users (id INT, name VARCHAR)
  WITH (kafka_topic = 'users', value_format = 'json');
```

Read the data from that stream:

```sql
SELECT * FROM users EMIT CHANGES;
```

Insert some data. I tried doing multiple values per insert statement and it didn't work.

```sql
INSERT INTO users (id, name) VALUES (1, 'Dustin');
INSERT INTO users (id, name) VALUES (2, 'Erik');
INSERT INTO users (id, name) VALUES (3, 'Emily');
INSERT INTO users (id, name) VALUES (4, 'Scott');
```

Now create a materialized view. Darn, this doesn't work. Says that my select query produces stream, not a table...

```sql
CREATE STREAM some_users AS
  SELECT u.id, u.name
  FROM users u
  WHERE u.id > 2;

DESCRIBE EXTENDED some_users;

PRINT SOME_USERS FROM BEGINNING;
```

## Goal

Here's a scenario and how I would solve it by creating a native kafka listener for each of the three streams involved. I would like to see how to best solve this with ksqlDB for comparison.

Streams:
- course
- tag_type
- tag
- course_tag

A course will have 0 or 1 tags associated for each tag_type.

Want to create a course table has one extra column called atomic_tag that is populated with the tag associated with that course where the tag_type is 'atomic'.

Solution using native kafka consumers:

- Create a function that, given a course_id, looks up the atomic tag for that course (from tag, tag_type and course_tag tables) and updates course.atomic_tag with that value.
- When a course message is received, store the course raw (or possible with some transformation).
- When a tag or course_tag message is received, store them raw.
- When any of these topics are consumed, after writing the raw values, also call the helper function from step 1.
- Optionally, publish records back to the DVS if derivative streams for this data are desired.

## Misc Notes

kafka-server and the broker each randomly died once while I was playing with this. Not sure why it is so unreliable. Hopefully it is specific to the dev setup provided in the docker-compose file.