import { ReactNode } from "react";
import styled from "styled-components";

type CtnProps = {
  noPadding: boolean | undefined;
  margin?: string;
};

const ContainerBasis = styled.div<CtnProps>`
  --gap-ctn: 10px;
  padding: ${(p) => (p.noPadding ? "0" : "0 2em")};
  margin: ${(p) => (p.margin ? p.margin : "0 auto")};
  display: var(--display-ctn);
  justify-content: var(--justify-ctn);
  align-items: var(--align-ctn);
  gap: var(--gap-ctn);
  flex-direction: var(--dir-ctn);
  grid-template-columns: var(--gridCol-ctn);
  grid-template-rows: var(--gridRows-ctn);
  column-gap: var(--gridCgap-ctn, var(--gap-ctn));
  row-gap: var(--gridRgap-ctn, var(--gap-ctn));
`;

export function Container({
  children,
  display,
  width,
  noPadding,
  margin,
}: {
  children: ReactNode;
  display?: string;
  width?: string;
  noPadding?: boolean;
  margin?: string;
}) {
  const arrDisplay: string[] | undefined = display
    ? display.split(" ")[0] === "flex"
      ? display
          .split(" ")
          .map((e) =>
            e === "start"
              ? "flex-start"
              : e === "end"
              ? "flex-end"
              : e === "between"
              ? "space-between"
              : e === "around"
              ? "space-around"
              : e === "even"
              ? "space-evenly"
              : !isNaN(Number(e))
              ? `${e}px`
              : e
          )
      : display.split("/")
    : undefined;
  return (
    <ContainerBasis
      margin={margin}
      noPadding={noPadding}
      style={{
        //----- CSS Variables -----//
        "--display-ctn": arrDisplay ? arrDisplay[0] : undefined,
        //---flex
        "--justify-ctn":
          arrDisplay && arrDisplay[0] === "flex"
            ? arrDisplay[1] || undefined
            : undefined,
        "--align-ctn":
          arrDisplay && arrDisplay[0] === "flex"
            ? arrDisplay[2] || undefined
            : undefined,
        "--gap-ctn":
          arrDisplay && arrDisplay[0] === "flex"
            ? arrDisplay[3] || undefined
            : undefined,
        "--dir-ctn":
          arrDisplay && arrDisplay[0] === "flex"
            ? arrDisplay[4] || undefined
            : undefined,
        //--grid
        "--gridCol-ctn":
          arrDisplay && arrDisplay[0] === "grid" ? arrDisplay[1] : undefined,
        "--gridRows-ctn":
          arrDisplay && arrDisplay[0] === "grid" ? arrDisplay[2] : undefined,
        "--gridCgap-ctn":
          arrDisplay && arrDisplay[0] === "grid" ? arrDisplay[3] : undefined,
        "--gridRgap-ctn":
          arrDisplay && arrDisplay[0] === "grid" ? arrDisplay[4] : undefined,
        //----- Styles -----//
        width,
      }}
    >
      {children}
    </ContainerBasis>
  );
}
