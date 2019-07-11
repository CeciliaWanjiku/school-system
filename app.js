const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./server/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "School system"
  })
);

module.exports = app;
