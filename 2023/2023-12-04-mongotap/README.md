# Full directions

https://github.com/singer-io/tap-mongodb

# Short directions

Use full directions first time.

```
source ~/.virtualenvs/tap-mongodb/bin/activate
```

# Key for mongo

The key is committed to git, but for the record, this is how it was generated:

```
openssl rand -base64 756 > mongo-keyfile
chmod 400 mongo-keyfile
```

# Starting up mongo without compose

```
docker run --rm -d -p 27017:27017 -h $(hostname) --name mongo mongo:6.0.5 --replSet=dbrs
sleep 5
docker exec mongo mongosh --quiet --eval "rs.initiate();"
```