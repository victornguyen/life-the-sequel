import { Board, BoardCell, Coords } from '../types/board';
import getCell from './getCell';

// Returns the the number of live neighbours at a set of given coordinates
export function countLiveNeighbours({ x, y, cells }: Coords): number {
  // Possible x and y coords for neighbouring cells
  const rows = [y - 1, y, y + 1];
  const cols = [x - 1, x, x + 1];

  // Add neighbouring coords for cells on edge of board
  // TODO: edge logic
  // if (y === 0) {
  //   rows.push(cells.length)
  // }

  const liveNeighbours: Array<BoardCell> = [];

  // For each possible neighbouring row coordinate...
  rows.forEach((yPoint) => {
    // ... check each possible neighbouring column coordinate
    cols.forEach((xPoint) => {
      // Ignore if it's the actual cell we're trying to find neighbours of
      const isSubjectCell = xPoint === x && yPoint === y;
      if (isSubjectCell) {
        return;
      }

      // Ignore if the neighbour isn't alive or doesn't exist
      const neighbour = getCell({ x: xPoint, y: yPoint, cells });
      if (neighbour !== true) {
        return;
      }

      // Otherwise push to live neighbours array
      liveNeighbours.push(neighbour);
    });
  });

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
