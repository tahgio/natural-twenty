import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import { useMemo } from "react";
import { ReactComponent as MonsterIcon } from "../Assets/dndMonsterIcon.svg";
import { Tag } from "../DesignElements/Inputs/Tag";
import Typo from "../DesignElements/DataDisplay/Typo";
import { Link, useParams } from "react-router-dom";
import { Button } from "../DesignElements/Inputs/Button";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_MONSTER } from "../Graphql/queries";
import { Card } from "../DesignElements/Inputs/Card";
import { TypedQueryDocumentNode } from "graphql";

//const baseUrl = "https://www.dnd5eapi.co";

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
  const { loading, error, data } = useQuery(
    GET_SINGLE_MONSTER as TypedQueryDocumentNode,
    {
      variables: { index: monsterId },
    }
  );
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
              <>
                <Tag altColor bold>
                  {data.monster.size}
                </Tag>

                <Typo variant="h2" text={parsedName} />
              </>
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
