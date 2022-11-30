import React, { MouseEvent } from "react";

import styled from "styled-components";

import { SelectOption } from "..";

interface Props {
  option: SelectOption;
  handleOptionSelect: (option: SelectOption) => void;
}

const SelectLabel: React.FC<Props> = ({
  option,
  handleOptionSelect,
}: Props) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Container onClick={handleClick}>
      <Label>{option.label}</Label>
      <DeleteButton onClick={() => handleOptionSelect(option)}>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="css-tj5bde-Svg"
        >
          <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
      </DeleteButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

const Label = styled.div`
  padding: 3px 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgb(26, 29, 31);
`;

const DeleteButton = styled.div`
  display: flex;
  cursor: pointer;
  padding: 3px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  fill: #ffffff;
  background-color: rgb(26, 29, 31);
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(255, 66, 0);
  }
`;

export default SelectLabel;
