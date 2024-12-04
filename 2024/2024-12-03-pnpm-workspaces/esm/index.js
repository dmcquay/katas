// Import specific named exports
import { add, subtract } from './mathUtils.js';
// Import default export
import multiply from './mathUtils.js';
// Import multiple items including a class
import { Greeter, DEFAULT_NAME } from './greetings.js';

// Using the imported functions
console.log('Addition:', add(5, 3));        // Output: 8
console.log('Subtraction:', subtract(5, 3)); // Output: 2
console.log('Multiplication:', multiply(5, 3)); // Output: 15

// Using the imported class
const greeter = new Greeter(DEFAULT_NAME);
console.log(greeter.sayHello());  // Output: Hello, World! 