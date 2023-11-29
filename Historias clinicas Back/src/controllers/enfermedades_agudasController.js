// usuariosController.js
const EnfermedadesAgudasDAO = require('../daos/enfermedades_agudasDAO');
const EnfermedadesAgudasDTO = require('../dtos/enfermedades_agudasDTO');

class EnfermedadesAgudasController {
  static async getAllEnfermedadesAgudas(req, res) {
    try {
      const enfermedadesAgudas = await EnfermedadesAgudasDAO.getAllEnfermedadesAgudas();
      const enfermedadesAgudasDTO = enfermedadesAgudas.map(it => new EnfermedadesAgudasDTO(it.id_enfermedad_a,it.id_paciente,it.nombre_enfermedad,it.descripcion_enfermedad,it.fecha_diagnostico));
      res.json(enfermedadesAgudasDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = EnfermedadesAgudasController;
