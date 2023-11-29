// usuariosDAO.js
const db = require('../database');

class prescripcionesDAO {
  static getAllPrescripciones() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM prescripciones', (err, results) => {
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

module.exports = prescripcionesDAO;
