import styled from "styled-components";
import { c } from "../GlobalStyles/constantStyles";

interface ButtonProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  colorCode?: "primary" | "secondary";
  noMargin?: boolean;
  outline?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(p) => c.typo[p.size || "md"]};
  padding: 0.5em 0.7em;
  border: 0;
  border-radius: ${c.radius};
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  margin: ${(p) => (p.noMargin ? "0px" : "0.25rem")};
  cursor: pointer;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  font-weight: 600;
  border: ${(p) =>
    p.outline
      ? `1px solid ${p.theme.elements[p.colorCode || "primary"].btn}`
      : null};
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(2px) translateX(2px);
    transition: 0.3s;
  }

  //---thematic
  background-color: ${(props) =>
    !props.outline
      ? props.theme.elements[props.colorCode || "primary"].btn
      : "transparent"};
  color: ${(props) =>
    !props.outline
      ? props.theme.elements[props.colorCode || "primary"].btnTxt
      : props.theme.elements[props.colorCode || "primary"].btn};
`;
