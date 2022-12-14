import React from "react";
import styled, { StyledComponent, DefaultTheme } from "styled-components";

interface Props
  extends Omit<StyledComponent<any, DefaultTheme, any, never>, "prefix"> {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className }: Props) => {
  return (
    <Container onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  color: #ffffff;
  background-color: #0076cc;
  font-weight: 500;
  font-size: 14px;
  border-radius: 10px;
  height: 50px;
  padding: 0 12px;
  border: none;
  cursor: pointer;
`;

export default Button;
