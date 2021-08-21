import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { BoardRow } from '../types/board';

const RowStyles = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  row: BoardRow;
}

const Row = ({ row }: Props): JSX.Element => {
  return (
    <RowStyles>
      {row.map((isAlive, x) => (
        <Cell isAlive={isAlive} key={x} />
      ))}
    </RowStyles>
  );
};

export default Row;
