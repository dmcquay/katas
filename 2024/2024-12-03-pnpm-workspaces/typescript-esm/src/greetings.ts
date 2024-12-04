export class Greeter {
    constructor(private name: string) {}

    sayHello(): string {
        return `Hello, ${this.name}!`;
    }
}

export const DEFAULT_NAME = "World"; 