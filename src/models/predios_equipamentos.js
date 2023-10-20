const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");
const {PrediosAmbientes} = require("./predios_ambientes");
const { EquipamentosModelo } = require("./equipamentos_modelo");
const { Users } = require("./users");
// Defina o modelo PredioEquipamento
class PrediosEquipamentos extends Model {}
PrediosEquipamentos.init({
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
  predio_ambiente_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "predios_ambientes", // Substitua 'predios_ambientes' pelo nome da tabela referenciada
      key: "id",
    },
  },
  modelo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "equipamentos_modelos", // Substitua 'equipamentos_modelos' pelo nome da tabela referenciada
      key: "id",
    },
  },
  codigo: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  data_operacao: {
    type: DataTypes.DATE,
  },
  excluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  token: {
    type: DataTypes.STRING,
  },
  vlr_compra: {
    type: DataTypes.DECIMAL(12, 2),
  },
  patrimonio: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  numero_serie: {
    type: DataTypes.STRING,
  },
  ano_fabricacao: {
    type: DataTypes.INTEGER,
  },
  potencia: {
    type: DataTypes.DECIMAL(12, 2),
  },
  parado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  plano_gerado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  user_gestor: {
    type: DataTypes.INTEGER,
    references: {
      model: "users", // Substitua 'users' pelo nome da tabela de usuários referenciada
      key: "id",
    },
  },
 }, {
    sequelize,
    modelName: 'predios_equipamentos',
    timestamps: false, 
});
PrediosEquipamentos.belongsTo(PrediosAmbientes, {
  foreignKey: "predio_ambiente_id",
  as: "predios_ambientes",
  targetKey: "id",
});
PrediosEquipamentos.belongsTo(Users, {
  foreignKey: "user_gestor",
  as: "users",
  targetKey: "id",
});
PrediosEquipamentos.belongsTo(EquipamentosModelo, {
  foreignKey: "modelo_id",
  as: "equipamentos_modelo",
  targetKey: "id",
});
// Exporte o modelo PredioEquipamento
module.exports = {PrediosEquipamentos};