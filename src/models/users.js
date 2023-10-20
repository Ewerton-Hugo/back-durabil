const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: false,
  }
);

// Exportar o modelo para uso em outros lugares
module.exports = {
  Users,
};