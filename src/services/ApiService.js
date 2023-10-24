const { PrediosAmbientes } = require("../models/predios_ambientes");
const { PrediosAreas } = require("../models/predios_areas");
const { TabelasValores } = require("../models/tabelas_valores");
const { PrediosEquipamentos } = require("../models/predios_equipamentos");
const { EquipamentosModelo } = require("../models/equipamentos_modelo");
const { PrediosUsers } = require("../models/predios_users");
const { Users } = require("../models/users");
const { sequelize } = require("../config/sequelizeConf")

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

    //PE
    async getAllPrediosFerramentas(req, res) {
      try {
        const prediosEquipamento = await PrediosEquipamentos.findAll({
          where: {
            predio_id: 2
          },
          include: [
            {
              model: PrediosAmbientes,
              as: "predios_ambientes", // Alias do modelo de PrediosAreas
            },
            {
              model: EquipamentosModelo,
              as: "equipamentos_modelo", // Alias do modelo de TabelasValores
            },
          ],
        });
        if (!prediosEquipamento || prediosEquipamento.length === 0) {
          return res.status(404).json({ message: "Nenhum usuário encontrado" });
        }
        return res.status(200).json(prediosEquipamento); // Envie a resposta aqui
      } catch (error) {
        console.error("Erro em getAllUsers:", error);
        res.status(500).json({ error: error.message });
      }
    }
    async getPrediosEquipamentosById(id, req, res) {
      try {
        const prediosEquipamento = await PrediosEquipamentos.findByPk(id, {
          include: ["predios_ambientes", "equipamentos_modelo","users"],
        });
        if (prediosEquipamento) {
          res.status(200).json(prediosEquipamento);
        } else {
          res.status(404).json({ message: "Usuário não encontrado" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createPrediosEquipamento(data, req, res) {
      try {
        data.predio_id = 2
        data.token= "dasdasda" 
        return await PrediosEquipamentos.create(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updatePrediosEquipamentosById(id, newData, req, res) {
      try {
        const prediosEquipamento = await PrediosEquipamentos.findByPk(id);
        if (!prediosEquipamento) {
          throw new Error("Usuário não encontrado");
        }
        await prediosEquipamento.update(newData);
        res.status(200).json(prediosEquipamento);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deletePrediosEquipamentosById(id,excluido) {
      try {
        const prediosEquipamento = await PrediosEquipamentos.findByPk(id);
        if (!prediosEquipamento) {
          throw new Error("PredioAmbiente não encontrado");
        }
    
        // Atualize o campo 'excluido' com o valor fornecido
        prediosEquipamento.excluido = excluido;
        await prediosEquipamento.save();
    
        // Retorna a instância atualizada
        return prediosEquipamento;
      } catch (error) {
        throw error;
      }
    }
  
    //PE-reqs
    async getPredioAmb(req, res) {
      try {
        const prediosAmbiente = await PrediosAmbientes.findAll({
          where: {
            predio_id: 2
          },
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
    async getPredioMod(req, res) {
      try {
        const prediosAmbiente = await EquipamentosModelo.findAll({
          where: {
            predio_id: 2
          },
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
    async getPredioUser(req, res) {
      try {
        const prediosEquipamentos = await PrediosUsers.findAll({
          include:{
            model:Users,
            as:"users",
          },
          where: {
            predio_id: 2
          },
        });
        if (!prediosEquipamentos || prediosEquipamentos.length === 0) {
          return res.status(404).json({ message: "Nenhum usuário encontrado" });
        }
        return res.status(200).json(prediosEquipamentos); // Envie a resposta aqui
      } catch (error) {
        console.error("Erro em getAllUsers:", error);
        res.status(500).json({ error: error.message });
      }
    }
  

  async iotMedicoes(req, res, data) {
    try {
      console.log("Chamando a função PostgreSQL func_iot_recebe");
  
      // Chame a função PostgreSQL func_iot_recebe
      const query = 'SELECT func_iot_recebe(:data) as result';
      const [results, metadata] = await sequelize.query(query, {
        replacements: { data },
        type: sequelize.QueryTypes.SELECT,
      });
  
      // O resultado da função estará em results[0].result
      const result = results;
  
      // Você pode fazer o que for necessário com o resultado aqui
      console.log('Resultado da função:', result);
  
      res.json({ message: 'Medições recebidas com sucesso', result });
    } catch (error) {
      console.error('Erro ao chamar a função PostgreSQL:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async atividadesPredio(req, res, jsonData) {
    try {
      const result = await sequelize.query(`
        SELECT public.func_json_atividades_predio_v1('${JSON.stringify(jsonData)}') AS result;
      `, {
        type: sequelize.QueryTypes.SELECT
      });
  
      res.json(result[0].result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao executar a função func_json_atividades_predio_v1' });
    }
  };
  
  
  
  
}

module.exports = {
  ApiService,
};
