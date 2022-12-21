// initialize package
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
const flash = require("connect-flash");
const session = require("express-session");
// use dotenv to use file .env
require("dotenv").config();

// confif express sessioon
app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
  })
);
// get variabel port from environment
const PORT = process.env.PORT || 3000;

// use flash
app.use(flash());
// use body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set view engine to ejs
app.set("view engine", "ejs");

app.use(router);

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
