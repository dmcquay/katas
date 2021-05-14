Read messages directly from Kafka:

```sh
docker-compose exec kafka bash
kafka-console-consumer --topic test-topic --bootstrap-server localhost:9092 --from-beginning
```
