## 01-no-handling.js

The examples I will share today use the http module which is pare of the core modules provided by the nodejs. Other libraries such as koa and express generally build upon this module and therefore what you learn today should apply equally well to those other libraries and frameworks.

This first example is about the most simple server we can create. No matter what route you request, you will get the same 200 status code and a body of "ok". The only interesting thing here is that we are delaying for 5 seconds before responding to simulate our route actually doing some I/O such as reading from a database, before responding. 5 seconds is a bit long for most cases, but slowing down the timeline will help us test and observe some things today.

## Table defining these three signals

When we want our process to stop, we will send it a signal. There are three
signals we'll be considering today: SIGINT, SIGTERM AND SIGKILL.

## 01-no-handling.js

So far, we are not doing any custom handling of these signals so we will get the default havior of nodejs which is to immeidately kill the process when any of these signals is received. You can see here that our in-flight request is not allowed to finish and so we get an empty reply from the server.

This is not ideal. We often need to close such a process in order to deploy new code or to scale down a cluster. Ideally, when doing so, we would stop directing any traffic to that node immediately, but fulfill any in-flight requests before stopping the process. Let's take a look at the most basic way to do that.

## 02-server-close.js

Here you can see how we can handle the SIGTERM and SIGINT signals. In our handler, we just call server.close(). At this point, the server will not accept any more incoming requests, but as you can see it will finish any in-flight requests before closing. And so we can an "ok" response instead of an empty reply.

## 03-open-handles.js

In real world applications you have open handles to resources such as a database that must be closed before a nodejs process will exit. Here I create an interval which will serve as a very simple example.

Because we are not clearing this interval, the process will never exit. We must kill the process.

## 04-close-handles.js

server.close accepts a callback that will be called when all connections have been closed. This is an appropriate place to clear our interval, close your database connections, etc.

With this in place, our process will now be able to exit.

## 05-keep-alive.js (maybe show my face for some of these sections since there's so much talking?)

Have you ever wondered what keep-alive is? Sometimes we need to fetch many small resources quickly. Negotiating new connections can occupy a non-trivial amount of the total time to fetch all of these resources. Fear not! More than one file can be sent over a single connection! This is called keep alive. In the response, the server can include a "connection" header that tells the client whether or not it is permitted to reuse a connection for multiple requests and, if so, how long that connection can remain idle without being closed.

This adds a bit of complexity to our graceful shutdown because it can cause connections to remain open even when no requests are being handled. Let's consider an extreme example. In Node.js you can set the amount of time an idle connection can remain open, called the keep alive timeout, like this. We'll set it to one thousand seconds, which is quite large for a keep alive timeout. The default is 5 seconds.

In our examples so far, we've been using curl to issue requests. While curl does support keep-alive, when you give it only a single URL, it will close the connection upon completion. To demonstrate keep alive more clearly, I'm going to use a client called Insomnia. It will keep connections open as long as the timeout allows, waiting to see if you will make another request. Connections are not closed until the timeout is reached or you close Insomnia.

I've also added some logging to this example to track open connection counts. As you can see here, Insomnia opens a connection, but it is not closed. The count remains at 1. Next we issue another request using curl and we can see the count increase to 2, but quickly drop back down to 1. Now if we issue another request using Insomnia, it will reuse the existing connections so we will not see any change to the connection count.

Let's send SIGINT to our process. It reports that it is shutting down, but it cannot complete the shutdown because there is an open connection to Insomnia. When I close Insomnia, the connection is closed and the server process can now exit.

Is this a problem we need to solve? With the default timeout of 5 seconds, I don't think so. I'm happy to wait 5 seconds for the server to close connections. But you may have need for a significantly longer keep alive timeout or you may need server processes to shut down especially fast. Let's discuss how you can shut down more quickly, but remember to consider that you may not need to solve this at all and there is value in keeping your code simple.

What you want to do is keep track of what is happening on each connection. If a connection is idle, close it. If a connection is actively fulfilling a request, let that complete and then close the connection. This way we can still avoid disrupting our clients while also closing our process as quickly as possible. In addition, you should also implement a timeout to forcefully close the process should we fail to close all the connections in a reasonable amount of time. You could do all this yourself, but I would argue that this starts to get complex enough that it makes sense to use a library to handle it for you. I will share one in just a moment, but first let's look at one more reason you might have connections that stay open too long.

## 06-hanging-request.js

If a request taking too long to fulfill (or perhaps it is never going to be fulfilled due to some poor programming) then the associated connection cannot close. The general solution here is to add a timeout after which the server will be forcefully shut down. We have a few options here. The first and easiest I will demonstrate now.

On line 11 we delay sending the response for 500 seconds to simulate our route handler being stuck in some way. The goal is for our server to forcefully shutdown after some timeout period far less than 500 seconds. This will cause an empty reply from the server, which we are willing to accept in this context.

The code that runs AFTER connections have been closed (or we gave up waiting) has been moved into a new function called finalShutdown so that we can call it from multiple places. We of course call it from the main location inside the server.close callback on line 36. We now set a timeout to forcefully call finalShutdown after 10 seconds. In this case, we pass true to finalShutdown, which causes us to call process.exit after closing any doing cleanup. We do this because we know we will still have one or more open connections and therefore the process would never exit. Alternatively we could have enumerated the open connections and closed them one by one.

Also note that we clear the timeout we created or else that would cause the process to hang as well.

Let's see this in action. We run the server and immediately shut it down to make sure that works nicely. Run it again. This time, make a request, which of course will hang. Then send SIGINT to the process. As expected, after 10 seconds, curl receives an empty reply from the server and the server process exits.

## 07-http-terminator.js

Finally, let's wrap this up by examining a library that can help us implement all of these best practices and more -- http-terminator. Let's set our keep alive timeout to something more reasonable like 10 seconds.

*TODO* - New screen recording showing the full http-terminator example. What I recorded only shows the top of the file.

This time, instead of calling server.close, we create an instance of http terminator and as it to terminate for us. This will handle the timeout from our previous example. It will also handle keep alive connections, but more elegantly. Specifically, it will close any open conenctions as soon as they are idle. In past examples, with a keep alive timeout of 10 seconds, we would have wait up to 10 seconds for the process to close unless we closed Insomnia. In this example, http-terminator will wait for the in-flight request to complete, which should take 5 seconds, and then will immediately close the connection so that we don't have to wait for the full 10 second timeout. Furthermore, if there were no in-flight requests, it would be able to close the process immediately!

Start the server
Issue a request with Insomnia
Wait for the request to finish
Now interrupt the process
At this point, Insomnia has no in-flight requests even though it does have an open connection, so the process is able to shut down immediately
Let's try again, but interrupt the process while a request is in flight
As expected, the process waits for the request to finish and then exits immediately

## Summary

So what should I do? If you need long-lived keep-alive connections, http-terminator is the way to go. But if you don't need that or you don't need keep-alive at all, http-terminator may not be justified. Remember, all dependencies come at a cost. Implementing this on your own should look something like example 06 hanging request and is not terribly complicated.