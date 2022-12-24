import styled from "styled-components";
import { c } from "../GlobalStyles/constantStyles";

const SSidebar = styled.div`
  width: 300px;
  height: 100vh;
  background: ${(p) => p.theme.elements.background.secondary};
  color: ${(p) => p.theme.elements.btnTxt};
  padding: ${c.space.lg};
  position: relative;
  border-right: ${(p) => `5px solid ${p.theme.illustration.stroke}`};
  box-shadow: ${(p) => p.theme.elements.shadow};
`;

const SideBarHeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: pink;
`;

export default function Sidebar() {
  return (
    <SSidebar>
      <SideBarHeader />
    </SSidebar>
  );
}
