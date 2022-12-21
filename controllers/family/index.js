const Model = require("./../../models");
const validate = require("./../../helpers/validation");

const Family = {
  get: async (req, res) => {
    try {
      console.log(req.flash("message")[0]);
      return res.render("pages/family/index", {
        data: await Family.data(),
        message: req.flash("message")[0],
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
        .then(async (result) => {
          req.flash("message", "success!!");
          return res.redirect("/");
        });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      return res.render("pages/family/create");
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const query = req.query;
      const id = query.id;
      const check = await Model.family.findOne({
        where: {
          id: id,
        },
      });

      if (!check) {
        return res.render("pages/abort/404");
      }
      return res.render("pages/family/edit", {
        family: check,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const body = req.body;
      const check = await Model.family.findOne({
        where: {
          id: body.id,
        },
      });

      if (!check) {
        return res.render("pages/abort/404");
      }

      await check
        .update({
          name: body.name,
          gender: body.gender,
        })
        .then(async (result) => {
          req.flash("message", "success!!");
          return res.redirect("/");
        });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  data: async () => {
    return await Model.family.findAll().then((result) => {
      return result;
    });
  },
};

module.exports = Family;
