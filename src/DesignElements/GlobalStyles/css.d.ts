import "csstype";
import {} from "styled-components/cssprop";

declare module "csstype" {
  export interface Properties {
    "--display-ctn"?: string;
    "--justify-ctn"?: string;
    "--align-ctn"?: string;
    "--gap-ctn"?: string;
    "--dir-ctn"?: string;
    "--gridCol-ctn"?: string;
    "--gridRows-ctn"?: string;
    "--gridCgap-ctn"?: string;
    "--gridRgap-ctn"?: string;
  }
}
