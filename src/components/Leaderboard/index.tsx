import Image from "next/image";
import styled from "styled-components";

const Leaderboard: React.FC = () => {
  return (
    <Container>
      <Title>Champions les plus choisis</Title>
      <Table>
        <tr>
          <td>01</td>
          <td>
            <Thumbnail
              alt="Aatrox"
              src="https://picsum.photos/25/60"
              height={25}
              width={25}
              draggable={false}
            />
          </td>
          <td>Fiora</td>
          <td>50%</td>
        </tr>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
  padding: 20px;
  width: calc(33.3% - 10px);
  margin-top: 10px;
  margin-left: 10px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 700;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  color: #fff;

  tr {
    td {
      text-align: left;
      vertical-align: middle;
      :last-child {
        font-style: italic;
        text-align: right;
      }
    }
  }
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export default Leaderboard;
