const db = require('../database');

class ImagenesMedicasDAO {
  static subirImagen(id_paciente, nombre_archivo, tipo_archivo, tamano_archivo) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO imagenes_medicas (id_paciente, nombre_archivo, tipo_archivo, tamano_archivo) VALUES (?, ?, ?, ?)',
        [id_paciente, nombre_archivo, tipo_archivo, tamano_archivo],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        }
      );
    });
  }

  // Agregar más métodos según sea necesario
}

module.exports = ImagenesMedicasDAO;