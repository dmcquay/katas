The goal of this repo is to learn about various building blocks to javascript/typescript project that are a little too fuzzy to me currently such as the various types of module systems, how they interact with various build tools, typescript. Also various monorepo technologies like pnpm workspaces, turbo. Options for how to export things from packages within the monorepo (e.g. main vs exports in package.json) and how this applies to exporting non-JS sources such as SVGs or other things that bundlers can be configured to handle (e.g. exporting SVGs from a design system). Consuming built vs raw sources. Exporting SVGs. Use of SWC instead of TSC. tsup. Bundlers like vite, webpack, esbuild. Building then running vs running directly with ts-node, tsx, node with --experimental-strip-types flag, bun or deno.

All this is to answer the basic question: How do I write JS/TS code, import/export between modules and between
pacakges in a monorepo? These are the basics of getting started with a project and the answer is frustratingly
complicated. There are so many configuration options and there's no sensible default. Even just to set up something
basic, you still have to figure out many different configuration options and make sure they all align.

So I'd like to document a handful of common configuration combinations that are valid and well suited for
a few common use cases.

# Module Systems

ECMA Script didn't specify a module system until ES6. When nodejs was created, they had to create their own
module system, CommonJS. Since then, ECMA Script has introduced two module systems, ESM and CJS and has
standardized on ESM. Nodejs added optional support for it initially, but has since become the default.
Typescript

## Experiment 1: ESM

- In package.json, set "type" to "module". Or use .mjs as file suffix which overrides the package.json type.
- Use .js as file suffix.
- Import using `import { foo } from './foo.js'`. Note the inclusion of the file extension.
- Imports are hoisted and must be at the top level of the file. Can't be used in conditional blocks.
- All modules are strict by default.

## Experiment 2: CJS

- In package.json, set "type" to "commonjs" or use .cjs as file suffix which overrides the package.json type.
- Import using `const foo = require('./foo.cjs')`. Note the omission of the file extension.
- Imports are not hoisted and can be used in conditional blocks.
- Not all modules are strict by default.

## Experiment 3: Typescript outputting ESM

https://www.typescriptlang.org/docs/handbook/modules/reference.html#the-module-compiler-option

- tsconfig.json
    - compilerOptions
        - target: ESNext
        - module: NodeNext
        - moduleResolution: nodenext
- package.json
    - type: module

Import statements must include ".js" file extension (even though the source files are typescript).

Build with `tsc` and run with `node dist/index.js`.

Run directly without building with `tsx src/index.ts`.

ts-node throws error ERR_UNKNOWN_FILE_EXTENSION. Why? I think ts-node is not compatible with ESM.

## Experiment 3: Typescript outputting CJS

- tsconfig.json
    - compilerOptions
        - target: ESNext
        - module: CommonJS
        - moduleResolution: node
- package.json
    - type: commonjs

Surprisingly, ts-node still throws error ERR_UNKNOWN_FILE_EXTENSION. Why? I thought it was because
ts-node was not compatible with ESM, but since it's not working with CJS either, I'm not sure what's going on.

## tsx vs ts-node

tsx uses esbuild and seems to "just work" in a lot more cases.
ts-node uses tsc by default, but can be configured to use SWC. And it seems to not work in a lot more cases. I assume
I could resolve these cases with configuration tweaks, but why not just use tsx?

## Experiment: Basic monorepo with pnpm workspaces

This is a WIP and is not working yet.