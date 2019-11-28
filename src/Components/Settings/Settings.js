import React from "react";
import ToggleSideBarButton from "../SideBar/ToggleSideBarButton/ToggleSideBarButton";

const Settings = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    }}
  >
    <ToggleSideBarButton color={"black"} />
    settings goes here
  </div>
);

export default Settings;
