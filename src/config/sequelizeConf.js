
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true', // Converta a string 'true' para um valor booleano
  },
});

module.exports = { sequelize, Sequelize };
