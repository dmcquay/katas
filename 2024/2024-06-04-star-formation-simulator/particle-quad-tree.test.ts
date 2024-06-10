import { test, expect } from "bun:test";
import { ParticleQuadTree } from "./particle-quad-tree";
import { Particle } from "./types";

let x = 0;
let y = 0;
let nextParticleId = 0;

const buildParticle = (obj: Partial<Particle> = {}): Particle => {
  return {
    id: nextParticleId++,
    x: x++,
    y: y++,
    v: { x: 0, y: 0 },
    mass: 10,
    ...obj,
  };
};

test("can add and remove", () => {
  const p1 = buildParticle();
  const p2 = buildParticle();
  const p3 = buildParticle();
  const p4 = buildParticle();
  const pqt = new ParticleQuadTree({ maxParticles: 2 });
  pqt.add(p1);
  pqt.add(p2);
  pqt.add(p3);
  pqt.add(p4);
  pqt.remove(p3);

  const result = pqt.getAll();
  expect(result).toContain(p1);
  expect(result).toContain(p2);
  expect(result).not.toContain(p3);
  expect(result).toContain(p4);

  pqt.remove(p4);
  const result2 = pqt.getAll();
  expect(result2).toContain(p1);
  expect(result2).toContain(p2);
  expect(result2).not.toContain(p3);
  expect(result2).not.toContain(p4);
});

test("can return neighbors", () => {
  const outLeft = buildParticle({ x: -11, y: 0 });
  const inLeft = buildParticle({ x: -10, y: 0 });
  const outRight = buildParticle({ x: 11, y: 0 });
  const inRight = buildParticle({ x: 10, y: 0 });
  const outTop = buildParticle({ x: 0, y: 11 });
  const inTop = buildParticle({ x: 0, y: 10 });
  const outBottom = buildParticle({ x: 0, y: -11 });
  const inBottom = buildParticle({ x: 0, y: -10 });
  const farOutTop = buildParticle({ x: 0, y: 1000 });
  const farOutBottom = buildParticle({ x: 0, y: -1000 });
  const farOutLeft = buildParticle({ x: -1000, y: 0 });
  const farOutRight = buildParticle({ x: 1000, y: 0 });

  //   const included = [inLeft, inRight, inTop, inBottom];
  //   const excluded = [outLeft, outRight, outTop, outBottom];
  const particle = buildParticle({ x: 2, y: 2 });
  const included = [buildParticle({ x: 2, y: 3 })];
  const excluded = [buildParticle({ x: -123, y: 4 })];

  const farOut = [farOutTop, farOutBottom, farOutLeft, farOutRight];
  const all = [particle, ...included, ...excluded, ...farOut];

  const pqt = new ParticleQuadTree({ maxParticles: 1 });

  for (let p of all) {
    pqt.add(p);
  }
  //   pqt.add(farOutTop);
  //   pqt.add(farOutBottom);
  //   pqt.add(farOutLeft);

  const result = pqt.getNeighbors(particle, 1);
  for (let p of included) {
    expect(result).toContain(p);
  }
  for (let p of farOut) {
    expect(result).not.toContain(p);
  }
});

test("can return gravitational clusters", () => {
  const p1 = buildParticle({ x: 0, y: 0 });
  const p2 = buildParticle({ x: 0, y: 10 });
  const p3 = buildParticle({ x: 0, y: 11 });
  const p4 = buildParticle({ x: -100, y: 100, mass: 10 });
  const p5 = buildParticle({ x: -101, y: 100, mass: 20 });
  const pqt = new ParticleQuadTree({ maxParticles: 2 });
  pqt.add(p1);
  pqt.add(p2);
  pqt.add(p3);
  pqt.add(p4);
  pqt.add(p5);

  const result = pqt.getGravitationalClusters(p1, 10);
  expect(result).toHaveLength(1);
  const first = result[0];
  if (first == null) throw new Error("this should not happen");
  expect(first.mass).toBe(30);
  expect(first.x).toBeGreaterThan(-101);
  expect(first.x).toBeLessThan(-100);
  expect(first.y).toBe(100);
});
