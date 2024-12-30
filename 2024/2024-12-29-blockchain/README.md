This is both a small experiment with blockchain and a tiny performance benchmark of node, bun and deno.
bun was installed on ubuntu with `sudo snap install bun-js`.
I can't remember how I installed deno.

```sh
time pnpm start; time pnpm start:bun; time pnpm start:deno
```

## Results

```
> 2024-12-29-blockchain@1.0.0 start /home/dmcquay/repos/katas/2024/2024-12-29-blockchain
> node --experimental-strip-types app.ts

(node:2062555) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

real    0m9.321s
user    0m9.378s
sys     0m0.106s

> 2024-12-29-blockchain@1.0.0 start:bun /home/dmcquay/repos/katas/2024/2024-12-29-blockchain
> bun run app.ts


real    0m7.737s
user    0m7.531s
sys     0m0.158s

> 2024-12-29-blockchain@1.0.0 start:deno /home/dmcquay/repos/katas/2024/2024-12-29-blockchain
> deno run app.ts


real    0m11.438s
user    0m11.424s
sys     0m0.149s
```

## Compiling with deno

```sh
deno compile -o dist/deno-app app.ts
time ./dist/deno-app
```

I only did a couple runs, but the compiled version didn't seem to be any faster. The benefit seems
to be more just around zero runtime dependencies, code signing and potential for desktop app distribution.

## Compiling with bun

```sh
bun build app.ts --compile --outfile dist/bun-app
time ./dist/bun-app
```

Again, this didn't seem to improve runtime performance.

## Winner

deno and node were similar with deno slightly slower.

bun was consistently the winner by around 30%.

This is much different than reported in [this article](https://medium.com/deno-the-complete-reference/who-hashes-the-fastest-bun-node-js-or-deno-6bf6260dff9f) so perhaps bun has made some optimizations since.

## Bonus: Optimized versions

I created `app-deno.ts` which is optimized (basically just uses crypto from deno stdlib instead of node's).
This resulted in much slower performance. [This article](https://medium.com/deno-the-complete-reference/who-hashes-the-fastest-bun-node-js-or-deno-6bf6260dff9f) claims this is due to deno's implementation not
blocking the event loop while node's does block. Does this mean that when importing via `node:crypto` we
actually get node's implementation, not just a wrapped version of Deno's implementation?

I did the same thing for bun with `app-bun.ts` and got about the same results as the unoptimized `app.ts`.