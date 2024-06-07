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

const NURSERY_WIDTH = 1600;
const NURSERY_HEIGHT = 1600;
const INTERVAL_SECONDS = 10e9;
const NUM_PARTICLES = 10000;
const G = 6.6743e-11; // real
const EARTH_LIKE_MASS_KG = 5.972e24;
const MOON_LIKE_MASS_KG = 7.348e22;
const HYDROGEN_MASS_KG = 1.67e-27;
const MIN_COLLISION_DISTANCE_METERS = 1;
const MINIMUM_FORCE_DISTANCE_METERS = 2;

const createRandomParticle = (): Particle => {
  return {
    x: randNum(NURSERY_WIDTH / -2, NURSERY_WIDTH / 2),
    y: randNum(NURSERY_HEIGHT / -2, NURSERY_HEIGHT / 2),
    v: {
      //   x: randNum(-1, 1),
      //   y: randNum(-1, 1),
      x: 0,
      y: 0,
    },
    mass: HYDROGEN_MASS_KG * 60e25, // too small won't be rendered and also interact too little with the particle count i can handle currently
  };
};

const calculateGravitationalForce = (p1: Particle, p2: Particle): Vector => {
  // Calculate the distance vector between p1 and p2
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  // Calculate the distance magnitude
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Avoid division by zero
  if (distance < MINIMUM_FORCE_DISTANCE_METERS) {
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

let collisionCount = 0;
let particleCount = NUM_PARTICLES;
let maxMass = 0;

function radiusFromVolume(volume: number): number {
  return Math.cbrt((3 * volume) / (4 * Math.PI));
}

function combineParticles(particles: Particle[]): Particle[] {
  const combinedParticles: Particle[] = [];
  const deletedIndexes: Record<number, boolean> = {};

  for (let i = 0; i < particles.length; i++) {
    if (deletedIndexes[i]) continue;
    const particle1 = particles[i];

    for (let j = i + 1; j < particles.length; j++) {
      if (deletedIndexes[j]) continue;
      const particle2 = particles[j];

      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const collisionDistance = Math.max(
        MIN_COLLISION_DISTANCE_METERS,
        radiusFromVolume(particle1.mass) + radiusFromVolume(particle2.mass)
      );

      if (distance < collisionDistance) {
        const totalMass = particle1.mass + particle2.mass;
        collisionCount++;
        particleCount--;
        maxMass = Math.max(maxMass, totalMass);
        // console.error({ particleCount, collisionCount, maxMass });

        const combinedVx =
          (particle1.mass * particle1.v.x + particle2.mass * particle2.v.x) /
          totalMass;
        const combinedVy =
          (particle1.mass * particle1.v.y + particle2.mass * particle2.v.y) /
          totalMass;

        particle1.mass = totalMass;
        particle1.v = { x: combinedVx, y: combinedVy };

        deletedIndexes[j] = true;
        break;
      }
    }

    combinedParticles.push(particle1);
  }

  return combinedParticles;
}

const updateParticles = (particles: Particle[]) => {
  for (const p of particles) {
    p.x += p.v.x;
    p.y += p.v.y;

    const forceVector = addVectors(
      particles.map((p2) => calculateGravitationalForce(p, p2))
    );
    applyForce(p, forceVector, INTERVAL_SECONDS);
  }

  return combineParticles(particles);
};

const printParticles = (particles: Particle[]) => {
  for (let p of particles) {
    console.log([p.x, p.y, p.mass].join(","));
  }
  console.log("---");
};

let particles: Particle[] = [];
for (let i = 0; i < NUM_PARTICLES; i++) {
  particles.push(createRandomParticle());
}

let interrupted = false;

while (!interrupted) {
  particles = updateParticles(particles);
  printParticles(particles);
}

const shutdown = () => {
  interrupted = true;
};

process.on("SIGINT", shutdown);
