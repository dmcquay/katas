require('module-alias/register')

const { foo } = require('@lib/config')

console.log('foo: ' + foo)