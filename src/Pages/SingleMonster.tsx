import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import { useMemo } from "react";
import { ReactComponent as MonsterIcon } from "../Assets/dndMonsterIcon.svg";
import { Tag } from "../DesignElements/Inputs/Tag";
import Typo from "../DesignElements/DataDisplay/Typo";
import { Link, useParams } from "react-router-dom";
import { Button } from "../DesignElements/Inputs/Button";
import { useQuery } from "@apollo/client";
import { Card } from "../DesignElements/Inputs/Card";
import { GET_SINGLE_MONSTER } from "../Graphql/queries";
import { Divider } from "../DesignElements/Components/Divider";

const parseNameHelper = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function SingleMonster() {
  const { monsterId } = useParams();
  const parsedName = useMemo(
    () =>
      monsterId
        ? monsterId
            .split("-")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ")
        : undefined,
    []
  );
  const { loading, error, data } = useQuery(GET_SINGLE_MONSTER, {
    variables: { index: monsterId },
  });
  console.log(loading, error, data?.monster);

  return (
    <Wrapper>
      <Container display="flex start start 30 column" width="100%">
        <Container display="flex start start 10 row" noPadding width="100%">
          <Container width="20%" margin="50px 0 0" noPadding>
            <MonsterIcon />
          </Container>
          <Container
            display="flex start start 0 column"
            margin="50px 0 0"
            width="75%"
          >
            <Tag>Find all stats here</Tag>
            <Typo variant="h1" text={parsedName} />
            <Typo
              variant="h5"
              text={`Below you will find all of the stats of ${parsedName} took from the 5th edition of the Dnd Monsters book`}
            />
            <Link to="/monsters">
              <Button outline noMargin>
                <i
                  className="fa-solid fa-circle-left"
                  style={{ marginRight: 5 }}
                ></i>{" "}
                Back to monsters page
              </Button>
            </Link>
          </Container>
        </Container>
        <Container>
          <Card width="800px">
            {!loading && !error && data?.monster ? (
              <Container margin="0" noPadding>
                <Tag altColor bold>
                  {parseNameHelper(data.monster.size)} /{" "}
                  {parseNameHelper(data.monster.type)}
                </Tag>

                <Typo variant="h2" text={parsedName} />
                <Container
                  display="grid/1fr 1fr 1fr 1fr 1fr 1fr/50px/10px/20px"
                  width="80%"
                  margin="0"
                  noPadding
                >
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Str: {data.monster.strength}
                  </Container>
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Dex: {data.monster.dexterity}
                  </Container>
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Con: {data.monster.constitution}
                  </Container>
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Int: {data.monster.intelligence}
                  </Container>
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Wis: {data.monster.wisdom}
                  </Container>
                  <Container
                    display="flex center center 5 row"
                    margin="0"
                    noPadding
                  >
                    Cha: {data.monster.charisma}
                  </Container>
                </Container>
                <Divider />
              </Container>
            ) : loading ? (
              <Typo variant="h1" icon="spinner" />
            ) : (
              <Typo
                variant="h1"
                icon="bomb"
                text="something weird happened try to refresh the page"
              />
            )}
          </Card>
        </Container>
      </Container>
    </Wrapper>
  );
}
