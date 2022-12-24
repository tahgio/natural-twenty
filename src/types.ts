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
  typo: ThemeFonts;
}
//--theme names
export enum ThemeProps {
  ranger,
  bard,
}

//--theme fonts
export enum ThemeFonts {
  Unbounded = "Unbounded",
  Mulish = "Mulish",
  Montagu = "Montagu Slab",
  Hanken = "Hanken Grotesk",
}

//-----  APP -----//
//---sizes

export enum AppSizes {
  sm = "8px",
  md = "16px",
  lg = "24px",
  xl = "32px",
  xxl = "48px",
}

export type GlobalThemeObj = {
  [key in ThemeProps]: Theme;
};
