import getCell from './getCell';
import { Board, Coords } from '../types/board';

// Toggles the cell value at the given coordinates of given cells
export default function toggleCell({ x, y, cells = [] }: Coords): Board {
  const cellsCopy = JSON.parse(JSON.stringify(cells));
  const cellToToggle = getCell({ x, y, cells: cellsCopy });
  if (cellToToggle !== null) {
    cellsCopy[y][x] = !cellToToggle;
  }
  return cellsCopy;
}
