import React from "react";

const Loading = () => (
  <React.Fragment>
    <img
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto"
      }}
      src="./assets/gifs/loading.svg"
      alt="loading"
    />
  </React.Fragment>
);
export default Loading;
