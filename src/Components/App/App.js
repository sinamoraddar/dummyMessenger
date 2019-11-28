import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import Settings from "../Settings/Settings";
import SideBar from "../SideBar/SideBar";
import CallScreen from "../CallScreen/CallScreen";
import AppContext from "./AppContext";
import "./App.scss";

function App() {
  const [currentView, setCurrentView] = useState(null);
  const homepage =
    process.env.NODE_ENV === "development" ? "/" : "/dummyMessenger/";
  /* set the initial state for the currentView based on the url */
  useEffect(() => {
    switch (window.location.pathname) {
      case homepage + "settings": {
        setCurrentView("settings");
        break;
      }
      case homepage + "calls": {
        setCurrentView("calls");
        break;
      }
      default: {
        setCurrentView("Home");
      }
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        homepage
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
