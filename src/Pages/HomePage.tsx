import Typo from "../DesignElements/DataDisplay/Typo";
import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import HomePageBGBottom from "../Assets/HomepagePicture1.png";
import HomePageBGTop from "../Assets/HomepageDragon.png";
import styled from "styled-components";
import { Button } from "../DesignElements/Inputs/Button";
import { Link } from "react-router-dom";

type BlendProps = {
  inset: string;
};
type HPImgProps = {
  width: string;
};

const Blend = styled.div<BlendProps>`
  background-color: ${(p) => p.theme.elements.primary.background};
  position: absolute;
  inset: ${(p) => p.inset};
  z-index: -1;
`;

const HpageImg = styled.img<HPImgProps>`
  mix-blend-mode: multiply;
  opacity: 0.8;
  width: ${(p) => p.width};
  z-index: -1;
`;

const Tag = styled.div`
  color: ${(p) => p.theme.illustration.secondary};
  border: ${(p) => `1px solid ${p.theme.illustration.secondary} `};
  padding: 0.2em 0.7em;
  border-radius: 2px;
  font-weight: 300;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Container display="flex end end" width="100%">
        <Container
          display="flex start start 10 column"
          margin="10% 0 0"
          width="55%"
        >
          <Tag>Your Dnd place is here</Tag>
          <Typo variant="h1" text="Welcome to Natural Twenty" icon="dice-d20" />
          <Typo
            variant="h5"
            text="A place for adventures beyond our imagination. Here you can easily find official info about Dungeons & Dragons rules and get some inspirations to help you build your next campaign."
          />
          <Container
            margin="10px 0"
            display="flex start start 10 row"
            width="100%"
            noPadding
          >
            <Link to="monsters">
              {" "}
              <Button noMargin>
                <i className="fa-solid fa-dungeon"></i> Enter the dungeon
              </Button>
            </Link>
            <a
              href="https://github.com/tahgio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button noMargin outline>
                <i className="fa-brands fa-github"></i> Visit my github
              </Button>
            </a>
          </Container>
        </Container>
        <Blend inset="auto auto 0 300px">
          <HpageImg width="80%" src={HomePageBGBottom} />
        </Blend>
        <Blend inset="0 auto auto 250px">
          <HpageImg width="60%" src={HomePageBGTop} />
        </Blend>
      </Container>
    </Wrapper>
  );
}
