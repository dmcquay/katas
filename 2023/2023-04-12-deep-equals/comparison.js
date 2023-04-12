"use strict";

const Archetype = require("archetype");

const data = {
  _id: 111111111111111111111111,
  points: [],
  vehicles: [],
  featureFlags: [],
  regionId: 111111111111111111111111,
  date: "20230412",
  timeLimitMS: 18000,
  routingVersion: "2.6.2",
  fleetSolverStateId: "6436f0f9d66ac1db48dbb70f",
  logs: [],
  progressPercent: 0,
  terminalReloadFuelPadding: 20,
};

new Archetype({
  _id: {
    $type: ObjectId,
    $required: true,
    $default: () => new ObjectId(),
  },
  customerId: {
    $type: ObjectId,
    $description: "The customer that initiated this run",
  },
  fleetSolverStateId: {
    $type: ObjectId,
    $description: "The solver state associated with this run.",
  },
  createdAt: {
    $type: Timestamp,
    $default: () => new Date(),
  },
  completedAt: {
    $type: Timestamp,
  },
  timeElapsedMS: {
    $type: "number",
  },
  regionId: {
    $type: ObjectId,
    $required: true,
  },
  solverVersion: {
    $type: "string",
    $description: "The version of the Kasparov solver this run was for.",
  },
  routingVersion: {
    $type: "string",
    $required: true,
    $description: "The version of routing.js that triggered this solver run.",
  },
  date: {
    $type: DateString,
    $required: true,
    $description: "The date this solver run was for",
  },
  timeLimitMS: {
    $type: "number",
    $required: true,
  },
  vehicles: {
    $type: [VehicleType],
    $required: true,
    $description: [
      "A list of vehicles passed to the solver. These vehicles correspond to ",
      "tankers, just stored in a different format that lines up more closely ",
      "with what Google OR-Tools expects.",
    ],
  },
  points: {
    $type: [SolverPointFactory],
    $required: true,
  },
  overtimePenalty: {
    $type: "number",
    $description: [
      "Passed into the core solver, the amount of extra cost ",
      "incurred for each minute of overtime",
    ],
  },
  softTimeWindows: {
    $type: "number",
    $deprecated: "20220509",
    $description: [
      "Whether the core solver used soft time windows. Soft time windows help ",
      "find an initial solution faster, but the solution may not conform to ",
      "time window constraints.",
      "Deprecated because this is no longer relevant for Kasparov.",
    ],
  },
  routes: {
    $type: [SolverRoute],
    $description: ["The solution returned by the solver for this problem."],
  },
  routesByDay: {
    $type: [SolverRouteDay],
    $description: ["Solver routes organized by day"],
  },
  objective: {
    $type: "number",
    $description:
      "The objective value of the routes as determined by the solver",
  },
  error: {
    $type: "string",
  },
  stage: {
    $type: "string",
  },
  logs: {
    $type: [FleetSolverRunLog],
    $default: [],
  },
  progressPercent: {
    $type: "number",
    $default: 0,
  },
  progressHeader: {
    $type: "string",
  },
  solverOutput: {
    $type: SolverOutput,
  },
  featureFlags: {
    $type: ["string"],
    $description: "Array of feature flags used for this FleetSolverRun",
  },
  terminalReloadFuelPadding: {
    $type: "number",
    $description: "If tanker has less than this number it can go to terminal",
    $default: 20,
  },
}).compile("FleetSolverRun");
