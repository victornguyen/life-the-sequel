import React from 'react';
import styled from 'styled-components';
import useCells from '../hooks/useCells';
import Board from './Board';

const AppStyles = styled.div`
  text-align: center;
`;

const App = (): JSX.Element => {
  const { cells } = useCells();
  return (
    <AppStyles>
      <h1>The Game of Life II: Judgement Day 🤖</h1>
      <Board cells={cells} />
    </AppStyles>
  );
};

export default App;
