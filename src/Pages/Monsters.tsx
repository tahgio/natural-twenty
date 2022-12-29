import Typo from "../DesignElements/DataDisplay/Typo";
import { useState, useMemo } from "react";
import { Tag } from "../DesignElements/Inputs/Tag";
import { Container } from "../DesignElements/Layout/Container";
import { Wrapper } from "../DesignElements/Layout/Wrapper";
import { ReactComponent as MonsterIcon } from "../Assets/dndMonsterIcon.svg";
import { useStateValue } from "../State";
import styled from "styled-components";
import { ThemeFonts } from "../types";

const Card = styled.div`
  background-color: ${(p) => p.theme.illustration.secondary};
  padding: 0.7em 0.7em;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(2px) translateX(2px);
    transition: 0.3s;
  }
`;

const SearchInput = styled.form`
  box-shadow: inset 4px 4px rgba(0, 0, 0, 0.5);
  background-color: ${(p) => p.theme.illustration.main};
  padding: 7px 6px 3px 10px;
  border: 2px solid ${(p) => p.theme.illustration.highlight};
  border-radius: 5px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 6px;
  width: 300px;
  & input {
    all: unset;
    width: 82%;
    padding-left: 4px;
    &::placeholder {
      color: ${(p) => p.theme.illustration.stroke};
      font-family: ${ThemeFonts.Hanken}, sans-serif;
      font-size: 15px;
      font-weight: 600;
    }
  }
  & .fa-circle-xmark {
    cursor: pointer;
  }
`;

export default function Monsters() {
  const [
    {
      initData: { monsters },
    },
  ] = useStateValue();
  const [search, setSearch] = useState("");

  const filteredMonsters = useMemo(() => {
    return monsters.filter((e: string) => e.toLowerCase().includes(search));
  }, [search]);
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
            <Tag>Find all monsters here</Tag>
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
              <Card key={`${e}_${i}`}>
                {i}. {e}
              </Card>
            ))
          ) : (
            <Typo variant="h1" text="Nothing found!" icon="ghost" />
          )}
        </Container>
      </Container>
    </Wrapper>
  );
}
