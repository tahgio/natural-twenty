import { gql } from "./CodeGen/gql";

export const GET_SINGLE_MONSTER = gql(/* GraphQL */ `
  query GetSingleMonster($index: String) {
    monster(index: $index) {
      size
      type
      armor_class
      hit_points
      hit_points_roll
      speed {
        walk
      }
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      proficiencies {
        proficiency {
          name
        }
        value
      }
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      condition_immunities {
        desc
        name
      }
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
      languages
      challenge_rating
      xp
      special_abilities {
        name
        desc
      }
      actions {
        name
        desc
      }
      legendary_actions {
        name
        desc
      }
      reactions {
        name
        desc
      }
    }
  }
`);
