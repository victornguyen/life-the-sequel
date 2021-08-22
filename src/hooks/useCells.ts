import { useState } from 'react';
import evolveCells from '../utils/evolveCells';
import generateCells from '../utils/generateCells';
import toggleCell from '../utils/toggleCell';
import { Board } from '../types/board';

interface UseCells {
  cells: Board;
  evolve: () => void;
  generate: () => void;
  reset: () => void;
  toggle: (x: number, y: number) => void;
}

export default function useCells(
  initialCells = generateCells({ random: true })
): UseCells {
  const [cells, setCells] = useState<Board>(initialCells);

  const generate = (): void => {
    setCells(generateCells({ random: true }));
  };

  const reset = (): void => {
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

  return {
    cells,
    evolve,
    generate,
    reset,
    toggle,
  };
}
