Audio: I will demonstrate how you can store kafka message addresses and use them
to look up messages later. This can be helpful for debugging. First, let's take a look at a basic consumer.

## Screen recording: Show basic consumer, pre-written, publishing a message and consuming it.

Audio (folders): I am providing a start folder and a final folder. The start folder contains a basic consumer that reads posts from kafka and stores them in a postgres table. The final folder contains the final state of the code that stores message addresses. During this video, we will be making the start folder look like the final folder.

-- docker-compose.yaml
First I want you to quickly understand the code that we are starting with. I have provided a link to another video that explains a similar setup in more detail. Docker compose provides us with kafka and postgres. You'll also notice we have zookeeper. This is just a dependency of kafka.

-- schema.sql
Schema.sql will be applied when we start docker compose for the first time. So far, all we have is a very basic table to store posts.

-- publish.js
In publish.js, we configure a producer and then publish two post objects to the posts topic. Note that both of these posts have the same id with different content.

-- command line: node publish.js
Let's run our publisher. This error is benign. I happens because we just published to a topic that did not exist yet. Our kafka cluster is configured by default to allow publishing to topics that don't exist and they will simply be created on the fly. However, since kafka is distributed, there is a brief period here where the leader election process has not yet completed. Our publisher handles this scenario just fine despite the error.

-- command line: console consumer
I have provided a few helpful commands in this file. This first one will read all messages from our posts topic and print them to the console so we can see that they were published successfully.

-- consume.js
Now let's take a look at the consumer. It simply reads each message, assumes it is a post with no validation and calls a function to upsert it into our database. You should validate what you are getting! But let's keep this example simple.

-- db.js
And here you can see the query that is upserting our posts.

-- command line: node consume.js
Time to run our consumer! We can see that both messages were processed.

-- psql
Let's see what our postgres table looks like now. I'm just going to make sure tuples only is off so that you can see the column names. And here we are. There is only one row because when we found a second record with the same id, it will update the existing row with that id. The content shown is from the second message.

## Screen recording: Introduce a publishing order problem.

The whole point of this video is to help you debug when something goes wrong so let's introduce an ordering problem. We'll pretend that somehow our initial content message was produced last.

_Start video_

Let's reset our database and kafka so we can have a fresh run.
Now let's switch the order these two messages are published in.


Audio: Explain how we can't know for sure what happened. If we stored every message we processed and in what order, then we could fully reproduce the problem. Kafka already stores
the messages for us so if we just kept the address of those messages, then we could look all of the messages up later.

## Slide: Kafka addresses

A message address consists of the topic, the partition and the offset. Since our posts table is only associated with the posts topic, we won't bother to store that.

Audio: Explain components of a kafka address

Screen recording:
- Show in code how we can get the message address
- Add table column to store addresses
- Alter upsert code
- Rerun the out of order problem
- Run query to retrieve the message addresses
- Show command to retrieve the two messages
- Show how to modify the upsert query if too many messages per row causing perf issues

Explaining upsert code:
When we pass in the partition and offset of a message to this upsertPost function we only have access to the partition and offset of the most recent message. If this is an insert, then we simple set the value of the message addresses array to a new array with this one address in it. But if we are updating an existing row, we must be sure to append to the array, which is what line 15 is doing.

## more complex update for offsets

'(etl_channel.offsets || EXCLUDED.offsets)[array_length(etl_channel.offsets, 1)-9:]'

## Outro

I have one last tangent for you. If you produce messages to kafka and kafka is not your source of truth, you might want to consider consuming the topics that you publish so that you can verify they actually match your source of truth. When doing so, storing these addresses may prove useful so that when you find discrepancies you are better equipped to identify the root cause rather than just fixing the bad record or records that you found.

I have posted links to the code from this video in the comments.

If you watched this video to the bitter end, I'm so glad that you apparently found it useful! If you did, please let YouTube know by subscribing or giving this video a thumbs up! See you next time!