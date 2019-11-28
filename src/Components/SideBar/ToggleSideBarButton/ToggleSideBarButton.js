import React from "react";
import AppContext from "../../App/AppContext";
import styles from "./ToggleSideBarButton.module.scss";

const ToggleSideBarButton = () => (
  <AppContext.Consumer>
    {({ setCurrentView }) => (
      <button
        className={styles.toggleSideBar}
        onClick={() => setCurrentView("sideBar")}
      >
        sidebar
      </button>
    )}
  </AppContext.Consumer>
);

export default ToggleSideBarButton;
