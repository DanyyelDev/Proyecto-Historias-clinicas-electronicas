// enfermedades_sub_agudas.js
const express = require('express');
const router = express.Router();
const EnfermedadesSubAgudasController = require('../controllers/enfermedades_sub_agudasController');

router.get('/', EnfermedadesSubAgudasController.getAllEnfermedadesSubAgudas);

// Agregar más rutas según sea necesario

module.exports = router;
