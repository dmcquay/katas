import { expect } from "chai";
import { GraphNode, routeExists } from "./utils";

describe("4.1.directed-graph-route", () => {
  const indirectRoute: GraphNode<string> = {
    value: "indirect",
    adjacencies: [],
    visited: false,
  };
  const directRoute: GraphNode<string> = {
    value: "direct",
    adjacencies: [indirectRoute],
    visited: false,
  };
  const noRoute: GraphNode<string> = {
    value: "disconnected",
    adjacencies: [],
    visited: false,
  };
  const root: GraphNode<string> = {
    value: "root",
    adjacencies: [directRoute],
    visited: false,
  };

  // to test cycles. will hang indefinitely if we have not
  // handles cycles correctly.
  indirectRoute.adjacencies.push(root);

  const allNodes: GraphNode<string>[] = [
    indirectRoute,
    directRoute,
    noRoute,
    root,
  ];

  // I hate that I need to do this. Can't store visited in separate data structure b/c JS doesn't allow
  // mem address to be used as key in a map. Could possibly give each node an ID to solve. Book actually
  // just recommends storing visited property on each node, which is easy, but mutates and they give no
  // solution to resetting them each time which actually seems a bit expensive. At minimum, for each of
  // our test cases, we need to ensure visited is initially set to false for all nodes.
  const resetVisited = () => allNodes.forEach((n) => (n.visited = false));

  it("direct route", () => {
    resetVisited();
    expect(routeExists(root, directRoute)).to.be.true;
  });

  it("indirect route", () => {
    resetVisited();
    expect(routeExists(root, indirectRoute)).to.be.true;
  });

  it("no route", () => {
    resetVisited();
    expect(routeExists(root, noRoute)).to.be.false;
  });
});
