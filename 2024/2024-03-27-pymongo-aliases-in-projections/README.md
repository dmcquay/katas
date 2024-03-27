# Context

I created this test because I'm getting an error when using aliases in projections when using tap-mongodb (Stitch).

I suspect the error is coming from this line:
https://github.com/singer-io/tap-mongodb/blob/5b4dec08a2a15f591f8b1cb60b39db72704da7cf/tap_mongodb/sync_strategies/oplog.py#L76

I'm considering submitting a patch to allow tap-mongodb to work okay with aliases by not assuming all values in the projection dict are integers
and wanted to first verify that there's no inherent limitation with pymongo.

# Setup

Basically just need python available and then install pymongo.

Here's one way:

```
pyenv install 3.10.13
pyenv virtualenv 3.10.13 pymongo-aliases-in-projections
pyenv activate pymongo-aliases-in-projections
pip install pymongo
python test.py
```

# Result

It works fine. The script inserts three records, then reads them using an alias in the projection and prints out the following:

```
{'nameAlias': 'John'}
{'nameAlias': 'Jane'}
{'nameAlias': 'Bob'}
```
