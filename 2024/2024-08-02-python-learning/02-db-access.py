import psycopg

# Replace these values with your actual database credentials
username = "postgres"
password = ""
hostname = "localhost"
port = "5432"
database = "postgres"

# Construct the connection URI
uri = f"postgresql://{username}:{password}@{hostname}:{port}/{database}"

with psycopg.connect(uri) as conn:
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO test (num, data) VALUES (%s, %s)",
            (100, "abc'def"))

        cur.execute("SELECT * FROM test")

        # You can use `cur.fetchmany()`, `cur.fetchall()` to return a list
        # of several records, or even iterate on the cursor
        for record in cur:
            print(record)

        # Make the changes to the database persistent
        conn.commit()