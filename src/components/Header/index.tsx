import Image from "next/image";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <Image
        src="/static/images/logo/kikoolol.svg"
        alt="Kikoolol"
        width={200}
        height={50}
      />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export default Header;
