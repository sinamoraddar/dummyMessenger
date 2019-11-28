import React from "react";
import { Link } from "react-router-dom";
import styles from "./TabBarItem.module.scss";

const TabBarItem = ({ name, path, homepage }) => {
  return (
    <Link
      to={homepage + path}
      onClick={() => {}}
      className={`${styles.tabBarItem} 
      /* set the active styles for the tab if its path */
      ${window.location.pathname === homepage + path && styles.isCurrentTab}`}
    >
      {name}
    </Link>
  );
};

export default TabBarItem;
