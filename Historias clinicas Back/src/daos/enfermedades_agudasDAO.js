// enfermedades_agudasDAO.js
const db = require('../database');

class EnfermedadesAgudasDAO {
  static getAllEnfermedadesAgudas() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM enfermedades_agudas', (err, results) => {
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

module.exports = EnfermedadesAgudasDAO;
