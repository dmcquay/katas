import { AsyncLocalStorage } from 'node:async_hooks'
import { setTimeout as setTimeoutPromise } from 'node:timers/promises'

const asyncLocalStorage = new AsyncLocalStorage<{a?: string, b?: string}>()

async function main() {
    await setTimeoutPromise(1000)
    for await (const value of withStuff(delayedGenerator)) {
        console.log('Generated value:', value)
    }
}

async function* withStuff(genCb: () => AsyncGenerator<string, void, unknown>) {
    const result = await asyncLocalStorage.run({a: 'a'}, async function() {
        return async function*() {
            for await (const value of genCb()) {    
                yield value
            }
        }
    })
    const accumulatedValues: string[] = []
    for await (const value of result()) {
        yield value
        accumulatedValues.push(value)
    }
    console.log('Accumulated values:', accumulatedValues)
}

async function* delayedGenerator(): AsyncGenerator<string, void, unknown> {
    yield 'first value'
    await setTimeoutPromise(500)
    yield 'second value'
    await setTimeoutPromise(500)
    yield 'third value'
}

main()

