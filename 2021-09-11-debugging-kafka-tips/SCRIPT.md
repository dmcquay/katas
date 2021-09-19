Audio: I will demonstrate how you can store kafka message addresses and use them
to look up messages later. This can be helpful for debugging. First, let's take a look
at a basic consumer.

Screen recording: Show basic consumer, pre-written, publishing a message and consuming it.

Screen recording: Introduce a publishing order problem.

Audio: Explain how we can't know for sure what happened. If we stored every message we processed and in what order, then we could fully reproduce the problem. Kafka already stores
the messages for us so if we just kept the address of those messages, then we could look all of the messages up later.

Slide: Kafka addresses

Audio: Explain components of a kafka address

Screen recording:
- Show in code how we can get the message address
- Add table column to store addresses
- Alter upsert code
- Rerun the out of order problem
- Run query to retrieve the message addresses
- Show command to retrieve the two messages
- Show how to modify the upsert query if too many messages per row causing perf issues

# Helpful Commands

## Read messages fom topic

docker-compose exec kafka kafka-console-consumer --topic posts --bootstrap-server localhost:9092 --from-beginning

## more complex update for offsets
'(etl_channel.offsets || EXCLUDED.offsets)[array_length(etl_channel.offsets, 1)-9:]'

## Open psql in docker

psql: `docker-compose exec db psql -U postgres`

## Read a single message from Kafka

```sh
docker compose exec kafka \
    kafka-console-consumer \
    --bootstrap-server localhost:9092 \
    --max-messages 1 \
    --topic posts \
    --partition 0 \
    --offset 0
```

use `docker run -it --rm confluentinc/cp-server:5.4.0` to run it standalone against some other kafka cluster.

## Read a single message from Kafka (avro seralized)

also, you can use kafka-avro-console-consumer from this image if your messages are serialized with avro

```sh
docker run -it --rm confluentinc/cp-kafka-connect:5.4.1 \
    kafka-avro-console-consumer \
    --bootstrap-server kafka1-broker-production.vnerd.com:9092 \
    --key-deserializer org.apache.kafka.common.serialization.StringDeserializer \
    --value-deserializer io.confluent.kafka.serializers.KafkaAvroDeserializer \
    --property schema.registry.url=http://dvs-schema-registry.vnerd.com:8081 \
    --property print.key=true \
    --max-messages 1 \
    --topic skills.criterionRef.v1.UserCompletionReport \
    --partition 1 \
    --offset 3072980
```

## Sidebar: Consume your own topics

Let's say you have a separate DB that is your SoT and you publish to Kafka as well.
How do you know that what you have published is correct?
You should verify that you published what you think you published.
One way to check is to consume the topic and compare it against your SoT DB.