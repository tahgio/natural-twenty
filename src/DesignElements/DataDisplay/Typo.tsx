import styled from "styled-components";
import { ThemeFonts } from "../../types";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  text: string;
};

const Title = styled.span`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements.headline};
  font-weight: 600;
`;
const SubTitle = styled.span`
  font-family: ${(p) => p.theme.typo};
  color: ${(p) => p.theme.elements.paragraph};
  font-weight: 500;
`;

const Paragraph = styled.span`
  font-family: ${ThemeFonts.Hanken}, sans-serif;
  color: ${(p) => p.theme.elements.paragraph};
  font-weight: 400;
`;

export default function Typo({ variant, text }: TextProps) {
  switch (variant) {
    case "h1":
    case "h2":
      return <Title as={variant}>{text}</Title>;
    case "h3":
    case "h4":
    case "h5":
      return <SubTitle as={variant}>{text}</SubTitle>;
    case "p":
      return <Paragraph as={variant}>{text}</Paragraph>;

    default:
      return <Paragraph>{text}</Paragraph>;
  }
}
