import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://www.dnd5eapi.co/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/Graphql/CodeGen/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
