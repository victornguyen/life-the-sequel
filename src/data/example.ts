import { Board } from '../types/board';

// Repeats arrays n times
function multiplyArray(arr: any[], length: number) {
  return Array.from({ length }, () => arr).flat();
}

export default function example(length: number): Board {
  // The example sequence provided:
  // https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg
  const cells = [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, true, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
  ];

  return multiplyArray(
    cells.map((row) => multiplyArray(row, length)),
    length
  );
}
