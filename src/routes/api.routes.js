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

module.exports = {
  routes,
};
