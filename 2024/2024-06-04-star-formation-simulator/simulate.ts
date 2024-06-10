import type {
  Vector,
  Particle,
  GravitySource,
  ParticleCollection,
  Point,
} from "./types";
import { ParticleQuadTree } from "./particle-quad-tree";
import { ParticleList } from "./particle-list";
import { ClusterStats } from "./cluster-stats";

const randNum = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getStr = (key: string): string => {
  const strVal = process.env[key];
  if (strVal == null) {
    throw new Error(`Missing environment variable ${key}`);
  }
  return strVal;
};

const getFloat = (key: string): number => {
  const strVal = getStr(key);
  // parseFloat is compatible with scientific notation (e.g. 10e9), while parseInt is not
  const floatVal = parseFloat(strVal);
  if (isNaN(floatVal)) {
    throw new Error(`Expected environment variable ${key} to be a number`);
  }
  return floatVal;
};

const getInt = (key: string): number => {
  // parseFloat is compatible with scientific notation (e.g. 10e9), while parseInt is not, so we get that first
  const floatVal = getFloat(key);
  return Math.floor(floatVal);
};

// For reference
// const EARTH_LIKE_MASS_KG = 5.972e24;
// const MOON_LIKE_MASS_KG = 7.348e22;
// const HYDROGEN_MASS_KG = 1.67e-27;

type ClusterConfig = {
  height: number;
  width: number;
  particleCount: number;
  center: Point;
  velocity: Vector;
};

const INTERVAL_SECONDS = getInt("INTERVAL_SECONDS");
const PARTICLE_MASS_KG = getInt("PARTICLE_MASS_KG");
const ENABLE_GRAVITATIONAL_CLUSTERING = getInt(
  "ENABLE_GRAVITATIONAL_CLUSTERING"
);
const MAXIMUM_GENERATIONS = getInt("MAXIMUM_GENERATIONS");
const CLUSTER_COUNT = getInt("CLUSTER_COUNT");
const CLUSTERS: ClusterConfig[] = [];
for (let i = 1; i <= CLUSTER_COUNT; i++) {
  const center = getStr(`CLUSTER${i}_CENTER`)
    .split(",")
    .map((x) => parseInt(x));
  if (center.length != 2 || center.find((x) => isNaN(x))) {
    throw new Error(
      `Expected ${`CLUSTER${i}_CENTER`} to be a comma-separated list of ints`
    );
  }

  const velocity = getStr(`CLUSTER${i}_VELOCITY`)
    .split(",")
    .map((x) => parseFloat(x));
  if (velocity.length != 2 || velocity.find((x) => isNaN(x))) {
    throw new Error(
      `Expected ${`CLUSTER${i}_VELOCITY`} to be a comma-separated list of ints`
    );
  }

  CLUSTERS.push({
    height: getInt(`CLUSTER${i}_HEIGHT`),
    width: getInt(`CLUSTER${i}_WIDTH`),
    particleCount: getInt(`CLUSTER${i}_PARTICLE_COUNT`),
    center: { x: center[0], y: center[1] },
    velocity: { x: velocity[0], y: velocity[1] },
  });
}

const G = 6.6743e-11;
const MIN_COLLISION_DISTANCE_METERS = 1;
const MINIMUM_FORCE_DISTANCE_METERS = 2;

let nextParticleId = 0;

