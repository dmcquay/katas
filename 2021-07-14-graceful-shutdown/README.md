In PaaS API, when turning off nodes (to scale down or to deploy), we first instruct the load balancer to stop sending traffic to that node and then we wait some arbitrary amount of time for all in flight requests to hopefully finish before killing the node. The purpose of this exercise is to learn how to instruct express, upon receiving a

## Theory

There's lots of info in the resources below about liveness, readiness and health checks, but I don't think that is all necessary for a minimal implementation. I like to start
minimal. What I think is actually needed is to handle SIGTERM by waiting for all requests to finish, then close connections (e.g. DB), and then stop the process. Then set
the timeout in k8s to a high-ish value to give the process time to finish all in-flight requests.

## No handling

Start the server: `node 01-no-handling.js`
In another tab, create a request: `curl http://localhost:3000/`
In another tab, send TERM signal to server: `lsof -n -i4TCP:3000 | grep LISTEN | awk -F\ '{print $2}' | xargs kill -TERM`

What you'll see is that the process shuts down immediately and the client gets an empty reply from the server. What we want to see instead is that our request is fulfilled
and then the server shuts down.

## Minimal handling

Start the server: `node 02-minimal.js`
In another tab, create a request: `curl http://localhost:3000/`
In another tab, send TERM signal to server: `lsof -n -i4TCP:3000 | grep LISTEN | awk -F\ '{print $2}' | xargs kill -TERM`

This time you will see any in-flight requests fulfilled first, and then the process will exit.

## Middleware and other improvements

Start the server: `node 03-middleware.js`
In another tab, create a request: `curl http://localhost:3000/one`
In another tab, send TERM signal to server: `lsof -n -i4TCP:3000 | grep LISTEN | awk -F\ '{print $2}' | xargs kill -TERM`
In another tab, create a request: `curl http://localhost:3000/two`

In this example, we call server.close() immediately upon SIGTERM which is important because it causes the http server to stop accepting connections.
We still have to wait for in-flight requests to complete as usual.
Also in this example, we have extracted the logic out into some middleware so it doesn't pollute our code as much.

Note that there is a lot of temporal coupling in this solution that I can't figure out how to get around:

- All your route handlers must call `next()` or else the afterMiddleware won't get called. Libs like terminus don't require this
  so there must be a way to avoid this.
- Must `use` before and after middleware in the right places
- Must call setServer at some point

## Terminus

Start the server: `node 04-terminus.js`
In another tab, create a request: `curl http://localhost:3000/one`
In another tab, send TERM signal to server:

```
lsof -n -i4TCP:3000 | grep LISTEN | awk -F\  '{print $2}' | xargs kill -TERM
```

In another tab, create a request: `curl http://localhost:3000/two`

You'll get the same results as our previous (03-middleware.js) example. You'll also get a health check endpoint at `/healthcheck`.

Overall this feels like it is accomplishing everything in our custom solution, but with more rigor and some bonus features.

## Resources:

- [Health Checks and Graceful Shutdown](https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html)
- [Kubernetes best practices: terminating with grace](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-terminating-with-grace)
- [KeepAlive preventing shutdown](https://stackoverflow.com/questions/55478868/node-graceful-shutdown-destroy-inactive-keepalive-connections-but-complete-ong)

## Updates after I learned more stuff later

All you have to do is call server.close. At this point, the server will immediately stop accepting new requests. It takes a callback
that will be called when all open connections (not requests) have been closed. At this point you can then close any other open handles
such as DB connections and then your process should end naturally with no need to call process.exit.

Keep-Alive poses a problem here because it will cause connections to stay open. Insomnia does this by default so you can use it to
test. If your keep alive timeout (set by server.keepAliveTimeout in milliseconds) is set to something small-ish, then this really isn't
a problem worth solving. Just wait for them all to timeout and you should be fine.

When setting keepAliveTimeout to 0, keep alive is not actually disabled. You have to separately inform the client of that via middleware
like this:
```js
app.use((req, res, next) => {
  res.set('Connection', 'close')
  next()
})
```

Question: Is the keep alive timeout automatically set in the response header when server.keepAliveTimeout is set to a value > 0? I
can't remember.

So what if you have a really long keep alive timeout or for some other reason you want to shut down connections more aggressively?
The problem is that the server connections are sockets (think layer 4 of the OSI model) and remain open during a keep alive session.
Fundamentally what we need to do is to track requests within a connection. Once we get the signal to shutdown, we look for any open
connections that don't have an open request and we close them. For any connections that do have in-flight requests, we wait for the
response to finish and then close them. When all are closed, then we can proceed with shutdown. You can do that by with the server
object only, but it requires you to look at the raw HTTP protocol. It might be easier to implement this with something like express
middleware.

Side note: I think server.close will potentially hang indefinitely if connections never close. You may want a timeout of some sort to
ensure the process is shut down eventually. Many process managers will handle this for you though. They will start by sending SIGTERM
and after some timeout they will send SIGKILL. So you don't really have to handle this in your application code.

Question: There are lots of libraries to help with all of this such as terminus and http-terminator. How do they help? When should I use them?

*http-terminator*

> When you call server.close(), it stops the server from accepting new connections, but it keeps the existing connections open indefinitely.

This library some nice things like notifying sending a Connection: close header in responses to any open keep-alive connections rather than
just closing them. However, I have found that clients actually handle this just fine unless they happen to be mid-request. Also, this is
only an issue if your keep alive timeout is longer than your shutdown timeout. The default is 5 seconds and I think setting it much higher
has little benefit so I really don't think most developers need to be concerned with this.

The other problem it solves is if you have a connection that remains open for a long time because the server is taking a long time to fulfill
a request (or perhaps is never going to respond to that request). In this case, you need some kind of timeout to make us give up waiting
for that request to be fulfilled. By default, server.close will wait forever for this connection to close. http-terminator will close it
for us. Many process or deployment managers will handle this for us by sending a SIGTERM after some timeout. You could just rely on this.
However, that means you're not shutting down other open connections such as DB handles. So perhaps it is best to implement this timeout
in your application. So maybe you want http-terminator for that? At the same time, this code is trivial. Is it really worth a dependency?
And finally, any requests that are still being handled could in theory be constantly opening new handles of some sort and so even though
you close them, the process could still hang. So at the end of the day, you still need a process manager capable of sending a SIGKILL
after some timeout.

In summary, http-terminator is kind of nice, but I think it is more of a nice-to-have. It probably makes sense to just keep your keep-alive
timeout low, implement a basic timeout that tries to shut down open connections and close the process and finally you should probably
also have a process manager that will send a SIGKILL after some timeout. If you choose to use http-terminator to help you implement all of
that, it is probably only saving you a few lines of code.

*terminus*

I think this is more specifically to create a readiness probe route to communicate with k8s when pods should not be sent any more requests.
The README states that you don't even need this if the ingress controller you use route via the Service.