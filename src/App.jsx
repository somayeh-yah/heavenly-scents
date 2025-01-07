import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./router/router";
import Toggle from "./components/Toggle/Toggle";
function App() {


  return (
    <>
      <Toggle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
