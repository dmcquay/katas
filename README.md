## Things I'd like to experiment with

- Materialize/Spark/Flink
- Rust
- A REAL Functional Language. Probably Haskell and/or F#.
- Go feels worth my time. I'd like to spend time with it a bit more regularly.
- https://github.com/getstream/vg - I strongly prefer workspace based Go dev and this looks to make that easier.
- Make a "dual package" (JavaScript package in CommonJS and ES Modules) by following https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1

## Idea for an exercise from Tim Cash

1.) Write a program that fetches my github repo count without using promises or 
npm libraries (this shows they understand how to use callbacks and errbacks, work
with the nodejs documentation, and deal with API documentation. There is a snag
most people run into with github and they need to read the docs closely or use the
returned error to deduce the cause).

2.) Improve the program to sum the count of repos from `n` github users. The program
should request the repo counts in parallel. Again, without promises or external
libraries. (this should show they know how to fork and join async tasks)

3.) Improve the program to use promises 
(the code should move from a more nested structure to a linear structure)

Program 2
1.) Sum the values of a (too large to fit into memory) new line separated file. Generally this file is larger than 1.5 gigs and thus will not fit on the nodejs heap and each line is just an ascending number (easy to test for correctness n(n+1)/2). 
2.) Improve the program to sum the file in parallel
(this will show knowledge of nodejs streams which are at the base of most common I/O libraries. including fs, http, crypto...)```

Here are some interview / workshop questions I get valuable conversation out of as well
1.) Is nodejs single threaded?
2.) Explain the event loop and the benefits of this architecture when building network proxies
3.) What is libuv
4.) What is V8
5.) What would cause starvation of the event loop thread
6.) What would cause starvation of the worker threads
