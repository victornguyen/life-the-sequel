import { COLS, ROWS } from '../constants/config';
import { Board, BoardRow, BoardCell } from '../types/board';

interface GenerateCellsArgs {
  rows?: number;
  cols?: number;
  random?: boolean;
}

export default function generateCells({
  rows = ROWS,
  cols = COLS,
  random = true,
}: GenerateCellsArgs): Board {
  return Array.from({ length: rows }, (): BoardRow => {
    return Array.from({ length: cols }, (): BoardCell => {
      return random ? Math.random() >= 0.6 : false;
    });
  });
}
