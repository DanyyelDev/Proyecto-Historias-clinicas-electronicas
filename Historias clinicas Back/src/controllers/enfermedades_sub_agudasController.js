// enfermedades_sub_agudasController.js
const EnfermedadesSubAgudasDAO = require('../daos/enfermedades_sub_agudasDAO');
const EnfermedadesSubAgudasDTO = require('../dtos/enfermedades_sub_agudasDTO');

class EnfermedadesSubAgudasController {
  static async getAllEnfermedadesSubAgudas(req, res) {
    try {
      const enfermedadesSubAgudas = await EnfermedadesSubAgudasDAO.getAllEnfermedadesSubAgudas();
      const enfermedadesSubAgudasDTO = enfermedadesSubAgudas.map(it => new EnfermedadesSubAgudasDTO(it.id_enfermedad_a,it.id_paciente,it.nombre_enfermedad,it.descripcion_enfermedad,it.fecha_diagnostico));
      res.json(enfermedadesSubAgudasDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = EnfermedadesSubAgudasController;
