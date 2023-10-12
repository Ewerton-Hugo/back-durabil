const { DataTypes,Model } = require('sequelize');
const { sequelize } = require('../config/sequelizeConf'); // Importe o objeto sequelize do arquivo models.js

class PrediosAreas extends Model {}
PrediosAreas.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  predio_id: {
    type: DataTypes.INTEGER,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  excluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Valor padrão é falso (não excluído)
  },
  created: {
    type: DataTypes.DATE, // Alterado de TIMESTAMP para DATE
    allowNull: false,
  },
  user_created: {
    type: DataTypes.INTEGER,
  },
  user_exclusao: {
    type: DataTypes.INTEGER,
  },
  user_alteracao: {
    type: DataTypes.INTEGER,
  },
  token: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'predios_areas',
  timestamps: false,
});

module.exports = {
  PrediosAreas
};
