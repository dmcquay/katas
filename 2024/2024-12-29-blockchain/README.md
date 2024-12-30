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