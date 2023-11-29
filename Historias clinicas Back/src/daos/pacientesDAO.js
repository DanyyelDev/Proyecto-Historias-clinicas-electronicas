// pacientesDAO.js
const db = require('../database');

class PacientesDAO {
  static getAllPacientes() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pacientes', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static agregarPaciente(paciente) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO pacientes SET ?', paciente, (err, results) => {
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

module.exports = PacientesDAO;
