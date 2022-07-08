import { Route, Routes } from "react-router-dom";

import {Tasks} from "./pages/Tasks";
import { SideBar } from "./SideBar/SideBar";
import { Archive } from "./pages/Archive";

function App() {
  
  return (
    <div className="wrapper">
      <SideBar />

      <Routes>
        <Route path="/" element={
          <Tasks />
        }/>

        <Route path="/a" element={
          <Archive />
        }/>

      </Routes>
  </div>
  );
}

export default App;
