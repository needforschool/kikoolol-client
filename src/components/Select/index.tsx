import React from "react";
import styled from "styled-components";
import DashboardSelectLabel from "./Label";

export class SelectOption {
  value!: string;
  label!: string;
}

export type ActionType = "clear" | "select" | "unselect";

interface Props {
  multiple?: boolean;
  required?: boolean | number;
  maxSelections?: number;
  removeFromMenuOnSelect?: boolean;
  closeMenuOnSelect?: boolean;
  options: SelectOption[];
  onChange?: (value: SelectOption | undefined, action: ActionType) => void;
  error?: string;
  searchable?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  defaultValue?: string | string[];
  className?: string;
  title?: string;
}

const Select: React.FC<Props> = ({
  multiple = false,
  required = false,
  maxSelections,
  removeFromMenuOnSelect = true,
  closeMenuOnSelect = true,
  options,
  onChange,
  error,
  searchable = true,
  clearable = true,
  disabled = false,
  placeHolder,
  defaultValue,
  className,
  title,
}: Props) => {
  required;
  searchable;

  const menuRef = React.useRef<HTMLDivElement>(null);
  const controlRef = React.useRef<HTMLButtonElement>(null);
  const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = React.useState<SelectOption[]>(
    defaultValue
      ? Array.isArray(defaultValue)
        ? options.filter((option) => defaultValue.includes(option.value))
        : options.filter((option) => option.value === defaultValue)
      : []
  );

  const handleMenuToggle = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();

    if (menuOpened) closeMenu();
    else openMenu();
  };

  const openMenu = () => {
    setMenuOpened(true);

    if (controlRef.current) {
      controlRef.current.focus();
    }
  };

  const closeMenu = () => {
    setMenuOpened(false);

    if (controlRef.current) {
      controlRef.current.blur();
    }
  };

  const clearSelectedOptions = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    setSelectedOptions([]);

    if (onChange) {
      onChange(undefined, "clear");
    }
  };

  const handleOptionSelect = (option: SelectOption) => {
    if (controlRef.current) {
      controlRef.current.focus();
    }

    if (multiple) {
      // - If the option is already selected, remove it from the selected options
      if (
        selectedOptions.some(
          (selectedOption) => selectedOption.value === option.value
        )
      ) {
        setSelectedOptions(
          selectedOptions.filter(
            (selectedOption) => selectedOption.value !== option.value
          )
        );

        if (onChange) {
          onChange(option, "unselect");
        }
      } else {
        setSelectedOptions([...selectedOptions, option]);

        if (onChange) {
          onChange(option, "select");
        }
      }
    } else {
      // - Select only one option
      setSelectedOptions([option]);

      if (onChange) {
        onChange(option, "select");
      }
    }

    if (closeMenuOnSelect) {
      closeMenu();
    }
  };

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onClick = (event: any) => {
      // If the active element exists and is clicked outside of
      if (
        controlRef.current &&
        menuRef.current &&
        !controlRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      } else if (
        controlRef.current &&
        menuRef.current &&
        menuRef.current.contains(event.target)
      ) {
        controlRef.current.focus();
      }
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [controlRef]);

  return (
    <Container disabled={disabled} className={className}>
      <Control
        ref={controlRef}
        error={error}
        onClick={(event: React.MouseEvent<HTMLButtonElement | MouseEvent>) =>
          !disabled && handleMenuToggle(event)
        }
      >
        <Content>
          <ValueContainer>
            {title && <Title>{title}</Title>}
            {selectedOptions && selectedOptions.length > 0 ? (
              <Value>
                {!multiple
                  ? selectedOptions[0].label
                  : selectedOptions.map(
                      (option: SelectOption, index: number) => (
                        <DashboardSelectLabel
                          key={index}
                          option={option}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )
                    )}
              </Value>
            ) : (
              <Placeholder>{placeHolder || "Search..."}</Placeholder>
            )}
          </ValueContainer>
        </Content>
        <IndicatorsContainer>
          {clearable && selectedOptions && selectedOptions.length > 0 && (
            <IndicatorContainer onClick={clearSelectedOptions} accent={"light"}>
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
            </IndicatorContainer>
          )}
          <IndicatorSeparator />
          <IndicatorContainer>
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              className="css-tj5bde-Svg"
            >
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
          </IndicatorContainer>
        </IndicatorsContainer>
      </Control>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {menuOpened && (
        <Menu ref={menuRef}>
          {options &&
            options
              .filter((option: SelectOption) => {
                if (removeFromMenuOnSelect) {
                  return !selectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  );
                }
                return true;
              })
              .map((option: SelectOption, index: number) => {
                const selected: boolean = selectedOptions.includes(option);

                const menuDisabled: boolean =
                  (maxSelections
                    ? selectedOptions.length >= maxSelections
                    : false) && !selected;

                return (
                  <MenuItem
                    key={index}
                    disabled={menuDisabled}
                    selected={selectedOptions.includes(option)}
                    onClick={() => !menuDisabled && handleOptionSelect(option)}
                  >
                    {option.label}
                  </MenuItem>
                );
              })}
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div<{ disabled: boolean }>`
  position: relative;
  width: 100%;
  max-width: 750px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media (max-width: "768px") {
    width: 100%;
  }
`;

const Control = styled.button<{ error?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  user-select: none;
  color: #ffffff;
  transition: all 0.2s;
  border: 2px solid #212f32;
  outline: none;
  max-height: 50px;
  height: 50px;
  border-radius: 10px;
  text-align: left;
  background-color: #1a282b;
  font-size: 16px;

  ${({ error }) =>
    error &&
    `
    border: 2px solid rgb(231, 76, 60);
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #ffffff;
  font-size: 12px;
  text-align: left;
  font-weight: 400;
`;

const ValueContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Placeholder = styled.div`
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  font-weight: 500;
`;

const Value = styled(Placeholder)``;

const IndicatorsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IndicatorSeparator = styled.span`
  width: 1px;
  margin: 8px 0;
  background-color: rgb(39, 43, 48);
`;

const IndicatorContainer = styled.div<{ accent?: "light" }>`
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  fill: #ffffff;
  transition: fill 0.2s;

  &:hover {
    ${({ accent }) =>
      accent ? "fill: #ffffff;" : "fill: rgb(228, 229, 241);"};
  }
`;

const ErrorContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Menu = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-top: 5px;

  background-color: #1a282b;
  border: 2px solid #212f32;
  outline: none;
  border-radius: 10px;
`;

const MenuItem = styled.div<{ selected: boolean; disabled: boolean }>`
  padding: 5px;
  cursor: pointer;
  transition: background-color, opacity 0.2s;

  ${({ selected }) =>
    !selected
      ? `

    &:hover {
      background-color: #212F32;
    }
  `
      : `
    background-color: #0076CC;
    color: #ffffff;

    &:hover {
      opacity: 0.9;
    }
  `};

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      opactity: 0.5;
  `}
`;

export default Select;
