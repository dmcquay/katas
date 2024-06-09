import type { Vector, Particle, GravitySource } from "./types";
import { ParticleQuadTree } from "./particle-quad-tree";

const randNum = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getInt = (key: string): number => {
  const strVal = process.env[key];
  if (strVal == null) {
    throw new Error(`Missing environment variable ${key}`);
  }
  // parseFloat is compatible with scientific notation (e.g. 10e9), while parseInt is not
  const floatVal = parseFloat(strVal);
  if (isNaN(floatVal)) {
    throw new Error(`Expected environment variable ${key} to be an integer`);
  }
  return Math.floor(floatVal);
};

// For reference
// const EARTH_LIKE_MASS_KG = 5.972e24;
// const MOON_LIKE_MASS_KG = 7.348e22;
// const HYDROGEN_MASS_KG = 1.67e-27;

const NURSERY_WIDTH_METERS = getInt("NURSERY_WIDTH_METERS");
const NURSERY_HEIGHT_METERS = getInt("NURSERY_HEIGHT_METERS");
const INTERVAL_SECONDS = getInt("INTERVAL_SECONDS");
const NUM_PARTICLES = getInt("NUM_PARTICLES");
const PARTICLE_MASS_KG = getInt("PARTICLE_MASS_KG");

const G = 6.6743e-11;
const MIN_COLLISION_DISTANCE_METERS = 1;
const MINIMUM_FORCE_DISTANCE_METERS = 2;

let nextParticleId = 0;

const createRandomParticle = (): Particle => {
  return {
    id: nextParticleId++,
    x: randNum(NURSERY_WIDTH_METERS / -2, NURSERY_WIDTH_METERS / 2),
    y: randNum(NURSERY_HEIGHT_METERS / -2, NURSERY_HEIGHT_METERS / 2),
    v: {
      //   x: randNum(-1, 1),
      //   y: randNum(-1, 1),
      x: 0,
      y: 0,
    },
    mass: PARTICLE_MASS_KG,
  };
};

const calculateGravitationalForce = (
  p1: Particle,
  p2: GravitySource
): Vector => {
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

function radiusFromArea(area: number): number {
  return Math.sqrt(area / Math.PI);
}

function combineParticles(pqt: ParticleQuadTree) {
  const particles = pqt.getAll();
  const deletedParticleIds: Record<number, boolean> = {};
  const distance = Math.max(...particles.map((p) => radiusFromArea(p.mass)));

  for (let i = 0; i < particles.length; i++) {
    const particle1 = particles[i];
    if (deletedParticleIds[particle1.id]) continue;
    const neighbors = pqt.getNeighbors(particle1, distance);
    for (let j = i + 1; j < neighbors.length; j++) {
      const particle2 = neighbors[j];
      if (deletedParticleIds[particle2.id]) continue;

      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const collisionDistance = Math.max(
        MIN_COLLISION_DISTANCE_METERS,
        radiusFromArea(particle1.mass) + radiusFromArea(particle2.mass)
      );

      if (distance < collisionDistance) {
        console.error("collision detected");
        if (particle1.id === particle2.id) {
          throw new Error("these are the same particle");
        }
        pqt.remove(particle1);
        pqt.remove(particle2);

        const totalMass = particle1.mass + particle2.mass;
        collisionCount++;
        particleCount--;
        maxMass = Math.max(maxMass, totalMass);
        console.error({
          particleCount,
          clusterStats: pqt.clusterStats,
          collisionCount,
          maxMass,
        });

        const combinedVx =
          (particle1.mass * particle1.v.x + particle2.mass * particle2.v.x) /
          totalMass;
        const combinedVy =
          (particle1.mass * particle1.v.y + particle2.mass * particle2.v.y) /
          totalMass;

        const combinedParticle: Particle = {
          id: nextParticleId++,
          mass: totalMass,
          v: { x: combinedVx, y: combinedVy },
          x: particle1.x,
          y: particle1.y,
        };
        pqt.add(combinedParticle);

        deletedParticleIds[particle1.id] = true;
        deletedParticleIds[particle2.id] = true;
      }
    }
  }
}

const updateParticles = (pqt: ParticleQuadTree) => {
  const particles = pqt.getAll();
  for (const p of particles) {
    pqt.remove(p);
    // TODO: shouldn't this be multiplied by duration?
    p.x += p.v.x;
    p.y += p.v.y;
    pqt.add(p);

    const neighbors = pqt.getNeighbors(p, 100);
    const clusters = pqt.getGravitationalClusters(p, 100);
    const neighborClusters: GravitySource[] = neighbors.map((p) => {
      return {
        ...p,
        objectCount: 1,
      };
    });
    const gravitySources = [...clusters, ...neighborClusters];
    const forceVector = addVectors(
      gravitySources.map((g) => calculateGravitationalForce(p, g))
    );
    applyForce(p, forceVector, INTERVAL_SECONDS);
  }

  combineParticles(pqt);
};

const printParticles = (particles: Particle[]) => {
  for (let p of particles) {
    console.log([p.x, p.y, p.mass].join(","));
  }
  console.log("---");
};

const pqt = new ParticleQuadTree();
for (let i = 0; i < NUM_PARTICLES; i++) {
  pqt.add(createRandomParticle());
}

let interrupted = false;

while (!interrupted) {
  updateParticles(pqt);
  printParticles(pqt.getAll());
}

const shutdown = () => {
  interrupted = true;
};

process.on("SIGINT", shutdown);

process.on("uncaughtException", (err) => {
  console.error(err);
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});
