
// Importe os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/sequelizeConf'); // Importe o objeto sequelize do arquivo models.js
const {routes} = require('./routes/api.routes')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use as rotas importadas
app.use(routes);



// Inicialize a conexão com o banco de dados e comece o servidor
sequelize
  .sync() // Sincronize os modelos com o banco de dados
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
