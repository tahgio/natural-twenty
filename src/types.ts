//----- Theme -----//
export interface Theme {
  elements: {
    background: {
      primary: string;
      secondary: string;
    };
    headline: string;
    paragraph: string;
    btn: string;
    btnTxt: string;
    shadow: string;
  };
  illustration: {
    stroke: string;
    main: string;
    highlight: string;
    secondary: string;
    tertiary: string;
  };
}

export enum ThemeProps {
  ranger,
  bard,
}

export type GlobalThemeObj = {
  [key in ThemeProps]: Theme;
};
