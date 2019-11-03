import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./TabBarItem.module.scss";

const TabBarItem = ({ name, component, setCurrentTab }) => (
  <button className={styles.tabBarItem} onClick={() => setCurrentTab(component)}>
    {name}
  </button>
);

export default TabBarItem;
