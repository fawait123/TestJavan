const express = require("express");
const router = express.Router();

// route root
router.get("/", (req, res) => {
  return res.render("pages/family/index");
});

// route add family
router.get("/add-family", (req, res) => {
  return res.render("pages/family/form");
});

// route post family to database
router.post("/add-family", (req, res) => {
  const body = req.body;

  // validate request
  const validation = validate(body);
  // check validation error
  if (validation.length > 0) {
    return res.render("pages/family/form", {
      errors: validation,
      old: body,
    });
  }

  return res.send({ validation });
});

module.exports = router;
