import { GlobalThemeObj, ThemeFonts, ThemeOptions } from "../types";

const theme: GlobalThemeObj = {
  [ThemeOptions.ranger]: {
    elements: {
      primary: {
        background: "#004643",
        headline: "#fffffe",
        paragraph: "#abd1c6",
        btn: "#f9bc60",
        btnTxt: "#001e1d",
      },
      secondary: {
        background: "#abd1c6",
        headline: "#001e1d",
        paragraph: "#0f3433",
        btn: "#004643",
        btnTxt: "#fffffe",
      },
    },
    illustration: {
      stroke: "#001e1d",
      main: "#e8e4e6",
      highlight: "#f9bc60",
      secondary: "#abd1c6",
      tertiary: "#e16162",
    },
    shadow: "6px 0px 12px 0px rgba(0, 0, 0, 0.5)",
    typo: ThemeFonts.Mulish,
  },
  [ThemeOptions.bard]: {
    elements: {
      primary: {
        background: "#fffffe",
        headline: "#00214d",
        paragraph: "#2e2e2e6",
        btn: "#00ebc7",
        btnTxt: "#00214d",
      },
      secondary: {
        background: "#f2f4f6",
        headline: "#00214d",
        paragraph: "#1b2d45",
        btn: "#fffffe",
        btnTxt: "#00214d",
      },
    },
    illustration: {
      stroke: "#00214d",
      main: "#fffffe",
      highlight: "#00ebc7",
      secondary: "#ff5470",
      tertiary: "#fde24f",
    },
    shadow: "3px 0px 10px 0px rgba(0, 33, 77, 0.3)",
    typo: ThemeFonts.Montagu,
  },
};

export default theme;
