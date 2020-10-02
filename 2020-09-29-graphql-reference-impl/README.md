I created this when I first joined the PaaS team and was learning GraphQL.
After going through some basic training on GraphQL, I wanted to build something.
The team is using Apollo so I will do that next, but I thought it would be interesting to build
something simple with the reference implementation first.

https://github.com/graphql/graphql-js

Install: `yarn`
Run: `yarn start`

## DataLoader

On Oct 2, 2020 the PaaS team was trying to handle a situation where a course might be referenced by id
but when the sub-object was expanded as part of another query, the dataloader had to load all these
courses by id and our understanding was that we had to return an object for every id provided or else
the whole thing would fail. What I wish would happen is that we could return all the courses that we
found and null for the ones we could not find. And perhaps return separately a list of errors for the
ones we could not find?

As I am new to GraphQL and DataLoader, I thought it wise to spend some time learning DataLoader. Once
I get some familiarity with that, I'd like to explore this specific use case.

https://github.com/graphql/dataloader

### Findings

Context: Fetching messages and the user that authored them. One of the message references a user that
does not exist (in reality it returns null).

```gql
{
  getMessages {
    id
    user {
      id
    }
  }
}
```

Result: Returns null for the entire message object where the user was not found, but returns other
message objects.

```json
{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field Message.user.",
      "locations": [
        {
          "line": 4,
          "column": 5
        }
      ],
      "path": ["getMessages", 1, "user"]
    }
  ],
  "data": {
    "getMessages": [
      {
        "id": 1,
        "user": {
          "id": 1
        }
      },
      null
    ]
  }
}
```

Context: When doing the same thing, but with a Data Loader that returns an error object when the user is not found.
Result: Same result.
