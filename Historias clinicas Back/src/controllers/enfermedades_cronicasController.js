// usuariosController.js
const EnfermedadesCronicasDAO = require('../daos/enfermedades_cronicasDAO');
const EnfermedadesCronicasDTO = require('../dtos/enfermedades_cronicasDTO');

class EnfermedadesCronicasController {
  static async getAllEnfermedadesCronicas(req, res) {
    try {
      const enfermedadesCronicas = await EnfermedadesCronicasDAO.getAllEnfermedadesCronicas();
      const enfermedadesCronicasDTO = enfermedadesCronicas.map(it => new EnfermedadesCronicasDTO(it.id_enfermedad_a,it.id_paciente,it.nombre_enfermedad,it.descripcion_enfermedad,it.fecha_diagnostico));
      res.json(enfermedadesCronicasDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = EnfermedadesCronicasController;
