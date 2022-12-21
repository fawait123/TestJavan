const Model = require("./../../models");
const validate = require("./../../helpers/validation");

const Family = {
  get: async (req, res) => {
    try {
      await Model.family.findAll().then((result) => {
        return res.render("pages/family/index", {
          data: result,
        });
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  post: async (req, res) => {
    try {
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

      await Model.family
        .create({
          name: body.name,
          gender: body.gender,
        })
        .then((result) => {
          return res.render("pages/family/index", {
            message: "Add data family successfully",
          });
        });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  form: async (req, res) => {
    try {
      return res.render("pages/family/form");
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};

module.exports = Family;
