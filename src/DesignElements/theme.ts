import { GlobalThemeObj, ThemeFonts, ThemeProps } from "../types";

const theme: GlobalThemeObj = {
  [ThemeProps.ranger]: {
    elements: {
      background: {
        primary: "#004643",
        secondary: "#abd1c6",
      },
      headline: "#fffffe",
      paragraph: "#abd1c6",
      btn: "#f9bc60",
      btnTxt: "#001e1d",
      shadow: "6px 0px 12px 0px rgba(0, 0, 0, 0.5)",
    },
    illustration: {
      stroke: "#001e1d",
      main: "#e8e4e6",
      highlight: "#f9bc60",
      secondary: "#abd1c6",
      tertiary: "#e16162",
    },
    typo: ThemeFonts.Mulish,
  },
  [ThemeProps.bard]: {
    elements: {
      background: { primary: "#fffffe", secondary: "#f2f4f6" },
      headline: "#00214d",
      paragraph: "#2e2e2e6",
      btn: "#00ebc7",
      btnTxt: "#00214d",
      shadow: "3px 0px 10px 0px rgba(0, 33, 77, 0.3)",
    },
    illustration: {
      stroke: "#00214d",
      main: "#fffffe",
      highlight: "#00ebc7",
      secondary: "#ff5470",
      tertiary: "#fde24f",
    },
    typo: ThemeFonts.Montagu,
  },
};

export default theme;
