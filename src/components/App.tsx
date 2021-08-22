import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';
import useCells from '../hooks/useCells';
import Board from './Board';
import Button from './Button';
import Slider from './Slider';
import { RATE } from '../constants/config';
import example from '../data/example';

const Controls = styled.div`
  margin-bottom: 10px;
`;

const AppStyles = styled.div`
  text-align: center;
`;

const App = (): JSX.Element => {
  const [evolving, setEvolving] = useState(false);
  const [rate, setRate] = useState(RATE);
  const { cells, evolve, randomise, reset, setCells, toggle } = useCells();

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
    reset();
  }, []);

  const randomGame = useCallback((): void => {
    stop();
    randomise();
  }, []);

  const loadExample = useCallback(() => {
    stop();
    setCells(example(6));
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
      <p>💡 Click cells to kill/awaken them.</p>
      <Board cells={cells} toggle={toggle} />
      <Controls>
        <Button type="button" onClick={newGame}>
          Reset
        </Button>
        <Button type="button" onClick={randomGame}>
          Randomise
        </Button>
        <Button type="button" onClick={loadExample}>
          Load example
        </Button>
      </Controls>
      <Controls>
        <Button type="button" onClick={evolve} disabled={evolving}>
          Next generation
        </Button>
        {evolving ? (
          <Button type="button" onClick={stop} theme="stop">
            Stop evolution
          </Button>
        ) : (
          <Button type="button" onClick={start}>
            Start evolution
          </Button>
        )}
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
