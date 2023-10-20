const express = require("express");
const { ApiController } = require("../controller/ApiController");

const routes = express.Router();
const apiController = new ApiController();
routes.get("/PrediosAmbiente", async (req, res) => {
  await apiController.getAllPrediosAmbiente(req, res); // Adicione os parênteses para chamar a função
});

routes.get("/PrediosAmbiente/:id", async (req, res) => {
  apiController.getPrediosAmbienteById(req, res);
});

routes.post("/PrediosAmbiente", async (req, res) => {
  await apiController.createPrediosAmbiente(req, res);
});

routes.put("/PrediosAmbiente/:id", async (req, res) => {
  await apiController.updatePrediosAmbienteById(req, res);
});

routes.put("/PrediosAmbiente/excluir/:id", async (req, res) => {
  await apiController.deletePrediosAmbienteById(req, res);
});

//PA

routes.get("/PrediosAreas", async (req, res) => {
  apiController.getPredioAreas(req, res);
});

//TV

routes.get("/TabValores", async (req, res) => {
  apiController.getTabValores(req, res);
});

routes.post('/iot_medicoes/:data', async (req, res) => {

  apiController.iotMedicoes(req, res)
})


routes.post('/atividadesPredio/', async (req, res) => {

  apiController.atividadesPredio(req, res)
})
//********************************** */

//P.Equipamentos
routes.get("/PrediosEquipamentos", async (req, res) => {
  apiController.getPredioFerramentas(req, res);
});

routes.get("/PrediosEquipamentos/:id", async (req, res) => {
  apiController.getPrediosFerramentasById(req, res);
});

routes.post("/PrediosEquipamentos", async (req, res) => {
  await apiController.createPrediosFerramentas(req, res);
});

routes.put("/PrediosEquipamentos/:id", async (req, res) => {
  await apiController.updatePrediosFerramentasById(req, res);
});

routes.put("/PrediosEquipamentos/excluir/:id", async (req, res) => {
  await apiController.deletePrediosFerramentasById(req, res);
});

//PE-reqs
routes.get("/PrediosEquipamentosAmb", async (req, res) => {
  apiController.getPredioFerramentasAmbiente(req, res);
});

routes.get("/PrediosEquipamentosMod", async (req, res) => {
  apiController.getPredioFerramentasModelo(req, res);
});

routes.get("/PrediosEquipamentosUser", async (req, res) => {
  apiController.getPredioFerramentasUser(req, res);
});

module.exports = {
  routes,
};
