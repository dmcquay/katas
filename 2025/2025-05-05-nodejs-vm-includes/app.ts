import * as vm from 'node:vm';

// Create a new VM context
const context = vm.createContext({
  console: console,
  importModule: (specifier: string) => import(specifier),
});

// Code to execute in the VM
const code = `
  (async () => {
    const R = await importModule('ramda');
    const doubled = R.map(x => x * 2, [1, 2, 3, 4]);
    console.log('Doubled array:', doubled);
  })();
`;

try {
  // Execute the code in the VM
  const script = new vm.Script(code);
  script.runInContext(context);
} catch (error) {
  console.error('Error executing code in VM:', error);
}
