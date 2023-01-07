import styled from "styled-components";
type CardProps = {
  width?: string;
};
export const Card = styled.div<CardProps>`
  background-color: ${(p) => p.theme.elements.secondary.background};
  padding: 1.5em 2em;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.5);
  width: ${(p) => (p.width ? p.width : null)};
`;

export const CardButton = styled(Card)`
  padding: 0.7em;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(2px) translateX(2px);
    transition: 0.3s;
  }
`;
