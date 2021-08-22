import { BoardCell, Coords } from '../types/board';

// Returns the cell value at the given coordinates of given cells.
// Returns `null` when a cell isn't found.
export default function getCell({
  x,
  y,
  cells = [],
}: Coords): BoardCell | null {
  try {
    if (cells[y][x] === undefined) {
      return null;
    }
    return cells[y][x];
  } catch (e) {
    return null;
  }
}
