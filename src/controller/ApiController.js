const { ApiService } = require('../services/ApiService')

class ApiController {
    constructor() {
        this.apiService = new ApiService();
    }

    
    async createPrediosAmbiente(req, res) {
        const jsonData = req.body;
        const object = await this.apiService.create( jsonData, req, res );
        return res.json(object);
    }

    async getAllPrediosAmbiente(req, res) {
         await this.apiService.getAllPrediosAmbiente(req,res)
    }

    async getPrediosAmbienteById(req, res) {
        const id = req.params.id;
        await this.apiService.getPrediosAmbienteById(id, req, res)
        
    }

    async updatePrediosAmbienteById(req, res) {
        const id = req.params.id;
        const jsonData = req.body;
        await this.apiService.updatePrediosAmbienteById(id,jsonData, req, res)

    }

    async deletePrediosAmbienteById(req, res) {
        try {
            const id = req.params.id;
            const { excluido } = req.body; // Obtenha o valor 'excluido' do corpo da solicitação
        
            const prediosAmbiente = await this.apiService.deletePrediosAmbienteById(id, excluido);
        
            res.status(200).json(prediosAmbiente);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    //PA

    async getPredioAreas(req, res) {
        await this.apiService.getPredioAreas(req,res)
   }

   //TV

   async getTabValores(req, res) {
    await this.apiService.getTabValores(req,res)
  }


    //PE

    async getPredioFerramentas(req, res) {
        await this.apiService.getAllPrediosFerramentas(req, res);
    }
    async getPrediosFerramentasById(req, res) {
        const id = req.params.id;
        await this.apiService.getPrediosEquipamentosById(id, req, res);
    }

    async createPrediosFerramentas(req, res) {
        const jsonData = req.body;
        const object = await this.apiService.createPrediosEquipamento(jsonData, req, res);
        return res.json(object);
    }

    async updatePrediosFerramentasById(req, res) {
        const id = req.params.id;
        const jsonData = req.body;
        await this.apiService.updatePrediosEquipamentosById(id, jsonData, req, res);
    }

    async deletePrediosFerramentasById(req, res) {
        try {
        const id = req.params.id;
        const { excluido } = req.body; // Obtenha o valor 'excluido' do corpo da solicitação

        const prediosEquipamentos = await this.apiService.deletePrediosEquipamentosById(
            id,
            excluido
        );

        res.status(200).json(prediosEquipamentos);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }
    async getPredioFerramentasAmbiente(req, res) {
        await this.apiService.getPredioAmb(req, res);
    }

    async getPredioFerramentasModelo(req, res) {
        await this.apiService.getPredioMod(req, res);
    }

    async getPredioFerramentasUser(req, res) {
        await this.apiService.getPredioUser(req, res);
    }


    async iotMedicoes(req, res){
        const data = req.params.data;
        await this.apiService.iotMedicoes(req,res,data)
    }
    
    async atividadesPredio(req, res){
        const jsonData = req.body;
        await this.apiService.atividadesPredio(req,res,jsonData)
    }

    
}

module.exports = {
    ApiController
  };
