"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      family.hasMany(models.asset, {
        foreignKey: "family_id",
        as: "assets",
      });
    }
  }
  family.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM(["male", "female"]),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "family",
    }
  );
  return family;
};
