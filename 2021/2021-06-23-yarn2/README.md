TIL - yarn is not about speed. It is about being able to prioritize their own roadmap and make their own choices on tradeoffs.
Currently what this boils down to is workspaces and Plug'n'Play.

```
yarn init -y
yarn set version berry
```

When running your app, either use scripts in package.json or run with `yarn node app.js` rather than `node app.js`.

See Also:

- https://yarnpkg.com/getting-started/migration
- https://yarnpkg.com/getting-started/install
- https://yarnpkg.com/features/pnp
- https://yarnpkg.com/getting-started/editor-sdks
- https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored
