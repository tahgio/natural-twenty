import Typo from "../DesignElements/DataDisplay/Typo";
import { useState, useMemo, useCallback } from "react";
import { Tag } from "../DesignElements/Inputs/Tag";
import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import { ReactComponent as MonsterIcon } from "../Assets/dndMonsterIcon.svg";
import { useStateValue } from "../State";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../DesignElements/Inputs/SearchInput";
import { CardButton } from "../DesignElements/Inputs/Card";

export default function Monsters() {
  const [
    {
      initData: { monsters },
    },
  ] = useStateValue();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredMonsters = useMemo(() => {
    return monsters.filter((e: string) => e.toLowerCase().includes(search));
  }, [search]);

  const handleCardClick = useCallback((name: string) => {
    const parsedName = name.toLowerCase().split(" ").join("-");
    navigate(`/monsters/${parsedName}`);
  }, []);
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
            width="55%"
          >
            <Tag>Find all stats here</Tag>
            <Typo variant="h1" text="Monsters" />
            <Typo
              variant="h5"
              text="Here you can find all stats from the monsters available on 5th Edition of Dnd Player's Handbook. Search for a monster by name and click it to see all info related to it."
            />
          </Container>
        </Container>
        <Container noPadding display="flex start start" margin="0">
          <SearchInput>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              value={search}
              placeholder="Search a monster by name"
              onChange={(e) => setSearch(e.target.value)}
            />
            {search !== "" ? (
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setSearch("")}
              ></i>
            ) : null}
          </SearchInput>
        </Container>
        <Container
          display="grid/1fr 1fr 1fr 1fr/auto/20px/20px"
          margin=" 10px 0 0 "
          noPadding
        >
          {filteredMonsters.length > 0 ? (
            filteredMonsters.map((e, i) => (
              <CardButton key={`${e}_${i}`} onClick={() => handleCardClick(e)}>
                {i}. {e}
              </CardButton>
            ))
          ) : (
            <Typo variant="h1" text="Nothing found!" icon="ghost" />
          )}
        </Container>
      </Container>
    </Wrapper>
  );
}
