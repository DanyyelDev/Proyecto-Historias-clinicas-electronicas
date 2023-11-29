// historiasDAO.js
const db = require('../database');

class HistoriasDAO {
  static getAllHistorias() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM historias_clinicas', (err, results) => {
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

module.exports = HistoriasDAO;
