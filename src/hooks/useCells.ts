import { useState } from 'react';
import { Board } from '../types/board';
import evolveCells from '../utils/evolveCells';
import generateCells from '../utils/generateCells';
import toggleCell from '../utils/toggleCell';

interface UseCells {
  cells: Board;
  newGame: () => void;
  clearCells: () => void;
  evolve: () => void;
  toggle: (x: number, y: number) => void;
}

export default function useCells(
  initialCells = generateCells({ random: true })
): UseCells {
  const [cells, setCells] = useState<Board>(initialCells);

  const newGame = (): void => {
    setCells(generateCells({ random: true }));
  };

  const clearCells = (): void => {
    setCells(generateCells({ random: false }));
  };

  const evolve = (): void => {
    setCells(evolveCells(cells));
  };

  const toggle = (x: number, y: number): void => {
    setCells(
      toggleCell({
        x,
        y,
        cells,
      })
    );
  };

  return { cells, newGame, clearCells, evolve, toggle };
}
