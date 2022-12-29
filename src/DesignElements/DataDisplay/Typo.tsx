import styled from "styled-components";
import { assertNever, ThemeFonts } from "../../types";
import { c } from "../GlobalStyles/constantStyles";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "logo";
  text?: string;
  secondary?: boolean;
  icon?: string;
};

type TextStylesProps = {
  colorCode: "primary" | "secondary";
};

const Title = styled.span<TextStylesProps>`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements[p.colorCode].headline};
  margin: ${`${c.space.xs} 0`};
`;

const SubTitle = styled.span<TextStylesProps>`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements[p.colorCode].paragraph};
  margin: ${`${c.space.xs} 0`};
`;

const Paragraph = styled.span<TextStylesProps>`
  font-family: ${ThemeFonts.Hanken}, sans-serif;
  color: ${(p) => p.theme.elements[p.colorCode].paragraph};
`;

const LogoTitle = styled.span<TextStylesProps>`
  font-family: ${ThemeFonts.Unbounded}, sans-serif;
  color: ${(p) => p.theme.elements[p.colorCode].headline};
  font-weight: 800;
  font-size: 35px;
  line-height: 35px;
  text-align: center;
`;

export default function Typo({ variant, text, secondary, icon }: TextProps) {
  switch (variant) {
    case "h1":
    case "h2":
      return (
        <Title as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text} {icon ? <i className={`fa-solid fa-${icon}`}></i> : null}
        </Title>
      );
    case "h3":
    case "h4":
    case "h5":
      return (
        <SubTitle as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text} {icon ? <i className={`fa-solid fa-${icon}`}></i> : null}
        </SubTitle>
      );
    case "p":
      return (
        <Paragraph as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text} {icon ? <i className={`fa-solid fa-${icon}`}></i> : null}
        </Paragraph>
      );
    case "span":
      return (
        <Paragraph colorCode={secondary ? "secondary" : "primary"}>
          {text} {icon ? <i className={`fa-solid fa-${icon}`}></i> : null}
        </Paragraph>
      );
    case "logo":
      return (
        <LogoTitle colorCode={secondary ? "secondary" : "primary"}>
          Natural Twenty
        </LogoTitle>
      );
    default:
      return assertNever(variant);
  }
}
