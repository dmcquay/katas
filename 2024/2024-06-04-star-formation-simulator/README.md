# Time to write >= 10MB

| Command                           | Duration | Peak Mem |
| --------------------------------- | -------: | -------: |
| `python3 simulate.py > py.out`    |    14:00 |     15MB |
| `npx ts-node src/app.ts > ts.out` |     0:52 |    540MB |
| `bun run src/app.ts > bun.out`    |     0:32 |     82MB |

# simulate ideas

- collision account for volume. larger particles should collide at greater distance from center.

# render ideas

- Render volume more accurrately (should not be equal to diameter)
- Center on mouse
- Pan
- Min particle render diameter 1px so everthing always displays?
- Display timestep index and allow seeking
- Pause
- Step forward/back? Or just rewind? Or maybe seeking makes this unnecessary.

# compression

- `bun run src/app.ts | gzip > bun.out.gz`
- `cat bun.out.gz | gunzip | python3 render.py`
