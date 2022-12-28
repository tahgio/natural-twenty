import Typo from "../DesignElements/DataDisplay/Typo";
import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import HomePageBG from "../Assets/HomepagePicture.png";
import styled from "styled-components";

const Blend = styled.div`
  height: fit-content;
  width: calc(100%-300px);
  background-color: ${(p) => p.theme.elements.primary.background};
  position: absolute;
  bottom: 0;
  left: 300px;
  z-index: -1;
`;

const HpageImg = styled.img`
  mix-blend-mode: multiply;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Container display="flex start start" width="100%">
        <Container display="flex center start 5 column" width="100%">
          <Typo variant="h1" text="Welcome to Natural Twenty" />
          <Typo variant="h3" text="Your DnD place" />
          <Blend>
            <HpageImg src={HomePageBG} />
          </Blend>
        </Container>
      </Container>
    </Wrapper>
  );
}
