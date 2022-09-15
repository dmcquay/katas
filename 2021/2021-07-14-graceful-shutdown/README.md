## How to teach this

1. No handling demo - if you don't handle signals, process will exit immediatly and client will get empty reply from server.
2. Add basic server.close() handling
3. Demo how open handle causes process to hang. Kill the process with kill signal: `ps aux | grep node | grep open-handles`.
4. Solution: Close the handle in server.close callback.
3. Demonstrate how keep-alive (with default 5 second timeout) delays the shutdown (via Insomnia, no coding)
4. Briefly explain how a long keep-alive timeout can be problematic and start to skim on how one might solve this with custom code or
   something like http-terminator, but keep it short and justify that this is almost never necessary to solve because keep alive timeouts
   should be short anyway.
5. Demo how hanging requests can cause the server to never shut down. Implement a timeout. Demo how this still results in an empty
   reply from server, but allows us to close other open handles such as DB connections.
6. Explain alternatives: process manager sending SIGKILL (which you should probably do anyway) and tracking/closing open connections.
7. Demo: http-terminator and recommend using it only/especially if you need a long keep-alive timeout

Bonus: show how to disable keep-alive?

```js
server.keepAliveTimeout = 0

app.use((req, res, next) => {
  res.set('Connection', 'close')
  next()
})
```