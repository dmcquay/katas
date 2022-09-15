Wanted to research at what point doing processing in node is too much and should be pushed into another thread/process of some sort.

When doing string manipulation on 1000 records, it took 8.5ms on my machine.
Let's bump that to 10ms for eash math.
That means we can do 100 requests per second with customers having 10ms of latency.
These are sufficiently small latencies IMO. Much master than the queries probably backing them (going to take much longer to fetch 10,000 records from a DB over network).

Therefore you'd have to be doing significantly heavier transforms or significantly more than 10k records before you need to even consider this.
