import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from "./DesignElements/theme";
import GlobalStyle from "./DesignElements/GlobalStyles";

type ThemeProps = "ranger" | "bard";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.elements.btn};
  color: ${(props) => props.theme.elements.btnTxt};
`;

function App() {
  const [select, setSelect] = useState<ThemeProps>("bard");

  return (
    <div>
      <ThemeProvider theme={theme[select]}>
        <GlobalStyle />
        <Button
          onClick={
            select === "bard"
              ? () => setSelect("ranger")
              : () => setSelect("bard")
          }
        >
          Click
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
