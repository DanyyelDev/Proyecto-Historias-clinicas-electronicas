// resultadosLaboratorioController.js
const ResultadosLaboratorioDAO = require('../daos/resultados_laboratorioDAO');
const ResultadosLaboratorioDTO = require('../dtos/resultados_laboratorioDTO');

class ResultadosLaboratorioController {
  static async getAllResultadosLaboratorio(req, res) {
    try {
      const resultados = await ResultadosLaboratorioDAO.getAllResultadosLaboratorio();
      const resultadosLaboratorioDTO = resultados.map(result => new ResultadosLaboratorioDTO(result.id_resultado, result.id_paciente, result.id_laboratorio, result.fecha_resultado, result.resultado));
      res.json(resultadosLaboratorioDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = ResultadosLaboratorioController;
