# Context

I am refactoring a project that currently uses the pattern demonstrated in `1-bulk-require`. We need to get rid of this because
we are migrating to TypeScript, so I am exploring alternatives. Note that I'm not using TypeScript in this demo project, but
nevertheless the point of this demo is to be TypeScript ready.

## option 1 - bulk require

Probably the most clean option, but bulk-require is not compatible with typescript

## option 2 - manual imports

This option is my best attempt to mimic option 2, but with imports. It's a little clunky because you have to wrap each
test file in a function so you can later import it without executing the contents immediately. We need to instead call
those test functions inside of a describe block lower in the file.

## option 3 - setup function

This is quite similar to option two, excpept the test runner targets the files directly rather than an index file.
Downside: Before and after blocks are repeated with each file, as is the outer describe label.

## option 4 (not demonstrated) - research if there is a different test runner (not mocha) that has more native support?

I have no idea if such a thing exists.

## option 5 - refactor tests to not have this requirement (recommended)

Only do a single setup for the entire test suite, not one per file. Add whatever describes are desired in each file.
