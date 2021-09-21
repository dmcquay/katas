## Read messages fom topic

```
docker compose exec kafka kafka-console-consumer --topic posts --bootstrap-server localhost:9092 --from-beginning
```

## Open psql in docker

psql: `docker compose exec db psql -U postgres`
show column names: `\t`

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
    --bootstrap-server kafka-broker-1.mycorp.com:9092 \
    --key-deserializer org.apache.kafka.common.serialization.StringDeserializer \
    --value-deserializer io.confluent.kafka.serializers.KafkaAvroDeserializer \
    --property schema.registry.url=http://my-schema-registry.mycorp.com:8081 \
    --property print.key=true \
    --max-messages 1 \
    --topic posts \
    --partition 1 \
    --offset 1
```