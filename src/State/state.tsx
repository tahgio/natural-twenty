//---Libs
import { createContext, useContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
//---Types
import { ThemeOptions } from "../types";
import { Action } from "./reducer";
//---Helpers
import theme from "../DesignElements/theme";

export type State = {
  theme: ThemeOptions;
  initData: {
    monsters: string[];
    spells: string[];
    races: string[];
  };
};

const initialState: State = {
  theme: ThemeOptions.ranger,
  initData: {
    monsters: [],
    spells: [],
    races: [],
  },
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

const client = new ApolloClient({
  uri: "https://www.dnd5eapi.co/graphql",
  cache: new InMemoryCache(),
});

export const StateProvider = ({ reducer, children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ApolloProvider client={client}>
      <StateContext.Provider value={[state, dispatch]}>
        <ThemeProvider theme={theme[state.theme]}>{children}</ThemeProvider>
      </StateContext.Provider>
    </ApolloProvider>
  );
};

export const useStateValue = () => useContext(StateContext);

//-----Action Creator Functions-----//
export const setTheme = (newTheme: ThemeOptions): Action => {
  return {
    type: "SET_THEME",
    payload: newTheme,
  };
};
export const setInitData = (initData: State["initData"]): Action => {
  return {
    type: "SET_INIT_DATA",
    payload: initData,
  };
};
