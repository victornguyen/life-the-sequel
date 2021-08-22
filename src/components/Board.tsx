import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { BoardRow } from '../types/board';

const BoardStyles = styled.div`
  display: inline-block;
  margin: 10px 0 30px;
`;

interface Props {
  cells: Array<BoardRow>;
  toggle: (x: number, y: number) => void;
}

const Board = ({ cells, toggle }: Props): JSX.Element => {
  return (
    <BoardStyles>
      {cells.map((row, y) => (
        <Row row={row} key={y} toggle={toggle} y={y} />
      ))}
    </BoardStyles>
  );
};

export default Board;
