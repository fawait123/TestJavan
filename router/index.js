const express = require("express");
const Family = require("../controllers/family");
const router = express.Router();

// route family get
router.get("/", Family.get);

// route add family
router.get("/add-family", Family.form);

// route post family to database
router.post("/add-family", Family.post);

module.exports = router;
