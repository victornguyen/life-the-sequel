import { Dispatch } from 'react';
import { SetStateAction, useState } from 'react';
import useInterval from './useInterval';
import evolveCells from '../utils/evolveCells';
import generateCells from '../utils/generateCells';
import toggleCell from '../utils/toggleCell';
import { RATE } from '../constants/config';
import { Board } from '../types/board';

interface UseCells {
  cells: Board;
  clearCells: () => void;
  evolve: () => void;
  newGame: () => void;
  toggle: (x: number, y: number) => void;
  start: () => void;
  stop: () => void;
  evolving: boolean;
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
}

export default function useCells(
  initialCells = generateCells({ random: true })
): UseCells {
  const [cells, setCells] = useState<Board>(initialCells);
  const [evolving, setEvolving] = useState(false);
  const [rate, setRate] = useState(RATE);

  // TODO: move this into App to split up logic
  useInterval(() => {
    if (evolving) {
      evolve();
    }
  }, rate);

  const stop = (): void => {
    setEvolving(false);
  };

  const newGame = (): void => {
    stop();
    setCells(generateCells({ random: true }));
  };

  const clearCells = (): void => {
    stop();
    setCells(generateCells({ random: false }));
  };

  const evolve = (): void => {
    setCells(evolveCells(cells));
  };

  const start = (): void => {
    if (!evolving) {
      setEvolving(true);
    }
    evolve();
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
    clearCells,
    evolve,
    newGame,
    toggle,
    start,
    stop,
    evolving,
    rate,
    setRate,
  };
}
