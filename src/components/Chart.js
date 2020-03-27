import React, { useState } from "react";
import "./Chart.css";
import Switch from "./Switch";

export const DisplayMode = {
  INCREMENTAL: "incremental",
  CUMULATIVE: "cumulative",
};

function getColors(num, displayMode) {
  let r, g, b;
  if (displayMode === DisplayMode.INCREMENTAL) {
    if (num === 0) {
      r = b = 150;
      g = 255;
    } else if (num <= 100) {
      r = b = 200 + Math.round(Math.round(num / 10) * 3);
      g = 255 - Math.round(Math.round(num / 10) * 2.5);
    } else {
      r = g = b = 230 - Math.round(Math.round(Math.min(3000, num) / 100) * 15);
    }
  } else {
    r = g = b = 240 - Math.min(100000, num) / 240;
  }

  const textColor = (r + r + b + g + g + g) / 6 > 130 ? "#222" : "#fff";
  return [`rgb(${r},${g},${b})`, textColor];
}

const NumberDisplay = ({ number, displayMode }) => {
  const num = Math.max(number, 0);
  const [bgColor, textColor] = getColors(num, displayMode);
  return (
    <div
      className="number-display"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {displayMode === DisplayMode.INCREMENTAL ? "+" : ""}
      {num}
    </div>
  );
};

const CaseNumberRow = ({ row, displayMode }) => (
  <div className="case-number-row">
    {row.map((num, i) => (
      <NumberDisplay number={num} key={i} displayMode={displayMode} />
    ))}
  </div>
);

const Country = ({ dates, data, displayMode }) => (
  <div className="row">
    <div className="row-country-header">{dates}</div>
    <CaseNumberRow row={data} displayMode={displayMode} />
  </div>
);

const HeaderRow = ({ dates }) => (
  <div className="row header-row">
    <div className="row-country-header"></div>
    <div className="case-number-row date-row">
      {dates.map((date, i) => (
        <div className="number-display" key={i}>
          {date.slice(0, -3)}
        </div>
      ))}
    </div>
  </div>
);

export default ({ data, dates }) => {
  const [displayMode, setDisplayMode] = useState(DisplayMode.INCREMENTAL);
  return (
    <div className="chart-container">
      <Switch
        offLabel="Incremental"
        onLabel="Cumulative"
        onSwitch={isOn =>
          setDisplayMode(
            isOn ? DisplayMode.CUMULATIVE : DisplayMode.INCREMENTAL
          )
        }
      />
      <HeaderRow dates={dates} />
      {data.map((row, i) => (
        <Country
          dates={row[0]}
          data={displayMode === DisplayMode.INCREMENTAL ? row[2] : row[1]}
          key={i}
          displayMode={displayMode}
        />
      ))}
    </div>
  );
};
