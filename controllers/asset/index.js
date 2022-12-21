const Model = require("./../../models");
const validate = require("./../../helpers/validation");

const Asset = {
  create: async (req, res) => {
    try {
      return res.render("pages/asset/create", {
        family: await Asset.data(),
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
      console.log(validation);
      // check validation error
      if (validation.length > 0) {
        return res.render("pages/asset/create", {
          errors: validation,
          old: body,
          family: await Asset.data(),
        });
      }

      await Model.asset
        .create({
          family_id: body.family_id,
          name: body.name,
          price: body.price,
        })
        .then(async (result) => {
          req.flash("message", "Add asset successfully");
          return res.redirect("/");
        });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const query = req.query;
      const id = query.id;
      const check = await Model.asset.findOne({
        where: {
          id: id,
        },
      });

      if (!check) {
        return res.render("pages/abort/404");
      }

      return res.render("pages/asset/edit", {
        asset: check,
        family: await Asset.data(),
        id: id,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const body = req.body;
      const check = await Model.asset.findOne({
        where: {
          id: body.id,
        },
      });

      if (!check) {
        return res.render("pages/abort/404");
      }

      const validation = validate(body);
      // check validation error
      if (validation.length > 0) {
        return res.redirect("/edit-asset?id=" + body.id);
      }

      await check
        .update({
          family_id: body.family_id,
          name: body.name,
          price: body.price,
        })
        .then(async (result) => {
          req.flash("message", "Edit asset successfully");
          return res.redirect("/");
        });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const query = req.query;
      const check = await Model.asset.findOne({
        where: {
          id: query.id,
        },
      });

      if (!check) {
        return res.render("pages/abort/404");
      }

      await check.destroy().then((result) => {
        req.flash("message", "Remove asset successfully");
        return res.redirect("/");
      });
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

module.exports = Asset;
