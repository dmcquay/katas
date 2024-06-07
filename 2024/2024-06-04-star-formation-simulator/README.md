# How to run

- Create a data dir: `mkdir -p data/example`
- Create a config: `cp example.env data/example/config.env` (edit as desired)
- Run simulation: `bun run --env-file data/example/config.env simulate.ts | gzip > data/example/data.gz` (will run forever, interrupt with ctrl+c)
- Render: `tail -n +1 data/example/data.gz | gunzip | python3 render.py`

# Simulation performance

Time to write >= 10MB

| Runtime | Duration | Peak Mem |
| ------- | -------: | -------: |
| python3 |    14:00 |     15MB |
| Nodejs  |     0:52 |    540MB |
| Bun     |     0:32 |     82MB |

# simulate ideas

- collision account for volume. larger particles should collide at greater distance from center.
- Increase local volume and/or density
- Decrease particle mass to more realistic value
- Store env vars in separate files
- Store config in simulation output file. Store the state when stopped. Support resume.

# render ideas

- Screen resize. Fullscreen.
- Render volume more accurrately (should not be equal to diameter)
- Display timestep index and allow seeking
- Pause
- Change play speed
- Step forward/back? Or just rewind? Or maybe seeking makes this unnecessary.
- Object tracking
- Detect/display orbits and related metrics (hard)
- Single button stroke to save current view (pan, zoom, timestamp) to be able to return to an event.
- When multiple particles share a pixel in the current display, increase brightness.
