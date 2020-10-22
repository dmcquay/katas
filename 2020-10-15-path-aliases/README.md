Trying to understand path aliases better. Will try in node and typescript.

module-alias intercepts all require calls
there is another library that creates symlinks instead
we use module-alias
https://www.npmjs.com/package/link-module-alias to avoid having to register a loader.
https://www.npmjs.com/package/tsconfig-paths looks interesting to avoid duplicating the path configs.

## Summary

I think I found the problem with trying to do paths with TypeScript.

tsconfig.paths seems to be important for TypeScript to resolve types and such. But does not control
the actual file that gets imported. That is controlled by something like module-alias.

Because we want our built files to be in a separate directory, we have to point mdoule-alias at the
build directory. That means that if the built files are not present, the code will not execute, even
when using ts-node. Furthermore, if there are built files, but then you edit a source file and try
to execute, the stale built file will be executed, not your updated source file.

TODO: Run examples to verify those claims I just made.

## module-alias with node

To make module-alias work with node, all you must do is create the alias in package.json like this:
```json
"_moduleAliases": {
  "@lib": "lib/"
}
```

And then add this register call when bootstrapping your app.
```js
require('module-alias/register')
```

To run this example: `yarn; yarn start`

# module-alias with TypeScript

You need to do all the same setup as module-alias with node.
Additionally, you need to add mappings to tsconfig.json like so:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@lib/*": ["lib/*"]
    }
  }
}
```

Run with ts-node: `yarn && yarn start`
Run compiled files: `yarn && yarn build && yarn start`

If you comment out the module-alias/register, it will fail, so TypeScript apparently relies on this.
Weird since the docs don't mention this: https://www.typescriptlang.org/tsconfig#paths

I can only make it work for dev mode or for running compiled code. One or the other. Here's why:

TypeScript needs the paths entries in tsconfig.json AND package.json to be set to `lib/`.
When running pure compiled JS, the files are in dist now, so package.json only needs to be
set to `dist/lib/` now. This will actually make TS work too, but only because it is running
the compiled files, not the ts files you are editing.

To see this in action, compile with `yarn build` and then edit the value of foo in lib/config.ts.
Then run `yarn start:dev`. You will see the previous value written to console instead of the
one you just typed.

Possible solutions:

- Don't specify an outDir. Just let build files be next to src files. Then everything *should* just work.
  However, that also makes it hard to not track these files. We'd have to not track any js files and then
  manually override that for any js files we do need.

# TypeScript without module-alias

Jake Wood said:

> Don’t quote me, but this tsconfig option seems to be working for us in order to turn ../../../Hello/World.tsx into Hello/World.tsx. So maybe you can turn the * into @ and get the same effect:
> "baseUrl": ".",
> "paths": {
>     "*": ["src/*"]
> },
> this is with pure tsc, we aren’t using module-alias
> Repo: https://github.com/ps-dev/flow-fundamentals/

I tried to replicate that, but it would not work. You can see, I left it in a broken state.

# TypeScript without outDir

As I mentioned above, everything works fine if you just don't sepcify outDir in tsconfig.json.
Sort of.
Remaining problem is that js files "win" over ts files. So if you have any compiled files, changes
to your TS files will have no effect until you compile again.
Possible solution: never have compiled files in your dev environment. (There really shouldn't be a need.)
In theory, this problem would exist even witout paths/aliases if the compiled files are next to source files.
Putting compiled files in a separate directory is what protects us from this.