import API_REGIONS from "@constants/api";
import styled from "styled-components";

const RegionPicker: React.FC = () => {
  return (
    <Container>
      <Title>Région</Title>
      <Current>
        Europe West <i className="ri-arrow-down-s-line" />
      </Current>
      <InvisibleSelect>
        {Object.values(API_REGIONS).map((region) => (
          <option key={region.platform} value={region.platform}>
            {region.name}
          </option>
        ))}
      </InvisibleSelect>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #1a282b;
  border: 2px solid #212f32;
  border-radius: 10px;
  padding: 10px 12px;
  position: relative;
`;

const Title = styled.span`
  font-size: 12px;
`;

const Current = styled.span`
  font-weight: 400;
  font-size: 15px;

  i {
    vertical-align: middle;
  }
`;

const InvisibleSelect = styled.select`
  position: absolute;
  opacity: 0;
  outline: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default RegionPicker;
