// enfermedades_cronicasDAO.js
const db = require('../database');

class EnfermedadesCronicasDAO {
  static getAllEnfermedadesCronicas() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM enfermedades_cronicas', (err, results) => {
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

module.exports = EnfermedadesCronicasDAO;
