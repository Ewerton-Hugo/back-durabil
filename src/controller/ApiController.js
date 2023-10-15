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

    async iotMedicoes(req, res){
        const data = req.params.data;
        await this.apiService.iotMedicoes(req,res,data)
    }
}

module.exports = {
    ApiController
  };
