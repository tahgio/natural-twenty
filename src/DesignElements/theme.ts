import { Theme } from "../types";

interface GlobalThemeObj {
  ranger: Theme;
  bard: Theme;
}

const theme: GlobalThemeObj = {
  ranger: {
    elements: {
      background: "#004643",
      headline: "#fffffe",
      paragraph: "#abd1c6",
      btn: "#f9bc60",
      btnTxt: "#001e1d",
    },
    illustration: {
      stroke: "#001e1d",
      main: "#e8e4e6",
      highlight: "#f9bc60",
      secondary: "#abd1c6",
      tertiary: "#e16162",
    },
  },
  bard: {
    elements: {
      background: "#fffffe",
      headline: "#181818",
      paragraph: "#2e2e2e6",
      btn: "#4fc4cf",
      btnTxt: "#181818",
    },
    illustration: {
      stroke: "#181818",
      main: "#f2eef5",
      highlight: "#4fc4cf",
      secondary: "#994ff3",
      tertiary: "#fbdd74",
    },
  },
};

export default theme;
