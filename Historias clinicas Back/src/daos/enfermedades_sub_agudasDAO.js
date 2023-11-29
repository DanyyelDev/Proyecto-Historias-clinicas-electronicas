// enfermedades_sub_agudasDAO.js
const db = require('../database');

class EnfermedadesSubAgudasDAO {
  static getAllEnfermedadesSubAgudas() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM enfermedades_sub_agudas', (err, results) => {
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

module.exports = EnfermedadesSubAgudasDAO;
