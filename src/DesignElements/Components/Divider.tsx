import styled from "styled-components";
import { AppSizes } from "../../types";

export const Divider = styled.div`
  width: 100%;
  margin: ${`${AppSizes.md} 0px`};
  height: 2px;
  background-color: ${(p) => p.theme.illustration.stroke};
`;
