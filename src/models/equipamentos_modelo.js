const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");
// Defina o modelo PredioEquipamento
class EquipamentosModelo extends Model {}
EquipamentosModelo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  predio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "predios", // Substitua 'predios' pelo nome da tabela referenciada
      key: "id",
    },
  },
  equipamento_tipo_id: {
    type: DataTypes.INTEGER,
  },
  codigo: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
 }, {
    sequelize,
    modelName: 'equipamentos_modelo',
    timestamps: false, 
});

// Exporte o modelo PredioEquipamento
module.exports = {EquipamentosModelo};