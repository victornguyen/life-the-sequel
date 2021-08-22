import { Board, BoardRow, BoardCell } from '../types/board';

// Repeats arrays n times
function multiplyArray<T>(arr: T[], length: number) {
  return Array.from({ length }, () => arr).flat();
}

export default function example(length: number): Board {
  // The example sequence provided:
  // https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg
  const cells: Board = [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, true, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
  ];

  return multiplyArray<BoardRow>(
    cells.map((row) => multiplyArray<BoardCell>(row, length)),
    length
  );
}
