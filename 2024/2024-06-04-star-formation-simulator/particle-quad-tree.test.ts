import { test, expect, describe } from "bun:test";
import { ParticleQuadTree } from "./particle-quad-tree";
import { Particle } from "./types";

let x = 0;
let y = 0;

const buildParticle = (): Particle => {
  return {
    x: x++,
    y: y++,
    v: { x: 0, y: 0 },
    mass: 10,
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
