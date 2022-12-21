const express = require("express");
const Asset = require("../controllers/asset");
const Family = require("../controllers/family");
const router = express.Router();

// ================ family routes =============================
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

// remove family
router.get("/remove-family", Family.remove);

//=================== asset routes =============================
// route asset form
router.get("/add-asset", Asset.create);

// route post family to database
router.post("/add-asset", Asset.post);

// route edit form asset
router.get("/edit-asset", Asset.edit);

// route update asset
router.post("/edit-asset", Asset.update);

// remove family
router.get("/remove-asset", Asset.remove);

module.exports = router;
