import React from 'react';
import styled from 'styled-components';
import { FontSizeProps } from 'styled-system';

export interface ButtonProps extends FontSizeProps, React.HTMLAttributes<HTMLButtonElement> {
  startIcon?: any;
  endIcon?: any;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, startIcon, endIcon, ...props }) => {
  return (
    <StyledButton {...props}>
      {startIcon && <StyledIcon mr={8}>{startIcon}</StyledIcon>}
      {endIcon && <StyledIcon ml={8}>{startIcon}</StyledIcon>}
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button``;

export const StyledIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
