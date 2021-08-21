import React from 'react';
import styled from 'styled-components';

const CellStyles = styled.div<{ isAlive: boolean }>`
  width: 12px;
  height: 12px;
  cursor: pointer;
  background: ${({ isAlive }) => (isAlive ? '#72E1D1' : '#E3F0EB')};

  &:hover {
    background: ${({ isAlive }) => (isAlive ? '#98E9DD' : '#C2DFD5')};
  }
`;

interface Props {
  isAlive: boolean;
}

const Cell = ({ isAlive }: Props): JSX.Element => {
  return <CellStyles isAlive={isAlive} />;
};

export default Cell;
