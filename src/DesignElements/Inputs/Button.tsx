import styled from "styled-components";
import { c } from "../GlobalStyles/constantStyles";

interface ButtonProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  colorCode?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(p) => c.typo[p.size || "md"]};
  padding: 0.25em 1em;
  border: 0;
  border-radius: ${c.radius};
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;

  //---thematic
  background-color: ${(props) =>
    props.theme.elements[props.colorCode || "primary"].btn};
  color: ${(props) =>
    props.theme.elements[props.colorCode || "primary"].btnTxt};
`;
