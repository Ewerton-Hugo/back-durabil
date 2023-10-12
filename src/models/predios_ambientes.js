const { DataTypes,Model } = require('sequelize');
const { sequelize } = require('../config/sequelizeConf'); 
const { PrediosAreas } = require('./predios_areas');
const { TabelasValores } = require('./tabelas_valores');

class PrediosAmbientes extends Model {}
PrediosAmbientes.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    predio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'predios', // Substitua 'predios' pelo nome da tabela de referência
        key: 'id',
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    excluido: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    user_created: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Substitua 'users' pelo nome da tabela de referência
        key: 'id',
      },
    },
    user_exclusao: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // Substitua 'users' pelo nome da tabela de referência
        key: 'id',
      },
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tabvalores_tipo_ambiente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tabelas_valores', // Substitua 'tabelas_valores' pelo nome da tabela de referência
        key: 'id',
      },
    },
    revisao_pendente: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    user_alteracao: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // Substitua 'users' pelo nome da tabela de referência
        key: 'id',
      },
    },
    predio_area_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'predios_areas', // Substitua 'predios_areas' pelo nome da tabela de referência
        key: 'id',
      },
    },
    externo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    numero_ocupantes: {
      type: DataTypes.INTEGER,
    },
    area: {
      type: DataTypes.NUMERIC(12, 2),
    },
  }, {
    sequelize,
    modelName: 'predios_ambientes',
    timestamps: false,
  });
  PrediosAmbientes.belongsTo(PrediosAreas, {
    foreignKey: "predio_area_id",
    as: "predios_areas",
    targetKey: "id",
  });
  PrediosAmbientes.belongsTo(TabelasValores, {
    foreignKey: 'tabvalores_tipo_ambiente_id',
    as: 'tabelas_valores',
    targetKey: 'id',
  });
module.exports = {
    PrediosAmbientes
};
