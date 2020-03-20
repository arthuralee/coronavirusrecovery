const request = require("bent")();
const parser = require("csv-parse")();
const fs = require("fs");

const DATA_URL =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";

function getInc(last15) {
  const result = [];
  for (let i = 1; i < last15.length; i++) {
    result.push(last15[i] - last15[i - 1]);
  }
  return result;
}

function processData(data) {
  const countries = {};
  data.slice(1).forEach(row => {
    const country = row[1];
    const last15 = row.slice(-15).map(str => parseInt(str));
    if (!countries[country]) {
      countries[country] = new Array(15).fill(0);
    }
    countries[country] = countries[country].map((num, i) => num + last15[i]);
  });
  return Object.keys(countries)
    .filter(country => country != "Cruise Ship")
    .map(country => [
      country,
      countries[country].slice(-14),
      getInc(countries[country]),
    ])
    .sort((a, b) => b[1][b[1].length - 1] - a[1][a[1].length - 1]);
}

async function getData() {
  return new Promise(async (resolve, reject) => {
    const data = [];
    parser.on("readable", () => {
      let row;
      while ((row = parser.read())) {
        data.push(row);
      }
    });
    parser.on("error", err => reject(err.message));
    parser.on("end", () => {
      resolve(data);
    });

    const stream = await request(DATA_URL);
    stream.pipe(parser);
  });
}

getData().then(result => {
  fs.writeFileSync("./src/data.json", JSON.stringify(processData(result)));
});
