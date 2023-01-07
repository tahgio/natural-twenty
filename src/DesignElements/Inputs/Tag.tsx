import styled from "styled-components";

type TagProps = {
  altColor?: boolean;
  bold?: boolean;
  filled?: boolean;
  small?: boolean;
};

export const Tag = styled.div<TagProps>`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  color: ${(p) =>
    !p.altColor
      ? p.filled
        ? p.theme.elements.secondary.btn
        : p.theme.illustration.secondary
      : !p.filled
      ? p.theme.elements.secondary.headline
      : p.theme.elements.secondary.background};
  border: ${(p) =>
    !p.filled
      ? `${p.bold ? "2px" : "1px"} solid ${
          !p.altColor
            ? p.theme.illustration.secondary
            : p.theme.elements.secondary.headline
        } `
      : null};
  background-color: ${(p) =>
    p.filled
      ? !p.altColor
        ? p.theme.illustration.secondary
        : p.theme.illustration.stroke
      : null};
  padding: ${(p) => (p.small ? "0.2em 0.5em" : "0.2em 0.7em")};
  border-radius: 2px;
  font-weight: ${(p) => (p.bold ? 700 : 300)};
  width: fit-content;
  font-size: ${(p) => (p.small ? "12px" : null)};
  & strong {
    font-weight: 700;
  }
  & h6 {
    color: ${(p) =>
      !p.altColor
        ? p.filled
          ? p.theme.elements.secondary.btn
          : p.theme.illustration.secondary
        : !p.filled
        ? p.theme.elements.secondary.headline
        : p.theme.elements.secondary.background};
  }
`;
