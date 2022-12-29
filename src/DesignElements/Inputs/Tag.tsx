import styled from "styled-components";

type TagProps = {
  altColor?: boolean;
  bold?: boolean;
};

export const Tag = styled.div<TagProps>`
  color: ${(p) =>
    !p.altColor
      ? p.theme.illustration.secondary
      : p.theme.illustration.tertiary};
  border: ${(p) =>
    `${p.bold ? "2px" : "1px"} solid ${
      !p.altColor
        ? p.theme.illustration.secondary
        : p.theme.illustration.tertiary
    } `};
  padding: 0.2em 0.7em;
  border-radius: 2px;
  font-weight: ${(p) => (p.bold ? 700 : 300)};
  width: fit-content;
`;
