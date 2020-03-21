import React from "react";
import data from "../data.json";
import dates from "../dates.json";

import "./reset.css";
import "./index.css";

import Head from "../components/Head";
import Chart from "../components/Chart";

const IndexPage = () => (
  <>
    <Head />
    <div className="container">
      <h1>Coronavirus Recovery</h1>
      <p>
        The chart below shows the number of incremental cases of COVID-19 in
        each country. It was widely reported that the authorities in Wuhan are
        comfortable with lifting the lockdown if there are no new cases reported
        for 14 consecutive days [
        <a
          href="https://www.reuters.com/article/us-health-coronavirus-china-media/china-daily-says-wuhans-new-coronavirus-cases-could-cease-by-mid-late-march-idUSKBN21608U"
          rel="noopener noreferrer"
          target="_blank
        "
        >
          source
        </a>
        ].
      </p>
      <Chart data={data} dates={dates} />
      <p>
        Data source:{" "}
        <a
          href="https://github.com/CSSEGISandData/COVID-19"
          rel="noopener noreferrer"
          target="_blank"
        >
          JHU CSSE Github
        </a>
      </p>
    </div>
  </>
);

export default IndexPage;
