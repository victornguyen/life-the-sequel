import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';
import useCells from '../hooks/useCells';
import Board from './Board';
import Button from './Button';
import Slider from './Slider';
import { RATE } from '../constants/config';

const Controls = styled.div``;

const AppStyles = styled.div`
  text-align: center;
`;

const App = (): JSX.Element => {
  const [evolving, setEvolving] = useState(false);
  const [rate, setRate] = useState(RATE);
  const { cells, evolve, generate, reset, toggle } = useCells();

  useInterval(() => {
    if (evolving) {
      evolve();
    }
  }, rate);

  const stop = useCallback((): void => {
    setEvolving(false);
  }, []);

  const start = useCallback((): void => {
    if (!evolving) {
      setEvolving(true);
    }
    evolve();
  }, [evolving, cells]);

  const newGame = useCallback((): void => {
    stop();
    generate();
  }, []);

  const resetGame = useCallback((): void => {
    stop();
    reset();
  }, []);

  const changeRate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setRate(parseInt(e.target.value));
    },
    []
  );

  return (
    <AppStyles>
      <h1>The Game of Life II: Judgement Day 🤖</h1>
      <Board cells={cells} toggle={toggle} />
      <Controls>
        <Button type="button" onClick={newGame}>
          New game
        </Button>
        <Button type="button" onClick={resetGame}>
          Reset game
        </Button>
        <Button type="button" onClick={evolve} disabled={evolving}>
          Next generation
        </Button>
        <Button
          type="button"
          onClick={evolving ? stop : start}
          theme={evolving ? 'stop' : 'normal'}
        >
          {evolving ? 'Stop evolving' : 'Start evolution'}
        </Button>
        <Slider
          id="rate"
          label="Evo speed"
          max={500}
          min={40}
          onChange={changeRate}
          step={20}
          value={rate}
        />
      </Controls>
    </AppStyles>
  );
};

export default App;
