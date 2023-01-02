/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetSingleMonster($index: String) {\n    monster(index: $index) {\n      size\n      type\n      armor_class\n      hit_points\n      hit_points_roll\n      speed {\n        walk\n      }\n      strength\n      dexterity\n      constitution\n      intelligence\n      wisdom\n      charisma\n      proficiencies {\n        proficiency {\n          name\n        }\n        value\n      }\n      damage_immunities\n      damage_resistances\n      damage_vulnerabilities\n      condition_immunities {\n        desc\n        name\n      }\n      senses {\n        blindsight\n        darkvision\n        passive_perception\n        tremorsense\n        truesight\n      }\n      languages\n      challenge_rating\n      xp\n      special_abilities {\n        name\n        desc\n      }\n      actions {\n        name\n        desc\n      }\n      legendary_actions {\n        name\n        desc\n      }\n      reactions {\n        name\n        desc\n      }\n    }\n  }\n": types.GetSingleMonsterDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSingleMonster($index: String) {\n    monster(index: $index) {\n      size\n      type\n      armor_class\n      hit_points\n      hit_points_roll\n      speed {\n        walk\n      }\n      strength\n      dexterity\n      constitution\n      intelligence\n      wisdom\n      charisma\n      proficiencies {\n        proficiency {\n          name\n        }\n        value\n      }\n      damage_immunities\n      damage_resistances\n      damage_vulnerabilities\n      condition_immunities {\n        desc\n        name\n      }\n      senses {\n        blindsight\n        darkvision\n        passive_perception\n        tremorsense\n        truesight\n      }\n      languages\n      challenge_rating\n      xp\n      special_abilities {\n        name\n        desc\n      }\n      actions {\n        name\n        desc\n      }\n      legendary_actions {\n        name\n        desc\n      }\n      reactions {\n        name\n        desc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSingleMonster($index: String) {\n    monster(index: $index) {\n      size\n      type\n      armor_class\n      hit_points\n      hit_points_roll\n      speed {\n        walk\n      }\n      strength\n      dexterity\n      constitution\n      intelligence\n      wisdom\n      charisma\n      proficiencies {\n        proficiency {\n          name\n        }\n        value\n      }\n      damage_immunities\n      damage_resistances\n      damage_vulnerabilities\n      condition_immunities {\n        desc\n        name\n      }\n      senses {\n        blindsight\n        darkvision\n        passive_perception\n        tremorsense\n        truesight\n      }\n      languages\n      challenge_rating\n      xp\n      special_abilities {\n        name\n        desc\n      }\n      actions {\n        name\n        desc\n      }\n      legendary_actions {\n        name\n        desc\n      }\n      reactions {\n        name\n        desc\n      }\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;