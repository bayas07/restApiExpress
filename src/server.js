const express = require("express");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();
const ENV = process.env;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(ENV.PORT, () => {
  console.log("App is running on port - ", ENV.port);
});
