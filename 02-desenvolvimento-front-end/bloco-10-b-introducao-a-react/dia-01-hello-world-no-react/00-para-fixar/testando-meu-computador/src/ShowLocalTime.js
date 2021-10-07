import React from "react";

class ShowLocalTime extends React.Component {
  render() {
    return <h2>It is {new Date().toLocaleTimeString()}.</h2>;
  };
};

export default ShowLocalTime;