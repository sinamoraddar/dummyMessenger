import React from "react";
import { Route } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import TabBar from "../Dashboard/TabBar/TabBar";
import Messenger from "../Dashboard/Messenger/Messenger";
import Welcome from "../Dashboard/Welcome/Welcome";
import ChannelOne from "../Dashboard/ChannelOne/ChannelOne";
import ChannelThree from "../Dashboard/ChannelThree/ChannelThree";
import AppContext from "../App/AppContext";

const DashBoard = props => {
  return (
    <AppContext.Consumer>
      {({ currentView, setCurrentView, homepage }) => {
        return (
          <main
            className={`${styles.dashboard} ${
              currentView === "Home"
                ? styles.isCurrentView
                : styles.isNotCurrentView
            }`}
          >
            {/* <h1>{context.testMessage}</h1> */}
            <TabBar homepage={homepage} />
            {/* <SideBar /> */}
            {/* we add the key prop to let react router differentiate 
          between different renders of the same component 
          on different routes
        */}

            <Route path={homepage} exact component={Welcome} />
            <Route path={homepage + "messenger"} exact component={Messenger} />
            <Route path={homepage + "channel1"} exact component={ChannelOne} />
            <Route
              path={homepage + "channel3"}
              exact
              component={ChannelThree}
            />
          </main>
        );
      }}
    </AppContext.Consumer>
  );
};

export default DashBoard;
