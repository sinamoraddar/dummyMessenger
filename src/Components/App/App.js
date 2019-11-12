import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import Settings from "../Settings/Settings";
import SideBar from "../SideBar/SideBar";
import CallScreen from "../CallScreen/CallScreen";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      {/* display the dashboard component for different routes */}
      {["/", "/messenger", "/channel1", "/channel3"].map((path, index) => (
        <Route path={path} exact component={DashBoard} key={index} />
      ))}
      <Route path={"/settings"} exact component={Settings} />
      <Route path={"/calls"} exact component={CallScreen} />
    </BrowserRouter>
  );
}

export default App;
