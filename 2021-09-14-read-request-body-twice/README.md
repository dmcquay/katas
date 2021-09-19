How to test:

```
yarn
node index.js

# in another terminal:
curl -X POST -d asdf http://localhost:3000/test
```

Things this demonstrates:

- You can't read the stream twice. The middleware gets it only. If you disable the middleware, then the request handler gets it.
- If you add an err argument as first argument to middleware, it doesn't get called. Technically it will get called but only to handle errors. Different type of middleware. This is standard express API.
