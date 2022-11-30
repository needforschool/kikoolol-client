import Select, { ActionType, SelectOption } from "@components/Select";
import API_REGIONS from "@constants/api";
import styled from "styled-components";

interface Props {
  region: string;
  setRegion: (region: string) => void;
}

const RegionPicker: React.FC<Props> = ({ region, setRegion }: Props) => {
  return (
    <Container>
      <RegionSelect
        title={"Région"}
        required={true}
        removeFromMenuOnSelect={false}
        closeMenuOnSelect={true}
        clearable={false}
        defaultValue={region}
        onChange={(option: SelectOption | undefined, action: ActionType) => {
          if (action === "select" && option) setRegion(option.value);
        }}
        options={Object.values(API_REGIONS).map((region) => ({
          value: region.platform,
          label: region.name,
        }))}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegionSelect = styled(Select)`
  outline: none;
  min-width: 150px;
`;

export default RegionPicker;
