import React from "react";
import AppContext from "../../App/AppContext";
import styles from "./ToggleSideBarButton.module.scss";

const ToggleSideBarButton = ({ color }) => {
  //   alert(color);
  return (
    <AppContext.Consumer>
      {({ setCurrentView }) => (
        <button
          className={`${styles.toggleSideBar} ${color === "black" &&
            styles.black}`}
          onClick={() => setCurrentView("sideBar")}
        >
          &#9776;
        </button>
      )}
    </AppContext.Consumer>
  );
};

export default ToggleSideBarButton;
