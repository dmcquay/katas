// I created this file as a quick test because I wanted to test two things:
// 1. Using the env var GOOGLE_APPLICATION_CREDENTIALS to authenticate
// 2. Publishing large batches of data
// Learnings:
// PubSub is slow when publishing one message at a time, awaiting each. Must have lots of overhead.
// You must not await them. But that begs the question, how do you know if one failed? Need to
// investigate retry logic.
// Also, it seems to me that to control concurrency (if needed) you'd need to use a semaphore or
// something similar. I don't think concurrency control is built into the lib.

// Set GOOGLE_APPLICATION_CREDENTIALS env var before running

const { PubSub } = require("@google-cloud/pubsub");

const main = async () => {
  const pubsub = new PubSub();

  const topicName = "dustin-test";
  // either create the topic via the console UI or uncomment this on the first run
  // await pubsub.createTopic(topicName);
  const topic = pubsub.topic(topicName);

  const publish = async (i) => {
    const payload = (Math.random() + "").repeat(99);
    await topic.publishMessage({
      data: Buffer.from(payload),
    });
    console.log(i);
  };

  for (let i = 0; i < 1000; i++) {
    try {
      publish(i);
    } catch (err) {
      console.log("got an error");
      console.log(err);
    }
  }

  pubsub.close();
};

main();
