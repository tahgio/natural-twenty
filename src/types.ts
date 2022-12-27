//----- Theme -----//
type ThemeElement = {
  background: string;
  headline: string;
  paragraph: string;
  btn: string;
  btnTxt: string;
};

export interface Theme {
  elements: {
    primary: ThemeElement;
    secondary: ThemeElement;
  };
  illustration: {
    stroke: string;
    main: string;
    highlight: string;
    secondary: string;
    tertiary: string;
  };
  shadow: string;
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
  xxs = "2px",
  xs = "5px",
  sm = "8px",
  md = "16px",
  lg = "24px",
  xl = "32px",
  xxl = "48px",
}

export type GlobalThemeObj = {
  [key in ThemeProps]: Theme;
};

//----- Type Assert -----//
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
