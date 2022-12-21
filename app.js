// initialize package
const express = require("express");
const app = express();
// use dotenv to use file .env
require("dotenv").config();

// get variabel port from environment
const PORT = process.env.PORT || 3000;

// set view engine to ejs
app.set("view engine", "ejs");

// route root
app.get("/", (req, res) => {
  return res.render("pages/home/index");
});

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
