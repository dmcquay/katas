The point of this project is to test connecting to mongodb atlas, performing an intentional failover, and seeing how the client behaves/recovers.
Therefore, you need to create an atlas cluster w/ failover support (minimum M10).
You also need to create a user that has access. I suggest creating a temporary user with username/password method.
dbAdmin not useful. You need readWrite.
You also need network access.

Then provide the connection URI via the `MONGO_URI` env var (or put it in `.env` file) and run `npm start`.

Then in Atlas UI, you cal click the `...` menu and select `Test Failover`.

# Findings

If `useUnifiedTopology` is not set to `true`, one of my DB operations (`insertOne` or `findOne`) throws an error `MongoError: not master and slaveOk=false`. It does not hang indefinitely. It errors out. Therefore an app that doesn't handle this properly might still recover because the process would likely exit and, assuming a process manager of some sort is used, it would probably restart the process.

However, if the rejected promise is not handled, then the process would be stuck in an error state and not recovering.
