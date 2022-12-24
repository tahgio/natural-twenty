import { ReactNode } from "react";
import styled from "styled-components";

const ContainerBasis = styled.div`
  padding: 0 2em;
  margin: 0 auto;
  display: var(--display-ctn);
  justify-content: var(--justify-ctn);
  align-items: var(--align-ctn);
  gap: var(--gap-ctn, 10px);
  flex-direction: var(--dir-ctn);
  grid-template-columns: var(--gridCol-ctn);
  grid-template-rows: var(--gridRows-ctn);
  grid-column-gap: var(--gridCgap-ctn);
  grid-row-gap: var(--gridRgap-ctn);
`;

export function Container({
  children,
  display,
}: {
  children: ReactNode;
  display?: string;
}) {
  const arrDisplay: string[] | undefined = display
    ? display[0] === "flex"
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
      style={{
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
        "--gridCol-ctn": arrDisplay ? arrDisplay[1] : undefined,
        "--gridRows-ctn": arrDisplay ? arrDisplay[2] : undefined,
        "--gridCgap-ctn": arrDisplay ? arrDisplay[3] : undefined,
        "--gridRgap-ctn": arrDisplay ? arrDisplay[4] : undefined,
      }}
    >
      {children}
    </ContainerBasis>
  );
}
