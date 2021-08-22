import styled from 'styled-components';
import Cell from './Cell';
import { BoardRow } from '../types/board';

const RowStyles = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  row: BoardRow;
  toggle: (x: number, y: number) => void;
  y: number;
}

const Row = ({ row, toggle, y }: Props): JSX.Element => {
  return (
    <RowStyles>
      {row.map((isAlive, x) => (
        <Cell isAlive={isAlive} key={x} toggle={toggle} x={x} y={y} />
      ))}
    </RowStyles>
  );
};

export default Row;
