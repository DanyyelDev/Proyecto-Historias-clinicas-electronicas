// usuarios.js
const express = require('express');
const router = express.Router();
const EnfermedadesAgudasController = require('../controllers/enfermedades_agudasController');

router.get('/', EnfermedadesAgudasController.getAllEnfermedadesAgudas);

// Agregar más rutas según sea necesario

module.exports = router;
