import React from 'react';
import styled from 'styled-components';
import useCells from '../hooks/useCells';
import Board from './Board';
import Button from './Button';

const Controls = styled.div``;

const AppStyles = styled.div`
  text-align: center;
`;

const App = (): JSX.Element => {
  const { cells, newGame, clearCells } = useCells();
  return (
    <AppStyles>
      <h1>The Game of Life II: Judgement Day 🤖</h1>
      <Board cells={cells} />
      <Controls>
        <Button type="button" onClick={newGame}>
          New game
        </Button>
        <Button type="button" onClick={clearCells}>
          Clear
        </Button>
      </Controls>
    </AppStyles>
  );
};

export default App;
