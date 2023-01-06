import styled from "styled-components";

type TagProps = {
  altColor?: boolean;
  bold?: boolean;
  filled?: boolean;
};

export const Tag = styled.div<TagProps>`
  color: ${(p) =>
    !p.altColor
      ? p.filled
        ? p.theme.illustration.stroke
        : p.theme.illustration.secondary
      : !p.filled
      ? p.theme.illustration.tertiary
      : p.theme.illustration.stroke};
  border: ${(p) =>
    !p.filled
      ? `${p.bold ? "2px" : "1px"} solid ${
          !p.altColor
            ? p.theme.illustration.secondary
            : p.theme.illustration.tertiary
        } `
      : null};
  background-color: ${(p) =>
    p.filled
      ? !p.altColor
        ? p.theme.illustration.secondary
        : p.theme.illustration.tertiary
      : null};
  padding: 0.2em 0.7em;
  border-radius: 2px;
  font-weight: ${(p) => (p.bold ? 700 : 300)};
  width: fit-content;
`;
