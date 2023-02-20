import { getHeadingsByAxis, getPathAxis } from "./path-utils";
import { Path, Ghost, AllGhostColors } from "./types";
import { getRandomListItem } from "./utils";

export const createRandomGhosts = (paths: Path[], count: number): Ghost[] => {
  const ghosts: Ghost[] = [];
  let g = 0;

  for (let i = 0; i < count; i++) {
    const jailXValues = [];
    const path = paths.find((p) => p.label === "Jail")!;
    for (let i = path.start.x; i <= path.end.x; i++) {
      jailXValues.push(i);
    }
    const headings = getHeadingsByAxis(getPathAxis(path));
    const color = AllGhostColors[g++];
    if (g > AllGhostColors.length - 1) g = 0;
    ghosts.push({
      position: { x: getRandomListItem(jailXValues), y: path.start.y },
      heading: getRandomListItem(headings),
      color,
    });
  }

  return ghosts;
};
