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
