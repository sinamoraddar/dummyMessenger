import React from "react";
import ToggleSideBarButton from "../SideBar/ToggleSideBarButton/ToggleSideBarButton";

const CallScreen = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    }}
  >
    <ToggleSideBarButton color={"black"} /> CallScreen goes here
  </div>
);

export default CallScreen;
