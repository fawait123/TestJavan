// initialize package
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const validate = require("./helpers/validation");
const router = require("./router");
// use dotenv to use file .env
require("dotenv").config();

// get variabel port from environment
const PORT = process.env.PORT || 3000;

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set view engine to ejs
app.set("view engine", "ejs");

app.use(router);

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
