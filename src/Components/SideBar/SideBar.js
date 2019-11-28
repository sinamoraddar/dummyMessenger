import React, { useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import Avatar from "./Avatar/Avatar";
import SideBarItem from "./SideBarItem/SideBarItem";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/settings": {
        setCurrentPage("Settings");

        break;
      }
      case "/calls": {
        setCurrentPage("Calls");

        break;
      }

      default: {
        setCurrentPage("Home");

        break;
      }
    }
  }, []);

  return (
    <AppContext.Consumer>
      {({ currentView, setCurrentView, homepage }) => (
        <aside
          className={`${styles.sideBar} ${isOpen && styles.isOpen} ${
            currentView === "sideBar"
              ? styles.isCurrentView
              : styles.isNotCurrentView
          }`}
        >
          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <React.Fragment>&#215;</React.Fragment>
            ) : (
              <React.Fragment>&#9776;</React.Fragment>
            )}
          </button>
          <Avatar />
          <SideBarItem
            path={homepage}
            icon="house"
            name="Home"
            isOpen={isOpen}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrentView={setCurrentView}
          />
          <SideBarItem
            path={homepage + "settings"}
            icon="settings"
            name="Settings"
            isOpen={isOpen}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrentView={setCurrentView}
          />
          <SideBarItem
            path={homepage + "calls"}
            icon="phone-call"
            name="Calls"
            isOpen={isOpen}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrentView={setCurrentView}
          />
        </aside>
      )}
    </AppContext.Consumer>
  );
};

export default SideBar;
