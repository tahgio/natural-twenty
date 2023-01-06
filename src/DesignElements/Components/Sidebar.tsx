//-----Libs
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//-----Types & Constants
import { ThemeOptions } from "../../types";
import { c } from "../GlobalStyles/constantStyles";
//-----Components
import Typo from "../DataDisplay/Typo";
import { Button } from "../Inputs/Button";
import { Container } from "../Layout/Container";
import { Divider } from "./Divider";
import { setTheme, useStateValue } from "../../State";

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
  height: 90px;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      transition: 0.3s;
    }
  }
  & :hover,
  .active-route {
    span {
      text-shadow: 3px 3px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  }
`;

const SideBarBody = styled.div`
  width: 100%;
  height: fit-content;
  margin: ${`${c.space.md} 0px 0px`};
  display: flex;
  flex-direction: column;
  gap: ${c.space.sm};
  cursor: pointer;

  > a > div {
    padding: 10px;
    height: 45px;
    background-color: ${(p) => p.theme.elements.secondary.btn};
    border-radius: 2px;
    transition: 0.3s;
    & h4 {
      color: ${(p) => p.theme.elements.secondary.btnTxt};
    }
    &:hover {
      outline: ${(p) => `1px solid ${p.theme.illustration.secondary}`};
      box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }
  }
  > p {
    font-weight: 700;
  }
  & .hlgt {
    color: ${(p) => p.theme.illustration.highlight};
  }
  & .tert {
    color: ${(p) => p.theme.illustration.secondary};
  }
  & .active-route {
    outline: ${(p) => `1px solid ${p.theme.illustration.secondary}`};
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
  }
`;

const SideBarBtn = ({
  text,
  icon,
  to,
}: {
  text: string;
  icon: string;
  to: string;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "active-route" : undefined)}
  >
    <Container display="flex between center" width="100%">
      <Container display="flex start center 20" width="90%" padding="0">
        <i className={`tert fa-solid fa-${icon}`}></i>
        <Typo variant="h4" secondary text={text} />
      </Container>
      <i className="hlgt fa-solid fa-circle-arrow-right"></i>
    </Container>
  </NavLink>
);

export default function Sidebar() {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <SSidebar>
      <SideBarHeader>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-route" : undefined)}
        >
          <Typo variant="logo" secondary />
        </NavLink>
      </SideBarHeader>
      <Divider />
      <SideBarBody>
        <Typo variant="p" text="Get Info" secondary />
        <SideBarBtn text="Monsters" icon="dragon" to="monsters" />
        <SideBarBtn text="Spells" icon="scroll" to="spells" />
        <SideBarBtn text="Races" icon="hat-wizard" to="races" />
        <Typo variant="p" text="Get Ideas" secondary />
        <SideBarBtn text="Templates" icon="book-skull" to="templates" />
        <SideBarBtn text="Custom Items" icon="ring" to="custom-items" />
      </SideBarBody>
      <Divider />
      <Container display="flex between center" padding="0">
        <Button
          noMargin
          onClick={
            theme === ThemeOptions.bard
              ? () => dispatch(setTheme(ThemeOptions.ranger))
              : () => dispatch(setTheme(ThemeOptions.bard))
          }
        >
          Change Class:{" "}
          <Typo variant="span" secondary text={`${ThemeOptions[theme]}`} />
        </Button>
      </Container>
    </SSidebar>
  );
}
