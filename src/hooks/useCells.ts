import { useEffect, useState } from 'react';
import { Board } from '../types/board';
import generateCells from '../utils/generateCells';

export default function useCells(): { cells: Board } {
  const [cells, setBoard] = useState<Board>(generateCells({ random: true }));

  useEffect(() => {
    setBoard(cells);
  }, []);

  return { cells };
}
