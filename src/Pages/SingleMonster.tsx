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

const statsToBonus = (num: number): string => {
  const parsedNumber = num % 2 === 1 ? num - 1 : num;
  const result = (parsedNumber - 10) / 2;
  return result <= 0 ? `${result}` : `+${result}`;
};

function Stats({
  stat,
  icon,
  title,
}: {
  stat: number;
  icon: string;
  title: string;
}) {
  return (
    <Container display="flex start center 0 column" margin="0" padding="0px">
      <i
        className={`stat fa-solid fa-${icon}`}
        style={{
          padding: 0,
          margin: 5,
          height: "0px",
          fontSize: "25px",
          lineHeight: 0,
        }}
      ></i>
      <Typo lineHeight={0} variant="h3" text={title} secondary />
      <Typo
        className="txt-tert"
        lineHeight={0}
        variant="h4"
        text={`${stat} (${statsToBonus(stat)})`}
        secondary
      />
    </Container>
  );
}

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

  return (
    <Wrapper>
      <Container display="flex start start 30 column" width="100%">
        <Container display="flex start start 10 row" padding="0" width="100%">
          <Container width="20%" margin="50px 0 0" padding="0">
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
              <Container margin="0" padding="0">
                <Container
                  margin="0"
                  padding="0"
                  display="flex center center 30 row"
                >
                  <Tag altColor bold>
                    {parseNameHelper(data.monster.size)} /{" "}
                    {parseNameHelper(data.monster.type)}
                  </Tag>
                  <Container
                    margin="0"
                    padding="0"
                    display="flex center center 5 row"
                  >
                    <Tag filled altColor bold>
                      AC {data.monster.armor_class}
                    </Tag>
                    <Tag filled altColor bold>
                      HP {data.monster.hit_points} (
                      {data.monster.hit_points_roll})
                    </Tag>
                    <Tag filled altColor bold>
                      SPD {data.monster.speed.walk}
                    </Tag>
                  </Container>
                </Container>
                <Container
                  display="grid/1fr 1fr 1fr 1fr 1fr 1fr/50px/10px/20px"
                  width="100%"
                  margin="2em 0"
                  padding="0"
                >
                  <Stats
                    stat={data.monster.strength}
                    icon="hand-fist"
                    title="STR"
                  />
                  <Stats
                    stat={data.monster.dexterity}
                    icon="person-running"
                    title="DEX"
                  />
                  <Stats
                    stat={data.monster.constitution}
                    icon="dumbbell"
                    title="CON"
                  />
                  <Stats
                    stat={data.monster.intelligence}
                    icon="glasses"
                    title="INT"
                  />
                  <Stats stat={data.monster.wisdom} icon="brain" title="WIS" />
                  <Stats
                    stat={data.monster.charisma}
                    icon="face-laugh-wink"
                    title="CHA"
                  />
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
