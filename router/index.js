const express = require("express");
const Family = require("../controllers/family");
const router = express.Router();

// route family get
router.get("/", Family.get);

// route add form family
router.get("/add-family", Family.create);

// route post family to database
router.post("/add-family", Family.post);

// route edit form family
router.get("/edit-family", Family.edit);

// route update family
router.post("/edit-family", Family.update);

module.exports = router;
