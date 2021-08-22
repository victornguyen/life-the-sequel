import React, { useCallback } from 'react';
import styled from 'styled-components';
import useCells from '../hooks/useCells';
import Board from './Board';
import Button from './Button';
import Slider from './Slider';

const Controls = styled.div``;

const AppStyles = styled.div`
  text-align: center;
`;

const App = (): JSX.Element => {
  const {
    cells,
    clearCells,
    evolve,
    newGame,
    toggle,
    evolving,
    start,
    stop,
    rate,
    setRate,
  } = useCells();

  const handleRateChange = useCallback(
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
        <Button type="button" onClick={clearCells}>
          Clear
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
          onChange={handleRateChange}
          step={20}
          value={rate}
        />
      </Controls>
    </AppStyles>
  );
};

export default App;
