You should verify that you published what you think you published.
Especially if kafka is not the source of truth. You should consume the very topic you are publishing to and compare it against your SoT database.

When you find a problem, how do you troubleshoot? Kafka is relatively opaque compared to a traditional database.

Things that might have gone wrong:

- Transform incorrectly
- Insert instead of update
- Out of order
- Unexpected shape or value

Example: Demonstrate our consumer getting an out of order message.

Now add the offset tracking.

Then demonstrate looking up those specific messages to see what went wrong.

# Helpful Commands

docker-compose exec kafka kafka-console-consumer --topic posts --bootstrap-server localhost:9092 --from-beginning

more complex update for offsets
'(etl_channel.offsets || EXCLUDED.offsets)[array_length(etl_channel.offsets, 1)-9:]'

psql: `docker-compose exec db psql -U postgres`

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
