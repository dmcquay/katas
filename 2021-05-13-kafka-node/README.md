[Watch me create this project on YouTube](https://www.youtube.com/watch?v=xqjYvbld1-E&t=1s)

Read messages directly from Kafka:

```sh
docker-compose exec kafka bash
kafka-console-consumer --topic test-topic --bootstrap-server localhost:9092 --from-beginning
```
