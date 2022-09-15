## Welcome

Debugging kafka consumers
What is a message address?
How can I get and store it?
How can we use that to help us debug later?

## Screen recording: Basic consumer, pre-written, publishing a message and consuming it

Audio (folders): I am providing a start folder and a final folder. The start folder contains a basic consumer that reads posts from kafka and stores them in a postgres table. The final folder contains the final state of the code that stores message addresses. During this video, we will be making the start folder look like the final folder. I've also put any useful terminal commands in this HELPFUL_COMMANDS file for your reference. You can find a link to this project in the comments.

I will quickly review the code that we are starting with. I will also provide a link in the comments to a video that explains a similar setup in more detail.

### docker-compose.yaml
Docker compose provides us with kafka and postgres. Zookeeper is just a dependency of kafka.

### schema.sql
Schema.sql will be applied when docker compose creates the postgres container for the first time. Here I define a very basic table to store posts.

### publish.js
In publish.js, we configure a producer and then publish two post objects to the posts topic. Note that both of these posts have the same id with different content. If consumed in the correct order, the final content of this post should be "Improved content"

### consume.js
Our consumer reads each message, assumes it is a post and calls a function to upsert it into our database.

### db.js
And here you can the upsert query.

### command line
Let's bring up postgres and kafka.
And take a peek at the posts table.
Next, we'll run our producer which will send two messages to kafka.

### quick note about the publish error
This error is benign. It happens because we just published to a topic that did not exist yet. The kafka cluster is configured to allow publishing to topics that don't exist and they will simply be created on the fly. However, since kafka is distributed, there is a brief period here where the leader election process has not yet completed. Our publisher handles this scenario just fine despite the error.

### more command line
This helpful command runs the kafka console consumer so we can see that our two messages have been published successfully.
Let's run our consumer.
And finally, I'll verify that we only have one post in our database with the final content of "Improved content"

## Screen recording: Introduce a publishing order problem.

The whole point of this video is to help you debug when something goes wrong so let's introduce an ordering problem. We'll pretend that somehow our initial content message was produced last.

Let's start fresh by recreating the postgres and kafka containers.
Now let's switch the order these two messages are published in.
Run the publisher.
And the consumer.
Let's confirm our post's content is now incorrectly set to "Initial content".

We can see there is a problem, but we can't reliably reconstruct which messages were processed in what order to produce this final state.

And here is the point of this video. Messages in kafka can be looked up later if we have their addresses.
## Slide: Kafka addresses

A message address consists of the topic, the partition and the offset. Since our posts table is only associated with the posts topic, we won't bother to store that.

## Screen recording: Store addresses, lookup messages, store last 10 only

We'll need a place to store these addresses. A text array will work.
Let's reconstruct our database with this new schema.
Partition is a property on the ConsumerRunConfig which is the first argument of our eachMessage function.
Offset is a property on the message object.
messageAddresses is an array, but we only have access to the current address, so we'll just create an array with one item.
We'll format the address by separating the partition and offset with a colon.
Here we modify our upsert query to include the new messagesArray property.
If we are updating an existing post, we append to the array, which is what line 15 is doing.
Let's publish and consume these messages again to see how these addresses are stored.
And here we can see the two message addresses. They are offsets 0 and 1, both from parttion 0.
Finally, I'll show you how to look up these individual messages by their addresses using the kafka console consumer.
I've included the command in HELPFUL_COMMANDS.
With this, you should be able to reproduce this exact scenario so you can troubleshoot.

## Screen recording: too many messages per row

If you an an extremely high number of messages per row, the message_addresses array can get long enough to cause performance problems. I have solved this by keeping only the most recent messages.
This syntax will get the job done.

## Screen recording: avro consumer

In this video I serialized my messages using JSON in plain text to keep it simple. If you are using avro to serialize your messages, then you'll want to use this modified command, which is also available in the HELPFUL_COMMANDS file, to deserialize the key and/or value before printing. In this example, my value is avro serialized and my key is just a string so you can see an example of each.

## Outro

I have one last tangent for you. If you produce messages to kafka and kafka is not your source of truth, you might want to consider consuming the topics that you publish so that you can verify they actually match your source of truth. When doing so, storing these addresses may prove useful so that when you find discrepancies you are better equipped to identify the root cause rather than just fixing the bad record or records that you found.

I have posted links to the code from this video in the comments.

If you watched this video to the bitter end, I'm so glad that you apparently found it useful! If you did, please let YouTube know by subscribing or giving this video a thumbs up! See you next time!