const createRandomParticle = (config: ClusterConfig): Particle => {
  return {
    id: nextParticleId++,
    x: Math.floor(
      config.center.x - config.width / 2 + randNum(0, config.width)
    ),
    y: Math.floor(
      config.center.y - config.height / 2 + randNum(0, config.height)
    ),
    v: { ...config.velocity },
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

function radiusFromArea(area: number): number {
  return Math.sqrt(area / Math.PI);
}

function combineParticles(pqt: ParticleCollection) {
  const particles = pqt.getAll();
  const deletedParticleIds: Record<number, boolean> = {};

  const distance = particles.reduce((max, p) => {
    const radius = radiusFromArea(p.mass);
    return Math.max(max, radius);
  }, -Infinity);

  for (let i = 0; i < particles.length; i++) {
    let particle1 = particles[i];
    if (deletedParticleIds[particle1.id]) continue;
    const neighbors = pqt.getNeighbors(particle1, distance);
    for (
      let j = particles === neighbors ? i + 1 : 0;
      j < neighbors.length;
      j++
    ) {
      const particle2 = neighbors[j];

      // ParticleList.getNeighbors does not exclude anything, including the target particle
      if (particle1 === particle2) {
        continue;
      }

      if (deletedParticleIds[particle2.id]) continue;

      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const collisionDistance = Math.max(
        MIN_COLLISION_DISTANCE_METERS,
        radiusFromArea(particle1.mass) + radiusFromArea(particle2.mass)
      );

      if (distance < collisionDistance) {
        pqt.remove(particle1);
        pqt.remove(particle2);

        const cluster = new ClusterStats();
        cluster.addParticle(particle1);
        cluster.addParticle(particle2);

        if (cluster.centerOfMass == null) {
          // just to make type system know this is not null
          throw new Error("Unexpected");
        }

        const combinedVx =
          (particle1.mass * particle1.v.x + particle2.mass * particle2.v.x) /
          cluster.mass;
        const combinedVy =
          (particle1.mass * particle1.v.y + particle2.mass * particle2.v.y) /
          cluster.mass;

        const combinedParticle: Particle = {
          id: particle1.mass > particle2.mass ? particle1.id : particle2.id, // preserve id of largest particle. useful for tracking.
          mass: cluster.mass,
          v: { x: combinedVx, y: combinedVy },
          x: cluster.centerOfMass?.x,
          y: cluster.centerOfMass?.y,
        };
        pqt.add(combinedParticle);

        deletedParticleIds[particle1.id] = true;
        deletedParticleIds[particle2.id] = true;
        particle1 = combinedParticle;
      }
    }
  }
}

const updateParticles = (pqt: ParticleCollection) => {
  const particles = pqt.getAll();

  for (const p of particles) {
    pqt.mutateParticle(p, (p: Particle) => {
      p.x += p.v.x * INTERVAL_SECONDS;
      p.y += p.v.y * INTERVAL_SECONDS;
    });

    const gravitySources = pqt.getGravitySources(p);
    const forceVector = addVectors(
      gravitySources.map((g) => calculateGravitationalForce(p, g))
    );
    applyForce(p, forceVector, INTERVAL_SECONDS);
  }

  combineParticles(pqt);
};

const printParticles = (particles: Particle[]) => {
  for (let p of particles) {
    console.log(
      [p.id, Math.floor(p.x), Math.floor(p.y), Math.floor(p.mass)].join(",")
    );
  }
  console.log("---");
};

let particleCollection: ParticleCollection;
if (ENABLE_GRAVITATIONAL_CLUSTERING) {
  particleCollection = new ParticleQuadTree();
} else {
  particleCollection = new ParticleList();
}

for (let cluster of CLUSTERS) {
  for (let i = 0; i < cluster.particleCount; i++) {
    particleCollection.add(createRandomParticle(cluster));
  }
}

let interrupted = false;

let generation = 0;
const start = Date.now();
let lastGenerationRateReport = 0;
while (!interrupted) {
  updateParticles(particleCollection);
  printParticles(particleCollection.getAll());
  generation++;

  if (Date.now() - lastGenerationRateReport > 10000) {
    console.error(
      `generation ${generation}: seconds per generation: ${
        (Date.now() - start) / 1000 / generation
      }`
    );
    lastGenerationRateReport = Date.now();
  }

  if (generation === MAXIMUM_GENERATIONS) {
    break;
  }
}

const shutdown = () => {
  interrupted = true;
};

process.on("SIGINT", shutdown);
