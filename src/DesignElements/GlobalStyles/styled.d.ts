import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    elements: {
      background: string;
      headline: string;
      paragraph: string;
      btn: string;
      btnTxt: string;
    };
    illustration: {
      stroke: string;
      main: string;
      highlight: string;
      secondary: string;
      tertiary: string;
    };
  }
}
