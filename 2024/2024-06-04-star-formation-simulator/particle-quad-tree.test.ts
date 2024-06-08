import { test, expect } from "bun:test";
import { ParticleQuadTree } from "./particle-quad-tree";
import { Particle } from "./types";

let x = 0;
let y = 0;

const buildParticle = (obj: Partial<Particle> = {}): Particle => {
  return {
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

  const result = pqt.getNeighbors(p1, 10);
  expect(result).toContain(p2);
  expect(result).toContain(p3);
  expect(result).toHaveLength(2);
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
