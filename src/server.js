const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const { connectToDB } = require("../config/db");
const usersModel = require("../models/usersModel");
const usersRouter = require("./routes/users");

dotEnv.config();

const app = express();
const ENV = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouter);

connectToDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(ENV.PORT, () => {
  console.log("App is running on port - ", ENV.port);
});
