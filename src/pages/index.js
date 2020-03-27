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
      <h1>Is COVID-19 over yet?</h1>
      <div className="column-wrapper">
        <div>
          <p>
            The chart below shows the number of new cases of COVID-19 in each
            country over the last 14 days. Authorities in Wuhan stated they will
            begin gradually lifting the lockdown once there are no new cases
            reported for 14 consecutive days [
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
        </div>
        <div className="right">
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
          <p>
            We're open source on{" "}
            <a
              href="https://github.com/arthuralee/coronavirusrecovery"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </a>
            !
          </p>
        </div>
      </div>
      <Chart data={data} dates={dates} />
    </div>
  </>
);

export default IndexPage;
