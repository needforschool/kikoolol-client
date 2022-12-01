import React from "react";
import styled from "styled-components";

interface Props {
  search: string;
  setSearch: (search: string) => void;
  suggestions: string[];
  handleSearch: (summoner?: string) => void;
}

const PlayerPicker: React.FC<Props> = ({
  search,
  setSearch,
  suggestions,
  handleSearch,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const highlightMatchingKeywords = (text: string) => {
    const regex = new RegExp(search, "gi");
    const matches = text.match(regex);

    if (matches) {
      const match = matches[0];
      const index = text.indexOf(match);

      return (
        <p style={{ display: "flex" }}>
          {text.substring(0, index)}
          <Highlight>{match}</Highlight>
          {text.substring(index + match.length)}
        </p>
      );
    }

    return text;
  };

  const memoizedHighlightMatchingKeywords = React.useMemo(
    () => highlightMatchingKeywords,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [suggestions]
  );

  return (
    <Container>
      <FieldContainer bottomBorder={suggestions.length < 1}>
        <Field placeholder="Nom du joueur" onChange={handleChange} />
        <Icon className="ri-search-line" />
      </FieldContainer>
      {suggestions.length > 0 && (
        <Suggestions>
          {suggestions.map((suggestion) => (
            <Suggestion
              key={suggestion}
              onClick={() => handleSearch(suggestion)}
            >
              {memoizedHighlightMatchingKeywords(suggestion)}
            </Suggestion>
          ))}
        </Suggestions>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  flex: 1;
`;

const FieldContainer = styled.div<{ bottomBorder?: boolean }>`
  display: flex;
  background: #1a282b;
  border: 2px solid #212f32;
  ${({ bottomBorder }) =>
    bottomBorder ? "border-radius: 10px;" : "border-radius: 10px 10px 0 0;"}
  padding: 10px 12px;
  align-items: center;
  position: relative;
`;

const Icon = styled.i`
  font-size: 20px;
  vertical-align: middle;
`;

const Field = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  padding-left: 40px;
`;

const Suggestions = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 0 10px 10px;
  background-color: #212f32;
`;

const Suggestion = styled.div`
  padding: 10px 12px;
  width: 100%;
  text-align: left;
  border-radius: none;
  background-color: #212f32;
  cursor: pointer;

  :hover {
    background-color: #1a282b;
  }

  :last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const Highlight = styled.span`
  color: #0076cc;
`;

export default PlayerPicker;
