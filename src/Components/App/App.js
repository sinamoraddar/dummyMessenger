import React, { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import Settings from "../Settings/Settings";
import SideBar from "../SideBar/SideBar";
import CallScreen from "../CallScreen/CallScreen";
import AppContext from "./AppContext";
import "./App.scss";

function App() {
  const [currentView, setCurrentView] = useState(`sideBar`);
  const homepage =
    process.env.NODE_ENV === "development"
      ? "/"
      : "/REST-Countries-API-with-color-theme-switcher/";
  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView
      }}
    >
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path={homepage} exact component={DashBoard} />
          <Route path={homepage + "channel1"} exact component={DashBoard} />
          <Route path={homepage + "messenger"} exact component={DashBoard} />
          <Route path={homepage + "channel3"} exact component={DashBoard} />
          <Route path={homepage + "settings"} exact component={Settings} />
          <Route path={homepage + "calls"} exact component={CallScreen} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
