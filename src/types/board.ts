export type BoardCell = boolean;
export type BoardRow = BoardCell[];
export type Board = BoardRow[];

export type Coords = {
  x: number;
  y: number;
  cells: Board;
};
