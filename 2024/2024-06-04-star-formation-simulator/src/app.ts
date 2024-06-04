interface Vector {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  v: Vector;
  mass: number;
}

const randNum = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const MAX_INITIAL_DISTNACE = 200;
const INTERVAL_SECONDS = 1000;
const NUM_PARTICLES = 30;
// const G = 6.6743e-11;
const G = 6.6743e-6;
const EARTH_LIKE_MASS = 5.972e24;
const MOON_LIKE_MASS = 7.348e22;

const createRandomParticle = (): Particle => {
  return {
    x: randNum(200, 600),
    y: randNum(150, 450),
    v: {
      //   x: randNum(-1, 1),
      //   y: randNum(-1, 1),
      x: 0,
      y: 0,
    },
    mass: randNum(1, 5),
  };
};

const calculateGravitationalForce = (p1: Particle, p2: Particle): Vector => {
  // Calculate the distance vector between p1 and p2
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  // Calculate the distance magnitude
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Avoid division by zero
  if (distance === 0) {
    return { x: 0, y: 0 };
  }

  // Calculate the force magnitude
  const forceMagnitude = (G * p1.mass * p2.mass) / (distance * distance);

  // Calculate the force components
  const forceX = (forceMagnitude * dx) / distance;
  const forceY = (forceMagnitude * dy) / distance;

  return { x: forceX, y: forceY };
};

function applyForce(
  particle: Particle,
  force: Vector,
  deltaTime: number
): void {
  // Calculate the acceleration
  const accelerationX = force.x / particle.mass;
  const accelerationY = force.y / particle.mass;

  // Update the velocity
  particle.v.x += accelerationX * deltaTime;
  particle.v.y += accelerationY * deltaTime;
}

const sum = (x: number, y: number) => x + y;

const addVectors = (vectors: Vector[]): Vector => {
  return {
    x: vectors.map((v) => v.x).reduce(sum, 0),
    y: vectors.map((v) => v.y).reduce(sum, 0),
  };
};

const updateParticles = (particles: Particle[]) => {
  for (const p of particles) {
    p.x += p.v.x;
    p.y += p.v.y;

    const forceVector = addVectors(
      particles.map((p2) => calculateGravitationalForce(p, p2))
    );
    applyForce(p, forceVector, INTERVAL_SECONDS);
  }
};

const printParticles = (particles: Particle[]) => {
  for (let p of particles) {
    console.log([p.x, p.y, p.mass].join(","));
  }
  console.log("---");
};

const particles: Particle[] = [];
for (let i = 0; i < NUM_PARTICLES; i++) {
  particles.push(createRandomParticle());
}
// const particles: Particle[] = [
//   {
//     x: 300,
//     y: 300,
//     v: {
//       x: 0,
//       y: -1,
//     },
//     mass: 5,
//   },
//   {
//     x: 500,
//     y: 300,
//     v: {
//       x: 0,
//       y: 1,
//     },
//     mass: 5,
//   },
//     {
//       x: 500,
//       y: 500,
//       v: {
//         x: 0,
//         y: 1,
//       },
//       mass: 2,
//     },
// ];

const interval = setInterval(() => {
  updateParticles(particles);
  printParticles(particles);
}, 1);

const shutdown = () => {
  clearInterval(interval);
};

process.on("SIGINT", shutdown);

setTimeout(shutdown, 3000);
