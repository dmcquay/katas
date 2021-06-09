## Plan

Here's how I would put together a project to read two streams and produce an aggregate.

Simple transform of individual objects

Aggregate of a stream
- count - could just increment with each message
- average - have to track total as well, but can do
- something that has at least 3 dependencies, each dep causing different types of changes
  - relate it to the dom and flux
  - demonstrate storing each in raw table and then dispatching ids in denormalized table that need update
  - could show query method vs in JS mem method and discuss testing implications