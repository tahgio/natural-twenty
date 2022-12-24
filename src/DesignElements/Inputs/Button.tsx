import styled from "styled-components";
import { c } from "../GlobalStyles/constantStyles";

export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: ${c.radius};
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  font-family: system-ui, sans-serif;

  //---thematic
  background-color: ${(props) => props.theme.elements.btn};
  color: ${(props) => props.theme.elements.btnTxt};
`;
