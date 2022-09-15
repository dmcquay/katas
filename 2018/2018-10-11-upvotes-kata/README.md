# Timing

Start: 4:20pm
End: 4:42pm

# Codify your dev practices as katas

This kata was inspired by Martin Fowler's katas referenced in the book Clean Coder (or was it Clean Code?). What was interesting to me about his katas is that they told you exactly what to do. There was no puzzle to be solved. It was just trying to create muscle memory around how to do certain key tasks.

However, his examples were all little puzzle-like programming projects that are not similar to the code my team most often writes. So I had the idea to write some katas, with exact instructions on how to complete them that are centered around the type of work that we do most often.

This kata should serve several purposes:

- create muscle memory around correct practices
- precise documentation on what we think best practices are
- facilitate team dicsussions on what best practices are, updating the document as necessary
- excellent trainig for new team members to get up to speed on how we write code

## The Kata: Write an API endpoint to create an upvote using an SQL event store

The following data is POSTed to /upvotes.

- guideId
- userId (optional)
- guestId

This data should be stored in a Postgres table which has the following additional fields:

- id
- createdAt

The API should return a failable in `application/json` format and always use 200 as the status code.

### Setup

You are provided with the following to get you started. You can rewrite this if you have time and want to practice this stuff or if you want to do it in another language (this setup is for JavaScript/Node).

- A `.nvmrc` file containing the version of node you are expected to use. Run `nvm install` to make sure you have the right version.
- `yarn install` to install dependencies.
- Install docker if you don't already have it. Run `docker-compose up -d` which will start up Postgres for you.
- Run `yarn initdb` to setup your database for this exercise.
- `db.js` contains `query` for running database queries. It is pre-configured to connect with the provided postgres instance.
- `index.js` contains the beginning of an express server that can run, but doesn't have any routes yet. Start the server with `yarn dev`.

### Instructions

1. Start up the server with `yarn dev`.
1. Create a file named `upvotes.e2e.js` and write a test that submits a POST request to `/upvote`. There is no body, headers, etc yet. Expect a 200 response. Execute the test using `yarn test:e2e`. The test should be failing because you're getting a 404 instead of 200 response.
1. Create the route and make it simply always return 200 status.
1. Assert that the `content-type` header is `application/json; charset=utf-8` and that the response body is a success failable (e.g. check that response body.success is true).
1. Update the route to call `res.send(success())`. This should make your test pass.
1. Modify the e2e test to provide a userId, guestId and guideId and assert that the body of the response contains those fields, plus an id and createdAt. You can't know precisely what those new values will be so just assert that the id looks roughy like a uuid (v4) and createdAt looks like an ISO8601 formatted date.
1. Create a file called `upvotes-coordinators.js` and in it create and export a function named `createUpvote` that takes a single props argument. For now, just return props wrapped in `success` (e.g. `return success(props)`).
1. In your route, Grab `userId`, `guestId` and `guideId` from the request body and put them in a single object called `createUpvoteProps`.
1. Import and call the `createUpvote` coordinator, passing it `createUpvoteProps`.
1. If the resulting failable is successful, set the status code to 200, else 500. Set the body as the entire failable. You may want to use `prepFailableForSerialization` to make the failable display error stacks better.
1. See that your e2e test is failing because the `id` and `createdAt` do not yet exist.
1. Let's take an outside in approach with our coordinator by calling all the functions we intend to create before we create them. First call `validateCreateUpvoteCoordinatorProps`. It will return a failable. If it failed, return the failable.
1. Call `buildNewUpvote` to create our upvote.
1. Call `createInsertUpvoteCommand`, passing it the upvote.
1. Call `db.query`, passing it the insertCommand. Remember to await this function call because it is async. If it fails, return the failable.
1. Finally, return the upvote, wrapped in a success Failable so that this function always returns a Failable instance.
1. Now we're ready to start implementing these funcitons. Create a file called `upvotes-coordinators-utils.test.js`. All of these functions will live in this file and another file called `upvotes-coordinators-utils.js`.
1. Import `validateCreateUpvoteCoordinatorProps` from `upvotes-coordinators-utils.js` and create your first test which calls this function with valid arguments. Start running your unit tests in watch mode with this command: `yarn test:unit --watchAll`. It should fail because the function doesn't exist.
1. Create and export a function named `validateCreateUpvoteCoordinatorProps` from `upvotes-coordinators-utils.js`. Your tests should now pass.
1. Change your test to assert that the result is a success Failable object back with no payload. Your test should be failing.
1. Update `validateCreateUpvoteCoordinatorProps` to return a success Failable. Your tests should now pass.
1. Add a new test that passes invalid arguments and asserts a failure is returned with an error payload that details each of the specific validation errors.
1. Implement `validateCreateUpvoteCoordinatorProps` such that it validates all the arguments and makes the tests pass. Iterate on this to validate all the values.
1. Next we'll create a function called `buildNewUpvote` in the utils file which takes the properties of `createUpvoteCoordinator` and returns a upvote by taking the three properties we have and adding `id` and `createdAt`. Follow TDD of course, but I'm going to stop being so specific about those steps.
1. Next we'll create a function called `createInsertUpvoteCommand` in the utils file which takes the properties of `createUpvoteCoordinator` and returns a QueryCommand containing the sql and params to insert the upvote.
1. If your service is not running, run it with `yarn dev`. Then run your e2e tests with `yarn test:e2e`. Your end to end tests should now be passing. Troubleshoot as needed.