import React, { useState } from "react";
import "./Switch.css";

export default ({ offLabel, onLabel, onSwitch }) => {
  const [isOn, setIsOn] = useState(false);
  function toggle() {
    setIsOn(!isOn);
    onSwitch(!isOn);
  }
  return (
    <div className="switch-container">
      {offLabel}
      <div
        className="switch-button"
        role="button"
        tabIndex={0}
        onClick={() => toggle()}
        onKeyDown={e => {
          if (e.keyCode === 32) {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className={"switch-knob" + (isOn ? " on" : "")} />
      </div>
      {onLabel}
    </div>
  );
};
