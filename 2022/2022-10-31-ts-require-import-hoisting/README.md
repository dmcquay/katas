# Purpose

I am converting a nodejs project to TypeScript. It uses dd-trace (DataDog APM lib) like this:

```js
if (process.env.DATADOG_ENABLED === 'true') {
  // eslint-disable-next-line no-unused-vars
  const tracer = require('dd-trace').init()
}

const express = require('express')
const routes = require('./routes')
...
```

I want to convert the require statements to import statements like so:

```ts
if (process.env.DATADOG_ENABLED === 'true') {
  // eslint-disable-next-line no-unused-vars
  const tracer = require('dd-trace').init()
}

import express from 'express'
import routes from './routes'
...
```

I think that the imports will get hoisted above the line containing `require('dd-trace')` and therefore code that is executed immediately upon import of `./routes` will execute before DD instrumentation is initialized.

The purpose of this kata/experiment is to prove that this is a problem and, if so, experiment with solutions.

# Result

I was wrong. The imports are not hoisted above the require statement. You can see this by running `npx ts-node src/app.ts` in a console. You will see that the instrumentation is initialized before app initialization.