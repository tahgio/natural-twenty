import { AxiosRequestConfig } from "axios";

export const getInitOptions: AxiosRequestConfig = {
  method: "POST",
  url: "https://www.dnd5eapi.co/graphql",
  headers: {
    "content-type": "application/json",
  },
  data: {
    query: `{
            monsters(limit: 500) {
              name
            }
            races {
              name
            }
            spells(limit: 500) {
              name
            }
        }`,
  },
};
