import React, { useState } from "react";
import "./Switch.css";

export default ({ offLabel, onLabel, onSwitch }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="switch-container">
      {offLabel}
      <div
        className="switch-button"
        onClick={() => {
          setIsOn(!isOn);
          onSwitch(!isOn);
        }}
      >
        <div className={"switch-knob" + (isOn ? " on" : "")} />
      </div>
      {onLabel}
    </div>
  );
};
