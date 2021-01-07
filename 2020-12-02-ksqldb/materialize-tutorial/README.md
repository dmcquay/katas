## If you don't have confluent-hub installed:

```sh
brew tap confluentinc/homebrew-confluent-hub-client
brew cask install confluent-hub-client

# verify. expected output is a usage statement.
confluent-hub
```

## Install Debezium connector

```sh
confluent-hub install --component-dir confluent-hub-components --no-prompt debezium/debezium-connector-mysql:1.1.0
confluent-hub install --no-prompt debezium/debezium-connector-mysql:1.1.0
```