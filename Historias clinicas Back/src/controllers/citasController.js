const CitasDAO = require('../daos/citasDAO');
const CitasDTO = require('../dtos/citasDTO');

class CitasController {
  static async getAllCitas(req, res) {
    try {
      const citas = await CitasDAO.getAllCitas();
      const citasDTO = citas.map(it => new CitasDTO(it.id_cita, it.id_paciente, it.fecha_cita, it.motivo_cita, it.estado, it.notas));
      res.json(citasDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Método para manejar la solicitud de agregar una nueva cita
  static async solicitarCita(req, res) {
    try {
      const nuevaCita = req.body; // Se espera que el frontend envíe los datos del formulario en el cuerpo de la solicitud
      const resultado = await CitasDAO.agregarCita(nuevaCita);
      res.json({ success: true, message: 'Cita agregada con éxito' });
    } catch (error) {
      console.error('Error al agregar la cita:', error);
      res.status(500).json({ success: false, message: 'Error al agregar la cita' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = CitasController;
