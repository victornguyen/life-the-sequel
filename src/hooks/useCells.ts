import { useEffect, useState } from 'react';
import { Board } from '../types/board';
import generateCells from '../utils/generateCells';

interface UseCells {
  cells: Board;
  newGame: () => void;
  clearCells: () => void;
}

export default function useCells(): UseCells {
  const [cells, setBoard] = useState<Board>(generateCells({ random: true }));

  // Set initial board
  useEffect(() => {
    setBoard(cells);
  }, []);

  const newGame = (): void => {
    setBoard(generateCells({ random: true }));
  };

  const clearCells = (): void => {
    setBoard(generateCells({ random: false }));
  };

  return { cells, newGame, clearCells };
}
