// prescripcionesController.js
const PrescripcionesDAO = require('../daos/prescripcionesDAO');
const PrescripcionesDTO = require('../dtos/prescripcionesDTO');

class UsuariosController {
  static async getAllPrescripciones(req, res) {
    try {
      const prescripciones = await PrescripcionesDAO.getAllPrescripciones();
      const prescripcionesDTO = prescripciones.map(prescripcion => new PrescripcionesDTO(prescripcion.id_prescripcion, prescripcion.id_paciente, prescripcion.id_medicamento, prescripcion.fecha_prescripcion, prescripcion.dosis, prescripcion.duracion));
      res.json(prescripcionesDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = UsuariosController;
