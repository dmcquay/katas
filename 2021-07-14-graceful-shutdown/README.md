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
