import { ThemeProvider } from "styled-components";
import theme from "./DesignElements/theme";
import GlobalStyle from "./DesignElements/GlobalStyles";
import { Outlet } from "react-router-dom";
import { SectionWrapper } from "./DesignElements/Layout/Wrapper";
import Sidebar from "./DesignElements/Components/Sidebar";
import { useState } from "react";
import { ThemeProps } from "./types";

function App() {
  const [select, SetSelect] = useState<ThemeProps>(ThemeProps.ranger);
  return (
    <ThemeProvider theme={theme[select]}>
      <GlobalStyle />
      <SectionWrapper>
        <Sidebar setSelect={SetSelect} currentTheme={select} />
        <Outlet />
      </SectionWrapper>
    </ThemeProvider>
  );
}

export default App;
