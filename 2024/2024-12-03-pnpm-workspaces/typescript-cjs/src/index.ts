import { add, subtract } from './mathUtils.js';
import multiply from './mathUtils.js';
import { Greeter, DEFAULT_NAME } from './greetings.js';

console.log('Addition:', add(5, 3));
console.log('Subtraction:', subtract(5, 3));
console.log('Multiplication:', multiply(5, 3));

const greeter = new Greeter(DEFAULT_NAME);
console.log(greeter.sayHello());