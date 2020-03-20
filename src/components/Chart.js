import React from "react";
import "./Chart.css";
import { getText } from "domutils";

function getBackgroundColor(num) {
  if (num === 0) {
    return "rgb(150,255,150)";
  } else if (num <= 100) {
    const rb = 200 + Math.round(Math.round(num / 10) * 3);
    const g = 255 - Math.round(Math.round(num / 10) * 2.5);
    return `rgb(${rb},${g},${rb})`;
  } else {
    const c = 230 - Math.round(Math.round(Math.min(3000, num) / 100) * 15);
    return `rgb(${c},${c},${c})`;
  }
}

function getTextColor(num) {
  if (num > 500) {
    return "#fff";
  } else {
    return "#222";
  }
}

const NumberDisplay = ({ number }) => {
  const num = Math.max(number, 0);
  return (
    <div
      className="number-display"
      style={{
        backgroundColor: getBackgroundColor(num),
        color: getTextColor(num),
      }}
    >
      +{num}
    </div>
  );
};

const CaseNumberRow = ({ incremental, cumulative }) => (
  <div className="case-number-row">
    {incremental.map((num, i) => (
      <NumberDisplay number={num} key={i} />
    ))}
  </div>
);

const Country = ({ rowData }) => (
  <div className="row">
    <div className="row-country-header">{rowData[0]}</div>
    <CaseNumberRow incremental={rowData[2]} cumulative={rowData[1]} />
  </div>
);

export default ({ data }) => (
  <div>
    {data.map((row, i) => (
      <Country rowData={row} key={i} />
    ))}
  </div>
);
