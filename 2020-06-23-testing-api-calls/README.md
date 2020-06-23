The purpose of this is to demonstrate three different approaches to testing an API call (testing the client, not the server).

- Single function that performs API and does some business logic with the results. Test with unit tests and mocks.
- Generic HTTP Get function tested with mocks and business logic in separate pure function testing with unit test and no mocks.

Goal is to call queue-manager/exchanges and return true if a list of exchanges is fully contained within the response.