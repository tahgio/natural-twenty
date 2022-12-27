import styled from "styled-components";
import { assertNever, ThemeFonts } from "../../types";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "logo";
  text?: string;
  secondary?: boolean;
};

type TextStylesProps = {
  colorCode: "primary" | "secondary";
};

const Title = styled.span<TextStylesProps>`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements[p.colorCode].headline};
`;

const SubTitle = styled.span<TextStylesProps>`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements[p.colorCode].paragraph};
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

export default function Typo({ variant, text, secondary }: TextProps) {
  switch (variant) {
    case "h1":
    case "h2":
      return (
        <Title as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text}
        </Title>
      );
    case "h3":
    case "h4":
    case "h5":
      return (
        <SubTitle as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text}
        </SubTitle>
      );
    case "p":
      return (
        <Paragraph as={variant} colorCode={secondary ? "secondary" : "primary"}>
          {text}
        </Paragraph>
      );
    case "span":
      return (
        <Paragraph colorCode={secondary ? "secondary" : "primary"}>
          {text}
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
