export type BoardCell = boolean;
export type BoardRow = Array<BoardCell>;
export type Board = Array<BoardRow>;

export type Coords = {
  x: number;
  y: number;
  cells: Board;
};
