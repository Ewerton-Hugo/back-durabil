const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");
const {Users} = require("./users")

class PrediosUsers extends Model {}

PrediosUsers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    predio_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "predios_users",
    timestamps: false,
  }
);
PrediosUsers.belongsTo(Users, {
    foreignKey: "user_id",
    as: "users",
    targetKey: "id",
  });
// Exportar o modelo para uso em outros lugares
module.exports = {
  PrediosUsers,
};