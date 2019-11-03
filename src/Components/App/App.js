import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
