import { gql } from "../../src/__generated__/gql";

export const GET_SINGLE_MONSTER = gql(/* GraphQL */ `
  query getSingleMonster($index: String) {
    monster(index: $index) {
      armor_class
      desc
      challenge_rating
      charisma
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      hit_dice
      hit_points
      hit_points_roll
      intelligence
      languages
      size
      strength
      subtype
      type
      wisdom
      xp
      image
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
      actions {
        actions {
          action_name
          count
          type
        }
        name
        multiattack_type
        attack_bonus
        attacks {
          damage {
            damage_dice
            damage_type {
              index
              name
              desc
            }
          }
          dc {
            type {
              index
              name
              full_name
              desc
            }
            value
            success
          }
          name
        }
        damage {
          damage_dice
          damage_type {
            index
            name
            desc
          }
          choose
          dc {
            type {
              index
              name
              full_name
              desc
            }
            value
            success
          }
          type
        }
        desc
        dc {
          type {
            index
            name
            full_name
            desc
          }
          value
          success
        }
        options {
          choose
          type
          from {
            option_set_type
            options {
              option_type
              name
              dc {
                type {
                  index
                  name
                  full_name
                  desc
                }
                value
                success
              }
              damage {
                damage_dice
                damage_type {
                  index
                  name
                  desc
                }
              }
            }
          }
        }
        usage {
          type
          times
          rest_types
          dice
          min_value
        }
        action_options {
          choose
          type
          from {
            option_set_type
            options {
              ... on ActionOption {
                option_type
                action_name
                count
                type
              }
              ... on MultipleActionOption {
                option_type
                items {
                  option_type
                  action_name
                  count
                  type
                }
              }
            }
          }
        }
      }
    }
  }
`);
