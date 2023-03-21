# Learnings

- Stack traces are ordered from leaf nodes to root nodes. e.g. if A call B and B throws, B will be listed first in the stack trace.
- Rejected Promises don't throw stack traces
- Async/Await syntax solves the problem, but ONLY IF THE ERROR IS THROWN USING throw syntax. So if original error was from some lib that just returned a rejected promise, you need to consume that in an async function and throw a new error using throw. You DON'T have to do that all the way up the stack.
- There are examples on the web demonstrating that stack traces can work even with promises, but it is an iffy story:
  - https://stackoverflow.com/questions/71698860/stack-trace-with-fs-promises-and-async-await
  - But you have to use trace and clarify packages (see https://trace.js.org/)
  - And add these flags: `node --stack_trace_limit=100 -r trace -r clarify async/entry.js`
  - For some reason the resulting stack trace still doesn't mention `fnThatCallsFnThatThrows`
  - trace is not production safe (severly affects performance)
