const db = require('../database');

class CitasDAO {
  static getAllCitas() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM citas', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Método para agregar una nueva cita
  static agregarCita(cita) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO citas SET ?', cita, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Agregar más métodos según sea necesario
}

module.exports = CitasDAO;
