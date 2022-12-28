import ReactDOM from "react-dom/client";
//-----Libs
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//-----Pages
import App from "./App";
import CustomItems from "./Pages/CustomItems";
import HomePage from "./Pages/HomePage";
import Monsters from "./Pages/Monsters";
import Races from "./Pages/Races";
import Spells from "./Pages/Spells";
import Templates from "./Pages/Templates";
import { reducer, StateProvider } from "./State";

const router = createBrowserRouter([
  {
    element: (
      <StateProvider reducer={reducer}>
        <App />
      </StateProvider>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "monsters", element: <Monsters /> },
      { path: "spells", element: <Spells /> },
      { path: "races", element: <Races /> },
      { path: "templates", element: <Templates /> },
      { path: "custom-items", element: <CustomItems /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
