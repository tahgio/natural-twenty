import styled from "styled-components";
import Typo from "../DataDisplay/Typo";
import { c } from "../GlobalStyles/constantStyles";

const SSidebar = styled.div`
  width: 300px;
  height: 100vh;
  background: ${(p) => p.theme.elements.secondary.background};
  padding: ${c.space.lg};
  position: relative;
  border-right: ${(p) => `5px solid ${p.theme.illustration.stroke}`};
  box-shadow: ${(p) => p.theme.shadow};
`;

const SideBarHeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: pink;
`;

export default function Sidebar() {
  return (
    <SSidebar>
      <SideBarHeader>
        <Typo variant="h1" text="Natural Twenty" secondary />
      </SideBarHeader>
    </SSidebar>
  );
}
