import React from "react";

import Header from "@components/Header";
import MainContainer from "@components/Layout/MainContainer";
import Search from "@components/Search";
import styled from "styled-components";

interface Props {
  withSearch?: boolean;
  children?: React.ReactNode;
}

const Page: React.FC<Props> = ({ withSearch, children }: Props) => {
  return (
    <MainContainer>
      <Header />
      <Container>
        {withSearch && <Search />}
        {children}
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Page;
