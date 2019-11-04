import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <DashBoard />
    </BrowserRouter>
  );
}

export default App;
