import { ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from "./DesignElements/theme";
import GlobalStyle from "./DesignElements/GlobalStyles";
import { Button } from "./DesignElements/Inputs/Button";
import { ThemeProps } from "./types";
import { Container } from "./DesignElements/Layout/Container";
import { SectionWrapper, Wrapper } from "./DesignElements/Layout/Wrapper";
import Sidebar from "./DesignElements/Components/Sidebar";

function App() {
  const [select, setSelect] = useState<ThemeProps>(ThemeProps.ranger);

  return (
    <ThemeProvider theme={theme[select]}>
      <GlobalStyle />
      <SectionWrapper>
        <Sidebar />
        <Wrapper>
          <Container>
            <Button
              onClick={
                select === ThemeProps.bard
                  ? () => setSelect(ThemeProps.ranger)
                  : () => setSelect(ThemeProps.bard)
              }
            >
              Click
            </Button>
          </Container>
        </Wrapper>
      </SectionWrapper>
    </ThemeProvider>
  );
}

export default App;
