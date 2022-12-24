import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
}
