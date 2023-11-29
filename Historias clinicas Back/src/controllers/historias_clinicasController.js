// historiasController.js
const HistoriasDAO = require('../daos/historias_clinicasDAO');
const HistoriasDTO = require('../dtos/historias_clinicasDTO');

class HistoriasController {
  static async getAllHistorias(req, res) {
    try {
      const historias = await HistoriasDAO.getAllHistorias();
      const historiasDTO = historias.map(it => new HistoriasDTO(it.id_historia_clinica,it.id_paciente,it.fecha_creacion,it.motivo_consulta,it.antecedentes_personales,
        it.antecedentes_familiares,it.examen_fisico,it.diagnostico,it.tratamiento,it.observaciones));
      res.json(historiasDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = HistoriasController;
