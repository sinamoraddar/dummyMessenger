import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./TabBarItem.module.scss";

const TabBarItem = ({ name, component, path, setCurrentTab, currentTab }) => (
  <Link
    to={path}
    exact
    onClick={()=>setCurrentTab(component)}
    className={`${styles.tabBarItem} ${currentTab === component &&
      styles.isCurrentTab}`}
  >
    {name}
  </Link>
);

export default TabBarItem;
