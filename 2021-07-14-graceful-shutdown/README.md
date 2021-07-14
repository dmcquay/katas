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

## Resources:

- [Health Checks and Graceful Shutdown](https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html)
- [Kubernetes best practices: terminating with grace](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-terminating-with-grace)
