# Intro

Welcome to Coding with Dustin

In some recent videos, we've learned about writing NodeJS appications and produce to
and consume from Kafka as well as some adjacent topics such as Avro and Schema Registry.

Today we're going to walk through some practical usage of writing such an application.

The use case:
In our domain, We have a user and that user can write posts. (show user, posts scheams)

For whatever reason, we want to have a denoralized user summmary (show schema)

We could use something like Spark for this. There are some advantages to this for example
it is mature, robust and there is a large ecosystem around it. However, there are some
disadvantages. For example, it can be more tricky to create an aggregate that uses all
time data rather than just transforming individual records or even working with a moving
widow, usually for analytical purposes.

Another disadvantage I've seen is the learning curve of working with these new technologies.
We must learn to write jobs for them, test those jobs, operate Spark, including knowing
how to hunt down trickly issues.

I propose that if the job can be done well with your teams current core technologies, the
burden of providing better features rests on the new technology, such as Spark. So let's
dive into solving this problem with NodeJS today so we can understand how it feels to
solve this problem purely with NodeJS so we can better compare it to alternatives.

# Bring up the DB

- Already showed DB schema. Just touch on that again.
- Create docker-compose.yaml to run postgres and start it up.
- Publish test records
  - copy/paste this in and reference "Kafka basics with NodeJS" video
- Consume users and posts to console log (copy/paste)
- Write upsertUser function and call it from user consumer
- Write upsertPost function and call it from post consumer (breeze faster since repeat)
- Write updateUserSummary function
  - Several supporting functions
  - Explain alternatives: "Why do we need to look up the user when we already have it
    in memory? If we optimize in this way, we create multiple code paths for updating
    the aggregate. Also, we would be mutating the aggregate each time, so the resulting
    domain of the function is much larger (inputs + existing state -> output rather than
    inputs -> output). Also, it forces our testing to involve SQL because some of the
    state will only live in the DB rather than all in memory. By fetching all inputs
    every time, we have a single code path that is fully unit testable and predictable.
- Call user summary from both consumers
- Demonstrate the application
- Thoughts on testing and types? Maybe hint to a follow-up video?
