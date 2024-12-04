export class Greeter {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello, ${this.name}!`;
    }
}

// Named export
export const DEFAULT_NAME = "World"; 