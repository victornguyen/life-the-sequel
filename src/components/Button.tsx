import React from 'react';
import styled from 'styled-components';
import { buttonThemes } from '../constants/button';
import { ThemeOption } from '../types/button';

const ButtonStyles = styled.button<{ theme: ThemeOption }>`
  display: inline-block;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  min-width: 160px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  padding: 10px 0 12px;
  cursor: pointer;
  background: ${({ theme }) => buttonThemes[theme as ThemeOption].base};
  &:hover {
    background: ${({ theme }) => buttonThemes[theme as ThemeOption].hover};
  }
  &:active {
    background: ${({ theme }) => buttonThemes[theme as ThemeOption].active};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
  theme?: ThemeOption;
}

type Props = ButtonProps & React.HTMLProps<HTMLButtonElement>;

const Button = ({
  children,
  disabled = false,
  onClick,
  theme = 'normal',
}: Props): JSX.Element => {
  return (
    <ButtonStyles
      disabled={disabled}
      onClick={onClick}
      theme={theme}
      type="button"
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
