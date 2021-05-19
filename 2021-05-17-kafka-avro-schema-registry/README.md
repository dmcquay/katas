1. Add schema reg section to docker-compose.yaml
2. `yarn add @kafkajs/confluent-schema-registry`
3. Add test code from https://kafkajs.github.io/confluent-schema-registry/ > Docs > Example
4. Solved error: `ResponseError: Confluent_Schema_Registry - Unrecognized field: schemaType` (Fixed by switching schema reg version from 5.3.1 to 5.5.3)
5. Refactor index.js to use schema reg instead of avsc directly.
6. Ran into problem when schema contains enum. Got error: `ResponseError: Confluent_Schema_Registry - Either the input schema or one its references is invalid`. Solution: add name to type. "Bad" example came from first example in [npm avsc docs](https://www.npmjs.com/package/avsc).
