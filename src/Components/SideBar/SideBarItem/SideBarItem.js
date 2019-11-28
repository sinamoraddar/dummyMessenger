import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarItem.module.scss";

const SideBarItem = ({
  icon,
  path,
  name,
  isOpen,
  currentPage,
  setCurrentPage,
  setCurrentView
}) => {
  return (
    <Link
      to={path}
      onClick={() => {
        setCurrentPage(name);
        setCurrentView(name);
      }}
      className={`${styles.sideBarItem} ${currentPage === name &&
        (isOpen ? styles.isCurrentPage__opened : styles.isCurrentPage__closed)}
        ${isOpen && styles.isOpen}
        `}
    >
      {isOpen && name}
      <span
        className={`${styles.icon}
        ${isOpen ? styles.icon__opened : styles.icon__closed}`}
        style={{
          background: ` url(./assets/icons/${icon}${
            currentPage === name && isOpen ? `-violet` : ""
          }.svg)`
        }}
      ></span>
    </Link>
  );
};

export default SideBarItem;
