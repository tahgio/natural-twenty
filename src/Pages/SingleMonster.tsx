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
//import { GetSingleMonsterQuery, Monster } from "../Graphql/CodeGen/graphql";

const parseNameHelper = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const statsToBonus = (num: number): string => {
  const parsedNumber = num % 2 === 1 ? num - 1 : num;
  const result = (parsedNumber - 10) / 2;
  return result <= 0 ? `${result}` : `+${result}`;
};

const parseProficiency = (str: string): string => {
  const index = str.indexOf(":");
  return str.substring(index + 2, index + 5);
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
        className={`txt-str fa-solid fa-${icon}`}
        style={{
          padding: 0,
          margin: 5,
          height: "0px",
          fontSize: "25px",
          lineHeight: 0,
        }}
      ></i>
      <Typo
        className="txt-tert"
        lineHeight={0}
        variant="h3"
        text={title}
        secondary
      />
      <Typo
        lineHeight={0}
        variant="h4"
        text={`${stat} (${statsToBonus(stat)})`}
        secondary
      />
    </Container>
  );
}

function Attribute({ tag, value }: { tag: string; value: number | string }) {
  return (
    <Container
      margin="0"
      padding="0"
      width="fit-content"
      display="flex center baseline 0 row"
    >
      <Tag small altColor filled>
        <Typo secondary variant="h6" text={tag} lineHeight={1} />
        {value}
      </Tag>
    </Container>
  );
}

// type MResistanceProps = Monster["condition_immunities"] | Monster["damage_immunities"] | Monster["damage_resistances"] | Monster["damage_vulnerabilities"]

// function MonsterResistance({data} : {data: MResistanceProps}) : ReactElement | void {
//   data.length > 0 ? (
//     <Container
//       margin="0"
//       padding="0"
//       display="flex start center 10 row"
//       width="100%"
//     >
//       <Typo secondary variant="h4" text="Proficiencies:" lineHeight={1} />
//       {data.map((e, i) => (
//         <Attribute
//           key={`${e.toString()}_${i}`}
//           tag={parseProficiency(e)}
//           value={`+ ${e}`}
//         />
//       ))}
//     </Container>
//   ) : null;
// }

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
                  width="100%"
                  display="flex between center 30 row"
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
                    <Tag filled altColor>
                      AC <strong>{data.monster.armor_class}</strong>
                    </Tag>
                    <Tag filled altColor>
                      HP <strong>{data.monster.hit_points}</strong> (
                      {data.monster.hit_points_roll})
                    </Tag>
                    <Tag filled altColor>
                      SPD <strong>{data.monster.speed.walk}</strong>
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
                <Container
                  margin="0"
                  padding="0"
                  display="flex start end 10 row"
                  width="100%"
                >
                  <Typo
                    secondary
                    variant="h4"
                    text="Senses:"
                    lineHeight={0.5}
                  />
                  <Container
                    margin="0"
                    padding="0"
                    width="fit-content"
                    display="flex center end 20 row"
                  >
                    <Attribute
                      tag="Passive Perception"
                      value={data.monster.senses.passive_perception}
                    />
                    {data.monster.senses.blindsight ? (
                      <Attribute
                        tag="Blind Sight"
                        value={data.monster.senses.blindsight}
                      />
                    ) : null}
                    {data.monster.senses.darkvision ? (
                      <Attribute
                        tag="Dark Vision"
                        value={data.monster.senses.darkvision}
                      />
                    ) : null}
                    {data.monster.senses.tremorsense ? (
                      <Attribute
                        tag="Tremor Sense"
                        value={data.monster.senses.tremorsense}
                      />
                    ) : null}
                    {data.monster.senses.truesight ? (
                      <Attribute
                        tag="True Sight"
                        value={data.monster.senses.truesight}
                      />
                    ) : null}
                  </Container>
                </Container>
                <Container
                  margin="0"
                  padding="0"
                  display="flex start center 10 row"
                  width="100%"
                >
                  <Typo
                    secondary
                    variant="h4"
                    text="Challenge:"
                    lineHeight={1}
                  />
                  <Tag small altColor filled>
                    <Typo
                      secondary
                      variant="h6"
                      text={`${data.monster.challenge_rating} (${data.monster.xp} xp)`}
                      lineHeight={1}
                    />
                  </Tag>

                  <Typo secondary variant="h4" text="Languages:" />
                  <Tag small altColor filled>
                    <Typo
                      secondary
                      variant="h6"
                      text={data.monster.languages || "none"}
                      lineHeight={1}
                    />
                  </Tag>
                </Container>
                {data.monster.proficiencies.length > 0 ? (
                  <Container
                    margin="0"
                    padding="0"
                    display="flex start center 10 row"
                    width="100%"
                  >
                    <Typo
                      secondary
                      variant="h4"
                      text="Proficiencies:"
                      lineHeight={1}
                    />
                    {data.monster.proficiencies.map((e, i) => (
                      <Attribute
                        key={`${e.proficiency.name}_${e.value}_${i}`}
                        tag={parseProficiency(e.proficiency.name)}
                        value={`+ ${e.value}`}
                      />
                    ))}
                  </Container>
                ) : null}
              </Container>
            ) : loading ? (
              <Typo secondary variant="h1" icon="spinner" />
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
