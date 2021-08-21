import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const AppStyles = styled.div`
  text-align: center;
`;

// TODO: generate
const cells = [
  [true, false, true],
  [true, true, true],
  [true, false, true],
];

const App = (): JSX.Element => {
  return (
    <AppStyles>
      <h1>The Game of Life II: Judgement Day 🤖</h1>
      <Board cells={cells} />
    </AppStyles>
  );
};

export default App;
