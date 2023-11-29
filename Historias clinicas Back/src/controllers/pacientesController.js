// pacientesController.js
const PacientesDAO = require('../daos/pacientesDAO');
const PacientesDTO = require('../dtos/pacientesDTO');

class PacientesController {
  static async getAllPacientes(req, res) {
    try {
      const pacientes = await PacientesDAO.getAllPacientes();
      const pacientesDTO = pacientes.map(it => new PacientesDTO(it.nombre, it.apellido, it.fecha_nacimiento, it.genero, it.direccion, it.ciudad, it.estado, it.codigo_postal,
        it.telefono, it.correo_electronico, it.fecha_registro));
      res.json(pacientesDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async agregarPaciente(req, res) {
    try {
      // Obtener los datos del paciente del cuerpo de la solicitud
      const { nombre, apellido, fecha_nacimiento, genero, direccion, ciudad, estado, codigo_postal, telefono, correo_electronico, fecha_registro } = req.body;

      // Crear un objeto PacientesDTO con los datos del paciente
      const nuevoPaciente = new PacientesDTO(nombre, apellido, fecha_nacimiento, genero, direccion, ciudad, estado, codigo_postal, telefono, correo_electronico, fecha_registro);

      // Insertar el nuevo paciente en la base de datos
      await PacientesDAO.agregarPaciente(nuevoPaciente);

      res.status(201).json({ success: true, message: 'Paciente agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar el paciente:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = PacientesController;

