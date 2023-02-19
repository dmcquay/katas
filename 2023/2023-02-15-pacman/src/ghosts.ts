import { getHeadingsByAxis, getPathAxis } from "./path-utils";
import { Path, Ghost, AllGhostColors } from "./types";
import { getRandomListItem } from "./utils";

export const createRandomGhosts = (paths: Path[], count: number): Ghost[] => {
  const ghosts: Ghost[] = [];

  for (let i = 0; i < count; i++) {
    const path = getRandomListItem(paths);
    const headings = getHeadingsByAxis(getPathAxis(path));
    ghosts.push({
      position: path.start,
      heading: getRandomListItem(headings),
      color: getRandomListItem(AllGhostColors),
    });
  }

  return ghosts;
};
