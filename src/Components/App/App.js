import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import SideBar from "../SideBar/SideBar";
import  "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <DashBoard />
    </BrowserRouter>
  );
}

export default App;
