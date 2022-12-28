//---Libs
import GlobalStyle from "./DesignElements/GlobalStyles";
import { Outlet } from "react-router-dom";
import axios from "axios";
//--State
//---Components
import { SectionWrapper } from "./DesignElements/Layout/Wrapper";
import Sidebar from "./DesignElements/Components/Sidebar";
import { useEffect } from "react";
import { getInitOptions } from "./Graphql/axios";
import { setInitData, useStateValue } from "./State";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const reduceData = (memo: string[], element: { name: string }) => {
          return memo.concat(element.name);
        };
        const {
          data: { data: initData },
        } = await axios.request(getInitOptions);
        dispatch(
          setInitData({
            monsters: initData.monsters.reduce(reduceData, []),
            spells: initData.spells.reduce(reduceData, []),
            races: initData.races.reduce(reduceData, []),
          })
        );
      } catch (e) {
        console.error(e);
      }
    };
    fetchInitData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <SectionWrapper>
        <Sidebar />
        <Outlet />
      </SectionWrapper>
    </>
  );
}

export default App;
