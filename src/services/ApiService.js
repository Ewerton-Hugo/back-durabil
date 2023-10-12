const { PrediosAmbientes } = require("../models/predios_ambientes");
const { PrediosAreas } = require("../models/predios_areas");
const { TabelasValores } = require("../models/tabelas_valores");
const yup = require('yup');
class ApiService {
  constructor() {
    this.predios_ambientes = PrediosAmbientes;
    this.predios_areas = PrediosAreas;
    this.tabela_valores = TabelasValores
  }

  async create(data, req, res) {
    try {
      data.user_created = 2
      data.predio_id = 2
      data.token= "dasdasda" 
      return await PrediosAmbientes.create(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPrediosAmbiente(req, res) {
    console.log("#############################");
    try {
      const prediosAmbiente = await this.predios_ambientes.findAll({
        where: {
          predio_id: 2
        },
        include: [
          {
            model: PrediosAreas,
            as: "predios_areas", // Alias do modelo de PrediosAreas
          },
          {
            model: TabelasValores,
            as: "tabelas_valores", // Alias do modelo de TabelasValores
          },
        ],
      });
      if (!prediosAmbiente || prediosAmbiente.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
      }
      return res.status(200).json(prediosAmbiente); // Envie a resposta aqui
    } catch (error) {
      console.error("Erro em getAllUsers:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async getPrediosAmbienteById(id, req, res) {
    try {
      const prediosAmbiente = await PrediosAmbientes.findByPk(id, {
        include: ["predios_areas", "tabelas_valores"],
      });
      if (prediosAmbiente) {
        res.status(200).json(prediosAmbiente);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePrediosAmbienteById(id, newData, req, res) {
    try {
      const prediosAmbiente = await this.predios_ambientes.findByPk(id);
      if (!prediosAmbiente) {
        throw new Error("Usuário não encontrado");
      }
      await prediosAmbiente.update(newData);
      res.status(200).json(prediosAmbiente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePrediosAmbienteById(id,excluido) {
    try {
      const prediosAmbiente = await this.predios_ambientes.findByPk(id);
      if (!prediosAmbiente) {
        throw new Error("PredioAmbiente não encontrado");
      }
  
      // Atualize o campo 'excluido' com o valor fornecido
      prediosAmbiente.excluido = excluido;
      await prediosAmbiente.save();
  
      // Retorna a instância atualizada
      return prediosAmbiente;
    } catch (error) {
      throw error;
    }
  }

  //PA

  async getPredioAreas(req, res) {
    try {
      const predioAreas = await PrediosAreas.findAll({
        where: {
          predio_id: 2
        }
      });
  
      if (!predioAreas || predioAreas.length === 0) {
        return res.status(404).json({ message: "Nenhum registro encontrado" });
      }
  
      return res.status(200).json(predioAreas);
    } catch (error) {
      console.error("Erro ao buscar registros de predio_areas:", error);
      res.status(500).json({ error: error.message });
    }
  }

  //TV

  async getTabValores(req, res) {
    try {
      const tabValores = await TabelasValores.findAll({
        where: {
          tabela_id: 1
        }
      });
  
      if (!tabValores || tabValores.length === 0) {
        return res.status(404).json({ message: "Nenhum registro encontrado" });
      }
  
      return res.status(200).json(tabValores);
    } catch (error) {
      console.error("Erro ao buscar registros de predio_areas:", error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = {
  ApiService,
};
