YouTube Video: I programmed some creatures. They evolved.

## How to run

```sh
npx ts-node src/01-basic.ts
```

...etc

## Requirements for evolution:

1. Self-replication
2. Blueprint (genome)
3. Inherit blueprint
4. Mutation (1 in a 1000 chance of a gene changing)
5. Selection

## My additions:

6. They must take zero or more of a variety of actions
7. The actions taken must be dictated by the genome
8. The selection criteria must be based on those actions

## Simplification:

6-8 can be simplified to: The selection criteria must be based on the genome. Therefore we can skip actions altogether to meet a minimal compliant implementation.

## Requirements to make it practical:

- The selection criteria must consistently select at least a few creatures or else they will just go extinct immediately.
- The selection criteria must initial select significantly less than the full population or else there will be no evolution to take place.
- Chance of survival of children of survivors should not be 100% or else survival rates shoot to 100% in the first generation. To be more life-like, there should be more chance involved.

## Things to look for to see that it is working:

- Watch the survival rate through the generations. It should be increasing.

## Once we have achieved the bare minimum, what are next steps to make it more interesting/life-like?

- More tricky survival criteria.
- Could manufacture that.
- Or, could introduce competition?
- Add the indirection of actions.
- Add inputs.
- Connect inputs to actions via a neural net.
