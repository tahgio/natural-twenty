import { ThemeOptions } from "../types";
import { State } from "./state";

export type Action =
  | {
      type: "SET_THEME";
      payload: ThemeOptions;
    }
  | {
      type: "SET_INIT_DATA";
      payload: State["initData"];
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "SET_INIT_DATA":
      return {
        ...state,
        initData: action.payload,
      };
    default:
      return state;
  }
};
