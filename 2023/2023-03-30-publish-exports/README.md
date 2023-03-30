# Learnings

1. `npm pack` + `npm install ../pkg-a/*.tgz` works and respects `main`
2. `npm link ../pkg-a` has the same effect as (1) and also respects `main`
3. When using main, you can only import what is exported by that main file. No files deeper in the project. Main seems to disable this.
4. `main` only tells what to import when you just `require('pkg-a')`. It doesn't hide anything else. You can still `require('pkg-a/dist/some/private/module')`.
5. If you specify a directory with exports, it is equivalent to `dir/main.js` so you can't just export a whole directory recursively.

# See Also

- https://nodejs.org/api/packages.html
- Exports was introduced in v12/v14. Docs for v14 look very similar to latest: https://nodejs.org/docs/latest-v14.x/api/packages.html
