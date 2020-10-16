Trying to understand path aliases better. Will try in node and typescript.

module-alias intercepts all require calls
there is another library that creates symlinks instead
we use module-alias

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