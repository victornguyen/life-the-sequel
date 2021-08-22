import { Board, BoardCell, Coords } from '../types/board';
import getCell from './getCell';

// Returns the the number of live neighbours at a set of given coordinates
export function countLiveNeighbours({ x, y, cells }: Coords): number {
  // Return zero neighbours if cell is out of bounds
  if (getCell({ x, y, cells }) === null) {
    return 0;
  }

  // Possible x and y coords for neighbouring cells.
  // Cells at the edges of the game board will include coordinates at the
  // opposite end of the game board as neighbouring cells.
  const maxRows = cells.length - 1;
  const maxCols = cells[0].length - 1;
  const rows = [y > 0 ? y - 1 : maxRows, y, y < maxRows ? y + 1 : 0];
  const cols = [x > 0 ? x - 1 : maxCols, x, x < maxCols ? x + 1 : 0];

  const liveNeighbours: BoardCell[] = [];

  // For each possible neighbouring row coordinate...
  for (const possibleY of rows) {
    // ... check each possible neighbouring column coordinate
    for (const possibleX of cols) {
      // Ignore if it's the actual cell we're trying to find neighbours of
      const isSubjectCell = possibleX === x && possibleY === y;
      if (isSubjectCell) {
        continue;
      }

      // Ignore if the neighbour isn't alive or doesn't exist
      const neighbour = getCell({ x: possibleX, y: possibleY, cells });
      if (neighbour !== true) {
        continue;
      }

      // Otherwise push to live neighbours array
      liveNeighbours.push(neighbour);
    }
  }

  return liveNeighbours.length;
}

// Returns true when a given cell should live according the game's rules
export function shouldCellLive({
  x,
  y,
  cells,
  isAlive,
}: Coords & { isAlive: boolean }): boolean {
  const liveNeighbourCount = countLiveNeighbours({ x, y, cells });
  return isAlive
    ? // A Cell with fewer than two live neighbours dies of under-population.
      // A Cell with 2 or 3 live neighbours lives on to the next generation.
      // A Cell with more than 3 live neighbours dies of overcrowding.
      liveNeighbourCount === 2 || liveNeighbourCount === 3
    : // An empty Cell with exactly 3 live neighbours "comes to life".
      liveNeighbourCount === 3;
}

// Returns an updated Board after applying the rules of the Game of Life
export default function evolveCells(cells: Board): Board {
  return cells.map((row, y) => {
    return row.map((cell, x) => shouldCellLive({ x, y, isAlive: cell, cells }));
  });
}
