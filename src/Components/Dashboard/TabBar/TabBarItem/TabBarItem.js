import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./TabBarItem.module.scss";

const TabBarItem = ({ name, component, path, setCurrentTab }) => (
  <Link to={path} exact className={styles.tabBarItem}>
    {name}
  </Link>
);

export default TabBarItem;
