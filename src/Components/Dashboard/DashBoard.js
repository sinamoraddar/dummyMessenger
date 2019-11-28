import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import TabBar from "../Dashboard/TabBar/TabBar";
import Messenger from "../Dashboard/Messenger/Messenger";
import Welcome from "../Dashboard/Welcome/Welcome";
import SideBar from "../SideBar/SideBar";
import ChannelOne from "../Dashboard/ChannelOne/ChannelOne";
import ChannelThree from "../Dashboard/ChannelThree/ChannelThree";
import AppContext from "../App/AppContext";
import { database } from "../../firebase/firebase";

const DashBoard = props => {
  const [databaseTest, setDataBaseTest] = useState(null);
  useEffect(() => {
    database
      .collection("users")
      .get()
      .then(querySnapshot => {
        let tempDataBase = [];
        querySnapshot.forEach(doc => {
          // console.log(doc.data());
          tempDataBase.push(doc.data());
        });
        console.log("tempDatabase", tempDataBase);
        setDataBaseTest(tempDataBase);
      });
  }, []);
  console.log(props.match);
  // const [currentTab, setCurrentTab] = useState("ChannelOne");
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
