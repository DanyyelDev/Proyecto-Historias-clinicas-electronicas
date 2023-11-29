// usuariosDAO.js
const db = require('../database');

class UsuariosDAO {
  static getAllUsuarios() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static autenticarUsuario(loginDTO) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM usuarios WHERE id = ?', [loginDTO.id], async (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          if (results.length > 0) {
            const match = await bcrypt.compare(loginDTO.contraseña, results[0].contraseña);
            if (match) {
              resolve({ success: true, user: results[0] });
            } else {
              resolve({ success: false, message: 'Contraseña incorrecta' });
            }
          } else {
            resolve({ success: false, message: 'Usuario no encontrado' });
          }
        }
      });
    });
  }

  // Agregar más métodos según sea necesario
}

module.exports = UsuariosDAO;