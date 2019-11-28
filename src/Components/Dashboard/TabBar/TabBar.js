import React from "react";
import { channels } from "../../../Utils/channels";
import TabBarItem from "./TabBarItem/TabBarItem";
import ToggleSideBarButton from "../../SideBar/ToggleSideBarButton/ToggleSideBarButton";
import styles from "./TabBar.module.scss";
const TabBar = ({ setCurrentTab, currentTab, homepage }) => (
  <header className={styles.tabBar}>
    <nav>
      {channels.map(channel => (
        <TabBarItem
          key={channel.name}
          {...channel}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          homepage={homepage}
        />
      ))}
    </nav>
    <ToggleSideBarButton />
  </header>
);

export default TabBar;
