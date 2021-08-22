import React from 'react';
import styled from 'styled-components';

const SliderStyles = styled.div`
  margin-top: 20px;
`;

interface SliderProps {
  label: string;
}

type Props = SliderProps & React.HTMLProps<HTMLInputElement>;

const Slider = ({
  id,
  label,
  max,
  min,
  onChange,
  step,
  value,
}: Props): JSX.Element => {
  return (
    <SliderStyles>
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        max={max}
        min={min}
        onChange={onChange}
        step={step}
        type="range"
        value={value}
      />
      {value}ms
    </SliderStyles>
  );
};

export default Slider;
