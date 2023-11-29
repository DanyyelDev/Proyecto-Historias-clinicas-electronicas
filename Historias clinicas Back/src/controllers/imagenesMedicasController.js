const ImagenesMedicasDAO = require('../daos/imagenesMedicasDAO');
const ImagenesMedicasDTO = require('../dtos/imagenesMedicasDTO');

class ImagenesMedicasController {
  static async subirImagen(req, res) {
    try {
      const { id_paciente } = req.body;
      const { originalname, mimetype, size, buffer } = req.file;

      // Guardar la imagen en la base de datos y obtener el ID
      const id_imagen = await ImagenesMedicasDAO.subirImagen(id_paciente, originalname, mimetype, size);

      // Crear DTO para la respuesta
      const imagenDTO = new ImagenesMedicasDTO(id_imagen, id_paciente, originalname, mimetype, size, new Date());

      // Devolver el DTO como respuesta
      res.json(imagenDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = ImagenesMedicasController;
