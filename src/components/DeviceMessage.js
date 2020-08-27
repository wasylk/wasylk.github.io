import React from "react";
import logo from "../assets/images/apple.svg";

const DeviceMessage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please open this page on IPhone X
        </p>
      </header>
    </div>
  )
};

export default DeviceMessage;
