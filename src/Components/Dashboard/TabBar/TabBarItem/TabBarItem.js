import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./TabBarItem.module.scss";

const TabBarItem = ({ name, path }) => {
  return (
    <Link
      to={path}
      exact
      onClick={() => {}}
      className={`${styles.tabBarItem} 
      /* set the active styles for the tab if its path */
      ${window.location.pathname === path &&
        styles.isCurrentTab}`}
    >
      {name}
    </Link>
  );
};

export default TabBarItem;
