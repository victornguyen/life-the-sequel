import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { BoardRow } from '../types/board';

const BoardStyles = styled.div`
  display: inline-block;
  border: 1px solid #c2dfd5;
  border-radius: 3px;
  margin: 10px 0 30px;
`;

interface Props {
  cells: Array<BoardRow>;
}

const Board = ({ cells }: Props): JSX.Element => {
  return (
    <BoardStyles>
      {cells.map((row, y) => (
        <Row row={row} key={y} />
      ))}
    </BoardStyles>
  );
};

export default Board;
