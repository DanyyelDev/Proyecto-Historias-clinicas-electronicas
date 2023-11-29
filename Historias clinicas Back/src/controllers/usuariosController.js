// usuariosController.js
const UsuariosDAO = require('../daos/usuariosDAO');
const UsuariosDTO = require('../dtos/usuariosDTO');

class UsuariosController {
  static async getAllUsuarios(req, res) {
    try {
      const usuarios = await UsuariosDAO.getAllUsuarios();
      const usuariosDTO = usuarios.map(user => new UsuariosDTO(user.id, user.nombre, user.email));
      res.json(usuariosDTO);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async autenticarUsuario(req, res) {
    try {
      const { id, contraseña } = req.body;

      // Verifica que se proporcionen tanto el ID como la contraseña
      if (!id || !contraseña) {
        return res.status(400).json({ error: 'Se requieren ID y contraseña' });
      }

      // Consulta el DAO para verificar las credenciales
      const usuario = await UsuariosDAO.autenticarUsuario(id, contraseña);

      if (usuario) {
        // Si las credenciales son válidas, puedes devolver los datos del usuario o un mensaje de éxito
        const usuarioDTO = new UsuariosDTO(usuario.id, usuario.nombre, usuario.email);
        res.json({ mensaje: 'Inicio de sesión exitoso', usuario: usuarioDTO });
      } else {
        // Si las credenciales no son válidas, devuelve un mensaje de error
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Agregar más métodos según sea necesario
}

module.exports = UsuariosController;
