// ResultadosLaboratorioDAO.js
const db = require('../database');

class ResultadosLaboratorioDAO {
  static getAllResultadosLaboratorio() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM resultados_laboratorio', (err, results) => {
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

module.exports = ResultadosLaboratorioDAO;
