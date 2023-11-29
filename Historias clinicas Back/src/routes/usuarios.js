// usuarios.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

router.get('/', UsuariosController.getAllUsuarios);
router.post('/login', UsuariosController.autenticarUsuario); // Nueva ruta para la autenticación

// Agregar más rutas según sea necesario

module.exports = router;
