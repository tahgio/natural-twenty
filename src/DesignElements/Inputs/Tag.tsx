import styled from "styled-components";

export const Tag = styled.div`
  color: ${(p) => p.theme.illustration.secondary};
  border: ${(p) => `1px solid ${p.theme.illustration.secondary} `};
  padding: 0.2em 0.7em;
  border-radius: 2px;
  font-weight: 300;
`;
