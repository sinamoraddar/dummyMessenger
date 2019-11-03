import React, { Fragment, useState, useEffect } from "react";
import TabBar from "../Dashboard/TabBar/TabBar";

const DashBoard = () => {
  const [currentTab, setCurrentTab] = useState("ChannelOne");
  return (
    <Fragment>
      <TabBar setCurrentTab={setCurrentTab} />
      {currentTab}
    </Fragment>
  );
};

export default DashBoard;
