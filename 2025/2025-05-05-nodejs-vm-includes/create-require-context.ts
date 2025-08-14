import * as vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Create a new VM context
const context = vm.createContext({
  console: console,
  require: require,
});

// Code to execute in the VM
const code = `
  const R = require('ramda');
  const doubled = R.map(x => x * 2, [1, 2, 3, 4]);
  console.log('Doubled array:', doubled);
`;

try {
  // Execute the code in the VM
  const script = new vm.Script(code);
  script.runInContext(context);
} catch (error) {
  console.error('Error executing code in VM:', error);
}
