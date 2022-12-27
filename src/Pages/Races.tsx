import Typo from "../DesignElements/DataDisplay/Typo";
import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";

export default function Races() {
  return (
    <Wrapper>
      <Container display="flex start start" width="100%">
        <Container display="flex center center 5 column">
          <Typo variant="h1" text="Races Page" />
        </Container>
      </Container>
    </Wrapper>
  );
}
