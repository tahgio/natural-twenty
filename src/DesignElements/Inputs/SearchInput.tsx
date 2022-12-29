import styled from "styled-components";
import { ThemeFonts } from "../../types";

export const SearchInput = styled.form`
  box-shadow: inset 4px 4px rgba(0, 0, 0, 0.5);
  background-color: ${(p) => p.theme.illustration.main};
  padding: 7px 6px 3px 10px;
  border: 2px solid ${(p) => p.theme.illustration.highlight};
  border-radius: 5px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 6px;
  width: 300px;
  & input {
    all: unset;
    width: 82%;
    padding-left: 4px;
    &::placeholder {
      color: ${(p) => p.theme.illustration.stroke};
      font-family: ${ThemeFonts.Hanken}, sans-serif;
      font-size: 15px;
      font-weight: 600;
    }
  }
  & .fa-circle-xmark {
    cursor: pointer;
  }
`;
