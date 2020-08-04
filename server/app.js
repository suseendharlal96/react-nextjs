const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const productRoute = require("./api/routes/products");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});
app.use("/vehicles", productRoute);

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: error.message,
  });
});

module.exports = app;
