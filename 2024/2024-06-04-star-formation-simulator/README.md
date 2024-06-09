# How to run

- Create a new project: `./new myproj`
- Edit config (located in `data/myproj/config.env`)
- Run simulation: `./simulate myproj` (will create a new data file each run, not overwrite prev)
- Render:
  - `./render myproj` (to render the latest simulation output)
  - `./render data/myproj/2024-06-07T09:22:12Z.gz` (to render output from a specific run)
- Watch file size: `watch ls -Rlh data` (`brew install watch`, if needed)

# Simulation performance

Time to write >= 10MB

| Runtime | Duration | Peak Mem |
| ------- | -------: | -------: |
| python3 |    14:00 |     15MB |
| Nodejs  |     0:52 |    540MB |
| Bun     |     0:32 |     82MB |

# simulate ideas

- implement custom quadtree with total mass and center of mass caching. use to more efficiently compute collisions. also, when
  computing gravitational interactions, only compute pairwise interactions for nearby objects. for more distant objects, treat
  groups (sections of the quadtree) as though they were single objects, using their mass and center of mass.
- reduce file size by reducing unnecessary location precision.
- collision account for volume. larger particles should collide at greater distance from center.
- Increase local volume and/or density
- Decrease particle mass to more realistic value
- Store env vars in separate files
- Store config in simulation output file. Store the state when stopped. Support resume.
- Better Numerical Methods: The Euler method is simple but can be inaccurate. Consider using more advanced methods like the Runge-Kutta method for better accuracy. (runga-katta-4)[https://www.npmjs.com/package/runge-kutta-4]
- Performance Optimization: For many particles, optimize the force calculations using techniques like the Barnes-Hut algorithm to reduce computational complexity from 𝑂(𝑁^2) to 𝑂(𝑁 log 𝑁). This is equivalent to ParticleQuadTree.

# render ideas

- Screen resize. Fullscreen.
- Render volume more accurrately (should not be equal to diameter)
- allow seeking
- Pause
- Change play speed
- Step forward/back? Or just rewind? Or maybe seeking makes this unnecessary.
- Detect/display orbits and related metrics (hard)
- Single button stroke to save current view (pan, zoom, timestamp) to be able to return to an event.
- When multiple particles share a pixel in the current display, increase brightness.
