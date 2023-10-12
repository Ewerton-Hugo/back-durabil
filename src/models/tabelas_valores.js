const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");

class TabelasValores extends Model {}

TabelasValores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tabela_id: {
      type: DataTypes.INTEGER,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    excluido: {
      type: DataTypes.BOOLEAN,
    },
    created: {
      type: DataTypes.DATE,
    },
    token: {
      type: DataTypes.TEXT,
    },
    url_imagem: {
      type: DataTypes.TEXT,
    },
    detalhe: {
      type: DataTypes.TEXT,
    },
    ordem: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "tabelas_valores",
    timestamps: false,
  }
);


// Exportar o modelo para uso em outros lugares
module.exports = {
  TabelasValores,
};
