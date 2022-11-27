const dataForge = require("data-forge");
require("data-forge-fs");

const df = dataForge.readFileSync("EUR_USD_5.csv").parseCSV();

console.log(df.head(5).toString());
